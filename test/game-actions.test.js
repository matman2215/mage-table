const assert = require("node:assert/strict");
const test = require("node:test");

process.env.MAGE_TABLE_DB_PATH = ":memory:";
const { accountStore, applyAction, gameStore, viewRoom } = require("../server");

function card(id, name, values = {}) {
  return {
    id,
    name,
    displayName: name,
    typeLine: values.typeLine || "Creature",
    manaCost: values.manaCost || "",
    manaValue: Number(values.manaValue) || 0,
    producedMana: values.producedMana || [],
    oracleText: values.oracleText || "",
    imageUrl: values.imageUrl || "",
    faces: [],
    isLand: Boolean(values.isLand),
    power: values.power || "2",
    toughness: values.toughness || "2",
    tapped: Boolean(values.tapped),
    owner: Number(values.owner) || 0,
    isCommander: Boolean(values.isCommander),
    counters: values.counters || {},
    position: values.position || { x: 20, y: 20, unit: "px" },
  };
}

function player(seat) {
  return {
    id: `player-${seat}`,
    token: `seat-${seat}`,
    seat,
    name: `Player ${seat + 1}`,
    commander: seat === 0 ? "Commander One" : "Commander Two",
    isHost: seat === 0,
    claimed: true,
    accountId: "",
    deckLoaded: true,
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
    presenceLastSeenAt: 0,
  };
}

function room() {
  const players = [player(0), player(1)];
  return {
    id: "room-actions",
    name: "Actions",
    createdAt: Date.now(),
    activePlayer: 0,
    prioritySeat: 0,
    priorityMode: "turn",
    phase: "Untap",
    turnNumber: 1,
    turnsPassed: 0,
    updateSeq: 0,
    eventSeq: 0,
    events: [],
    log: [],
    chat: [],
    stack: [],
    reveals: [],
    combatSnapshot: null,
    diceNotice: null,
    undoStack: [],
    redoStack: [],
    subscribers: new Set(),
    presenceConnections: new Map(),
    settings: { friendlyMulligans: true, darkMode: true },
    statistics: { pending: [], commits: [], lastEventSeq: 0 },
    clock: { running: true, totalMs: 20000, currentTurnMs: 12000, playerMs: [12000, 8000], lastSyncAt: Date.now() },
    playtestOpponent: null,
    players,
  };
}

test.after(() => {
  accountStore.close();
  gameStore.close();
});

test("peek is private and first-player randomization locks after a turn", async () => {
  const state = room();
  state.players[0].library.push(card("top", "Top Card"));
  await applyAction(state, state.players[0], { type: "libraryAction", mode: "peek" });
  assert.equal(state.players[0].libraryPreview.mode, "peek");
  assert.equal(viewRoom(state, "seat-1", "http://test").players[0].libraryPreview, null);

  await applyAction(state, state.players[0], { type: "turn" });
  assert.equal(state.turnsPassed, 1);
  await assert.rejects(
    applyAction(state, state.players[0], { type: "randomFirstPlayer" }),
    /cannot be randomized/i,
  );
});

test("face-down exile hides the card from opponents", async () => {
  const state = room();
  state.players[0].hand.push(card("secret", "Secret Card"));
  await applyAction(state, state.players[0], { type: "exileFaceDown", fromZone: "hand", cardId: "secret" });
  assert.equal(state.players[0].exile[0].faceDown, true);
  assert.equal(viewRoom(state, "seat-0", "http://test").players[0].exile[0].name, "Secret Card");
  const opponentCard = viewRoom(state, "seat-1", "http://test").players[0].exile[0];
  assert.equal(opponentCard.name, "Face-down card");
  assert.equal(opponentCard.oracleText, undefined);
});

