const phases = ["Untap", "Upkeep", "Draw", "Main 1", "Combat", "Main 2", "End"];

const els = {
  setupPanel: document.querySelector("#setupPanel"),
  landingMenu: document.querySelector("#landingMenu"),
  createGameButton: document.querySelector("#createGameButton"),
  createModePanel: document.querySelector("#createModePanel"),
  backFromCreateModeButton: document.querySelector("#backFromCreateModeButton"),
  createLiveGameButton: document.querySelector("#createLiveGameButton"),
  createSoloGameButton: document.querySelector("#createSoloGameButton"),
  joinGameButton: document.querySelector("#joinGameButton"),
  loginButton: document.querySelector("#loginButton"),
  backToLandingButton: document.querySelector("#backToLandingButton"),
  activeLobbiesPanel: document.querySelector("#activeLobbiesPanel"),
  activeLobbiesList: document.querySelector("#activeLobbiesList"),
  backFromLobbiesButton: document.querySelector("#backFromLobbiesButton"),
  createFromLobbiesButton: document.querySelector("#createFromLobbiesButton"),
  accountPanel: document.querySelector("#accountPanel"),
  accountPanelTitle: document.querySelector("#accountPanelTitle"),
  backFromAccountButton: document.querySelector("#backFromAccountButton"),
  accountSignedOut: document.querySelector("#accountSignedOut"),
  accountDashboard: document.querySelector("#accountDashboard"),
  accountUsername: document.querySelector("#accountUsername"),
  accountStatus: document.querySelector("#accountStatus"),
  showLoginButton: document.querySelector("#showLoginButton"),
  showRegisterButton: document.querySelector("#showRegisterButton"),
  loginForm: document.querySelector("#loginForm"),
  loginUsernameInput: document.querySelector("#loginUsernameInput"),
  loginPasswordInput: document.querySelector("#loginPasswordInput"),
  registerForm: document.querySelector("#registerForm"),
  registerFirstNameInput: document.querySelector("#registerFirstNameInput"),
  registerLastNameInput: document.querySelector("#registerLastNameInput"),
  registerEmailInput: document.querySelector("#registerEmailInput"),
  registerUsernameInput: document.querySelector("#registerUsernameInput"),
  registerPasswordInput: document.querySelector("#registerPasswordInput"),
  registerConfirmPasswordInput: document.querySelector("#registerConfirmPasswordInput"),
  logoutButton: document.querySelector("#logoutButton"),
  accountDecksTab: document.querySelector("#accountDecksTab"),
  accountGamesTab: document.querySelector("#accountGamesTab"),
  accountStartGameButton: document.querySelector("#accountStartGameButton"),
  accountDecksView: document.querySelector("#accountDecksView"),
  accountGamesView: document.querySelector("#accountGamesView"),
  newSavedDeckButton: document.querySelector("#newSavedDeckButton"),
  collapseDeckRailButton: document.querySelector("#collapseDeckRailButton"),
  savedDeckSearchInput: document.querySelector("#savedDeckSearchInput"),
  savedDeckSummary: document.querySelector("#savedDeckSummary"),
  savedDeckList: document.querySelector("#savedDeckList"),
  deckBuilderForm: document.querySelector("#deckBuilderForm"),
  deckBuilderTitle: document.querySelector("#deckBuilderTitle"),
  deckBuilderCount: document.querySelector("#deckBuilderCount"),
  deckBuilderNameInput: document.querySelector("#deckBuilderNameInput"),
  deckBuilderCommanderInput: document.querySelector("#deckBuilderCommanderInput"),
  deckBuilderListInput: document.querySelector("#deckBuilderListInput"),
  deckBuilderPreview: document.querySelector("#deckBuilderPreview"),
  deckBuilderStatus: document.querySelector("#deckBuilderStatus"),
  bulkImportDeckButton: document.querySelector("#bulkImportDeckButton"),
  deckContextButton: document.querySelector("#deckContextButton"),
  deckStatsButton: document.querySelector("#deckStatsButton"),
  saveBuilderDeckButton: document.querySelector("#saveBuilderDeckButton"),
  deckGroupSelect: document.querySelector("#deckGroupSelect"),
  deckSortSelect: document.querySelector("#deckSortSelect"),
  deckViewModeSelect: document.querySelector("#deckViewModeSelect"),
  deckVisualSearchInput: document.querySelector("#deckVisualSearchInput"),
  deckViewScaleInput: document.querySelector("#deckViewScaleInput"),
  applyDeckViewButton: document.querySelector("#applyDeckViewButton"),
  toggleMaybeBoardButton: document.querySelector("#toggleMaybeBoardButton"),
  deckMaybeBoardRail: document.querySelector("#deckMaybeBoardRail"),
  deckMaybeBoardInput: document.querySelector("#deckMaybeBoardInput"),
  deckCardSearchInput: document.querySelector("#deckCardSearchInput"),
  deckCardSearchButton: document.querySelector("#deckCardSearchButton"),
  deckCardSearchSummary: document.querySelector("#deckCardSearchSummary"),
  deckCardSearchResults: document.querySelector("#deckCardSearchResults"),
  activeGamesSummary: document.querySelector("#activeGamesSummary"),
  activeGamesList: document.querySelector("#activeGamesList"),
  refreshActiveGamesButton: document.querySelector("#refreshActiveGamesButton"),
  tablePanel: document.querySelector("#tablePanel"),
  roomForm: document.querySelector("#roomForm"),
  joinRoomForm: document.querySelector("#joinRoomForm"),
  backFromJoinButton: document.querySelector("#backFromJoinButton"),
  joinCodeInput: document.querySelector("#joinCodeInput"),
  joinCodePasswordInput: document.querySelector("#joinCodePasswordInput"),
  joinRoomStatus: document.querySelector("#joinRoomStatus"),
  joinRoomSubmitButton: document.querySelector("#joinRoomSubmitButton"),
  roomNameInput: document.querySelector("#roomNameInput"),
  roomPasswordInput: document.querySelector("#roomPasswordInput"),
  singlePlayerInput: document.querySelector("#singlePlayerInput"),
  playerCountLabel: document.querySelector("#playerCountLabel"),
  playerCountInput: document.querySelector("#playerCountInput"),
  inviteDebugDetails: document.querySelector("#inviteDebugDetails"),
  inviteMethodFieldset: document.querySelector("#inviteMethodFieldset"),
  inviteMethodInputs: [...document.querySelectorAll('input[name="inviteMethod"]')],
  createRoomSubmitButton: document.querySelector("#createRoomSubmitButton"),
  inviteList: document.querySelector("#inviteList"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  diceButton: document.querySelector("#diceButton"),
  randomFirstPlayerButton: document.querySelector("#randomFirstPlayerButton"),
  clockButton: document.querySelector("#clockButton"),
  clockRailValue: document.querySelector("#clockRailValue"),
  clockPopover: document.querySelector("#clockPopover"),
  closeClockButton: document.querySelector("#closeClockButton"),
  totalGameClock: document.querySelector("#totalGameClock"),
  currentTurnClock: document.querySelector("#currentTurnClock"),
  playerClockList: document.querySelector("#playerClockList"),
  clockStatus: document.querySelector("#clockStatus"),
  statisticsButton: document.querySelector("#statisticsButton"),
  statisticsPopover: document.querySelector("#statisticsPopover"),
  closeStatisticsButton: document.querySelector("#closeStatisticsButton"),
  statisticsSummary: document.querySelector("#statisticsSummary"),
  statisticsTurnDetail: document.querySelector("#statisticsTurnDetail"),
  statisticsTurnLog: document.querySelector("#statisticsTurnLog"),
  combatButton: document.querySelector("#combatButton"),
  combatPopover: document.querySelector("#combatPopover"),
  closeCombatButton: document.querySelector("#closeCombatButton"),
  combatPopoverTitle: document.querySelector("#combatPopoverTitle"),
  combatPopoverSummary: document.querySelector("#combatPopoverSummary"),
  combatPopoverCards: document.querySelector("#combatPopoverCards"),
  combatPopoverDamageButton: document.querySelector("#combatPopoverDamageButton"),
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
  exitGameButton: document.querySelector("#exitGameButton"),
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
  saveCurrentDeckButton: document.querySelector("#saveCurrentDeckButton"),
  drawButton: document.querySelector("#drawButton"),
  drawReminder: document.querySelector("#drawReminder"),
  drawReminderAction: document.querySelector("#drawReminderAction"),
  dismissDrawButton: document.querySelector("#dismissDrawButton"),
  untapReminder: document.querySelector("#untapReminder"),
  untapAllButton: document.querySelector("#untapAllButton"),
  dismissUntapButton: document.querySelector("#dismissUntapButton"),
  revealReminder: document.querySelector("#revealReminder"),
  revealReminderAction: document.querySelector("#revealReminderAction"),
  dismissRevealReminderButton: document.querySelector("#dismissRevealReminderButton"),
  actionLog: document.querySelector("#actionLog"),
  playersGrid: document.querySelector("#playersGrid"),
  handTitle: document.querySelector("#handTitle"),
  handZone: document.querySelector("#handZone"),
  handCount: document.querySelector("#handCount"),
  cardDialog: document.querySelector("#cardDialog"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogActions: document.querySelector("#dialogActions"),
  bulkImportDialog: document.querySelector("#bulkImportDialog"),
  bulkImportForm: document.querySelector("#bulkImportForm"),
  bulkImportInput: document.querySelector("#bulkImportInput"),
  closeBulkImportButton: document.querySelector("#closeBulkImportButton"),
  appendBulkImportButton: document.querySelector("#appendBulkImportButton"),
  replaceBulkImportButton: document.querySelector("#replaceBulkImportButton"),
  revealNoticeDialog: document.querySelector("#revealNoticeDialog"),
  revealNoticeTitle: document.querySelector("#revealNoticeTitle"),
  revealNoticeSummary: document.querySelector("#revealNoticeSummary"),
  revealNoticeCards: document.querySelector("#revealNoticeCards"),
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
  themeSelect: document.querySelector("#themeSelect"),
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
  newLobbyDialog: document.querySelector("#newLobbyDialog"),
  guestLeaveDialog: document.querySelector("#guestLeaveDialog"),
  guestLeaveForm: document.querySelector("#guestLeaveForm"),
  guestLeaveTitle: document.querySelector("#guestLeaveTitle"),
  guestLeaveSummary: document.querySelector("#guestLeaveSummary"),
  closeGuestLeaveButton: document.querySelector("#closeGuestLeaveButton"),
  confirmGuestLeaveButton: document.querySelector("#confirmGuestLeaveButton"),
  deckDetailsDialog: document.querySelector("#deckDetailsDialog"),
  deckDetailsForm: document.querySelector("#deckDetailsForm"),
  closeDeckDetailsButton: document.querySelector("#closeDeckDetailsButton"),
  deckDetailsNameInput: document.querySelector("#deckDetailsNameInput"),
  deckDetailsCommanderInput: document.querySelector("#deckDetailsCommanderInput"),
  deckActionDialog: document.querySelector("#deckActionDialog"),
  deckActionTitle: document.querySelector("#deckActionTitle"),
  deckActionSummary: document.querySelector("#deckActionSummary"),
  deckActionList: document.querySelector("#deckActionList"),
  closeDeckActionButton: document.querySelector("#closeDeckActionButton"),
  deckStatsDialog: document.querySelector("#deckStatsDialog"),
  deckStatsDialogTitle: document.querySelector("#deckStatsDialogTitle"),
  deckStatsDialogSummary: document.querySelector("#deckStatsDialogSummary"),
  deckStatsProductionSelect: document.querySelector("#deckStatsProductionSelect"),
  deckStatsContent: document.querySelector("#deckStatsContent"),
  deckPlayChoiceDialog: document.querySelector("#deckPlayChoiceDialog"),
  deckPlayChoiceForm: document.querySelector("#deckPlayChoiceForm"),
  deckPlayChoiceTitle: document.querySelector("#deckPlayChoiceTitle"),
  deckPlayChoiceSummary: document.querySelector("#deckPlayChoiceSummary"),
  closeDeckPlayChoiceButton: document.querySelector("#closeDeckPlayChoiceButton"),
  deckPlayJoinButton: document.querySelector("#deckPlayJoinButton"),
  deckPlayCreateButton: document.querySelector("#deckPlayCreateButton"),
  joinWithDeckDialog: document.querySelector("#joinWithDeckDialog"),
  joinWithDeckForm: document.querySelector("#joinWithDeckForm"),
  joinWithDeckTitle: document.querySelector("#joinWithDeckTitle"),
  joinWithDeckSummary: document.querySelector("#joinWithDeckSummary"),
  closeJoinWithDeckButton: document.querySelector("#closeJoinWithDeckButton"),
  joinWithDeckCodeLabel: document.querySelector("#joinWithDeckCodeLabel"),
  joinWithDeckCodeInput: document.querySelector("#joinWithDeckCodeInput"),
  joinWithDeckPasswordLabel: document.querySelector("#joinWithDeckPasswordLabel"),
  joinWithDeckPasswordInput: document.querySelector("#joinWithDeckPasswordInput"),
  joinWithDeckStatus: document.querySelector("#joinWithDeckStatus"),
  submitJoinWithDeckButton: document.querySelector("#submitJoinWithDeckButton"),
  gameLoadingDialog: document.querySelector("#gameLoadingDialog"),
  gameLoadingTitle: document.querySelector("#gameLoadingTitle"),
  gameLoadingSummary: document.querySelector("#gameLoadingSummary"),
  saveDeckDialog: document.querySelector("#saveDeckDialog"),
  saveDeckForm: document.querySelector("#saveDeckForm"),
  saveDeckDialogTitle: document.querySelector("#saveDeckDialogTitle"),
  closeSaveDeckButton: document.querySelector("#closeSaveDeckButton"),
  savedDeckIdInput: document.querySelector("#savedDeckIdInput"),
  savedDeckNameInput: document.querySelector("#savedDeckNameInput"),
  savedDeckCommanderInput: document.querySelector("#savedDeckCommanderInput"),
  savedDeckListInput: document.querySelector("#savedDeckListInput"),
  savedDeckCount: document.querySelector("#savedDeckCount"),
  submitSavedDeckButton: document.querySelector("#submitSavedDeckButton"),
  deleteDeckDialog: document.querySelector("#deleteDeckDialog"),
  deleteDeckForm: document.querySelector("#deleteDeckForm"),
  deleteDeckSummary: document.querySelector("#deleteDeckSummary"),
  closeDeleteDeckButton: document.querySelector("#closeDeleteDeckButton"),
  endGameDialog: document.querySelector("#endGameDialog"),
  endGameForm: document.querySelector("#endGameForm"),
  endGameSummary: document.querySelector("#endGameSummary"),
  closeEndGameButton: document.querySelector("#closeEndGameButton"),
  confirmEndGameButton: document.querySelector("#confirmEndGameButton"),
};

let state = null;
let currentToken = "";
let pollTimer = null;
let roomEvents = null;
let roomEventsKey = "";
let presenceHeartbeatTimer = null;
let clockRenderTimer = null;
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
let dismissedRevealReminderKey = "";
let selectedStatisticsTurnKey = "";
let openLifeMenuKey = "";
let boardReferenceSeat = null;
let dismissedCombatSnapshotId = "";
let dismissedDiceNoticeId = "";
let lastDiceResult = "No rolls yet";
let pendingCountPrompt = null;
let keybindCaptureAction = "";
let landingView = "menu";
let account = null;
let savedDecks = [];
let activeGames = [];
let accountMode = "login";
let accountWorkspaceTab = "decks";
let selectedBuilderDeckId = "";
let deckBuilderInitialized = false;
let deckCardSearchResults = [];
let deckBuilderPreviewCollapsed = false;
let deckBuilderMetadata = null;
let deckBuilderMetadataKey = "";
let deckBuilderMetadataTimer = null;
let deckRailCollapsed = localStorage.getItem("mage-table-deck-rail-collapsed") === "1";
let deckMaybeBoardOpen = localStorage.getItem("mage-table-maybeboard-open") === "1";
let pendingDeckActionDeck = null;
let pendingGameDeck = null;
let pendingCreateDeck = null;
let pendingPlayDeck = null;
let pendingJoinDeck = null;
let pendingPasswordJoin = null;
let pendingEndGameId = "";
let pendingDeleteDeckId = "";
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
const activeLobbiesKey = "mage-table-active-lobbies";
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

function sameOriginRoomUrl(value, { absolute = false } = {}) {
  const incoming = new URL(value, window.location.origin);
  const path = `${incoming.pathname}${incoming.search}${incoming.hash}`;
  return absolute ? new URL(path, window.location.origin).toString() : path;
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
    const { headers = {}, ...fetchOptions } = options;
    const response = await fetch(path, {
      ...fetchOptions,
      headers: { "Content-Type": "application/json", ...headers },
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

function accountApi(path, options = {}) {
  return api(path, options);
}

function setLoading(isLoading) {
  pendingRequests += isLoading ? 1 : -1;
  pendingRequests = Math.max(0, pendingRequests);
  document.body.classList.toggle("is-loading", pendingRequests > 0);
  els.loadingIndicator.classList.toggle("hidden", pendingRequests === 0);
}

function showGameLoading(title = "Loading Game", summary = "Resolving Scryfall cards and shuffling your opening hand.") {
  els.gameLoadingTitle.textContent = title;
  els.gameLoadingSummary.textContent = summary;
  if (!els.gameLoadingDialog.open) els.gameLoadingDialog.showModal();
}

function hideGameLoading() {
  if (els.gameLoadingDialog.open) els.gameLoadingDialog.close();
}

function applyCardScale(value, { persist = true } = {}) {
  const scale = Math.max(80, Math.min(300, Number(value) || 100));
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
  const label = sidebarCollapsed ? "Show controls" : "Hide controls";
  els.sidebarToggle.title = label;
  els.sidebarToggle.setAttribute("aria-label", label);
  els.sidebarToggle.setAttribute("aria-expanded", String(!sidebarCollapsed));
}

function renderLanding() {
  els.landingMenu.classList.toggle("hidden", landingView !== "menu");
  els.createModePanel.classList.toggle("hidden", landingView !== "createMode");
  els.roomForm.classList.toggle("hidden", landingView !== "create");
  els.joinRoomForm.classList.toggle("hidden", landingView !== "join");
  els.activeLobbiesPanel.classList.toggle("hidden", landingView !== "lobbies");
  els.accountPanel.classList.toggle("hidden", landingView !== "account");
  els.setupPanel.classList.toggle("account-view", landingView === "account");
  els.setupPanel.classList.toggle("account-workspace-shell", landingView === "account" && Boolean(account));
  els.setupPanel.classList.toggle("lobbies-view", landingView === "lobbies");
  els.loginButton.textContent = account ? "Account" : "Log In";
  updateRoomCreationControls();
  if (landingView === "lobbies") renderActiveLobbies();
  if (landingView === "account") renderAccountPanel();
}

function selectedInviteMode() {
  return els.inviteMethodInputs.find((input) => input.checked)?.value === "code" ? "code" : "links";
}

function updateRoomCreationControls() {
  if (!els.singlePlayerInput || !els.playerCountInput || !els.playerCountLabel || !els.inviteDebugDetails || !els.createRoomSubmitButton) return;
  const solo = els.singlePlayerInput.checked;
  els.playerCountInput.disabled = solo;
  els.playerCountLabel.classList.toggle("disabled-field", solo);
  els.inviteDebugDetails.classList.toggle("hidden", solo);
  els.createRoomSubmitButton.textContent = solo
    ? "Create Solo Game"
    : "Create Join Code";
}

function setInviteMode(value) {
  els.inviteMethodInputs.forEach((input) => {
    input.checked = input.value === value;
  });
  updateRoomCreationControls();
}

function openCreateMode(deck = null) {
  pendingCreateDeck = deck ? { ...deck } : null;
  landingView = "createMode";
  setAccountStatus();
  renderLanding();
}

function openLiveGameSetup(deck = null) {
  pendingCreateDeck = deck ? { ...deck } : pendingCreateDeck;
  els.singlePlayerInput.checked = false;
  els.roomNameInput.value = `${pendingCreateDeck?.name || "Friday Commander"} Game`.slice(0, 40);
  setInviteMode("code");
  landingView = "create";
  setAccountStatus();
  renderLanding();
  requestAnimationFrame(() => els.roomNameInput.focus());
}

async function createGameFromSetup({ solo = false, deck = null } = {}) {
  const selectedDeck = deck || pendingCreateDeck || null;
  showGameLoading(solo ? "Creating Solo Game" : "Creating Game", selectedDeck ? "Resolving Scryfall cards and shuffling your opening hand." : "Preparing your table.");
  try {
    const room = await api("/api/rooms", {
      method: "POST",
      body: JSON.stringify({
        name: solo
          ? `${selectedDeck?.name || "Solo"} Game`.slice(0, 40)
          : els.roomNameInput.value.trim() || "Mage Table",
        password: solo ? "" : els.roomPasswordInput.value,
        playerCount: solo ? 1 : Number(els.playerCountInput.value),
        inviteMode: solo ? "links" : selectedInviteMode(),
        deck: selectedDeck ? {
          decklist: selectedDeck.decklist,
          commander: selectedDeck.commander || "",
          playerName: accountDisplayName("Player 1"),
        } : null,
      }),
    });
    pendingCreateDeck = null;
    storeRoomPassword(room.id, solo ? "" : els.roomPasswordInput.value);
    history.replaceState(null, "", sameOriginRoomUrl(room.selfUrl));
    forceInviteDialog = !solo && !room.currentPlayer.deckLoaded;
    setAccountStatus();
    await refreshState();
  } finally {
    hideGameLoading();
  }
}

function setJoinRoomStatus(message = "", isError = false) {
  els.joinRoomStatus.textContent = message;
  els.joinRoomStatus.classList.toggle("hidden", !message);
  els.joinRoomStatus.classList.toggle("error", Boolean(message) && isError);
}

function setJoinPasswordVisible(visible) {
  const label = els.joinCodePasswordInput.closest("label");
  if (label) label.classList.toggle("hidden", !visible);
  if (!visible) els.joinCodePasswordInput.value = "";
}

async function performJoinRoomByCode(code, password = "") {
  const room = await api("/api/rooms/join", {
    method: "POST",
    body: JSON.stringify({ code, password }),
  });
  storeRoomPassword(room.id, password);
  history.replaceState(null, "", sameOriginRoomUrl(room.selfUrl));
  forceInviteDialog = false;
  await refreshState();
}

function activeLobbies() {
  try {
    const entries = JSON.parse(localStorage.getItem(activeLobbiesKey) || "[]");
    return Array.isArray(entries) ? entries.filter((entry) => entry?.roomId && entry?.url) : [];
  } catch {
    return [];
  }
}

function writeActiveLobbies(entries) {
  localStorage.setItem(activeLobbiesKey, JSON.stringify(entries.slice(0, 20)));
}

function rememberActiveLobby(room) {
  if (!room?.id || !currentToken) return;
  const entry = {
    roomId: room.id,
    name: room.name || "Mage Table",
    seatName: room.currentPlayer?.name || `Seat ${(Number(room.currentSeat) || 0) + 1}`,
    url: sameOriginRoomUrl(room.selfUrl || `/?room=${encodeURIComponent(room.id)}&token=${encodeURIComponent(currentToken)}`),
    lastVisitedAt: Date.now(),
  };
  const entries = activeLobbies().filter((item) => item.roomId !== entry.roomId || item.url !== entry.url);
  writeActiveLobbies([entry, ...entries]);
}

function renderActiveLobbies() {
  const entries = activeLobbies();
  els.activeLobbiesList.innerHTML = "";
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "No active lobbies are saved on this browser yet.";
    els.activeLobbiesList.append(empty);
    return;
  }
  entries.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "active-lobby-row";
    const details = document.createElement("div");
    details.className = "active-lobby-details";
    const visited = Number(entry.lastVisitedAt) > 0 ? new Date(entry.lastVisitedAt).toLocaleString() : "Unknown";
    details.innerHTML = `<strong>${escapeHtml(entry.name)}</strong><span>${escapeHtml(entry.seatName)} - Last opened ${escapeHtml(visited)}</span>`;
    const actions = document.createElement("div");
    actions.className = "active-lobby-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open";
    open.addEventListener("click", () => {
      history.replaceState(null, "", sameOriginRoomUrl(entry.url));
      refreshState();
    });
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "secondary";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      writeActiveLobbies(activeLobbies().filter((item) => item.roomId !== entry.roomId || item.url !== entry.url));
      renderActiveLobbies();
    });
    actions.append(open, remove);
    row.append(details, actions);
    els.activeLobbiesList.append(row);
  });
}

