const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { AccountStore } = require("../account-store");

test("friend requests and game invites persist between accounts", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "mage-table-account-store-"));
  const databasePath = path.join(directory, "mage-table.db");
  let store;
  try {
    store = new AccountStore(databasePath);
    const alice = store.createAccount("alice_test", "testing123", "Alice", "Table", "alice@example.test", "testing123").account;
    const bob = store.createAccount("bob_test", "testing123", "Bob", "Table", "bob@example.test", "testing123").account;

    const request = store.sendFriendRequest(alice.id, "bob_test");
    assert.equal(request.status, "pending");
    assert.equal(store.listFriendships(bob.id).incoming.length, 1);
    assert.equal(store.listFriendships(alice.id).outgoing.length, 1);

    store.respondToFriendRequest(bob.id, request.id, "accept");
    assert.equal(store.areFriends(alice.id, bob.id), true);
    assert.equal(store.listFriendships(alice.id).friends[0].account.username, "bob_test");

    const invite = store.sendGameInvite(alice.id, bob.id, "room-test");
    assert.equal(invite.status, "pending");
    const bobInvites = store.listGameInvites(bob.id);
    assert.equal(bobInvites.incoming.length, 1);
    assert.equal(bobInvites.incoming[0].from.username, "alice_test");

    store.resolveGameInvite(bob.id, invite.id, "accepted");
    assert.equal(store.listGameInvites(bob.id).incoming.length, 0);
  } finally {
    if (store) store.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test("deck play statistic commits are idempotent and aggregate by saved deck", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "mage-table-account-store-"));
  const databasePath = path.join(directory, "mage-table.db");
  let store;
  try {
    store = new AccountStore(databasePath);
    const { account } = store.createAccount("stats_user", "testing123", "Stat", "Player", "stats@example.test", "testing123");
    const deck = store.saveDeck(account.id, {
      name: "Stats Deck",
      commander: "Test Commander",
      decklist: "1 Test Commander\n1 Sol Ring",
    });
    const firstCommit = {
      roomId: "room-stats",
      roomName: "Stats Room",
      commitId: "stats-1",
      reason: "priority passed",
      turn: 1,
      activeSeat: 0,
      actorSeat: 0,
      committedAt: 1_000,
      summary: {
        spellsCast: 1,
        manaUsed: 1,
        manaProduced: 1,
        spellsByType: { Artifact: 1 },
        manaByColor: { "Flexible (U/R)": 1 },
      },
      events: [
        { kind: "spell", cardName: "Sol Ring", type: "Artifact", manaUsed: 1, actorSeat: 0 },
        { kind: "mana", cardName: "Steam Vents", amount: 1, color: "Flexible (U/R)", actorSeat: 0 },
      ],
      logEvents: [{ message: "Stat Player cast Sol Ring.", actorSeat: 0 }],
    };
    store.saveDeckPlayStatCommit(account.id, deck.id, firstCommit);
    store.saveDeckPlayStatCommit(account.id, deck.id, firstCommit);
    store.saveDeckPlayStatCommit(account.id, deck.id, {
      ...firstCommit,
      commitId: "stats-2",
      turn: 2,
      committedAt: 2_000,
      summary: {
        spellsCast: 1,
        manaUsed: 2,
        manaProduced: 0,
        spellsByType: { Creature: 1 },
        manaByColor: {},
      },
      events: [
        { kind: "spell", cardName: "Bear", type: "Creature", manaUsed: 2, actorSeat: 0 },
      ],
      logEvents: [{ message: "Stat Player cast Bear.", actorSeat: 0 }],
    });

    const stats = store.deckPlayStats(account.id, deck.id);
    assert.equal(stats.games, 1);
    assert.equal(stats.commits, 2);
    assert.equal(stats.spellsCast, 2);
    assert.equal(stats.manaUsed, 3);
    assert.equal(stats.manaProduced, 1);
    assert.deepEqual(stats.spellsByType, { Creature: 1, Artifact: 1 });
    assert.equal(stats.manaByColor["Flexible (U/R)"], 1);
    assert.equal(stats.recent.length, 2);
    assert.equal(stats.recent[0].commitId, "stats-2");
    assert.equal(stats.recent[1].logEvents[0].message, "Stat Player cast Sol Ring.");
  } finally {
    if (store) store.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test("account collections can be saved, updated, listed, and deleted", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "mage-table-account-store-"));
  const databasePath = path.join(directory, "mage-table.db");
  let store;
  try {
    store = new AccountStore(databasePath);
    const { account } = store.createAccount("collection_user", "testing123", "Collector", "User", "collector@example.test", "testing123");
    const collection = store.saveCollection(account.id, {
      name: "Trade Binder",
      cardlist: "2 Sol Ring\n1 Command Tower",
      sources: [{ type: "deck", id: "deck-one" }, { type: "collection", id: "collection-source" }],
    });
    assert.equal(collection.name, "Trade Binder");
    assert.deepEqual(collection.sources, [{ type: "deck", id: "deck-one" }, { type: "collection", id: "collection-source" }]);
    assert.equal(store.listCollections(account.id).length, 1);

    const updated = store.saveCollection(account.id, {
      name: "Main Binder",
      cardlist: "3 Sol Ring",
      sources: [{ type: "deck", id: "deck-two" }],
    }, collection.id);
    assert.equal(updated.name, "Main Binder");
    assert.equal(updated.cardlist, "3 Sol Ring");
    assert.deepEqual(updated.sources, [{ type: "deck", id: "deck-two" }]);
    assert.equal(store.collectionById(account.id, collection.id).name, "Main Binder");
    assert.deepEqual(store.collectionById(account.id, collection.id).sources, [{ type: "deck", id: "deck-two" }]);
    assert.equal(store.deleteCollection(account.id, collection.id), true);
    assert.equal(store.listCollections(account.id).length, 0);
  } finally {
    if (store) store.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});
