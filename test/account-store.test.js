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