function leaveGameForLanding(view = "lobbies", { remember = true } = {}) {
  if (state && remember) rememberActiveLobby(state);
  state = null;
  closeRoomEvents();
  closeActionPopovers();
  landingView = view;
  history.replaceState(null, "", "/");
  render();
}

function clearCurrentActiveLobby() {
  if (!state?.id || !currentToken) return;
  const roomId = state.id;
  const token = currentToken;
  writeActiveLobbies(activeLobbies().filter((item) => {
    if (item.roomId !== roomId) return true;
    try {
      const url = new URL(item.url, window.location.origin);
      return url.searchParams.get("token") !== token;
    } catch {
      return false;
    }
  }));
}

function currentSeatIsGuest() {
  return Boolean(state?.currentPlayer?.isGuest) || !account;
}

function openGuestLeaveDialog() {
  if (!state) return;
  const isHost = Boolean(state.currentPlayer?.isHost);
  els.guestLeaveTitle.textContent = isHost ? "Close Guest-Hosted Game?" : "Leave Guest Game?";
  els.guestLeaveSummary.textContent = isHost
    ? "This room is hosted as a guest. Leaving will end the game for every player, and it will not be preserved as an account game."
    : "This guest seat is only stored in this browser. Leaving removes it from your active lobbies, so you may not be able to return without the original link.";
  els.confirmGuestLeaveButton.textContent = isHost ? "End and Leave" : "Leave Game";
  if (!els.guestLeaveDialog.open) els.guestLeaveDialog.showModal();
}

async function confirmGuestLeave() {
  if (!state) {
    els.guestLeaveDialog.close();
    return;
  }
  const wasHost = Boolean(state.currentPlayer?.isHost);
  els.confirmGuestLeaveButton.disabled = true;
  try {
    if (wasHost) {
      await sendAction("leaveGame");
    }
  } catch {
    // Dormant guest-host cleanup will close the game if the explicit leave request fails.
  } finally {
    els.confirmGuestLeaveButton.disabled = false;
  }
  clearCurrentActiveLobby();
  els.guestLeaveDialog.close();
  leaveGameForLanding("menu", { remember: false });
}

function sendGuestHostLeaveBeacon() {
  if (!state?.currentPlayer?.isHost || !currentSeatIsGuest()) return;
  const payload = JSON.stringify({
    token: currentToken,
    password: roomPasswordFor(state.id),
    type: "leaveGame",
  });
  try {
    const blob = new Blob([payload], { type: "application/json" });
    navigator.sendBeacon?.(`/api/rooms/${encodeURIComponent(state.id)}/actions`, blob);
  } catch {
    // The server-side dormant guest cleanup is the fallback for hard browser exits.
  }
}

function setAccountStatus(message = "", isError = false) {
  els.accountStatus.textContent = message;
  els.accountStatus.classList.toggle("hidden", !message);
  els.accountStatus.classList.toggle("error", Boolean(message) && isError);
}

function accountDisplayName(fallback = "Player") {
  const fullName = `${account?.firstName || ""} ${account?.lastName || ""}`.trim();
  return (fullName || account?.username || fallback).slice(0, 32);
}

function renderAccountPanel() {
  const signedIn = Boolean(account);
  els.accountSignedOut.classList.toggle("hidden", signedIn);
  els.accountDashboard.classList.toggle("hidden", !signedIn);
  els.accountPanelTitle.textContent = signedIn ? "Deck Builder" : "Account";
  els.loginForm.classList.toggle("hidden", accountMode !== "login");
  els.registerForm.classList.toggle("hidden", accountMode !== "register");
  els.showLoginButton.classList.toggle("active", accountMode === "login");
  els.showLoginButton.classList.toggle("secondary", accountMode !== "login");
  els.showRegisterButton.classList.toggle("active", accountMode === "register");
  els.showRegisterButton.classList.toggle("secondary", accountMode !== "register");
  if (!signedIn) return;
  els.accountUsername.textContent = account.firstName ? `${account.firstName} (@${account.username})` : account.username;
  els.accountDecksTab.classList.toggle("active", accountWorkspaceTab === "decks");
  els.accountDecksTab.classList.toggle("secondary", accountWorkspaceTab !== "decks");
  els.accountGamesTab.classList.toggle("active", accountWorkspaceTab === "games");
  els.accountGamesTab.classList.toggle("secondary", accountWorkspaceTab !== "games");
  els.accountDecksView.classList.toggle("hidden", accountWorkspaceTab !== "decks");
  els.accountGamesView.classList.toggle("hidden", accountWorkspaceTab !== "games");
  els.accountDecksView.classList.toggle("deck-rail-collapsed", deckRailCollapsed);
  els.collapseDeckRailButton.textContent = deckRailCollapsed ? "☰" : "⇤";
  els.collapseDeckRailButton.title = deckRailCollapsed ? "Expand deck library" : "Collapse deck library";
  els.collapseDeckRailButton.setAttribute("aria-label", els.collapseDeckRailButton.title);
  if (els.toggleMaybeBoardButton && els.deckMaybeBoardRail) {
    els.toggleMaybeBoardButton.classList.toggle("active", deckMaybeBoardOpen);
    els.toggleMaybeBoardButton.title = deckMaybeBoardOpen ? "Hide maybe board" : "Open maybe board";
    els.toggleMaybeBoardButton.setAttribute("aria-label", els.toggleMaybeBoardButton.title);
    els.deckMaybeBoardRail.classList.toggle("hidden", !deckMaybeBoardOpen);
  }
  renderSavedDecks();
  renderDeckBuilderPreview();
  renderActiveGames();
}

function renderAccountControls() {
  els.saveCurrentDeckButton.classList.toggle("hidden", !account);
}

