const phases = ["Untap", "Upkeep", "Draw", "Main 1", "Combat", "Main 2", "End"];

const els = {
  setupPanel: document.querySelector("#setupPanel"),
  tablePanel: document.querySelector("#tablePanel"),
  roomForm: document.querySelector("#roomForm"),
  roomNameInput: document.querySelector("#roomNameInput"),
  roomPasswordInput: document.querySelector("#roomPasswordInput"),
  singlePlayerInput: document.querySelector("#singlePlayerInput"),
  playerCountLabel: document.querySelector("#playerCountLabel"),
  playerCountInput: document.querySelector("#playerCountInput"),
  inviteList: document.querySelector("#inviteList"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  diceButton: document.querySelector("#diceButton"),
  randomFirstPlayerButton: document.querySelector("#randomFirstPlayerButton"),
  dicePopover: document.querySelector("#dicePopover"),
  closeDiceButton: document.querySelector("#closeDiceButton"),
  diceCountInput: document.querySelector("#diceCountInput"),
  randomMaxInput: document.querySelector("#randomMaxInput"),
  randomRollButton: document.querySelector("#randomRollButton"),
  diceResult: document.querySelector("#diceResult"),
  diceNotice: document.querySelector("#diceNotice"),
  diceNoticeTitle: document.querySelector("#diceNoticeTitle"),
  diceNoticeResult: document.querySelector("#diceNoticeResult"),
  dismissDiceNoticeButton: document.querySelector("#dismissDiceNoticeButton"),
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
  drawReminder: document.querySelector("#drawReminder"),
  untapReminder: document.querySelector("#untapReminder"),
  untapAllButton: document.querySelector("#untapAllButton"),
  dismissUntapButton: document.querySelector("#dismissUntapButton"),
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
  keybindList: document.querySelector("#keybindList"),
  resetKeybindsButton: document.querySelector("#resetKeybindsButton"),
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
  countDialog: document.querySelector("#countDialog"),
  countDialogForm: document.querySelector("#countDialogForm"),
  countDialogTitle: document.querySelector("#countDialogTitle"),
  countDialogSummary: document.querySelector("#countDialogSummary"),
  countDialogInput: document.querySelector("#countDialogInput"),
  countDialogSubmitButton: document.querySelector("#countDialogSubmitButton"),
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
  roomPasswordDialog: document.querySelector("#roomPasswordDialog"),
  roomPasswordForm: document.querySelector("#roomPasswordForm"),
  roomPasswordMessage: document.querySelector("#roomPasswordMessage"),
  joinRoomPasswordInput: document.querySelector("#joinRoomPasswordInput"),
  submitRoomPasswordButton: document.querySelector("#submitRoomPasswordButton"),
};

let state = null;
let currentToken = "";
let pollTimer = null;
let roomEvents = null;
let roomEventsKey = "";
let queuedRoomUpdateSeq = 0;
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
let battlefieldGroupDrag = null;
let battlefieldSelectionDrag = null;
let pendingTokenPosition = null;
let tokenSearchResults = [];
let recapSessionKey = "";
let recapEvents = [];
let recapIndex = 0;
let draggedPreviewCardId = "";
let stateSnapshot = "";
let observedTurnKey = "";
let pendingTurnDrawPrompt = "";
let pendingTurnUntapPrompt = "";
let drawFlashTimer = null;
let openLifeMenuKey = "";
let boardReferenceSeat = null;
let dismissedCombatSnapshotId = "";
let dismissedDiceNoticeId = "";
let lastDiceResult = "No rolls yet";
let pendingCountPrompt = null;
let keybindCaptureAction = "";
const selectedBattlefieldCards = new Set();
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
const keybindStorageKey = "mage-table-keybinds";
const basePlayerCounterOptions = ["Poison", "Energy", "Experience", "Oil", "Charge", "Rad", "Storm"];
const keybindDefinitions = [
  { id: "selectAll", label: "Select all battlefield cards", defaultBinding: "a" },
  { id: "passPriority", label: "Pass priority", defaultBinding: "p" },
  { id: "takePriority", label: "Take instant priority", defaultBinding: "i" },
  { id: "combatPass", label: "Pass combat priority", defaultBinding: "c" },
  { id: "endTurn", label: "End turn", defaultBinding: "e" },
  { id: "draw", label: "Draw top card", defaultBinding: "d" },
  { id: "toggleTap", label: "Toggle tap or untap", defaultBinding: "t" },
  { id: "cascade", label: "Cascade selected cards", defaultBinding: "o" },
  { id: "equip", label: "Equip selected equipment", defaultBinding: "x" },
  { id: "undo", label: "Undo", defaultBinding: "ctrl+z" },
  { id: "redo", label: "Redo", defaultBinding: "ctrl+y" },
];
let keybinds = loadKeybinds();

function roomIdFromUrl() {
  return new URLSearchParams(window.location.search).get("room") || "";
}

function tokenFromUrl() {
  return new URLSearchParams(window.location.search).get("token") || "";
}

function roomPasswordStorageKey(roomId) {
  return `mage-table-room-password:${roomId}`;
}

function roomPasswordFor(roomId = roomIdFromUrl()) {
  return roomId ? sessionStorage.getItem(roomPasswordStorageKey(roomId)) || "" : "";
}

function storeRoomPassword(roomId, password) {
  if (!roomId) return;
  const key = roomPasswordStorageKey(roomId);
  if (password) sessionStorage.setItem(key, password);
  else sessionStorage.removeItem(key);
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
      const error = new Error(data.error || "Request failed");
      error.status = response.status;
      error.code = data.code || "";
      throw error;
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
    closeRoomEvents();
    render();
    return;
  }
  try {
    const password = roomPasswordFor(roomId);
    const nextState = await api(`/api/rooms/${roomId}?token=${encodeURIComponent(currentToken)}&password=${encodeURIComponent(password)}`);
    const nextSnapshot = JSON.stringify(nextState);
    if (quiet && stateSnapshot === nextSnapshot) return;
    state = nextState;
    stateSnapshot = nextSnapshot;
    queuedRoomUpdateSeq = 0;
    connectRoomEvents();
    render();
  } catch (error) {
    if (["PASSWORD_REQUIRED", "INVALID_PASSWORD"].includes(error.code)) {
      showRoomPasswordDialog(error.message);
      return;
    }
    if (!quiet) alert(error.message);
  }
}

async function sendAction(type, payload = {}) {
  if (!state) return;
  state = await api(`/api/rooms/${state.id}/actions`, {
    method: "POST",
    body: JSON.stringify({ token: currentToken, password: roomPasswordFor(state.id), type, ...payload }),
  });
  stateSnapshot = JSON.stringify(state);
  queuedRoomUpdateSeq = 0;
  connectRoomEvents();
  render();
  return state;
}

function startPolling() {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(() => {
    if (state && !localInteractionActive()) refreshState({ quiet: true });
  }, 30000);
}

function connectRoomEvents() {
  if (!state || typeof EventSource === "undefined") return;
  const key = `${state.id}:${currentToken}:${roomPasswordFor(state.id)}`;
  if (roomEvents && roomEventsKey === key) return;
  closeRoomEvents();
  roomEventsKey = key;
  const password = roomPasswordFor(state.id);
  roomEvents = new EventSource(`/api/rooms/${state.id}/stream?token=${encodeURIComponent(currentToken)}&password=${encodeURIComponent(password)}`);
  roomEvents.addEventListener("room-update", (event) => {
    let payload = null;
    try {
      payload = JSON.parse(event.data || "{}");
    } catch {
      return;
    }
    const nextSeq = Number(payload.updateSeq) || 0;
    if (!nextSeq || nextSeq <= (Number(state?.updateSeq) || 0)) return;
    if (localInteractionActive()) {
      queuedRoomUpdateSeq = Math.max(queuedRoomUpdateSeq, nextSeq);
      scheduleQueuedRefresh();
      return;
    }
    refreshState({ quiet: true });
  });
  roomEvents.onerror = () => {
    scheduleQueuedRefresh(1500);
  };
}

function closeRoomEvents() {
  if (!roomEvents) return;
  roomEvents.close();
  roomEvents = null;
  roomEventsKey = "";
}

