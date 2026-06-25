const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

function databasePathFromEnvironment() {
  return process.env.MAGE_TABLE_DB_PATH || path.join(__dirname, "data", "mage-table.db");
}

function serializeRoom(room) {
  const {
    subscribers,
    presenceConnections,
    undoStack,
    redoStack,
    loadedAt,
    lastAccessedAt,
    ...persisted
  } = room;
  return JSON.stringify(persisted);
}

function hydrateRoom(state) {
  const now = Date.now();
  const room = {
    ...state,
    subscribers: new Set(),
    presenceConnections: new Map(),
    undoStack: [],
    redoStack: [],
  };
  room.events = Array.isArray(room.events) ? room.events : [];
  room.log = Array.isArray(room.log) ? room.log : [];
  room.chat = Array.isArray(room.chat) ? room.chat : [];
  room.stack = Array.isArray(room.stack) ? room.stack : [];
  room.reveals = Array.isArray(room.reveals) ? room.reveals : [];
  room.turnsPassed = Number.isFinite(Number(room.turnsPassed))
    ? Math.max(0, Number(room.turnsPassed))
    : room.events.filter((event) => /^Turn moved to /i.test(String(event?.message || ""))).length;
  room.players = Array.isArray(room.players) ? room.players : [];
  room.players.forEach((player) => {
    player.presenceLastSeenAt = 0;
    player.playerCounters = player.playerCounters || {};
    ["library", "hand", "commanderZone", "battlefield", "graveyard", "exile"].forEach((zone) => {
      if (!Array.isArray(player[zone])) player[zone] = [];
    });
  });
  room.clock = room.clock || {
    running: false,
    totalMs: 0,
    currentTurnMs: 0,
    playerMs: Array(room.players.length).fill(0),
  };
  room.clock.playerMs = Array.isArray(room.clock.playerMs)
    ? room.clock.playerMs.slice(0, room.players.length)
    : [];
  while (room.clock.playerMs.length < room.players.length) room.clock.playerMs.push(0);
  room.clock.lastSyncAt = now;
  room.guestHostLastSeenAt = Number(room.guestHostLastSeenAt) || 0;
  room.updatedAt = Number(room.updatedAt) || Number(room.createdAt) || now;
  room.createdAt = Number(room.createdAt) || room.updatedAt;
  room.endedAt = Number(room.endedAt) || 0;
  return room;
}