test("face-down tag persists when moving cards between zones", async () => {
  const state = room();
  state.players[0].hand.push(card("secret", "Secret Card"));
  await applyAction(state, state.players[0], { type: "toggleFaceDown", zone: "hand", cardId: "secret" });
  assert.equal(state.players[0].hand[0].faceDown, true);
  await applyAction(state, state.players[0], { type: "moveCard", seat: 0, fromZone: "hand", toZone: "battlefield", cardId: "secret" });
  assert.equal(state.players[0].battlefield[0].faceDown, true);
  const opponentBattlefieldCard = viewRoom(state, "seat-1", "http://test").players[0].battlefield[0];
  assert.equal(opponentBattlefieldCard.name, "Face-down card");
  await applyAction(state, state.players[0], { type: "moveCard", seat: 0, fromZone: "battlefield", toZone: "graveyard", cardId: "secret" });
  assert.equal(state.players[0].graveyard[0].faceDown, true);
  const opponentGraveyardCard = viewRoom(state, "seat-1", "http://test").players[0].graveyard[0];
  assert.equal(opponentGraveyardCard.name, "Face-down card");
});

test("loading a deck shuffles, moves commander, and prompts mulligan", async () => {
  const originalFetch = global.fetch;
  global.fetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({
      data: [
        {
          id: "scryfall-commander",
          name: "Test Commander",
          type_line: "Legendary Creature - Merfolk",
          mana_cost: "{2}{G}{U}",
          cmc: 4,
          oracle_text: "",
          image_uris: { small: "https://example.test/commander-small.jpg", normal: "https://example.test/commander.jpg" },
          power: "3",
          toughness: "3",
        },
        {
          id: "scryfall-island",
          name: "Island",
          type_line: "Basic Land - Island",
          mana_cost: "",
          cmc: 0,
          oracle_text: "({T}: Add {U}.)",
          produced_mana: ["U"],
          image_uris: { small: "https://example.test/island-small.jpg", normal: "https://example.test/island.jpg" },
        },
      ],
    }),
  });
  try {
    const state = room();
    await applyAction(state, state.players[0], {
      type: "loadDeck",
      text: "1 Test Commander\n7 Island",
      commander: "Test Commander",
      name: "Codex",
    });
    assert.equal(state.players[0].name, "Codex");
    assert.equal(state.players[0].commanderZone.length, 1);
    assert.equal(state.players[0].commanderZone[0].isCommander, true);
    assert.equal(state.players[0].hand.length, 7);
    assert.equal(state.players[0].library.length, 0);
    assert.equal(state.players[0].mulliganPending, true);
    assert.equal(state.players[0].deckLoaded, true);
  } finally {
    global.fetch = originalFetch;
  }
});

test("combat damage can be taken per creature without double counting", async () => {
  const state = room();
  state.priorityMode = "combat";
  state.prioritySeat = 1;
  state.combatSnapshot = {
    id: "combat-1",
    attackerSeat: 0,
    attackerName: "Player 1",
    defenderSeat: 1,
    defenderName: "Player 2",
    cards: [
      { id: "commander", name: "Commander One", displayName: "Commander One", owner: 0, isCreature: true, isCommander: true, totalPower: 3, totalToughness: 3 },
      { id: "creature", name: "Creature", displayName: "Creature", owner: 0, isCreature: true, isCommander: false, totalPower: 2, totalToughness: 2 },
    ],
    totals: { creatures: 2, power: 5, toughness: 5 },
    damageApplied: false,
  };

  await applyAction(state, state.players[1], { type: "takeCombatCardDamage", cardId: "commander" });
  assert.equal(state.players[1].life, 37);
  assert.equal(state.combatSnapshot.damageApplied, false);
  assert.equal(state.players[1].playerCounters["Commander Damage: Commander One"], 3);

  await applyAction(state, state.players[1], { type: "takeCombatDamage" });
  assert.equal(state.players[1].life, 35);
  assert.equal(state.combatSnapshot.damageTaken, 5);
  assert.equal(state.combatSnapshot.damageApplied, true);
});

test("tapping a land records produced mana at the next checkpoint", async () => {
  const state = room();
  state.players[0].battlefield.push(card("land", "Dual Land", {
    typeLine: "Land",
    isLand: true,
    producedMana: ["U", "R"],
    power: "",
    toughness: "",
  }));
  await applyAction(state, state.players[0], { type: "tap", seat: 0, zone: "battlefield", cardId: "land" });
  await applyAction(state, state.players[0], { type: "passPriority" });
  const commit = state.statistics.commits.at(-1);
  assert.equal(commit.manaProduced, 1);
  assert.equal(commit.manaByColor["Flexible (U/R)"], 1);
  assert.equal(commit.turnElapsedMs, 12000);
});