function scheduleQueuedRefresh(delay = 350) {
  window.setTimeout(() => {
    if (!state || !queuedRoomUpdateSeq || localInteractionActive()) {
      if (state && queuedRoomUpdateSeq) scheduleQueuedRefresh(600);
      return;
    }
    queuedRoomUpdateSeq = 0;
    refreshState({ quiet: true });
  }, delay);
}

function localInteractionActive() {
  return Boolean(
    battlefieldPointerDrag ||
    battlefieldGroupDrag ||
    battlefieldSelectionDrag ||
    document.querySelector("dialog[open]") ||
    document.querySelector("input:focus, textarea:focus, select:focus") ||
    document.querySelector(".life-menu[open]"),
  );
}

function render() {
  if (!state) {
    battlefieldCanvasSize = null;
    battlefieldLayerSize = null;
    recapSessionKey = "";
    stateSnapshot = "";
    observedTurnKey = "";
    pendingTurnDrawPrompt = "";
    pendingTurnUntapPrompt = "";
    selectedBattlefieldCards.clear();
    boardReferenceSeat = null;
    lastDiceResult = "No rolls yet";
    if (els.diceResult) els.diceResult.textContent = lastDiceResult;
    document.body.classList.add("dark-mode");
    els.setupPanel.classList.remove("hidden");
    els.tablePanel.classList.add("hidden");
    els.turnDock.classList.add("hidden");
    els.drawReminder.classList.add("hidden");
    els.untapReminder.classList.add("hidden");
    els.diceButton.classList.add("hidden");
    els.randomFirstPlayerButton.classList.add("hidden");
    els.dicePopover.classList.add("hidden");
    els.diceNotice.classList.add("hidden");
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
  els.diceButton.classList.remove("hidden");
  els.randomFirstPlayerButton.classList.toggle("hidden", !state.currentPlayer.isHost || state.players.length < 2);
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
  renderDiceNotice();
  renderKeybindSettings();
  renderBoardReference();
  if (els.libraryDialog.open) renderLibraryDialog();
  if (els.librarySearchDialog.open) renderLibrarySearchDialog();
  renderMulliganDialog();
  maybeOpenRecapDialog();
  maybePromptTurnStart();
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
  document.body.classList.toggle("dark-mode", state ? state.settings?.darkMode !== false : true);
}

function renderRoomSettings() {
  const settings = state.settings || {};
  els.friendlyMulligansInput.checked = settings.friendlyMulligans !== false;
  els.darkModeInput.checked = settings.darkMode !== false;
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

function maybePromptTurnStart() {
  if (!state) return;
  const turnKey = `${state.id}:${state.activePlayer}:${Number(state.turnNumber) || 1}`;
  if (!observedTurnKey) {
    observedTurnKey = turnKey;
    return;
  }
  if (turnKey === observedTurnKey) return;
  observedTurnKey = turnKey;
  if (!isMyTurn() || !state.currentPlayer.deckLoaded || state.currentPlayer.mulliganPending) {
    clearDrawButtonFlash();
    dismissUntapReminder();
    return;
  }
  const promptKey = `${turnKey}:${state.currentSeat}`;
  if (pendingTurnDrawPrompt !== promptKey) {
    pendingTurnDrawPrompt = promptKey;
    flashDrawButton();
  }
  if (pendingTurnUntapPrompt !== promptKey) {
    pendingTurnUntapPrompt = promptKey;
    els.untapReminder.classList.remove("hidden");
  }
}

function flashDrawButton() {
  els.drawButton.classList.add("draw-button-flash");
  els.drawButton.title = "Draw for turn";
  els.drawReminder.classList.remove("hidden");
  els.drawReminder.classList.add("draw-button-flash");
  if (drawFlashTimer) clearTimeout(drawFlashTimer);
  drawFlashTimer = setTimeout(clearDrawButtonFlash, 20000);
}

function clearDrawButtonFlash() {
  els.drawButton.classList.remove("draw-button-flash");
  els.drawButton.removeAttribute("title");
  els.drawReminder.classList.add("hidden");
  els.drawReminder.classList.remove("draw-button-flash");
  if (drawFlashTimer) clearTimeout(drawFlashTimer);
  drawFlashTimer = null;
}

function dismissUntapReminder() {
  els.untapReminder.classList.add("hidden");
}

function displayCardElement(card, label = "Card", zoomZone = "preview") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card preview-only-card";
  const name = cardDisplayName(card);
  if (card?.imageUrl) {
    button.classList.add("image-card");
    button.innerHTML = `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(name)}" draggable="false"><span>${escapeHtml(name)}</span>`;
  } else {
    button.innerHTML = `<strong>${escapeHtml(name)}</strong><small>${escapeHtml(label)}</small>`;
  }
  if (state && card) appendCardBadges(button, card, state.currentSeat, zoomZone);
  attachCardZoomHandlers(button, zoomZone);
  return button;
}

function cardPreviewElement(card) {
  return displayCardElement(card, "Opening hand", "mulliganPreview");
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
  pruneBattlefieldSelection();
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
  const combatSnapshot = combatSnapshotRibbon();
  if (combatSnapshot) {
    focus.append(combatSnapshot);
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

function combatSnapshotRibbon() {
  const snapshot = state?.combatSnapshot;
  if (!snapshot || !snapshot.cards?.length || dismissedCombatSnapshotId === snapshot.id) return null;
  const ribbon = document.createElement("section");
  ribbon.className = "combat-snapshot-ribbon";
  const label = document.createElement("div");
  label.className = "combat-snapshot-label";
  const totals = snapshot.totals || { creatures: 0, power: 0, toughness: 0 };
  label.innerHTML = `
    <strong>&#8595;</strong>
    <span>${escapeHtml(snapshot.attackerName || "Attacker")} attacking <b>${totals.power}/${totals.toughness}</b></span>
  `;
  const cards = document.createElement("div");
  cards.className = "combat-snapshot-cards";
  snapshot.cards.forEach((card) => cards.append(combatSnapshotCard(card)));
  const dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.className = "combat-snapshot-dismiss";
  dismiss.title = "Dismiss declared attackers";
  dismiss.setAttribute("aria-label", "Dismiss declared attackers");
  dismiss.textContent = "x";
  dismiss.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dismissedCombatSnapshotId = snapshot.id;
    renderPlayers();
    if (els.boardReferenceDialog.open) renderBoardReference();
  });
  ribbon.append(label, cards, dismiss);
  return ribbon;
}

function combatSnapshotCard(card) {
  const item = displayCardElement(card, card.typeLine || "Attacker", "combatSnapshot");
  item.classList.add("combat-snapshot-card");
  if (card.isCreature) {
    const stats = document.createElement("span");
    stats.className = "combat-snapshot-stats";
    stats.textContent = `${card.totalPower}/${card.totalToughness}`;
    item.append(stats);
  }
  const combatDetail = card.isCreature
    ? ` Total ${card.totalPower}/${card.totalToughness}${card.quantity > 1 ? ` from ${card.quantity} creatures.` : "."}`
    : "";
  item.title = `${cardDisplayName(card)}.${combatDetail} Click to enlarge or hold Control to zoom.`;
  const openPreview = (event) => {
    event.preventDefault();
    event.stopPropagation();
    openReadOnlyCardDialog(card, "Declared attacker");
  };
  item.addEventListener("click", openPreview);
  item.addEventListener("contextmenu", openPreview);
  return item;
}

function isCombatSnapshotCard(cardId) {
  const ids = new Set((state?.combatSnapshot?.cards || []).map((card) => card.id));
  return ids.has(cardId);
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
  const menuKey = isPlaytest ? `${state.id}:playtest` : `${state.id}:seat:${player.seat}`;
  const details = document.createElement("details");
  details.className = "life-menu";
  details.open = openLifeMenuKey === menuKey;
  details.addEventListener("toggle", () => {
    openLifeMenuKey = details.open ? menuKey : "";
  });
  const summary = document.createElement("summary");
  summary.className = "life-menu-summary";
  const value = document.createElement("strong");
  value.textContent = String(player.life);
  const label = document.createElement("span");
  label.textContent = "Life";
  summary.append(value, label);
  const life = document.createElement("div");
  life.className = "life-control";
  if (isPlaytest) life.append(playtestLifeButton(-1), lifeTotal(player.life, entry), playtestLifeButton(1));
  else life.append(lifeButton(player.seat, -1), lifeTotal(player.life, entry), lifeButton(player.seat, 1));
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
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    sendAction("playtestLife", { delta });
  });
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
    reveal.cards.forEach((card) => cards.append(displayCardElement(card, "Revealed", "publicReveal")));
    group.append(title, cards);
    const dismiss = document.createElement("button");
    dismiss.type = "button";
    dismiss.className = "reveal-dismiss-button";
    dismiss.textContent = "Dismiss";
    dismiss.addEventListener("click", () => {
      dismissedReveals.add(revealKey(reveal));
      renderPlayers();
    });
    group.append(dismiss);
    strip.append(group);
  });
  return strip;
}

