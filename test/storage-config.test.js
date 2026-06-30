const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { databasePathFromEnvironment, normalizeDatabasePath, storageInfo } = require("../storage-config");

function withStorageEnv(values, fn) {
  const keys = [
    "MAGE_TABLE_DB_PATH",
    "MAGE_TABLE_DATABASE_PATH",
    "MAGE_TABLE_DATA_DIR",
    "RAILWAY_VOLUME_MOUNT_PATH",
    "RAILWAY_ENVIRONMENT_ID",
  ];
  const previous = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  keys.forEach((key) => delete process.env[key]);
  Object.entries(values).forEach(([key, value]) => {
    process.env[key] = value;
  });
  try {
    fn();
  } finally {
    keys.forEach((key) => {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    });
  }
}

test("storage resolver treats configured directories as the database directory", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "mage-table-storage-"));
  try {
    assert.equal(normalizeDatabasePath(directory), path.join(directory, "mage-table.db"));
    withStorageEnv({ MAGE_TABLE_DB_PATH: directory }, () => {
      assert.equal(databasePathFromEnvironment(), path.join(directory, "mage-table.db"));
      assert.equal(storageInfo().persistent, true);
    });
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test("storage resolver uses Railway volume mount path when present", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "mage-table-railway-volume-"));
  try {
    withStorageEnv({ RAILWAY_VOLUME_MOUNT_PATH: directory, RAILWAY_ENVIRONMENT_ID: "test-env" }, () => {
      assert.equal(databasePathFromEnvironment(), path.join(directory, "mage-table.db"));
      assert.equal(storageInfo().source, "mounted-volume");
      assert.equal(storageInfo().warning, "");
    });
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test("storage resolver warns in hosted environments without persistent storage", () => {
  withStorageEnv({ RAILWAY_ENVIRONMENT_ID: "test-env" }, () => {
    const info = storageInfo();
    assert.equal(info.persistent, false);
    assert.match(info.warning, /Persistent storage is not configured/);
  });
});
