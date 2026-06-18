const phases = ["Untap", "Upkeep", "Draw", "Main 1", "Combat", "Main 2", "End"];

const els = {
  setupPanel: document.querySelector("#setupPanel"),
  tablePanel: document.querySelector("#tablePanel"),
  roomForm: document.querySelector("#roomForm"),
  roomNameInput: document.querySelector("#roomNameInput"),
  playerCountInput: document.querySelector("#playerCountInput"),
  inviteList: document.querySelector("#inviteList"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  chatButton: document.querySelector("#chatButton"),
  chatBadge: document.querySelector("#chatBadge"),
  chatDialog: document.querySelector("#chatDialog"),
  chatMessages: document.querySelector("#chatMessages"),
  chatInput: document.querySelector("#chatInput"),
  sendChatButton: document.querySelector("#sendChatButton"),
  newRoomButton: document.querySelector("#newRoomButton"),
  roomTitle: document.querySelector("#roomTitle"),
  currentSeatBadge: document.querySelector("#currentSeatBadge"),
  showInvitesButton: document.querySelector("#showInvitesButton"),
  seatSelect: document.querySelector("#seatSelect"),
  activePlayerText: document.querySelector("#activePlayerText"),
  turnCountText: document.querySelector("#turnCountText"),
  turnDock: document.querySelector("#turnDock"),
  endTurnButton: document.querySelector("#endTurnButton"),
  instantButton: document.querySelector("#instantButton"),
  combatPassButton: document.querySelector("#combatPassButton"),
  passPriorityButton: document.querySelector("#passPriorityButton"),
  boardReferenceButton: document.querySelector("#boardReferenceButton"),
  boardReferenceDialog: document.querySelector("#boardReferenceDialog"),
  boardReferenceSummary: document.querySelector("#boardReferenceSummary"),
  boardReferenceList: document.querySelector("#boardReferenceList"),
  recapDialog: document.querySelector("#recapDialog"),
  recapSummary: document.querySelector("#recapSummary"),
  recapStep: document.querySelector("#recapStep"),
  recapProgress: document.querySelector("#recapProgress"),
  recapPreviousButton: document.querySelector("#recapPreviousButton"),
  recapNextButton: document.querySelector("#recapNextButton"),
  recapDoneButton: document.querySelector("#recapDoneButton"),
  deckInput: document.querySelector("#deckInput"),
  deckStats: document.querySelector("#deckStats"),
  loadDeckButton: document.querySelector("#loadDeckButton"),
  drawButton: document.querySelector("#drawButton"),
  actionLog: document.querySelector("#actionLog"),
  playersGrid: document.querySelector("#playersGrid"),
  handTitle: document.querySelector("#handTitle"),
  handZone: document.querySelector("#handZone"),
  handCount: document.querySelector("#handCount"),
  cardDialog: document.querySelector("#cardDialog"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogActions: document.querySelector("#dialogActions"),
  mulliganDialog: document.querySelector("#mulliganDialog"),
  mulliganSummary: document.querySelector("#mulliganSummary"),
  mulliganCards: document.querySelector("#mulliganCards"),
  keepHandButton: document.querySelector("#keepHandButton"),
  mulliganButton: document.querySelector("#mulliganButton"),
  zoneDialog: document.querySelector("#zoneDialog"),
  zoneDialogTitle: document.querySelector("#zoneDialogTitle"),
  zoneDialogSummary: document.querySelector("#zoneDialogSummary"),
  zoneDialogCards: document.querySelector("#zoneDialogCards"),
  inviteDialog: document.querySelector("#inviteDialog"),
  uiScaleInput: document.querySelector("#uiScaleInput"),
  uiScaleValue: document.querySelector("#uiScaleValue"),
  popupOpacityInput: document.querySelector("#popupOpacityInput"),
  popupOpacityValue: document.querySelector("#popupOpacityValue"),
  controlsOpacityInput: document.querySelector("#controlsOpacityInput"),
  controlsOpacityValue: document.querySelector("#controlsOpacityValue"),
  friendlyMulligansInput: document.querySelector("#friendlyMulligansInput"),
  darkModeInput: document.querySelector("#darkModeInput"),
  continueFromInvitesButton: document.querySelector("#continueFromInvitesButton"),
  deckSetupOverlay: document.querySelector("#deckSetupOverlay"),
  deckSetupForm: document.querySelector("#deckSetupForm"),
  deckSetupRoom: document.querySelector("#deckSetupRoom"),
  playerNameInput: document.querySelector("#playerNameInput"),
  commanderInput: document.querySelector("#commanderInput"),
  setupDeckInput: document.querySelector("#setupDeckInput"),
  setupDeckStats: document.querySelector("#setupDeckStats"),
  loadingIndicator: document.querySelector("#loadingIndicator"),
  libraryDialog: document.querySelector("#libraryDialog"),
  librarySummary: document.querySelector("#librarySummary"),
  libraryPreview: document.querySelector("#libraryPreview"),
  libraryActions: document.querySelector("#libraryActions"),
  librarySearchDialog: document.querySelector("#librarySearchDialog"),
  librarySearchSummary: document.querySelector("#librarySearchSummary"),
  librarySearchInput: document.querySelector("#librarySearchInput"),
  librarySearchCards: document.querySelector("#librarySearchCards"),
  librarySearchActionDialog: document.querySelector("#librarySearchActionDialog"),
  librarySearchActionTitle: document.querySelector("#librarySearchActionTitle"),
  librarySearchActionButtons: document.querySelector("#librarySearchActionButtons"),
  tokenDialog: document.querySelector("#tokenDialog"),
  tokenDialogSummary: document.querySelector("#tokenDialogSummary"),
  tokenSearchInput: document.querySelector("#tokenSearchInput"),
  tokenSearchButton: document.querySelector("#tokenSearchButton"),
  tokenSearchSummary: document.querySelector("#tokenSearchSummary"),
  tokenSearchCards: document.querySelector("#tokenSearchCards"),
  customTokenNameInput: document.querySelector("#customTokenNameInput"),
  customTokenTypeInput: document.querySelector("#customTokenTypeInput"),
  customTokenPowerInput: document.querySelector("#customTokenPowerInput"),
  customTokenToughnessInput: document.querySelector("#customTokenToughnessInput"),
  createCustomTokenButton: document.querySelector("#createCustomTokenButton"),
};

let state = null;
let currentToken = "";
let pollTimer = null;
let forceInviteDialog = false;
let loadedDeckSetupFor = "";
let pendingRequests = 0;
let draggedCard = null;
let sidebarCollapsed = true;
let battlefieldCanvasSize = null;
let battlefieldLayerSize = null;
let hoveredZoomCard = null;
let zoomOverlay = null;
let battlefieldPointerDrag = null;
let pendingTokenPosition = null;
let tokenSearchResults = [];
let recapSessionKey = "";
let recapEvents = [];
let recapIndex = 0;
let draggedPreviewCardId = "";
let stateSnapshot = "";
const playerCounterSelections = new Map();
const dismissedReveals = new Set();
const revealSeenAt = new Map();
const revealTimeouts = new Map();

const battlefieldCardSize = { width: 92, height: 128 };
const fallbackBattlefieldMax = { x: 86, y: 62 };
const zoomScale = 2;
const cardScaleKey = "mage-table-card-scale";
const cardScaleUserKey = "mage-table-card-scale-user";
const popupOpacityKey = "mage-table-popup-opacity";
const controlsOpacityKey = "mage-table-controls-opacity";
const playerCounterOptions = ["Commander Damage", "Poison", "Energy", "Experience", "Oil", "Charge", "Rad", "Storm"];

function roomIdFromUrl() {
  return new URLSearchParams(window.location.search).get("room") || "";
}

function tokenFromUrl() {
  return new URLSearchParams(window.location.search).get("token") || "";
}

async function api(path, options = {}) {
  setLoading(true);
  try {
    const response = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }
    return data;
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  pendingRequests += isLoading ? 1 : -1;
  pendingRequests = Math.max(0, pendingRequests);
  document.body.classList.toggle("is-loading", pendingRequests > 0);
  els.loadingIndicator.classList.toggle("hidden", pendingRequests === 0);
}

function applyCardScale(value, { persist = true } = {}) {
  const scale = Math.max(80, Math.min(200, Number(value) || 100));
  document.documentElement.style.setProperty("--card-scale", String(scale / 100));
  els.uiScaleInput.value = String(scale);
  els.uiScaleValue.textContent = `${scale}%`;
  if (persist) {
    localStorage.setItem(cardScaleKey, String(scale));
    localStorage.setItem(cardScaleUserKey, "1");
  }
}

function applyPopupOpacity(value, { persist = true } = {}) {
  const opacity = Math.max(45, Math.min(100, Number(value) || 94));
  document.documentElement.style.setProperty("--popup-opacity", String(opacity / 100));
  els.popupOpacityInput.value = String(opacity);
  els.popupOpacityValue.textContent = `${opacity}%`;
  if (persist) localStorage.setItem(popupOpacityKey, String(opacity));
}

function applyControlsOpacity(value, { persist = true } = {}) {
  const opacity = Math.max(35, Math.min(100, Number(value) || 72));
  document.documentElement.style.setProperty("--controls-opacity", String(opacity / 100));
  els.controlsOpacityInput.value = String(opacity);
  els.controlsOpacityValue.textContent = `${opacity}%`;
  if (persist) localStorage.setItem(controlsOpacityKey, String(opacity));
}

function loadOpacitySettings() {
  applyPopupOpacity(Number(localStorage.getItem(popupOpacityKey) || 94), { persist: false });
  applyControlsOpacity(Number(localStorage.getItem(controlsOpacityKey) || 72), { persist: false });
}

function currentCardScale() {
  return Number(getComputedStyle(document.documentElement).getPropertyValue("--card-scale")) || 1;
}

function currentBattlefieldCardSize() {
  const scale = currentCardScale();
  return {
    width: battlefieldCardSize.width * scale,
    height: battlefieldCardSize.height * scale,
  };
}

function loadCardScale() {
  const saved = localStorage.getItem(cardScaleKey) || localStorage.getItem("mage-table-ui-scale");
  if (saved && (localStorage.getItem(cardScaleUserKey) === "1" || localStorage.getItem("mage-table-ui-scale-user") === "1")) {
    applyCardScale(Number(saved) || 100, { persist: false });
    return;
  }
  applyCardScale(recommendedCardScale(), { persist: false });
}

function recommendedCardScale() {
  const width = window.innerWidth || 1366;
  const height = window.innerHeight || 768;
  const area = width * height;
  let scale = 100;
  if (height < 640 || width < 980) scale = 80;
  else if (height < 740 || width < 1180) scale = 88;
  else if (height < 820 || width < 1380) scale = 94;
  else if (area >= 1900 * 950) scale = 112;
  else if (area >= 1600 * 900) scale = 106;
  return scale;
}

function syncSidebarState() {
  document.body.classList.toggle("sidebar-collapsed", sidebarCollapsed);
  els.sidebarToggle.textContent = sidebarCollapsed ? "Show" : "Hide";
}

async function refreshState({ quiet = false } = {}) {
  const roomId = roomIdFromUrl();
  currentToken = tokenFromUrl();
  if (!roomId || !currentToken) {
    state = null;
    render();
    return;
  }
  try {
    const nextState = await api(`/api/rooms/${roomId}?token=${encodeURIComponent(currentToken)}`);
    const nextSnapshot = JSON.stringify(nextState);
    if (quiet && stateSnapshot === nextSnapshot) return;
    state = nextState;
    stateSnapshot = nextSnapshot;
    render();
  } catch (error) {
    if (!quiet) alert(error.message);
  }
}

async function sendAction(type, payload = {}) {
  if (!state) return;
  state = await api(`/api/rooms/${state.id}/actions`, {
    method: "POST",
    body: JSON.stringify({ token: currentToken, type, ...payload }),
  });
  stateSnapshot = JSON.stringify(state);
  render();
}

function startPolling() {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(() => {
    if (state && !battlefieldPointerDrag) refreshState({ quiet: true });
  }, 2000);
}

function render() {
  if (!state) {
    battlefieldCanvasSize = null;
    battlefieldLayerSize = null;
    recapSessionKey = "";
    stateSnapshot = "";
    document.body.classList.remove("dark-mode");
    els.setupPanel.classList.remove("hidden");
    els.tablePanel.classList.add("hidden");
    els.turnDock.classList.add("hidden");
    els.showInvitesButton.classList.add("hidden");
    els.deckSetupOverlay.classList.add("hidden");
    if (els.mulliganDialog.open) els.mulliganDialog.close();
    if (els.recapDialog.open) els.recapDialog.close();
    return;
  }

  applyTheme();
  els.setupPanel.classList.add("hidden");
  els.tablePanel.classList.remove("hidden");
  els.turnDock.classList.remove("hidden");
  syncSidebarState();
  els.roomTitle.textContent = state.name;
  els.currentSeatBadge.textContent = `You are ${state.currentPlayer.name} - Seat ${state.currentSeat + 1}`;
  els.showInvitesButton.classList.remove("hidden");
  renderInvites();
  renderRoomSettings();
  renderDeckSetup();
  renderSeatSelect();
  renderTurn();
  renderPlayers();
  renderHand();
  renderDeckStats();
  renderLog();
  renderChat();
  renderBoardReference();
  if (els.libraryDialog.open) renderLibraryDialog();
  if (els.librarySearchDialog.open) renderLibrarySearchDialog();
  renderMulliganDialog();
  maybeOpenRecapDialog();
  requestAnimationFrame(() => {
    lockBattlefieldCanvas();
    positionTurnDock();
  });
}

function renderInvites() {
  els.inviteList.innerHTML = "";
  if (!state.currentPlayer.isHost || state.invites.length === 0) {
    const empty = document.createElement("p");
    empty.className = "dialog-note";
    empty.textContent = state.currentPlayer.isHost ? "This room does not have additional invite links." : "Only the host can see invite links.";
    els.inviteList.append(empty);
  }
  state.invites.forEach((invite) => {
    const item = document.createElement("div");
    item.className = "invite-item";
    const label = document.createElement("div");
    label.className = "invite-seat";
    label.innerHTML = `<strong>${escapeHtml(invite.name)}</strong><span>Seat ${invite.seat + 1} board link</span>`;
    const code = document.createElement("code");
    code.textContent = invite.url;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", () => copyText(invite.url));
    item.append(label, code, button);
    els.inviteList.append(item);
  });
  if (forceInviteDialog && state.currentPlayer.isHost && state.invites.length > 0) {
    forceInviteDialog = false;
    els.inviteDialog.showModal();
  }
}

function applyTheme() {
  document.body.classList.toggle("dark-mode", Boolean(state?.settings?.darkMode));
}

function renderRoomSettings() {
  const settings = state.settings || {};
  els.friendlyMulligansInput.checked = settings.friendlyMulligans !== false;
  els.darkModeInput.checked = Boolean(settings.darkMode);
  els.friendlyMulligansInput.disabled = false;
  els.darkModeInput.disabled = false;
}

function renderMulliganDialog() {
  const pending = Boolean(state.currentPlayer.mulliganPending);
  if (!pending) {
    if (els.mulliganDialog.open) els.mulliganDialog.close();
    return;
  }

  const count = Number(state.currentPlayer.mulliganCount) || 0;
  const friendly = state.settings?.friendlyMulligans !== false;
  const nextSize = friendly ? 7 : Math.max(1, 7 - count);
  els.mulliganSummary.textContent = friendly
    ? "Friendly mulligans are on. Each mulligan draws a fresh seven-card hand."
    : `The next mulligan will draw ${nextSize} card${nextSize === 1 ? "" : "s"}.`;
  els.mulliganCards.innerHTML = "";
  state.hand.forEach((card) => els.mulliganCards.append(cardPreviewElement(card)));
  if (!els.mulliganDialog.open) els.mulliganDialog.showModal();
}

function cardPreviewElement(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card preview-only-card";
  if (card.imageUrl) {
    button.classList.add("image-card");
    button.innerHTML = `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" draggable="false"><span>${escapeHtml(card.name)}</span>`;
  } else {
    button.innerHTML = `<strong>${escapeHtml(card.name)}</strong><small>Opening hand</small>`;
  }
  appendCardBadges(button, card, state.currentSeat, "mulliganPreview");
  attachCardZoomHandlers(button, "mulliganPreview");
  return button;
}

function recapStorageKey() {
  return state ? `mage-table-last-event:${state.id}:${state.currentSeat}` : "";
}

function latestEventSeq() {
  return Math.max(0, ...((state?.events || []).map((event) => Number(event.seq) || 0)));
}

function maybeOpenRecapDialog() {
  if (!state || state.currentPlayer.mulliganPending) return;
  const key = recapStorageKey();
  const latest = latestEventSeq();
  if (!latest) return;

  if (recapSessionKey !== key) {
    recapSessionKey = key;
    const lastSeen = Number(localStorage.getItem(key) || 0);
    if (lastSeen > 0 && latest > lastSeen) {
      recapEvents = (state.events || []).filter((event) => Number(event.seq) > lastSeen && event.actorSeat !== state.currentSeat);
      if (recapEvents.length) {
        recapIndex = 0;
        renderRecapDialog();
        els.recapDialog.showModal();
        return;
      }
    }
  }

  if (!els.recapDialog.open) {
    localStorage.setItem(key, String(latest));
  }
}

function renderRecapDialog() {
  const event = recapEvents[recapIndex];
  els.recapSummary.textContent = `${recapEvents.length} move${recapEvents.length === 1 ? "" : "s"} while you were away`;
  els.recapProgress.textContent = `${recapIndex + 1} of ${recapEvents.length}`;
  els.recapPreviousButton.disabled = recapIndex === 0;
  els.recapNextButton.disabled = recapIndex >= recapEvents.length - 1;
  els.recapStep.innerHTML = "";
  if (!event) return;
  const actor = document.createElement("strong");
  actor.textContent = event.actorName || `Player ${Number(event.actorSeat) + 1}`;
  const meta = document.createElement("span");
  meta.textContent = `Turn ${event.turn} - ${event.at}`;
  const message = document.createElement("p");
  message.textContent = event.message;
  els.recapStep.append(actor, meta, message);
  const visual = recapVisual(event.detail);
  if (visual) els.recapStep.append(visual);
}

function recapVisual(detail) {
  if (!detail?.kind) return null;
  const wrap = document.createElement("div");
  wrap.className = `recap-visual recap-${detail.kind}`;
  if (detail.kind === "move") {
    wrap.append(recapZone(detail.fromZone || "zone"));
    const arrow = document.createElement("span");
    arrow.className = "recap-arrow";
    arrow.textContent = ">";
    const destination = String(detail.toZone || "");
    const visualCard = destination === "battlefield" && detail.position
      ? recapMiniBattlefield(detail)
      : recapCard(detail.cardName, detail);
    wrap.append(arrow, visualCard, recapZone(detail.toZone || "zone"));
    return wrap;
  }
  if (detail.kind === "tap") {
    wrap.append(detail.position ? recapMiniBattlefield(detail) : recapCard(detail.cardName, detail), recapZone(detail.tapped ? "tapped" : "untapped"));
    return wrap;
  }
  if (detail.kind === "life") {
    const life = document.createElement("strong");
    life.textContent = `Life ${detail.value}`;
    wrap.append(life);
    return wrap;
  }
  if (detail.kind === "counter") {
    wrap.append(recapCard(detail.cardName, detail), recapZone(counterBadgeText(detail.counters) || "Counters changed"));
    return wrap;
  }
  return null;
}

function recapZone(label) {
  const zone = document.createElement("span");
  zone.className = "recap-zone";
  zone.textContent = labelForZone(String(label));
  return zone;
}

function recapCard(name, detail = {}) {
  const card = document.createElement("span");
  card.className = `recap-card${detail.tapped ? " tapped" : ""}`;
  card.textContent = name || "Card";
  if (detail.position?.unit === "px") {
    card.title = `Battlefield position ${Math.round(Number(detail.position.x) || 0)}, ${Math.round(Number(detail.position.y) || 0)}`;
  }
  return card;
}

function recapMiniBattlefield(detail) {
  const board = document.createElement("span");
  board.className = "recap-mini-battlefield";
  const card = recapCard(detail.cardName, detail);
  const x = Math.max(0, Math.min(86, (Number(detail.position?.x) || 0) / 8));
  const y = Math.max(0, Math.min(62, (Number(detail.position?.y) || 0) / 8));
  card.style.left = `${x}%`;
  card.style.top = `${y}%`;
  board.append(card);
  return board;
}

function closeRecapDialog() {
  if (state) localStorage.setItem(recapStorageKey(), String(latestEventSeq()));
  recapEvents = [];
  recapIndex = 0;
  els.recapDialog.close();
}

function renderDeckSetup() {
  const showSetup = !state.currentPlayer.deckLoaded && !els.inviteDialog.open;
  els.deckSetupOverlay.classList.toggle("hidden", !showSetup);
  if (!showSetup) return;
  els.deckSetupRoom.textContent = `${state.name} - Seat ${state.currentSeat + 1}`;
  const setupKey = `${state.id}:${state.currentSeat}`;
  if (loadedDeckSetupFor !== setupKey) {
    loadedDeckSetupFor = setupKey;
    els.playerNameInput.value = state.currentPlayer.name;
    els.commanderInput.value = state.currentPlayer.commander || "";
    els.setupDeckInput.value = "";
  }
}

function renderSeatSelect() {
  els.seatSelect.innerHTML = "";
  els.seatSelect.disabled = true;
  state.players.forEach((player) => {
    const option = document.createElement("option");
    option.value = String(player.seat);
    option.textContent = `${player.name} - Seat ${player.seat + 1}`;
    option.selected = player.seat === state.currentSeat;
    els.seatSelect.append(option);
  });
}

function renderTurn() {
  const activeName = state.players[state.activePlayer].name;
  const priorityName = state.players[state.prioritySeat ?? state.activePlayer]?.name || activeName;
  const solo = isSoloMode();
  const prioritySuffix = state.priorityMode && state.priorityMode !== "turn"
    ? ` - ${state.priorityMode} priority: ${priorityName}`
    : ` - priority: ${priorityName}`;
  els.activePlayerText.textContent = solo ? `${activeName} - Solo playtest` : `${activeName}${prioritySuffix}`;
  els.turnCountText.textContent = `Turn ${Number(state.turnNumber) || 1}`;
  els.endTurnButton.disabled = !isMyTurn();
  els.drawButton.disabled = !canActNow();
  els.combatPassButton.disabled = !isMyTurn();
  els.instantButton.disabled = isMyTurn() || isPriorityHolder();
  els.passPriorityButton.disabled = !isPriorityHolder();
  els.instantButton.classList.toggle("hidden", solo);
  els.combatPassButton.classList.toggle("hidden", solo);
  els.passPriorityButton.classList.toggle("hidden", solo);
  els.boardReferenceButton.disabled = state.players.length <= 1;
  els.boardReferenceButton.classList.toggle("hidden", solo);
  document.body.classList.toggle("not-my-turn", !isMyTurn());
}

function positionTurnDock() {
  if (!state || els.turnDock.classList.contains("hidden")) return;
  els.turnDock.style.removeProperty("--turn-dock-bottom");
  const visibleCards = [...document.querySelectorAll("#handZone .card, .battlefield-card-layer .card")]
    .map((card) => card.getBoundingClientRect())
    .filter((rect) => rect.width > 0 && rect.height > 0);
  if (!visibleCards.length) return;

  const dockRect = els.turnDock.getBoundingClientRect();
  const overlaps = visibleCards.filter((rect) => rectsOverlap(rect, dockRect));
  if (!overlaps.length) return;

  const handFrame = els.handZone.closest(".zone") || els.handZone;
  const handRect = handFrame.getBoundingClientRect();
  const aboveHandBottom = Math.max(10, Math.round(window.innerHeight - handRect.top + 8));
  const aboveCardBottom = Math.max(10, Math.round(window.innerHeight - Math.min(...overlaps.map((rect) => rect.top)) + 8));
  const maxBottom = Math.max(10, Math.round(window.innerHeight - dockRect.height - 10));
  const bottom = Math.min(maxBottom, Math.max(aboveHandBottom, aboveCardBottom));
  els.turnDock.style.setProperty("--turn-dock-bottom", `${bottom}px`);
}

function rectsOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function isSoloMode() {
  return state && state.players.length === 1;
}

function isMyTurn() {
  return state && state.currentSeat === state.activePlayer;
}

function isPriorityHolder() {
  return state && Number(state.prioritySeat ?? state.activePlayer) === state.currentSeat;
}

function canActNow() {
  return isMyTurn() || isPriorityHolder();
}

function canChangeLife(seat) {
  return seat === state.currentSeat || canActNow();
}

function renderPlayers() {
  els.playersGrid.innerHTML = "";
  const focusSeat = focusSeatForBoard();
  const focusedPlayer = state.players[focusSeat];
  if (!focusedPlayer) return;

  const focus = document.createElement("section");
  focus.className = "active-board-shell";
  focus.append(lifeRibbon());
  const reveals = publicRevealStrip();
  if (reveals) {
    focus.classList.add("has-reveals");
    focus.append(reveals);
  }
  focus.append(playerBoard(focusedPlayer, focusedPlayer.seat === state.currentSeat ? "self" : "active-view"));
  els.playersGrid.append(focus);
}

function focusSeatForBoard() {
  if (!state) return 0;
  if (state.players.length > 1 && state.priorityMode && state.priorityMode !== "turn") {
    const prioritySeat = Number(state.prioritySeat ?? state.activePlayer);
    return state.players[prioritySeat] ? prioritySeat : Number(state.activePlayer) || 0;
  }
  return Number(state.activePlayer) || 0;
}

function lifeRibbon() {
  const ribbon = document.createElement("section");
  ribbon.className = "life-ribbon";
  const entries = [...state.players.map((player) => ({ kind: "player", player }))];
  if (isSoloMode()) entries.push({ kind: "playtest", player: state.playtestOpponent || { name: "Playtest Opponent", commander: "Simulation", life: 40 } });
  ribbon.style.setProperty("--life-columns", String(Math.max(1, entries.length)));
  entries.forEach((entry) => ribbon.append(lifeRibbonCard(entry)));
  return ribbon;
}

function lifeRibbonCard(entry) {
  const player = entry.player;
  const isPlaytest = entry.kind === "playtest";
  const item = document.createElement("article");
  item.className = isPlaytest
    ? "life-ribbon-card playtest-life-card"
    : `life-ribbon-card${player.seat === state.activePlayer ? " active-life-card" : ""}${player.seat === (state.prioritySeat ?? state.activePlayer) ? " priority-life-card" : ""}`;
  const identity = document.createElement("div");
  identity.className = "life-ribbon-identity";
  identity.innerHTML = `<strong>${escapeHtml(player.name)}</strong><span>${escapeHtml(player.commander || (isPlaytest ? "Simulation" : "No commander"))}</span>`;
  item.append(identity, lifeMenuControl(entry));
  return item;
}

function lifeMenuControl(entry) {
  const player = entry.player;
  const isPlaytest = entry.kind === "playtest";
  const details = document.createElement("details");
  details.className = "life-menu";
  const summary = document.createElement("summary");
  summary.className = "life-menu-summary";
  const value = document.createElement("strong");
  value.textContent = String(player.life);
  const label = document.createElement("span");
  label.textContent = "Life";
  summary.append(value, label);
  const life = document.createElement("div");
  life.className = "life-control";
  if (isPlaytest) life.append(playtestLifeButton(-1), lifeTotal(player.life), playtestLifeButton(1));
  else life.append(lifeButton(player.seat, -1), lifeTotal(player.life), lifeButton(player.seat, 1));
  const panel = document.createElement("div");
  panel.className = "life-menu-panel";
  panel.append(life);
  if (!isPlaytest) panel.append(playerCounterControl(player));
  details.append(summary, panel);
  return details;
}

function playtestLifeButton(delta) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = delta > 0 ? "+" : "-";
  button.addEventListener("click", () => sendAction("playtestLife", { delta }));
  return button;
}

function publicRevealStrip() {
  const reveals = (state.reveals || []).filter((reveal) => !isRevealHidden(reveal));
  if (!reveals.length) return null;
  const strip = document.createElement("section");
  strip.className = "public-reveal-strip";
  reveals.forEach((reveal) => {
    noteRevealSeen(reveal);
    const group = document.createElement("article");
    group.className = "public-reveal-group";
    const title = document.createElement("span");
    title.textContent = `${reveal.name} revealed`;
    const cards = document.createElement("div");
    cards.className = "public-reveal-cards";
    reveal.cards.forEach((card) => cards.append(cardPreviewElement(card)));
    group.append(title, cards);
    if (reveal.seat !== state.currentSeat) {
      const dismiss = document.createElement("button");
      dismiss.type = "button";
      dismiss.className = "reveal-dismiss-button";
      dismiss.textContent = "Dismiss";
      dismiss.addEventListener("click", () => {
        dismissedReveals.add(revealKey(reveal));
        renderPlayers();
      });
      group.append(dismiss);
    }
    strip.append(group);
  });
  return strip;
}

function revealKey(reveal) {
  return `${state.id}:${state.currentSeat}:${reveal.seat}:${(reveal.cards || []).map((card) => card.id).join(",")}`;
}

function isRevealHidden(reveal) {
  if (reveal.seat === state.currentSeat) return false;
  const key = revealKey(reveal);
  if (dismissedReveals.has(key)) return true;
  const seenAt = revealSeenAt.get(key);
  return Boolean(seenAt && Date.now() - seenAt > 30_000);
}

function noteRevealSeen(reveal) {
  if (reveal.seat === state.currentSeat) return;
  const key = revealKey(reveal);
  if (!revealSeenAt.has(key)) revealSeenAt.set(key, Date.now());
  if (revealTimeouts.has(key)) return;
  const timeout = setTimeout(() => {
    revealTimeouts.delete(key);
    if (state) renderPlayers();
  }, 30_000);
  revealTimeouts.set(key, timeout);
}

function renderBoardReference() {
  const others = state.players.filter((player) => player.seat !== state.activePlayer);
  const columns = Math.max(1, Math.ceil(Math.sqrt(Math.max(1, others.length))));
  const rows = Math.max(1, Math.ceil(Math.max(1, others.length) / columns));
  els.boardReferenceSummary.textContent = isMyTurn()
    ? "Other players' public boards"
    : `${state.players[state.activePlayer].name}'s turn is on the main board`;
  els.boardReferenceList.innerHTML = "";
  els.boardReferenceList.style.setProperty("--reference-columns", String(columns));
  els.boardReferenceList.style.setProperty("--reference-rows", String(rows));
  others.forEach((player) => els.boardReferenceList.append(playerBoard(player, "reference")));
}

function playerBoard(player, role) {
  const board = document.createElement("article");
  board.className = `player-board ${role}-player-board${player.seat === state.currentSeat ? " current-player-board" : ""}${player.seat === state.activePlayer ? " active-player-board" : ""}`;

  const header = document.createElement("div");
  header.className = "player-header";
  const name = document.createElement("div");
  name.className = "player-name";
  name.innerHTML = `
    <strong>${escapeHtml(player.name)}</strong>
    <span class="seat-pill">Seat ${player.seat + 1}</span>
    ${player.commander ? `<span class="commander-pill">${escapeHtml(player.commander)}</span>` : ""}
    ${player.seat === state.currentSeat ? '<span class="you-pill">Your board</span>' : ""}
    ${player.seat === state.activePlayer ? `<span class="active-pill">Turn ${Number(state.turnNumber) || 1}</span>` : ""}
  `;
  header.append(name);

  const table = document.createElement("div");
  table.className = "mtg-board-layout";

  const battlefield = publicZone(player, "battlefield", "Battlefield", "battlefield-zone", role);

  const piles = document.createElement("aside");
  piles.className = "pile-column";
  piles.append(
    publicZone(player, "commanderZone", "Commander", "pile-zone commander-zone", role),
    pileCounter("Library", player.libraryCount, player.seat),
    publicZone(player, "graveyard", "Graveyard", "pile-zone", role),
    publicZone(player, "exile", "Exile", "pile-zone", role),
  );

  table.append(battlefield, piles);
  board.append(header, table);
  return board;
}

function pileCounter(label, count, seat = null) {
  const zone = document.createElement("section");
  zone.className = "pile-zone count-pile";
  zone.innerHTML = `<span>${label}</span><strong>${count}</strong>`;
  if (label === "Library" && seat === state.currentSeat) {
    zone.classList.add("library-pile");
    zone.setAttribute("role", "button");
    zone.tabIndex = 0;
    makeDropZone(zone, seat, "library");
    zone.addEventListener("click", () => {
      if (canActNow()) sendAction("draw");
    });
    zone.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLibraryDialog();
    });
    zone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openLibraryDialog();
    });
  }
  return zone;
}