function revealKey(reveal) {
  const revealId = reveal.id || `${reveal.seat}:${(reveal.cards || []).map((card) => card.id).join(",")}`;
  return `${state.id}:${state.currentSeat}:${revealId}`;
}

function isRevealHidden(reveal) {
  const key = revealKey(reveal);
  if (dismissedReveals.has(key)) return true;
  const seenAt = revealSeenAt.get(key);
  return Boolean(seenAt && Date.now() - seenAt > 30_000);
}

function noteRevealSeen(reveal) {
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
  if (boardReferenceSeat !== null && boardReferenceSeat !== "all" && !state.players[Number(boardReferenceSeat)]) {
    boardReferenceSeat = null;
  }
  const focusSeat = boardReferenceSeat === null ? focusSeatForBoard() : boardReferenceSeat;
  const shownPlayers = focusSeat === "all"
    ? orderedBoardReferencePlayers()
    : state.players.filter((player) => player.seat === Number(focusSeat));
  const columns = focusSeat === "all" ? Math.max(1, Math.ceil(Math.sqrt(Math.max(1, shownPlayers.length)))) : 1;
  const rows = focusSeat === "all" ? Math.max(1, Math.ceil(Math.max(1, shownPlayers.length) / columns)) : 1;
  const focusPlayer = state.players[focusSeatForBoard()];
  els.boardReferenceSummary.textContent = `Default view follows ${focusPlayer?.name || "the active board"}. Choose any board below.`;
  els.boardReferenceList.innerHTML = "";
  els.boardReferenceList.style.setProperty("--reference-columns", String(columns));
  els.boardReferenceList.style.setProperty("--reference-rows", String(rows));
  els.boardReferenceList.append(boardReferenceTabs(boardReferenceSeat));
  shownPlayers.forEach((player) => els.boardReferenceList.append(playerBoard(player, "reference")));
}

function orderedBoardReferencePlayers() {
  const focusSeat = focusSeatForBoard();
  return [
    ...state.players.filter((player) => player.seat === focusSeat),
    ...state.players.filter((player) => player.seat !== focusSeat),
  ];
}

function boardReferenceTabs(activeChoice) {
  const tabs = document.createElement("nav");
  tabs.className = "board-reference-tabs";
  tabs.setAttribute("aria-label", "Board selector");
  const follow = boardReferenceTab("Follow", activeChoice === null, () => {
    boardReferenceSeat = null;
    renderBoardReference();
  });
  const all = boardReferenceTab("All", activeChoice === "all", () => {
    boardReferenceSeat = "all";
    renderBoardReference();
  });
  tabs.append(follow, all);
  state.players.forEach((player) => {
    tabs.append(boardReferenceTab(player.name || `Player ${player.seat + 1}`, Number(activeChoice) === player.seat, () => {
      boardReferenceSeat = player.seat;
      renderBoardReference();
    }));
  });
  return tabs;
}

function boardReferenceTab(label, active, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `board-reference-tab${active ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", handler);
  return button;
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
  zone.innerHTML = `<div class="library-count-header"><span>${label}</span><strong>${count}</strong></div>`;
  const player = state?.players?.[seat];
  const revealCards = label === "Library" && player?.libraryPreview?.mode === "reveal"
    ? player.libraryPreview.cards || []
    : [];
  if (revealCards.length) {
    zone.classList.add("revealed-library-pile");
    if (seat !== state.currentSeat) zone.classList.add("other-revealed-library-pile");
    const revealed = document.createElement("div");
    revealed.className = "library-reveal-cards";
    revealCards.slice(0, 2).forEach((card, index) => revealed.append(revealedLibraryCardElement(card, seat, index)));
    if (revealCards.length > 2) {
      const more = document.createElement("span");
      more.className = "library-reveal-more";
      more.textContent = `+${revealCards.length - 2}`;
      revealed.append(more);
    }
    zone.append(revealed);
  }
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

function revealedLibraryCardElement(card, seat, index = 0) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.cardId = card.id;
  button.dataset.zone = "library";
  button.dataset.seat = String(seat);
  button.className = "card revealed-library-card";
  if (card.imageUrl) {
    button.classList.add("image-card");
    button.innerHTML = `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" draggable="false"><span>${escapeHtml(card.name)}</span>`;
  } else {
    button.innerHTML = `<strong>${escapeHtml(card.name)}</strong><small>Revealed</small>`;
  }
  button.classList.add("revealed-library-card");
  appendCardBadges(button, card, seat, "library");
  attachCardZoomHandlers(button, "library", index);
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  button.addEventListener("contextmenu", (event) => {
    if (seat !== state.currentSeat) return;
    event.preventDefault();
    event.stopPropagation();
    openPreviewActionDialog(card, "reveal");
  });
  if (seat === state.currentSeat) {
    button.draggable = true;
    button.classList.add("draggable-revealed-card");
    button.title = "Drag revealed card to hand or another zone.";
    button.addEventListener("dragstart", (event) => {
      event.stopPropagation();
      draggedPreviewCardId = card.id;
      draggedCard = {
        cardId: card.id,
        cardName: card.name,
        isCommander: card.isCommander,
        owner: card.owner,
        tapped: false,
        seat: state.currentSeat,
        fromZone: "library",
        width: button.offsetWidth,
        height: button.offsetHeight,
      };
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("application/json", JSON.stringify(draggedCard));
      event.dataTransfer.setData("text/plain", card.id);
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", (event) => {
      event.stopPropagation();
      draggedPreviewCardId = "";
      draggedCard = null;
      button.classList.remove("dragging");
      document.querySelectorAll(".drop-active").forEach((node) => node.classList.remove("drop-active"));
    });
    button.addEventListener("mousedown", (event) => event.stopPropagation());
  }
  return button;
}

function publicZone(player, zoneName, label, className, role = "") {
  const zone = document.createElement("section");
  zone.className = className;
  if (zoneName === "battlefield") zone.setAttribute("aria-label", label);
  else zone.innerHTML = `<span>${label}</span>`;
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
    zone.addEventListener("pointerdown", (event) => startBattlefieldSelection(event, zone));
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
  if (zoneName === "battlefield" && role !== "reference" && player.seat === state.currentSeat) renderBattlefieldSelectionSummary(zone);
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
  const handFrame = els.handZone.closest(".private-zone");
  if (handFrame) makeDropZone(handFrame, state.currentSeat, "hand");
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

function setDiceResult(message) {
  lastDiceResult = message || "No rolls yet";
  if (els.diceResult) els.diceResult.textContent = lastDiceResult;
}

function diceNoticeText(notice) {
  if (!notice) return "";
  if (notice.mode === "firstPlayer") return `${notice.selectedName || "Player"} goes first`;
  if (notice.mode === "random") return `0-${notice.max}: ${notice.result}`;
  const rolls = Array.isArray(notice.rolls) ? notice.rolls.join(", ") : "";
  const total = Number(notice.count) > 1 ? ` = ${notice.total}` : "";
  return `${notice.count}d${notice.sides}: ${rolls}${total}`;
}

function renderDiceNotice() {
  const notice = state?.diceNotice;
  if (!notice || notice.id === dismissedDiceNoticeId) {
    els.diceNotice.classList.add("hidden");
    return;
  }
  els.diceNoticeTitle.textContent = notice.mode === "firstPlayer"
    ? "Random first player"
    : `${notice.playerName || "Player"} rolled`;
  els.diceNoticeResult.textContent = diceNoticeText(notice);
  els.diceNotice.classList.remove("hidden");
}

async function rollDice(sides) {
  if (!state) return;
  const count = Math.max(1, Math.min(20, Math.round(Number(els.diceCountInput.value) || 1)));
  els.diceCountInput.value = String(count);
  const previous = lastDiceResult;
  setDiceResult(`Rolling ${count}d${sides}...`);
  try {
    const nextState = await sendAction("diceRoll", { mode: "dice", sides, count });
    setDiceResult(nextState?.log?.[0]?.message || `${count}d${sides} rolled.`);
  } catch (error) {
    setDiceResult(previous);
    alert(error.message);
  }
}

async function rollRandomNumber() {
  if (!state) return;
  const max = Math.max(0, Math.min(1000000, Math.round(Number(els.randomMaxInput.value) || 0)));
  els.randomMaxInput.value = String(max);
  const previous = lastDiceResult;
  setDiceResult(`Rolling 0-${max}...`);
  try {
    const nextState = await sendAction("diceRoll", { mode: "random", max });
    setDiceResult(nextState?.log?.[0]?.message || `Random 0-${max} rolled.`);
  } catch (error) {
    setDiceResult(previous);
    alert(error.message);
  }
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
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    sendAction("life", { seat, delta });
  });
  return button;
}