function renderSavedDecks() {
  els.savedDeckList.innerHTML = "";
  const query = els.savedDeckSearchInput.value.trim().toLowerCase();
  const filtered = query
    ? savedDecks.filter((deck) => `${deck.name} ${deck.commander}`.toLowerCase().includes(query))
    : savedDecks;
  els.savedDeckSummary.textContent = query
    ? `${filtered.length} of ${savedDecks.length} decks`
    : `${savedDecks.length} deck${savedDecks.length === 1 ? "" : "s"}`;
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = savedDecks.length ? "No saved decks match this filter." : "No saved decks yet.";
    els.savedDeckList.append(empty);
    return;
  }
  filtered.forEach((deck) => {
    const row = document.createElement("div");
    row.className = `saved-deck-row${deck.id === selectedBuilderDeckId ? " selected" : ""}`;
    const details = document.createElement("button");
    details.type = "button";
    details.className = "saved-deck-details deck-library-select";
    const cardCount = deckListCardCount(deck.decklist);
    const colorIdentity = commanderColorIdentityForDeck(deck);
    details.innerHTML = `<strong>${escapeHtml(deck.name)}</strong><span>${cardCount} cards - ${escapeHtml(deck.commander || "No commander")} - CI: ${escapeHtml(colorIdentity)} - Updated ${escapeHtml(new Date(deck.updatedAt).toLocaleDateString())}</span>`;
    details.addEventListener("click", () => selectBuilderDeck(deck));
    const play = document.createElement("button");
    play.type = "button";
    play.className = "deck-row-play";
    play.textContent = "Play";
    play.title = `Play ${deck.name}`;
    play.addEventListener("click", () => openDeckPlayChoice(deck));
    const menu = document.createElement("button");
    menu.type = "button";
    menu.className = "deck-row-menu";
    menu.textContent = "⋯";
    menu.title = `Deck actions for ${deck.name}`;
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
      openDeckActionDialog(deck);
    });
    row.append(details, play, menu);
    els.savedDeckList.append(row);
  });
}

function commanderColorIdentityForDeck(deck) {
  if (deck.id !== selectedBuilderDeckId || !deckBuilderMetadata?.cards?.length) return "Open";
  const commanderName = String(deck.commander || "").trim().toLowerCase();
  const commander = deckBuilderMetadata.cards.find((card) => card.name.toLowerCase() === commanderName || card.displayName?.toLowerCase() === commanderName);
  return colorLabel(commander?.colorIdentity || commander?.colors || []);
}

function maybeBoardKey(deckId = selectedBuilderDeckId || "new") {
  return `mage-table-maybeboard:${account?.id || "guest"}:${deckId || "new"}`;
}

function loadMaybeBoard(deckId = selectedBuilderDeckId || "new") {
  els.deckMaybeBoardInput.value = localStorage.getItem(maybeBoardKey(deckId)) || "";
}

function saveMaybeBoard() {
  localStorage.setItem(maybeBoardKey(), els.deckMaybeBoardInput.value);
}

function openDeckActionDialog(deck) {
  const current = deck || currentBuilderDeck();
  const savedDeck = current.id ? savedDecks.find((candidate) => candidate.id === current.id) || current : null;
  const loadDeckForEditing = () => {
    if (deck?.id && deck.id !== selectedBuilderDeckId) selectBuilderDeck(deck);
    openDeckDetailsDialog();
  };
  pendingDeckActionDeck = current;
  els.deckActionTitle.textContent = current.name || "Deck Actions";
  els.deckActionSummary.textContent = `${deckListCardCount(current.decklist)} cards - ${current.commander || "No commander"}`;
  els.deckActionList.innerHTML = "";
  [
    { label: "Play", handler: () => openDeckPlayChoice(current), disabled: !String(current.decklist || "").trim() },
    { label: "Edit Details", handler: loadDeckForEditing },
    { label: "Export", handler: () => exportDeck(current), disabled: !current.decklist },
    { label: "Duplicate", handler: () => duplicateSavedDeck(savedDeck), disabled: !savedDeck },
    { label: "Delete", handler: () => openDeleteDeckDialog(savedDeck), disabled: !savedDeck },
  ].forEach(({ label, handler, disabled }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = label === "Delete" ? "danger" : label === "Play" ? "" : "secondary";
    button.textContent = label;
    button.disabled = Boolean(disabled);
    button.addEventListener("click", async () => {
      els.deckActionDialog.close();
      await handler();
    });
    els.deckActionList.append(button);
  });
  if (!els.deckActionDialog.open) els.deckActionDialog.showModal();
}

function openDeckDetailsDialog() {
  els.deckDetailsNameInput.value = els.deckBuilderNameInput.value || "";
  els.deckDetailsCommanderInput.value = els.deckBuilderCommanderInput.value || "";
  if (!els.deckDetailsDialog.open) els.deckDetailsDialog.showModal();
  requestAnimationFrame(() => els.deckDetailsNameInput.focus());
}

function parseDeckBuilderEntries(decklist = "") {
  return String(decklist || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(?:SB:\s*)?(\d+)\s*[xX]?\s+(.+)$/i);
      if (!match) return { quantity: 1, name: cleanDeckBuilderCardName(line), rawName: line };
      const rawName = match[2].trim();
      return { quantity: Math.max(1, Number(match[1]) || 1), name: cleanDeckBuilderCardName(rawName), rawName };
    });
}

function serializeDeckBuilderEntries(entries) {
  return entries.filter((entry) => entry.quantity > 0 && entry.name).map((entry) => `${entry.quantity} ${entry.rawName || entry.name}`).join("\n");
}

function cleanDeckBuilderCardName(rawName) {
  let rest = String(rawName || "").trim();
  rest = rest.replace(/\s+\^([^]+)\^\s*$/, "");
  rest = rest.replace(/\s+\[([^\]]+)\]\s*$/, "");
  rest = rest.replace(/\s+\*([^*]+)\*\s*$/, "");
  rest = rest.replace(/\s+\(([A-Za-z0-9]{2,8})\)\s+([A-Za-z0-9\-★☆]+)\s*$/, "");
  return rest
    .replace(/\s+\{[^}]+\}\s*$/g, "")
    .trim();
}

function deckMetadataKey(decklist) {
  return String(decklist || "").trim().toLowerCase();
}

function scheduleDeckMetadataRefresh() {
  window.clearTimeout(deckBuilderMetadataTimer);
  const key = deckMetadataKey(els.deckBuilderListInput.value);
  if (!key) {
    deckBuilderMetadata = null;
    deckBuilderMetadataKey = "";
    return;
  }
  if (deckBuilderMetadataKey === key && deckBuilderMetadata) return;
  deckBuilderMetadataTimer = window.setTimeout(() => refreshDeckMetadata(), 450);
}

async function refreshDeckMetadata() {
  const decklist = els.deckBuilderListInput.value;
  const key = deckMetadataKey(decklist);
  if (!key) {
    deckBuilderMetadata = null;
    deckBuilderMetadataKey = "";
    renderDeckBuilderPreview();
    return;
  }
  deckBuilderMetadataKey = key;
  try {
    const result = await api("/api/decks/inspect", {
      method: "POST",
      body: JSON.stringify({ decklist }),
    });
    if (deckBuilderMetadataKey !== key) return;
    deckBuilderMetadata = result;
    renderSavedDecks();
    renderDeckBuilderPreview();
  } catch (error) {
    if (deckBuilderMetadataKey !== key) return;
    deckBuilderMetadata = { cards: [], error: error.message };
    renderSavedDecks();
    renderDeckBuilderPreview();
  }
}

function invalidateDeckMetadata() {
  deckBuilderMetadata = null;
  deckBuilderMetadataKey = "";
  scheduleDeckMetadataRefresh();
}

function selectBuilderDeck(deck) {
  deckBuilderPreviewCollapsed = false;
  deckBuilderMetadata = null;
  deckBuilderMetadataKey = "";
  selectedBuilderDeckId = deck.id;
  els.deckBuilderNameInput.value = deck.name;
  els.deckBuilderCommanderInput.value = deck.commander || "";
  els.deckBuilderListInput.value = deck.decklist;
  els.deckBuilderStatus.textContent = `Updated ${new Date(deck.updatedAt).toLocaleString()}`;
  loadMaybeBoard(deck.id);
  renderSavedDecks();
  renderDeckBuilderPreview();
  scheduleDeckMetadataRefresh();
}

function newBuilderDeck() {
  deckBuilderPreviewCollapsed = false;
  deckBuilderMetadata = null;
  deckBuilderMetadataKey = "";
  selectedBuilderDeckId = "";
  els.deckBuilderNameInput.value = "";
  els.deckBuilderCommanderInput.value = "";
  els.deckBuilderListInput.value = "";
  els.deckMaybeBoardInput.value = "";
  loadMaybeBoard("new");
  els.deckBuilderStatus.textContent = "New unsaved deck";
  renderSavedDecks();
  renderDeckBuilderPreview();
  openDeckDetailsDialog();
}

function currentBuilderDeck() {
  return {
    id: selectedBuilderDeckId,
    name: els.deckBuilderNameInput.value.trim(),
    commander: els.deckBuilderCommanderInput.value.trim(),
    decklist: els.deckBuilderListInput.value.trim(),
  };
}

function renderDeckBuilderPreview() {
  if (!account) return;
  const entries = parseDeckBuilderEntries(els.deckBuilderListInput.value);
  const total = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const selectedDeck = savedDecks.find((deck) => deck.id === selectedBuilderDeckId);
  const deckName = els.deckBuilderNameInput.value.trim() || selectedDeck?.name || "New Deck";
  const commander = els.deckBuilderCommanderInput.value.trim();
  els.deckBuilderTitle.textContent = deckName;
  els.deckBuilderCount.textContent = `${total} card${total === 1 ? "" : "s"}${commander ? ` - Commander: ${commander}` : ""}`;
  applyDeckViewScale();
  els.deckBuilderPreview.innerHTML = "";
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "Add cards with Scryfall search or paste a decklist.";
    els.deckBuilderPreview.append(empty);
    return;
  }
  if (deckBuilderPreviewCollapsed) {
    const summary = document.createElement("div");
    summary.className = "bulk-import-summary";
    const text = document.createElement("span");
    text.textContent = `${entries.length} unique cards imported in bulk.`;
    const show = document.createElement("button");
    show.type = "button";
    show.className = "secondary";
    show.textContent = "Show Card List";
    show.addEventListener("click", () => {
      deckBuilderPreviewCollapsed = false;
      renderDeckBuilderPreview();
    });
    summary.append(text, show);
    els.deckBuilderPreview.append(summary);
    return;
  }
  if (deckBuilderMetadata?.cards?.length) {
    renderDeckVisualStacks(deckBuilderMetadata.cards);
    return;
  }
  if (deckBuilderMetadata?.error) {
    const error = document.createElement("p");
    error.className = "empty-list-message";
    error.textContent = deckBuilderMetadata.error;
    els.deckBuilderPreview.append(error);
  } else {
    const loading = document.createElement("p");
    loading.className = "empty-list-message";
    loading.textContent = "Resolving deck images from Scryfall...";
    els.deckBuilderPreview.append(loading);
    scheduleDeckMetadataRefresh();
  }
  entries.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "deck-card-row";
    const minus = document.createElement("button");
    minus.type = "button";
    minus.className = "secondary deck-quantity-button";
    minus.textContent = "-";
    minus.title = `Remove one ${entry.name}`;
    minus.addEventListener("click", () => adjustBuilderCard(entry.name, -1));
    const quantity = document.createElement("strong");
    quantity.textContent = String(entry.quantity);
    const name = document.createElement("span");
    name.textContent = entry.name;
    const plus = document.createElement("button");
    plus.type = "button";
    plus.className = "secondary deck-quantity-button";
    plus.textContent = "+";
    plus.title = `Add one ${entry.name}`;
    plus.addEventListener("click", () => adjustBuilderCard(entry.name, 1));
    row.append(minus, quantity, name, plus);
    els.deckBuilderPreview.append(row);
  });
}

function deckViewScale() {
  return Math.max(70, Math.min(160, Number(els.deckViewScaleInput?.value) || 100));
}

function applyDeckViewScale() {
  if (!els.deckBuilderPreview) return;
  els.deckBuilderPreview.style.setProperty("--deck-view-scale", String(deckViewScale() / 100));
}

function renderDeckVisualStacks(cards) {
  const groupMode = els.deckGroupSelect.value || "type";
  const sortMode = els.deckSortSelect.value || "alphabet";
  const viewMode = els.deckViewModeSelect.value || "cascade";
  const query = els.deckVisualSearchInput.value.trim().toLowerCase();
  const grouped = new Map();
  cards.forEach((card) => {
    const group = deckGroupLabel(card, groupMode);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(card);
  });
  const wrap = document.createElement("div");
  wrap.className = `deck-visual-columns deck-view-${viewMode}`;
  [...grouped.entries()]
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .forEach(([group, groupCards]) => {
      const sorted = [...groupCards].sort((a, b) => compareDeckCards(a, b, sortMode));
      const column = document.createElement("section");
      column.className = "deck-stack-column";
      const price = sorted.reduce((sum, card) => sum + (Number(card.priceUsd) || 0) * card.quantity, 0);
      column.innerHTML = `<header><strong>${escapeHtml(group)}</strong><span>Qty: ${sorted.reduce((sum, card) => sum + card.quantity, 0)} · $${price.toFixed(2)}</span></header>`;
      if (viewMode === "table") column.append(deckTextTable(sorted, query));
      else if (viewMode === "grid") column.append(deckImageGrid(sorted, query));
      else {
        const stack = document.createElement("div");
        stack.className = "deck-card-stack";
        stack.style.setProperty("--stack-count", String(sorted.length));
        sorted.forEach((card, index) => stack.append(deckStackCard(card, index, query)));
        column.append(stack);
      }
      wrap.append(column);
    });
  els.deckBuilderPreview.append(wrap);
}

function deckStackCard(card, index, query) {
  const item = document.createElement("article");
  item.className = "deck-stack-card";
  if (query && card.name.toLowerCase().includes(query)) item.classList.add("highlight");
  item.style.setProperty("--stack-index", String(index));
  item.title = `${card.quantity} ${card.name}`;
  const image = card.imageUrl
    ? `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" loading="lazy">`
    : `<div class="deck-stack-placeholder">${escapeHtml(card.name)}</div>`;
  item.innerHTML = `${image}<span class="deck-stack-qty">${card.quantity}</span><strong>${escapeHtml(card.name)}</strong>`;
  attachCardZoomHandlers(item, "deck-viewer", index);
  return item;
}

function deckImageGrid(cards, query) {
  const grid = document.createElement("div");
  grid.className = "deck-image-grid";
  cards.forEach((card, index) => {
    const item = deckStackCard(card, index, query);
    item.classList.add("deck-grid-card");
    grid.append(item);
  });
  return grid;
}

function deckTextTable(cards, query) {
  const table = document.createElement("table");
  table.className = "deck-text-table";
  table.innerHTML = "<thead><tr><th>Qty</th><th>Name</th><th>MV</th><th>Type</th><th>Color</th><th>Price</th></tr></thead>";
  const body = document.createElement("tbody");
  cards.forEach((card) => {
    const row = document.createElement("tr");
    if (query && card.name.toLowerCase().includes(query)) row.classList.add("highlight");
    row.innerHTML = `
      <td>${Number(card.quantity) || 1}</td>
      <td>${escapeHtml(card.name)}</td>
      <td>${Number(card.manaValue) || 0}</td>
      <td>${escapeHtml(primaryType(card))}</td>
      <td>${escapeHtml(colorLabel(card.colorIdentity || card.colors || []))}</td>
      <td>$${((Number(card.priceUsd) || 0) * (Number(card.quantity) || 1)).toFixed(2)}</td>
    `;
    body.append(row);
  });
  table.append(body);
  return table;
}

