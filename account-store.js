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
  if (lastName.length < 1 || lastName.length > 60) {
    throw new Error("Last name must be between 1 and 60 characters.");
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

class AccountStore {
  constructor(databasePath = process.env.MAGE_TABLE_DB_PATH || path.join(__dirname, "data", "mage-table.db")) {
    this.databasePath = databasePath;
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
      CREATE INDEX IF NOT EXISTS decks_account_updated_idx ON decks(account_id, updated_at DESC);
      CREATE INDEX IF NOT EXISTS sessions_account_idx ON sessions(account_id);
    `);
    this.ensureColumn("accounts", "first_name", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "last_name", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "email", "TEXT NOT NULL DEFAULT ''");
    this.ensureColumn("accounts", "email_normalized", "TEXT NOT NULL DEFAULT ''");
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
    const account = { id: newId("account"), username, firstName, lastName, email, createdAt: Date.now() };
    this.db.prepare(`
      INSERT INTO accounts (id, username, username_normalized, first_name, last_name, email, email_normalized, password_hash, password_salt, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(account.id, account.username, normalized, account.firstName, account.lastName, account.email, account.email, passwordHash(password, salt), salt, account.createdAt);
    return { account, sessionToken: this.createSession(account.id) };
  }

  login(usernameValue, passwordValue) {
    const normalized = normalizeUsername(usernameValue);
    const row = this.db.prepare("SELECT * FROM accounts WHERE username_normalized = ?").get(normalized);
    if (!row) return null;
    const suppliedHash = passwordHash(String(passwordValue || ""), row.password_salt);
    if (!safeEqualHex(suppliedHash, row.password_hash)) return null;
    const account = {
      id: row.id,
      username: row.username,
      firstName: row.first_name || row.username,
      lastName: row.last_name || "",
      email: row.email || "",
      createdAt: Number(row.created_at),
    };
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
      SELECT accounts.id, accounts.username, accounts.first_name, accounts.last_name, accounts.email, accounts.created_at
      FROM sessions
      JOIN accounts ON accounts.id = sessions.account_id
      WHERE sessions.token_hash = ? AND sessions.expires_at > ?
    `).get(sessionHash(token), now);
    return row ? {
      id: row.id,
      username: row.username,
      firstName: row.first_name || row.username,
      lastName: row.last_name || "",
      email: row.email || "",
      createdAt: Number(row.created_at),
    } : null;
  }

  deleteSession(token) {
    if (!token) return;
    this.db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(sessionHash(token));
  }

  listDecks(accountId) {
    return this.db.prepare(`
      SELECT id, name, commander, decklist, created_at, updated_at
      FROM decks WHERE account_id = ? ORDER BY updated_at DESC
    `).all(accountId).map(this.deckFromRow);
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

  close() {
    this.db.close();
  }
}

module.exports = { AccountStore };