function lifeTotal(value, entry) {
  const wrap = document.createElement("div");
  wrap.className = "life-total-wrap";
  const label = document.createElement("span");
  label.textContent = "Life Total";
  const input = document.createElement("input");
  input.className = "life-total-input";
  input.type = "number";
  input.value = String(value);
  input.disabled = entry.kind !== "playtest" && !canChangeLife(entry.player.seat);
  const submit = () => {
    const nextValue = Number(input.value);
    if (!Number.isFinite(nextValue)) {
      input.value = String(value);
      return;
    }
    if (entry.kind === "playtest") sendAction("playtestLife", { value: nextValue });
    else sendAction("life", { seat: entry.player.seat, value: nextValue });
  };
  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
      input.blur();
    }
  });
  input.addEventListener("blur", submit);
  wrap.append(label, input);
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
  const options = playerCounterOptionsFor(player.seat);
  const savedValue = playerCounterSelections.get(selectionKey);
  const selectedValue = options.includes(savedValue) ? savedValue : options[0];
  options.forEach((name) => {
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

function playerCounterOptionsFor(targetSeat) {
  const commanderOptions = (state?.players || [])
    .filter((player) => player.seat !== targetSeat)
    .map((player) => {
      const source = player.commander || `${player.name} commander`;
      return `Commander Damage: ${source}`;
    });
  if (!commanderOptions.length) commanderOptions.push("Commander Damage");
  return [...commanderOptions, ...basePlayerCounterOptions];
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
  button.dataset.cardId = card.id;
  button.dataset.zone = zone;
  button.dataset.seat = String(seat);
  const isTapped = zone === "battlefield" && card.tapped;
  button.className = `card${isTapped ? " tapped" : ""}`;
  if (card.isToken) button.classList.add("token-card");
  if (zone === "battlefield") {
    button.classList.add("free-card");
    if (isCombatSnapshotCard(card.id)) button.classList.add("declared-attacker-card");
    if (seat === state.currentSeat && selectedBattlefieldCards.has(card.id)) button.classList.add("selected-card");
    if (card.attachedTo) {
      button.classList.add("equipped-card");
      button.style.setProperty("--equip-index", String(Number(card.attachmentIndex) || 1));
    }
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
  const displayName = cardDisplayName(card);
  if (card.imageUrl) {
    button.classList.add("image-card");
    button.innerHTML = `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(displayName)}" draggable="false"><span>${escapeHtml(displayName)}</span>`;
  } else {
    button.innerHTML = `<strong>${escapeHtml(displayName)}</strong><small>${labelForZone(zone)}</small>`;
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
        if (selectedBattlefieldCards.size > 1 && selectedBattlefieldCards.has(card.id)) {
          tapSelectedBattlefieldCards("toggle");
          return;
        }
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
  const quantity = creatureQuantity(card);
  if (!card.isToken && !counterText && quantity <= 1) return;
  const wrap = document.createElement("div");
  wrap.className = "card-badges";
  if (card.isToken) {
    const span = document.createElement("span");
    span.className = "token-badge";
    span.textContent = "Token";
    wrap.append(span);
  }
  if (quantity > 1) {
    const span = document.createElement("span");
    span.className = "quantity-badge";
    span.textContent = `x${quantity}`;
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
  mainControls.append(minus, value, plus);

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
  column.append(counterStepButton("-", minusHandler), title, counterStepButton("+", plusHandler));
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
    if (battlefieldPointerDrag?.button === button || battlefieldGroupDrag?.button === button) return;
    if (hoveredZoomCard === button) hoveredZoomCard = null;
    hideCardZoom(button);
    if (zone === "battlefield") button.style.zIndex = String(index + 1);
    else button.style.removeProperty("z-index");
  });
}

function attachCardPointerDrag(button, card, seat, zone, index = 0) {
  button.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !canActNow() || seat !== state.currentSeat) return;
    if (zone === "battlefield" && selectedBattlefieldCards.size > 1 && selectedBattlefieldCards.has(card.id)) {
      startBattlefieldGroupDrag(event, button, card, seat, index);
      return;
    }
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
    if (battlefieldGroupDrag?.button === button) {
      handleBattlefieldGroupMove(event);
      return;
    }
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
    if (battlefieldGroupDrag?.button === button) {
      await finishBattlefieldGroupDrag(event, index);
      return;
    }
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
    if (battlefieldGroupDrag?.button === button) {
      cancelBattlefieldGroupDrag(event);
      return;
    }
    if (!battlefieldPointerDrag || battlefieldPointerDrag.button !== button) return;
    const drag = battlefieldPointerDrag;
    battlefieldPointerDrag = null;
    if (button.hasPointerCapture?.(event.pointerId)) button.releasePointerCapture(event.pointerId);
    cleanupBattlefieldPointerDrag(drag);
    clearPointerDropHighlights();
  });
}

function startBattlefieldSelection(event, zone) {
  if (event.button !== 0 || event.target.closest(".card, .battlefield-selection-summary, button, input, select, textarea") || !canActNow()) return;
  const layer = zone.querySelector(".battlefield-card-layer");
  if (!layer) return;
  event.preventDefault();
  const rectNode = document.createElement("div");
  rectNode.className = "battlefield-selection-rect";
  layer.append(rectNode);
  battlefieldSelectionDrag = {
    zone,
    layer,
    rectNode,
    startClientX: event.clientX,
    startClientY: event.clientY,
  };
  zone.setPointerCapture?.(event.pointerId);

  const handleMove = (moveEvent) => {
    if (!battlefieldSelectionDrag || battlefieldSelectionDrag.zone !== zone) return;
    updateBattlefieldSelectionRect(moveEvent);
  };
  const finish = (upEvent) => {
    if (battlefieldSelectionDrag?.zone === zone) finishBattlefieldSelection(upEvent);
    zone.removeEventListener("pointermove", handleMove);
    zone.removeEventListener("pointerup", finish);
    zone.removeEventListener("pointercancel", cancel);
    if (zone.hasPointerCapture?.(upEvent.pointerId)) zone.releasePointerCapture(upEvent.pointerId);
  };
  const cancel = (cancelEvent) => {
    cancelBattlefieldSelection(cancelEvent);
    zone.removeEventListener("pointermove", handleMove);
    zone.removeEventListener("pointerup", finish);
    zone.removeEventListener("pointercancel", cancel);
    if (zone.hasPointerCapture?.(cancelEvent.pointerId)) zone.releasePointerCapture(cancelEvent.pointerId);
  };

  zone.addEventListener("pointermove", handleMove);
  zone.addEventListener("pointerup", finish);
  zone.addEventListener("pointercancel", cancel);
}

function updateBattlefieldSelectionRect(event) {
  const drag = battlefieldSelectionDrag;
  if (!drag) return;
  const metrics = battlefieldLayerMetrics(drag.layer);
  const leftClient = Math.min(drag.startClientX, event.clientX);
  const topClient = Math.min(drag.startClientY, event.clientY);
  const rightClient = Math.max(drag.startClientX, event.clientX);
  const bottomClient = Math.max(drag.startClientY, event.clientY);
  const left = Math.max(0, Math.min(metrics.width, (leftClient - metrics.left) * metrics.scaleX));
  const top = Math.max(0, Math.min(metrics.height, (topClient - metrics.top) * metrics.scaleY));
  const right = Math.max(0, Math.min(metrics.width, (rightClient - metrics.left) * metrics.scaleX));
  const bottom = Math.max(0, Math.min(metrics.height, (bottomClient - metrics.top) * metrics.scaleY));
  drag.rectNode.style.left = `${left}px`;
  drag.rectNode.style.top = `${top}px`;
  drag.rectNode.style.width = `${Math.max(1, right - left)}px`;
  drag.rectNode.style.height = `${Math.max(1, bottom - top)}px`;
}