function openDeckStatsDialog(deck = currentBuilderDeck()) {
  const name = deck.name || els.deckBuilderNameInput.value || "Deck";
  els.deckStatsDialogTitle.textContent = `${name} Stats`;
  els.deckStatsDialogSummary.textContent = deckBuilderMetadata?.cards?.length
    ? `${deckBuilderMetadata.stats?.total || deckListCardCount(deck.decklist)} cards analyzed`
    : "Stats are available after Scryfall card data resolves.";
  renderDeckStatsContent();
  if (!els.deckStatsDialog.open) els.deckStatsDialog.showModal();
}

function renderDeckStatsContent() {
  els.deckStatsContent.innerHTML = "";
  const cards = deckBuilderMetadata?.cards || [];
  if (!cards.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "Resolve this deck through Scryfall before viewing stats.";
    els.deckStatsContent.append(empty);
    return;
  }
  const total = cards.reduce((sum, card) => sum + (Number(card.quantity) || 1), 0);
  els.deckStatsContent.append(
    statSection("Mana Curve", manaCurveData(cards), "mana"),
    statSection("Production Curve", productionCurveData(cards, els.deckStatsProductionSelect.value), "production"),
    statSection("Deck Composition", compositionData(cards), "composition"),
    statSection("Draw Odds by Type", drawOddsData(cards, (card) => primaryType(card), total), "odds"),
    statSection("Draw Odds by Category", drawOddsData(cards, (card) => deckCategory(card), total), "odds"),
  );
}

function statSection(title, rows, mode) {
  const section = document.createElement("section");
  section.className = "deck-stat-section";
  section.innerHTML = `<h3>${escapeHtml(title)}</h3>`;
  const max = Math.max(1, ...rows.map((row) => Number(row.value) || 0));
  rows.forEach((row) => {
    const item = document.createElement("div");
    item.className = `deck-stat-bar deck-stat-${mode}`;
    item.style.setProperty("--bar-width", `${Math.max(3, ((Number(row.value) || 0) / max) * 100)}%`);
    item.style.setProperty("--bar-color", row.color || statColor(row.label, mode));
    item.innerHTML = `<span>${escapeHtml(row.label)}</span><div><i></i></div><strong>${escapeHtml(row.display ?? String(row.value))}</strong>`;
    section.append(item);
  });
  return section;
}

function statColor(label, mode) {
  if (mode === "mana") return "#8ee7d6";
  if (mode === "production") return colorSwatch(label);
  if (mode === "composition" || mode === "odds") return typeColor(label);
  return "#2a9d8f";
}

function manaCurveData(cards) {
  const curve = new Map();
  cards.forEach((card) => {
    const mv = Math.max(0, Math.min(8, Math.floor(Number(card.manaValue) || 0)));
    const label = mv >= 8 ? "8+" : String(mv);
    curve.set(label, (curve.get(label) || 0) + (Number(card.quantity) || 1));
  });
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8+"].map((label) => ({ label, value: curve.get(label) || 0, color: "#8ee7d6" }));
}

function productionCurveData(cards, color = "all") {
  const curve = new Map();
  cards.forEach((card) => {
    const produced = Array.isArray(card.producedMana) && card.producedMana.length
      ? card.producedMana
      : card.isLand ? card.colorIdentity || [] : [];
    const normalized = produced.length ? produced : card.isLand ? ["C"] : [];
    if (!normalized.length) return;
    if (color !== "all" && !normalized.includes(color)) return;
    const mv = Math.max(0, Math.min(8, Math.floor(Number(card.manaValue) || 0)));
    const label = mv >= 8 ? "8+" : String(mv);
    curve.set(label, (curve.get(label) || 0) + (Number(card.quantity) || 1));
  });
  const selected = color === "all" ? "all" : color;
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8+"].map((label) => ({
    label,
    value: curve.get(label) || 0,
    color: colorSwatch(selected),
  }));
}

function compositionData(cards) {
  const counts = new Map();
  cards.forEach((card) => counts.set(primaryType(card), (counts.get(primaryType(card)) || 0) + (Number(card.quantity) || 1)));
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, value]) => ({ label, value, color: typeColor(label) }));
}

function drawOddsData(cards, groupFn, total) {
  const counts = new Map();
  cards.forEach((card) => {
    const label = groupFn(card);
    counts.set(label, (counts.get(label) || 0) + (Number(card.quantity) || 1));
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, value]) => {
      const odds = drawAtLeastOneProbability(total, value, 7);
      return { label, value: odds, display: `${Math.round(odds)}% (${value})`, color: typeColor(label) };
    });
}

function colorSwatch(value) {
  const key = String(value || "").trim();
  const colors = {
    W: "#f4e7b2",
    White: "#f4e7b2",
    U: "#5da9e9",
    Blue: "#5da9e9",
    B: "#8b7f8d",
    Black: "#8b7f8d",
    R: "#e45d3f",
    Red: "#e45d3f",
    G: "#4fb06d",
    Green: "#4fb06d",
    C: "#b8b2a4",
    Colorless: "#b8b2a4",
    all: "#c9b36a",
  };
  return colors[key] || "#8ee7d6";
}

function typeColor(value) {
  const label = String(value || "");
  if (/commander/i.test(label)) return "#c9b36a";
  if (/creature/i.test(label)) return "#52b788";
  if (/instant/i.test(label)) return "#4dabf7";
  if (/sorcery/i.test(label)) return "#f08c00";
  if (/artifact/i.test(label)) return "#adb5bd";
  if (/enchantment/i.test(label)) return "#d0bfff";
  if (/planeswalker/i.test(label)) return "#e599f7";
  if (/battle/i.test(label)) return "#ff8787";
  if (/land/i.test(label)) return "#8d6e63";
  if (/ramp|mana/i.test(label)) return "#69db7c";
  if (/draw|card/i.test(label)) return "#74c0fc";
  if (/removal|wipe/i.test(label)) return "#ff922b";
  if (/counter|protection/i.test(label)) return "#91a7ff";
  return "#8ee7d6";
}

function drawAtLeastOneProbability(deckSize, copies, handSize) {
  if (!deckSize || !copies) return 0;
  let miss = 1;
  for (let i = 0; i < handSize; i += 1) {
    miss *= Math.max(0, deckSize - copies - i) / Math.max(1, deckSize - i);
  }
  return Math.max(0, Math.min(100, (1 - miss) * 100));
}

function deckGroupLabel(card, mode) {
  if (mode === "rarity") return titleCase(card.rarity || "unknown");
  if (mode === "price") {
    const price = Number(card.priceUsd) || 0;
    if (price >= 20) return "$20+";
    if (price >= 5) return "$5-$19.99";
    if (price >= 1) return "$1-$4.99";
    return "Under $1";
  }
  if (mode === "color") return colorLabel(card.colorIdentity || card.colors || []);
  if (mode === "manaValue") return `MV ${Number(card.manaValue) || 0}`;
  if (mode === "category") return deckCategory(card);
  return primaryType(card);
}

function compareDeckCards(a, b, mode) {
  if (mode === "manaValue") return (Number(a.manaValue) || 0) - (Number(b.manaValue) || 0) || a.name.localeCompare(b.name);
  if (mode === "type") return primaryType(a).localeCompare(primaryType(b)) || a.name.localeCompare(b.name);
  if (mode === "price") return (Number(b.priceUsd) || 0) - (Number(a.priceUsd) || 0) || a.name.localeCompare(b.name);
  if (mode === "color") return colorLabel(a.colorIdentity || a.colors || []).localeCompare(colorLabel(b.colorIdentity || b.colors || [])) || a.name.localeCompare(b.name);
  if (mode === "rarity") return rarityRank(a.rarity) - rarityRank(b.rarity) || a.name.localeCompare(b.name);
  return a.name.localeCompare(b.name);
}

function primaryType(card) {
  const typeLine = String(card.typeLine || "");
  return ["Creature", "Instant", "Sorcery", "Artifact", "Enchantment", "Planeswalker", "Battle", "Land"].find((type) => new RegExp(`\\b${type}\\b`, "i").test(typeLine)) || "Other";
}

function deckCategory(card) {
  if (card.category) return card.category;
  if (card.name.toLowerCase() === els.deckBuilderCommanderInput.value.trim().toLowerCase()) return "Commander";
  if (card.isLand || /\bLand\b/i.test(card.typeLine || "")) return "Land";
  return primaryType(card);
}

function colorLabel(colors) {
  const values = Array.isArray(colors) ? colors : [];
  if (!values.length) return "Colorless";
  if (values.length > 1) return values.join("");
  return ({ W: "White", U: "Blue", B: "Black", R: "Red", G: "Green" })[values[0]] || values[0];
}

function rarityRank(rarity) {
  return { common: 1, uncommon: 2, rare: 3, mythic: 4 }[String(rarity || "").toLowerCase()] || 99;
}

function titleCase(value) {
  return String(value || "").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function adjustBuilderCard(cardName, delta) {
  deckBuilderPreviewCollapsed = false;
  const entries = parseDeckBuilderEntries(els.deckBuilderListInput.value);
  const entry = entries.find((candidate) => candidate.name.toLowerCase() === cardName.toLowerCase());
  if (entry) entry.quantity = Math.max(0, entry.quantity + delta);
  else if (delta > 0) entries.push({ quantity: delta, name: cardName });
  els.deckBuilderListInput.value = serializeDeckBuilderEntries(entries);
  invalidateDeckMetadata();
  els.deckBuilderStatus.textContent = "Unsaved changes";
  renderDeckBuilderPreview();
}

function mergeDeckBuilderEntries(currentEntries, importedEntries) {
  const merged = [];
  const byName = new Map();
  [...currentEntries, ...importedEntries].forEach((entry) => {
    const key = (entry.rawName || entry.name).toLowerCase();
    const existing = byName.get(key);
    if (existing) existing.quantity += entry.quantity;
    else {
      const next = { quantity: entry.quantity, name: entry.name, rawName: entry.rawName };
      byName.set(key, next);
      merged.push(next);
    }
  });
  return merged;
}

function openBulkImportDialog() {
  els.bulkImportInput.value = "";
  if (!els.bulkImportDialog.open) els.bulkImportDialog.showModal();
  requestAnimationFrame(() => els.bulkImportInput.focus());
}

function applyBulkDeckImport(mode) {
  const imported = parseDeckBuilderEntries(els.bulkImportInput.value);
  if (!imported.length) {
    els.bulkImportInput.focus();
    return;
  }
  const entries = mode === "append"
    ? mergeDeckBuilderEntries(parseDeckBuilderEntries(els.deckBuilderListInput.value), imported)
    : mergeDeckBuilderEntries([], imported);
  els.deckBuilderListInput.value = serializeDeckBuilderEntries(entries);
  deckBuilderPreviewCollapsed = false;
  invalidateDeckMetadata();
  deckCardSearchResults = [];
  renderDeckCardSearchResults();
  els.deckBuilderStatus.textContent = `${entries.reduce((total, entry) => total + entry.quantity, 0)} cards imported - unsaved changes`;
  renderDeckBuilderPreview();
  els.bulkImportDialog.close();
}

function exportCurrentDeck() {
  exportDeck(currentBuilderDeck());
}

function exportDeck(deck) {
  const name = deck.name || "Untitled deck";
  const text = [
    `Deck: ${name}`,
    deck.commander ? `Commander: ${deck.commander}` : "",
    "",
    deck.decklist,
  ].filter((line, index) => index < 2 ? Boolean(line) : true).join("\n");
  copyText(text);
  els.deckBuilderStatus.textContent = `${name} copied to clipboard.`;
}

function playableDeck(deck = currentBuilderDeck()) {
  const decklist = String(deck?.decklist || "").trim();
  if (!decklist) {
    setAccountStatus("Add cards before starting a game with this deck.", true);
    return null;
  }
  return { ...deck, decklist };
}

function openDeckPlayChoice(deck = currentBuilderDeck()) {
  const playable = playableDeck(deck);
  if (!playable) return;
  pendingPlayDeck = playable;
  els.deckPlayChoiceTitle.textContent = `Play ${playable.name || "Deck"}`;
  els.deckPlayChoiceSummary.textContent = "Create a new game or join an active game by room code with this deck.";
  if (!els.deckPlayChoiceDialog.open) els.deckPlayChoiceDialog.showModal();
}

function openJoinWithDeckDialog(deck = currentBuilderDeck()) {
  const playable = playableDeck(deck);
  if (!playable) return;
  pendingJoinDeck = playable;
  pendingPasswordJoin = null;
  els.joinWithDeckTitle.textContent = "Join with Saved Deck";
  els.joinWithDeckCodeInput.value = "";
  els.joinWithDeckPasswordInput.value = "";
  els.joinWithDeckCodeLabel.classList.remove("hidden");
  els.joinWithDeckCodeInput.required = true;
  els.joinWithDeckPasswordLabel.classList.add("hidden");
  els.joinWithDeckPasswordInput.required = false;
  els.joinWithDeckStatus.textContent = "";
  els.joinWithDeckSummary.textContent = `Join with ${deck.name || "this deck"}.`;
  els.submitJoinWithDeckButton.textContent = "Continue";
  if (!els.joinWithDeckDialog.open) els.joinWithDeckDialog.showModal();
  requestAnimationFrame(() => els.joinWithDeckCodeInput.focus());
}

async function performJoinRoomWithDeck(code, password = "") {
  if (!pendingJoinDeck) return;
  showGameLoading("Joining Game", "Resolving Scryfall cards and preparing your opening hand.");
  const room = await api("/api/rooms/join", {
    method: "POST",
    body: JSON.stringify({
      code,
      password,
      deck: {
        decklist: pendingJoinDeck.decklist,
        commander: pendingJoinDeck.commander || "",
        playerName: accountDisplayName("Player"),
      },
    }),
  });
  storeRoomPassword(room.id, password);
  history.replaceState(null, "", sameOriginRoomUrl(room.selfUrl));
  pendingJoinDeck = null;
  pendingPasswordJoin = null;
  els.joinWithDeckDialog.close();
  await refreshState();
}

async function joinRoomWithDeck() {
  if (!pendingJoinDeck) return;
  const code = els.joinWithDeckCodeInput.value.trim();
  const passwordStep = !els.joinWithDeckPasswordLabel.classList.contains("hidden");
  els.submitJoinWithDeckButton.disabled = true;
  try {
    if (!passwordStep) {
      const check = await api("/api/rooms/check-code", {
        method: "POST",
        body: JSON.stringify({ code }),
      });
      if (check.roomFull) throw new Error("This room is full.");
      if (check.passwordProtected) {
        pendingPasswordJoin = { type: "deck", code };
        els.joinWithDeckTitle.textContent = "Room Password";
        els.joinWithDeckSummary.textContent = `Password required for ${check.name}.`;
        els.joinWithDeckCodeLabel.classList.add("hidden");
        els.joinWithDeckCodeInput.required = false;
        els.joinWithDeckPasswordLabel.classList.remove("hidden");
        els.joinWithDeckPasswordInput.required = true;
        els.joinWithDeckPasswordInput.value = "";
        els.submitJoinWithDeckButton.textContent = "Join Game";
        requestAnimationFrame(() => els.joinWithDeckPasswordInput.focus());
        return;
      }
      await performJoinRoomWithDeck(code, "");
      return;
    }
    await performJoinRoomWithDeck(pendingPasswordJoin?.code || code, els.joinWithDeckPasswordInput.value);
  } catch (error) {
    els.joinWithDeckStatus.textContent = error.message;
  } finally {
    els.submitJoinWithDeckButton.disabled = false;
    hideGameLoading();
  }
}

function renderDeckCardSearchResults() {
  els.deckCardSearchResults.innerHTML = "";
  deckCardSearchResults.forEach((card) => {
    const item = document.createElement("article");
    item.className = "deck-search-result";
    const imageUrl = card.images?.normal || card.images?.small || card.faces?.[0]?.imageUrl || "";
    if (imageUrl) item.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(card.name)}">`;
    const details = document.createElement("div");
    details.innerHTML = `<strong>${escapeHtml(card.name)}</strong><span>${escapeHtml(card.typeLine || "Card")}</span>`;
    const add = document.createElement("button");
    add.type = "button";
    add.textContent = "Add";
    add.addEventListener("click", () => adjustBuilderCard(card.name, 1));
    item.append(details, add);
    els.deckCardSearchResults.append(item);
  });
}