function publicZone(player, zoneName, label, className, role = "") {
  const zone = document.createElement("section");
  zone.className = className;
  zone.innerHTML = `<span>${label}</span>`;
  makeDropZone(zone, player.seat, zoneName);
  if (zoneName === "graveyard" || zoneName === "exile") {
    zone.classList.add("zone-viewer-trigger");
    zone.setAttribute("role", "button");
    zone.tabIndex = 0;
    zone.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openZoneDialog(player, zoneName, label);
    });
    zone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openZoneDialog(player, zoneName, label);
    });
  }
  if (zoneName === "battlefield" && role !== "reference" && player.seat === state.currentSeat) {
    zone.addEventListener("contextmenu", (event) => {
      if (event.target.closest(".card")) return;
      event.preventDefault();
      event.stopPropagation();
      if (!canActNow()) return;
      openTokenDialog(event, player, zone);
    });
  }
  const cards = document.createElement("div");
  cards.className = zoneName === "battlefield" ? "battlefield-card-layer" : "card-grid";
  (player[zoneName] || []).forEach((card, index) => cards.append(cardElement(card, player.seat, zoneName, index)));
  zone.append(cards);
  if (zoneName === "commanderZone") zone.append(commanderTaxControl(player));
  if (zoneName === "battlefield" && role !== "reference") applyBattlefieldCanvasSize(zone);
  return zone;
}