function finishBattlefieldSelection(event) {
  const drag = battlefieldSelectionDrag;
  if (!drag) return;
  const distance = Math.hypot(event.clientX - drag.startClientX, event.clientY - drag.startClientY);
  const selectionRect = {
    left: Math.min(drag.startClientX, event.clientX),
    right: Math.max(drag.startClientX, event.clientX),
    top: Math.min(drag.startClientY, event.clientY),
    bottom: Math.max(drag.startClientY, event.clientY),
  };
  drag.rectNode.remove();
  battlefieldSelectionDrag = null;
  selectedBattlefieldCards.clear();
  if (distance >= 4) {
    drag.layer.querySelectorAll(`.card[data-zone="battlefield"][data-seat="${state.currentSeat}"]`).forEach((node) => {
      if (rectsOverlap(node.getBoundingClientRect(), selectionRect)) selectedBattlefieldCards.add(node.dataset.cardId);
    });
  }
  renderPlayers();
}

function cancelBattlefieldSelection() {
  battlefieldSelectionDrag?.rectNode?.remove();
  battlefieldSelectionDrag = null;
}

function startBattlefieldGroupDrag(event, button, card, seat, index = 0) {
  const layer = button.closest(".battlefield-card-layer");
  if (!layer) return;
  const layerMetrics = battlefieldLayerMetrics(layer);
  const battlefieldCards = battlefieldCardsById();
  const cards = selectedBattlefieldNodes(layer)
    .map((node) => {
      const cardData = battlefieldCards.get(node.dataset.cardId);
      if (!cardData) return null;
      return {
        cardId: node.dataset.cardId,
        node,
        name: cardData.name,
        isCommander: Boolean(cardData.isCommander),
        owner: cardData.owner,
        tapped: Boolean(cardData.tapped),
        startX: pixelValue(node.style.left, node.offsetLeft),
        startY: pixelValue(node.style.top, node.offsetTop),
        width: node.offsetWidth || node.getBoundingClientRect().width,
        height: node.offsetHeight || node.getBoundingClientRect().height,
        originalZIndex: node.style.zIndex,
      };
    })
    .filter(Boolean);
  if (cards.length <= 1) return;
  battlefieldGroupDrag = {
    cardId: card.id,
    seat,
    fromZone: "battlefield",
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
    ghost: null,
    ghostOffsetX: 28,
    ghostOffsetY: 18,
    cards,
    lastPositions: new Map(),
  };
  button.setPointerCapture(event.pointerId);
  cards.forEach((item, cardIndex) => {
    item.node.classList.add("drag-origin");
    item.node.style.zIndex = String(200 + cardIndex);
  });
}

function selectedBattlefieldNodes(layer) {
  return [...layer.querySelectorAll(`.card.selected-card[data-zone="battlefield"][data-seat="${state.currentSeat}"]`)];
}

function battlefieldCardsById() {
  const player = state?.players?.[state.currentSeat];
  return new Map((player?.battlefield || []).map((card) => [card.id, card]));
}

function handleBattlefieldGroupMove(event) {
  const drag = battlefieldGroupDrag;
  if (!drag) return;
  const distance = Math.hypot(event.clientX - drag.startClientX, event.clientY - drag.startClientY);
  if (distance < 3 && !drag.moved) return;
  drag.moved = true;
  event.preventDefault();
  clearPointerDropHighlights();
  const source = groupDragSource(drag);
  const battlefieldTarget = battlefieldTargetFromPointer(event, drag);
  const target = battlefieldTarget || cardDropTargetFromPoint(event, source) || dropZoneFromPoint(event, drag.ghost || drag.button, source);
  if (battlefieldTarget) {
    drag.ghost?.remove();
    drag.ghost = null;
    moveBattlefieldGroupWithinLayer(event, drag);
  } else {
    moveBattlefieldGroupGhost(event, drag);
  }
  if (target && canDropGroupCards(drag, target.seat, target.zone)) {
    target.element.classList.add("drop-active");
  }
}

async function finishBattlefieldGroupDrag(event, index = 0) {
  const drag = battlefieldGroupDrag;
  if (!drag) return;
  const source = groupDragSource(drag);
  const battlefieldTarget = battlefieldTargetFromPointer(event, drag);
  const dropTarget = battlefieldTarget || cardDropTargetFromPoint(event, source) || dropZoneFromPoint(event, drag.ghost || drag.button, source);
  battlefieldGroupDrag = null;
  if (drag.button.hasPointerCapture?.(event.pointerId)) drag.button.releasePointerCapture(event.pointerId);
  cleanupBattlefieldGroupDrag(drag, index);
  clearPointerDropHighlights();
  if (!drag.moved) return;
  event.preventDefault();
  event.stopPropagation();
  drag.cards.forEach((item) => {
    item.node.dataset.suppressClick = "1";
    setTimeout(() => delete item.node.dataset.suppressClick, 0);
  });
  if (dropTarget && canDropGroupCards(drag, dropTarget.seat, dropTarget.zone)) {
    if (dropTarget.zone === "battlefield") {
      moveBattlefieldGroupWithinLayer(event, drag);
      await moveSelectedBattlefieldCards("battlefield", Object.fromEntries(drag.lastPositions));
    } else {
      await moveSelectedBattlefieldCards(dropTarget.zone);
      selectedBattlefieldCards.clear();
    }
    return;
  }
  if (drag.lastPositions.size) {
    await moveSelectedBattlefieldCards("battlefield", Object.fromEntries(drag.lastPositions));
  }
}

function cancelBattlefieldGroupDrag(event) {
  const drag = battlefieldGroupDrag;
  if (!drag) return;
  battlefieldGroupDrag = null;
  if (drag.button.hasPointerCapture?.(event.pointerId)) drag.button.releasePointerCapture(event.pointerId);
  cleanupBattlefieldGroupDrag(drag, drag.index);
  clearPointerDropHighlights();
}

function moveBattlefieldGroupWithinLayer(event, drag) {
  const metrics = drag.layerMetrics || battlefieldLayerMetrics(drag.layer);
  const deltaX = (event.clientX - drag.startClientX) * metrics.scaleX;
  const deltaY = (event.clientY - drag.startClientY) * metrics.scaleY;
  const bounds = { width: metrics.width, height: metrics.height };
  drag.cards.forEach((item) => {
    const position = clampBattlefieldPixels(
      { x: item.startX + deltaX, y: item.startY + deltaY, unit: "px" },
      item.tapped,
      { width: item.width, height: item.height },
      bounds,
    );
    item.node.style.left = `${position.x}px`;
    item.node.style.top = `${position.y}px`;
    drag.lastPositions.set(item.cardId, position);
  });
}

function moveBattlefieldGroupGhost(event, drag) {
  if (!drag.ghost) {
    const ghost = document.createElement("div");
    ghost.className = "battlefield-group-drag-ghost";
    ghost.textContent = `${drag.cards.length} cards`;
    document.body.append(ghost);
    drag.ghost = ghost;
  }
  drag.ghost.style.left = `${event.clientX - drag.ghostOffsetX}px`;
  drag.ghost.style.top = `${event.clientY - drag.ghostOffsetY}px`;
}

function cleanupBattlefieldGroupDrag(drag, index = 0) {
  drag.cards.forEach((item, cardIndex) => {
    item.node.classList.remove("drag-origin");
    item.node.style.zIndex = item.originalZIndex || String(index + cardIndex + 1);
  });
  drag.ghost?.remove();
  drag.ghost = null;
}

function groupDragSource(drag) {
  const first = drag.cards[0] || {};
  return {
    cardId: first.cardId || drag.cardId,
    cardName: `${drag.cards.length} selected cards`,
    isCommander: false,
    owner: drag.seat,
    tapped: false,
    seat: drag.seat,
    fromZone: "battlefield",
    width: first.width || currentBattlefieldCardSize().width,
    height: first.height || currentBattlefieldCardSize().height,
    layoutWidth: first.width || currentBattlefieldCardSize().width,
    layoutHeight: first.height || currentBattlefieldCardSize().height,
  };
}

