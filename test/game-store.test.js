const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const { AccountStore } = require("../account-store");
const { GameStore, serializeRoom } = require("../game-store");

function sampleRoom(accountId) {
  const createdAt = Date.now() - 5_000;
  return {
    id: "room-persistence-test",
    name: "Persistence Test",
    createdAt,
    updatedAt: createdAt + 1_000,
    endedAt: 0,
    inviteMode: "code",
    joinCode: "ABC234",
    activePlayer: 0,
    updateSeq: 4,
    phase: "Main 1",
    prioritySeat: 0,
    priorityMode: "turn",
    turnNumber: 3,
    eventSeq: 1,
    events: [{
      id: "event-1",
      seq: 1,
      turn: 3,
      activeSeat: 0,
      actorSeat: 0,
      actorName: "Host",
      message: "Host cast Sol Ring.",
      detail: { kind: "move", cardName: "Sol Ring" },
      timestamp: createdAt + 900,
      at: "12:00 PM",
    }],
    combatSnapshot: null,
    diceNotice: null,
    reveals: [],
    subscribers: new Set([{ write() {} }]),
    presenceConnections: new Map([[0, 1]]),
    undoStack: [{ large: "runtime-only" }],
    redoStack: [{ large: "runtime-only" }],
    clock: {
      running: true,
      totalMs: 12_000,
      currentTurnMs: 2_000,
      playerMs: [12_000, 0],
      lastSyncAt: createdAt + 1_000,
    },
    statistics: { pending: [], commits: [], lastEventSeq: 1 },
    playtestOpponent: { name: "Playtest Opponent", commander: "Simulation", life: 40 },
    settings: { friendlyMulligans: true, darkMode: true },
    stack: [],
    chat: [],
    log: [{ id: "log-1", message: "Host cast Sol Ring.", timestamp: createdAt + 900, at: "12:00 PM" }],
    players: [
      {
        id: "player-1",
        token: "seat-host-token",
        seat: 0,
        name: "Host",
        commander: "Hakbal of the Surging Soul",
        isHost: true,
        claimed: true,
        accountId,
        deckLoaded: true,
        deckStats: { total: 100, lands: 36 },
        libraryPreview: null,
        mulliganPending: false,
        mulliganCount: 0,
        life: 40,
        commanderTax: 0,
        playerCounters: {},
        library: [{ id: "card-library", name: "Island", tapped: false }],
        hand: [{ id: "card-hand", name: "Counterspell", tapped: false }],
        commanderZone: [{ id: "card-commander", name: "Hakbal of the Surging Soul", isCommander: true }],
        battlefield: [{ id: "card-battlefield", name: "Sol Ring", position: { x: 120, y: 80 }, tapped: true }],
        graveyard: [],
        exile: [],
        presenceLastSeenAt: Date.now(),
      },
      {
        id: "player-2",
        token: "seat-player-token",
        seat: 1,
        name: "Player 2",
        commander: "",
        isHost: false,
        claimed: false,
        accountId: "",
        deckLoaded: false,
        playerCounters: {},
        library: [],
        hand: [],
        commanderZone: [],
        battlefield: [],
        graveyard: [],
        exile: [],
        presenceLastSeenAt: 0,
      },
    ],
  };
}

test("persists and hydrates active room state without runtime connections", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "mage-table-game-store-"));
  const databasePath = path.join(directory, "mage-table.db");
  let accountStore;
  let firstStore;
  let secondStore;
  try {
    accountStore = new AccountStore(databasePath);
    const { account } = accountStore.createAccount("persistence_user", "testing123", "Penny");
    assert.equal(account.firstName, "Penny");
    assert.equal(accountStore.login("persistence_user", "testing123").account.firstName, "Penny");
    firstStore = new GameStore(databasePath);
    const room = sampleRoom(account.id);

    const serialized = serializeRoom(room);
    assert.equal(serialized.includes("runtime-only"), false);
    firstStore.saveRoom(room);
    room.turnNumber = 4;
    room.updatedAt += 1_000;
    firstStore.saveRoom(room);
    const storedVersion = firstStore.db.prepare("SELECT version FROM games WHERE id = ?").get(room.id).version;
    assert.equal(storedVersion, 2);
    firstStore.close();
    firstStore = null;

    secondStore = new GameStore(databasePath);
    const restoredRooms = secondStore.loadActiveRooms();
    assert.equal(restoredRooms.length, 1);
    assert.equal(secondStore.loadRoom(room.id).id, room.id);
    assert.equal(secondStore.findActiveRoomByJoinCode("ABC234").id, room.id);
    assert.equal(secondStore.joinCodeExists("ABC234"), true);
    assert.equal(secondStore.listActiveRoomsForAccount(account.id).length, 1);
    const restored = restoredRooms[0];
    assert.equal(restored.turnNumber, 4);
    assert.equal(restored.players[0].hand[0].name, "Counterspell");
    assert.deepEqual(restored.players[0].battlefield[0].position, { x: 120, y: 80 });
    assert.equal(restored.players[0].token, "seat-host-token");
    assert.equal(restored.players[0].presenceLastSeenAt, 0);
    assert.equal(restored.clock.totalMs, 12_000);
    assert.ok(restored.clock.lastSyncAt >= room.updatedAt);
    assert.equal(restored.subscribers instanceof Set, true);
    assert.equal(restored.presenceConnections instanceof Map, true);
    assert.deepEqual(restored.undoStack, []);
    assert.deepEqual(restored.redoStack, []);

    const members = secondStore.listMembers(room.id);
    assert.equal(members.length, 2);
    assert.equal(members[0].account_id, account.id);
    assert.equal(members[0].commander, "Hakbal of the Surging Soul");
    const events = secondStore.listEvents(room.id);
    assert.equal(events.length, 1);
    assert.equal(events[0].event_type, "move");

    restored.endedAt = Date.now();
    restored.updatedAt = restored.endedAt;
    secondStore.saveRoom(restored);
    assert.deepEqual(secondStore.loadActiveRooms(), []);
    assert.equal(secondStore.gameStatus(room.id).status, "ended");
  } finally {
    if (secondStore) secondStore.close();
    if (firstStore) firstStore.close();
    if (accountStore) accountStore.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});
