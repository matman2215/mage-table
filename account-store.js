const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const sessionLifetimeMs = 30 * 24 * 60 * 60 * 1000;

function newId(prefix) {
  return `${prefix}-${crypto.randomBytes(12).toString("hex")}`;
}

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function validateUsername(value) {
  const username = String(value || "").trim();
  if (!/^[a-zA-Z0-9_-]{3,24}$/.test(username)) {
    throw new Error("Username must be 3-24 characters using letters, numbers, underscores, or hyphens.");
  }
  return username;
}

function validatePassword(value) {
  const password = String(value || "");
  if (password.length < 8 || password.length > 128) {
    throw new Error("Password must be between 8 and 128 characters.");
  }
  return password;
}

function validateFirstName(value, fallback = "") {
  const firstName = String(value || fallback || "").trim();
  if (firstName.length < 1 || firstName.length > 40) {
    throw new Error("First name must be between 1 and 40 characters.");
  }
  return firstName;
}

function validateLastName(value) {
  const lastName = String(value || "").trim();
  if (lastName.length > 60) {
    throw new Error("Last name must be 60 characters or fewer.");
  }
  return lastName;
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function validateEmail(value) {
  const email = normalizeEmail(value);
  if (email.length < 5 || email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address.");
  }
  return email;
}

function passwordHash(password, salt) {
  return crypto.scryptSync(password, salt, 32).toString("hex");
}

function sessionHash(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function safeEqualHex(left, right) {
  const a = Buffer.from(String(left || ""), "hex");
  const b = Buffer.from(String(right || ""), "hex");
  return a.length === b.length && a.length > 0 && crypto.timingSafeEqual(a, b);
}

function safeJson(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeCollectionSources(sources) {
  const normalized = [];
  const seen = new Set();
  (Array.isArray(sources) ? sources : []).forEach((source) => {
    const type = source?.type === "collection" ? "collection" : source?.type === "deck" ? "deck" : "";
    const id = String(source?.id || "").trim().slice(0, 80);
    if (!type || !id) return;
    const key = `${type}:${id}`;
    if (seen.has(key)) return;
    seen.add(key);
    normalized.push({ type, id });
  });
  return normalized.slice(0, 120);
}

class AccountStore {
  constructor(databasePath = process.env.MAGE_TABLE_DB_PATH || path.join(__dirname, "data", "mage-table.db")) {
    this.databasePath = databasePath;
    this.presenceTouchCache = new Map();
    if (databasePath !== ":memory:") fs.mkdirSync(path.dirname(databasePath), { recursive: true });
    this.db = new DatabaseSync(databasePath);
    this.db.exec("PRAGMA foreign_keys = ON;");
    this.db.exec("PRAGMA journal_mode = WAL;");
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS accounts (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL,
        username_normalized TEXT NOT NULL UNIQUE,
        first_name TEXT NOT NULL DEFAULT '',
        last_name TEXT NOT NULL DEFAULT '',
        email TEXT NOT NULL DEFAULT '',
        email_normalized TEXT NOT NULL DEFAULT '',
        password_hash TEXT NOT NULL,
        password_salt TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS sessions (
        token_hash TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        created_at INTEGER NOT NULL,
        expires_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS decks (
        id TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        commander TEXT NOT NULL DEFAULT '',
        decklist TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS account_collections (
        id TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        cardlist TEXT NOT NULL DEFAULT '',
        sources_json TEXT NOT NULL DEFAULT '[]',
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS deck_price_snapshots (
        id TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        deck_id TEXT NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
        captured_at INTEGER NOT NULL,
        captured_day TEXT NOT NULL,
        source TEXT NOT NULL DEFAULT 'all',
        total_usd REAL NOT NULL DEFAULT 0,
        totals_json TEXT NOT NULL DEFAULT '{}',
        cards_json TEXT NOT NULL DEFAULT '[]',
        UNIQUE(deck_id, account_id, source, captured_day)
      );
      CREATE TABLE IF NOT EXISTS deck_play_stat_commits (
        id TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        deck_id TEXT NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
        room_id TEXT NOT NULL,
        room_name TEXT NOT NULL DEFAULT '',
        commit_id TEXT NOT NULL,
        reason TEXT NOT NULL DEFAULT '',
        turn INTEGER NOT NULL DEFAULT 1,
        active_seat INTEGER NOT NULL DEFAULT 0,
        actor_seat INTEGER NOT NULL DEFAULT -1,
        committed_at INTEGER NOT NULL,
        spells_cast INTEGER NOT NULL DEFAULT 0,
        mana_used REAL NOT NULL DEFAULT 0,
        mana_produced REAL NOT NULL DEFAULT 0,
        summary_json TEXT NOT NULL DEFAULT '{}',
        events_json TEXT NOT NULL DEFAULT '[]',
        log_events_json TEXT NOT NULL DEFAULT '[]',
        UNIQUE(account_id, deck_id, room_id, commit_id, actor_seat)
      );
      CREATE TABLE IF NOT EXISTS friendships (
        id TEXT PRIMARY KEY,
        requester_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        addressee_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        CHECK(requester_id <> addressee_id)
      );
      CREATE TABLE IF NOT EXISTS game_invites (
        id TEXT PRIMARY KEY,
        room_id TEXT NOT NULL,
        from_account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        to_account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        CHECK(from_account_id <> to_account_id)
      );
      CREATE INDEX IF NOT EXISTS decks_account_updated_idx ON decks(account_id, updated_at DESC);
      CREATE INDEX IF NOT EXISTS collections_account_updated_idx ON account_collections(account_id, updated_at DESC);
      CREATE INDEX IF NOT EXISTS sessions_account_idx ON sessions(account_id);
      CREATE INDEX IF NOT EXISTS deck_price_snapshots_deck_idx ON deck_price_snapshots(account_id, deck_id, captured_at DESC);
      CREATE INDEX IF NOT EXISTS deck_play_stats_deck_idx ON deck_play_stat_commits(account_id, deck_id, committed_at DESC);
      CREATE INDEX IF NOT EXISTS deck_play_stats_room_idx ON deck_play_stat_commits(room_id, commit_id);
      CREATE INDEX IF NOT EXISTS friendships_requester_idx ON friendships(requester_id, status);
      CREATE INDEX IF NOT EXISTS friendships_addressee_idx ON friendships(addressee_id, status);
      CREATE UNIQUE INDEX IF NOT EXISTS friendships_pair_unique ON friendships(requester_id, addressee_id);
      CREATE INDEX IF NOT EXISTS game_invites_to_idx ON game_invites(to_account_id, status, updated_at DESC);
      CREATE INDEX IF NOT EXISTS game_invites_from_idx ON game_invites(from_account_id, status, updated_at DESC);
      CREATE UNIQUE INDEX IF NOT EXISTS game_invites_pending_unique ON game_invites(room_id, to_account_id) WHERE status = 'pending';
    `);
    this.ensureColumn("accounts", "first_name", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "last_name", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "email", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "email_normalized", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "last_seen_at", "INTEGER NOT NULL DEFAULT 0");
    this.ensureColumn("account_collections", "sources_json", "TEXT NOT NULL DEFAULT '[]'");
    this.ensureColumn("deck_play_stat_commits", "log_events_json", "TEXT NOT NULL DEFAULT '[]'");
    this.db.exec("CREATE UNIQUE INDEX IF NOT EXISTS accounts_email_normalized_unique ON accounts(email_normalized) WHERE email_normalized <> '';");
  }

  ensureColumn(table, column, definition) {
    const columns = this.db.prepare(`PRAGMA table_info(${table})`).all().map((row) => row.name);
    if (!columns.includes(column)) {
      this.db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition};`);
    }
  }

  createAccount(usernameValue, passwordValue, firstNameValue = "", lastNameValue = "", emailValue = "", confirmPasswordValue = "") {
    const username = validateUsername(usernameValue);
    const firstName = validateFirstName(firstNameValue, username);
    const lastName = validateLastName(lastNameValue);
    const email = validateEmail(emailValue);
    const normalized = normalizeUsername(username);
    const existing = this.db.prepare("SELECT id FROM accounts WHERE username_normalized = ?").get(normalized);
    if (existing) throw new Error("That username is already in use.");
    const existingEmail = this.db.prepare("SELECT id FROM accounts WHERE email_normalized = ?").get(email);
    if (existingEmail) throw new Error("That email is already in use.");
    const password = validatePassword(passwordValue);
    if (String(confirmPasswordValue || passwordValue) !== password) throw new Error("Passwords do not match.");
    const salt = crypto.randomBytes(16).toString("hex");
    const now = Date.now();
    const account = { id: newId("account"), username, firstName, lastName, email, createdAt: now, lastSeenAt: now };
    this.db.prepare(`
      INSERT INTO accounts (
        id, username, username_normalized, first_name, last_name, email, email_normalized,
        password_hash, password_salt, created_at, last_seen_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(account.id, account.username, normalized, account.firstName, account.lastName, account.email, account.email, passwordHash(password, salt), salt, account.createdAt, now);
    return { account, sessionToken: this.createSession(account.id) };
  }

  login(usernameValue, passwordValue) {
    const normalized = normalizeUsername(usernameValue);
    const row = this.db.prepare("SELECT * FROM accounts WHERE username_normalized = ?").get(normalized);
    if (!row) return null;
    const suppliedHash = passwordHash(String(passwordValue || ""), row.password_salt);
    if (!safeEqualHex(suppliedHash, row.password_hash)) return null;
    this.touchAccountPresence(row.id, Date.now(), true);
    const account = this.accountFromRow({ ...row, last_seen_at: Date.now() });
    return { account, sessionToken: this.createSession(account.id) };
  }

  createSession(accountId) {
    const token = crypto.randomBytes(32).toString("base64url");
    const now = Date.now();
    this.db.prepare("DELETE FROM sessions WHERE expires_at <= ?").run(now);
    this.db.prepare(`
      INSERT INTO sessions (token_hash, account_id, created_at, expires_at)
      VALUES (?, ?, ?, ?)
    `).run(sessionHash(token), accountId, now, now + sessionLifetimeMs);
    return token;
  }

  accountForSession(token) {
    if (!token) return null;
    const now = Date.now();
    const row = this.db.prepare(`
      SELECT accounts.id, accounts.username, accounts.first_name, accounts.last_name, accounts.email, accounts.created_at, accounts.last_seen_at
      FROM sessions
      JOIN accounts ON accounts.id = sessions.account_id
      WHERE sessions.token_hash = ? AND sessions.expires_at > ?
    `).get(sessionHash(token), now);
    if (!row) return null;
    this.touchAccountPresence(row.id, now);
    return this.accountFromRow(row);
  }

  deleteSession(token) {
    if (!token) return;
    this.db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(sessionHash(token));
  }

  touchAccountPresence(accountId, now = Date.now(), force = false) {
    if (!accountId) return;
    const previous = Number(this.presenceTouchCache.get(accountId)) || 0;
    if (!force && now - previous < 30000) return;
    this.presenceTouchCache.set(accountId, now);
    this.db.prepare("UPDATE accounts SET last_seen_at = ? WHERE id = ?").run(now, accountId);
  }

  publicAccountFromRow(row) {
    return row ? {
      id: row.id,
      username: row.username,
      firstName: row.first_name || row.username,
      lastName: row.last_name || "",
      lastSeenAt: Number(row.last_seen_at) || 0,
    } : null;
  }

  accountFromRow(row) {
    return row ? {
      ...this.publicAccountFromRow(row),
      email: row.email || "",
      createdAt: Number(row.created_at),
    } : null;
  }

  findPublicAccountByUsername(usernameValue) {
    const row = this.db.prepare(`
      SELECT id, username, first_name, last_name, last_seen_at
      FROM accounts
      WHERE username_normalized = ?
    `).get(normalizeUsername(usernameValue));
    return this.publicAccountFromRow(row);
  }

  publicAccountById(accountId) {
    const row = this.db.prepare(`
      SELECT id, username, first_name, last_name, last_seen_at
      FROM accounts
      WHERE id = ?
    `).get(accountId);
    return this.publicAccountFromRow(row);
  }

  friendshipBetween(leftAccountId, rightAccountId) {
    return this.db.prepare(`
      SELECT * FROM friendships
      WHERE (requester_id = ? AND addressee_id = ?)
         OR (requester_id = ? AND addressee_id = ?)
    `).get(leftAccountId, rightAccountId, rightAccountId, leftAccountId);
  }

  areFriends(leftAccountId, rightAccountId) {
    const row = this.friendshipBetween(leftAccountId, rightAccountId);
    return row?.status === "accepted";
  }

  sendFriendRequest(accountId, usernameValue) {
    const target = this.findPublicAccountByUsername(usernameValue);
    if (!target) {
      const error = new Error("No account was found with that username.");
      error.code = "FRIEND_NOT_FOUND";
      throw error;
    }
    if (target.id === accountId) {
      const error = new Error("You cannot send a friend invite to yourself.");
      error.code = "FRIEND_SELF";
      throw error;
    }
    const existing = this.friendshipBetween(accountId, target.id);
    const now = Date.now();
    if (existing?.status === "accepted") {
      const error = new Error("You are already friends with that account.");
      error.code = "ALREADY_FRIENDS";
      throw error;
    }
    if (existing?.status === "pending" && existing.requester_id === accountId) {
      const error = new Error("A friend invite is already pending.");
      error.code = "FRIEND_INVITE_PENDING";
      throw error;
    }
    if (existing?.status === "pending" && existing.addressee_id === accountId) {
      this.db.prepare("UPDATE friendships SET status = 'accepted', updated_at = ? WHERE id = ?").run(now, existing.id);
      return this.friendshipById(existing.id);
    }
    const id = existing?.id || newId("friend");
    if (existing) {
      this.db.prepare(`
        UPDATE friendships
        SET requester_id = ?, addressee_id = ?, status = 'pending', updated_at = ?
        WHERE id = ?
      `).run(accountId, target.id, now, id);
    } else {
      this.db.prepare(`
        INSERT INTO friendships (id, requester_id, addressee_id, status, created_at, updated_at)
        VALUES (?, ?, ?, 'pending', ?, ?)
      `).run(id, accountId, target.id, now, now);
    }
    return this.friendshipById(id);
  }

  friendshipById(friendshipId) {
    return this.db.prepare("SELECT * FROM friendships WHERE id = ?").get(friendshipId);
  }

  respondToFriendRequest(accountId, friendshipId, action) {
    const row = this.db.prepare(`
      SELECT * FROM friendships
      WHERE id = ? AND addressee_id = ? AND status = 'pending'
    `).get(friendshipId, accountId);
    if (!row) {
      const error = new Error("Friend invite was not found.");
      error.code = "FRIEND_INVITE_NOT_FOUND";
      throw error;
    }
    if (action === "accept") {
      this.db.prepare("UPDATE friendships SET status = 'accepted', updated_at = ? WHERE id = ?").run(Date.now(), row.id);
      return this.friendshipById(row.id);
    }
    this.db.prepare("DELETE FROM friendships WHERE id = ?").run(row.id);
    return null;
  }

  removeFriendship(accountId, friendshipId) {
    const result = this.db.prepare(`
      DELETE FROM friendships
      WHERE id = ? AND (requester_id = ? OR addressee_id = ?)
    `).run(friendshipId, accountId, accountId);
    return Number(result.changes) > 0;
  }

  listFriendships(accountId) {
    const rows = this.db.prepare(`
      SELECT
        friendships.id, friendships.requester_id, friendships.addressee_id, friendships.status,
        friendships.created_at, friendships.updated_at,
        accounts.id AS account_id, accounts.username, accounts.first_name, accounts.last_name, accounts.last_seen_at
      FROM friendships
      JOIN accounts ON accounts.id = CASE
        WHEN friendships.requester_id = ? THEN friendships.addressee_id
        ELSE friendships.requester_id
      END
      WHERE friendships.requester_id = ? OR friendships.addressee_id = ?
      ORDER BY friendships.updated_at DESC
    `).all(accountId, accountId, accountId);
    const result = { friends: [], incoming: [], outgoing: [] };
    rows.forEach((row) => {
      const item = {
        id: row.id,
        status: row.status,
        requestedAt: Number(row.created_at) || 0,
        updatedAt: Number(row.updated_at) || 0,
        account: this.publicAccountFromRow({
          id: row.account_id,
          username: row.username,
          first_name: row.first_name,
          last_name: row.last_name,
          last_seen_at: row.last_seen_at,
        }),
      };
      if (row.status === "accepted") result.friends.push(item);
      else if (row.addressee_id === accountId) result.incoming.push(item);
      else result.outgoing.push(item);
    });
    return result;
  }

  sendGameInvite(fromAccountId, toAccountId, roomId) {
    if (!this.areFriends(fromAccountId, toAccountId)) {
      const error = new Error("You can only invite accepted friends to games.");
      error.code = "FRIEND_REQUIRED";
      throw error;
    }
    const now = Date.now();
    const existing = this.db.prepare(`
      SELECT id FROM game_invites
      WHERE room_id = ? AND to_account_id = ? AND status = 'pending'
    `).get(roomId, toAccountId);
    if (existing) {
      this.db.prepare(`
        UPDATE game_invites
        SET from_account_id = ?, updated_at = ?
        WHERE id = ?
      `).run(fromAccountId, now, existing.id);
      return this.gameInviteById(existing.id);
    }
    const id = newId("invite");
    this.db.prepare(`
      INSERT INTO game_invites (id, room_id, from_account_id, to_account_id, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, 'pending', ?, ?)
    `).run(id, roomId, fromAccountId, toAccountId, now, now);
    return this.gameInviteById(id);
  }

  gameInviteById(inviteId) {
    return this.db.prepare("SELECT * FROM game_invites WHERE id = ?").get(inviteId);
  }

  resolveGameInvite(accountId, inviteId, status) {
    const row = this.db.prepare(`
      SELECT * FROM game_invites
      WHERE id = ? AND to_account_id = ? AND status = 'pending'
    `).get(inviteId, accountId);
    if (!row) {
      const error = new Error("Game invite was not found.");
      error.code = "GAME_INVITE_NOT_FOUND";
      throw error;
    }
    this.db.prepare("UPDATE game_invites SET status = ?, updated_at = ? WHERE id = ?").run(status, Date.now(), row.id);
    return { ...row, status };
  }

  listGameInvites(accountId) {
    const rows = this.db.prepare(`
      SELECT
        game_invites.*,
        from_accounts.username AS from_username,
        from_accounts.first_name AS from_first_name,
        from_accounts.last_name AS from_last_name,
        from_accounts.last_seen_at AS from_last_seen_at,
        to_accounts.username AS to_username,
        to_accounts.first_name AS to_first_name,
        to_accounts.last_name AS to_last_name,
        to_accounts.last_seen_at AS to_last_seen_at
      FROM game_invites
      JOIN accounts AS from_accounts ON from_accounts.id = game_invites.from_account_id
      JOIN accounts AS to_accounts ON to_accounts.id = game_invites.to_account_id
      WHERE (game_invites.from_account_id = ? OR game_invites.to_account_id = ?)
        AND game_invites.status = 'pending'
      ORDER BY game_invites.updated_at DESC
    `).all(accountId, accountId);
    return rows.reduce((result, row) => {
      const item = {
        id: row.id,
        roomId: row.room_id,
        status: row.status,
        createdAt: Number(row.created_at) || 0,
        updatedAt: Number(row.updated_at) || 0,
        from: this.publicAccountFromRow({
          id: row.from_account_id,
          username: row.from_username,
          first_name: row.from_first_name,
          last_name: row.from_last_name,
          last_seen_at: row.from_last_seen_at,
        }),
        to: this.publicAccountFromRow({
          id: row.to_account_id,
          username: row.to_username,
          first_name: row.to_first_name,
          last_name: row.to_last_name,
          last_seen_at: row.to_last_seen_at,
        }),
      };
      if (row.to_account_id === accountId) result.incoming.push(item);
      else result.outgoing.push(item);
      return result;
    }, { incoming: [], outgoing: [] });
  }

  listDecks(accountId) {
    return this.db.prepare(`
      SELECT id, name, commander, decklist, created_at, updated_at
      FROM decks WHERE account_id = ? ORDER BY updated_at DESC
    `).all(accountId).map(this.deckFromRow);
  }

  deckById(accountId, deckId) {
    const row = this.db.prepare(`
      SELECT id, name, commander, decklist, created_at, updated_at
      FROM decks WHERE id = ? AND account_id = ?
    `).get(deckId, accountId);
    return row ? this.deckFromRow(row) : null;
  }

  saveDeck(accountId, values, deckId = "") {
    const name = String(values.name || "").trim().slice(0, 80);
    const commander = String(values.commander || "").trim().slice(0, 120);
    const decklist = String(values.decklist || "").trim().slice(0, 100000);
    if (!name) throw new Error("Deck name is required.");
    if (!decklist) throw new Error("Deck list is required.");
    const now = Date.now();
    if (deckId) {
      const result = this.db.prepare(`
        UPDATE decks SET name = ?, commander = ?, decklist = ?, updated_at = ?
        WHERE id = ? AND account_id = ?
      `).run(name, commander, decklist, now, deckId, accountId);
      if (Number(result.changes) === 0) throw new Error("Saved deck was not found.");
      return this.deckFromRow(this.db.prepare("SELECT * FROM decks WHERE id = ? AND account_id = ?").get(deckId, accountId));
    }
    const id = newId("deck");
    this.db.prepare(`
      INSERT INTO decks (id, account_id, name, commander, decklist, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, accountId, name, commander, decklist, now, now);
    return this.deckFromRow(this.db.prepare("SELECT * FROM decks WHERE id = ?").get(id));
  }

  deleteDeck(accountId, deckId) {
    const result = this.db.prepare("DELETE FROM decks WHERE id = ? AND account_id = ?").run(deckId, accountId);
    return Number(result.changes) > 0;
  }

  listCollections(accountId) {
    return this.db.prepare(`
      SELECT id, name, cardlist, sources_json, created_at, updated_at
      FROM account_collections WHERE account_id = ? ORDER BY updated_at DESC
    `).all(accountId).map(this.collectionFromRow);
  }

  collectionById(accountId, collectionId) {
    const row = this.db.prepare(`
      SELECT id, name, cardlist, sources_json, created_at, updated_at
      FROM account_collections WHERE id = ? AND account_id = ?
    `).get(collectionId, accountId);
    return row ? this.collectionFromRow(row) : null;
  }

  saveCollection(accountId, values, collectionId = "") {
    const name = String(values.name || "").trim().slice(0, 80);
    const cardlist = String(values.cardlist || values.decklist || "").trim().slice(0, 200000);
    const sourcesJson = JSON.stringify(normalizeCollectionSources(values.sources));
    if (!name) throw new Error("Collection name is required.");
    const now = Date.now();
    if (collectionId) {
      const result = this.db.prepare(`
        UPDATE account_collections SET name = ?, cardlist = ?, sources_json = ?, updated_at = ?
        WHERE id = ? AND account_id = ?
      `).run(name, cardlist, sourcesJson, now, collectionId, accountId);
      if (Number(result.changes) === 0) throw new Error("Collection was not found.");
      return this.collectionFromRow(this.db.prepare("SELECT * FROM account_collections WHERE id = ? AND account_id = ?").get(collectionId, accountId));
    }
    const id = newId("collection");
    this.db.prepare(`
      INSERT INTO account_collections (id, account_id, name, cardlist, sources_json, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, accountId, name, cardlist, sourcesJson, now, now);
    return this.collectionFromRow(this.db.prepare("SELECT * FROM account_collections WHERE id = ?").get(id));
  }

  deleteCollection(accountId, collectionId) {
    const result = this.db.prepare("DELETE FROM account_collections WHERE id = ? AND account_id = ?").run(collectionId, accountId);
    return Number(result.changes) > 0;
  }

  saveDeckPriceSnapshot(accountId, deckId, snapshot) {
    const deck = this.db.prepare("SELECT id FROM decks WHERE id = ? AND account_id = ?").get(deckId, accountId);
    if (!deck) throw new Error("Saved deck was not found.");
    const capturedAt = Number(snapshot?.capturedAt) || Date.now();
    const capturedDay = new Date(capturedAt).toISOString().slice(0, 10);
    const source = String(snapshot?.source || "all").slice(0, 40);
    const totalUsd = Number(snapshot?.totalUsd) || 0;
    const totalsJson = JSON.stringify(snapshot?.totalsUsd || {});
    const cardsJson = JSON.stringify(Array.isArray(snapshot?.cards) ? snapshot.cards : []);
    const existing = this.db.prepare(`
      SELECT id FROM deck_price_snapshots
      WHERE deck_id = ? AND account_id = ? AND source = ? AND captured_day = ?
    `).get(deckId, accountId, source, capturedDay);
    if (existing) {
      this.db.prepare(`
        UPDATE deck_price_snapshots
        SET captured_at = ?, total_usd = ?, totals_json = ?, cards_json = ?
        WHERE id = ?
      `).run(capturedAt, totalUsd, totalsJson, cardsJson, existing.id);
      return this.priceSnapshotFromRow(this.db.prepare("SELECT * FROM deck_price_snapshots WHERE id = ?").get(existing.id));
    }
    const id = newId("price");
    this.db.prepare(`
      INSERT INTO deck_price_snapshots (id, account_id, deck_id, captured_at, captured_day, source, total_usd, totals_json, cards_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, accountId, deckId, capturedAt, capturedDay, source, totalUsd, totalsJson, cardsJson);
    return this.priceSnapshotFromRow(this.db.prepare("SELECT * FROM deck_price_snapshots WHERE id = ?").get(id));
  }

  listDeckPriceHistory(accountId, deckId, limit = 180) {
    return this.db.prepare(`
      SELECT * FROM deck_price_snapshots
      WHERE account_id = ? AND deck_id = ?
      ORDER BY captured_at ASC
      LIMIT ?
    `).all(accountId, deckId, Math.max(1, Math.min(365, Number(limit) || 180))).map(this.priceSnapshotFromRow);
  }

  saveDeckPlayStatCommit(accountId, deckId, record = {}) {
    const deck = this.deckById(accountId, deckId);
    if (!deck) throw new Error("Saved deck was not found.");
    const roomId = String(record.roomId || "").slice(0, 80);
    const commitId = String(record.commitId || "").slice(0, 80);
    if (!roomId || !commitId) throw new Error("A room id and statistics commit id are required.");
    const events = Array.isArray(record.events) ? record.events : [];
    const logEvents = Array.isArray(record.logEvents) ? record.logEvents : [];
    const summary = record.summary && typeof record.summary === "object" ? record.summary : {};
    const spellsCast = Number.isFinite(Number(record.spellsCast))
      ? Number(record.spellsCast)
      : events.filter((event) => event?.kind === "spell").length;
    const manaUsed = Number.isFinite(Number(record.manaUsed))
      ? Number(record.manaUsed)
      : events.reduce((total, event) => total + (event?.kind === "spell" ? Number(event.manaUsed) || 0 : 0), 0);
    const manaProduced = Number.isFinite(Number(record.manaProduced))
      ? Number(record.manaProduced)
      : events.reduce((total, event) => total + (event?.kind === "mana" ? Number(event.amount) || 0 : 0), 0);
    const actorSeat = Number.isFinite(Number(record.actorSeat)) ? Number(record.actorSeat) : -1;
    const id = newId("deckstat");
    this.db.prepare(`
      INSERT OR IGNORE INTO deck_play_stat_commits (
        id, account_id, deck_id, room_id, room_name, commit_id, reason, turn, active_seat,
        actor_seat, committed_at, spells_cast, mana_used, mana_produced, summary_json,
        events_json, log_events_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      accountId,
      deckId,
      roomId,
      String(record.roomName || "").slice(0, 80),
      commitId,
      String(record.reason || "").slice(0, 80),
      Math.max(1, Number(record.turn) || 1),
      Number.isFinite(Number(record.activeSeat)) ? Number(record.activeSeat) : 0,
      actorSeat,
      Number(record.committedAt) || Date.now(),
      Math.max(0, Math.round(spellsCast)),
      Math.max(0, Number(manaUsed) || 0),
      Math.max(0, Number(manaProduced) || 0),
      JSON.stringify(summary),
      JSON.stringify(events),
      JSON.stringify(logEvents),
    );
    return this.deckPlayStatCommitFromRow(this.db.prepare(`
      SELECT * FROM deck_play_stat_commits
      WHERE account_id = ? AND deck_id = ? AND room_id = ? AND commit_id = ? AND actor_seat = ?
    `).get(accountId, deckId, roomId, commitId, actorSeat));
  }

  deckPlayStats(accountId, deckId, limit = 120) {
    const deck = this.deckById(accountId, deckId);
    if (!deck) throw new Error("Saved deck was not found.");
    const safeLimit = Math.max(1, Math.min(500, Number(limit) || 120));
    const totals = this.db.prepare(`
      SELECT
        COUNT(*) AS commits,
        COUNT(DISTINCT room_id) AS games,
        COALESCE(SUM(spells_cast), 0) AS spells_cast,
        COALESCE(SUM(mana_used), 0) AS mana_used,
        COALESCE(SUM(mana_produced), 0) AS mana_produced,
        COALESCE(MIN(committed_at), 0) AS first_played_at,
        COALESCE(MAX(committed_at), 0) AS last_played_at
      FROM deck_play_stat_commits
      WHERE account_id = ? AND deck_id = ?
    `).get(accountId, deckId);
    const aggregateRows = this.db.prepare(`
      SELECT summary_json FROM deck_play_stat_commits
      WHERE account_id = ? AND deck_id = ?
      ORDER BY committed_at DESC
      LIMIT 5000
    `).all(accountId, deckId);
    const spellsByType = {};
    const manaByColor = {};
    aggregateRows.forEach((row) => {
      const summary = safeJson(row.summary_json, {});
      Object.entries(summary.spellsByType || {}).forEach(([type, count]) => {
        spellsByType[type] = (Number(spellsByType[type]) || 0) + (Number(count) || 0);
      });
      Object.entries(summary.manaByColor || {}).forEach(([color, amount]) => {
        manaByColor[color] = (Number(manaByColor[color]) || 0) + (Number(amount) || 0);
      });
    });
    const recent = this.db.prepare(`
      SELECT * FROM deck_play_stat_commits
      WHERE account_id = ? AND deck_id = ?
      ORDER BY committed_at DESC
      LIMIT ?
    `).all(accountId, deckId, safeLimit).map(this.deckPlayStatCommitFromRow);
    return {
      deckId,
      games: Number(totals.games) || 0,
      commits: Number(totals.commits) || 0,
      spellsCast: Number(totals.spells_cast) || 0,
      manaUsed: Number(totals.mana_used) || 0,
      manaProduced: Number(totals.mana_produced) || 0,
      firstPlayedAt: Number(totals.first_played_at) || 0,
      lastPlayedAt: Number(totals.last_played_at) || 0,
      spellsByType,
      manaByColor,
      recent,
    };
  }

  deckFromRow(row) {
    return {
      id: row.id,
      name: row.name,
      commander: row.commander,
      decklist: row.decklist,
      createdAt: Number(row.created_at),
      updatedAt: Number(row.updated_at),
    };
  }

  collectionFromRow(row) {
    return {
      id: row.id,
      name: row.name,
      cardlist: row.cardlist,
      sources: normalizeCollectionSources(safeJson(row.sources_json, [])),
      createdAt: Number(row.created_at),
      updatedAt: Number(row.updated_at),
    };
  }

  priceSnapshotFromRow(row) {
    return {
      id: row.id,
      deckId: row.deck_id,
      capturedAt: Number(row.captured_at),
      capturedDay: row.captured_day,
      source: row.source,
      totalUsd: Number(row.total_usd) || 0,
      totalsUsd: safeJson(row.totals_json, {}),
      cards: safeJson(row.cards_json, []),
    };
  }

  deckPlayStatCommitFromRow(row) {
    return {
      id: row.id,
      deckId: row.deck_id,
      roomId: row.room_id,
      roomName: row.room_name,
      commitId: row.commit_id,
      reason: row.reason,
      turn: Number(row.turn) || 1,
      activeSeat: Number(row.active_seat) || 0,
      actorSeat: Number(row.actor_seat),
      committedAt: Number(row.committed_at) || 0,
      spellsCast: Number(row.spells_cast) || 0,
      manaUsed: Number(row.mana_used) || 0,
      manaProduced: Number(row.mana_produced) || 0,
      summary: safeJson(row.summary_json, {}),
      events: safeJson(row.events_json, []),
      logEvents: safeJson(row.log_events_json, []),
    };
  }

  close() {
    this.db.close();
  }
}

module.exports = { AccountStore };