function canDropGroupCards(drag, targetSeat, targetZone) {
  if (targetZone === "commanderZone" && drag.cards.length > 1) return false;
  return canDropCard(groupDragSource(drag), targetSeat, targetZone);
}

function pruneBattlefieldSelection() {
  if (!state || selectedBattlefieldCards.size === 0) return;
  const validIds = new Set((state.players[state.currentSeat]?.battlefield || []).map((card) => card.id));
  [...selectedBattlefieldCards].forEach((cardId) => {
    if (!validIds.has(cardId)) selectedBattlefieldCards.delete(cardId);
  });
}

function renderBattlefieldSelectionSummary(zone) {
  if (!selectedBattlefieldCards.size) return;
  const cards = selectedBattlefieldCardData();
  if (!cards.length) return;
  const stats = selectedBattlefieldStats(cards);
  const summary = document.createElement("div");
  summary.className = "battlefield-selection-summary";
  const count = document.createElement("strong");
  count.textContent = `${cards.length} selected`;
  const power = document.createElement("span");
  power.textContent = `${stats.creatures} creature${stats.creatures === 1 ? "" : "s"} / P/T ${stats.totalPower}/${stats.totalToughness}`;
  const mana = document.createElement("span");
  mana.textContent = `${stats.untappedLands} untapped land${stats.untappedLands === 1 ? "" : "s"} / mana ${stats.untappedLands}`;
  const tap = document.createElement("button");
  tap.type = "button";
  tap.textContent = stats.allTapped ? "Untap" : "Tap";
  tap.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    tapSelectedBattlefieldCards("toggle");
  });
  const clear = document.createElement("button");
  clear.type = "button";
  clear.className = "secondary";
  clear.textContent = "Clear";
  clear.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    selectedBattlefieldCards.clear();
    renderPlayers();
  });
  summary.append(count, power, mana, tap, clear);
  zone.append(summary);
  renderSelectionToolPopover(zone, cards);
}

function renderSelectionToolPopover(zone, cards) {
  const layer = zone.querySelector(".battlefield-card-layer");
  const bounds = selectedBattlefieldBounds(layer);
  if (!bounds) return;
  const tools = document.createElement("div");
  tools.className = "selection-tool-popover";
  tools.style.left = `${Math.max(6, Math.min(bounds.right + 6, (layer?.offsetWidth || bounds.right) - 152))}px`;
  tools.style.top = `${Math.max(6, bounds.top - 34)}px`;
  [
    ["Stack", "▣", () => arrangeSelectedBattlefieldCards("stack")],
    ["Grid of 4", "4", () => arrangeSelectedBattlefieldCards("grid4")],
    ["Vertical line", "│", () => arrangeSelectedBattlefieldCards("vertical")],
    ["Horizontal line", "─", () => arrangeSelectedBattlefieldCards("horizontal")],
    ["Touching grid of 6", "6", () => arrangeSelectedBattlefieldCards("grid6")],
  ].forEach(([title, icon, handler]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.title = title;
    button.setAttribute("aria-label", title);
    button.textContent = icon;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      handler();
    });
    tools.append(button);
  });
  zone.append(tools);
}

function selectedBattlefieldBounds(layer) {
  const nodes = selectedBattlefieldNodes(layer || document);
  if (!nodes.length) return null;
  const layerRect = layer?.getBoundingClientRect();
  const lefts = [];
  const tops = [];
  const rights = [];
  const bottoms = [];
  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    lefts.push(layerRect ? rect.left - layerRect.left : rect.left);
    tops.push(layerRect ? rect.top - layerRect.top : rect.top);
    rights.push(layerRect ? rect.right - layerRect.left : rect.right);
    bottoms.push(layerRect ? rect.bottom - layerRect.top : rect.bottom);
  });
  return {
    left: Math.min(...lefts),
    top: Math.min(...tops),
    right: Math.max(...rights),
    bottom: Math.max(...bottoms),
  };
}

function selectedBattlefieldCardData() {
  const cards = state?.players?.[state.currentSeat]?.battlefield || [];
  return cards.filter((card) => selectedBattlefieldCards.has(card.id));
}

function selectedBattlefieldStats(cards = selectedBattlefieldCardData()) {
  let creatures = 0;
  let totalPower = 0;
  let totalToughness = 0;
  let untappedLands = 0;
  let allTapped = cards.length > 0;
  cards.forEach((card) => {
    if (!card.tapped) allTapped = false;
    if (isCreatureCard(card)) {
      const quantity = creatureQuantity(card);
      creatures += quantity;
      totalPower += cardPowerValue(card) * quantity;
      totalToughness += cardToughnessValue(card) * quantity;
    }
    if (isLandCard(card) && !card.tapped) untappedLands += 1;
  });
  return { creatures, totalPower, totalToughness, untappedLands, allTapped };
}

function isCreatureCard(card) {
  return /\bCreature\b/i.test(card?.typeLine || "");
}

function isLandCard(card) {
  return Boolean(card?.isLand) || /\bLand\b/i.test(card?.typeLine || "");
}

function cardPowerValue(card) {
  const printed = Number.parseFloat(String(card?.power || "").replace(/[^\d.-]/g, ""));
  const base = Number.isFinite(printed) ? printed : 0;
  return base + counterTotals(card?.counters).power;
}

function cardToughnessValue(card) {
  const printed = Number.parseFloat(String(card?.toughness || "").replace(/[^\d.-]/g, ""));
  const base = Number.isFinite(printed) ? printed : 0;
  return base + counterTotals(card?.counters).toughness;
}

function creatureQuantity(card) {
  return Math.max(1, Number(card?.counters?.creatureQuantity) || 1);
}

function selectAllBattlefieldCards() {
  if (!state) return;
  selectedBattlefieldCards.clear();
  (state.players[state.currentSeat]?.battlefield || []).forEach((card) => selectedBattlefieldCards.add(card.id));
  renderPlayers();
}

async function tapSelectedBattlefieldCards(mode = "toggle") {
  const cardIds = selectedBattlefieldCardData().map((card) => card.id);
  if (!cardIds.length || !canActNow()) return;
  await sendAction("tapCards", { seat: state.currentSeat, cardIds, mode });
}

async function sendCombatPass() {
  await sendAction("combatPass", {
    cardIds: selectedBattlefieldCardData().map((card) => card.id),
  });
}

async function moveSelectedBattlefieldCards(toZone, positions = {}) {
  const cards = selectedBattlefieldCardData().map((card) => ({
    cardId: card.id,
    position: positions[card.id] || null,
  }));
  if (!cards.length || !canActNow()) return;
  await sendAction("moveCards", {
    seat: state.currentSeat,
    fromZone: "battlefield",
    toSeat: state.currentSeat,
    toZone,
    cards,
  });
}

async function arrangeSelectedBattlefieldCards(layout = "stack") {
  const cards = selectedBattlefieldCardData();
  if (!cards.length || !canActNow()) return;
  const arranged = arrangedCardEntries(cards, layout);
  if (!arranged.length) return;
  await sendAction("arrangeCards", { cards: arranged });
}

async function equipSelectedBattlefieldCards() {
  const cards = selectedBattlefieldCardData();
  if (cards.length < 2 || !canActNow()) return;
  const creature = cards.find((card) => isCreatureCard(card));
  if (!creature) return;
  const equipment = cards.filter((card) => card.id !== creature.id && isEquipmentCard(card));
  if (!equipment.length) return;
  const ordered = [creature, ...equipment];
  const arranged = arrangedCardEntries(ordered, "equipment").map((entry, index) => {
    if (entry.cardId === creature.id) return { ...entry, clearAttachment: true };
    return {
      ...entry,
      attachedTo: creature.id,
      attachmentIndex: index,
    };
  });
  await sendAction("arrangeCards", { cards: arranged });
}