function renderActiveGames() {
  if (!account) return;
  els.activeGamesSummary.textContent = `${activeGames.length} game${activeGames.length === 1 ? "" : "s"}`;
  els.activeGamesList.innerHTML = "";
  if (!activeGames.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "No active games are attached to this account.";
    els.activeGamesList.append(empty);
    return;
  }
  activeGames.forEach((game) => {
    const row = document.createElement("article");
    row.className = "active-game-row";
    const identity = document.createElement("div");
    identity.className = "active-game-identity";
    identity.innerHTML = `<strong>${escapeHtml(game.name)}</strong><span>${game.isHost ? "Host" : "Player"}</span>`;
    const players = document.createElement("div");
    players.className = "active-game-players";
    players.innerHTML = game.players.map((player) => `<span><strong>${escapeHtml(player.name)}</strong>${escapeHtml(player.commander || "No commander")}</span>`).join("");
    const turn = document.createElement("div");
    turn.className = "active-game-turn";
    turn.innerHTML = `<strong>Turn ${Number(game.turnNumber) || 1}</strong><span>${escapeHtml(game.activePlayer)} active</span>`;
    const lastPlayed = document.createElement("time");
    lastPlayed.dateTime = new Date(game.lastPlayedAt).toISOString();
    lastPlayed.textContent = new Date(game.lastPlayedAt).toLocaleString();
    const actions = document.createElement("div");
    actions.className = "active-game-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open";
    open.addEventListener("click", () => {
      history.replaceState(null, "", sameOriginRoomUrl(game.selfUrl));
      refreshState();
    });
    actions.append(open);
    if (game.isHost) {
      const end = document.createElement("button");
      end.type = "button";
      end.className = "danger";
      end.textContent = "End";
      end.addEventListener("click", () => openEndGameDialog(game));
      actions.append(end);
    }
    row.append(identity, players, turn, lastPlayed, actions);
    els.activeGamesList.append(row);
  });
}

function deckListCardCount(decklist) {
  return String(decklist || "")
    .split(/\r?\n/)
    .reduce((total, rawLine) => {
      const line = rawLine.trim();
      if (!line) return total;
      const match = line.match(/^(?:SB:\s*)?(\d+)\s*[xX]?\s+.+$/i);
      return total + (match ? Number(match[1]) || 0 : 0);
    }, 0);
}

function updateSavedDeckCount() {
  const count = deckListCardCount(els.savedDeckListInput.value);
  els.savedDeckCount.textContent = `${count} card${count === 1 ? "" : "s"}`;
}

async function duplicateSavedDeck(deck) {
  try {
    const result = await accountApi("/api/account/decks", {
      method: "POST",
      body: JSON.stringify({ name: `${deck.name} Copy`, commander: deck.commander, decklist: deck.decklist }),
    });
    selectedBuilderDeckId = result.deck.id;
    await loadSavedDecks();
    els.deckBuilderStatus.textContent = "Deck duplicated";
  } catch (error) {
    setAccountStatus(error.message, true);
  }
}

async function saveBuilderDeck() {
  const deck = currentBuilderDeck();
  if (!account) throw new Error("Sign in again before saving this deck.");
  if (!deck.name) {
    openDeckDetailsDialog();
    throw new Error("Deck name is required.");
  }
  if (!deck.decklist) throw new Error("Add at least one card before saving.");
  const path = deck.id ? `/api/account/decks/${encodeURIComponent(deck.id)}` : "/api/account/decks";
  const result = await accountApi(path, {
    method: deck.id ? "PUT" : "POST",
    body: JSON.stringify(deck),
  });
  selectedBuilderDeckId = result.deck.id;
  await loadSavedDecks();
  els.deckBuilderStatus.textContent = "Deck saved";
}

async function searchDeckBuilderCards() {
  const query = els.deckCardSearchInput.value.trim();
  if (query.length < 2) {
    els.deckCardSearchSummary.textContent = "Enter at least two characters.";
    return;
  }
  els.deckCardSearchButton.disabled = true;
  els.deckCardSearchSummary.textContent = "Searching Scryfall...";
  try {
    const result = await api(`/api/scryfall/cards?q=${encodeURIComponent(query)}`);
    deckCardSearchResults = result.cards || [];
    els.deckCardSearchSummary.textContent = `${deckCardSearchResults.length} result${deckCardSearchResults.length === 1 ? "" : "s"}`;
    renderDeckCardSearchResults();
  } catch (error) {
    deckCardSearchResults = [];
    renderDeckCardSearchResults();
    els.deckCardSearchSummary.textContent = error.message;
  } finally {
    els.deckCardSearchButton.disabled = false;
  }
}

function openDeleteDeckDialog(deck) {
  pendingDeleteDeckId = deck.id;
  els.deleteDeckSummary.textContent = `Delete ${deck.name}? This cannot be undone.`;
  els.deleteDeckDialog.showModal();
}

function useSavedDeck(deck) {
  openDeckPlayChoice(deck);
}

async function startGameWithDeck(deck) {
  const playable = playableDeck(deck || currentBuilderDeck());
  if (playable) openCreateMode(playable);
}

function startGameWithoutDeck() {
  pendingGameDeck = null;
  pendingCreateDeck = null;
  els.deckInput.value = "";
  els.setupDeckInput.value = "";
  els.commanderInput.value = "";
  openCreateMode(null);
  setAccountStatus();
}

function openSaveDeckDialog(deck = null, values = null) {
  if (!account) {
    landingView = "account";
    accountMode = "login";
    renderLanding();
    return;
  }
  const source = deck || values || {};
  els.savedDeckIdInput.value = deck?.id || "";
  els.savedDeckNameInput.value = source.name || "";
  els.savedDeckCommanderInput.value = source.commander || "";
  els.savedDeckListInput.value = source.decklist || "";
  updateSavedDeckCount();
  els.saveDeckDialogTitle.textContent = deck ? "Edit Saved Deck" : "Save Deck";
  els.saveDeckDialog.showModal();
  requestAnimationFrame(() => els.savedDeckNameInput.focus());
}

async function loadSavedDecks() {
  if (!account) {
    savedDecks = [];
    return;
  }
  try {
    const result = await accountApi("/api/account/decks");
    savedDecks = result.decks || [];
    if (!deckBuilderInitialized) {
      deckBuilderInitialized = true;
      if (savedDecks[0]) selectBuilderDeck(savedDecks[0]);
      else newBuilderDeck();
    } else if (selectedBuilderDeckId) {
      const selected = savedDecks.find((deck) => deck.id === selectedBuilderDeckId);
      if (selected) selectBuilderDeck(selected);
      else newBuilderDeck();
    }
  } catch (error) {
    if (error.status === 401) clearAccountSession();
    else throw error;
  }
  if (landingView === "account") renderAccountPanel();
}

async function loadActiveGames() {
  if (!account) {
    activeGames = [];
    return;
  }
  try {
    const result = await accountApi("/api/account/games");
    activeGames = result.games || [];
  } catch (error) {
    if (error.status === 401) clearAccountSession();
    else throw error;
  }
  if (landingView === "account") renderActiveGames();
}

async function loadAccountWorkspaceData() {
  await Promise.all([loadSavedDecks(), loadActiveGames()]);
  if (landingView === "account") renderAccountPanel();
}

function setAccountWorkspaceTab(tab) {
  accountWorkspaceTab = tab === "games" ? "games" : "decks";
  renderAccountPanel();
  if (accountWorkspaceTab === "games") loadActiveGames().catch((error) => setAccountStatus(error.message, true));
}

function openEndGameDialog(game) {
  pendingEndGameId = game.id;
  els.endGameSummary.textContent = `End ${game.name}? Players will no longer be able to rejoin this game.`;
  els.endGameDialog.showModal();
}

function clearAccountSession() {
  account = null;
  savedDecks = [];
  activeGames = [];
  selectedBuilderDeckId = "";
  deckBuilderInitialized = false;
  renderAccountControls();
  if (!state) renderLanding();
}

async function restoreAccountSession() {
  try {
    const result = await accountApi("/api/account");
    account = result.account;
    await loadAccountWorkspaceData();
  } catch {
    clearAccountSession();
    return;
  }
  renderAccountControls();
  if (!state) {
    landingView = "account";
    renderLanding();
  }
}

function closeActionPopovers(except = null) {
  [els.dicePopover, els.clockPopover, els.statisticsPopover, els.combatPopover].forEach((popover) => {
    if (popover && popover !== except) popover.classList.add("hidden");
  });
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
    rememberActiveLobby(state);
    stateSnapshot = nextSnapshot;
    queuedRoomUpdateSeq = 0;
    connectRoomEvents();
    render();
  } catch (error) {
    if (["PASSWORD_REQUIRED", "INVALID_PASSWORD"].includes(error.code)) {
      showRoomPasswordDialog(error.message);
      return;
    }
    if (error.code === "GAME_ENDED") {
      state = null;
      closeRoomEvents();
      history.replaceState(null, "", "/");
      landingView = account ? "account" : "menu";
      accountWorkspaceTab = "games";
      if (account) await loadActiveGames();
      setAccountStatus("That game has ended.");
      render();
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

function mergePresencePayload(payload) {
  if (!state || payload?.roomId !== state.id) return;
  if (payload.clock) state.clock = payload.clock;
  const updates = new Map((payload.players || []).map((player) => [Number(player.seat), player]));
  state.players.forEach((player) => {
    const update = updates.get(Number(player.seat));
    if (!update) return;
    player.isPresent = Boolean(update.isPresent);
    player.lastSeenAt = Number(update.lastSeenAt) || 0;
  });
  renderClockPanel();
  renderPresenceIndicators();
}

async function sendPresenceHeartbeat() {
  if (!state) return;
  const roomId = state.id;
  try {
    const response = await fetch(`/api/rooms/${roomId}/presence`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: currentToken, password: roomPasswordFor(roomId) }),
      keepalive: true,
    });
    if (!response.ok) return;
    const payload = await response.json();
    if (state?.id === roomId) mergePresencePayload(payload);
  } catch {
    // The SSE reconnect and next heartbeat will restore presence after a transient failure.
  }
}

function startPresenceHeartbeat() {
  if (presenceHeartbeatTimer) clearInterval(presenceHeartbeatTimer);
  if (clockRenderTimer) clearInterval(clockRenderTimer);
  sendPresenceHeartbeat();
  presenceHeartbeatTimer = setInterval(sendPresenceHeartbeat, 15000);
  clockRenderTimer = setInterval(renderClockPanel, 1000);
}

function stopPresenceHeartbeat() {
  if (presenceHeartbeatTimer) clearInterval(presenceHeartbeatTimer);
  if (clockRenderTimer) clearInterval(clockRenderTimer);
  presenceHeartbeatTimer = null;
  clockRenderTimer = null;
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
  roomEvents.addEventListener("presence-update", (event) => {
    try {
      mergePresencePayload(JSON.parse(event.data || "{}"));
    } catch {
      // Ignore malformed transient events and wait for the next heartbeat.
    }
  });
  roomEvents.onerror = () => {
    scheduleQueuedRefresh(1500);
  };
  startPresenceHeartbeat();
}

function closeRoomEvents() {
  stopPresenceHeartbeat();
  if (roomEvents) roomEvents.close();
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
    dismissedRevealReminderKey = "";
    selectedStatisticsTurnKey = "";
    selectedBattlefieldCards.clear();
    boardReferenceSeat = null;
    lastDiceResult = "No rolls yet";
    if (els.diceResult) els.diceResult.textContent = lastDiceResult;
    document.body.classList.add("dark-mode");
    document.body.classList.add("landing-mode");
    els.setupPanel.classList.remove("hidden");
    renderLanding();
    els.tablePanel.classList.add("hidden");
    els.turnDock.classList.add("hidden");
    els.drawReminder.classList.add("hidden");
    els.untapReminder.classList.add("hidden");
    els.revealReminder.classList.add("hidden");
    els.diceButton.classList.add("hidden");
    els.randomFirstPlayerButton.classList.add("hidden");
    els.clockButton.classList.add("hidden");
    els.statisticsButton.classList.add("hidden");
    els.combatButton.classList.add("hidden");
    els.sidebarToggle.classList.add("hidden");
    els.exitGameButton.classList.add("hidden");
    closeActionPopovers();
    els.diceNotice.classList.add("hidden");
    els.showInvitesButton.classList.add("hidden");
    els.deckSetupOverlay.classList.add("hidden");
    if (els.mulliganDialog.open) els.mulliganDialog.close();
    if (els.recapDialog.open) els.recapDialog.close();
    return;
  }

  document.body.classList.remove("landing-mode");
  applyTheme();
  els.setupPanel.classList.add("hidden");
  els.tablePanel.classList.remove("hidden");
  els.turnDock.classList.remove("hidden");
  syncSidebarState();
  els.roomTitle.textContent = state.name;
  els.currentSeatBadge.textContent = `You are ${state.currentPlayer.name} - Seat ${state.currentSeat + 1}`;
  els.showInvitesButton.classList.remove("hidden");
  els.diceButton.classList.remove("hidden");
  els.clockButton.classList.remove("hidden");
  els.statisticsButton.classList.remove("hidden");
  els.combatButton.classList.toggle("hidden", !state.combatSnapshot?.cards?.length);
  els.sidebarToggle.classList.remove("hidden");
  els.exitGameButton.classList.remove("hidden");
  els.randomFirstPlayerButton.classList.toggle("hidden", !state.currentPlayer.isHost || state.players.length < 2 || state.canRandomizeFirstPlayer === false);
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
  renderRevealReminder();
  renderClockPanel();
  renderStatisticsPanel();
  renderCombatPanel();
  renderAccountControls();
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
  if (!state.currentPlayer.isHost) {
    const empty = document.createElement("p");
    empty.className = "dialog-note";
    empty.textContent = "Only the host can see room access details.";
    els.inviteList.append(empty);
  } else if (state.inviteMode === "code" && state.joinCode) {
    const item = document.createElement("div");
    item.className = "join-code-item";
    const label = document.createElement("div");
    label.className = "invite-seat";
    label.innerHTML = `<strong>Room Code</strong><span>${state.roomFull ? "Room full" : `${state.claimedSeatCount} of ${state.players.length} seats claimed`}</span>`;
    const code = document.createElement("code");
    code.textContent = state.joinCode;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", () => copyText(state.joinCode));
    item.append(label, code, button);
    els.inviteList.append(item);
  } else if (!state.invites.length) {
    const empty = document.createElement("p");
    empty.className = "dialog-note";
    empty.textContent = "This room does not have additional invites.";
    els.inviteList.append(empty);
  } else {
    state.invites.forEach((invite) => {
      const inviteUrl = sameOriginRoomUrl(invite.url, { absolute: true });
      const item = document.createElement("div");
      item.className = "invite-item";
      const label = document.createElement("div");
      label.className = "invite-seat";
      label.innerHTML = `<strong>${escapeHtml(invite.name)}</strong><span>Seat ${invite.seat + 1} board link${invite.claimed ? " - claimed" : ""}</span>`;
      const code = document.createElement("code");
      code.textContent = inviteUrl;
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Copy";
      button.addEventListener("click", () => copyText(inviteUrl));
      item.append(label, code, button);
      els.inviteList.append(item);
    });
  }
  if (forceInviteDialog && state.currentPlayer.isHost) {
    forceInviteDialog = false;
    if (state.invites.length > 0 || state.joinCode) els.inviteDialog.showModal();
  }
}

