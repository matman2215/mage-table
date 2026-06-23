const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { AccountStore } = require("./account-store");

const port = Number(process.env.PORT || 3000);
const publicDir = __dirname;
const rooms = new Map();
const accountStore = new AccountStore();
const scryfallCache = new Map();
const scryfallTokenSearchCache = new Map();
let lastScryfallRequestAt = 0;
const scryfallRequestTimeoutMs = 25000;
const scryfallMaxAttempts = 3;
const presenceTimeoutMs = 30000;
const phases = ["Untap", "Upkeep", "Draw", "Main 1", "Combat", "Main 2", "End"];

function id(prefix) {
  return `${prefix}-${crypto.randomBytes(5).toString("hex")}`;
}

function sendJson(res, status, data, headers = {}) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
    ...headers,
  });
  res.end(body);
}

function bearerToken(req) {
  const match = String(req.headers.authorization || "").match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function cookieValue(req, name) {
  const cookies = String(req.headers.cookie || "").split(";");
  for (const cookie of cookies) {
    const [key, ...parts] = cookie.trim().split("=");
    if (key === name) return decodeURIComponent(parts.join("="));
  }
  return "";
}

function sessionTokenFromRequest(req) {
  return cookieValue(req, "mage_table_session") || bearerToken(req);
}

function sessionCookie(req, token, maxAgeSeconds = 30 * 24 * 60 * 60) {
  const forwardedProto = firstForwardedValue(req.headers["x-forwarded-proto"]);
  const secure = forwardedProto === "https" || Boolean(req.socket.encrypted);
  const value = token ? encodeURIComponent(token) : "";
  return `mage_table_session=${value}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAgeSeconds}${secure ? "; Secure" : ""}`;
}

function authenticatedAccount(req, res) {
  const account = accountStore.accountForSession(sessionTokenFromRequest(req));
  if (!account) sendJson(res, 401, { error: "Sign in is required.", code: "AUTH_REQUIRED" });
  return account;
}

function sendSse(res, event, data) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
}

function broadcastRoomUpdate(room) {
  if (!room?.subscribers) return;
  const payload = {
    roomId: room.id,
    updateSeq: Number(room.updateSeq) || 0,
    eventSeq: Number(room.eventSeq) || 0,
  };
  for (const res of room.subscribers) {
    try {
      sendSse(res, "room-update", payload);
    } catch {
      room.subscribers.delete(res);
    }
  }
}

function presenceConnectionCount(room, seat) {
  return Number(room?.presenceConnections?.get(Number(seat))) || 0;
}

function playerIsPresent(room, player, now = Date.now()) {
  if (!player) return false;
  return presenceConnectionCount(room, player.seat) > 0
    || Number(player.presenceLastSeenAt) > now - presenceTimeoutMs;
}

function touchPresence(room, player, now = Date.now()) {
  if (!room || !player) return;
  player.presenceLastSeenAt = now;
}

function syncRoomClock(room, now = Date.now()) {
  if (!room?.clock) return;
  const clock = room.clock;
  const lastSyncAt = Number(clock.lastSyncAt) || now;
  const activePlayer = room.players[Number(room.activePlayer) || 0];
  const presentUntil = presenceConnectionCount(room, activePlayer?.seat) > 0
    ? now
    : Number(activePlayer?.presenceLastSeenAt) + presenceTimeoutMs;
  const activeElapsed = Math.max(0, Math.min(now, presentUntil) - lastSyncAt);
  if (clock.running && activeElapsed > 0 && activePlayer) {
    clock.totalMs = (Number(clock.totalMs) || 0) + activeElapsed;
    clock.currentTurnMs = (Number(clock.currentTurnMs) || 0) + activeElapsed;
    clock.playerMs[activePlayer.seat] = (Number(clock.playerMs[activePlayer.seat]) || 0) + activeElapsed;
  }
  clock.lastSyncAt = now;
}

function roomClockView(room, now = Date.now()) {
  syncRoomClock(room, now);
  const activePlayer = room.players[Number(room.activePlayer) || 0];
  return {
    running: Boolean(room.clock?.running),
    totalMs: Number(room.clock?.totalMs) || 0,
    currentTurnMs: Number(room.clock?.currentTurnMs) || 0,
    playerMs: [...(room.clock?.playerMs || [])],
    snapshotAt: now,
    activePresent: playerIsPresent(room, activePlayer, now),
    activeDeadlineAt: presenceConnectionCount(room, activePlayer?.seat) > 0
      ? now + presenceTimeoutMs
      : Number(activePlayer?.presenceLastSeenAt) + presenceTimeoutMs,
  };
}

function presencePayload(room, now = Date.now()) {
  return {
    roomId: room.id,
    clock: roomClockView(room, now),
    players: room.players.map((player) => ({
      seat: player.seat,
      isPresent: playerIsPresent(room, player, now),
      lastSeenAt: Number(player.presenceLastSeenAt) || 0,
    })),
  };
}