function arrangedCardEntries(cards, layout = "stack") {
  const layer = document.querySelector(".active-board-shell .battlefield-card-layer");
  const layerSize = battlefieldLayerPixels() || {
    width: layer?.offsetWidth || 720,
    height: layer?.offsetHeight || 460,
  };
  const cardSize = currentBattlefieldCardSize();
  const anchor = selectionAnchor(cards);
  const entries = [];
  const spacingX = cardSize.width + 6;
  const spacingY = cardSize.height + 6;
  cards.forEach((card, index) => {
    let x = anchor.x;
    let y = anchor.y;
    if (layout === "grid4") {
      x += (index % 2) * spacingX;
      y += Math.floor(index / 2) * spacingY;
    } else if (layout === "grid6") {
      x += (index % 3) * cardSize.width;
      y += Math.floor(index / 3) * cardSize.height;
    } else if (layout === "vertical") {
      y += index * spacingY;
    } else if (layout === "horizontal") {
      x += index * spacingX;
    } else {
      x += index * 18;
      y += index * 14;
    }
    const position = clampBattlefieldPixels(
      { x, y, unit: "px" },
      Boolean(card.tapped),
      cardSize,
      layerSize,
    );
    entries.push({ cardId: card.id, position, clearAttachment: layout !== "equipment" });
  });
  return entries;
}

function selectionAnchor(cards) {
  const xs = cards.map((card) => Number(card.position?.x)).filter(Number.isFinite);
  const ys = cards.map((card) => Number(card.position?.y)).filter(Number.isFinite);
  return {
    x: xs.length ? Math.min(...xs) : 12,
    y: ys.length ? Math.min(...ys) : 12,
  };
}