function applyTheme() {
  const settings = state?.settings || {};
  const theme = settings.theme || (settings.terminalTheme ? "console" : settings.darkMode === false ? "light" : "dark");
  document.body.classList.toggle("dark-mode", theme !== "light");
  document.body.classList.toggle("terminal-table-theme", theme === "console");
}

function renderRoomSettings() {
  if (!els.friendlyMulligansInput || !els.themeSelect) return;
  const settings = state.settings || {};
  els.friendlyMulligansInput.checked = settings.friendlyMulligans !== false;
  els.themeSelect.value = settings.theme || (settings.terminalTheme ? "console" : settings.darkMode === false ? "light" : "dark");
  els.friendlyMulligansInput.disabled = false;
  els.themeSelect.disabled = false;
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
}

function clearDrawButtonFlash() {
  els.drawButton.classList.remove("draw-button-flash");
  els.drawButton.removeAttribute("title");
  els.drawReminder.classList.add("hidden");
  els.drawReminder.classList.remove("draw-button-flash");
}

function dismissDrawReminder() {
  clearDrawButtonFlash();
}

function dismissUntapReminder() {
  els.untapReminder.classList.add("hidden");
}

function displayCardElement(card, label = "Card", zoomZone = "preview") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card preview-only-card";
  const name = cardDisplayName(card);
  if (card?.faceDown && !card?.imageUrl) {
    button.classList.add("face-down-card");
    button.innerHTML = `<div class="face-down-art"><span>MT</span><small>Face down</small></div><strong>${escapeHtml(name)}</strong>`;
  } else if (card?.imageUrl) {
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
    const deckToLoad = pendingGameDeck;
    els.playerNameInput.value = state.currentPlayer.name;
    els.commanderInput.value = deckToLoad?.commander || state.currentPlayer.commander || "";
    els.setupDeckInput.value = deckToLoad?.decklist || "";
    els.deckInput.value = deckToLoad?.decklist || "";
    pendingGameDeck = null;
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

function presenceDotMarkup(player) {
  const online = Boolean(player?.isPresent);
  return `<span class="presence-dot${online ? " online" : ""}" data-presence-seat="${Number(player?.seat) || 0}" title="${online ? "Present" : "Away"}" aria-label="${online ? "Present" : "Away"}"></span>`;
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
  const actions = document.createElement("div");
  actions.className = "combat-snapshot-actions";
  const takeDamage = combatDamageButton(snapshot, true);
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
  actions.append(takeDamage, dismiss);
  ribbon.append(label, cards, actions);
  ribbon.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    openCombatPanel();
  });
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
  item.title = `${cardDisplayName(card)}.${combatDetail} Click to view the full attacking party or hold Control to zoom.`;
  const openParty = (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCombatPanel();
  };
  item.addEventListener("click", openParty);
  item.addEventListener("contextmenu", openParty);
  return item;
}

function combatDamageButton(snapshot, compact = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `combat-damage-button${compact ? " compact" : ""}`;
  const isDefender = Number(snapshot?.defenderSeat) === Number(state?.currentSeat);
  const remainingCards = (snapshot?.cards || []).filter((card) => card.isCreature && !card.damageApplied);
  const includesCommander = remainingCards.some((card) => card.isCommander);
  button.textContent = snapshot?.damageApplied
    ? includesCommander ? "Combat + Commander Applied" : "Damage Applied"
    : compact ? includesCommander ? "Combat + CMD" : "All Damage"
      : includesCommander ? "Take Combat + Commander Damage" : "Take All Damage";
  button.disabled = Boolean(snapshot?.damageApplied) || !remainingCards.length || !isDefender;
  button.title = snapshot?.damageApplied
    ? "Combat damage has already been applied"
    : isDefender ? "Take all remaining attacking power as damage" : "Only the defending player can take this damage";
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (button.disabled) return;
    button.disabled = true;
    try {
      await sendAction("takeCombatDamage");
    } catch (error) {
      alert(error.message);
    }
  });
  return button;
}

function openCombatPanel() {
  if (!state?.combatSnapshot?.cards?.length) return;
  renderCombatPanel();
  closeActionPopovers(els.combatPopover);
  els.combatPopover.classList.remove("hidden");
}

function renderCombatPanel() {
  const snapshot = state?.combatSnapshot;
  if (!snapshot?.cards?.length) {
    els.combatPopover.classList.add("hidden");
    els.combatPopoverCards.innerHTML = "";
    return;
  }
  const totals = snapshot.totals || { creatures: 0, power: 0, toughness: 0 };
  els.combatPopoverTitle.textContent = `${snapshot.attackerName || "Attacker"} Attacking`;
  const commanderDamage = Array.isArray(snapshot.commanderDamage) ? snapshot.commanderDamage : [];
  const damageStatus = snapshot.damageApplied
    ? commanderDamage.length
      ? ` Combat + commander damage applied: ${snapshot.damageTaken || 0} combat; ${commanderDamage.map((entry) => `${entry.damage} from ${entry.name}`).join(", ")}.`
      : ` ${snapshot.damageTaken || 0} combat damage applied.`
    : "";
  els.combatPopoverSummary.textContent = `${snapshot.cards.length} card${snapshot.cards.length === 1 ? "" : "s"} attacking ${snapshot.defenderName || "the defending player"}. Total attacking power: ${totals.power}. Party toughness: ${totals.toughness}.${damageStatus}`;
  els.combatPopoverCards.innerHTML = "";
  snapshot.cards.forEach((card) => {
    const wrap = document.createElement("article");
    wrap.className = `combat-popover-card-wrap${card.isCommander ? " commander-attacker" : ""}${card.damageApplied ? " damage-applied" : ""}`;
    const item = displayCardElement(card, card.typeLine || "Attacker", "combatPanel");
    item.classList.add("combat-popover-card");
    if (card.isCreature) {
      const stats = document.createElement("span");
      stats.className = "combat-popover-card-stats";
      stats.textContent = `${card.totalPower}/${card.totalToughness}`;
      item.append(stats);
    }
    const detail = document.createElement("div");
    detail.className = "combat-popover-card-detail";
    const quantityText = Number(card.quantity) > 1 ? ` across ${card.quantity} creatures` : "";
    const damageText = card.damageApplied ? ` - ${Number(card.damageTaken) || 0} damage taken` : " - right-click to take damage";
    detail.innerHTML = `<strong>${escapeHtml(cardDisplayName(card))}${card.isCommander ? " - Commander" : ""}</strong><span>Calculated total: ${Number(card.totalPower) || 0}/${Number(card.totalToughness) || 0}${quantityText}${card.isCreature ? damageText : ""}</span>`;
    if (card.isCreature) {
      item.addEventListener("contextmenu", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (card.damageApplied || Number(snapshot.defenderSeat) !== Number(state.currentSeat)) return;
        try {
          await sendAction("takeCombatCardDamage", { cardId: card.id });
        } catch (error) {
          alert(error.message);
        }
      });
    }
    wrap.append(item, detail);
    els.combatPopoverCards.append(wrap);
  });
  const replacement = combatDamageButton(snapshot);
  els.combatPopoverDamageButton.replaceWith(replacement);
  replacement.id = "combatPopoverDamageButton";
  els.combatPopoverDamageButton = replacement;
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
  identity.innerHTML = `<strong>${isPlaytest ? "" : presenceDotMarkup(player)}${escapeHtml(player.name)}</strong><span>${escapeHtml(player.commander || (isPlaytest ? "Simulation" : "No commander"))}</span>`;
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

function revealNoticeGroups() {
  if (!state) return [];
  const groups = (state.reveals || [])
    .filter((reveal) => Number(reveal.seat) !== Number(state.currentSeat) && !isRevealHidden(reveal))
    .map((reveal) => ({
      key: `hand:${reveal.id || revealKey(reveal)}`,
      name: reveal.name || `Player ${Number(reveal.seat) + 1}`,
      source: "hand",
      cards: reveal.cards || [],
    }));
  state.players
    .filter((player) => Number(player.seat) !== Number(state.currentSeat) && player.libraryPreview?.mode === "reveal")
    .forEach((player) => {
      const cards = player.libraryPreview?.cards || [];
      if (!cards.length) return;
      groups.push({
        key: `library:${player.seat}:${cards.map((card) => card.id).join(",")}`,
        name: player.name,
        source: "library",
        cards,
      });
    });
  return groups;
}

function revealReminderData() {
  const groups = revealNoticeGroups();
  if (!groups.length) return null;
  return {
    groups,
    key: `${state.id}:${state.currentSeat}:${groups.map((group) => group.key).join("|")}`,
    count: groups.reduce((total, group) => total + group.cards.length, 0),
  };
}

function renderRevealReminder() {
  const notice = revealReminderData();
  const hidden = !notice || notice.key === dismissedRevealReminderKey;
  els.revealReminder.classList.toggle("hidden", hidden);
  if (hidden) return;
  const names = [...new Set(notice.groups.map((group) => group.name))];
  const subject = names.length === 1 ? names[0] : `${names.length} players`;
  els.revealReminderAction.textContent = `${subject} revealed ${notice.count} card${notice.count === 1 ? "" : "s"}`;
}

function openRevealNoticeDialog() {
  const notice = revealReminderData();
  if (!notice) return;
  els.revealNoticeTitle.textContent = "Revealed Cards";
  els.revealNoticeSummary.textContent = `${notice.count} public card${notice.count === 1 ? "" : "s"}`;
  els.revealNoticeCards.innerHTML = "";
  notice.groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "reveal-notice-group";
    const title = document.createElement("h3");
    title.textContent = `${group.name} - ${group.source}`;
    const cards = document.createElement("div");
    cards.className = "reveal-notice-card-grid";
    group.cards.forEach((card) => cards.append(displayCardElement(card, "Revealed", "revealNotice")));
    section.append(title, cards);
    els.revealNoticeCards.append(section);
  });
  if (!els.revealNoticeDialog.open) els.revealNoticeDialog.showModal();
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
    if (state) {
      renderPlayers();
      renderRevealReminder();
    }
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
    <strong>${presenceDotMarkup(player)}${escapeHtml(player.name)}</strong>
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
    const timestamp = Number(entry.timestamp);
    const localTime = Number.isFinite(timestamp) && timestamp > 0
      ? new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : entry.at;
    div.textContent = `${localTime} - ${entry.message}`;
    els.actionLog.append(div);
  });
}

function formatClockDuration(value) {
  const totalSeconds = Math.max(0, Math.floor((Number(value) || 0) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function effectiveClock() {
  const clock = state?.clock || {};
  const playerMs = [...(clock.playerMs || state?.players?.map(() => 0) || [])];
  const now = Date.now();
  const elapsed = clock.running && clock.activePresent
    ? Math.max(0, Math.min(now, Number(clock.activeDeadlineAt) || now) - (Number(clock.snapshotAt) || now))
    : 0;
  const activeSeat = Number(state?.activePlayer) || 0;
  playerMs[activeSeat] = (Number(playerMs[activeSeat]) || 0) + elapsed;
  return {
    ...clock,
    totalMs: (Number(clock.totalMs) || 0) + elapsed,
    currentTurnMs: (Number(clock.currentTurnMs) || 0) + elapsed,
    playerMs,
  };
}

function renderClockPanel() {
  if (!state || !els.clockRailValue) return;
  const clock = effectiveClock();
  els.clockRailValue.textContent = formatClockDuration(clock.currentTurnMs);
  els.totalGameClock.textContent = formatClockDuration(clock.totalMs);
  els.currentTurnClock.textContent = formatClockDuration(clock.currentTurnMs);
  els.playerClockList.innerHTML = "";
  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = `player-clock-row${player.seat === state.activePlayer ? " active" : ""}`;
    row.innerHTML = `
      ${presenceDotMarkup(player)}
      <strong>${escapeHtml(player.name)}</strong>
      <span>${formatClockDuration(clock.playerMs[player.seat])}</span>
    `;
    els.playerClockList.append(row);
  });
  const activeName = state.players[state.activePlayer]?.name || "Active player";
  els.clockStatus.textContent = !clock.running
    ? "Waiting for all players to keep an opening hand."
    : clock.activePresent
      ? `${activeName}'s turn clock is running.`
      : `${activeName}'s turn clock is paused while they are away.`;
}

function renderPresenceIndicators() {
  if (!state) return;
  const bySeat = new Map(state.players.map((player) => [Number(player.seat), Boolean(player.isPresent)]));
  document.querySelectorAll("[data-presence-seat]").forEach((dot) => {
    const online = bySeat.get(Number(dot.dataset.presenceSeat)) === true;
    dot.classList.toggle("online", online);
    dot.title = online ? "Present" : "Away";
    dot.setAttribute("aria-label", dot.title);
  });
}

function statisticsTurnGroups(commits) {
  const groups = new Map();
  commits.forEach((commit) => {
    const key = `${Number(commit.turn) || 1}:${Number(commit.activeSeat) || 0}`;
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        turn: Number(commit.turn) || 1,
        activeSeat: Number(commit.activeSeat) || 0,
        activeName: commit.activeName || state.players[Number(commit.activeSeat)]?.name || "Player",
        events: [],
        logEvents: [],
        reasons: [],
        durationMs: 0,
        committedAt: 0,
      });
    }
    const group = groups.get(key);
    group.events.push(...(commit.events || []));
    group.logEvents.push(...(commit.logEvents || []));
    if (commit.reason) group.reasons.push(commit.reason);
    group.durationMs = Math.max(group.durationMs, Number(commit.turnElapsedMs) || 0);
    group.committedAt = Math.max(group.committedAt, Number(commit.committedAt) || 0);
  });
  groups.forEach((group) => {
    const logBySequence = new Map();
    group.logEvents.forEach((event) => logBySequence.set(Number(event.seq) || `${event.message}:${event.at}`, event));
    group.logEvents = [...logBySequence.values()].sort((a, b) => (Number(a.seq) || 0) - (Number(b.seq) || 0));
  });
  return [...groups.values()].sort((a, b) => a.turn - b.turn || a.activeSeat - b.activeSeat);
}

function statisticBreakdown(events) {
  const spellEvents = events.filter((event) => event.kind !== "mana");
  const manaEvents = events.filter((event) => event.kind === "mana");
  const spellsByType = {};
  const manaByColor = {};
  let manaUsed = 0;
  let manaProduced = 0;
  spellEvents.forEach((event) => {
    const type = event.type || "Other";
    spellsByType[type] = (Number(spellsByType[type]) || 0) + 1;
    manaUsed += Number(event.manaUsed) || 0;
  });
  manaEvents.forEach((event) => {
    const amount = Math.max(0, Number(event.amount) || 0);
    const color = event.color || "Unknown";
    manaProduced += amount;
    manaByColor[color] = (Number(manaByColor[color]) || 0) + amount;
  });
  return { spellEvents, manaEvents, spellsByType, manaByColor, manaUsed, manaProduced };
}