function renderHand() {
  els.handTitle.textContent = `${state.players[state.currentSeat].name} Hand`;
  els.handCount.textContent = `${state.hand.length} cards`;
  els.handZone.innerHTML = "";
  els.handZone.style.setProperty("--hand-count", String(Math.max(1, state.hand.length)));
  const handScale = currentCardScale();
  const availableWidth = Math.max(320, els.handZone.clientWidth || window.innerWidth - 320);
  const gapWidth = Math.max(0, state.hand.length - 1) * 8;
  const fitWidth = Math.floor((availableWidth - gapWidth - 24) / Math.max(1, state.hand.length));
  const maxHandWidth = Math.round(96 * handScale);
  const minHandWidth = Math.round(58 * handScale);
  const handCardWidth = Math.max(minHandWidth, Math.min(maxHandWidth, fitWidth));
  els.handZone.style.setProperty("--hand-card-width", `${handCardWidth}px`);
  makeDropZone(els.handZone, state.currentSeat, "hand");
  state.hand.forEach((card) => els.handZone.append(cardElement(card, state.currentSeat, "hand")));
}

function renderDeckStats() {
  renderStatsBlock(els.deckStats, state.currentPlayer.deckStats);
  renderStatsBlock(els.setupDeckStats, state.currentPlayer.deckStats);
}