function isEquipmentCard(card) {
  return /\bEquipment\b/i.test(card?.typeLine || "");
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
  if (element.dataset.dropBound === "1") return;
  element.dataset.dropBound = "1";
  element.addEventListener("dragover", (event) => {
    const targetSeat = Number(element.dataset.dropSeat);
    const targetZone = element.dataset.dropZone;
    if (!draggedCard || !canDropCard(draggedCard, targetSeat, targetZone)) return;
    event.preventDefault();
    element.classList.add("drop-active");
  });
  element.addEventListener("dragleave", () => {
    element.classList.remove("drop-active");
  });
  element.addEventListener("drop", async (event) => {
    const targetSeat = Number(element.dataset.dropSeat);
    const targetZone = element.dataset.dropZone;
    if (!draggedCard || !canDropCard(draggedCard, targetSeat, targetZone)) return;
    event.preventDefault();
    event.stopPropagation();
    element.classList.remove("drop-active");
    const source = draggedCard;
    const position = battlefieldPositionFromEvent(event, element, targetZone, source);
    draggedCard = null;
    draggedPreviewCardId = "";
    await dropCard(source, targetSeat, targetZone, position);
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
    height: Math.max(1, battlefieldCanvasSize.height - 12),
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
    layer.style.top = "6px";
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
  openCountDialog({
    title: libraryCountTitle(mode),
    summary: message,
    value: 1,
    max: 20,
    onSubmit: (count) => sendAction("libraryAction", { mode, count }),
  });
}

function libraryCountTitle(mode) {
  const labels = {
    draw: "Draw Cards",
    scry: "Scry",
    surveil: "Surveil",
    mill: "Mill Cards",
    reveal: "Reveal Cards",
  };
  return labels[mode] || "Choose Count";
}

function openCountDialog({ title, summary, value = 1, max = 20, onSubmit }) {
  pendingCountPrompt = { onSubmit };
  els.countDialogTitle.textContent = title;
  els.countDialogSummary.textContent = summary;
  els.countDialogInput.max = String(max);
  els.countDialogInput.value = String(value);
  els.countDialog.showModal();
  setTimeout(() => {
    els.countDialogInput.focus();
    els.countDialogInput.select();
  }, 0);
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
  els.dialogTitle.textContent = cardDisplayName(card);
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
    actions.push(["Reveal to Playgroup", () => sendAction("revealHandCard", { cardId: card.id })]);
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
      if (card.isToken && isCreatureCard(card)) {
        actions.push(["Quantity +", () => adjustCounter(card, "creatureQuantity", 1)]);
        actions.push(["Quantity -", () => adjustCounter(card, "creatureQuantity", -1)]);
      }
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

  if (Array.isArray(card.faces) && card.faces.length > 1) {
    const nextFace = card.faces[(Number(card.faceIndex) + 1) % card.faces.length];
    actions.unshift([
      `Flip to ${nextFace?.name || "other face"}`,
      () => sendAction("flipCard", { zone, cardId: card.id }),
    ]);
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

function openReadOnlyCardDialog(card, subtitle = "Card") {
  if (els.zoneDialog.open) els.zoneDialog.close();
  els.dialogTitle.textContent = cardDisplayName(card);
  els.dialogActions.innerHTML = "";

  const preview = displayCardElement(card, subtitle, "dialogPreview");
  preview.classList.add("dialog-preview-card");
  preview.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  const note = document.createElement("p");
  note.className = "dialog-note";
  note.textContent = subtitle;

  els.dialogActions.append(preview, note);
  els.cardDialog.showModal();
}

function moveCard(seat, fromZone, toZone, cardId, toSeat = seat, position = null) {
  return sendAction("moveCard", { seat, fromZone, toZone, cardId, toSeat, position });
}

function labelForZone(zone) {
  return zone.charAt(0).toUpperCase() + zone.slice(1);
}

function cardDisplayName(card) {
  return String(card?.displayName || card?.name || "Card");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
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

function showRoomPasswordDialog(message = "Enter the password to join this room.") {
  closeRoomEvents();
  els.roomPasswordMessage.textContent = message;
  els.joinRoomPasswordInput.value = "";
  if (!els.roomPasswordDialog.open) els.roomPasswordDialog.showModal();
  requestAnimationFrame(() => els.joinRoomPasswordInput.focus());
}

els.roomForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = els.roomForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    const room = await api("/api/rooms", {
      method: "POST",
      body: JSON.stringify({
        name: els.roomNameInput.value.trim() || "Mage Table",
        password: els.roomPasswordInput.value,
        playerCount: els.singlePlayerInput.checked ? 1 : Number(els.playerCountInput.value),
      }),
    });
    storeRoomPassword(room.id, els.roomPasswordInput.value);
    history.replaceState(null, "", room.selfUrl);
    forceInviteDialog = true;
    await refreshState();
  } catch (error) {
    alert(`Could not create the room: ${error.message}`);
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

els.newRoomButton.addEventListener("click", () => {
  state = null;
  closeRoomEvents();
  els.dicePopover.classList.add("hidden");
  history.replaceState(null, "", "/");
  render();
});

els.singlePlayerInput.addEventListener("change", () => {
  els.playerCountInput.disabled = els.singlePlayerInput.checked;
  els.playerCountLabel.classList.toggle("disabled-field", els.singlePlayerInput.checked);
});

els.roomPasswordForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    els.roomPasswordDialog.close();
    return;
  }
  const roomId = roomIdFromUrl();
  storeRoomPassword(roomId, els.joinRoomPasswordInput.value);
  els.submitRoomPasswordButton.disabled = true;
  els.roomPasswordDialog.close();
  try {
    await refreshState();
  } finally {
    els.submitRoomPasswordButton.disabled = false;
  }
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
els.combatPassButton.addEventListener("click", () => sendCombatPass());
els.passPriorityButton.addEventListener("click", () => sendAction("passPriority"));

els.diceButton.addEventListener("click", () => {
  els.dicePopover.classList.toggle("hidden");
});

els.randomFirstPlayerButton.addEventListener("click", async () => {
  els.randomFirstPlayerButton.disabled = true;
  try {
    await sendAction("randomFirstPlayer");
  } catch (error) {
    alert(error.message);
  } finally {
    els.randomFirstPlayerButton.disabled = false;
  }
});

els.closeDiceButton.addEventListener("click", () => {
  els.dicePopover.classList.add("hidden");
});

document.querySelectorAll("[data-die]").forEach((button) => {
  button.addEventListener("click", () => rollDice(Number(button.dataset.die) || 20));
});

els.randomRollButton.addEventListener("click", () => rollRandomNumber());

els.dismissDiceNoticeButton.addEventListener("click", () => {
  dismissedDiceNoticeId = state?.diceNotice?.id || "";
  renderDiceNotice();
});

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

els.drawButton.addEventListener("click", () => {
  clearDrawButtonFlash();
  sendAction("draw");
});

els.drawReminder.addEventListener("click", () => {
  if (els.drawButton.disabled) return;
  clearDrawButtonFlash();
  sendAction("draw");
});

els.untapAllButton.addEventListener("click", async () => {
  dismissUntapReminder();
  await sendAction("untapAll");
});

els.dismissUntapButton.addEventListener("click", dismissUntapReminder);

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

els.resetKeybindsButton.addEventListener("click", () => {
  keybinds = defaultKeybinds();
  keybindCaptureAction = "";
  saveKeybinds();
  renderKeybindSettings();
});

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
  boardReferenceSeat = null;
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

els.countDialogForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitterValue = event.submitter?.value || "";
  if (submitterValue === "cancel") {
    pendingCountPrompt = null;
    els.countDialog.close();
    return;
  }
  const count = Math.max(1, Math.min(Number(els.countDialogInput.max) || 20, Math.round(Number(els.countDialogInput.value) || 1)));
  const handler = pendingCountPrompt?.onSubmit;
  pendingCountPrompt = null;
  els.countDialog.close();
  if (handler) await handler(count);
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

function shortcutTargetIsTextInput(target) {
  return Boolean(target?.closest?.("input, textarea, select, [contenteditable='true']"));
}

function defaultKeybinds() {
  return Object.fromEntries(keybindDefinitions.map((definition) => [definition.id, definition.defaultBinding]));
}

function loadKeybinds() {
  const defaults = defaultKeybinds();
  try {
    const saved = JSON.parse(localStorage.getItem(keybindStorageKey) || "{}");
    keybindDefinitions.forEach((definition) => {
      if (typeof saved[definition.id] === "string" && saved[definition.id]) defaults[definition.id] = saved[definition.id];
    });
  } catch {
    return defaults;
  }
  return defaults;
}

function saveKeybinds() {
  localStorage.setItem(keybindStorageKey, JSON.stringify(keybinds));
}

function shortcutFromEvent(event) {
  let key = String(event.key || "").toLowerCase();
  if (["control", "shift", "alt", "meta"].includes(key)) return "";
  if (key === " ") key = "space";
  const parts = [];
  if (event.ctrlKey || event.metaKey) parts.push("ctrl");
  if (event.altKey) parts.push("alt");
  if (event.shiftKey) parts.push("shift");
  parts.push(key);
  return parts.join("+");
}

function formatShortcut(binding) {
  if (!binding) return "Unassigned";
  return binding
    .split("+")
    .map((part) => ({ ctrl: "Ctrl", alt: "Alt", shift: "Shift", space: "Space" })[part] || part.toUpperCase())
    .join(" + ");
}

function renderKeybindSettings() {
  if (!els.keybindList) return;
  els.keybindList.innerHTML = "";
  keybindDefinitions.forEach((definition) => {
    const row = document.createElement("div");
    row.className = "keybind-row";
    const label = document.createElement("span");
    label.textContent = definition.label;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `keybind-capture${keybindCaptureAction === definition.id ? " capturing" : ""}`;
    button.textContent = keybindCaptureAction === definition.id ? "Press key" : formatShortcut(keybinds[definition.id]);
    button.addEventListener("click", () => {
      keybindCaptureAction = definition.id;
      renderKeybindSettings();
    });
    row.append(label, button);
    els.keybindList.append(row);
  });
}

function captureKeybind(event) {
  if (!keybindCaptureAction) return false;
  event.preventDefault();
  event.stopPropagation();
  if (event.key === "Escape") {
    keybindCaptureAction = "";
    renderKeybindSettings();
    return true;
  }
  if (event.key === "Tab") return true;
  const binding = shortcutFromEvent(event);
  if (!binding) return true;
  const actionId = keybindCaptureAction;
  const previousBinding = keybinds[actionId];
  const conflict = Object.entries(keybinds).find(([id, value]) => id !== actionId && value === binding)?.[0];
  keybinds[actionId] = binding;
  if (conflict) keybinds[conflict] = previousBinding;
  keybindCaptureAction = "";
  saveKeybinds();
  renderKeybindSettings();
  return true;
}

function dialogBlocksShortcuts() {
  return Boolean(document.querySelector("dialog[open]"));
}

function runShortcutAction(action) {
  Promise.resolve()
    .then(action)
    .catch((error) => alert(error.message));
}

function handleGameShortcut(event) {
  if (!state || event.repeat || shortcutTargetIsTextInput(event.target) || dialogBlocksShortcuts()) return;
  const binding = shortcutFromEvent(event);
  const actionId = Object.entries(keybinds).find(([, value]) => value === binding)?.[0];
  if (!actionId) return;
  event.preventDefault();
  runShortcutAction(() => executeShortcutAction(actionId));
}

function executeShortcutAction(actionId) {
  if (actionId === "undo") return sendAction("undo");
  if (actionId === "redo") return sendAction("redo");
  if (actionId === "selectAll") return selectAllBattlefieldCards();
  if (actionId === "cascade") return arrangeSelectedBattlefieldCards("stack");
  if (actionId === "equip") return equipSelectedBattlefieldCards();
  if (actionId === "passPriority") return !els.passPriorityButton.disabled ? sendAction("passPriority") : null;
  if (actionId === "takePriority") return !els.instantButton.disabled ? sendAction("takePriority") : null;
  if (actionId === "combatPass") return !els.combatPassButton.disabled ? sendCombatPass() : null;
  if (actionId === "endTurn") return !els.endTurnButton.disabled ? sendAction("turn") : null;
  if (actionId === "draw") {
    if (els.drawButton.disabled) return null;
    clearDrawButtonFlash();
    return sendAction("draw");
  }
  if (actionId !== "toggleTap" || !canActNow()) return null;
  if (selectedBattlefieldCards.size) return tapSelectedBattlefieldCards("toggle");
  const hoveredCardId = hoveredZoomCard?.dataset?.zone === "battlefield" && Number(hoveredZoomCard.dataset.seat) === state.currentSeat
    ? hoveredZoomCard.dataset.cardId
    : "";
  return hoveredCardId ? sendAction("tap", { seat: state.currentSeat, zone: "battlefield", cardId: hoveredCardId }) : null;
}

document.addEventListener("keydown", (event) => {
  if (captureKeybind(event)) return;
  if (event.key === "Control") {
    document.body.classList.add("ctrl-zoom");
    if (hoveredZoomCard) showCardZoom(hoveredZoomCard);
  }
  if (event.key === "Shift") {
    document.body.classList.add("hide-counters");
    document.body.classList.add("shift-cascade");
  }
  if (event.key === "Alt") {
    document.body.classList.add("alt-counters");
  }
  handleGameShortcut(event);
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Control") {
    document.body.classList.remove("ctrl-zoom");
    hideCardZoom();
  }
  if (event.key === "Shift") {
    document.body.classList.remove("hide-counters");
    document.body.classList.remove("shift-cascade");
  }
  if (event.key === "Alt") {
    document.body.classList.remove("alt-counters");
  }
});

document.addEventListener("mousemove", (event) => {
  document.body.classList.toggle("ctrl-zoom", event.ctrlKey);
  document.body.classList.toggle("hide-counters", event.shiftKey);
  document.body.classList.toggle("shift-cascade", event.shiftKey);
  document.body.classList.toggle("alt-counters", event.altKey);
  if (event.ctrlKey && hoveredZoomCard) positionCardZoom(hoveredZoomCard);
  if (!event.ctrlKey) hideCardZoom();
});

document.addEventListener("pointerdown", (event) => {
  if (!els.dicePopover.classList.contains("hidden") && !event.target.closest("#dicePopover") && !event.target.closest("#diceButton")) {
    els.dicePopover.classList.add("hidden");
  }
  if (openLifeMenuKey && !event.target.closest(".life-menu")) {
    openLifeMenuKey = "";
    document.querySelectorAll(".life-menu[open]").forEach((menu) => {
      menu.open = false;
    });
  }
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    if (dialog === els.mulliganDialog && state?.currentPlayer?.mulliganPending) return;
    if (dialog === els.recapDialog) {
      closeRecapDialog();
      return;
    }
    if (dialog === els.countDialog) pendingCountPrompt = null;
    dialog.close();
  });
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
renderKeybindSettings();
els.playerCountInput.disabled = els.singlePlayerInput.checked;
refreshState();
startPolling();
