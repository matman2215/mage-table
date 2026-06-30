const fs = require("node:fs");
const path = require("node:path");

const defaultDatabasePath = path.join(__dirname, "data", "mage-table.db");
const databaseFileName = "mage-table.db";

function normalizeDatabasePath(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw === ":memory:") return raw;
  const expanded = raw.replace(/^~(?=$|[\\/])/, process.env.HOME || process.env.USERPROFILE || "~");
  const resolved = path.resolve(expanded);
  const baseName = path.basename(resolved);
  const looksLikeFile = path.extname(baseName).toLowerCase() === ".db" || baseName.includes(".");
  return looksLikeFile ? resolved : path.join(resolved, databaseFileName);
}

function firstExistingDirectory(values) {
  for (const value of values) {
    const normalized = normalizeDatabasePath(value);
    if (!normalized || normalized === ":memory:") continue;
    const directory = path.dirname(normalized);
    if (fs.existsSync(directory)) return normalized;
  }
  return "";
}

function configuredDatabasePath() {
  const explicit = normalizeDatabasePath(process.env.MAGE_TABLE_DB_PATH || process.env.MAGE_TABLE_DATABASE_PATH);
  if (explicit) return { path: explicit, source: process.env.MAGE_TABLE_DB_PATH ? "MAGE_TABLE_DB_PATH" : "MAGE_TABLE_DATABASE_PATH" };

  const dataDir = normalizeDatabasePath(process.env.MAGE_TABLE_DATA_DIR);
  if (dataDir) return { path: dataDir, source: "MAGE_TABLE_DATA_DIR" };

  const mounted = firstExistingDirectory([
    process.env.RAILWAY_VOLUME_MOUNT_PATH,
    process.env.RAILWAY_VOLUME_PATH,
    process.env.VOLUME_MOUNT_PATH,
    process.env.PERSISTENT_STORAGE_DIR,
    process.env.RENDER_DISK_PATH,
    "/data",
    "/var/data",
  ]);
  if (mounted) return { path: mounted, source: "mounted-volume" };

  return { path: defaultDatabasePath, source: "default-local-data" };
}

function isLikelyHostedEnvironment() {
  return Boolean(
    process.env.RAILWAY_ENVIRONMENT ||
    process.env.RAILWAY_ENVIRONMENT_ID ||
    process.env.RAILWAY_SERVICE_ID ||
    process.env.RENDER ||
    process.env.FLY_APP_NAME ||
    process.env.DYNO,
  );
}

function databasePathFromEnvironment() {
  return configuredDatabasePath().path;
}

function storageInfo(databasePath = databasePathFromEnvironment()) {
  const configured = configuredDatabasePath();
  const resolved = normalizeDatabasePath(databasePath) || databasePath;
  const directory = resolved === ":memory:" ? ":memory:" : path.dirname(resolved);
  const source = resolved === configured.path ? configured.source : "constructor";
  const isMemory = resolved === ":memory:";
  const persistent = isMemory ? false : source !== "default-local-data" || !isLikelyHostedEnvironment();
  const warning = persistent || isMemory
    ? ""
    : "Persistent storage is not configured. Set MAGE_TABLE_DB_PATH to a mounted volume path or saved accounts, decks, and collections can disappear after deploys or restarts.";
  return {
    databasePath: resolved,
    directory,
    source,
    persistent,
    hosted: isLikelyHostedEnvironment(),
    warning,
  };
}

function warnIfEphemeralStorage(databasePath = databasePathFromEnvironment()) {
  const info = storageInfo(databasePath);
  if (info.warning) console.warn(`[storage] ${info.warning} Current database path: ${info.databasePath}`);
  if (process.env.REQUIRE_PERSISTENT_STORAGE === "1" && info.warning) {
    throw new Error(info.warning);
  }
  return info;
}

module.exports = {
  databasePathFromEnvironment,
  normalizeDatabasePath,
  storageInfo,
  warnIfEphemeralStorage,
};