function renderStatsBlock(container, stats) {
  if (!stats) {
    container.classList.add("hidden");
    container.innerHTML = "";
    return;
  }
  container.classList.remove("hidden");
  const warning = stats.notFound?.length
    ? `<div class="deck-warning">Could not resolve: ${stats.notFound.map(escapeHtml).join(", ")}. Check spelling or remove extra export text.</div>`
    : "";
  container.innerHTML = `
    <div class="stat-grid">
      <span><strong>${stats.total}</strong>Total</span>
      <span><strong>${stats.land}</strong>Lands</span>
      <span><strong>${stats.nonland}</strong>Nonlands</span>
      <span><strong>${stats.unique}</strong>Unique</span>
    </div>
    ${warning}
  `;
}

function renderLog() {
  els.actionLog.innerHTML = "";
  state.log.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "log-entry";
    div.textContent = `${entry.at} - ${entry.message}`;
    els.actionLog.append(div);
  });
}

function renderChat() {
  const messages = state.chat || [];
  const seen = getSeenChatCount();
  const unread = Math.max(0, messages.length - seen);
  els.chatBadge.textContent = String(unread);
  els.chatBadge.classList.toggle("hidden", unread === 0);
  if (!els.chatDialog.open) return;
  els.chatMessages.innerHTML = "";
  messages.forEach((message) => {
    const row = document.createElement("div");
    row.className = `chat-message${message.seat === state.currentSeat ? " own-message" : ""}`;
    row.innerHTML = `<strong>${escapeHtml(message.name)}</strong><span>${escapeHtml(message.text)}</span>`;
    els.chatMessages.append(row);
  });
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function chatSeenKey() {
  return state ? `mage-table-chat-seen:${state.id}:${state.currentSeat}` : "";
}

function getSeenChatCount() {
  return Number(localStorage.getItem(chatSeenKey()) || 0);
}

function markChatRead() {
  if (!state) return;
  localStorage.setItem(chatSeenKey(), String((state.chat || []).length));
  renderChat();
}

function lifeButton(seat, delta) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = delta > 0 ? "+" : "-";
  button.disabled = !canChangeLife(seat);
  button.addEventListener("click", () => sendAction("life", { seat, delta }));
  return button;
}

function lifeTotal(value) {
  const wrap = document.createElement("div");
  wrap.className = "life-total-wrap";
  const label = document.createElement("span");
  label.textContent = "Life Total";
  const strong = document.createElement("strong");
  strong.className = "life-total";
  strong.textContent = String(value);
  wrap.append(label, strong);
  return wrap;
}

function playerCounterControl(player) {
  const wrap = document.createElement("div");
  wrap.className = "player-counter-control";
  const chips = playerCounterChips(player.playerCounters, player.seat === state.currentSeat);
  wrap.append(chips);
  if (player.seat !== state.currentSeat) return wrap;

  const row = document.createElement("div");
  row.className = "player-counter-row";
  const select = document.createElement("select");
  select.setAttribute("aria-label", "Player counter type");
  const selectionKey = `${state.id}:${player.seat}`;
  const selectedValue = playerCounterSelections.get(selectionKey) || playerCounterOptions[0];
  playerCounterOptions.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    option.selected = name === selectedValue;
    select.append(option);
  });
  select.addEventListener("change", () => {
    playerCounterSelections.set(selectionKey, select.value);
  });
  const plus = playerCounterButton("+", () => sendAction("playerCounter", { seat: player.seat, counterName: select.value, delta: 1 }));
  const minus = playerCounterButton("-", () => sendAction("playerCounter", { seat: player.seat, counterName: select.value, delta: -1 }));
  row.append(select, plus, minus);
  wrap.append(row);
  return wrap;
}

function playerCounterChips(counters = {}, showEmpty = false) {
  const chips = document.createElement("div");
  chips.className = "player-counter-chips";
  const entries = Object.entries(counters || {}).filter(([, value]) => Number(value) > 0);
  if (!entries.length) {
    if (!showEmpty) return chips;
    const empty = document.createElement("span");
    empty.className = "player-counter-empty";
    empty.textContent = "No counters";
    chips.append(empty);
    return chips;
  }
  entries.forEach(([name, value]) => {
    const chip = document.createElement("span");
    chip.className = "player-counter-chip";
    chip.textContent = `${name}: ${value}`;
    chips.append(chip);
  });
  return chips;
}

function playerCounterButton(label, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "player-counter-button";
  button.textContent = label;
  button.addEventListener("click", handler);
  return button;
}

function commanderTaxControl(player) {
  const wrap = document.createElement("div");
  wrap.className = "commander-tax-control";
  const label = document.createElement("span");
  label.textContent = `Tax ${Number(player.commanderTax) || 0}`;
  wrap.append(label);
  if (player.seat !== state.currentSeat) return wrap;
  wrap.append(
    commanderTaxButton("+", () => sendAction("commanderTax", { seat: player.seat, delta: 1 })),
    commanderTaxButton("-", () => sendAction("commanderTax", { seat: player.seat, delta: -1 })),
  );
  return wrap;
}

function commanderTaxButton(label, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "commander-tax-button";
  button.textContent = label;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    handler();
  });
  return button;
}

function cardElement(card, seat, zone, index = 0) {
  const button = document.createElement("button");
  button.type = "button";
  const isTapped = zone === "battlefield" && card.tapped;
  button.className = `card${isTapped ? " tapped" : ""}`;
  if (card.isToken) button.classList.add("token-card");
  if (zone === "battlefield") {
    button.classList.add("free-card");
    const pos = normalizeBattlefieldPosition(card.position, isTapped);
    button.style.left = `${pos.x}px`;
    button.style.top = `${pos.y}px`;
    button.style.zIndex = String(index + 1);
  }
  if (seat !== null && zone !== "library" && zone !== "librarySearch") {
    button.draggable = false;
    button.addEventListener("dragstart", (event) => event.preventDefault());
    attachCardPointerDrag(button, card, seat, zone, index);
  }
  if (card.imageUrl) {
    button.classList.add("image-card");
    button.innerHTML = `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" draggable="false"><span>${escapeHtml(card.name)}</span>`;
  } else {
    button.innerHTML = `<strong>${escapeHtml(card.name)}</strong><small>${labelForZone(zone)}</small>`;
  }
  appendCardBadges(button, card, seat, zone);
  if (zone === "librarySearch") {
    attachCardZoomHandlers(button, zone, index);
    return button;
  }
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (button.dataset.suppressClick === "1") {
      event.preventDefault();
      return;
    }
    if (zone === "battlefield") {
      if (canActNow() && seat === state.currentSeat) {
        sendAction("tap", { seat, zone, cardId: card.id });
      } else {
        openCardDialog(card, seat, zone);
      }
      return;
    }
    openCardDialog(card, seat, zone);
  });
  attachCardZoomHandlers(button, zone, index);
  button.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCardDialog(card, seat, zone);
  });
  return button;
}

function appendCardBadges(button, card, seat, zone) {
  const counterText = counterBadgeText(card.counters);
  if (!card.isToken && !counterText) return;
  const wrap = document.createElement("div");
  wrap.className = "card-badges";
  if (card.isToken) {
    const span = document.createElement("span");
    span.className = "token-badge";
    span.textContent = "Token";
    wrap.append(span);
  }
  if (counterText) wrap.append(counterBadgeElement(card, counterText, seat, zone));
  button.append(wrap);
}

function counterBadgeElement(card, text, seat, zone) {
  const span = document.createElement("span");
  span.className = `counter-badge ${counterBadgeTone(card.counters)}`;
  const canEdit = zone === "battlefield" && seat === state.currentSeat && canActNow();
  if (!canEdit) {
    span.textContent = text;
    return span;
  }
  const mainControls = document.createElement("span");
  mainControls.className = "counter-main-controls";
  const plus = counterStepButton("+", () => adjustCounter(card, "powerToughness", 1));
  const value = document.createElement("span");
  value.className = "counter-value";
  value.textContent = text;
  const minus = counterStepButton("-", () => adjustCounter(card, "powerToughness", -1));
  mainControls.append(plus, value, minus);

  const sideControls = document.createElement("span");
  sideControls.className = "counter-side-controls";
  sideControls.append(
    counterSideColumn("P", () => adjustCounter(card, "power", 1), () => adjustCounter(card, "power", -1)),
    counterSideColumn("T", () => adjustCounter(card, "toughness", 1), () => adjustCounter(card, "toughness", -1)),
  );
  span.append(mainControls, sideControls);
  return span;
}

function counterSideColumn(label, plusHandler, minusHandler) {
  const column = document.createElement("span");
  column.className = "counter-side-column";
  const title = document.createElement("span");
  title.className = "counter-side-label";
  title.textContent = label;
  column.append(counterStepButton("+", plusHandler), title, counterStepButton("-", minusHandler));
  return column;
}