function statisticChips(values, emptyLabel) {
  const entries = Object.entries(values || {}).sort(([a], [b]) => a.localeCompare(b));
  if (!entries.length) return `<span class="statistics-empty-chip">${escapeHtml(emptyLabel)}</span>`;
  return entries.map(([label, value]) => `<span>${escapeHtml(label)} <strong>${Number(value) || 0}</strong></span>`).join("");
}

function renderStatisticsOverview(groups) {
  els.statisticsSummary.innerHTML = "";
  state.players.forEach((player) => {
    const events = groups.flatMap((group) => group.events).filter((event) => Number(event.actorSeat) === Number(player.seat));
    const breakdown = statisticBreakdown(events);
    const activeTime = groups
      .filter((group) => Number(group.activeSeat) === Number(player.seat))
      .reduce((total, group) => total + group.durationMs, 0);
    const card = document.createElement("article");
    card.className = "statistics-player-overview";
    card.innerHTML = `
      <header><strong>${escapeHtml(player.name)}</strong><span>${formatClockDuration(activeTime)}</span></header>
      <div><span>${breakdown.spellEvents.length} spells</span><span>${breakdown.manaUsed} mana used</span><span>${breakdown.manaProduced} mana produced</span></div>
      <div class="statistics-chip-row">${statisticChips(breakdown.spellsByType, "No spells recorded")}</div>
    `;
    els.statisticsSummary.append(card);
  });
}

function renderStatisticsTurnDetail(group) {
  els.statisticsTurnDetail.innerHTML = "";
  if (!group) {
    els.statisticsTurnDetail.innerHTML = '<p class="utility-note">Select a finalized turn below. Statistics finalize when priority or the turn is passed.</p>';
    return;
  }
  const breakdown = statisticBreakdown(group.events);
  const detail = document.createElement("section");
  detail.className = "statistics-turn-report";
  detail.innerHTML = `
    <header><div><h3>Turn ${group.turn} - ${escapeHtml(group.activeName)}</h3><span>${escapeHtml([...new Set(group.reasons)].join(", ") || "checkpoint")}</span></div><strong>${formatClockDuration(group.durationMs)}</strong></header>
    <div class="statistics-report-tiles">
      <div class="statistic-tile"><strong>${breakdown.spellEvents.length}</strong><span>Spells played</span></div>
      <div class="statistic-tile"><strong>${breakdown.manaUsed}</strong><span>Mana used</span></div>
      <div class="statistic-tile"><strong>${breakdown.manaProduced}</strong><span>Mana produced</span></div>
    </div>
    <div class="statistics-report-section"><strong>Card types</strong><div class="statistics-chip-row">${statisticChips(breakdown.spellsByType, "No spells recorded")}</div></div>
    <div class="statistics-report-section"><strong>Mana colors</strong><div class="statistics-chip-row">${statisticChips(breakdown.manaByColor, "No mana recorded")}</div></div>
    <div class="statistics-action-list"></div>
  `;
  const actionList = detail.querySelector(".statistics-action-list");
  if (!group.logEvents.length) {
    actionList.innerHTML = '<p class="utility-note">No logged actions in this checkpoint.</p>';
  } else {
    group.logEvents.forEach((event) => {
      const row = document.createElement("div");
      row.innerHTML = `<time>${escapeHtml(event.at || "")}</time><span><strong>${escapeHtml(event.actorName || "Player")}</strong> ${escapeHtml(event.message || "Action recorded")}</span>`;
      actionList.append(row);
    });
  }
  els.statisticsTurnDetail.append(detail);
}

function renderStatisticsPanel() {
  if (!state || !els.statisticsSummary) return;
  const commits = Array.isArray(state.statistics?.commits) ? state.statistics.commits : [];
  const groups = statisticsTurnGroups(commits);
  renderStatisticsOverview(groups);
  if (!groups.some((group) => group.key === selectedStatisticsTurnKey)) {
    const currentKey = `${Number(state.turnNumber) || 1}:${Number(state.activePlayer) || 0}`;
    selectedStatisticsTurnKey = groups.some((group) => group.key === currentKey) ? currentKey : groups.at(-1)?.key || "";
  }
  renderStatisticsTurnDetail(groups.find((group) => group.key === selectedStatisticsTurnKey));
  els.statisticsTurnLog.innerHTML = "";
  if (!groups.length) {
    els.statisticsTurnLog.innerHTML = '<p class="utility-note">Statistics finalize when priority or the turn is passed.</p>';
    return;
  }
  [...groups].reverse().slice(0, 40).forEach((group) => {
    const breakdown = statisticBreakdown(group.events);
    const entry = document.createElement("button");
    entry.type = "button";
    entry.className = `statistics-log-entry${group.key === selectedStatisticsTurnKey ? " selected" : ""}`;
    entry.innerHTML = `
      <strong>Turn ${group.turn} - ${escapeHtml(group.activeName)}</strong>
      <span>${breakdown.spellEvents.length} spells, ${breakdown.manaProduced} mana produced, ${formatClockDuration(group.durationMs)}</span>
      <small>${group.logEvents.length} recorded action${group.logEvents.length === 1 ? "" : "s"}</small>
    `;
    entry.addEventListener("click", () => {
      selectedStatisticsTurnKey = group.key;
      renderStatisticsPanel();
    });
    els.statisticsTurnLog.append(entry);
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
  const editable = player.seat === state.currentSeat;
  const chips = playerCounterChips(player.playerCounters, editable, player.seat);
  wrap.append(chips);
  if (!editable) return wrap;

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

function playerCounterChips(counters = {}, editable = false, seat = null) {
  const chips = document.createElement("div");
  chips.className = "player-counter-chips";
  const entries = Object.entries(counters || {}).filter(([, value]) => Number(value) > 0);
  if (!entries.length) {
    if (!editable) return chips;
    const empty = document.createElement("span");
    empty.className = "player-counter-empty";
    empty.textContent = "No counters";
    chips.append(empty);
    return chips;
  }
  entries.forEach(([name, value]) => {
    const chip = document.createElement(editable ? "div" : "span");
    chip.className = `player-counter-chip${editable ? " editable" : ""}`;
    if (!editable) {
      chip.textContent = `${name}: ${value}`;
      chips.append(chip);
      return;
    }
    const label = document.createElement("span");
    label.className = "player-counter-chip-name";
    label.textContent = name;
    const minus = playerCounterButton("-", () => sendAction("playerCounter", { seat, counterName: name, delta: -1 }));
    const number = document.createElement("strong");
    number.textContent = String(value);
    const plus = playerCounterButton("+", () => sendAction("playerCounter", { seat, counterName: name, delta: 1 }));
    chip.append(label, minus, number, plus);
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
  if (card.faceDown && !card.imageUrl) {
    button.classList.add("face-down-card");
    button.innerHTML = `<div class="face-down-art"><span>MT</span><small>Face down</small></div><strong>${escapeHtml(displayName)}</strong>`;
  } else if (card.imageUrl) {
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
        if (event.shiftKey) {
          if (selectedBattlefieldCards.has(card.id)) selectedBattlefieldCards.delete(card.id);
          else selectedBattlefieldCards.add(card.id);
          renderPlayers();
          return;
        }
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
    if (zone === "hand" && canActNow() && seat === state.currentSeat) {
      moveCard(state.currentSeat, "hand", "battlefield", card.id);
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
  if (!card.isToken && !card.faceDown && !counterText && quantity <= 1) return;
  const wrap = document.createElement("div");
  wrap.className = "card-badges";
  if (card.isToken) {
    const span = document.createElement("span");
    span.className = "token-badge";
    span.textContent = "Token";
    wrap.append(span);
  }
  if (card.faceDown) {
    const span = document.createElement("span");
    span.className = "face-down-badge";
    span.textContent = "Face Down";
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
    additive: event.shiftKey,
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
  if (!drag.additive) selectedBattlefieldCards.clear();
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
  const zoomHost = cardNode.closest("dialog[open]") || document.body;
  if (zoomOverlay.parentElement !== zoomHost) zoomHost.append(zoomOverlay);
  zoomOverlay.innerHTML = "";
  const clone = cardNode.cloneNode(true);
  clone.removeAttribute("id");
  clone.removeAttribute("draggable");
  clone.style.left = "";
  clone.style.top = "";
  clone.style.zIndex = "";
  clone.classList.remove("dragging", "free-card", "combat-snapshot-card", "revealed-library-card", "tapped");
  clone.classList.add("zoom-card-clone");
  zoomOverlay.append(clone);
  zoomOverlay.classList.remove("hidden");
  positionCardZoom(cardNode);
}

function positionCardZoom(cardNode) {
  if (!zoomOverlay || zoomOverlay.classList.contains("hidden") || !cardNode) return;
  const rect = cardNode.getBoundingClientRect();
  const margin = 10;
  const standard = currentBattlefieldCardSize();
  let width = standard.width * zoomScale;
  let height = standard.height * zoomScale;
  const fitScale = Math.min(1, (window.innerWidth - margin * 2) / width, (window.innerHeight - margin * 2) / height);
  width *= fitScale;
  height *= fitScale;
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
    ["Peek Top Card", () => sendAction("libraryAction", { mode: "peek" })],
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
    actions.push([card.faceDown ? "Turn Face Up" : "Turn Face Down", () => sendAction("toggleFaceDown", { zone: "hand", cardId: card.id })]);
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
      actions.push([card.faceDown ? "Turn Face Up" : "Turn Face Down", () => sendAction("toggleFaceDown", { zone, cardId: card.id })]);
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
    if (zone === "commanderZone") actions.push([card.faceDown ? "Turn Face Up" : "Turn Face Down", () => sendAction("toggleFaceDown", { zone, cardId: card.id })]);
    if (zone !== "battlefield") actions.push(["To Battlefield", () => moveCard(seat, zone, "battlefield", card.id)]);
    if (zone !== "commanderZone" && isCommanderForSeat(card, seat)) actions.push(["To Commander", () => moveCard(seat, zone, "commanderZone", card.id)]);
    actions.push(["To Graveyard", () => moveCard(seat, zone, "graveyard", card.id)]);
    actions.push(["To Exile", () => moveCard(seat, zone, "exile", card.id)]);
  }

  if (zone === "graveyard" || zone === "exile") {
    actions.push([card.faceDown ? "Turn Face Up" : "Turn Face Down", () => sendAction("toggleFaceDown", { zone, cardId: card.id })]);
    actions.push(["To Battlefield", () => moveCard(seat, zone, "battlefield", card.id)]);
    if (isCommanderForSeat(card, seat)) actions.push(["To Commander", () => moveCard(seat, zone, "commanderZone", card.id)]);
  }

  if (["hand", "commanderZone", "battlefield", "graveyard", "exile"].includes(zone)) {
    actions.push(["Exile Face Down", () => sendAction("exileFaceDown", { fromZone: zone, cardId: card.id })]);
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

els.createGameButton.addEventListener("click", () => {
  openCreateMode(null);
});

els.backFromCreateModeButton.addEventListener("click", () => {
  pendingCreateDeck = null;
  landingView = account ? "account" : "menu";
  renderLanding();
});

els.createLiveGameButton.addEventListener("click", () => openLiveGameSetup(pendingCreateDeck));
els.createSoloGameButton.addEventListener("click", async () => {
  try {
    await createGameFromSetup({ solo: true, deck: pendingCreateDeck });
  } catch (error) {
    setAccountStatus(error.message, true);
  }
});

els.joinGameButton.addEventListener("click", () => {
  landingView = "join";
  setJoinRoomStatus();
  setJoinPasswordVisible(false);
  renderLanding();
  requestAnimationFrame(() => els.joinCodeInput.focus());
});

els.loginButton.addEventListener("click", () => {
  landingView = "account";
  setAccountStatus();
  renderLanding();
});

els.backToLandingButton.addEventListener("click", () => {
  landingView = account ? "account" : "menu";
  renderLanding();
});

els.backFromJoinButton.addEventListener("click", () => {
  landingView = account ? "account" : "menu";
  setJoinRoomStatus();
  renderLanding();
});

els.backFromLobbiesButton.addEventListener("click", () => {
  landingView = "menu";
  renderLanding();
});

els.createFromLobbiesButton.addEventListener("click", () => {
  openCreateMode(null);
});

els.backFromAccountButton.addEventListener("click", () => {
  landingView = "menu";
  setAccountStatus();
  renderLanding();
});

els.showLoginButton.addEventListener("click", () => {
  accountMode = "login";
  setAccountStatus();
  renderAccountPanel();
});

els.showRegisterButton.addEventListener("click", () => {
  accountMode = "register";
  setAccountStatus();
  renderAccountPanel();
});

async function completeAccountAuthentication(path, username, password, extra = {}) {
  const result = await api(path, {
    method: "POST",
    body: JSON.stringify({ username, password, ...extra }),
  });
  account = result.account;
  accountWorkspaceTab = "decks";
  deckBuilderInitialized = false;
  await loadAccountWorkspaceData();
  accountMode = "login";
  setAccountStatus("Signed in.");
  renderLanding();
}

els.loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await completeAccountAuthentication("/api/accounts/login", els.loginUsernameInput.value, els.loginPasswordInput.value);
    els.loginPasswordInput.value = "";
  } catch (error) {
    setAccountStatus(error.message, true);
  }
});

els.registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    if (els.registerPasswordInput.value !== els.registerConfirmPasswordInput.value) {
      throw new Error("Passwords do not match.");
    }
    await completeAccountAuthentication("/api/accounts/register", els.registerUsernameInput.value, els.registerPasswordInput.value, {
      firstName: els.registerFirstNameInput.value,
      lastName: els.registerLastNameInput.value,
      email: els.registerEmailInput.value,
      confirmPassword: els.registerConfirmPasswordInput.value,
    });
    els.registerFirstNameInput.value = "";
    els.registerLastNameInput.value = "";
    els.registerEmailInput.value = "";
    els.registerPasswordInput.value = "";
    els.registerConfirmPasswordInput.value = "";
  } catch (error) {
    setAccountStatus(error.message, true);
  }
});

els.logoutButton.addEventListener("click", async () => {
  try {
    await accountApi("/api/account/logout", { method: "POST", body: "{}" });
  } catch {
    // Local logout still clears an expired or unreachable session.
  }
  clearAccountSession();
  accountMode = "login";
  setAccountStatus("Logged out.");
  renderLanding();
});

els.accountDecksTab.addEventListener("click", () => setAccountWorkspaceTab("decks"));
els.accountGamesTab.addEventListener("click", () => setAccountWorkspaceTab("games"));
els.accountStartGameButton.addEventListener("click", startGameWithoutDeck);
els.collapseDeckRailButton.addEventListener("click", () => {
  deckRailCollapsed = !deckRailCollapsed;
  localStorage.setItem("mage-table-deck-rail-collapsed", deckRailCollapsed ? "1" : "0");
  renderAccountPanel();
});
els.newSavedDeckButton.addEventListener("click", newBuilderDeck);
els.bulkImportDeckButton.addEventListener("click", openBulkImportDialog);
if (els.deckContextButton) els.deckContextButton.addEventListener("click", () => openDeckActionDialog(currentBuilderDeck()));
els.deckStatsButton.addEventListener("click", () => openDeckStatsDialog(currentBuilderDeck()));
if (els.toggleMaybeBoardButton) els.toggleMaybeBoardButton.addEventListener("click", () => {
  deckMaybeBoardOpen = !deckMaybeBoardOpen;
  localStorage.setItem("mage-table-maybeboard-open", deckMaybeBoardOpen ? "1" : "0");
  renderAccountPanel();
});
els.closeBulkImportButton.addEventListener("click", () => els.bulkImportDialog.close());
els.appendBulkImportButton.addEventListener("click", () => applyBulkDeckImport("append"));
els.replaceBulkImportButton.addEventListener("click", () => applyBulkDeckImport("replace"));
els.bulkImportForm.addEventListener("submit", (event) => event.preventDefault());
els.closeDeckDetailsButton.addEventListener("click", () => els.deckDetailsDialog.close());
els.deckDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value !== "save") {
    els.deckDetailsDialog.close();
    return;
  }
  els.deckBuilderNameInput.value = els.deckDetailsNameInput.value.trim();
  els.deckBuilderCommanderInput.value = els.deckDetailsCommanderInput.value.trim();
  els.deckBuilderStatus.textContent = "Unsaved changes";
  els.deckDetailsDialog.close();
  renderDeckBuilderPreview();
});
els.closeDeckActionButton.addEventListener("click", () => els.deckActionDialog.close());
els.closeDeckStatsButton.addEventListener("click", (event) => {
  event.preventDefault();
  els.deckStatsDialog.close();
});
["change", "input", "click"].forEach((eventName) => els.deckStatsProductionSelect.addEventListener(eventName, renderDeckStatsContent));
els.savedDeckSearchInput.addEventListener("input", renderSavedDecks);
els.deckBuilderListInput.addEventListener("input", () => {
  els.deckBuilderStatus.textContent = "Unsaved changes";
  invalidateDeckMetadata();
  renderDeckBuilderPreview();
});
els.deckBuilderNameInput.addEventListener("input", () => {
  els.deckBuilderStatus.textContent = "Unsaved changes";
});
els.deckBuilderCommanderInput.addEventListener("input", () => {
  els.deckBuilderStatus.textContent = "Unsaved changes";
  renderDeckBuilderPreview();
});
els.deckBuilderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = event.submitter || els.saveBuilderDeckButton;
  if (submit) submit.disabled = true;
  try {
    await saveBuilderDeck();
  } catch (error) {
    els.deckBuilderStatus.textContent = error.message;
  } finally {
    if (submit) submit.disabled = false;
  }
});
els.deckGroupSelect.addEventListener("change", renderDeckBuilderPreview);
els.deckSortSelect.addEventListener("change", renderDeckBuilderPreview);
els.deckViewModeSelect.addEventListener("change", renderDeckBuilderPreview);
els.deckVisualSearchInput.addEventListener("input", renderDeckBuilderPreview);
if (els.deckViewScaleInput) els.deckViewScaleInput.addEventListener("input", applyDeckViewScale);
if (els.applyDeckViewButton) els.applyDeckViewButton.addEventListener("click", renderDeckBuilderPreview);
els.deckMaybeBoardInput.addEventListener("input", saveMaybeBoard);
els.deckCardSearchButton.addEventListener("click", searchDeckBuilderCards);
els.deckCardSearchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  searchDeckBuilderCards();
});
els.refreshActiveGamesButton.addEventListener("click", async () => {
  els.refreshActiveGamesButton.disabled = true;
  try {
    await loadActiveGames();
  } catch (error) {
    setAccountStatus(error.message, true);
  } finally {
    els.refreshActiveGamesButton.disabled = false;
  }
});
els.savedDeckListInput.addEventListener("input", updateSavedDeckCount);
els.closeSaveDeckButton.addEventListener("click", () => els.saveDeckDialog.close());
els.saveDeckDialog.addEventListener("cancel", (event) => event.preventDefault());
els.closeDeleteDeckButton.addEventListener("click", () => {
  pendingDeleteDeckId = "";
  els.deleteDeckDialog.close();
});
els.deleteDeckDialog.addEventListener("cancel", (event) => event.preventDefault());