class GameStore {
  constructor(databasePath = databasePathFromEnvironment()) {
    this.databasePath = databasePath;
    if (databasePath !== ":memory:") fs.mkdirSync(path.dirname(databasePath), { recursive: true });
    this.db = new DatabaseSync(databasePath);
    this.db.exec("PRAGMA foreign_keys = ON;");
    this.db.exec("PRAGMA journal_mode = WAL;");
    this.db.exec("PRAGMA busy_timeout = 5000;");
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS games (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        host_account_id TEXT,
        join_code TEXT NOT NULL DEFAULT '',
        status TEXT NOT NULL DEFAULT 'active',
        turn_number INTEGER NOT NULL DEFAULT 1,
        active_player INTEGER NOT NULL DEFAULT 0,
        state_json TEXT NOT NULL,
        version INTEGER NOT NULL DEFAULT 1,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        ended_at INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS game_members (
        game_id TEXT NOT NULL REFERENCES games(id) ON DELETE CASCADE,
        seat INTEGER NOT NULL,
        account_id TEXT,
        seat_token TEXT NOT NULL,
        player_name TEXT NOT NULL,
        commander TEXT NOT NULL DEFAULT '',
        is_host INTEGER NOT NULL DEFAULT 0,
        claimed INTEGER NOT NULL DEFAULT 0,
        PRIMARY KEY (game_id, seat)
      );
      CREATE TABLE IF NOT EXISTS game_events (
        game_id TEXT NOT NULL REFERENCES games(id) ON DELETE CASCADE,
        sequence INTEGER NOT NULL,
        event_id TEXT NOT NULL,
        actor_seat INTEGER,
        event_type TEXT,
        payload_json TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        PRIMARY KEY (game_id, sequence)
      );
      CREATE INDEX IF NOT EXISTS games_status_updated_idx ON games(status, updated_at DESC);
      CREATE INDEX IF NOT EXISTS games_join_code_idx ON games(join_code, status);
      CREATE INDEX IF NOT EXISTS game_members_account_idx ON game_members(account_id, game_id);
      CREATE INDEX IF NOT EXISTS game_events_game_created_idx ON game_events(game_id, created_at);
    `);
    this.ensureColumn("games", "join_code", "TEXT NOT NULL DEFAULT ''");
    this.db.exec("CREATE INDEX IF NOT EXISTS games_join_code_idx ON games(join_code, status);");
    this.upsertGame = this.db.prepare(`
      INSERT INTO games (
        id, name, host_account_id, join_code, status, turn_number, active_player,
        state_json, version, created_at, updated_at, ended_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        host_account_id = excluded.host_account_id,
        join_code = excluded.join_code,
        status = excluded.status,
        turn_number = excluded.turn_number,
        active_player = excluded.active_player,
        state_json = excluded.state_json,
        version = games.version + 1,
        updated_at = excluded.updated_at,
        ended_at = excluded.ended_at
    `);
    this.deleteMembers = this.db.prepare("DELETE FROM game_members WHERE game_id = ?");
    this.insertMember = this.db.prepare(`
      INSERT INTO game_members (
        game_id, seat, account_id, seat_token, player_name, commander, is_host, claimed
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    this.insertEvent = this.db.prepare(`
      INSERT OR IGNORE INTO game_events (
        game_id, sequence, event_id, actor_seat, event_type, payload_json, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
  }

  ensureColumn(table, column, definition) {
    const columns = this.db.prepare(`PRAGMA table_info(${table})`).all().map((row) => row.name);
    if (!columns.includes(column)) {
      this.db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition};`);
    }
  }

  saveRoom(room) {
    if (!room?.id) throw new Error("Cannot persist a room without an id.");
    const host = room.players?.find((player) => player.isHost) || room.players?.[0] || null;
    const status = room.endedAt ? "ended" : "active";
    const createdAt = Number(room.createdAt) || Date.now();
    const updatedAt = Number(room.updatedAt) || createdAt;
    const endedAt = Number(room.endedAt) || 0;
    this.db.exec("BEGIN IMMEDIATE;");
    try {
      this.upsertGame.run(
        room.id,
        String(room.name || "Mage Table"),
        host?.accountId || null,
        String(room.joinCode || ""),
        status,
        Number(room.turnNumber) || 1,
        Number(room.activePlayer) || 0,
        serializeRoom(room),
        createdAt,
        updatedAt,
        endedAt,
      );
      this.deleteMembers.run(room.id);
      (room.players || []).forEach((player) => {
        this.insertMember.run(
          room.id,
          Number(player.seat) || 0,
          player.accountId || null,
          String(player.token || ""),
          String(player.name || `Player ${(Number(player.seat) || 0) + 1}`),
          String(player.commander || ""),
          player.isHost ? 1 : 0,
          player.claimed ? 1 : 0,
        );
      });
      (room.events || []).forEach((event) => {
        this.insertEvent.run(
          room.id,
          Number(event.seq) || 0,
          String(event.id || `${room.id}-${event.seq}`),
          Number.isInteger(Number(event.actorSeat)) ? Number(event.actorSeat) : null,
          String(event.detail?.kind || "action"),
          JSON.stringify(event),
          Number(event.timestamp) || updatedAt,
        );
      });
      this.db.exec("COMMIT;");
    } catch (error) {
      this.db.exec("ROLLBACK;");
      throw error;
    }
  }

  loadActiveRooms() {
    const rooms = [];
    this.db.prepare("SELECT id, state_json FROM games WHERE status = 'active' ORDER BY updated_at ASC")
      .all()
      .forEach((row) => {
        try {
          rooms.push(hydrateRoom(JSON.parse(row.state_json)));
        } catch (error) {
          console.error(`Could not restore persisted room ${row.id}:`, error);
        }
      });
    return rooms;
  }

  loadRoom(gameId) {
    const row = this.db.prepare("SELECT state_json FROM games WHERE id = ? AND status = 'active'").get(gameId);
    if (!row) return null;
    return hydrateRoom(JSON.parse(row.state_json));
  }

  findActiveRoomByJoinCode(joinCode) {
    const code = String(joinCode || "").trim();
    if (!code) return null;
    const row = this.db.prepare(`
      SELECT state_json FROM games
      WHERE status = 'active' AND join_code = ?
      ORDER BY updated_at DESC LIMIT 1
    `).get(code);
    if (row) return hydrateRoom(JSON.parse(row.state_json));

    const fallback = this.db.prepare("SELECT state_json FROM games WHERE status = 'active' ORDER BY updated_at DESC").all();
    for (const candidate of fallback) {
      try {
        const room = hydrateRoom(JSON.parse(candidate.state_json));
        if (room.joinCode === code) return room;
      } catch {
        // Ignore damaged historical rows and keep looking.
      }
    }
    return null;
  }

  joinCodeExists(joinCode) {
    const code = String(joinCode || "").trim();
    if (!code) return false;
    const row = this.db.prepare("SELECT id FROM games WHERE status = 'active' AND join_code = ? LIMIT 1").get(code);
    if (row) return true;
    return Boolean(this.findActiveRoomByJoinCode(code));
  }

  listActiveRoomsForAccount(accountId) {
    return this.db.prepare(`
      SELECT DISTINCT games.state_json
      FROM games
      JOIN game_members ON game_members.game_id = games.id
      WHERE games.status = 'active' AND game_members.account_id = ? AND game_members.claimed = 1
      ORDER BY games.updated_at DESC
    `).all(accountId).map((row) => hydrateRoom(JSON.parse(row.state_json)));
  }

  listActiveGuestHostedRooms() {
    return this.db.prepare(`
      SELECT games.state_json
      FROM games
      JOIN game_members ON game_members.game_id = games.id
      WHERE games.status = 'active'
        AND game_members.is_host = 1
        AND (game_members.account_id IS NULL OR game_members.account_id = '')
      ORDER BY games.updated_at ASC
    `).all().map((row) => hydrateRoom(JSON.parse(row.state_json)));
  }

  gameStatus(gameId) {
    const row = this.db.prepare("SELECT status, ended_at FROM games WHERE id = ?").get(gameId);
    return row ? { status: row.status, endedAt: Number(row.ended_at) || 0 } : null;
  }

  listMembers(gameId) {
    return this.db.prepare(`
      SELECT seat, account_id, seat_token, player_name, commander, is_host, claimed
      FROM game_members WHERE game_id = ? ORDER BY seat
    `).all(gameId);
  }

  listEvents(gameId) {
    return this.db.prepare(`
      SELECT sequence, event_id, actor_seat, event_type, payload_json, created_at
      FROM game_events WHERE game_id = ? ORDER BY sequence
    `).all(gameId);
  }

  close() {
    this.db.close();
  }
}

module.exports = {
  GameStore,
  databasePathFromEnvironment,
  hydrateRoom,
  serializeRoom,
};