function counterStepButton(label, handler) {
  const control = document.createElement("span");
  control.className = "counter-step";
  control.setAttribute("role", "button");
  control.textContent = label;
  ["pointerdown", "mousedown", "click"].forEach((eventName) => {
    control.addEventListener(eventName, (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });
  control.addEventListener("click", async () => {
    await handler();
  });
  return control;
}

function counterBadgeText(counters = {}) {
  const totals = counterTotals(counters);
  if (totals.power === 0 && totals.toughness === 0) return "";
  return `${formatCounterModifier(totals.power)}/${formatCounterModifier(totals.toughness)}`;
}

function counterBadgeTone(counters = {}) {
  const totals = counterTotals(counters);
  if (totals.power < 0 || totals.toughness < 0) return "negative-counter";
  return "plus-counter";
}

function formatCounterModifier(value) {
  if (value === 0) return "0";
  const sign = value > 0 ? "+" : "-";
  return `${sign}${Math.abs(value)}`;
}

function counterTotals(counters = {}) {
  const shared = counterTotal(counters);
  return {
    power: shared + (Number(counters.power) || 0),
    toughness: shared + (Number(counters.toughness) || 0),
  };
}

function counterTotal(counters = {}) {
  let total = Number(counters.powerToughness) || 0;
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

function attachCardZoomHandlers(button, zone, index = 0) {
  button.addEventListener("mouseenter", () => {
    hoveredZoomCard = button;
    if (document.body.classList.contains("ctrl-zoom")) showCardZoom(button);
    if (document.body.classList.contains("ctrl-zoom")) button.style.zIndex = "1000";
  });
  button.addEventListener("mousemove", () => {
    hoveredZoomCard = button;
    if (document.body.classList.contains("ctrl-zoom")) positionCardZoom(button);
  });
  button.addEventListener("mouseleave", () => {
    if (battlefieldPointerDrag?.button === button) return;
    if (hoveredZoomCard === button) hoveredZoomCard = null;
    hideCardZoom(button);
    if (zone === "battlefield") button.style.zIndex = String(index + 1);
    else button.style.removeProperty("z-index");
  });
}

function attachCardPointerDrag(button, card, seat, zone, index = 0) {
  button.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !canActNow() || seat !== state.currentSeat) return;
    const cardRect = button.getBoundingClientRect();
    const layer = zone === "battlefield" ? button.closest(".battlefield-card-layer") : null;
    const layerMetrics = layer ? battlefieldLayerMetrics(layer) : null;
    const pointerLayerX = layerMetrics ? (event.clientX - layerMetrics.left) * layerMetrics.scaleX : 0;
    const pointerLayerY = layerMetrics ? (event.clientY - layerMetrics.top) * layerMetrics.scaleY : 0;
    const cardLayerLeft = layer ? pixelValue(button.style.left, button.offsetLeft) : 0;
    const cardLayerTop = layer ? pixelValue(button.style.top, button.offsetTop) : 0;
    battlefieldPointerDrag = {
      cardId: card.id,
      seat,
      fromZone: zone,
      cardName: card.name,
      isCommander: card.isCommander,
      owner: card.owner,
      index,
      button,
      layer,
      layerMetrics,
      startClientX: event.clientX,
      startClientY: event.clientY,
      moved: false,
      offsetX: layer ? pointerLayerX - cardLayerLeft : cardRect.width / 2,
      offsetY: layer ? pointerLayerY - cardLayerTop : cardRect.height / 2,
      ghost: null,
      ghostOffsetX: event.clientX - cardRect.left,
      ghostOffsetY: event.clientY - cardRect.top,
      originalZIndex: button.style.zIndex,
      tapped: zone === "battlefield" && card.tapped,
      width: cardRect.width,
      height: cardRect.height,
      layoutWidth: button.offsetWidth || cardRect.width,
      layoutHeight: button.offsetHeight || cardRect.height,
    };
    button.setPointerCapture(event.pointerId);
    button.classList.add("drag-origin");
    button.style.zIndex = "100";
  });

  button.addEventListener("pointermove", (event) => {
    if (!battlefieldPointerDrag || battlefieldPointerDrag.button !== button) return;
    const drag = battlefieldPointerDrag;
    const distance = Math.hypot(event.clientX - drag.startClientX, event.clientY - drag.startClientY);
    if (distance < 3 && !drag.moved) return;
    drag.moved = true;
    event.preventDefault();
    clearPointerDropHighlights();
    const source = pointerDragSource(drag);
    const battlefieldTarget = battlefieldTargetFromPointer(event, drag);
    const target = battlefieldTarget || cardDropTargetFromPoint(event, source) || dropZoneFromPoint(event, drag.ghost || button, source);
    if (battlefieldTarget) {
      drag.ghost?.remove();
      drag.ghost = null;
      const position = pointerBattlefieldPosition(event, drag, target.element);
      drag.lastBattlefieldPosition = position;
      button.style.left = `${position.x}px`;
      button.style.top = `${position.y}px`;
    } else {
      moveBattlefieldDragGhost(event, drag);
    }
    if (target && canDropCard(source, target.seat, target.zone)) {
      target.element.classList.add("drop-active");
    }
  });

  button.addEventListener("pointerup", async (event) => {
    if (!battlefieldPointerDrag || battlefieldPointerDrag.button !== button) return;
    const drag = battlefieldPointerDrag;
    const source = pointerDragSource(drag);
    const battlefieldTarget = battlefieldTargetFromPointer(event, drag);
    const dropTarget = battlefieldTarget || cardDropTargetFromPoint(event, source) || dropZoneFromPoint(event, drag.ghost || button, source);
    battlefieldPointerDrag = null;
    if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId);
    cleanupBattlefieldPointerDrag(drag);
    clearPointerDropHighlights();
    if (!drag.moved) {
      button.style.zIndex = String(index + 1);
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    button.dataset.suppressClick = "1";
    setTimeout(() => delete button.dataset.suppressClick, 0);
    if (dropTarget && canDropCard(source, dropTarget.seat, dropTarget.zone)) {
      if (dropTarget.zone === "battlefield") {
        const position = pointerBattlefieldPosition(event, drag, dropTarget.element);
        await dropCard(source, dropTarget.seat, dropTarget.zone, position);
      } else {
        await dropCard(source, dropTarget.seat, dropTarget.zone);
      }
      if (els.zoneDialog.open && ["graveyard", "exile"].includes(source.fromZone)) els.zoneDialog.close();
      return;
    }
    if (source.fromZone === "battlefield" && drag.lastBattlefieldPosition) {
      await dropCard(source, source.seat, "battlefield", drag.lastBattlefieldPosition);
    }
  });

  button.addEventListener("pointercancel", (event) => {
    if (!battlefieldPointerDrag || battlefieldPointerDrag.button !== button) return;
    const drag = battlefieldPointerDrag;
    battlefieldPointerDrag = null;
    if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId);
    cleanupBattlefieldPointerDrag(drag);
    clearPointerDropHighlights();
  });
}

function pointerDragSource(drag) {
  return {
    cardId: drag.cardId,
    cardName: drag.cardName,
    isCommander: drag.isCommander,
    owner: drag.owner,
    tapped: drag.tapped,
    seat: drag.seat,
    fromZone: drag.fromZone,
    width: drag.width,
    height: drag.height,
    layoutWidth: drag.layoutWidth,
    layoutHeight: drag.layoutHeight,
  };
}

function clearPointerDropHighlights() {
  document.querySelectorAll(".drop-active").forEach((node) => node.classList.remove("drop-active"));
}

function moveBattlefieldDragGhost(event, drag) {
  if (!drag.ghost) {
    const ghost = drag.button.cloneNode(true);
    ghost.classList.remove("drag-origin");
    ghost.classList.add("battlefield-drag-ghost");
    ghost.style.left = "0px";
    ghost.style.top = "0px";
    ghost.style.zIndex = "";
    ghost.style.width = `${drag.button.offsetWidth}px`;
    document.body.append(ghost);
    drag.ghost = ghost;
  }
  drag.ghost.style.left = `${event.clientX - drag.ghostOffsetX}px`;
  drag.ghost.style.top = `${event.clientY - drag.ghostOffsetY}px`;
}

function cleanupBattlefieldPointerDrag(drag) {
  drag.button.classList.remove("drag-origin");
  drag.button.style.zIndex = drag.originalZIndex || String(drag.index + 1);
  drag.ghost?.remove();
  drag.ghost = null;
}

function cardDropTargetFromPoint(event, source) {
  const allowedZones = ["battlefield", "hand", "graveyard", "exile", "library", "commanderZone"];
  const targets = [...document.querySelectorAll("[data-drop-zone]")]
    .filter((node) => allowedZones.includes(node.dataset.dropZone))
    .map((node) => {
      const rect = node.getBoundingClientRect();
      const targetSeat = Number(node.dataset.dropSeat);
      const targetZone = node.dataset.dropZone;
      const pad = targetZone === "battlefield" ? 0 : targetZone === "hand" ? 18 : 12;
      const contains =
        event.clientX >= rect.left - pad &&
        event.clientX <= rect.right + pad &&
        event.clientY >= rect.top - pad &&
        event.clientY <= rect.bottom + pad;
      return { element: node, seat: targetSeat, zone: targetZone, rect, contains };
    })
    .filter((target) => target.contains && canDropCard(source, target.seat, target.zone))
    .sort((a, b) => {
      const movingWithinBattlefield = source.fromZone === "battlefield";
      const aZonePriority = movingWithinBattlefield
        ? Number(a.zone === "battlefield")
        : Number(a.zone !== "battlefield");
      const bZonePriority = movingWithinBattlefield
        ? Number(b.zone === "battlefield")
        : Number(b.zone !== "battlefield");
      if (aZonePriority !== bZonePriority) return bZonePriority - aZonePriority;
      const aArea = a.rect.width * a.rect.height;
      const bArea = b.rect.width * b.rect.height;
      return aArea - bArea;
    });
  return targets[0] || null;
}

function battlefieldLayerMetrics(layer) {
  const rect = layer.getBoundingClientRect();
  const width = layer.offsetWidth || battlefieldLayerSize?.width || rect.width;
  const height = layer.offsetHeight || battlefieldLayerSize?.height || rect.height;
  return {
    left: rect.left,
    top: rect.top,
    right: rect.left + rect.width,
    bottom: rect.top + rect.height,
    rectWidth: rect.width,
    rectHeight: rect.height,
    width,
    height,
    scaleX: width / Math.max(1, rect.width),
    scaleY: height / Math.max(1, rect.height),
  };
}

function pixelValue(value, fallback = 0) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : fallback;
}

function battlefieldTargetFromPointer(event, drag) {
  if (drag.fromZone !== "battlefield" || !drag.layer) return null;
  const metrics = drag.layerMetrics || battlefieldLayerMetrics(drag.layer);
  const inside =
    event.clientX >= metrics.left &&
    event.clientX <= metrics.right &&
    event.clientY >= metrics.top &&
    event.clientY <= metrics.bottom;
  if (!inside) return null;
  const element = drag.layer.closest("[data-drop-zone]") || drag.layer;
  return {
    element,
    seat: drag.seat,
    zone: "battlefield",
  };
}