els.deleteDeckForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value !== "delete" || !pendingDeleteDeckId) return;
  const deckId = pendingDeleteDeckId;
  try {
    const deletedSelectedDeck = selectedBuilderDeckId === deckId;
    await accountApi(`/api/account/decks/${encodeURIComponent(deckId)}`, { method: "DELETE" });
    pendingDeleteDeckId = "";
    if (deletedSelectedDeck) selectedBuilderDeckId = "";
    els.deleteDeckDialog.close();
    await loadSavedDecks();
    if (deletedSelectedDeck) {
      if (savedDecks[0]) selectBuilderDeck(savedDecks[0]);
      else newBuilderDeck();
    }
    setAccountStatus("Deck deleted.");
  } catch (error) {
    setAccountStatus(error.message, true);
  }
});

els.closeEndGameButton.addEventListener("click", () => {
  pendingEndGameId = "";
  els.endGameDialog.close();
});
els.endGameDialog.addEventListener("cancel", (event) => event.preventDefault());
els.endGameForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    pendingEndGameId = "";
    els.endGameDialog.close();
    return;
  }
  if (event.submitter?.value !== "end" || !pendingEndGameId) return;
  els.confirmEndGameButton.disabled = true;
  try {
    await accountApi(`/api/account/games/${encodeURIComponent(pendingEndGameId)}/end`, { method: "POST", body: "{}" });
    pendingEndGameId = "";
    els.endGameDialog.close();
    await loadActiveGames();
    setAccountStatus("Game ended.");
  } catch (error) {
    setAccountStatus(error.message, true);
  } finally {
    els.confirmEndGameButton.disabled = false;
  }
});

els.roomForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = els.roomForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    await createGameFromSetup({ solo: els.singlePlayerInput.checked, deck: pendingCreateDeck });
  } catch (error) {
    alert(`Could not create the room: ${error.message}`);
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

els.joinRoomForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  els.joinRoomSubmitButton.disabled = true;
  setJoinRoomStatus();
  try {
    const code = els.joinCodeInput.value;
    const check = await api("/api/rooms/check-code", {
      method: "POST",
      body: JSON.stringify({ code }),
    });
    if (check.roomFull) throw new Error("This room is full.");
    if (check.passwordProtected) {
      pendingPasswordJoin = { type: "code", code };
      setJoinRoomStatus();
      showRoomPasswordDialog(`Password required for ${check.name}.`);
      return;
    }
    await performJoinRoomByCode(code, "");
  } catch (error) {
    setJoinRoomStatus(error.message, true);
  } finally {
    els.joinRoomSubmitButton.disabled = false;
  }
});

els.joinCodeInput.addEventListener("input", () => {
  els.joinCodeInput.value = els.joinCodeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
  setJoinPasswordVisible(false);
  els.joinCodePasswordInput.value = "";
  setJoinRoomStatus();
});

els.joinCodePasswordInput.addEventListener("input", () => setJoinRoomStatus());

els.closeJoinWithDeckButton.addEventListener("click", () => els.joinWithDeckDialog.close());
els.closeDeckPlayChoiceButton.addEventListener("click", () => els.deckPlayChoiceDialog.close());
els.deckPlayChoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "create") {
    const deck = pendingPlayDeck;
    pendingPlayDeck = null;
    els.deckPlayChoiceDialog.close();
    openCreateMode(deck);
    return;
  }
  if (event.submitter?.value === "join") {
    const deck = pendingPlayDeck;
    pendingPlayDeck = null;
    els.deckPlayChoiceDialog.close();
    openJoinWithDeckDialog(deck);
    return;
  }
  pendingPlayDeck = null;
  els.deckPlayChoiceDialog.close();
});
els.joinWithDeckCodeInput.addEventListener("input", () => {
  els.joinWithDeckCodeInput.value = els.joinWithDeckCodeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
  els.joinWithDeckStatus.textContent = "";
});
els.joinWithDeckForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value !== "join") {
    els.joinWithDeckDialog.close();
    return;
  }
  await joinRoomWithDeck();
});

els.inviteMethodInputs.forEach((input) => input.addEventListener("change", updateRoomCreationControls));

els.newRoomButton.addEventListener("click", () => {
  if (!state) {
    landingView = "create";
    renderLanding();
    return;
  }
  els.newLobbyDialog.returnValue = "";
  els.newLobbyDialog.showModal();
});

els.newLobbyDialog.addEventListener("close", () => {
  if (els.newLobbyDialog.returnValue === "confirm") leaveGameForLanding("create");
});

els.exitGameButton.addEventListener("click", () => {
  if (currentSeatIsGuest()) {
    openGuestLeaveDialog();
    return;
  }
  accountWorkspaceTab = "games";
  leaveGameForLanding("account");
  loadActiveGames().catch((error) => setAccountStatus(error.message, true));
});

els.closeGuestLeaveButton.addEventListener("click", () => els.guestLeaveDialog.close());
els.guestLeaveDialog.addEventListener("cancel", (event) => event.preventDefault());
els.guestLeaveForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value !== "leave") {
    els.guestLeaveDialog.close();
    return;
  }
  await confirmGuestLeave();
});

els.singlePlayerInput.addEventListener("change", () => {
  updateRoomCreationControls();
});

els.roomPasswordForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    pendingPasswordJoin = null;
    els.roomPasswordDialog.close();
    return;
  }
  const password = els.joinRoomPasswordInput.value;
  els.submitRoomPasswordButton.disabled = true;
  els.roomPasswordDialog.close();
  try {
    if (pendingPasswordJoin?.type === "code") {
      const code = pendingPasswordJoin.code;
      pendingPasswordJoin = null;
      await performJoinRoomByCode(code, password);
      return;
    }
    const roomId = roomIdFromUrl();
    storeRoomPassword(roomId, password);
    await refreshState();
  } catch (error) {
    setJoinRoomStatus(error.message, true);
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
  history.replaceState(null, "", sameOriginRoomUrl(invite.url));
  refreshState();
});

els.endTurnButton.addEventListener("click", () => sendAction("turn"));
els.instantButton.addEventListener("click", () => sendAction("takePriority"));
els.combatPassButton.addEventListener("click", () => sendCombatPass());
els.passPriorityButton.addEventListener("click", () => sendAction("passPriority"));

els.diceButton.addEventListener("click", () => {
  const opening = els.dicePopover.classList.contains("hidden");
  closeActionPopovers(opening ? els.dicePopover : null);
  els.dicePopover.classList.toggle("hidden", !opening);
});

els.clockButton.addEventListener("click", () => {
  const opening = els.clockPopover.classList.contains("hidden");
  closeActionPopovers(opening ? els.clockPopover : null);
  els.clockPopover.classList.toggle("hidden", !opening);
  if (opening) renderClockPanel();
});

els.statisticsButton.addEventListener("click", () => {
  const opening = els.statisticsPopover.classList.contains("hidden");
  closeActionPopovers(opening ? els.statisticsPopover : null);
  els.statisticsPopover.classList.toggle("hidden", !opening);
  if (opening) renderStatisticsPanel();
});

els.combatButton.addEventListener("click", () => {
  const opening = els.combatPopover.classList.contains("hidden");
  closeActionPopovers(opening ? els.combatPopover : null);
  els.combatPopover.classList.toggle("hidden", !opening);
  if (opening) renderCombatPanel();
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

els.closeClockButton.addEventListener("click", () => {
  els.clockPopover.classList.add("hidden");
});

els.closeStatisticsButton.addEventListener("click", () => {
  els.statisticsPopover.classList.add("hidden");
});

els.closeCombatButton.addEventListener("click", () => {
  els.combatPopover.classList.add("hidden");
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

els.saveCurrentDeckButton.addEventListener("click", () => {
  const commander = state?.currentPlayer?.commander || els.commanderInput.value || "";
  openSaveDeckDialog(null, {
    name: commander ? `${commander} Deck` : "My Deck",
    commander,
    decklist: els.deckInput.value || els.setupDeckInput.value,
  });
});

els.saveDeckForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    els.saveDeckDialog.close();
    return;
  }
  const deckId = els.savedDeckIdInput.value;
  const path = deckId ? `/api/account/decks/${encodeURIComponent(deckId)}` : "/api/account/decks";
  try {
    await accountApi(path, {
      method: deckId ? "PUT" : "POST",
      body: JSON.stringify({
        name: els.savedDeckNameInput.value,
        commander: els.savedDeckCommanderInput.value,
        decklist: els.savedDeckListInput.value,
      }),
    });
    await loadSavedDecks();
    els.saveDeckDialog.close();
    if (landingView === "account") setAccountStatus("Deck saved.");
  } catch (error) {
    if (error.status === 401) {
      clearAccountSession();
      els.saveDeckDialog.close();
      landingView = "account";
      setAccountStatus("Your session expired. Log in again.", true);
      renderLanding();
      return;
    }
    alert(error.message);
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

els.drawReminderAction.addEventListener("click", () => {
  if (els.drawButton.disabled) return;
  clearDrawButtonFlash();
  sendAction("draw");
});

els.dismissDrawButton.addEventListener("click", dismissDrawReminder);

els.untapAllButton.addEventListener("click", async () => {
  dismissUntapReminder();
  await sendAction("untapAll");
});

els.dismissUntapButton.addEventListener("click", dismissUntapReminder);

els.revealReminderAction.addEventListener("click", openRevealNoticeDialog);
els.dismissRevealReminderButton.addEventListener("click", () => {
  dismissedRevealReminderKey = revealReminderData()?.key || "";
  renderRevealReminder();
});

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
    theme: els.themeSelect.value,
    darkMode: els.themeSelect.value !== "light",
    terminalTheme: els.themeSelect.value === "console",
  });
}

if (els.friendlyMulligansInput) els.friendlyMulligansInput.addEventListener("change", updateRoomSettings);
if (els.themeSelect) els.themeSelect.addEventListener("change", updateRoomSettings);

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
  const popoverTargets = [
    [els.dicePopover, "#dicePopover", "#diceButton"],
    [els.clockPopover, "#clockPopover", "#clockButton"],
    [els.statisticsPopover, "#statisticsPopover", "#statisticsButton"],
    [els.combatPopover, "#combatPopover", "#combatButton"],
  ];
  popoverTargets.forEach(([popover, popoverSelector, buttonSelector]) => {
    if (!popover.classList.contains("hidden") && !event.target.closest(popoverSelector) && !event.target.closest(buttonSelector)) {
      popover.classList.add("hidden");
    }
  });
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
    if (dialog === els.saveDeckDialog || dialog === els.deleteDeckDialog) return;
    if (dialog === els.guestLeaveDialog) return;
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

window.addEventListener("beforeunload", (event) => {
  if (state && !els.recapDialog.open) {
    localStorage.setItem(recapStorageKey(), String(latestEventSeq()));
  }
  if (!state || !currentSeatIsGuest()) return;
  event.preventDefault();
  event.returnValue = "";
});

window.addEventListener("pagehide", () => {
  sendGuestHostLeaveBeacon();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && state && !els.recapDialog.open) {
    localStorage.setItem(recapStorageKey(), String(latestEventSeq()));
  }
  if (document.visibilityState === "visible" && state) sendPresenceHeartbeat();
});

loadCardScale();
loadOpacitySettings();
renderKeybindSettings();
if (els.playerCountInput && els.singlePlayerInput) {
  els.playerCountInput.disabled = els.singlePlayerInput.checked;
}
refreshState();
restoreAccountSession();
startPolling();