function broadcastPresence(room) {
  if (!room?.subscribers) return;
  const payload = presencePayload(room);
  for (const res of room.subscribers) {
    try {
      sendSse(res, "presence-update", payload);
    } catch {
      room.subscribers.delete(res);
    }
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function addLog(room, message, actor = null, detail = null) {
  const timestamp = Date.now();
  room.log.unshift({
    id: id("log"),
    message,
    timestamp,
    at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  room.log = room.log.slice(0, 80);
  if (!actor) return;
  room.eventSeq = (Number(room.eventSeq) || 0) + 1;
  room.events = room.events || [];
  room.events.push({
    id: id("event"),
    seq: room.eventSeq,
    turn: Number(room.turnNumber) || 1,
    activeSeat: Number(room.activePlayer) || 0,
    actorSeat: actor.seat,
    actorName: actor.name,
    message,
    detail,
    timestamp,
    at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  room.events = room.events.slice(-240);
}

function roomStateSnapshot(room) {
  return JSON.parse(JSON.stringify({
    activePlayer: room.activePlayer,
    updateSeq: room.updateSeq,
    phase: room.phase,
    prioritySeat: room.prioritySeat,
    priorityMode: room.priorityMode,
    combatSnapshot: room.combatSnapshot || null,
    diceNotice: room.diceNotice || null,
    reveals: room.reveals || [],
    turnNumber: room.turnNumber,
    eventSeq: room.eventSeq,
    events: room.events || [],
    playtestOpponent: room.playtestOpponent,
    settings: room.settings,
    stack: room.stack || [],
    chat: room.chat || [],
    log: room.log || [],
    statistics: room.statistics || { pending: [], commits: [], lastEventSeq: 0 },
    players: room.players || [],
  }));
}

function restoreRoomState(room, snapshot) {
  const livePresence = new Map((room.players || []).map((player) => [player.seat, Number(player.presenceLastSeenAt) || 0]));
  room.activePlayer = snapshot.activePlayer;
  room.updateSeq = snapshot.updateSeq;
  room.phase = snapshot.phase;
  room.prioritySeat = snapshot.prioritySeat;
  room.priorityMode = snapshot.priorityMode;
  room.combatSnapshot = snapshot.combatSnapshot || null;
  room.diceNotice = snapshot.diceNotice || null;
  room.reveals = snapshot.reveals || [];
  room.turnNumber = snapshot.turnNumber;
  room.eventSeq = snapshot.eventSeq;
  room.events = snapshot.events || [];
  room.playtestOpponent = snapshot.playtestOpponent;
  room.settings = snapshot.settings;
  room.stack = snapshot.stack || [];
  room.chat = snapshot.chat || [];
  room.log = snapshot.log || [];
  room.statistics = snapshot.statistics || { pending: [], commits: [], lastEventSeq: 0 };
  room.players = snapshot.players || [];
  room.players.forEach((player) => {
    player.presenceLastSeenAt = Math.max(Number(player.presenceLastSeenAt) || 0, livePresence.get(player.seat) || 0);
  });
}

function shouldTrackHistory(type) {
  return !["undo", "redo", "chat", "updateSettings", "diceRoll"].includes(type);
}

function applyDiceRoll(room, actor, body) {
  if (body.mode === "random") {
    const max = Math.max(0, Math.min(1_000_000, Math.round(Number(body.max) || 0)));
    const result = max === 0 ? 0 : crypto.randomInt(max + 1);
    const detail = {
      kind: "dice",
      mode: "random",
      max,
      result,
    };
    room.diceNotice = {
      id: id("dice"),
      seat: actor.seat,
      playerName: actor.name,
      ...detail,
      at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    addLog(room, `${actor.name} rolled random 0-${max}: ${result}.`, actor, detail);
    return;
  }

  const sides = Math.max(2, Math.min(1000, Math.round(Number(body.sides) || 20)));
  const count = Math.max(1, Math.min(20, Math.round(Number(body.count) || 1)));
  const rolls = Array.from({ length: count }, () => crypto.randomInt(1, sides + 1));
  const total = rolls.reduce((sum, value) => sum + value, 0);
  const totalText = count > 1 ? ` = ${total}` : "";
  const detail = {
    kind: "dice",
    mode: "dice",
    sides,
    count,
    rolls,
    total,
  };
  room.diceNotice = {
    id: id("dice"),
    seat: actor.seat,
    playerName: actor.name,
    ...detail,
    at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };
  addLog(room, `${actor.name} rolled ${count}d${sides}: ${rolls.join(", ")}${totalText}.`, actor, detail);
}

function hashRoomPassword(password, salt) {
  return crypto.scryptSync(String(password || ""), salt, 32);
}

function setRoomPassword(room, password) {
  const value = String(password || "").slice(0, 128);
  if (!value) return;
  room.passwordSalt = crypto.randomBytes(16).toString("hex");
  room.passwordHash = hashRoomPassword(value, room.passwordSalt).toString("hex");
}

function roomPasswordMatches(room, password) {
  if (!room?.passwordHash || !room.passwordSalt) return true;
  const expected = Buffer.from(room.passwordHash, "hex");
  const supplied = hashRoomPassword(password, room.passwordSalt);
  return expected.length === supplied.length && crypto.timingSafeEqual(expected, supplied);
}

function roomPasswordError(room, password) {
  if (!room?.passwordHash) return null;
  if (!password) return { status: 401, error: "This room requires a password.", code: "PASSWORD_REQUIRED" };
  if (!roomPasswordMatches(room, password)) return { status: 403, error: "That room password is incorrect.", code: "INVALID_PASSWORD" };
  return null;
}

function pushUndoSnapshot(room, snapshot) {
  room.undoStack = room.undoStack || [];
  room.redoStack = [];
  room.undoStack.push(snapshot);
  room.undoStack = room.undoStack.slice(-40);
}

function createRoom(name, playerCount, origin, password = "") {
  const createdAt = Date.now();
  const room = {
    id: id("room"),
    name,
    activePlayer: 0,
    updateSeq: 0,
    phase: phases[0],
    prioritySeat: 0,
    priorityMode: "turn",
    turnNumber: 1,
    eventSeq: 0,
    events: [],
    combatSnapshot: null,
    diceNotice: null,
    reveals: [],
    subscribers: new Set(),
    presenceConnections: new Map(),
    undoStack: [],
    redoStack: [],
    clock: {
      running: false,
      totalMs: 0,
      currentTurnMs: 0,
      playerMs: Array(playerCount).fill(0),
      lastSyncAt: createdAt,
    },
    statistics: {
      pending: [],
      commits: [],
      lastEventSeq: 0,
    },
    playtestOpponent: {
      name: "Playtest Opponent",
      commander: "Simulation",
      life: 40,
    },
    settings: {
      friendlyMulligans: true,
      darkMode: true,
    },
    stack: [],
    chat: [],
    log: [],
    players: Array.from({ length: playerCount }, (_, seat) => ({
      id: id("player"),
      token: id("seat"),
      seat,
      name: `Player ${seat + 1}`,
      commander: "",
      isHost: seat === 0,
      deckLoaded: false,
      deckStats: null,
      libraryPreview: null,
      mulliganPending: false,
      mulliganCount: 0,
      life: 40,
      commanderTax: 0,
      playerCounters: {},
      library: [],
      hand: [],
      commanderZone: [],
      battlefield: [],
      graveyard: [],
      exile: [],
      presenceLastSeenAt: seat === 0 ? createdAt : 0,
    })),
  };
  setRoomPassword(room, password);
  addLog(room, `${name} created with ${playerCount} seats.`);
  rooms.set(room.id, room);
  return viewRoom(room, room.players[0].token, origin);
}

function viewRoom(room, token, origin) {
  const currentPlayer = room.players.find((player) => player.token === token);
  if (!currentPlayer) return null;
  const now = Date.now();
  return {
    id: room.id,
    name: room.name,
    activePlayer: room.activePlayer,
    updateSeq: Number(room.updateSeq) || 0,
    phase: room.phase,
    prioritySeat: Number(room.prioritySeat ?? room.activePlayer) || 0,
    priorityMode: room.priorityMode || "turn",
    turnNumber: Number(room.turnNumber) || 1,
    eventSeq: Number(room.eventSeq) || 0,
    settings: room.settings || { friendlyMulligans: true, darkMode: true },
    passwordProtected: Boolean(room.passwordHash),
    currentSeat: currentPlayer.seat,
    selfUrl: `${origin}/?room=${encodeURIComponent(room.id)}&token=${encodeURIComponent(currentPlayer.token)}`,
    currentPlayer: {
      seat: currentPlayer.seat,
      name: currentPlayer.name,
      commander: currentPlayer.commander,
      isHost: currentPlayer.isHost,
      deckLoaded: currentPlayer.deckLoaded,
      deckStats: currentPlayer.deckStats,
      libraryPreview: currentPlayer.libraryPreview,
      library: currentPlayer.library,
      mulliganPending: Boolean(currentPlayer.mulliganPending),
      mulliganCount: Number(currentPlayer.mulliganCount) || 0,
    },
    hand: currentPlayer.hand,
    stack: room.stack,
    chat: room.chat,
    playtestOpponent: room.players.length === 1 ? room.playtestOpponent : null,
    combatSnapshot: room.priorityMode === "combat" ? room.combatSnapshot || null : null,
    diceNotice: room.diceNotice || null,
    reveals: (room.reveals || []).filter((reveal) => Number(reveal.expiresAt) > Date.now()),
    canUndo: Boolean(room.undoStack?.length),
    canRedo: Boolean(room.redoStack?.length),
    events: room.events || [],
    log: room.log,
    clock: roomClockView(room, now),
    statistics: {
      commits: room.statistics?.commits || [],
    },
    invites: currentPlayer.isHost
      ? room.players
          .filter((player) => player.seat !== currentPlayer.seat)
          .map((player) => ({
            seat: player.seat,
            name: player.name,
            url: `${origin}/?room=${encodeURIComponent(room.id)}&token=${encodeURIComponent(player.token)}`,
          }))
      : [],
    players: room.players.map((player) => ({
      seat: player.seat,
      name: player.name,
      commander: player.commander,
      deckLoaded: player.deckLoaded,
      deckStats: player.deckStats,
      life: player.life,
      commanderTax: Number(player.commanderTax) || 0,
      playerCounters: player.playerCounters || {},
      libraryCount: player.library.length,
      libraryPreview: player.libraryPreview?.mode === "reveal" && player.libraryPreview.cards?.length
        ? player.libraryPreview
        : null,
      handCount: player.hand.length,
      commanderZone: player.commanderZone,
      battlefield: player.battlefield,
      graveyard: player.graveyard,
      exile: player.exile,
      isPresent: playerIsPresent(room, player, now),
      lastSeenAt: Number(player.presenceLastSeenAt) || 0,
    })),
  };
}

function parseDeckList(text) {
  const entries = [];
  const errors = [];
  String(text || "")
    .split(/\r?\n/)
    .forEach((rawLine, index) => {
      const line = cleanDeckLine(rawLine);
      if (!line) return;
      const match = line.match(/^(?:SB:\s*)?(\d+)\s*[xX]?\s+(.+)$/i);
      if (!match) {
        errors.push(`Line ${index + 1}: expected quantity then card name.`);
        return;
      }
      const count = Number(match[1]);
      const name = normalizeCardName(match[2]);
      if (!Number.isInteger(count) || count <= 0) {
        errors.push(`Line ${index + 1}: invalid quantity.`);
        return;
      }
      if (!name) {
        errors.push(`Line ${index + 1}: missing card name.`);
        return;
      }
      entries.push({ count, name });
    });
  return { entries, errors };
}

function cleanDeckLine(rawLine) {
  return String(rawLine || "")
    .replace(/^\s*(commander|deck|sideboard|maybeboard)\s*:?\s*$/i, "")
    .replace(/\s+#.*$/, "")
    .trim();
}

function normalizeCardName(rawName) {
  return String(rawName || "")
    .replace(/\s+\[[^\]]+\]\s*$/g, "")
    .replace(/\s+\*[A-Z]*\*\s*$/i, "")
    .replace(/\s+\{[^}]+\}\s*$/g, "")
    .replace(/\s+\([A-Z0-9]{2,6}\)(?:\s+\d+[a-z]?)?\s*$/i, "")
    .replace(/\s+[A-Z0-9]{2,6}-?\d+[a-z]?\s*$/i, "")
    .trim();
}

function cardImages(card) {
  const imageSource = card.image_uris || card.card_faces?.find((face) => face.image_uris)?.image_uris;
  return {
    small: imageSource?.small || "",
    normal: imageSource?.normal || "",
    large: imageSource?.large || "",
    artCrop: imageSource?.art_crop || "",
  };
}

async function fetchScryfallCard(name) {
  const key = name.toLowerCase();
  if (scryfallCache.has(key)) return scryfallCache.get(key);
  let response = await requestScryfallNamed("exact", name);
  throwForScryfallServiceError(response);
  if (!response.ok) {
    response = await requestScryfallNamed("fuzzy", name);
    throwForScryfallServiceError(response);
  }
  if (!response.ok) throw new Error(`Scryfall could not find "${name}".`);
  const card = await response.json();
  const summary = summarizeScryfallCard(card);
  scryfallCache.set(key, summary);
  return summary;
}

function summarizeScryfallCard(card) {
  const faces = (card.card_faces || [])
    .map((face) => {
      const images = cardImages(face);
      return {
        name: face.name || card.name,
        typeLine: face.type_line || "",
        manaCost: face.mana_cost || "",
        oracleText: face.oracle_text || "",
        imageUrl: images.normal || images.small || "",
        artUrl: images.artCrop || "",
        isLand: /\bLand\b/.test(face.type_line || ""),
        power: face.power || "",
        toughness: face.toughness || "",
      };
    })
    .filter((face) => face.imageUrl);
  const frontFace = faces[0] || null;
  const summary = {
    scryfallId: card.id,
    name: card.name,
    displayName: frontFace?.name || card.name,
    typeLine: frontFace?.typeLine || card.type_line || "",
    manaCost: frontFace?.manaCost || card.mana_cost || "",
    manaValue: Number(card.cmc) || 0,
    oracleText: frontFace?.oracleText || card.oracle_text || card.card_faces?.map((face) => face.oracle_text).filter(Boolean).join("\n---\n") || "",
    images: cardImages(card),
    faces: faces.length > 1 ? faces : [],
    isLand: frontFace ? frontFace.isLand : /\bLand\b/.test(card.type_line || ""),
    power: frontFace?.power || card.power || "",
    toughness: frontFace?.toughness || card.toughness || "",
  };
  return summary;
}

function requestScryfallNamed(mode, name) {
  const url = `https://api.scryfall.com/cards/named?${mode}=${encodeURIComponent(name)}`;
  return throttledScryfallFetch(url);
}

async function throttledScryfallFetch(url, options = {}, attempt = 1) {
  const elapsed = Date.now() - lastScryfallRequestAt;
  if (elapsed < 100) {
    await sleep(100 - elapsed);
  }
  lastScryfallRequestAt = Date.now();
  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Agent": "MageTablePrototype/0.1",
        ...(options.headers || {}),
      },
      signal: AbortSignal.timeout(scryfallRequestTimeoutMs),
    });
  } catch (error) {
    if (attempt < scryfallMaxAttempts) {
      await sleep(500 * (2 ** (attempt - 1)));
      return throttledScryfallFetch(url, options, attempt + 1);
    }
    throw scryfallUnavailableError(error);
  }
  if ((response.status === 429 || response.status >= 500) && attempt < scryfallMaxAttempts) {
    const retryAfter = Number(response.headers.get("retry-after"));
    const delay = Number.isFinite(retryAfter)
      ? Math.max(250, Math.min(5000, retryAfter * 1000))
      : 500 * (2 ** (attempt - 1));
    await sleep(delay);
    return throttledScryfallFetch(url, options, attempt + 1);
  }
  return response;
}

function scryfallUnavailableError(cause = null) {
  const error = new Error("Scryfall is taking too long to respond. No cards were imported; please try loading the deck again.");
  error.code = "SCRYFALL_UNAVAILABLE";
  if (cause) error.cause = cause;
  return error;
}

function throwForScryfallServiceError(response) {
  if (response.status === 429 || response.status >= 500) throw scryfallUnavailableError();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchScryfallCollection(names) {
  const results = new Map();
  const pendingNames = [];
  names.forEach((name) => {
    const cached = scryfallCache.get(name.toLowerCase());
    if (cached) results.set(name.toLowerCase(), cached);
    else pendingNames.push(name);
  });
  for (let i = 0; i < pendingNames.length; i += 75) {
    const chunk = pendingNames.slice(i, i + 75);
    const response = await throttledScryfallFetch("https://api.scryfall.com/cards/collection", {
      method: "POST",
      body: JSON.stringify({
        identifiers: chunk.map((name) => ({ name })),
      }),
    });
    throwForScryfallServiceError(response);
    if (!response.ok) continue;
    const payload = await response.json();
    for (const card of payload.data || []) {
      const summary = summarizeScryfallCard(card);
      addCollectionAliases(results, card, summary);
    }
  }
  return results;
}

async function searchScryfallTokens(query) {
  const searchText = String(query || "").trim().slice(0, 120);
  const cacheKey = searchText.toLowerCase();
  if (scryfallTokenSearchCache.has(cacheKey)) return scryfallTokenSearchCache.get(cacheKey);
  const scryfallQuery = ["is:token", "type:creature", searchText].filter(Boolean).join(" ");
  const url = `https://api.scryfall.com/cards/search?order=name&unique=prints&q=${encodeURIComponent(scryfallQuery)}`;
  const response = await throttledScryfallFetch(url);
  if (!response.ok) {
    if (response.status === 404) return [];
    throw new Error("Scryfall token search failed");
  }
  const payload = await response.json();
  const cards = (payload.data || [])
    .filter((card) => card.layout === "token" || /Token/i.test(card.type_line || ""))
    .slice(0, 36)
    .map(summarizeScryfallCard);
  scryfallTokenSearchCache.set(cacheKey, cards);
  return cards;
}

function addCollectionAliases(results, card, summary) {
  const aliases = [card.name, summary.name];
  for (const face of card.card_faces || []) {
    if (face.name) aliases.push(face.name);
  }
  for (const alias of aliases) {
    results.set(alias.toLowerCase(), summary);
    scryfallCache.set(alias.toLowerCase(), summary);
  }
}

async function buildDeck(text, ownerSeat) {
  const parsed = parseDeckList(text);
  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors.slice(0, 5).join(" "));
  }

  const cards = [];
  const notFound = [];
  const unique = [];
  const byName = new Map();
  const requestedNames = [...new Set(parsed.entries.map((entry) => entry.name))];
  const batchCards = await fetchScryfallCollection(requestedNames);
  let total = 0;
  let land = 0;
  let nonland = 0;

  for (const entry of parsed.entries) {
    let cardData = batchCards.get(entry.name.toLowerCase());
    if (!cardData) {
      try {
        cardData = await fetchScryfallCard(entry.name);
      } catch (error) {
        if (error.code === "SCRYFALL_UNAVAILABLE") throw error;
        cardData = null;
      }
    }
    if (!cardData) {
      notFound.push(entry.name);
      cardData = {
        scryfallId: "",
        name: entry.name,
        typeLine: "",
        manaCost: "",
        manaValue: 0,
        oracleText: "",
        images: {},
        faces: [],
        isLand: false,
        power: "",
        toughness: "",
      };
    }

    total += entry.count;
    if (cardData.isLand) land += entry.count;
    else nonland += entry.count;

    byName.set(cardData.name, (byName.get(cardData.name) || 0) + entry.count);

    for (let i = 0; i < entry.count; i += 1) {
      const frontFace = cardData.faces?.[0] || null;
      cards.push({
        id: id("card"),
        name: cardData.name,
        displayName: frontFace?.name || cardData.displayName || cardData.name,
        typeLine: cardData.typeLine,
        manaCost: cardData.manaCost,
        manaValue: Number(cardData.manaValue) || manaValueFromCost(cardData.manaCost),
        oracleText: cardData.oracleText,
        imageUrl: frontFace?.imageUrl || cardData.images.normal || cardData.images.small || "",
        artUrl: frontFace?.artUrl || cardData.images.artCrop || "",
        faces: cardData.faces || [],
        faceIndex: 0,
        isLand: cardData.isLand,
        power: cardData.power || "",
        toughness: cardData.toughness || "",
        tapped: false,
        owner: ownerSeat,
        counters: emptyCounters(),
      });
    }
  }

  for (const [name, count] of byName.entries()) {
    unique.push({ name, count });
  }

  return {
    cards,
    stats: {
      total,
      land,
      nonland,
      unique: unique.length,
      notFound,
      entries: unique.sort((a, b) => a.name.localeCompare(b.name)),
    },
  };
}

function shuffle(cards) {
  const copy = [...cards];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = crypto.randomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepareForNonBattlefield(card) {
  if (!card) return card;
  applyCardFace(card, 0);
  card.tapped = false;
  card.counters = emptyCounters();
  delete card.attachedTo;
  delete card.attachmentIndex;
  delete card.position;
  return card;
}

function applyCardFace(card, requestedIndex) {
  const faces = Array.isArray(card?.faces) ? card.faces : [];
  if (faces.length < 2) return card;
  const faceIndex = Math.max(0, Math.min(faces.length - 1, Number(requestedIndex) || 0));
  const face = faces[faceIndex];
  card.faceIndex = faceIndex;
  card.displayName = face.name || card.name;
  card.typeLine = face.typeLine || "";
  card.manaCost = face.manaCost || "";
  card.oracleText = face.oracleText || "";
  card.imageUrl = face.imageUrl || card.imageUrl || "";
  card.artUrl = face.artUrl || "";
  card.isLand = Boolean(face.isLand);
  card.power = face.power || "";
  card.toughness = face.toughness || "";
  return card;
}

function flipOwnedCard(actor, zone, cardId) {
  const targetZone = getOwnedZone(actor, actor, zone);
  const card = targetZone.find((item) => item.id === cardId);
  if (!card) throw new Error("Card not found");
  if (!Array.isArray(card.faces) || card.faces.length < 2) throw new Error("That card does not have another face.");
  const nextFace = (Number(card.faceIndex) + 1) % card.faces.length;
  return applyCardFace(card, nextFace);
}

function getPublicZone(player, zone) {
  if (!["commanderZone", "battlefield", "graveyard", "exile"].includes(zone)) {
    throw new Error("That zone is not public");
  }
  return player[zone];
}

function getOwnedZone(actor, target, zone) {
  if (target.seat !== actor.seat && ["hand", "library"].includes(zone)) {
    throw new Error("You cannot access another player's private zone");
  }
  if (zone === "hand" || zone === "library") return target[zone];
  return getPublicZone(target, zone);
}

function moveCard(actor, target, fromZone, toZone, cardId, destinationPlayer = target, position = null) {
  const source = getOwnedZone(actor, target, fromZone);
  const destination = getOwnedZone(actor, destinationPlayer, toZone);
  const index = source.findIndex((card) => card.id === cardId);
  if (index === -1) throw new Error("Card not found");
  const [card] = source.splice(index, 1);
  if (fromZone === "library" && target.libraryPreview) {
    target.libraryPreview.cards = target.libraryPreview.cards.filter((item) => item.id !== cardId);
    if (target.libraryPreview.cards.length === 0) target.libraryPreview = null;
  }
  if (fromZone === "commanderZone") card.isCommander = true;
  if (toZone === "commanderZone" && !isCommanderCard(destinationPlayer, card)) {
    source.splice(index, 0, card);
    throw new Error("Only the specified commander can be moved to the command zone.");
  }
  if (toZone === "battlefield") {
    if (fromZone !== "battlefield") {
      card.tapped = false;
      card.counters = emptyCounters();
      delete card.attachedTo;
      delete card.attachmentIndex;
    }
    card.position = clampPosition(position || card.position || nextBattlefieldPosition(destination.length));
  } else {
    prepareForNonBattlefield(card);
  }
  if (toZone === "library") destination.unshift(card);
  else destination.push(card);
  return card;
}

function moveMultipleCards(actor, target, fromZone, toZone, cards, destinationPlayer = target) {
  const entries = (Array.isArray(cards) ? cards : [])
    .map((entry) => ({
      cardId: String(entry?.cardId || ""),
      position: entry?.position || null,
    }))
    .filter((entry) => entry.cardId)
    .slice(0, 120);
  if (!entries.length) throw new Error("No cards selected");
  const orderedEntries = toZone === "library" ? [...entries].reverse() : entries;
  return orderedEntries.map((entry) => moveCard(actor, target, fromZone, toZone, entry.cardId, destinationPlayer, entry.position));
}

function tapBattlefieldCards(actor, target, cardIds, mode = "toggle") {
  const ids = [...new Set((Array.isArray(cardIds) ? cardIds : []).map((cardId) => String(cardId || "")).filter(Boolean))].slice(0, 120);
  if (!ids.length) throw new Error("No cards selected");
  const zone = getPublicZone(target, "battlefield");
  const cards = ids.map((cardId) => {
    const card = zone.find((item) => item.id === cardId);
    if (!card) throw new Error("Card not found");
    return card;
  });
  const shouldTap = mode === "tap" ? true : mode === "untap" ? false : cards.some((card) => !card.tapped);
  cards.forEach((card) => {
    card.tapped = shouldTap;
    card.position = clampPosition(card.position, card.tapped);
  });
  return { cards, tapped: shouldTap };
}

function arrangeBattlefieldCards(actor, cards) {
  const entries = (Array.isArray(cards) ? cards : [])
    .map((entry) => ({
      cardId: String(entry?.cardId || ""),
      position: entry?.position || null,
      attachedTo: entry?.attachedTo ? String(entry.attachedTo) : "",
      attachmentIndex: Math.max(0, Math.min(40, Number(entry?.attachmentIndex) || 0)),
      clearAttachment: Boolean(entry?.clearAttachment),
    }))
    .filter((entry) => entry.cardId)
    .slice(0, 120);
  if (!entries.length) throw new Error("No cards selected");
  const arranged = [];
  for (const entry of entries) {
    const card = actor.battlefield.find((item) => item.id === entry.cardId);
    if (!card) throw new Error("Card not found");
    if (entry.position) card.position = clampPosition(entry.position, card.tapped);
    if (entry.attachedTo) {
      card.attachedTo = entry.attachedTo;
      card.attachmentIndex = entry.attachmentIndex;
    } else if (entry.clearAttachment) {
      delete card.attachedTo;
      delete card.attachmentIndex;
    }
    arranged.push(card);
  }
  return arranged;
}

function emptyCounters() {
  return {
    powerToughness: 0,
    power: 0,
    toughness: 0,
    creatureQuantity: 0,
    plusOne: 0,
    minusOne: 0,
    plusX: {},
    minusX: {},
  };
}

function normalizeCounters(counters = {}) {
  const legacyTotal = legacyCounterTotal(counters);
  return {
    powerToughness: Number(counters.powerToughness) || legacyTotal,
    power: Number(counters.power) || 0,
    toughness: Number(counters.toughness) || 0,
    creatureQuantity: Math.max(0, Number(counters.creatureQuantity) || 0),
    plusOne: Math.max(0, Number(counters.plusOne) || 0),
    minusOne: Math.max(0, Number(counters.minusOne) || 0),
    plusX: normalizeCounterMap(counters.plusX),
    minusX: normalizeCounterMap(counters.minusX),
  };
}

function legacyCounterTotal(counters = {}) {
  let total = 0;
  total += Number(counters.plusOne) || 0;
  total -= Number(counters.minusOne) || 0;
  Object.entries(counters.plusX || {}).forEach(([value, count]) => {
    total += (Number(value) || 0) * (Number(count) || 0);
  });
  Object.entries(counters.minusX || {}).forEach(([value, count]) => {
    total -= (Number(value) || 0) * (Number(count) || 0);
  });
  return total;
}

function normalizeCounterMap(map = {}) {
  return Object.fromEntries(
    Object.entries(map)
      .map(([value, count]) => [String(Math.max(1, Math.min(99, Number(value) || 1))), Math.max(0, Number(count) || 0)])
      .filter(([, count]) => count > 0),
  );
}

function copyBattlefieldToken(actor, cardId, position = null) {
  const source = actor.battlefield.find((card) => card.id === cardId);
  if (!source) throw new Error("Card not found");
  const token = {
    ...source,
    id: id("token"),
    name: `${source.name} Token`,
    owner: actor.seat,
    tapped: false,
    isToken: true,
    tokenSourceId: source.id,
    counters: emptyCounters(),
    position: clampPosition(position || offsetPosition(source.position) || nextBattlefieldPosition(actor.battlefield.length)),
  };
  actor.battlefield.push(token);
  return token;
}

function createBattlefieldToken(actor, tokenData = {}, position = null) {
  const name = String(tokenData.name || "Token").trim().slice(0, 80) || "Token";
  const power = String(tokenData.power || "").trim().slice(0, 8);
  const toughness = String(tokenData.toughness || "").trim().slice(0, 8);
  const printedType = String(tokenData.typeLine || "").trim().slice(0, 140);
  const typeLine = printedType || "Token Creature";
  const token = {
    id: id("token"),
    name,
    typeLine,
    manaCost: "",
    oracleText: String(tokenData.oracleText || "").trim().slice(0, 1200),
    imageUrl: String(tokenData.imageUrl || "").trim(),
    artUrl: String(tokenData.artUrl || "").trim(),
    isLand: false,
    tapped: false,
    owner: actor.seat,
    isToken: true,
    power,
    toughness,
    counters: emptyCounters(),
    position: clampPosition(position || nextBattlefieldPosition(actor.battlefield.length)),
  };
  actor.battlefield.push(token);
  return token;
}

function offsetPosition(position) {
  if (!position) return null;
  const x = Number(position.x);
  const y = Number(position.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return { x: x + 28, y: y + 28, unit: position.unit || "px" };
}

function adjustBattlefieldCounter(actor, cardId, counterType, value = 1, delta = 1) {
  const card = actor.battlefield.find((item) => item.id === cardId);
  if (!card) throw new Error("Card not found");
  card.counters = normalizeCounters(card.counters);
  const amount = Math.max(-20, Math.min(20, Number(delta) || 1));
  const xValue = String(Math.max(1, Math.min(99, Number(value) || 1)));
  if (counterType === "powerToughness" || counterType === "pt") {
    card.counters.powerToughness = Math.max(-99, Math.min(99, card.counters.powerToughness + amount));
    card.counters.plusOne = 0;
    card.counters.minusOne = 0;
    card.counters.plusX = {};
    card.counters.minusX = {};
  } else if (counterType === "power") {
    card.counters.power = Math.max(-99, Math.min(99, card.counters.power + amount));
  } else if (counterType === "toughness") {
    card.counters.toughness = Math.max(-99, Math.min(99, card.counters.toughness + amount));
  } else if (counterType === "creatureQuantity") {
    const current = Math.max(1, Number(card.counters.creatureQuantity) || 1);
    const next = Math.max(1, Math.min(999, current + amount));
    card.counters.creatureQuantity = next === 1 ? 0 : next;
  } else if (counterType === "plusOne") card.counters.plusOne = Math.max(0, card.counters.plusOne + amount);
  else if (counterType === "minusOne") card.counters.minusOne = Math.max(0, card.counters.minusOne + amount);
  else if (counterType === "plusX") {
    card.counters.plusX[xValue] = Math.max(0, (card.counters.plusX[xValue] || 0) + amount);
    if (card.counters.plusX[xValue] === 0) delete card.counters.plusX[xValue];
  } else if (counterType === "minusX") {
    card.counters.minusX[xValue] = Math.max(0, (card.counters.minusX[xValue] || 0) + amount);
    if (card.counters.minusX[xValue] === 0) delete card.counters.minusX[xValue];
  } else if (counterType === "clear") {
    card.counters = emptyCounters();
  } else {
    throw new Error("Invalid counter type");
  }
  return card;
}

function adjustPlayerCounter(player, counterName, delta = 1) {
  const name = String(counterName || "").trim().slice(0, 96);
  if (!name) throw new Error("Counter name is required.");
  const amount = Math.max(-20, Math.min(20, Number(delta) || 1));
  player.playerCounters = player.playerCounters || {};
  const previousValue = Number(player.playerCounters[name]) || 0;
  const nextValue = Math.max(0, Math.min(999, previousValue + amount));
  if (nextValue === 0) delete player.playerCounters[name];
  else player.playerCounters[name] = nextValue;
  return { name, value: nextValue, deltaApplied: nextValue - previousValue };
}

function isCommanderDamageCounterName(name) {
  return /^Commander Damage\b/i.test(String(name || "").trim());
}

function adjustCommanderTax(player, delta = 1) {
  const amount = Math.max(-20, Math.min(20, Number(delta) || 1));
  player.commanderTax = Math.max(0, Math.min(99, (Number(player.commanderTax) || 0) + amount));
  return player.commanderTax;
}

function removeBattlefieldToken(actor, cardId) {
  const index = actor.battlefield.findIndex((card) => card.id === cardId);
  if (index === -1) throw new Error("Card not found");
  const card = actor.battlefield[index];
  if (!card.isToken) throw new Error("Only token copies can be removed completely.");
  actor.battlefield.splice(index, 1);
  return card;
}

function isCommanderCard(player, card) {
  if (card.isCommander && card.owner === player.seat) return true;
  const commander = String(player.commander || "").trim().toLowerCase();
  const cardName = String(card.name || "").trim().toLowerCase();
  if (!commander || !cardName) return false;
  return cardName === commander || cardName.split(" // ").some((face) => face.trim() === commander);
}

function clampPosition(position, isTapped = false) {
  if (position?.unit === "px") {
    return {
      x: Math.max(0, Math.min(10000, Math.round(Number(position.x) || 0))),
      y: Math.max(0, Math.min(10000, Math.round(Number(position.y) || 0))),
      unit: "px",
    };
  }
  const x = Math.max(0, Math.min(86, Number(position?.x) || 4));
  const y = Math.max(0, Math.min(62, Number(position?.y) || 8));
  return {
    x,
    y,
  };
}

function nextBattlefieldPosition(count) {
  const column = count % 8;
  const row = Math.floor(count / 8) % 5;
  return {
    x: 12 + column * 96,
    y: 12 + row * 132,
    unit: "px",
  };
}

function stackFromZone(room, actor, target, fromZone, cardId) {
  const source = getOwnedZone(actor, target, fromZone);
  const index = source.findIndex((card) => card.id === cardId);
  if (index === -1) throw new Error("Card not found");
  const [card] = source.splice(index, 1);
  room.stack.push(card);
  return card;
}

function drawCards(player, count) {
  const drawn = player.library.splice(0, Math.min(count, player.library.length));
  drawn.forEach(prepareForNonBattlefield);
  player.hand.push(...drawn);
  player.libraryPreview = null;
  return drawn;
}

function drawOpeningHand(player, count = 7) {
  const drawn = player.library.splice(0, Math.min(count, player.library.length));
  drawn.forEach(prepareForNonBattlefield);
  player.hand = drawn;
  player.libraryPreview = null;
  return drawn;
}

function mulliganPlayer(room, actor) {
  if (!actor.deckLoaded) throw new Error("Load a deck before taking a mulligan.");
  actor.hand.forEach(prepareForNonBattlefield);
  actor.library.push(...actor.hand);
  actor.hand = [];
  actor.library = shuffle(actor.library);
  const friendlyMulligans = room.settings?.friendlyMulligans !== false;
  const handSize = friendlyMulligans ? 7 : Math.max(1, 7 - Math.max(0, actor.mulliganCount));
  const drawn = drawOpeningHand(actor, handSize);
  actor.mulliganCount = (Number(actor.mulliganCount) || 0) + 1;
  actor.mulliganPending = true;
  addLog(room, `${actor.name} took a mulligan and drew ${drawn.length} card${drawn.length === 1 ? "" : "s"}.`, actor);
}

async function pullCommanderCard(cards, commanderName, ownerSeat) {
  const name = String(commanderName || "").trim();
  if (!name) return [];
  const normalized = name.toLowerCase();
  const index = cards.findIndex((card) => {
    const cardName = card.name.toLowerCase();
    return cardName === normalized || cardName.split(" // ").some((face) => face === normalized);
  });
  if (index !== -1) {
    const [card] = cards.splice(index, 1);
    card.isCommander = true;
    return [card];
  }
  try {
    const cardData = await fetchScryfallCard(name);
    const frontFace = cardData.faces?.[0] || null;
    return [{
      id: id("card"),
      name: cardData.name,
      displayName: frontFace?.name || cardData.displayName || cardData.name,
      typeLine: cardData.typeLine,
      manaCost: cardData.manaCost,
      oracleText: cardData.oracleText,
      imageUrl: frontFace?.imageUrl || cardData.images.normal || cardData.images.small || "",
      artUrl: frontFace?.artUrl || cardData.images.artCrop || "",
      faces: cardData.faces || [],
      faceIndex: 0,
      isLand: cardData.isLand,
      power: cardData.power || "",
      toughness: cardData.toughness || "",
      tapped: false,
      owner: ownerSeat,
      isCommander: true,
      counters: emptyCounters(),
    }];
  } catch {
    return [{
      id: id("card"),
      name,
      displayName: name,
      typeLine: "Commander",
      manaCost: "",
      oracleText: "",
      imageUrl: "",
      artUrl: "",
      faces: [],
      faceIndex: 0,
      isLand: false,
      power: "",
      toughness: "",
      tapped: false,
      owner: ownerSeat,
      isCommander: true,
      counters: emptyCounters(),
    }];
  }
}

function applyLibraryAction(room, actor, body) {
  const count = Math.max(1, Math.min(20, Number(body.count) || 1));
  switch (body.mode) {
    case "shuffle": {
      actor.library = shuffle(actor.library);
      actor.libraryPreview = null;
      addLog(room, `${actor.name} shuffled their library.`, actor);
      break;
    }
    case "draw": {
      const drawn = drawCards(actor, count);
      addLog(room, `${actor.name} drew ${drawn.length} card${drawn.length === 1 ? "" : "s"}.`, actor);
      break;
    }
    case "mill": {
      const milled = actor.library.splice(0, Math.min(count, actor.library.length));
      milled.forEach(prepareForNonBattlefield);
      actor.graveyard.push(...milled);
      actor.libraryPreview = null;
      addLog(room, `${actor.name} milled ${milled.length} card${milled.length === 1 ? "" : "s"}.`, actor);
      break;
    }
    case "reveal": {
      const revealed = actor.library.slice(0, Math.min(count, actor.library.length));
      actor.libraryPreview = { mode: "reveal", cards: revealed };
      addLog(room, `${actor.name} revealed the top ${revealed.length} card${revealed.length === 1 ? "" : "s"} of their library.`, actor);
      break;
    }
    case "scry":
    case "surveil": {
      const cards = actor.library.slice(0, Math.min(count, actor.library.length));
      actor.libraryPreview = { mode: body.mode, cards };
      addLog(room, `${actor.name} ${body.mode === "scry" ? "scried" : "surveilled"} ${cards.length}.`, actor);
      break;
    }
    case "search": {
      const query = String(body.query || "").trim().toLowerCase();
      if (!query) throw new Error("Search text is required");
      const index = actor.library.findIndex((card) => card.name.toLowerCase().includes(query));
      if (index === -1) throw new Error("No matching card found in library");
      const [card] = actor.library.splice(index, 1);
      prepareForNonBattlefield(card);
      actor.hand.push(card);
      actor.library = shuffle(actor.library);
      actor.libraryPreview = null;
      addLog(room, `${actor.name} searched their library for a card, put it into hand, and shuffled.`, actor);
      break;
    }
    case "searchById": {
      const index = actor.library.findIndex((card) => card.id === body.cardId);
      if (index === -1) throw new Error("No matching card found in library");
      const [card] = actor.library.splice(index, 1);
      const destination = String(body.destination || "hand");
      if (destination === "battlefield") {
        card.tapped = false;
        card.position = clampPosition(nextBattlefieldPosition(actor.battlefield.length));
        actor.battlefield.push(card);
      } else if (destination === "graveyard") {
        prepareForNonBattlefield(card);
        actor.graveyard.push(card);
      } else {
        prepareForNonBattlefield(card);
        actor.hand.push(card);
      }
      actor.library = shuffle(actor.library);
      actor.libraryPreview = null;
      addLog(room, `${actor.name} searched their library for a card, put it into ${destination}, and shuffled.`, actor);
      break;
    }
    default:
      throw new Error("Unknown library action");
  }
}

function applyUndo(room, actor) {
  room.undoStack = room.undoStack || [];
  room.redoStack = room.redoStack || [];
  const previous = room.undoStack.pop();
  if (!previous) throw new Error("Nothing to undo.");
  const current = roomStateSnapshot(room);
  room.redoStack.push(current);
  room.redoStack = room.redoStack.slice(-40);
  restoreRoomState(room, previous);
  addLog(room, `${actor.name} undid the last table action.`, actor);
}

function applyRedo(room, actor) {
  room.undoStack = room.undoStack || [];
  room.redoStack = room.redoStack || [];
  const next = room.redoStack.pop();
  if (!next) throw new Error("Nothing to redo.");
  const current = roomStateSnapshot(room);
  room.undoStack.push(current);
  room.undoStack = room.undoStack.slice(-40);
  restoreRoomState(room, next);
  addLog(room, `${actor.name} redid the table action.`, actor);
}

function applyPreviewCardAction(room, actor, body) {
  if (!actor.libraryPreview) throw new Error("No active library preview");
  const cardId = body.cardId;
  const index = actor.library.findIndex((card) => card.id === cardId);
  if (index === -1) throw new Error("Card not found");
  const [card] = actor.library.splice(index, 1);
  if (body.destination === "bottom") {
    prepareForNonBattlefield(card);
    actor.library.push(card);
  }
  else if (body.destination === "hand") {
    prepareForNonBattlefield(card);
    actor.hand.push(card);
  }
  else if (body.destination === "battlefield") {
    card.tapped = false;
    card.position = clampPosition(nextBattlefieldPosition(actor.battlefield.length));
    actor.battlefield.push(card);
  }
  else if (body.destination === "exile") {
    prepareForNonBattlefield(card);
    actor.exile.push(card);
  }
  else if (body.destination === "graveyard") {
    prepareForNonBattlefield(card);
    actor.graveyard.push(card);
  }
  else {
    prepareForNonBattlefield(card);
    actor.library.unshift(card);
  }
  actor.libraryPreview.cards = actor.libraryPreview.cards.filter((item) => item.id !== cardId);
  if (actor.libraryPreview.cards.length === 0) actor.libraryPreview = null;
  const destination = ["hand", "battlefield", "graveyard", "exile"].includes(body.destination)
    ? body.destination
    : `${body.destination || "top"} of library`;
  addLog(room, `${actor.name} moved a previewed card to ${destination}.`, actor, {
    kind: "move",
    cardName: card.name,
    fromZone: "library preview",
    toZone: destination,
    position: card.position || null,
    tapped: Boolean(card.tapped),
  });
}

function reorderLibraryPreview(room, actor, body) {
  if (!actor.libraryPreview?.cards?.length) throw new Error("No active library preview");
  const cardId = body.cardId;
  const beforeCardId = body.beforeCardId;
  const cards = [...actor.libraryPreview.cards];
  const fromIndex = cards.findIndex((card) => card.id === cardId);
  if (fromIndex === -1) throw new Error("Card not found in preview");
  const [card] = cards.splice(fromIndex, 1);
  const beforeIndex = beforeCardId ? cards.findIndex((item) => item.id === beforeCardId) : -1;
  if (beforeIndex === -1) cards.push(card);
  else cards.splice(beforeIndex, 0, card);
  actor.libraryPreview.cards = cards;
  const previewIds = new Set(cards.map((item) => item.id));
  const remaining = actor.library.filter((item) => !previewIds.has(item.id));
  actor.library = [...cards, ...remaining];
  addLog(room, `${actor.name} reordered their library preview.`, actor);
}

function assertActivePlayer(room, actor) {
  if (room.players[room.activePlayer]?.seat !== actor.seat) {
    throw new Error("It is not your turn.");
  }
}

function playerHasPriority(room, actor) {
  return Number(room.prioritySeat ?? room.activePlayer) === actor.seat;
}

function playerCanAct(room, actor) {
  return room.players[room.activePlayer]?.seat === actor.seat || playerHasPriority(room, actor);
}

function assertCanAct(room, actor) {
  if (!playerCanAct(room, actor)) {
    throw new Error("You do not have priority.");
  }
}

function nextSeat(room, seat) {
  if (room.players.length <= 1) return 0;
  return (Number(seat) + 1) % room.players.length;
}

function resetPriority(room) {
  room.prioritySeat = room.activePlayer;
  room.priorityMode = "turn";
  room.combatSnapshot = null;
}

function allPlayersReady(room) {
  return room.players.every((player) => player.deckLoaded && !player.mulliganPending);
}

function maybeStartRoomClock(room, now = Date.now()) {
  if (!room.clock || room.clock.running || !allPlayersReady(room)) return;
  room.clock.running = true;
  room.clock.lastSyncAt = now;
  room.statistics.lastEventSeq = Number(room.eventSeq) || 0;
}

function resetRoomClock(room, now = Date.now()) {
  room.clock = {
    running: allPlayersReady(room),
    totalMs: 0,
    currentTurnMs: 0,
    playerMs: Array(room.players.length).fill(0),
    lastSyncAt: now,
  };
}

function manaValueFromCost(manaCost) {
  return [...String(manaCost || "").matchAll(/\{([^}]+)\}/g)].reduce((total, match) => {
    const symbol = String(match[1] || "").toUpperCase();
    if (/^\d+$/.test(symbol)) return total + Number(symbol);
    if (["X", "Y", "Z", "T", "Q"].includes(symbol)) return total;
    return total + 1;
  }, 0);
}

function spellType(card) {
  const typeLine = String(card?.typeLine || "");
  if (/\bLand\b/i.test(typeLine) || card?.isLand) return "Land";
  for (const type of ["Creature", "Instant", "Sorcery", "Artifact", "Enchantment", "Planeswalker", "Battle"]) {
    if (new RegExp(`\\b${type}\\b`, "i").test(typeLine)) return type;
  }
  return "Other";
}

function stageSpellStatistic(room, actor, card, destination) {
  const type = spellType(card);
  if (type === "Land") return;
  room.statistics = room.statistics || { pending: [], commits: [] };
  room.statistics.pending.push({
    id: id("cast"),
    cardId: card.id,
    cardName: card.displayName || card.name,
    type,
    manaUsed: Number.isFinite(Number(card.manaValue)) ? Number(card.manaValue) : manaValueFromCost(card.manaCost),
    actorSeat: actor.seat,
    actorName: actor.name,
    activeSeat: Number(room.activePlayer) || 0,
    turn: Number(room.turnNumber) || 1,
    destination,
  });
  room.statistics.pending = room.statistics.pending.slice(-80);
}

function commitStatistics(room, reason) {
  room.statistics = room.statistics || { pending: [], commits: [] };
  const events = room.statistics.pending.splice(0);
  const lastEventSeq = Number(room.statistics.lastEventSeq) || 0;
  const logEvents = (room.events || [])
    .filter((event) => Number(event.seq) > lastEventSeq)
    .map((event) => ({ seq: event.seq, actorName: event.actorName, message: event.message, at: event.at }));
  room.statistics.lastEventSeq = Number(room.eventSeq) || lastEventSeq;
  const spellsByType = {};
  let manaUsed = 0;
  events.forEach((event) => {
    spellsByType[event.type] = (Number(spellsByType[event.type]) || 0) + 1;
    manaUsed += Number(event.manaUsed) || 0;
  });
  room.statistics.commits.push({
    id: id("stats"),
    turn: Number(room.turnNumber) || 1,
    activeSeat: Number(room.activePlayer) || 0,
    activeName: room.players[room.activePlayer]?.name || "Player",
    reason,
    events,
    logEvents,
    spellsByType,
    manaUsed,
    at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  room.statistics.commits = room.statistics.commits.slice(-240);
}

function compactCardSnapshot(card) {
  if (!card) return null;
  const stats = cardCombatStats(card);
  return {
    id: card.id,
    name: card.name,
    displayName: card.displayName || card.name,
    typeLine: card.typeLine || "",
    imageUrl: card.imageUrl || "",
    tapped: Boolean(card.tapped),
    counters: normalizeCounters(card.counters || {}),
    power: card.power || "",
    toughness: card.toughness || "",
    isCreature: stats.isCreature,
    quantity: stats.quantity,
    effectivePower: stats.power,
    effectiveToughness: stats.toughness,
    totalPower: stats.totalPower,
    totalToughness: stats.totalToughness,
  };
}

function numericCardStat(value) {
  const parsed = Number.parseFloat(String(value || "").replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function cardCounterStats(counters = {}) {
  let shared = Number(counters.powerToughness) || 0;
  shared += Number(counters.plusOne) || 0;
  shared -= Number(counters.minusOne) || 0;
  Object.entries(counters.plusX || {}).forEach(([value, count]) => {
    shared += (Number(value) || 0) * (Number(count) || 0);
  });
  Object.entries(counters.minusX || {}).forEach(([value, count]) => {
    shared -= (Number(value) || 0) * (Number(count) || 0);
  });
  return {
    power: shared + (Number(counters.power) || 0),
    toughness: shared + (Number(counters.toughness) || 0),
  };
}

function cardCombatStats(card) {
  const isCreature = /\bCreature\b/i.test(card?.typeLine || "");
  const quantity = Math.max(1, Number(card?.counters?.creatureQuantity) || 1);
  if (!isCreature) return { isCreature, quantity, power: 0, toughness: 0, totalPower: 0, totalToughness: 0 };
  const counters = cardCounterStats(card.counters);
  const power = numericCardStat(card.power) + counters.power;
  const toughness = numericCardStat(card.toughness) + counters.toughness;
  return {
    isCreature,
    quantity,
    power,
    toughness,
    totalPower: power * quantity,
    totalToughness: toughness * quantity,
  };
}

function combatPartyTotals(cards) {
  return cards.reduce((totals, card) => {
    if (!card.isCreature) return totals;
    totals.creatures += card.quantity;
    totals.power += card.totalPower;
    totals.toughness += card.totalToughness;
    return totals;
  }, { creatures: 0, power: 0, toughness: 0 });
}

function combatCardSnapshot(cards) {
  return (Array.isArray(cards) ? cards : [])
    .map(compactCardSnapshot)
    .filter(Boolean)
    .slice(0, 16);
}

async function applyAction(room, actor, body) {
  const historySnapshot = shouldTrackHistory(body.type) ? roomStateSnapshot(room) : null;
  switch (body.type) {
    case "undo": {
      applyUndo(room, actor);
      break;
    }
    case "redo": {
      applyRedo(room, actor);
      break;
    }
    case "setPhase": {
      assertCanAct(room, actor);
      if (!phases.includes(body.phase)) throw new Error("Invalid phase");
      room.phase = body.phase;
      addLog(room, `Phase changed to ${body.phase}.`, actor);
      break;
    }
    case "randomFirstPlayer": {
      if (!actor.isHost) throw new Error("Only the host can choose a random first player.");
      if (room.players.length < 2) throw new Error("Random first player requires at least two players.");
      const selectedSeat = crypto.randomInt(room.players.length);
      const selectedPlayer = room.players[selectedSeat];
      room.activePlayer = selectedSeat;
      room.turnNumber = 1;
      room.phase = phases[0];
      resetPriority(room);
      resetRoomClock(room);
      room.diceNotice = {
        id: id("first"),
        mode: "firstPlayer",
        seat: selectedSeat,
        selectedName: selectedPlayer.name,
        playerName: actor.name,
        at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      addLog(room, `${selectedPlayer.name} was randomly selected to play first.`, actor, {
        kind: "firstPlayer",
        seat: selectedSeat,
        name: selectedPlayer.name,
      });
      break;
    }
    case "turn": {
      assertActivePlayer(room, actor);
      commitStatistics(room, "turn passed");
      const nextActive = (room.activePlayer + 1) % room.players.length;
      room.activePlayer = nextActive;
      if (room.players.length <= 1 || nextActive === 0) room.turnNumber = (Number(room.turnNumber) || 1) + 1;
      room.phase = phases[0];
      resetPriority(room);
      room.clock.currentTurnMs = 0;
      room.clock.lastSyncAt = Date.now();
      addLog(room, `Turn moved to ${room.players[room.activePlayer].name}.`, actor);
      break;
    }
    case "combatPass": {
      assertActivePlayer(room, actor);
      if (room.players.length <= 1) throw new Error("Combat priority is only available in multiplayer.");
      commitStatistics(room, "combat priority passed");
      room.priorityMode = "combat";
      room.prioritySeat = nextSeat(room, actor.seat);
      const selectedIds = new Set((Array.isArray(body.cardIds) ? body.cardIds : []).map((cardId) => String(cardId || "")).filter(Boolean));
      const attackers = selectedIds.size
        ? actor.battlefield.filter((card) => selectedIds.has(card.id))
        : [];
      const attackerCards = combatCardSnapshot(attackers);
      room.combatSnapshot = {
        id: id("combat"),
        attackerSeat: actor.seat,
        attackerName: actor.name,
        defenderSeat: room.prioritySeat,
        defenderName: room.players[room.prioritySeat].name,
        cards: attackerCards,
        totals: combatPartyTotals(attackerCards),
        at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      addLog(room, `${actor.name} passed priority for blockers to ${room.players[room.prioritySeat].name}.`, actor, {
        kind: "combat",
        cards: room.combatSnapshot.cards,
      });
      break;
    }
    case "takePriority": {
      if (room.players.length <= 1) throw new Error("Instant priority is only available in multiplayer.");
      if (actor.seat === room.activePlayer) {
        room.priorityMode = "turn";
        room.prioritySeat = actor.seat;
      } else {
        room.priorityMode = "instant";
        room.prioritySeat = actor.seat;
      }
      addLog(room, `${actor.name} took priority${room.priorityMode === "instant" ? " for an instant-speed action" : ""}.`, actor);
      break;
    }
    case "passPriority": {
      if (room.players.length <= 1) throw new Error("Priority passing is only available in multiplayer.");
      if (!playerHasPriority(room, actor)) throw new Error("You do not have priority.");
      commitStatistics(room, "priority passed");
      const next = nextSeat(room, actor.seat);
      room.prioritySeat = next;
      if (next === room.activePlayer) {
        room.priorityMode = "turn";
        room.combatSnapshot = null;
      }
      addLog(room, `${actor.name} passed priority to ${room.players[next].name}.`, actor);
      break;
    }
    case "life": {
      const target = room.players[Number(body.seat)];
      if (!target) throw new Error("Invalid player");
      if (target.seat !== actor.seat && !playerCanAct(room, actor)) {
        throw new Error("You can only change another player's life when you have the turn or priority.");
      }
      if (Number.isFinite(Number(body.value))) target.life = Math.max(-999, Math.min(999, Math.round(Number(body.value))));
      else target.life += Number(body.delta);
      addLog(room, `${target.name} life changed to ${target.life}.`, actor, { kind: "life", seat: target.seat, value: target.life });
      break;
    }
    case "playtestLife": {
      if (room.players.length !== 1) throw new Error("Playtest life is only available in single player.");
      room.playtestOpponent = room.playtestOpponent || { name: "Playtest Opponent", commander: "Simulation", life: 40 };
      if (Number.isFinite(Number(body.value))) room.playtestOpponent.life = Math.max(-999, Math.min(999, Math.round(Number(body.value))));
      else room.playtestOpponent.life += Number(body.delta);
      addLog(room, `${room.playtestOpponent.name} life changed to ${room.playtestOpponent.life}.`, actor, {
        kind: "life",
        seat: "playtest",
        value: room.playtestOpponent.life,
      });
      break;
    }
    case "playerCounter": {
      const target = room.players[Number(body.seat)];
      if (!target) throw new Error("Invalid player");
      if (target.seat !== actor.seat) throw new Error("You can only change your own player counters.");
      const counter = adjustPlayerCounter(target, body.counterName, body.delta);
      if (isCommanderDamageCounterName(counter.name) && counter.deltaApplied !== 0) {
        target.life = Math.max(-999, Math.min(999, target.life - counter.deltaApplied));
        addLog(room, `${target.name} ${counter.name} counter changed to ${counter.value}; life changed to ${target.life}.`, actor, {
          kind: "life",
          seat: target.seat,
          value: target.life,
        });
      } else {
        addLog(room, `${target.name} ${counter.name} counter changed to ${counter.value}.`, actor);
      }
      break;
    }
    case "commanderTax": {
      const target = room.players[Number(body.seat)];
      if (!target) throw new Error("Invalid player");
      if (target.seat !== actor.seat) throw new Error("You can only change your own commander tax.");
      const tax = adjustCommanderTax(target, body.delta);
      addLog(room, `${target.name} commander tax changed to ${tax}.`, actor);
      break;
    }
    case "chat": {
      const text = String(body.text || "").trim().slice(0, 240);
      if (!text) throw new Error("Message is required");
      room.chat.push({
        id: id("chat"),
        seat: actor.seat,
        name: actor.name,
        text,
        at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
      room.chat = room.chat.slice(-200);
      break;
    }
    case "diceRoll": {
      applyDiceRoll(room, actor, body);
      break;
    }
    case "updateSettings": {
      room.settings = room.settings || {};
      room.settings.friendlyMulligans = body.friendlyMulligans !== false;
      room.settings.darkMode = Boolean(body.darkMode);
      addLog(room, `${actor.name} updated room settings.`, actor);
      break;
    }
    case "loadDeck": {
      const playerName = String(body.name || "").trim();
      const commander = String(body.commander || "").trim();
      if (playerName) actor.name = playerName.slice(0, 32);
      actor.commander = commander.slice(0, 80);
      const deck = await buildDeck(body.text, actor.seat);
      actor.commanderZone = await pullCommanderCard(deck.cards, actor.commander, actor.seat);
      actor.library = shuffle(deck.cards);
      actor.mulliganCount = 0;
      actor.mulliganPending = true;
      drawOpeningHand(actor, 7);
      actor.libraryPreview = null;
      actor.deckStats = deck.stats;
      actor.deckLoaded = true;
      const commanderText = actor.commanderZone.length ? " Commander moved to command zone." : "";
      addLog(room, `${actor.name} loaded ${deck.stats.total} cards, shuffled, and reviewed an opening hand of ${actor.hand.length}.${commanderText}`, actor);
      break;
    }
    case "mulligan": {
      mulliganPlayer(room, actor);
      break;
    }
    case "keepHand": {
      if (!actor.deckLoaded) throw new Error("Load a deck before keeping a hand.");
      actor.mulliganPending = false;
      maybeStartRoomClock(room);
      addLog(room, `${actor.name} kept their opening hand.`, actor);
      break;
    }
    case "draw": {
      assertCanAct(room, actor);
      const count = Math.max(1, Math.min(20, Number(body.count) || 1));
      const drawn = drawCards(actor, count);
      addLog(room, `${actor.name} drew ${drawn.length} card${drawn.length === 1 ? "" : "s"}.`, actor);
      break;
    }
    case "revealHandCard": {
      assertCanAct(room, actor);
      const card = actor.hand.find((item) => item.id === body.cardId);
      if (!card) throw new Error("Card not found in hand.");
      room.reveals = (room.reveals || []).filter((reveal) => Number(reveal.expiresAt) > Date.now());
      const reveal = {
        id: id("reveal"),
        seat: actor.seat,
        name: actor.name,
        cards: [compactCardSnapshot(card)],
        expiresAt: Date.now() + 30_000,
      };
      room.reveals.push(reveal);
      room.reveals = room.reveals.slice(-12);
      addLog(room, `${actor.name} revealed ${card.displayName || card.name} from their hand.`, actor, {
        kind: "reveal",
        cards: reveal.cards,
      });
      break;
    }
    case "flipCard": {
      assertCanAct(room, actor);
      const card = flipOwnedCard(actor, String(body.zone || "battlefield"), String(body.cardId || ""));
      addLog(room, `${actor.name} flipped ${card.name} to ${card.displayName || card.name}.`, actor, {
        kind: "flip",
        cardName: card.name,
        displayName: card.displayName || card.name,
        faceIndex: Number(card.faceIndex) || 0,
      });
      break;
    }
    case "libraryAction": {
      assertCanAct(room, actor);
      applyLibraryAction(room, actor, body);
      break;
    }
    case "clearLibraryPreview": {
      assertCanAct(room, actor);
      actor.libraryPreview = null;
      break;
    }
    case "previewCardAction": {
      assertCanAct(room, actor);
      applyPreviewCardAction(room, actor, body);
      break;
    }
    case "reorderPreview": {
      assertCanAct(room, actor);
      reorderLibraryPreview(room, actor, body);
      break;
    }
    case "handToLibrary": {
      assertCanAct(room, actor);
      const index = actor.hand.findIndex((card) => card.id === body.cardId);
      if (index === -1) throw new Error("Card not found");
      const [card] = actor.hand.splice(index, 1);
      prepareForNonBattlefield(card);
      if (body.position === "top") actor.library.unshift(card);
      else actor.library.push(card);
      addLog(room, `${actor.name} put a card from hand ${body.position === "top" ? "on top of" : "on bottom of"} their library.`, actor);
      break;
    }
    case "moveCard": {
      assertCanAct(room, actor);
      const target = room.players[Number(body.seat)];
      const destinationPlayer = room.players[Number(body.toSeat ?? body.seat)];
      if (!target || !destinationPlayer) throw new Error("Invalid player");
      if (target.seat !== actor.seat || destinationPlayer.seat !== actor.seat) {
        throw new Error("You can only edit your own board state.");
      }
      const card = moveCard(actor, target, body.fromZone, body.toZone, body.cardId, destinationPlayer, body.position);
      if (["hand", "commanderZone"].includes(body.fromZone) && body.toZone === "battlefield") {
        stageSpellStatistic(room, actor, card, "battlefield");
      }
      addLog(room, `${actor.name} moved ${card.name} to ${body.toZone}.`, actor, {
        kind: "move",
        cardName: card.name,
        fromZone: body.fromZone,
        toZone: body.toZone,
        position: card.position || null,
        tapped: Boolean(card.tapped),
      });
      break;
    }
    case "moveCards": {
      assertCanAct(room, actor);
      const target = room.players[Number(body.seat)];
      const destinationPlayer = room.players[Number(body.toSeat ?? body.seat)];
      if (!target || !destinationPlayer) throw new Error("Invalid player");
      if (target.seat !== actor.seat || destinationPlayer.seat !== actor.seat) {
        throw new Error("You can only edit your own board state.");
      }
      const cards = moveMultipleCards(actor, target, body.fromZone, body.toZone, body.cards, destinationPlayer);
      if (["hand", "commanderZone"].includes(body.fromZone) && body.toZone === "battlefield") {
        cards.forEach((card) => stageSpellStatistic(room, actor, card, "battlefield"));
      }
      addLog(room, `${actor.name} moved ${cards.length} selected card${cards.length === 1 ? "" : "s"} to ${body.toZone}.`, actor, {
        kind: "move",
        cardName: `${cards.length} selected card${cards.length === 1 ? "" : "s"}`,
        fromZone: body.fromZone,
        toZone: body.toZone,
        position: cards.length === 1 ? cards[0].position || null : null,
        tapped: cards.length === 1 ? Boolean(cards[0].tapped) : false,
      });
      break;
    }
    case "arrangeCards": {
      assertCanAct(room, actor);
      const cards = arrangeBattlefieldCards(actor, body.cards);
      addLog(room, `${actor.name} arranged ${cards.length} selected card${cards.length === 1 ? "" : "s"}.`, actor, {
        kind: "move",
        cardName: `${cards.length} selected card${cards.length === 1 ? "" : "s"}`,
        fromZone: "battlefield",
        toZone: "battlefield",
        position: cards.length === 1 ? cards[0].position || null : null,
        tapped: cards.length === 1 ? Boolean(cards[0].tapped) : false,
      });
      break;
    }
    case "copyBattlefieldToken": {
      assertCanAct(room, actor);
      const token = copyBattlefieldToken(actor, body.cardId, body.position);
      addLog(room, `${actor.name} created a token copy of ${token.name.replace(/\s+Token$/, "")}.`, actor);
      break;
    }
    case "createToken": {
      assertCanAct(room, actor);
      const token = createBattlefieldToken(actor, body.tokenData, body.position);
      addLog(room, `${actor.name} created ${token.name}.`, actor);
      break;
    }
    case "adjustCounter": {
      assertCanAct(room, actor);
      const card = adjustBattlefieldCounter(actor, body.cardId, body.counterType, body.value, body.delta);
      addLog(room, `${actor.name} adjusted counters on ${card.name}.`, actor, { kind: "counter", cardName: card.name, counters: card.counters });
      break;
    }
    case "removeBattlefieldToken": {
      assertCanAct(room, actor);
      const card = removeBattlefieldToken(actor, body.cardId);
      addLog(room, `${actor.name} removed ${card.name} from the battlefield.`, actor);
      break;
    }
    case "tap": {
      assertCanAct(room, actor);
      if (body.zone !== "battlefield") throw new Error("Only battlefield cards can be tapped.");
      const target = room.players[Number(body.seat)];
      if (!target) throw new Error("Invalid player");
      if (target.seat !== actor.seat) throw new Error("You can only edit your own board state.");
      const zone = getPublicZone(target, body.zone);
      const index = zone.findIndex((item) => item.id === body.cardId);
      const card = zone[index];
      if (!card) throw new Error("Card not found");
      card.tapped = !card.tapped;
      if (body.zone === "battlefield") {
        card.position = clampPosition(card.position, card.tapped);
        zone.splice(index, 1);
        zone.push(card);
      }
      addLog(room, `${actor.name} ${card.tapped ? "tapped" : "untapped"} ${card.name}.`, actor, {
        kind: "tap",
        cardName: card.name,
        tapped: Boolean(card.tapped),
        zone: body.zone,
        position: card.position || null,
      });
      break;
    }
    case "untapAll": {
      assertActivePlayer(room, actor);
      const cards = actor.battlefield.filter((card) => card.tapped);
      cards.forEach((card) => {
        card.tapped = false;
        card.position = clampPosition(card.position, false);
      });
      addLog(room, `${actor.name} untapped ${cards.length} battlefield card${cards.length === 1 ? "" : "s"}.`, actor, {
        kind: "untapAll",
        count: cards.length,
      });
      break;
    }
    case "tapCards": {
      assertCanAct(room, actor);
      const target = room.players[Number(body.seat)];
      if (!target) throw new Error("Invalid player");
      if (target.seat !== actor.seat) throw new Error("You can only edit your own board state.");
      const result = tapBattlefieldCards(actor, target, body.cardIds, body.mode);
      addLog(room, `${actor.name} ${result.tapped ? "tapped" : "untapped"} ${result.cards.length} selected card${result.cards.length === 1 ? "" : "s"}.`, actor, {
        kind: "tap",
        cardName: `${result.cards.length} selected card${result.cards.length === 1 ? "" : "s"}`,
        tapped: Boolean(result.tapped),
        zone: "battlefield",
        position: result.cards.length === 1 ? result.cards[0].position || null : null,
      });
      break;
    }
    case "toStack": {
      assertCanAct(room, actor);
      const target = room.players[Number(body.seat)];
      if (!target) throw new Error("Invalid player");
      const card = stackFromZone(room, actor, target, body.fromZone, body.cardId);
      if (["hand", "commanderZone", "graveyard", "exile"].includes(body.fromZone)) {
        stageSpellStatistic(room, actor, card, "stack");
      }
      addLog(room, `${actor.name} put ${card.name} on the stack.`, actor);
      break;
    }
    case "resolveStack": {
      assertCanAct(room, actor);
      const index = room.stack.findIndex((card) => card.id === body.cardId);
      if (index === -1) throw new Error("Card not found");
      const [card] = room.stack.splice(index, 1);
      const owner = room.players[card.owner];
      const destination = getPublicZone(owner, body.toZone);
      if (body.toZone === "battlefield") {
        card.tapped = false;
        card.position = clampPosition(nextBattlefieldPosition(owner.battlefield.length));
      } else {
        prepareForNonBattlefield(card);
      }
      destination.push(card);
      addLog(room, `${card.name} resolved to ${body.toZone}.`, actor);
      break;
    }
    case "removeStack": {
      assertCanAct(room, actor);
      const index = room.stack.findIndex((card) => card.id === body.cardId);
      if (index === -1) throw new Error("Card not found");
      const [card] = room.stack.splice(index, 1);
      addLog(room, `${card.name} was removed from the stack.`, actor);
      break;
    }
    case "addStack": {
      assertCanAct(room, actor);
      const name = String(body.name || "").trim();
      if (!name) throw new Error("Name is required");
      room.stack.push({ id: id("stack"), name, tapped: false, owner: actor.seat });
      addLog(room, `${actor.name} added ${name} to the stack.`, actor);
      break;
    }
    default:
      throw new Error("Unknown action");
  }
  if (historySnapshot) pushUndoSnapshot(room, historySnapshot);
}

function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(publicDir, safePath);
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    const type = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" }[ext] || "text/plain";
    res.writeHead(200, { "Content-Type": type });
    res.end(content);
  });
}

function firstForwardedValue(value) {
  return String(value || "").split(",")[0].trim();
}

function requestOrigin(req) {
  const forwardedProto = firstForwardedValue(req.headers["x-forwarded-proto"]);
  const protocol = forwardedProto === "https" || forwardedProto === "http"
    ? forwardedProto
    : req.socket.encrypted ? "https" : "http";
  const host = firstForwardedValue(req.headers["x-forwarded-host"]) || req.headers.host;
  return `${protocol}://${host}`;
}

const server = http.createServer(async (req, res) => {
  try {
    const origin = requestOrigin(req);
    const requestUrl = new URL(req.url, origin);

    if (req.method === "POST" && requestUrl.pathname === "/api/accounts/register") {
      const body = await readBody(req);
      const result = accountStore.createAccount(body.username, body.password);
      return sendJson(res, 201, { account: result.account }, { "Set-Cookie": sessionCookie(req, result.sessionToken) });
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/accounts/login") {
      const body = await readBody(req);
      const result = accountStore.login(body.username, body.password);
      if (!result) return sendJson(res, 401, { error: "Username or password is incorrect.", code: "INVALID_LOGIN" });
      return sendJson(res, 200, { account: result.account }, { "Set-Cookie": sessionCookie(req, result.sessionToken) });
    }

    if (req.method === "GET" && requestUrl.pathname === "/api/account") {
      const account = authenticatedAccount(req, res);
      if (!account) return;
      return sendJson(res, 200, { account });
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/account/logout") {
      const account = authenticatedAccount(req, res);
      if (!account) return;
      accountStore.deleteSession(sessionTokenFromRequest(req));
      return sendJson(res, 200, { ok: true }, { "Set-Cookie": sessionCookie(req, "", 0) });
    }

    if (requestUrl.pathname === "/api/account/decks") {
      const account = authenticatedAccount(req, res);
      if (!account) return;
      if (req.method === "GET") return sendJson(res, 200, { decks: accountStore.listDecks(account.id) });
      if (req.method === "POST") {
        const body = await readBody(req);
        return sendJson(res, 201, { deck: accountStore.saveDeck(account.id, body) });
      }
    }

    const accountDeckMatch = requestUrl.pathname.match(/^\/api\/account\/decks\/([^/]+)$/);
    if (accountDeckMatch && ["PUT", "DELETE"].includes(req.method)) {
      const account = authenticatedAccount(req, res);
      if (!account) return;
      const deckId = decodeURIComponent(accountDeckMatch[1]);
      if (req.method === "DELETE") {
        const deleted = accountStore.deleteDeck(account.id, deckId);
        if (!deleted) return sendJson(res, 404, { error: "Saved deck was not found." });
        return sendJson(res, 200, { ok: true });
      }
      const body = await readBody(req);
      return sendJson(res, 200, { deck: accountStore.saveDeck(account.id, body, deckId) });
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/rooms") {
      const body = await readBody(req);
      const playerCount = Math.max(1, Math.min(4, Number(body.playerCount) || 1));
      const password = String(body.password || "").slice(0, 128);
      return sendJson(res, 201, createRoom(String(body.name || "Mage Table").slice(0, 40), playerCount, origin, password));
    }

    const roomMatch = requestUrl.pathname.match(/^\/api\/rooms\/([^/]+)$/);
    if (req.method === "GET" && roomMatch) {
      const room = rooms.get(roomMatch[1]);
      const token = requestUrl.searchParams.get("token");
      const passwordError = roomPasswordError(room, requestUrl.searchParams.get("password") || "");
      if (passwordError) return sendJson(res, passwordError.status, passwordError);
      const view = room && viewRoom(room, token, origin);
      if (!view) return sendJson(res, 404, { error: "Room or seat not found" });
      return sendJson(res, 200, view);
    }

    const streamMatch = requestUrl.pathname.match(/^\/api\/rooms\/([^/]+)\/stream$/);
    if (req.method === "GET" && streamMatch) {
      const room = rooms.get(streamMatch[1]);
      const token = requestUrl.searchParams.get("token");
      const actor = room?.players.find((player) => player.token === token);
      if (!room || !actor) return sendJson(res, 404, { error: "Room or seat not found" });
      const passwordError = roomPasswordError(room, requestUrl.searchParams.get("password") || "");
      if (passwordError) return sendJson(res, passwordError.status, passwordError);
      const connectedAt = Date.now();
      syncRoomClock(room, connectedAt);
      room.presenceConnections = room.presenceConnections || new Map();
      room.presenceConnections.set(actor.seat, presenceConnectionCount(room, actor.seat) + 1);
      touchPresence(room, actor, connectedAt);
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      });
      sendSse(res, "room-update", {
        roomId: room.id,
        updateSeq: Number(room.updateSeq) || 0,
        eventSeq: Number(room.eventSeq) || 0,
      });
      room.subscribers = room.subscribers || new Set();
      room.subscribers.add(res);
      sendSse(res, "presence-update", presencePayload(room, connectedAt));
      broadcastPresence(room);
      req.on("close", () => {
        const disconnectedAt = Date.now();
        syncRoomClock(room, disconnectedAt);
        room.subscribers.delete(res);
        const remaining = Math.max(0, presenceConnectionCount(room, actor.seat) - 1);
        if (remaining) room.presenceConnections.set(actor.seat, remaining);
        else room.presenceConnections.delete(actor.seat);
        touchPresence(room, actor, disconnectedAt);
        broadcastPresence(room);
      });
      return;
    }

    const presenceMatch = requestUrl.pathname.match(/^\/api\/rooms\/([^/]+)\/presence$/);
    if (req.method === "POST" && presenceMatch) {
      const room = rooms.get(presenceMatch[1]);
      if (!room) return sendJson(res, 404, { error: "Room not found" });
      const body = await readBody(req);
      const actor = room.players.find((player) => player.token === body.token);
      if (!actor) return sendJson(res, 403, { error: "Invalid seat token" });
      const passwordError = roomPasswordError(room, body.password || "");
      if (passwordError) return sendJson(res, passwordError.status, passwordError);
      const now = Date.now();
      syncRoomClock(room, now);
      touchPresence(room, actor, now);
      const payload = presencePayload(room, now);
      broadcastPresence(room);
      return sendJson(res, 200, payload);
    }

    if (req.method === "GET" && requestUrl.pathname === "/api/scryfall/tokens") {
      const query = requestUrl.searchParams.get("q") || "";
      const cards = await searchScryfallTokens(query);
      return sendJson(res, 200, { cards });
    }

    const actionMatch = requestUrl.pathname.match(/^\/api\/rooms\/([^/]+)\/actions$/);
    if (req.method === "POST" && actionMatch) {
      const room = rooms.get(actionMatch[1]);
      if (!room) return sendJson(res, 404, { error: "Room not found" });
      const body = await readBody(req);
      const actor = room.players.find((player) => player.token === body.token);
      if (!actor) return sendJson(res, 403, { error: "Invalid seat token" });
      const passwordError = roomPasswordError(room, body.password || "");
      if (passwordError) return sendJson(res, passwordError.status, passwordError);
      const actionAt = Date.now();
      syncRoomClock(room, actionAt);
      touchPresence(room, actor, actionAt);
      await applyAction(room, actor, body);
      room.updateSeq = (Number(room.updateSeq) || 0) + 1;
      broadcastRoomUpdate(room);
      broadcastPresence(room);
      return sendJson(res, 200, viewRoom(room, actor.token, origin));
    }

    return serveStatic(req, res);
  } catch (error) {
    return sendJson(res, 400, { error: error.message });
  }
});

if (require.main === module) {
  server.listen(port, "0.0.0.0", () => {
    console.log(`Mage Table running on port ${port}`);
  });
}

module.exports = {
  accountStore,
  applyAction,
  createRoom,
  maybeStartRoomClock,
  presencePayload,
  rooms,
  server,
  syncRoomClock,
  touchPresence,
};