function pointerBattlefieldPosition(event, drag, battlefieldZone) {
  const layer = battlefieldZone?.querySelector(".battlefield-card-layer") || drag.layer;
  if (!layer) return null;
  const metrics = layer === drag.layer && drag.layerMetrics ? drag.layerMetrics : battlefieldLayerMetrics(layer);
  const cardSize = drag.fromZone === "battlefield"
    ? { width: drag.layoutWidth || drag.width, height: drag.layoutHeight || drag.height }
    : currentBattlefieldCardSize();
  const offsetX = drag.fromZone === "battlefield" ? drag.offsetX : cardSize.width / 2;
  const offsetY = drag.fromZone === "battlefield" ? drag.offsetY : cardSize.height / 2;
  const x = (event.clientX - metrics.left) * metrics.scaleX - offsetX;
  const y = (event.clientY - metrics.top) * metrics.scaleY - offsetY;
  return clampBattlefieldPixels(
    { x, y, unit: "px" },
    drag.tapped,
    cardSize,
    { width: metrics.width, height: metrics.height },
  );
}

function makeDropZone(element, seat, zone) {
  element.dataset.dropSeat = String(seat);
  element.dataset.dropZone = zone;
  element.addEventListener("dragover", (event) => {
    if (!draggedCard || !canDropCard(draggedCard, seat, zone)) return;
    event.preventDefault();
    element.classList.add("drop-active");
  });
  element.addEventListener("dragleave", () => {
    element.classList.remove("drop-active");
  });
  element.addEventListener("drop", async (event) => {
    if (!draggedCard || !canDropCard(draggedCard, seat, zone)) return;
    event.preventDefault();
    event.stopPropagation();
    element.classList.remove("drop-active");
    const source = draggedCard;
    const position = battlefieldPositionFromEvent(event, element, zone, source);
    draggedCard = null;
    draggedPreviewCardId = "";
    await dropCard(source, seat, zone, position);
  });
}

function dropZoneFromPoint(event, draggedNode = null, source = null) {
  if (draggedNode) draggedNode.style.pointerEvents = "none";
  const elements = document.elementsFromPoint?.(event.clientX, event.clientY) || [document.elementFromPoint(event.clientX, event.clientY)].filter(Boolean);
  if (draggedNode) draggedNode.style.pointerEvents = "";
  const candidates = [];
  const addCandidate = (node) => {
    const dropZone = node?.closest?.("[data-drop-zone]");
    if (!dropZone || candidates.includes(dropZone)) return;
    candidates.push(dropZone);
  };
  for (const element of elements) {
    addCandidate(element);
  }
  document.querySelectorAll("[data-drop-zone]").forEach((node) => {
    const rect = node.getBoundingClientRect();
    if (event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom && !candidates.includes(node)) {
      candidates.push(node);
    }
  });
  const sorted = candidates.sort((a, b) => {
    const aValid = source ? Number(canDropCard(source, Number(a.dataset.dropSeat), a.dataset.dropZone)) : 0;
    const bValid = source ? Number(canDropCard(source, Number(b.dataset.dropSeat), b.dataset.dropZone)) : 0;
    if (aValid !== bValid) return bValid - aValid;
    const aNonBattlefield = Number(a.dataset.dropZone !== "battlefield");
    const bNonBattlefield = Number(b.dataset.dropZone !== "battlefield");
    if (aNonBattlefield !== bNonBattlefield) return bNonBattlefield - aNonBattlefield;
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return aRect.width * aRect.height - bRect.width * bRect.height;
  });
  const dropZone = sorted[0];
  if (!dropZone) return null;
  return {
    element: dropZone,
    seat: Number(dropZone.dataset.dropSeat),
    zone: dropZone.dataset.dropZone,
  };
}

function canDropCard(source, targetSeat, targetZone) {
  if (!canActNow()) return false;
  if (source.seat !== state.currentSeat || targetSeat !== state.currentSeat) return false;
  if (targetZone === "hand" && (targetSeat !== state.currentSeat || source.seat !== state.currentSeat)) return false;
  if (targetZone === "library" && (targetSeat !== state.currentSeat || source.seat !== state.currentSeat)) return false;
  if (source.fromZone === "hand" && targetSeat !== state.currentSeat) return false;
  if (source.fromZone === "library" && !["hand", "battlefield", "graveyard", "exile", "commanderZone"].includes(targetZone)) return false;
  if (targetZone === "commanderZone" && !isCommanderForSeat({ name: source.cardName, isCommander: source.isCommander, owner: source.owner }, targetSeat)) return false;
  if (source.fromZone === targetZone && source.seat === targetSeat && targetZone !== "battlefield") return false;
  return ["commanderZone", "battlefield", "graveyard", "exile", "hand", "library"].includes(targetZone);
}

function isCommanderForSeat(card, seat) {
  const player = state?.players?.[seat];
  if (card?.isCommander && card?.owner === seat) return true;
  const commander = String(player?.commander || "").trim().toLowerCase();
  const cardName = String(card?.name || "").trim().toLowerCase();
  if (!commander || !cardName) return false;
  return cardName === commander || cardName.split(" // ").some((face) => face.trim() === commander);
}

function battlefieldPositionFromEvent(event, element, zone, source = draggedCard) {
  if (zone !== "battlefield") return null;
  const target = element.querySelector(".battlefield-card-layer") || element;
  const rect = target.getBoundingClientRect();
  const currentSize = currentBattlefieldCardSize();
  const cardWidth = currentSize.width;
  const cardHeight = currentSize.height;
  return clampBattlefieldPixels({
    x: event.clientX - rect.left - cardWidth / 2,
    y: event.clientY - rect.top - cardHeight / 2,
    unit: "px",
  }, Boolean(source?.tapped), { width: cardWidth, height: cardHeight }, { width: rect.width, height: rect.height });
}

function battlefieldLayerPixels() {
  if (battlefieldLayerSize) return battlefieldLayerSize;
  if (!battlefieldCanvasSize) return null;
  return {
    width: Math.max(1, battlefieldCanvasSize.width - 12),
    height: Math.max(1, battlefieldCanvasSize.height - 26),
  };
}

function battlefieldCardBox(isTapped = false, cardSize = currentBattlefieldCardSize()) {
  const currentSize = currentBattlefieldCardSize();
  const width = Number(cardSize?.width) || currentSize.width;
  const height = Number(cardSize?.height) || currentSize.height;
  return {
    width,
    height,
    visualWidth: isTapped ? height : width,
    visualHeight: isTapped ? width : height,
  };
}

function positionToPixels(position, layer = battlefieldLayerPixels()) {
  if (position?.unit === "px") return { x: Number(position.x) || 0, y: Number(position.y) || 0, unit: "px" };
  if (!layer) return { x: 12, y: 12, unit: "px" };
  return {
    x: ((Number(position?.x) || 4) / 100) * layer.width,
    y: ((Number(position?.y) || 8) / 100) * layer.height,
    unit: "px",
  };
}

function clampBattlefieldPixels(position, isTapped = false, cardSize = currentBattlefieldCardSize(), layer = battlefieldLayerPixels()) {
  const bounds = layer || { width: 720, height: 460 };
  const box = battlefieldCardBox(isTapped, cardSize);
  const pos = positionToPixels(position, bounds);
  const centerX = pos.x + box.width / 2;
  const centerY = pos.y + box.height / 2;
  const clampedCenterX = Math.max(box.visualWidth / 2, Math.min(bounds.width - box.visualWidth / 2, centerX));
  const clampedCenterY = Math.max(box.visualHeight / 2, Math.min(bounds.height - box.visualHeight / 2, centerY));
  return {
    x: Math.round(clampedCenterX - box.width / 2),
    y: Math.round(clampedCenterY - box.height / 2),
    unit: "px",
  };
}

function normalizeBattlefieldPosition(position, isTapped = false) {
  return clampBattlefieldPixels(position || { x: 12, y: 12, unit: "px" }, isTapped);
}

function applyBattlefieldCanvasSize(zone) {
  if (!battlefieldCanvasSize) return;
  zone.classList.add("locked-battlefield-canvas");
  zone.style.width = `${battlefieldCanvasSize.width}px`;
  zone.style.height = `${battlefieldCanvasSize.height}px`;
  zone.style.minWidth = `${battlefieldCanvasSize.width}px`;
  zone.style.maxWidth = `${battlefieldCanvasSize.width}px`;
  zone.style.minHeight = `${battlefieldCanvasSize.height}px`;
  zone.style.maxHeight = `${battlefieldCanvasSize.height}px`;
  const layer = zone.querySelector(".battlefield-card-layer");
  if (layer && battlefieldLayerSize) {
    layer.style.left = "6px";
    layer.style.top = "20px";
    layer.style.right = "auto";
    layer.style.bottom = "auto";
    layer.style.width = `${battlefieldLayerSize.width}px`;
    layer.style.height = `${battlefieldLayerSize.height}px`;
  }
}

function lockBattlefieldCanvas() {
  if (!state || battlefieldCanvasSize) return;
  const zone = els.playersGrid.querySelector(".active-board-shell .battlefield-zone");
  if (!zone) return;
  const layer = zone.querySelector(".battlefield-card-layer");
  if (!layer) return;
  const rect = zone.getBoundingClientRect();
  const width = Math.floor(rect.width);
  const height = Math.floor(rect.height);
  if (width < 240 || height < 180) return;
  const layerRect = layer.getBoundingClientRect();
  battlefieldCanvasSize = { width, height };
  battlefieldLayerSize = {
    width: Math.floor(layer.offsetWidth || layerRect.width),
    height: Math.floor(layer.offsetHeight || layerRect.height),
  };
  applyBattlefieldCanvasSize(zone);
}

function showCardZoom(cardNode) {
  if (!cardNode) return;
  if (!zoomOverlay) {
    zoomOverlay = document.createElement("div");
    zoomOverlay.className = "card-zoom-overlay";
    document.body.append(zoomOverlay);
  }
  zoomOverlay.innerHTML = "";
  const clone = cardNode.cloneNode(true);
  clone.removeAttribute("id");
  clone.removeAttribute("draggable");
  clone.style.left = "";
  clone.style.top = "";
  clone.style.zIndex = "";
  clone.classList.remove("dragging");
  zoomOverlay.append(clone);
  zoomOverlay.classList.remove("hidden");
  positionCardZoom(cardNode);
}

function positionCardZoom(cardNode) {
  if (!zoomOverlay || zoomOverlay.classList.contains("hidden") || !cardNode) return;
  const rect = cardNode.getBoundingClientRect();
  const margin = 10;
  const width = rect.width * zoomScale;
  const height = rect.height * zoomScale;
  let left = rect.left + rect.width / 2 - width / 2;
  let top = rect.top + rect.height / 2 - height / 2;
  left = Math.max(margin, Math.min(window.innerWidth - width - margin, left));
  top = Math.max(margin, Math.min(window.innerHeight - height - margin, top));
  zoomOverlay.style.left = `${left}px`;
  zoomOverlay.style.top = `${top}px`;
  zoomOverlay.style.width = `${width}px`;
  zoomOverlay.style.height = `${height}px`;
}

function hideCardZoom(cardNode = null) {
  if (cardNode && hoveredZoomCard === cardNode) return;
  if (!zoomOverlay) return;
  zoomOverlay.classList.add("hidden");
  zoomOverlay.innerHTML = "";
}

function dropCard(source, targetSeat, targetZone, position = null) {
  return sendAction("moveCard", {
    seat: source.seat,
    fromZone: source.fromZone,
    toSeat: targetSeat,
    toZone: targetZone,
    cardId: source.cardId,
    position,
  });
}

function openLibraryDialog() {
  renderLibraryDialog();
  if (!els.libraryDialog.open) els.libraryDialog.show();
}

function openZoneDialog(player, zoneName, label) {
  const cards = player[zoneName] || [];
  els.zoneDialogTitle.textContent = `${player.name} ${label}`;
  els.zoneDialogSummary.textContent = `${cards.length} card${cards.length === 1 ? "" : "s"}`;
  els.zoneDialogCards.innerHTML = "";
  if (!cards.length) {
    const empty = document.createElement("p");
    empty.className = "dialog-note";
    empty.textContent = "No cards in this zone.";
    els.zoneDialogCards.append(empty);
  } else {
    cards.forEach((card, index) => els.zoneDialogCards.append(cardElement(card, player.seat, zoneName, index)));
  }
  els.zoneDialog.showModal();
}

function renderLibraryDialog() {
  if (!state) return;
  const currentPlayer = state.players[state.currentSeat];
  els.librarySummary.textContent = `${currentPlayer.libraryCount} cards in library`;
  renderLibraryPreview();
  els.libraryActions.innerHTML = "";
  [
    ["Draw X", () => promptLibraryCount("Draw how many cards?", "draw")],
    ["Scry X", () => promptLibraryCount("Scry how many cards?", "scry")],
    ["Surveil X", () => promptLibraryCount("Surveil how many cards?", "surveil")],
    ["Search", () => openLibrarySearchDialog()],
    ["Mill X", () => promptLibraryCount("Mill how many cards?", "mill")],
    ["Reveal Top", () => promptLibraryCount("Reveal how many cards?", "reveal")],
    ["Shuffle", () => sendAction("libraryAction", { mode: "shuffle" })],
    ["Clear Preview", () => sendAction("clearLibraryPreview")],
  ].forEach(([label, handler]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = !canActNow();
    button.addEventListener("click", handler);
    els.libraryActions.append(button);
  });
}

function renderLibraryPreview() {
  const preview = state.currentPlayer.libraryPreview;
  els.libraryPreview.classList.toggle("hidden", !preview || !preview.cards?.length);
  els.libraryPreview.innerHTML = "";
  if (!preview || !preview.cards?.length) return;

  const title = document.createElement("h3");
  title.textContent = `${preview.mode.charAt(0).toUpperCase() + preview.mode.slice(1)} Preview`;
  els.libraryPreview.append(title);

  const grid = document.createElement("div");
  grid.className = "card-grid preview-grid";
  preview.cards.forEach((card) => {
    const wrap = document.createElement("div");
    wrap.className = "preview-card";
    wrap.dataset.previewCardId = card.id;
    wrap.addEventListener("dragover", (event) => {
      if (!draggedPreviewCardId || draggedPreviewCardId === card.id) return;
      event.preventDefault();
      wrap.classList.add("drop-active");
    });
    wrap.addEventListener("dragleave", () => wrap.classList.remove("drop-active"));
    wrap.addEventListener("drop", async (event) => {
      if (!draggedPreviewCardId || draggedPreviewCardId === card.id) return;
      event.preventDefault();
      event.stopPropagation();
      wrap.classList.remove("drop-active");
      await sendAction("reorderPreview", { cardId: draggedPreviewCardId, beforeCardId: card.id });
      draggedPreviewCardId = "";
      draggedCard = null;
      if (els.libraryDialog.open) renderLibraryDialog();
    });
    wrap.append(previewCardElement(card, preview.mode));
    grid.append(wrap);
  });
  els.libraryPreview.append(grid);
}

function previewCardElement(card, previewMode) {
  const button = cardElement(card, state.currentSeat, "librarySearch");
  button.draggable = true;
  button.addEventListener("dragstart", (event) => {
    draggedPreviewCardId = card.id;
    draggedCard = { cardId: card.id, cardName: card.name, isCommander: card.isCommander, owner: card.owner, tapped: false, seat: state.currentSeat, fromZone: "library", width: button.offsetWidth, height: button.offsetHeight };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify(draggedCard));
    button.classList.add("dragging");
  });
  button.addEventListener("dragend", () => {
    draggedPreviewCardId = "";
    draggedCard = null;
    button.classList.remove("dragging");
    document.querySelectorAll(".drop-active").forEach((node) => node.classList.remove("drop-active"));
  });
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  button.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openPreviewActionDialog(card, previewMode);
  });
  return button;
}

function openPreviewActionDialog(card, previewMode) {
  els.librarySearchActionTitle.textContent = card.name;
  els.librarySearchActionButtons.innerHTML = "";
  [
    ["Top", "top"],
    ["Bottom", "bottom"],
    ["Hand", "hand"],
    ...(previewMode === "surveil" ? [["Graveyard", "graveyard"]] : []),
  ].forEach(([label, destination]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = !canActNow();
    button.addEventListener("click", async () => {
      await sendAction("previewCardAction", { cardId: card.id, destination });
      els.librarySearchActionDialog.close();
      if (els.libraryDialog.open) renderLibraryDialog();
    });
    els.librarySearchActionButtons.append(button);
  });
  els.librarySearchActionDialog.showModal();
}

function promptLibraryCount(message, mode) {
  const value = Number(prompt(message, "1"));
  if (!Number.isFinite(value) || value <= 0) return;
  sendAction("libraryAction", { mode, count: value });
}

function promptLibrarySearch() {
  const query = prompt("Search your library for a card name");
  if (!query) return;
  sendAction("libraryAction", { mode: "search", query });
}

function openLibrarySearchDialog() {
  renderLibrarySearchDialog();
  els.librarySearchDialog.showModal();
}

function renderLibrarySearchDialog() {
  const cards = state?.currentPlayer?.library || [];
  const query = els.librarySearchInput.value.trim().toLowerCase();
  const filtered = query ? cards.filter((card) => card.name.toLowerCase().includes(query)) : cards;
  els.librarySearchSummary.textContent = `${filtered.length} of ${cards.length} cards`;
  els.librarySearchCards.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "dialog-note";
    empty.textContent = "No matching cards.";
    els.librarySearchCards.append(empty);
    return;
  }
  filtered.forEach((card) => {
    const wrap = document.createElement("div");
    wrap.className = "library-search-card";
    wrap.append(librarySearchCardElement(card));
    els.librarySearchCards.append(wrap);
  });
}

function librarySearchCardElement(card) {
  const button = cardElement(card, state.currentSeat, "librarySearch");
  button.draggable = true;
  button.addEventListener("dragstart", (event) => {
    draggedCard = { cardId: card.id, cardName: card.name, isCommander: card.isCommander, owner: card.owner, tapped: false, seat: state.currentSeat, fromZone: "library", width: button.offsetWidth, height: button.offsetHeight };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify(draggedCard));
    button.classList.add("dragging");
    setTimeout(() => els.librarySearchDialog.close(), 0);
  });
  button.addEventListener("dragend", () => {
    draggedCard = null;
    button.classList.remove("dragging");
    document.querySelectorAll(".drop-active").forEach((node) => node.classList.remove("drop-active"));
  });
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await moveLibraryCard(card.id, "hand");
  });
  button.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openLibrarySearchActionDialog(card);
  });
  return button;
}

function openLibrarySearchActionDialog(card) {
  els.librarySearchActionTitle.textContent = card.name;
  els.librarySearchActionButtons.innerHTML = "";
  [
    ["To Battlefield", () => moveLibraryCard(card.id, "battlefield")],
    ["To Graveyard", () => moveLibraryCard(card.id, "graveyard")],
  ].forEach(([label, handler]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = !canActNow();
    button.addEventListener("click", async () => {
      await handler();
      els.librarySearchActionDialog.close();
    });
    els.librarySearchActionButtons.append(button);
  });
  els.librarySearchActionDialog.showModal();
}

async function moveLibraryCard(cardId, destination) {
  await sendAction("libraryAction", { mode: "searchById", cardId, destination });
  els.librarySearchDialog.close();
  if (els.librarySearchActionDialog.open) els.librarySearchActionDialog.close();
  if (els.libraryDialog.open) renderLibraryDialog();
}

function openTokenDialog(event, player, battlefieldZone) {
  pendingTokenPosition = battlefieldPositionFromEvent(event, battlefieldZone, "battlefield");
  tokenSearchResults = [];
  els.tokenDialogSummary.textContent = `${player.name} battlefield`;
  els.tokenSearchInput.value = "";
  els.tokenSearchSummary.textContent = "Press Enter to search token creatures.";
  els.tokenSearchCards.innerHTML = "";
  els.customTokenNameInput.value = "";
  els.customTokenTypeInput.value = "Token Creature";
  els.customTokenPowerInput.value = "";
  els.customTokenToughnessInput.value = "";
  els.tokenDialog.showModal();
  setTimeout(() => els.tokenSearchInput.focus(), 0);
}

async function runTokenSearch() {
  const query = els.tokenSearchInput.value.trim();
  els.tokenSearchSummary.textContent = "Searching token creatures...";
  els.tokenSearchCards.innerHTML = "";
  const payload = await api(`/api/scryfall/tokens?q=${encodeURIComponent(query)}`);
  tokenSearchResults = payload.cards || [];
  renderTokenSearchResults();
}

function renderTokenSearchResults() {
  els.tokenSearchSummary.textContent = `${tokenSearchResults.length} token option${tokenSearchResults.length === 1 ? "" : "s"}`;
  els.tokenSearchCards.innerHTML = "";
  if (!tokenSearchResults.length) {
    const empty = document.createElement("p");
    empty.className = "dialog-note";
    empty.textContent = "No token creatures found.";
    els.tokenSearchCards.append(empty);
    return;
  }
  tokenSearchResults.forEach((token) => {
    const wrap = document.createElement("div");
    wrap.className = "library-search-card";
    const button = cardElement(tokenCardPreview(token), state.currentSeat, "librarySearch");
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      await createTokenFromData(token);
    });
    wrap.append(button);
    els.tokenSearchCards.append(wrap);
  });
}

function tokenCardPreview(token) {
  return {
    id: token.scryfallId || token.name,
    name: token.name,
    typeLine: token.typeLine || "Token Creature",
    imageUrl: token.images?.normal || token.images?.small || token.imageUrl || "",
    isToken: true,
    counters: {},
  };
}

async function createTokenFromData(token) {
  await sendAction("createToken", {
    position: pendingTokenPosition,
    tokenData: {
      name: token.name,
      typeLine: token.typeLine,
      oracleText: token.oracleText,
      imageUrl: token.images?.normal || token.images?.small || token.imageUrl || "",
      artUrl: token.images?.artCrop || token.artUrl || "",
      power: token.power,
      toughness: token.toughness,
    },
  });
  els.tokenDialog.close();
}

async function createCustomToken() {
  const name = els.customTokenNameInput.value.trim();
  if (!name) {
    alert("Token name is required.");
    return;
  }
  await createTokenFromData({
    name,
    typeLine: els.customTokenTypeInput.value.trim() || "Token Creature",
    power: els.customTokenPowerInput.value.trim(),
    toughness: els.customTokenToughnessInput.value.trim(),
    imageUrl: "",
    artUrl: "",
  });
}

function copyBattlefieldToken(card) {
  const position = offsetBattlefieldPosition(card.position);
  return sendAction("copyBattlefieldToken", { cardId: card.id, position });
}

function offsetBattlefieldPosition(position) {
  if (!position) return null;
  return {
    x: (Number(position.x) || 0) + 28,
    y: (Number(position.y) || 0) + 28,
    unit: position.unit || "px",
  };
}

function adjustCounter(card, counterType, delta = 1, value = 1) {
  return sendAction("adjustCounter", { cardId: card.id, counterType, delta, value });
}

function removeBattlefieldToken(card) {
  return sendAction("removeBattlefieldToken", { cardId: card.id });
}

function promptCounterValue(message) {
  const value = Number(prompt(message, "2"));
  if (!Number.isFinite(value) || value === 0) return null;
  return Math.max(-99, Math.min(99, Math.round(value)));
}

function openCardDialog(card, seat, zone) {
  if (els.zoneDialog.open) els.zoneDialog.close();
  els.dialogTitle.textContent = card.name;
  els.dialogActions.innerHTML = "";
  const actions = [];

  if (!canActNow() && ["hand", "commanderZone", "battlefield", "graveyard", "exile"].includes(zone)) {
    const note = document.createElement("p");
    note.className = "dialog-note";
    note.textContent = "You do not have priority.";
    els.dialogActions.append(note);
    els.cardDialog.showModal();
    return;
  }

  if (seat !== state.currentSeat && ["commanderZone", "battlefield", "graveyard", "exile"].includes(zone)) {
    const note = document.createElement("p");
    note.className = "dialog-note";
    note.textContent = "You can only edit your own board state.";
    els.dialogActions.append(note);
    els.cardDialog.showModal();
    return;
  }

  if (zone === "hand") {
    actions.push(["To Battlefield", () => moveCard(state.currentSeat, "hand", "battlefield", card.id)]);
    if (isCommanderForSeat(card, state.currentSeat)) actions.push(["To Commander", () => moveCard(state.currentSeat, "hand", "commanderZone", card.id)]);
    actions.push(["To Graveyard", () => moveCard(state.currentSeat, "hand", "graveyard", card.id)]);
    actions.push(["To Exile", () => moveCard(state.currentSeat, "hand", "exile", card.id)]);
    actions.push(["Top of Library", () => sendAction("handToLibrary", { cardId: card.id, position: "top" })]);
    actions.push(["Bottom of Library", () => sendAction("handToLibrary", { cardId: card.id, position: "bottom" })]);
  }

  if (zone === "battlefield" || zone === "commanderZone") {
    if (zone === "battlefield") {
      actions.push([card.tapped ? "Untap" : "Tap", () => sendAction("tap", { seat, zone, cardId: card.id })]);
      actions.push(["Make Token Copy", () => copyBattlefieldToken(card)]);
      if (card.isToken) actions.push(["Remove Token", () => removeBattlefieldToken(card)]);
      actions.push(["Add +1/+1", () => adjustCounter(card, "powerToughness", 1)]);
      actions.push(["Add X/X", () => {
        const value = promptCounterValue("Counter value. Use negative numbers for -X/-X.");
        return value !== null ? adjustCounter(card, "powerToughness", value) : null;
      }]);
      actions.push(["Clear Counters", () => adjustCounter(card, "clear", 1)]);
    }
    if (zone !== "battlefield") actions.push(["To Battlefield", () => moveCard(seat, zone, "battlefield", card.id)]);
    if (zone !== "commanderZone" && isCommanderForSeat(card, seat)) actions.push(["To Commander", () => moveCard(seat, zone, "commanderZone", card.id)]);
    actions.push(["To Graveyard", () => moveCard(seat, zone, "graveyard", card.id)]);
    actions.push(["To Exile", () => moveCard(seat, zone, "exile", card.id)]);
  }

  if (zone === "graveyard" || zone === "exile") {
    actions.push(["To Battlefield", () => moveCard(seat, zone, "battlefield", card.id)]);
    if (isCommanderForSeat(card, seat)) actions.push(["To Commander", () => moveCard(seat, zone, "commanderZone", card.id)]);
  }

  actions.forEach(([label, handler]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", async () => {
      await handler();
      els.cardDialog.close();
    });
    els.dialogActions.append(button);
  });

  els.cardDialog.showModal();
}

function moveCard(seat, fromZone, toZone, cardId, toSeat = seat, position = null) {
  return sendAction("moveCard", { seat, fromZone, toZone, cardId, toSeat, position });
}

function labelForZone(zone) {
  return zone.charAt(0).toUpperCase() + zone.slice(1);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
}

els.roomForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const room = await api("/api/rooms", {
    method: "POST",
    body: JSON.stringify({
      name: els.roomNameInput.value.trim() || "Mage Table",
      playerCount: Number(els.playerCountInput.value),
    }),
  });
  history.replaceState(null, "", room.selfUrl);
  forceInviteDialog = true;
  await refreshState();
});

els.newRoomButton.addEventListener("click", () => {
  state = null;
  history.replaceState(null, "", "/");
  render();
});

els.showInvitesButton.addEventListener("click", () => {
  if (state) {
    els.inviteDialog.showModal();
  }
});

els.inviteDialog.addEventListener("close", () => {
  renderDeckSetup();
});

els.seatSelect.addEventListener("change", () => {
  const invite = state.invites.find((item) => item.seat === Number(els.seatSelect.value));
  if (!invite) return;
  history.replaceState(null, "", invite.url);
  refreshState();
});

els.endTurnButton.addEventListener("click", () => sendAction("turn"));
els.instantButton.addEventListener("click", () => sendAction("takePriority"));
els.combatPassButton.addEventListener("click", () => sendAction("combatPass"));
els.passPriorityButton.addEventListener("click", () => sendAction("passPriority"));

els.loadDeckButton.addEventListener("click", async () => {
  els.loadDeckButton.disabled = true;
  try {
    await sendAction("loadDeck", {
      text: els.deckInput.value,
      name: state.currentPlayer.name,
      commander: state.currentPlayer.commander,
    });
  } catch (error) {
    alert(error.message);
  } finally {
    els.loadDeckButton.disabled = false;
  }
});

els.deckSetupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = els.deckSetupForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    await sendAction("loadDeck", {
      text: els.setupDeckInput.value,
      name: els.playerNameInput.value,
      commander: els.commanderInput.value,
    });
    els.deckInput.value = els.setupDeckInput.value;
  } catch (error) {
    alert(error.message);
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

els.drawButton.addEventListener("click", () => sendAction("draw"));

els.uiScaleInput.addEventListener("input", () => {
  applyCardScale(els.uiScaleInput.value);
  if (state) {
    renderPlayers();
    renderHand();
  }
});

els.popupOpacityInput.addEventListener("input", () => {
  applyPopupOpacity(els.popupOpacityInput.value);
});

els.controlsOpacityInput.addEventListener("input", () => {
  applyControlsOpacity(els.controlsOpacityInput.value);
});

async function updateRoomSettings() {
  if (!state) return;
  await sendAction("updateSettings", {
    friendlyMulligans: els.friendlyMulligansInput.checked,
    darkMode: els.darkModeInput.checked,
  });
}

els.friendlyMulligansInput.addEventListener("change", updateRoomSettings);
els.darkModeInput.addEventListener("change", updateRoomSettings);

els.keepHandButton.addEventListener("click", async () => {
  els.keepHandButton.disabled = true;
  els.mulliganButton.disabled = true;
  try {
    await sendAction("keepHand");
  } finally {
    els.keepHandButton.disabled = false;
    els.mulliganButton.disabled = false;
  }
});

els.mulliganButton.addEventListener("click", async () => {
  els.keepHandButton.disabled = true;
  els.mulliganButton.disabled = true;
  try {
    await sendAction("mulligan");
  } finally {
    els.keepHandButton.disabled = false;
    els.mulliganButton.disabled = false;
  }
});

els.mulliganDialog.addEventListener("cancel", (event) => {
  if (state?.currentPlayer.mulliganPending) event.preventDefault();
});

els.boardReferenceButton.addEventListener("click", () => {
  renderBoardReference();
  els.boardReferenceDialog.showModal();
});

els.recapPreviousButton.addEventListener("click", () => {
  recapIndex = Math.max(0, recapIndex - 1);
  renderRecapDialog();
});

els.recapNextButton.addEventListener("click", () => {
  recapIndex = Math.min(recapEvents.length - 1, recapIndex + 1);
  renderRecapDialog();
});

els.recapDoneButton.addEventListener("click", closeRecapDialog);

els.recapDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRecapDialog();
});

els.sidebarToggle.addEventListener("click", () => {
  sidebarCollapsed = !sidebarCollapsed;
  syncSidebarState();
});

els.chatButton.addEventListener("click", () => {
  els.chatDialog.showModal();
  markChatRead();
  renderChat();
});

els.chatDialog.addEventListener("close", () => {
  markChatRead();
});

els.sendChatButton.addEventListener("click", async () => {
  const text = els.chatInput.value.trim();
  if (!text) return;
  await sendAction("chat", { text });
  els.chatInput.value = "";
  markChatRead();
});

els.chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    els.sendChatButton.click();
  }
});

els.librarySearchInput.addEventListener("input", () => {
  renderLibrarySearchDialog();
});

els.tokenSearchButton.addEventListener("click", () => {
  runTokenSearch();
});

els.tokenSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    runTokenSearch();
  }
});

els.createCustomTokenButton.addEventListener("click", () => {
  createCustomToken();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Control") {
    document.body.classList.add("ctrl-zoom");
    if (hoveredZoomCard) showCardZoom(hoveredZoomCard);
  }
  if (event.key === "Shift") {
    document.body.classList.add("hide-counters");
  }
  if (event.key === "Alt") {
    document.body.classList.add("alt-counters");
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Control") {
    document.body.classList.remove("ctrl-zoom");
    hideCardZoom();
  }
  if (event.key === "Shift") {
    document.body.classList.remove("hide-counters");
  }
  if (event.key === "Alt") {
    document.body.classList.remove("alt-counters");
  }
});

document.addEventListener("mousemove", (event) => {
  document.body.classList.toggle("ctrl-zoom", event.ctrlKey);
  document.body.classList.toggle("hide-counters", event.shiftKey);
  document.body.classList.toggle("alt-counters", event.altKey);
  if (event.ctrlKey && hoveredZoomCard) positionCardZoom(hoveredZoomCard);
  if (!event.ctrlKey) hideCardZoom();
});

window.addEventListener("resize", () => {
  if (state) requestAnimationFrame(positionTurnDock);
  if (state || battlefieldCanvasSize) return;
  if (localStorage.getItem(cardScaleUserKey) === "1") return;
  applyCardScale(recommendedCardScale(), { persist: false });
});

window.addEventListener("beforeunload", () => {
  if (state && !els.recapDialog.open) {
    localStorage.setItem(recapStorageKey(), String(latestEventSeq()));
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && state && !els.recapDialog.open) {
    localStorage.setItem(recapStorageKey(), String(latestEventSeq()));
  }
});

loadCardScale();
loadOpacitySettings();
refreshState();
startPolling();
