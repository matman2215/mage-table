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
  accountFriendsTab: document.querySelector("#accountFriendsTab"),
  accountCollectionsTab: document.querySelector("#accountCollectionsTab"),
  accountStartGameButton: document.querySelector("#accountStartGameButton"),
  accountDecksView: document.querySelector("#accountDecksView"),
  accountGamesView: document.querySelector("#accountGamesView"),
  accountFriendsView: document.querySelector("#accountFriendsView"),
  accountCollectionsView: document.querySelector("#accountCollectionsView"),
  newSavedDeckButton: document.querySelector("#newSavedDeckButton"),
  collapseDeckRailButton: document.querySelector("#collapseDeckRailButton"),
  deckHistoryButton: document.querySelector("#deckHistoryButton"),
  closeDeckHistoryButton: document.querySelector("#closeDeckHistoryButton"),
  deckHistoryRail: document.querySelector("#deckHistoryRail"),
  deckHistorySummary: document.querySelector("#deckHistorySummary"),
  deckHistoryList: document.querySelector("#deckHistoryList"),
  savedDeckSearchInput: document.querySelector("#savedDeckSearchInput"),
  savedDeckSummary: document.querySelector("#savedDeckSummary"),
  savedDeckList: document.querySelector("#savedDeckList"),
  deckBuilderForm: document.querySelector("#deckBuilderForm"),
  deckBuilderTitle: document.querySelector("#deckBuilderTitle"),
  deckBuilderPrice: document.querySelector("#deckBuilderPrice"),
  deckBuilderCount: document.querySelector("#deckBuilderCount"),
  deckBuilderNameInput: document.querySelector("#deckBuilderNameInput"),
  deckBuilderCommanderInput: document.querySelector("#deckBuilderCommanderInput"),
  deckBuilderListInput: document.querySelector("#deckBuilderListInput"),
  deckBuilderPreview: document.querySelector("#deckBuilderPreview"),
  deckBuilderStatus: document.querySelector("#deckBuilderStatus"),
  bulkImportDeckButton: document.querySelector("#bulkImportDeckButton"),
  deckBuilderSettingsButton: document.querySelector("#deckBuilderSettingsButton"),
  deckContextButton: document.querySelector("#deckContextButton"),
  deckStatsButton: document.querySelector("#deckStatsButton"),
  saveBuilderDeckButton: document.querySelector("#saveBuilderDeckButton"),
  deckGroupSelect: document.querySelector("#deckGroupSelect"),
  deckSortSelect: document.querySelector("#deckSortSelect"),
  deckViewModeSelect: document.querySelector("#deckViewModeSelect"),
  deckVisualSearchInput: document.querySelector("#deckVisualSearchInput"),
  deckViewScaleInput: document.querySelector("#deckViewScaleInput"),
  deckViewScaleTicks: document.querySelector("#deckViewScaleTicks"),
  deckPriceSourceSelect: document.querySelector("#deckPriceSourceSelect"),
  deckHeaderPriceSourceSelect: document.querySelector("#deckHeaderPriceSourceSelect"),
  applyDeckViewButton: document.querySelector("#applyDeckViewButton"),
  toggleMaybeBoardButton: document.querySelector("#toggleMaybeBoardButton"),
  closeMaybeBoardButton: document.querySelector("#closeMaybeBoardButton"),
  deckMaybeBoardRail: document.querySelector("#deckMaybeBoardRail"),
  deckMaybeBoardInput: document.querySelector("#deckMaybeBoardInput"),
  deckCardSearchInput: document.querySelector("#deckCardSearchInput"),
  deckCardSearchButton: document.querySelector("#deckCardSearchButton"),
  dismissDeckCardSearchButton: document.querySelector("#dismissDeckCardSearchButton"),
  deckCardSearchSummary: document.querySelector("#deckCardSearchSummary"),
  deckCardSearchResults: document.querySelector("#deckCardSearchResults"),
  activeGamesSummary: document.querySelector("#activeGamesSummary"),
  activeGamesList: document.querySelector("#activeGamesList"),
  refreshActiveGamesButton: document.querySelector("#refreshActiveGamesButton"),
  friendsSummary: document.querySelector("#friendsSummary"),
  friendsActivityButton: document.querySelector("#friendsActivityButton"),
  friendsActivityBadge: document.querySelector("#friendsActivityBadge"),
  friendsActivityRail: document.querySelector("#friendsActivityRail"),
  closeFriendsActivityButton: document.querySelector("#closeFriendsActivityButton"),
  friendRequestsSummary: document.querySelector("#friendRequestsSummary"),
  gameInvitesSummary: document.querySelector("#gameInvitesSummary"),
  friendInviteForm: document.querySelector("#friendInviteForm"),
  friendInviteUsernameInput: document.querySelector("#friendInviteUsernameInput"),
  sendFriendInviteButton: document.querySelector("#sendFriendInviteButton"),
  refreshFriendsButton: document.querySelector("#refreshFriendsButton"),
  friendsList: document.querySelector("#friendsList"),
  incomingFriendRequests: document.querySelector("#incomingFriendRequests"),
  outgoingFriendRequests: document.querySelector("#outgoingFriendRequests"),
  gameInvitesList: document.querySelector("#gameInvitesList"),
  collectionSummary: document.querySelector("#collectionSummary"),
  collapseCollectionRailButton: document.querySelector("#collapseCollectionRailButton"),
  newCollectionButton: document.querySelector("#newCollectionButton"),
  collectionSearchInput: document.querySelector("#collectionSearchInput"),
  collectionList: document.querySelector("#collectionList"),
  collectionTitle: document.querySelector("#collectionTitle"),
  collectionPrice: document.querySelector("#collectionPrice"),
  collectionCount: document.querySelector("#collectionCount"),
  collectionNameInput: document.querySelector("#collectionNameInput"),
  collectionHeaderPriceSourceSelect: document.querySelector("#collectionHeaderPriceSourceSelect"),
  collectionGroupSelect: document.querySelector("#collectionGroupSelect"),
  collectionSortSelect: document.querySelector("#collectionSortSelect"),
  collectionViewModeSelect: document.querySelector("#collectionViewModeSelect"),
  collectionDeckFilterSelect: document.querySelector("#collectionDeckFilterSelect"),
  collectionVisualSearchInput: document.querySelector("#collectionVisualSearchInput"),
  collectionViewScaleInput: document.querySelector("#collectionViewScaleInput"),
  collectionViewScaleTicks: document.querySelector("#collectionViewScaleTicks"),
  collectionCardSearchInput: document.querySelector("#collectionCardSearchInput"),
  collectionCardSearchButton: document.querySelector("#collectionCardSearchButton"),
  dismissCollectionCardSearchButton: document.querySelector("#dismissCollectionCardSearchButton"),
  collectionCardSearchSummary: document.querySelector("#collectionCardSearchSummary"),
  collectionCardSearchResults: document.querySelector("#collectionCardSearchResults"),
  collectionPreview: document.querySelector("#collectionPreview"),
  collectionListInput: document.querySelector("#collectionListInput"),
  bulkAddCollectionButton: document.querySelector("#bulkAddCollectionButton"),
  collectionStatsButton: document.querySelector("#collectionStatsButton"),
  collectionDetailsButton: document.querySelector("#collectionDetailsButton"),
  saveCollectionButton: document.querySelector("#saveCollectionButton"),
  deleteCollectionButton: document.querySelector("#deleteCollectionButton"),
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
  collectionDetailsDialog: document.querySelector("#collectionDetailsDialog"),
  collectionDetailsForm: document.querySelector("#collectionDetailsForm"),
  closeCollectionDetailsButton: document.querySelector("#closeCollectionDetailsButton"),
  collectionDetailsNameInput: document.querySelector("#collectionDetailsNameInput"),
  collectionBulkAddDialog: document.querySelector("#collectionBulkAddDialog"),
  collectionBulkAddForm: document.querySelector("#collectionBulkAddForm"),
  collectionBulkAddInput: document.querySelector("#collectionBulkAddInput"),
  collectionBulkDeckSummary: document.querySelector("#collectionBulkDeckSummary"),
  collectionBulkDeckList: document.querySelector("#collectionBulkDeckList"),
  closeCollectionBulkAddButton: document.querySelector("#closeCollectionBulkAddButton"),
  applyCollectionBulkAddButton: document.querySelector("#applyCollectionBulkAddButton"),
  collectionStatsDialog: document.querySelector("#collectionStatsDialog"),
  collectionStatsTitle: document.querySelector("#collectionStatsTitle"),
  collectionStatsSummary: document.querySelector("#collectionStatsSummary"),
  closeCollectionStatsButton: document.querySelector("#closeCollectionStatsButton"),
  collectionStatsContent: document.querySelector("#collectionStatsContent"),
  printingDialog: document.querySelector("#printingDialog"),
  printingDialogTitle: document.querySelector("#printingDialogTitle"),
  printingDialogSummary: document.querySelector("#printingDialogSummary"),
  closePrintingDialogButton: document.querySelector("#closePrintingDialogButton"),
  printingList: document.querySelector("#printingList"),
  deckStatsDialog: document.querySelector("#deckStatsDialog"),
  deckStatsDialogTitle: document.querySelector("#deckStatsDialogTitle"),
  deckStatsDialogSummary: document.querySelector("#deckStatsDialogSummary"),
  deckStatsControls: document.querySelector(".deck-stats-controls"),
  deckStatsProductionSelect: document.querySelector("#deckStatsProductionSelect"),
  deckStatsOddsSortSelect: document.querySelector("#deckStatsOddsSortSelect"),
  deckStatsPriceSourceSelect: document.querySelector("#deckStatsPriceSourceSelect"),
  closeDeckStatsButton: document.querySelector("#closeDeckStatsButton"),
  deckStatsApplyButton: document.querySelector("#deckStatsApplyButton"),
  deckStatsOddsJumpButton: document.querySelector("#deckStatsOddsJumpButton"),
  deckStatsTabs: document.querySelector("#deckStatsTabs"),
  deckStatsTabButtons: [...document.querySelectorAll("[data-deck-stats-tab]")],
  deckStatsContent: document.querySelector("#deckStatsContent"),
  deckPlayChoiceDialog: document.querySelector("#deckPlayChoiceDialog"),
  deckPlayChoiceForm: document.querySelector("#deckPlayChoiceForm"),
  deckPlayChoiceTitle: document.querySelector("#deckPlayChoiceTitle"),
  deckPlayChoiceSummary: document.querySelector("#deckPlayChoiceSummary"),
  closeDeckPlayChoiceButton: document.querySelector("#closeDeckPlayChoiceButton"),
  deckPlayJoinButton: document.querySelector("#deckPlayJoinButton"),
  deckPlayCreateButton: document.querySelector("#deckPlayCreateButton"),
  accountStartGameDialog: document.querySelector("#accountStartGameDialog"),
  accountStartGameForm: document.querySelector("#accountStartGameForm"),
  accountStartGameSummary: document.querySelector("#accountStartGameSummary"),
  accountStartSavedDeckList: document.querySelector("#accountStartSavedDeckList"),
  accountStartOwnDecklistButton: document.querySelector("#accountStartOwnDecklistButton"),
  closeAccountStartGameButton: document.querySelector("#closeAccountStartGameButton"),
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
  deckBuilderSettingsDialog: document.querySelector("#deckBuilderSettingsDialog"),
  closeDeckBuilderSettingsButton: document.querySelector("#closeDeckBuilderSettingsButton"),
  deckBuilderThemeSelect: document.querySelector("#deckBuilderThemeSelect"),
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
let roomEventsConnected = false;
let presenceHeartbeatTimer = null;
let clockRenderTimer = null;
let queuedRoomUpdateSeq = 0;
let forceInviteDialog = false;
let loadedDeckSetupFor = "";
let pendingRequests = 0;
let gameLoadingOwner = "";
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
let savedCollections = [];
let activeGames = [];
let friendsData = { friends: [], incoming: [], outgoing: [], gameInvites: { incoming: [], outgoing: [] } };
let accountMode = "login";
let accountWorkspaceTab = "decks";
let selectedBuilderDeckId = "";
let selectedCollectionId = "";
let deckBuilderInitialized = false;
let deckCardSearchResults = [];
let deckCardSearchTimer = null;
let collectionCardSearchResults = [];
let collectionCardSearchTimer = null;
let collectionInitialized = false;
let collectionMetadata = null;
let collectionMetadataKey = "";
let collectionMetadataTimer = null;
let collectionMetadataRequestInFlightKey = "";
let collectionMetadataLoadingKey = "";
let collectionMetadataLoadingTimer = null;
let collectionRailCollapsed = localStorage.getItem("mage-table-collection-rail-collapsed") === "1";
let deckPrintingCardName = "";
let deckPrintingResults = [];
let deckPrintingRequestId = 0;
let deckHistoryOpen = localStorage.getItem("mage-table-deck-history-open") === "1";
let friendsActivityOpen = localStorage.getItem("mage-table-friends-activity-open") !== "0";
let deckHistoryChangeTimer = null;
let deckHistoryBaseline = null;
let deckBuilderPreviewCollapsed = false;
let deckBuilderMetadata = null;
let deckBuilderMetadataKey = "";
let deckBuilderMetadataTimer = null;
let deckPriceProviderRefreshTimer = null;
let deckMetadataRequestInFlightKey = "";
const deckPriceProviderRefreshKeys = new Set();
const deckPriceProviderRefreshDelayMs = 45000;
let deckBuilderSaveInFlight = false;
let deckMetadataLoadingKey = "";
let deckMetadataLoadingTimer = null;
let deckMetadataLoadingTitle = "";
let deckMetadataLoadingSummary = "";
let deckPriceSource = localStorage.getItem("mage-table-deck-price-source") || "scryfall";
let deckBuilderTheme = localStorage.getItem("mage-table-deck-builder-theme") || "dark";
let selectedPriceHistoryCardKey = "";
let deckStatsActiveTab = "analysis";
const deckPriceHistoryCache = new Map();
const deckPlayStatsCache = new Map();
const probabilitySettings = {
  mode: "atLeast",
  targetCount: 1,
  groupBy: "category",
  drawnCards: 7,
};
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
  const { headers = {}, trackLoading = true, ...fetchOptions } = options;
  if (trackLoading) setLoading(true);
  try {
    const response = await fetch(path, {
      ...fetchOptions,
      credentials: "same-origin",
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
    if (trackLoading) setLoading(false);
  }
}

function accountApi(path, options = {}) {
  return api(path, options);
}

function setDisabled(element, disabled) {
  if (element) element.disabled = Boolean(disabled);
}

function isDisabled(element) {
  return !element || Boolean(element.disabled);
}

function setLoading(isLoading) {
  pendingRequests += isLoading ? 1 : -1;
  pendingRequests = Math.max(0, pendingRequests);
  document.body.classList.toggle("is-loading", pendingRequests > 0);
  els.loadingIndicator.classList.toggle("hidden", pendingRequests === 0);
}

function showGameLoading(title = "Loading Game", summary = "Resolving Scryfall cards and shuffling your opening hand.", owner = "global") {
  gameLoadingOwner = owner;
  els.gameLoadingTitle.textContent = title;
  els.gameLoadingSummary.textContent = summary;
  if (!els.gameLoadingDialog.open) els.gameLoadingDialog.showModal();
}

function hideGameLoading(owner = "global") {
  if (owner !== "global" && gameLoadingOwner !== owner) return;
  gameLoadingOwner = "";
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

function normalizeTheme(value) {
  return ["light", "dark", "console", "cosmic"].includes(value) ? value : "dark";
}

function applyBodyTheme(theme) {
  const normalized = normalizeTheme(theme);
  document.body.classList.toggle("dark-mode", normalized !== "light");
  document.body.classList.toggle("terminal-table-theme", normalized === "console");
  document.body.classList.toggle("cosmic-table-theme", normalized === "cosmic");
}

function applyDeckBuilderTheme() {
  deckBuilderTheme = normalizeTheme(deckBuilderTheme);
  applyBodyTheme(deckBuilderTheme);
  if (els.deckBuilderThemeSelect && els.deckBuilderThemeSelect.value !== deckBuilderTheme) {
    els.deckBuilderThemeSelect.value = deckBuilderTheme;
  }
}

function renderLanding() {
  applyDeckBuilderTheme();
  els.landingMenu.classList.toggle("hidden", landingView !== "menu");
  els.createModePanel.classList.toggle("hidden", landingView !== "createMode");
  els.roomForm.classList.toggle("hidden", landingView !== "create");
  els.joinRoomForm.classList.toggle("hidden", landingView !== "join");
  els.activeLobbiesPanel.classList.toggle("hidden", landingView !== "lobbies");
  els.accountPanel.classList.toggle("hidden", landingView !== "account");
  document.body.classList.toggle("account-workspace-mode", landingView === "account" && Boolean(account));
  els.setupPanel.classList.toggle("account-view", landingView === "account");
  els.setupPanel.classList.toggle("account-workspace-shell", landingView === "account" && Boolean(account));
  els.setupPanel.classList.toggle("lobbies-view", landingView === "lobbies");
  els.loginButton.textContent = account ? "Account" : "Log In";
  updateRoomCreationControls();
  if (landingView === "lobbies") renderActiveLobbies();
  if (landingView === "account") renderAccountPanel();
}

function clearLandingModeClasses() {
  document.body.classList.remove("landing-mode");
  document.body.classList.remove("account-workspace-mode");
  els.setupPanel.classList.remove("account-view", "account-workspace-shell", "lobbies-view");
}

function selectedInviteMode() {
  return els.inviteMethodInputs.find((input) => input.checked)?.value === "code" ? "code" : "links";
}

function updateRoomCreationControls() {
  if (!els.singlePlayerInput || !els.playerCountInput || !els.playerCountLabel || !els.inviteDebugDetails || !els.createRoomSubmitButton) return;
  const solo = els.singlePlayerInput.checked;
  setDisabled(els.playerCountInput, solo);
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
          deckId: selectedDeck.id || "",
          playerName: accountDisplayName("Player 1"),
        } : null,
      }),
    });
    pendingCreateDeck = null;
    storeRoomPassword(room.id, solo ? "" : els.roomPasswordInput.value);
    history.replaceState(null, "", sameOriginRoomUrl(room.selfUrl));
    forceInviteDialog = !solo && !room.currentPlayer.deckLoaded;
    setAccountStatus();
    enterRoomView(room);
    await refreshState({ quiet: true });
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
  enterRoomView(room);
  await refreshState({ quiet: true });
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
  setDisabled(els.confirmGuestLeaveButton, true);
  try {
    if (wasHost) {
      await sendAction("leaveGame");
    }
  } catch {
    // Dormant guest-host cleanup will close the game if the explicit leave request fails.
  } finally {
    setDisabled(els.confirmGuestLeaveButton, false);
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
  els.accountFriendsTab?.classList.toggle("active", accountWorkspaceTab === "friends");
  els.accountFriendsTab?.classList.toggle("secondary", accountWorkspaceTab !== "friends");
  els.accountCollectionsTab?.classList.toggle("active", accountWorkspaceTab === "collections");
  els.accountCollectionsTab?.classList.toggle("secondary", accountWorkspaceTab !== "collections");
  els.accountDecksView.classList.toggle("hidden", accountWorkspaceTab !== "decks");
  els.accountGamesView.classList.toggle("hidden", accountWorkspaceTab !== "games");
  els.accountFriendsView?.classList.toggle("hidden", accountWorkspaceTab !== "friends");
  els.accountCollectionsView?.classList.toggle("hidden", accountWorkspaceTab !== "collections");
  if (deckRailCollapsed && deckHistoryOpen) {
    deckHistoryOpen = false;
    localStorage.setItem("mage-table-deck-history-open", "0");
  }
  els.accountDecksView.classList.toggle("deck-rail-collapsed", deckRailCollapsed);
  els.collapseDeckRailButton.textContent = deckRailCollapsed ? "☰" : "⇤";
  els.collapseDeckRailButton.title = deckRailCollapsed ? "Expand deck library" : "Collapse deck library";
  els.collapseDeckRailButton.setAttribute("aria-label", els.collapseDeckRailButton.title);
  if (els.toggleMaybeBoardButton && els.deckMaybeBoardRail) {
    els.toggleMaybeBoardButton.classList.toggle("active", deckMaybeBoardOpen);
    els.toggleMaybeBoardButton.title = deckMaybeBoardOpen ? "Hide maybe board" : "Open maybe board";
    els.toggleMaybeBoardButton.setAttribute("aria-label", els.toggleMaybeBoardButton.title);
    els.toggleMaybeBoardButton.setAttribute("aria-expanded", String(deckMaybeBoardOpen));
    els.deckMaybeBoardRail.classList.toggle("hidden", !deckMaybeBoardOpen);
  }
  renderDeckHistoryPanel();
  renderSavedDecks();
  renderDeckBuilderPreview();
  renderActiveGames();
  renderFriendsWorkspace();
  renderCollectionsWorkspace();
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

function renderCollectionsWorkspace() {
  if (!els.accountCollectionsView) return;
  els.accountCollectionsView.classList.toggle("collection-rail-collapsed", collectionRailCollapsed);
  els.collapseCollectionRailButton?.classList.toggle("active", collectionRailCollapsed);
  els.collapseCollectionRailButton?.setAttribute("aria-expanded", String(!collectionRailCollapsed));
  syncDeckPriceControls();
  applyCollectionViewScale();
  renderCollectionList();
  renderCollectionEditor();
}

function renderCollectionList() {
  if (!els.collectionList) return;
  els.collectionList.innerHTML = "";
  const query = els.collectionSearchInput?.value.trim().toLowerCase() || "";
  const filtered = query
    ? savedCollections.filter((collection) => collection.name.toLowerCase().includes(query))
    : savedCollections;
  if (els.collectionSummary) {
    els.collectionSummary.textContent = query
      ? `${filtered.length} of ${savedCollections.length} collections`
      : `${savedCollections.length} collection${savedCollections.length === 1 ? "" : "s"}`;
  }
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = savedCollections.length ? "No collections match this filter." : "No collections yet.";
    els.collectionList.append(empty);
    return;
  }
  filtered.forEach((collection) => {
    const row = document.createElement("div");
    row.className = `saved-deck-row${collection.id === selectedCollectionId ? " selected" : ""}`;
    const details = document.createElement("button");
    details.type = "button";
    details.className = "saved-deck-details deck-library-select";
    const count = deckListCardCount(collection.cardlist);
    details.innerHTML = `<strong>${escapeHtml(collection.name)}</strong><span>${count} card${count === 1 ? "" : "s"} - Updated ${escapeHtml(new Date(collection.updatedAt).toLocaleDateString())}</span>`;
    details.addEventListener("click", () => selectCollection(collection));
    const menu = document.createElement("button");
    menu.type = "button";
    menu.className = "deck-row-menu";
    menu.textContent = "...";
    menu.title = `Collection details for ${collection.name}`;
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
      selectCollection(collection);
      openCollectionDetailsDialog(collection);
    });
    row.append(details, menu);
    els.collectionList.append(row);
  });
}

function currentCollection() {
  return {
    id: selectedCollectionId || "",
    name: els.collectionNameInput?.value.trim() || "",
    cardlist: els.collectionListInput?.value.trim() || "",
  };
}

function newCollection(options = {}) {
  selectedCollectionId = "";
  collectionMetadata = null;
  collectionMetadataKey = "";
  collectionCardSearchResults = [];
  if (els.collectionNameInput) els.collectionNameInput.value = "New Collection";
  if (els.collectionListInput) els.collectionListInput.value = "";
  renderCollectionCardSearchResults();
  renderCollectionsWorkspace();
  if (options.openDetails) requestAnimationFrame(() => openCollectionDetailsDialog());
}

function selectCollection(collection) {
  selectedCollectionId = collection.id || "";
  collectionMetadata = null;
  collectionMetadataKey = "";
  if (els.collectionNameInput) els.collectionNameInput.value = collection.name || "";
  if (els.collectionListInput) els.collectionListInput.value = collection.cardlist || "";
  renderCollectionsWorkspace();
}

function renderCollectionEditor() {
  if (!els.collectionPreview) return;
  const collection = currentCollection();
  const title = collection.name || "New Collection";
  els.collectionTitle.textContent = title;
  const count = deckListCardCount(collection.cardlist);
  els.collectionCount.textContent = `${count} card${count === 1 ? "" : "s"}`;
  if (els.deleteCollectionButton) setDisabled(els.deleteCollectionButton, !selectedCollectionId);
  renderCollectionPrice();
  renderCollectionPreview();
}

function renderCollectionPrice() {
  if (!els.collectionPrice) return;
  const cards = collectionMetadata?.cards;
  if (!Array.isArray(cards) || !cards.length) {
    els.collectionPrice.classList.add("hidden");
    return;
  }
  const total = cards.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
  els.collectionPrice.textContent = `${formatUsd(total)} ${priceSourceShortLabel(deckPriceSource)}`;
  els.collectionPrice.classList.remove("hidden");
}

function renderCollectionPreview() {
  if (!els.collectionPreview) return;
  const list = els.collectionListInput?.value.trim() || "";
  const key = list;
  els.collectionPreview.innerHTML = "";
  els.collectionPreview.style.setProperty("--deck-view-scale", String(collectionViewScale() / 100));
  if (!list) {
    els.collectionPreview.innerHTML = '<p class="empty-list-message">Add cards to begin building this collection.</p>';
    return;
  }
  if (collectionMetadataKey !== key) {
    loadCollectionMetadata(key);
    els.collectionPreview.innerHTML = '<p class="empty-list-message">Resolving collection cards through Scryfall...</p>';
    return;
  }
  if (collectionMetadata?.error) {
    els.collectionPreview.innerHTML = `<p class="empty-list-message">${escapeHtml(collectionMetadata.error)}</p>`;
    return;
  }
  const cards = collectionFilteredCards(collectionMetadata?.cards || []);
  if (!cards.length) {
    els.collectionPreview.innerHTML = '<p class="empty-list-message">No cards match the current collection filters.</p>';
    return;
  }
  renderCollectionVisualStacks(cards, collectionViewSettings());
}

function loadCollectionMetadata(key) {
  window.clearTimeout(collectionMetadataTimer);
  if (!key) return;
  if (collectionMetadataRequestInFlightKey === key) return;
  collectionMetadataTimer = window.setTimeout(async () => {
    collectionMetadataRequestInFlightKey = key;
    showCollectionMetadataLoading(key);
    try {
      const result = await api("/api/decks/inspect", {
        method: "POST",
        body: JSON.stringify({ decklist: key }),
      });
      if ((els.collectionListInput?.value.trim() || "") !== key) return;
      collectionMetadata = result;
      collectionMetadataKey = key;
    } catch (error) {
      if ((els.collectionListInput?.value.trim() || "") !== key) return;
      collectionMetadata = { error: error.message, cards: [] };
      collectionMetadataKey = key;
    } finally {
      if (collectionMetadataRequestInFlightKey === key) collectionMetadataRequestInFlightKey = "";
      hideCollectionMetadataLoading(key);
      renderCollectionsWorkspace();
      if (els.collectionStatsDialog?.open) renderCollectionStatsContent();
    }
  }, 350);
}

function showCollectionMetadataLoading(key) {
  collectionMetadataLoadingKey = key;
  window.clearTimeout(collectionMetadataLoadingTimer);
  collectionMetadataLoadingTimer = window.setTimeout(() => {
    if (collectionMetadataLoadingKey !== key) return;
    showGameLoading("Loading Collection", "Resolving card images, printings, and price providers.", "collection");
  }, 160);
}

function hideCollectionMetadataLoading(key) {
  if (collectionMetadataLoadingKey !== key) return;
  collectionMetadataLoadingKey = "";
  window.clearTimeout(collectionMetadataLoadingTimer);
  collectionMetadataLoadingTimer = null;
  hideGameLoading("collection");
}

function collectionViewSettings() {
  return {
    groupMode: els.collectionGroupSelect?.value || "type",
    sortMode: els.collectionSortSelect?.value || "name",
    viewMode: els.collectionViewModeSelect?.value || "cascade",
    query: (els.collectionVisualSearchInput?.value || "").trim().toLowerCase(),
    deckFilter: els.collectionDeckFilterSelect?.value || "all",
  };
}

function collectionFilteredCards(cards) {
  const { deckFilter } = collectionViewSettings();
  if (deckFilter === "all") return cards;
  return cards.filter((card) => {
    const inDeck = deckMembershipForCard(card).length > 0;
    return deckFilter === "inDeck" ? inDeck : !inDeck;
  });
}

function deckMembershipMap() {
  const map = new Map();
  savedDecks.forEach((deck) => {
    parseDeckBuilderEntries(deck.decklist).forEach((entry) => {
      const key = normalizedDeckCardName(entry.name);
      if (!key) return;
      if (!map.has(key)) map.set(key, []);
      const decks = map.get(key);
      if (!decks.some((item) => item.id === deck.id)) decks.push({ id: deck.id, name: deck.name || "Untitled Deck" });
    });
  });
  return map;
}

function deckMembershipForCard(cardOrName) {
  const name = typeof cardOrName === "string" ? cardOrName : cardOrName?.name || cardOrName?.displayName || "";
  return deckMembershipMap().get(normalizedDeckCardName(name)) || [];
}

function deckMembershipMarkup(card) {
  const memberships = deckMembershipForCard(card);
  if (!memberships.length) return "";
  const label = memberships.length === 1
    ? memberships[0].name
    : `${memberships[0].name} +${memberships.length - 1}`;
  const title = memberships.map((deck) => deck.name).join(", ");
  return `<span class="deck-membership-badge" title="${escapeHtml(title)}">In ${escapeHtml(label)}</span>`;
}

function renderCollectionVisualStacks(cards, settings = collectionViewSettings()) {
  const { groupMode, sortMode, viewMode, query } = settings;
  const grouped = new Map();
  cards.forEach((card) => {
    const group = deckGroupLabel(card, groupMode);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(card);
  });
  const groupEntries = [...grouped.entries()].sort(([a], [b]) => compareDeckGroupNames(a, b));
  const wrap = document.createElement("div");
  wrap.className = `deck-visual-columns deck-view-${viewMode} collection-visual-columns`;
  wrap.dataset.groupMode = groupMode;
  wrap.dataset.sortMode = sortMode;
  wrap.dataset.viewMode = viewMode;
  if (viewMode === "table") {
    wrap.classList.add("deck-table-full");
    wrap.append(collectionGroupedTextTable(groupEntries, sortMode, query));
    els.collectionPreview.append(wrap);
    return;
  }
  const laneCount = collectionVisualColumnCount(viewMode);
  wrap.style.setProperty("--masonry-columns", String(laneCount));
  const lanes = Array.from({ length: laneCount }, () => {
    const lane = document.createElement("div");
    lane.className = "deck-visual-masonry-column";
    wrap.append(lane);
    return { node: lane, height: 0, count: 0 };
  });
  groupEntries.forEach(([group, groupCards]) => {
    const sorted = [...groupCards].sort((a, b) => compareDeckCards(a, b, sortMode));
    const column = document.createElement("section");
    column.className = "deck-stack-column";
    const price = sorted.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
    column.innerHTML = `<header><strong>${escapeHtml(group)}</strong><span>Qty: ${sorted.reduce((sum, card) => sum + card.quantity, 0)} · ${formatUsd(price)}</span></header>`;
    if (viewMode === "grid") column.append(collectionImageGrid(sorted, query));
    else {
      const stack = document.createElement("div");
      stack.className = "deck-card-stack";
      stack.style.setProperty("--stack-count", String(sorted.length));
      sorted.forEach((card, index) => stack.append(collectionStackCard(card, index, query)));
      attachLocalCascadeHandlers(stack);
      column.append(stack);
    }
    const lane = lanes.reduce((best, candidate) => {
      if (candidate.height < best.height) return candidate;
      if (candidate.height === best.height && candidate.count < best.count) return candidate;
      return best;
    }, lanes[0]);
    lane.node.append(column);
    lane.height += estimateCollectionGroupHeight(sorted.length, viewMode);
    lane.count += 1;
  });
  els.collectionPreview.append(wrap);
}

function collectionVisualColumnCount(viewMode = "cascade") {
  const width = Math.max(1, els.collectionPreview?.clientWidth || 1);
  const scale = collectionViewScale() / 100;
  const baseWidth = viewMode === "table" ? 310 : viewMode === "grid" ? 270 : 230;
  const columnWidth = Math.min(390, Math.max(190, baseWidth * scale));
  return Math.max(1, Math.min(8, Math.floor((width + 12) / (columnWidth + 12))));
}

function estimateCollectionGroupHeight(cardCount, viewMode = "cascade") {
  const scale = collectionViewScale() / 100;
  if (viewMode === "table") return 52 + cardCount * 36 * scale;
  if (viewMode === "grid") return 58 + cardCount * 186 * scale;
  return 72 + Math.max(0, cardCount - 1) * 44 * scale + 322 * scale;
}

function collectionStackCard(card, index, query) {
  const item = document.createElement("article");
  item.className = "deck-stack-card collection-card";
  if (query && card.name.toLowerCase().includes(query)) item.classList.add("highlight");
  item.style.setProperty("--stack-index", String(index));
  item.dataset.stackIndex = String(index);
  item.title = `${card.quantity} ${card.name}`;
  if (card.imageUrl) {
    item.dataset.zoomImage = card.imageUrl;
    item.dataset.zoomName = card.name;
  }
  const image = card.imageUrl
    ? `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" loading="lazy">`
    : `<div class="deck-stack-placeholder">${escapeHtml(card.name)}</div>`;
  item.innerHTML = `
    ${image}
    <span class="deck-stack-qty">${card.quantity}</span>
    <strong>${escapeHtml(card.name)}</strong>
    ${deckMembershipMarkup(card)}
    <span class="deck-card-edit-controls" aria-label="Edit ${escapeHtml(card.name)} quantity">
      <button type="button" data-collection-adjust="-1" title="Remove one ${escapeHtml(card.name)}" aria-label="Remove one ${escapeHtml(card.name)}">-</button>
      <button type="button" data-collection-adjust="1" title="Add one ${escapeHtml(card.name)}" aria-label="Add one ${escapeHtml(card.name)}">+</button>
    </span>
  `;
  attachCollectionCardEditControls(item, card.name);
  attachCardZoomHandlers(item, "collection-viewer", index);
  return item;
}

function collectionImageGrid(cards, query) {
  const grid = document.createElement("div");
  grid.className = "deck-image-grid";
  cards.forEach((card, index) => {
    const item = collectionStackCard(card, index, query);
    item.classList.add("deck-grid-card");
    grid.append(item);
  });
  return grid;
}

function collectionGroupedTextTable(groupEntries, sortMode, query) {
  const table = document.createElement("table");
  table.className = "deck-text-table deck-grouped-text-table collection-text-table";
  table.innerHTML = "<thead><tr><th>Qty</th><th>Name</th><th>MV</th><th>Type</th><th>Color</th><th>Price</th><th>Decks</th><th>Edit</th></tr></thead>";
  const body = document.createElement("tbody");
  groupEntries.forEach(([group, groupCards]) => {
    const sorted = [...groupCards].sort((a, b) => compareDeckCards(a, b, sortMode));
    const quantity = sorted.reduce((sum, card) => sum + (Number(card.quantity) || 1), 0);
    const price = sorted.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
    const header = document.createElement("tr");
    header.className = "deck-table-group-row";
    header.innerHTML = `<th colspan="8"><span>${escapeHtml(group)}</span><small>Qty: ${quantity} - ${formatUsd(price)}</small></th>`;
    body.append(header);
    sorted.forEach((card) => body.append(collectionTextTableRow(card, query)));
  });
  table.append(body);
  return table;
}

function collectionTextTableRow(card, query) {
  const row = document.createElement("tr");
  if (query && card.name.toLowerCase().includes(query)) row.classList.add("highlight");
  if (card.imageUrl) {
    row.dataset.zoomImage = card.imageUrl;
    row.dataset.zoomName = card.name;
    attachCardZoomHandlers(row, "collection-viewer", 0);
  }
  const memberships = deckMembershipForCard(card);
  row.innerHTML = `
    <td>${Number(card.quantity) || 1}</td>
    <td>${escapeHtml(card.name)}</td>
    <td>${Number(card.manaValue) || 0}</td>
    <td>${escapeHtml(primaryType(card))}</td>
    <td>${escapeHtml(colorLabel(card.colorIdentity || card.colors || []))}</td>
    <td>${formatUsd(deckCardTotalPrice(card))}</td>
    <td>${memberships.length ? memberships.map((deck) => escapeHtml(deck.name)).join(", ") : ""}</td>
    <td class="deck-table-edit-cell">
      <button type="button" data-collection-adjust="-1" title="Remove one ${escapeHtml(card.name)}" aria-label="Remove one ${escapeHtml(card.name)}">-</button>
      <button type="button" data-collection-adjust="1" title="Add one ${escapeHtml(card.name)}" aria-label="Add one ${escapeHtml(card.name)}">+</button>
    </td>
  `;
  attachCollectionCardEditControls(row, card.name);
  return row;
}

function attachCollectionCardEditControls(root, cardName) {
  root.querySelectorAll("[data-collection-adjust]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      adjustCollectionCard(cardName, Number(button.dataset.collectionAdjust) || 0);
    });
  });
}

function adjustCollectionCard(cardName, delta) {
  const before = els.collectionListInput.value;
  const entries = parseDeckBuilderEntries(before);
  const target = normalizedDeckCardName(cardName);
  let entry = entries.find((candidate) => normalizedDeckCardName(candidate.name) === target);
  if (!entry && delta > 0) {
    entry = { quantity: 0, name: cardName, rawName: cardName };
    entries.push(entry);
  }
  if (!entry) return;
  entry.quantity = Math.max(0, (Number(entry.quantity) || 0) + delta);
  const nextEntries = entries.filter((candidate) => Number(candidate.quantity) > 0);
  els.collectionListInput.value = serializeDeckBuilderEntries(nextEntries);
  collectionMetadata = null;
  collectionMetadataKey = "";
  setAccountStatus("Unsaved collection changes.");
  renderCollectionsWorkspace();
}

function renderCollectionCardSearchResults() {
  if (!els.collectionCardSearchResults) return;
  els.collectionCardSearchResults.innerHTML = "";
  const hasResults = collectionCardSearchResults.length > 0;
  els.collectionCardSearchResults.classList.toggle("hidden", !hasResults);
  els.dismissCollectionCardSearchButton?.classList.toggle("hidden", !hasResults && !(els.collectionCardSearchInput?.value.trim()));
  collectionCardSearchResults.forEach((card, index) => {
    const item = document.createElement("article");
    item.className = "deck-search-result";
    const preview = cardElement(deckSearchCardPreview(card), null, "librarySearch", index);
    preview.classList.add("deck-search-preview-card");
    const details = document.createElement("div");
    details.className = "deck-search-details";
    details.innerHTML = `<strong>${escapeHtml(card.name)}</strong><span>${escapeHtml(card.typeLine || "Card")}</span>${deckMembershipMarkup(card)}`;
    const price = document.createElement("span");
    price.className = "deck-search-price";
    price.textContent = `${formatUsd(searchCardUnitPrice(card))} ${priceSourceShortLabel(deckPriceSource)}`;
    const owned = document.createElement("span");
    owned.className = "deck-search-owned";
    owned.textContent = `In collection: ${currentCollectionCardQuantity(card.name)}`;
    const actions = document.createElement("div");
    actions.className = "deck-search-actions";
    actions.innerHTML = `
      <button type="button" data-collection-adjust="-1" title="Remove one ${escapeHtml(card.name)}" aria-label="Remove one ${escapeHtml(card.name)}">-</button>
      <button type="button" data-collection-adjust="1" title="Add one ${escapeHtml(card.name)}" aria-label="Add one ${escapeHtml(card.name)}">+</button>
    `;
    item.append(preview, details, price, owned, actions);
    attachCollectionCardEditControls(item, card.name);
    els.collectionCardSearchResults.append(item);
  });
}

function currentCollectionCardQuantity(cardName) {
  const match = parseDeckBuilderEntries(els.collectionListInput?.value || "")
    .find((entry) => normalizedDeckCardName(entry.name) === normalizedDeckCardName(cardName));
  return match ? Number(match.quantity) || 0 : 0;
}

function openCollectionDetailsDialog(collection = currentCollection()) {
  if (!els.collectionDetailsDialog || !els.collectionDetailsNameInput) return;
  els.collectionDetailsNameInput.value = collection?.name || els.collectionNameInput?.value || "New Collection";
  if (!els.collectionDetailsDialog.open) els.collectionDetailsDialog.showModal();
  requestAnimationFrame(() => els.collectionDetailsNameInput?.focus());
}

function applyCollectionDetailsFromDialog() {
  const name = els.collectionDetailsNameInput?.value.trim() || "New Collection";
  if (els.collectionNameInput) els.collectionNameInput.value = name;
  if (els.collectionTitle) els.collectionTitle.textContent = name;
  setAccountStatus("Unsaved collection changes.");
  renderCollectionList();
}

function setCollectionRailCollapsed(collapsed) {
  collectionRailCollapsed = Boolean(collapsed);
  localStorage.setItem("mage-table-collection-rail-collapsed", collectionRailCollapsed ? "1" : "0");
  renderCollectionsWorkspace();
}

function openCollectionBulkAddDialog() {
  if (!els.collectionBulkAddDialog) return;
  if (els.collectionBulkAddInput) els.collectionBulkAddInput.value = "";
  renderCollectionBulkDeckChoices();
  if (!els.collectionBulkAddDialog.open) els.collectionBulkAddDialog.showModal();
  requestAnimationFrame(() => els.collectionBulkAddInput?.focus());
}

function renderCollectionBulkDeckChoices() {
  if (!els.collectionBulkDeckList) return;
  els.collectionBulkDeckList.innerHTML = "";
  if (!savedDecks.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "No saved decks are available to import from.";
    els.collectionBulkDeckList.append(empty);
    updateCollectionBulkDeckSummary();
    return;
  }
  savedDecks.forEach((deck) => {
    const label = document.createElement("label");
    label.className = "collection-bulk-deck-choice";
    label.innerHTML = `
      <input type="checkbox" value="${escapeHtml(deck.id)}">
      <span><strong>${escapeHtml(deck.name || "Untitled Deck")}</strong><small>${deckListCardCount(deck.decklist)} cards - ${escapeHtml(deck.commander || "No commander")}</small></span>
    `;
    label.querySelector("input")?.addEventListener("change", updateCollectionBulkDeckSummary);
    els.collectionBulkDeckList.append(label);
  });
  updateCollectionBulkDeckSummary();
}

function selectedCollectionBulkDeckIds() {
  return [...(els.collectionBulkDeckList?.querySelectorAll('input[type="checkbox"]:checked') || [])]
    .map((input) => input.value)
    .filter(Boolean);
}

function updateCollectionBulkDeckSummary() {
  if (!els.collectionBulkDeckSummary) return;
  const count = selectedCollectionBulkDeckIds().length;
  els.collectionBulkDeckSummary.textContent = `${count} deck${count === 1 ? "" : "s"} selected`;
}

function collectionEntriesFromSelectedDecks() {
  const selectedIds = new Set(selectedCollectionBulkDeckIds());
  if (!selectedIds.size) return [];
  return savedDecks
    .filter((deck) => selectedIds.has(deck.id))
    .flatMap((deck) => parseDeckBuilderEntries(deck.decklist));
}

function mergeCollectionEntries(currentEntries, incomingEntries) {
  const byName = new Map();
  const merged = [];
  [...(currentEntries || []), ...(incomingEntries || [])].forEach((entry) => {
    const name = cleanDeckBuilderCardName(entry.name || entry.rawName || "");
    if (!name) return;
    const key = normalizedDeckCardName(name);
    const quantity = Math.max(1, Number(entry.quantity) || 1);
    const rawName = entry.rawName || name;
    const existing = byName.get(key);
    if (existing) {
      existing.quantity += quantity;
      if (!existing.rawName && rawName) existing.rawName = rawName;
      return;
    }
    const next = { quantity, name, rawName };
    byName.set(key, next);
    merged.push(next);
  });
  return merged.sort((left, right) => left.name.localeCompare(right.name));
}

function applyCollectionBulkAdd() {
  const pasted = parseBulkDeckImportText(els.collectionBulkAddInput?.value || "").entries;
  const deckEntries = collectionEntriesFromSelectedDecks();
  const incoming = [...pasted, ...deckEntries];
  if (!incoming.length) {
    els.collectionBulkAddInput?.focus();
    return;
  }
  const merged = mergeCollectionEntries(parseDeckBuilderEntries(els.collectionListInput?.value || ""), incoming);
  els.collectionListInput.value = serializeDeckBuilderEntries(merged);
  collectionMetadata = null;
  collectionMetadataKey = "";
  collectionCardSearchResults = [];
  els.collectionBulkAddDialog?.close();
  setAccountStatus(`${incoming.reduce((sum, entry) => sum + (Number(entry.quantity) || 1), 0)} cards added to collection - unsaved changes.`);
  renderCollectionCardSearchResults();
  renderCollectionEditor();
}

function openCollectionStatsDialog() {
  if (!els.collectionStatsDialog) return;
  const collection = currentCollection();
  els.collectionStatsTitle.textContent = `${collection.name || "Collection"} Stats`;
  renderCollectionStatsContent();
  if (!els.collectionStatsDialog.open) els.collectionStatsDialog.showModal();
  const key = collection.cardlist.trim();
  if (key && collectionMetadataKey !== key) loadCollectionMetadata(key);
}

function renderCollectionStatsContent() {
  if (!els.collectionStatsContent) return;
  const collection = currentCollection();
  const cards = Array.isArray(collectionMetadata?.cards) ? collectionMetadata.cards : [];
  const totalCards = cards.reduce((sum, card) => sum + (Number(card.quantity) || 1), 0);
  const totalPrice = cards.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
  els.collectionStatsSummary.textContent = cards.length
    ? `${totalCards} cards analyzed - ${cards.length} unique - ${formatUsd(totalPrice)} ${priceSourceShortLabel(deckPriceSource)}`
    : "Resolve this collection through Scryfall before viewing stats.";
  els.collectionStatsContent.innerHTML = "";
  if (collectionMetadata?.error) {
    els.collectionStatsContent.innerHTML = `<p class="empty-list-message">${escapeHtml(collectionMetadata.error)}</p>`;
    return;
  }
  if (!collection.cardlist.trim()) {
    els.collectionStatsContent.innerHTML = '<p class="empty-list-message">Add cards before viewing collection stats.</p>';
    return;
  }
  if (!cards.length) {
    els.collectionStatsContent.innerHTML = '<p class="empty-list-message">Loading collection statistics...</p>';
    return;
  }
  els.collectionStatsContent.append(
    collectionStatsMetricGrid(cards),
    collectionStatsBreakdownSection(cards),
    collectionStatsTable(cards),
  );
}

function collectionStatsMetricGrid(cards) {
  const totalCards = cards.reduce((sum, card) => sum + (Number(card.quantity) || 1), 0);
  const totalPrice = cards.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
  const inDeck = cards.filter((card) => deckMembershipForCard(card).length > 0).length;
  const mostExpensive = cards.slice().sort((a, b) => deckCardTotalPrice(b) - deckCardTotalPrice(a))[0];
  const grid = document.createElement("div");
  grid.className = "play-stats-metric-grid collection-stat-metrics";
  [
    { label: "Cards", value: totalCards, note: `${cards.length} unique` },
    { label: "Value", value: formatUsd(totalPrice), note: priceSourceLabel(deckPriceSource) },
    { label: "In Decks", value: inDeck, note: `${cards.length - inDeck} not used` },
    { label: "Highest Value", value: formatUsd(mostExpensive ? deckCardTotalPrice(mostExpensive) : 0), note: mostExpensive?.name || "None" },
  ].forEach((metric) => {
    const card = document.createElement("article");
    card.className = "play-stat-metric";
    card.innerHTML = `<span>${escapeHtml(metric.label)}</span><strong>${escapeHtml(String(metric.value))}</strong><small>${escapeHtml(metric.note)}</small>`;
    grid.append(card);
  });
  return grid;
}

function collectionStatsBreakdownSection(cards) {
  const section = document.createElement("section");
  section.className = "deck-stat-section collection-stat-section";
  section.innerHTML = "<h3>Collection Breakdown</h3>";
  const grid = document.createElement("div");
  grid.className = "deck-breakdown-grid collection-breakdown-grid";
  grid.append(
    breakdownChart("Cards by Type", collectionTypeRows(cards), "No cards"),
    breakdownChart("Price by Type", collectionPriceByTypeRows(cards), "No priced cards"),
    breakdownChart("Cards by Color Identity", collectionColorRows(cards), "No color data"),
    breakdownChart("Deck Usage", collectionDeckUsageRows(cards), "No deck usage data"),
    breakdownChart("Price Bands", collectionPriceBandRows(cards), "No priced cards"),
  );
  section.append(grid);
  return section;
}

function collectionTypeRows(cards) {
  const totals = new Map();
  cards.forEach((card) => {
    const label = primaryType(card) || "Other";
    totals.set(label, (totals.get(label) || 0) + (Number(card.quantity) || 1));
  });
  return [...totals.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, value]) => ({ label, value, display: `${value} card${value === 1 ? "" : "s"}`, color: typeColor(label) }));
}

function collectionPriceByTypeRows(cards) {
  const totals = new Map();
  cards.forEach((card) => {
    const label = primaryType(card) || "Other";
    totals.set(label, (totals.get(label) || 0) + deckCardTotalPrice(card));
  });
  return [...totals.entries()]
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, value]) => ({ label, value, display: formatUsd(value), color: typeColor(label) }));
}

function collectionColorRows(cards) {
  const totals = new Map();
  cards.forEach((card) => {
    const label = colorLabel(card.colorIdentity || card.colors || []);
    totals.set(label, (totals.get(label) || 0) + (Number(card.quantity) || 1));
  });
  return [...totals.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, value]) => ({ label, value, display: `${value} card${value === 1 ? "" : "s"}`, color: colorCollectionSwatch(label) }));
}

function colorCollectionSwatch(label) {
  if (label === "Colorless") return colorSwatch("C");
  const colors = { White: "W", Blue: "U", Black: "B", Red: "R", Green: "G" };
  return colors[label] ? colorSwatch(colors[label]) : "#8ee7d6";
}

function collectionDeckUsageRows(cards) {
  const inDeck = cards.filter((card) => deckMembershipForCard(card).length > 0).length;
  const notInDeck = Math.max(0, cards.length - inDeck);
  return [
    { label: "In a deck", value: inDeck, display: `${inDeck} unique`, color: "#2a9d8f" },
    { label: "Not in a deck", value: notInDeck, display: `${notInDeck} unique`, color: "#f1ca70" },
  ].filter((row) => row.value > 0);
}

function collectionPriceBandRows(cards) {
  const bands = [
    { label: "$0", min: 0, max: 0.005, color: "#6c7a76" },
    { label: "< $1", min: 0.005, max: 1, color: "#8ee7d6" },
    { label: "$1-$5", min: 1, max: 5, color: "#2a9d8f" },
    { label: "$5-$20", min: 5, max: 20, color: "#f1ca70" },
    { label: "$20+", min: 20, max: Infinity, color: "#e76f51" },
  ];
  return bands.map((band) => {
    const value = cards.reduce((sum, card) => {
      const unit = deckCardUnitPrice(card);
      return unit >= band.min && unit < band.max ? sum + (Number(card.quantity) || 1) : sum;
    }, 0);
    return { label: band.label, value, display: `${value} card${value === 1 ? "" : "s"}`, color: band.color };
  }).filter((row) => row.value > 0);
}

function collectionStatsTable(cards) {
  const table = document.createElement("table");
  table.className = "deck-text-table collection-stats-table";
  table.innerHTML = "<thead><tr><th>Qty</th><th>Name</th><th>Type</th><th>Unit</th><th>Total</th><th>Decks</th></tr></thead>";
  const body = document.createElement("tbody");
  cards
    .slice()
    .sort((a, b) => deckCardTotalPrice(b) - deckCardTotalPrice(a) || a.name.localeCompare(b.name))
    .forEach((card) => {
      const memberships = deckMembershipForCard(card);
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${Number(card.quantity) || 1}</td>
        <td>${escapeHtml(card.name)}</td>
        <td>${escapeHtml(primaryType(card))}</td>
        <td>${formatUsd(deckCardUnitPrice(card))}</td>
        <td>${formatUsd(deckCardTotalPrice(card))}</td>
        <td>${memberships.length ? memberships.map((deck) => escapeHtml(deck.name)).join(", ") : ""}</td>
      `;
      body.append(row);
    });
  table.append(body);
  return table;
}

function commanderColorIdentityForDeck(deck) {
  if (deck.id !== selectedBuilderDeckId || !deckBuilderMetadata?.cards?.length) return "Open";
  const commander = deckBuilderMetadata.cards.find((card) => deckNameMatchesCommander(card.name, deck.commander) || deckNameMatchesCommander(card.displayName, deck.commander));
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
  queueDeckHistoryChange("Updated maybe board");
}

function setMaybeBoardOpen(open) {
  deckMaybeBoardOpen = Boolean(open);
  localStorage.setItem("mage-table-maybeboard-open", deckMaybeBoardOpen ? "1" : "0");
  renderAccountPanel();
  if (deckMaybeBoardOpen) requestAnimationFrame(() => els.deckMaybeBoardInput?.focus());
}

function deckHistoryKey(deckId = selectedBuilderDeckId || "draft") {
  return `mage-table-deck-history:${account?.id || "guest"}:${deckId || "draft"}`;
}

function readDeckHistory(deckId = selectedBuilderDeckId || "draft") {
  try {
    const history = JSON.parse(localStorage.getItem(deckHistoryKey(deckId)) || "[]");
    return Array.isArray(history) ? history : [];
  } catch {
    return [];
  }
}

function writeDeckHistory(history, deckId = selectedBuilderDeckId || "draft") {
  localStorage.setItem(deckHistoryKey(deckId), JSON.stringify(history.slice(0, 120)));
}

function deckHistorySnapshot(deck = currentBuilderDeck()) {
  return {
    name: String(deck.name || "").trim(),
    commander: String(deck.commander || "").trim(),
    decklist: String(deck.decklist || "").trim(),
    maybeBoard: String(els.deckMaybeBoardInput?.value || ""),
  };
}

function deckHistorySavedSnapshot(deckId = selectedBuilderDeckId) {
  const deck = savedDecks.find((candidate) => candidate.id === deckId);
  if (!deck) return null;
  return {
    name: String(deck.name || "").trim(),
    commander: String(deck.commander || "").trim(),
    decklist: String(deck.decklist || "").trim(),
    maybeBoard: localStorage.getItem(maybeBoardKey(deckId)) || "",
  };
}

function resetDeckHistoryBaseline() {
  deckHistoryBaseline = deckHistorySnapshot();
  renderDeckHistoryPanel();
}

function deckHistoryComparisonSnapshot(deckId = selectedBuilderDeckId || "draft") {
  return readDeckHistory(deckId)[0]?.snapshot
    || deckHistorySavedSnapshot(deckId)
    || deckHistoryBaseline
    || { name: "", commander: "", decklist: "", maybeBoard: "" };
}

function deckEntryMapForHistory(decklist) {
  const map = new Map();
  parseDeckBuilderEntries(decklist).forEach((entry) => {
    const key = normalizedDeckCardName(entry.name);
    if (!key) return;
    const existing = map.get(key);
    if (existing) existing.quantity += Number(entry.quantity) || 0;
    else map.set(key, { name: entry.name, quantity: Number(entry.quantity) || 0 });
  });
  return map;
}

function deckHistoryChangeDetails(before, after) {
  const details = [];
  if ((before.name || "") !== (after.name || "")) details.push(`Deck name: ${before.name || "Untitled"} -> ${after.name || "Untitled"}`);
  if ((before.commander || "") !== (after.commander || "")) details.push(`Commander: ${before.commander || "None"} -> ${after.commander || "None"}`);
  const beforeCards = deckEntryMapForHistory(before.decklist || "");
  const afterCards = deckEntryMapForHistory(after.decklist || "");
  const keys = [...new Set([...beforeCards.keys(), ...afterCards.keys()])].sort((left, right) => {
    const leftName = afterCards.get(left)?.name || beforeCards.get(left)?.name || "";
    const rightName = afterCards.get(right)?.name || beforeCards.get(right)?.name || "";
    return leftName.localeCompare(rightName);
  });
  keys.forEach((key) => {
    const previous = beforeCards.get(key);
    const next = afterCards.get(key);
    const beforeQty = previous?.quantity || 0;
    const afterQty = next?.quantity || 0;
    if (beforeQty === afterQty) return;
    const name = next?.name || previous?.name || "Card";
    if (!beforeQty) details.push(`Added ${afterQty} ${name}`);
    else if (!afterQty) details.push(`Removed ${beforeQty} ${name}`);
    else details.push(`${name}: ${beforeQty} -> ${afterQty}`);
  });
  if ((before.decklist || "").trim() !== (after.decklist || "").trim() && !details.some((detail) => /Added|Removed|: \d+ -> \d+/.test(detail))) {
    details.push("Edited decklist text");
  }
  if ((before.maybeBoard || "") !== (after.maybeBoard || "")) details.push("Updated maybe board");
  return details;
}

function recordDeckHistoryChange(label, before = deckHistoryComparisonSnapshot(), options = {}) {
  const after = deckHistorySnapshot();
  const details = deckHistoryChangeDetails(before || {}, after);
  if (!options.force && !details.length) return;
  const history = readDeckHistory();
  const entry = {
    at: Date.now(),
    label,
    details: details.slice(0, 18),
    overflow: Math.max(0, details.length - 18),
    snapshot: after,
  };
  writeDeckHistory([entry, ...history]);
  deckHistoryBaseline = after;
  renderDeckHistoryPanel();
}

function queueDeckHistoryChange(label) {
  window.clearTimeout(deckHistoryChangeTimer);
  deckHistoryChangeTimer = window.setTimeout(() => recordDeckHistoryChange(label), 900);
}

function transferDeckHistory(fromDeckId, toDeckId) {
  if (!fromDeckId || !toDeckId || fromDeckId === toDeckId) return;
  const fromKey = deckHistoryKey(fromDeckId);
  const fromHistory = readDeckHistory(fromDeckId);
  if (!fromHistory.length) return;
  const merged = [...fromHistory, ...readDeckHistory(toDeckId)]
    .sort((left, right) => Number(right.at) - Number(left.at));
  writeDeckHistory(merged, toDeckId);
  localStorage.removeItem(fromKey);
}

function setDeckHistoryOpen(open) {
  deckHistoryOpen = Boolean(open);
  localStorage.setItem("mage-table-deck-history-open", deckHistoryOpen ? "1" : "0");
  if (deckHistoryOpen && deckRailCollapsed) {
    deckRailCollapsed = false;
    localStorage.setItem("mage-table-deck-rail-collapsed", "0");
  }
  renderAccountPanel();
}

function renderDeckHistoryPanel() {
  if (!els.deckHistoryRail || !els.deckHistoryList) return;
  els.deckHistoryButton?.classList.toggle("active", deckHistoryOpen);
  els.deckHistoryButton?.setAttribute("aria-expanded", String(deckHistoryOpen));
  els.deckHistoryRail.classList.toggle("hidden", !deckHistoryOpen);
  if (!deckHistoryOpen) return;
  const history = readDeckHistory();
  els.deckHistorySummary.textContent = history.length
    ? `${history.length} change${history.length === 1 ? "" : "s"} recorded`
    : "No changes recorded";
  els.deckHistoryList.innerHTML = "";
  if (!history.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "Changes you make to this deck will appear here.";
    els.deckHistoryList.append(empty);
    return;
  }
  history.forEach((entry) => {
    const row = document.createElement("article");
    row.className = "deck-history-entry";
    const time = new Date(Number(entry.at) || Date.now());
    const details = Array.isArray(entry.details) ? entry.details : [];
    row.innerHTML = `
      <header>
        <strong>${escapeHtml(entry.label || "Deck changed")}</strong>
        <time datetime="${time.toISOString()}">${escapeHtml(time.toLocaleString())}</time>
      </header>
      <ul>${details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}${entry.overflow ? `<li>+${Number(entry.overflow)} more change${Number(entry.overflow) === 1 ? "" : "s"}</li>` : ""}</ul>
    `;
    els.deckHistoryList.append(row);
  });
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
    setDisabled(button, disabled);
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
    .map(deckBuilderEntryFromLine)
    .filter(Boolean);
}

function deckBuilderEntryFromLine(line) {
  const trimmed = String(line || "").trim();
  if (!trimmed || deckBuilderCommanderHeaderValue(trimmed) || isDeckBuilderMetadataLine(trimmed) || isDeckBuilderSectionHeader(trimmed)) return null;
  const match = trimmed.match(/^(?:SB:\s*)?(\d+)\s*[xX]?\s+(.+)$/i);
  if (!match) return { quantity: 1, name: cleanDeckBuilderCardName(trimmed), rawName: trimmed };
  const rawName = match[2].trim();
  return { quantity: Math.max(1, Number(match[1]) || 1), name: cleanDeckBuilderCardName(rawName), rawName };
}

function deckBuilderCommanderHeaderValue(line) {
  const match = String(line || "").trim().match(/^commander(?:s)?\s*:\s*(.+)$/i);
  return match ? cleanDeckBuilderCardName(match[1]) : "";
}

function isDeckBuilderMetadataLine(line) {
  return /^(deck|name|format)\s*:\s*.+$/i.test(String(line || "").trim());
}

function isDeckBuilderSectionHeader(line) {
  return /^(commander(?:s)?|main(?:board| deck)?|deck|sideboard|maybeboard|companions?|signature spells?)\s*:?\s*$/i.test(String(line || "").trim());
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

function normalizedDeckCardName(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function significantDeckNameTokens(value) {
  return normalizedDeckCardName(value)
    .split(/\s+/)
    .filter((token) => token && !["a", "an", "of", "the"].includes(token));
}

function deckNameMatchesCommander(cardName, commanderName) {
  const commander = normalizedDeckCardName(commanderName);
  const candidate = normalizedDeckCardName(cardName);
  if (!commander || !candidate) return false;
  if (candidate === commander) return true;
  const commanderTokens = significantDeckNameTokens(commanderName);
  const candidateTokens = significantDeckNameTokens(cardName);
  if (!commanderTokens.length || !candidateTokens.length) return false;
  if (commanderTokens.join(" ") === candidateTokens.join(" ")) return true;
  if (commanderTokens.length < 2 || commanderTokens[0] !== candidateTokens[0]) return false;
  return commanderTokens.every((token) => candidateTokens.includes(token));
}

function deckMetadataRequestDecklist(decklist = els.deckBuilderListInput.value) {
  const commander = els.deckBuilderCommanderInput.value.trim();
  const text = String(decklist || "").trim();
  if (!commander) return text;
  const hasCommander = parseDeckBuilderEntries(text).some((entry) => deckNameMatchesCommander(entry.name, commander));
  if (hasCommander) return text;
  return [`1 ${commander}`, text].filter(Boolean).join("\n");
}

function deckMetadataKey(decklist = els.deckBuilderListInput.value) {
  return deckMetadataRequestDecklist(decklist).trim().toLowerCase();
}

function scheduleDeckMetadataRefresh() {
  window.clearTimeout(deckBuilderMetadataTimer);
  window.clearTimeout(deckPriceProviderRefreshTimer);
  const key = deckMetadataKey();
  if (!key) {
    if (deckMetadataLoadingKey) hideDeckMetadataLoading(deckMetadataLoadingKey);
    deckBuilderMetadata = null;
    deckBuilderMetadataKey = "";
    deckMetadataRequestInFlightKey = "";
    deckPriceProviderRefreshKeys.clear();
    return;
  }
  if (deckBuilderMetadataKey === key && deckBuilderMetadata) return;
  deckBuilderMetadataTimer = window.setTimeout(() => refreshDeckMetadata(), 450);
}

function deckPriceProvidersPending(metadata = deckBuilderMetadata) {
  return Boolean(metadata?.stats?.priceProviders?.pending);
}

function scheduleDeckPriceProviderRefresh(key) {
  if (!key || deckPriceProviderRefreshKeys.has(key)) return;
  deckPriceProviderRefreshKeys.add(key);
  window.clearTimeout(deckPriceProviderRefreshTimer);
  deckPriceProviderRefreshTimer = window.setTimeout(() => {
    if (deckMetadataKey() !== key) return;
    refreshDeckMetadata({ quiet: true });
  }, deckPriceProviderRefreshDelayMs);
}

function showDeckMetadataLoading(key, title = "Loading Deck Data", summary = "Resolving card images, printings, and price providers.") {
  deckMetadataLoadingKey = key;
  window.clearTimeout(deckMetadataLoadingTimer);
  deckMetadataLoadingTimer = window.setTimeout(() => {
    if (deckMetadataLoadingKey !== key) return;
    showGameLoading(title, summary, `deck:${key}`);
  }, 160);
}

function hideDeckMetadataLoading(key) {
  if (deckMetadataLoadingKey !== key) return;
  deckMetadataLoadingKey = "";
  window.clearTimeout(deckMetadataLoadingTimer);
  deckMetadataLoadingTimer = null;
  hideGameLoading(`deck:${key}`);
}

function cancelDeckBuilderBackgroundWork() {
  window.clearTimeout(deckBuilderMetadataTimer);
  window.clearTimeout(deckPriceProviderRefreshTimer);
  window.clearTimeout(deckMetadataLoadingTimer);
  deckBuilderMetadataTimer = null;
  deckPriceProviderRefreshTimer = null;
  deckMetadataLoadingTimer = null;
  deckMetadataRequestInFlightKey = "";
  deckPriceProviderRefreshKeys.clear();
  const loadingKey = deckMetadataLoadingKey;
  deckMetadataLoadingKey = "";
  deckMetadataLoadingTitle = "";
  deckMetadataLoadingSummary = "";
  if (loadingKey) hideGameLoading(`deck:${loadingKey}`);
}

async function refreshDeckMetadata({ quiet = false } = {}) {
  const decklist = els.deckBuilderListInput.value;
  const requestDecklist = deckMetadataRequestDecklist(decklist);
  const key = deckMetadataKey(decklist);
  if (!key) {
    deckBuilderMetadata = null;
    deckBuilderMetadataKey = "";
    renderDeckBuilderPreview();
    return;
  }
  if (deckMetadataRequestInFlightKey === key) return;
  deckBuilderMetadataKey = key;
  deckMetadataRequestInFlightKey = key;
  const loadingTitle = deckMetadataLoadingTitle || "Loading Deck Data";
  const loadingSummary = deckMetadataLoadingSummary || "Resolving card images, printings, and price providers.";
  deckMetadataLoadingTitle = "";
  deckMetadataLoadingSummary = "";
  if (!quiet) showDeckMetadataLoading(key, loadingTitle, loadingSummary);
  try {
    const result = await api("/api/decks/inspect", {
      method: "POST",
      trackLoading: !quiet,
      body: JSON.stringify({ decklist: requestDecklist }),
    });
    if (deckBuilderMetadataKey !== key) return;
    deckBuilderMetadata = result;
    renderSavedDecks();
    renderDeckBuilderPreview();
    if (deckPriceProvidersPending(result)) scheduleDeckPriceProviderRefresh(key);
    else window.clearTimeout(deckPriceProviderRefreshTimer);
  } catch (error) {
    if (deckBuilderMetadataKey !== key) return;
    deckBuilderMetadata = { cards: [], error: error.message };
    renderSavedDecks();
    renderDeckBuilderPreview();
  } finally {
    if (deckMetadataRequestInFlightKey === key) deckMetadataRequestInFlightKey = "";
    if (!quiet) hideDeckMetadataLoading(key);
  }
}

function invalidateDeckMetadata() {
  deckBuilderMetadata = null;
  deckBuilderMetadataKey = "";
  deckPriceProviderRefreshKeys.clear();
  scheduleDeckMetadataRefresh();
}

function selectBuilderDeck(deck) {
  deckBuilderPreviewCollapsed = false;
  deckBuilderMetadata = null;
  deckBuilderMetadataKey = "";
  selectedPriceHistoryCardKey = "";
  selectedBuilderDeckId = deck.id;
  els.deckBuilderNameInput.value = deck.name;
  els.deckBuilderCommanderInput.value = deck.commander || "";
  els.deckBuilderListInput.value = deck.decklist;
  els.deckBuilderStatus.textContent = `Updated ${new Date(deck.updatedAt).toLocaleString()}`;
  loadMaybeBoard(deck.id);
  resetDeckHistoryBaseline();
  renderSavedDecks();
  renderDeckBuilderPreview();
  scheduleDeckMetadataRefresh();
}

function newBuilderDeck() {
  deckBuilderPreviewCollapsed = false;
  deckBuilderMetadata = null;
  deckBuilderMetadataKey = "";
  selectedPriceHistoryCardKey = "";
  selectedBuilderDeckId = "";
  els.deckBuilderNameInput.value = "";
  els.deckBuilderCommanderInput.value = "";
  els.deckBuilderListInput.value = "";
  els.deckMaybeBoardInput.value = "";
  loadMaybeBoard("new");
  els.deckBuilderStatus.textContent = "New unsaved deck";
  resetDeckHistoryBaseline();
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

function fallbackBuilderDeckName(deck) {
  const commander = String(deck.commander || "").trim();
  if (commander) return `${commander} Deck`;
  const firstCard = parseDeckBuilderEntries(deck.decklist)[0]?.name;
  if (firstCard) return `${firstCard} Deck`;
  return "Untitled Deck";
}

function upsertSavedDeck(deck) {
  if (!deck?.id) return;
  const index = savedDecks.findIndex((candidate) => candidate.id === deck.id);
  if (index >= 0) savedDecks.splice(index, 1, deck);
  else savedDecks = [deck, ...savedDecks];
}

function deckViewSettings() {
  return {
    groupMode: els.deckGroupSelect.value || "type",
    sortMode: els.deckSortSelect.value || "name",
    viewMode: els.deckViewModeSelect.value || "cascade",
    query: els.deckVisualSearchInput.value.trim().toLowerCase(),
  };
}

function renderDeckBuilderPreview(options = {}) {
  if (!account) return;
  const previousScroll = els.deckBuilderPreview.scrollTop;
  const entries = parseDeckBuilderEntries(els.deckBuilderListInput.value);
  const total = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const selectedDeck = savedDecks.find((deck) => deck.id === selectedBuilderDeckId);
  const deckName = els.deckBuilderNameInput.value.trim() || selectedDeck?.name || "New Deck";
  const commander = els.deckBuilderCommanderInput.value.trim();
  els.deckBuilderTitle.textContent = deckName;
  renderDeckBuilderPrice();
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
    renderDeckVisualStacks(deckBuilderMetadata.cards, deckViewSettings());
    if (options.preserveScroll) requestAnimationFrame(() => { els.deckBuilderPreview.scrollTop = previousScroll; });
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
  if (options.preserveScroll) requestAnimationFrame(() => { els.deckBuilderPreview.scrollTop = previousScroll; });
}

function deckViewScale() {
  return Math.max(70, Math.min(300, Number(els.deckViewScaleInput?.value) || 100));
}

function deckScaleBounds() {
  return {
    min: Number(els.deckViewScaleInput?.min) || 70,
    max: Number(els.deckViewScaleInput?.max) || 300,
  };
}

function deckScaleSnapPoints() {
  const { min, max } = deckScaleBounds();
  const previewWidth = Math.max(
    1,
    Number(els.deckBuilderPreview?.clientWidth) || 0,
    Number(els.deckBuilderPreview?.parentElement?.clientWidth) || 0,
    typeof window !== "undefined" ? Number(window.innerWidth) || 0 : 0,
  );
  const cardWidth = 230;
  const gap = 12;
  const available = Math.max(1, previewWidth - 4);
  const points = new Set([min, max]);
  for (let lanes = 1; lanes <= 8; lanes += 1) {
    const laneWidth = (available - (lanes - 1) * gap) / lanes;
    if (laneWidth <= 0) continue;
    const snap = Math.round((laneWidth / cardWidth) * 100);
    if (snap >= min && snap <= max) points.add(snap);
  }
  return [...points].sort((a, b) => a - b);
}

function nearestDeckScaleSnap(value) {
  const { min, max } = deckScaleBounds();
  const raw = Math.max(min, Math.min(max, Number(value) || 100));
  return deckScaleSnapPoints().reduce((best, point) => (
    Math.abs(point - raw) < Math.abs(best - raw) ? point : best
  ));
}

function updateDeckScaleTicks(points = deckScaleSnapPoints()) {
  if (!els.deckViewScaleTicks || !els.deckViewScaleInput) return;
  els.deckViewScaleTicks.innerHTML = "";
  points.forEach((point) => {
    const option = document.createElement("option");
    option.value = String(point);
    option.label = `${point}%`;
    els.deckViewScaleTicks.append(option);
  });
  els.deckViewScaleInput.title = `Snap points: ${points.map((point) => `${point}%`).join(", ")}`;
}

function snapDeckViewScaleInput() {
  if (!els.deckViewScaleInput) return deckViewScale();
  const points = deckScaleSnapPoints();
  updateDeckScaleTicks(points);
  const snapped = nearestDeckScaleSnap(els.deckViewScaleInput.value);
  els.deckViewScaleInput.value = String(snapped);
  els.deckViewScaleInput.setAttribute("aria-valuetext", `${snapped}%`);
  return snapped;
}

function applyDeckViewScale() {
  if (!els.deckBuilderPreview) return;
  updateDeckScaleTicks();
  els.deckBuilderPreview.style.setProperty("--deck-view-scale", String(deckViewScale() / 100));
}

function ensureCollectionViewScaleInput() {
  if (!els.collectionViewScaleInput || els.collectionViewScaleInput.dataset.scaleReady) return;
  const stored = Number(localStorage.getItem("mage-table-collection-view-scale")) || 100;
  const min = Number(els.collectionViewScaleInput.min) || 70;
  const max = Number(els.collectionViewScaleInput.max) || 300;
  els.collectionViewScaleInput.value = String(Math.max(min, Math.min(max, stored)));
  els.collectionViewScaleInput.dataset.scaleReady = "1";
}

function collectionViewScale() {
  ensureCollectionViewScaleInput();
  return Math.max(70, Math.min(300, Number(els.collectionViewScaleInput?.value) || 100));
}

function collectionScaleBounds() {
  return {
    min: Number(els.collectionViewScaleInput?.min) || 70,
    max: Number(els.collectionViewScaleInput?.max) || 300,
  };
}

function collectionScaleSnapPoints() {
  const { min, max } = collectionScaleBounds();
  const previewWidth = Math.max(
    1,
    Number(els.collectionPreview?.clientWidth) || 0,
    Number(els.collectionPreview?.parentElement?.clientWidth) || 0,
    typeof window !== "undefined" ? Number(window.innerWidth) || 0 : 0,
  );
  const cardWidth = 230;
  const gap = 12;
  const available = Math.max(1, previewWidth - 4);
  const points = new Set([min, max]);
  for (let lanes = 1; lanes <= 8; lanes += 1) {
    const laneWidth = (available - (lanes - 1) * gap) / lanes;
    if (laneWidth <= 0) continue;
    const snap = Math.round((laneWidth / cardWidth) * 100);
    if (snap >= min && snap <= max) points.add(snap);
  }
  return [...points].sort((a, b) => a - b);
}

function nearestCollectionScaleSnap(value) {
  const { min, max } = collectionScaleBounds();
  const raw = Math.max(min, Math.min(max, Number(value) || 100));
  return collectionScaleSnapPoints().reduce((best, point) => (
    Math.abs(point - raw) < Math.abs(best - raw) ? point : best
  ));
}

function updateCollectionScaleTicks(points = collectionScaleSnapPoints()) {
  if (!els.collectionViewScaleTicks || !els.collectionViewScaleInput) return;
  els.collectionViewScaleTicks.innerHTML = "";
  points.forEach((point) => {
    const option = document.createElement("option");
    option.value = String(point);
    option.label = `${point}%`;
    els.collectionViewScaleTicks.append(option);
  });
  els.collectionViewScaleInput.title = `Snap points: ${points.map((point) => `${point}%`).join(", ")}`;
}

function snapCollectionViewScaleInput() {
  if (!els.collectionViewScaleInput) return collectionViewScale();
  ensureCollectionViewScaleInput();
  const points = collectionScaleSnapPoints();
  updateCollectionScaleTicks(points);
  const snapped = nearestCollectionScaleSnap(els.collectionViewScaleInput.value);
  els.collectionViewScaleInput.value = String(snapped);
  els.collectionViewScaleInput.setAttribute("aria-valuetext", `${snapped}%`);
  localStorage.setItem("mage-table-collection-view-scale", String(snapped));
  return snapped;
}

function applyCollectionViewScale() {
  if (!els.collectionPreview) return;
  ensureCollectionViewScaleInput();
  updateCollectionScaleTicks();
  els.collectionPreview.style.setProperty("--deck-view-scale", String(collectionViewScale() / 100));
}

function applyCollectionViewSettings(event = null) {
  if (event?.type === "click" || event?.type === "pointerup" || event?.type === "submit") event.preventDefault();
  if (event?.target === els.collectionHeaderPriceSourceSelect) {
    deckPriceSource = normalizePriceSource(event.target.value);
    localStorage.setItem("mage-table-deck-price-source", deckPriceSource);
    syncDeckPriceControls();
  }
  if (event?.target === els.collectionViewScaleInput) snapCollectionViewScaleInput();
  applyCollectionViewScale();
  renderCollectionPrice();
  renderCollectionPreview();
  renderCollectionCardSearchResults();
  if (els.collectionStatsDialog?.open) renderCollectionStatsContent();
}

function applyDeckViewSettings(event = null) {
  if (event?.type === "click" || event?.type === "pointerup" || event?.type === "submit") event.preventDefault();
  deckBuilderPreviewCollapsed = false;
  if (event?.target === els.deckPriceSourceSelect || event?.target === els.deckHeaderPriceSourceSelect || event?.target === els.deckStatsPriceSourceSelect) {
    deckPriceSource = normalizePriceSource(event.target.value);
    localStorage.setItem("mage-table-deck-price-source", deckPriceSource);
    syncDeckPriceControls();
  }
  if (event?.target === els.deckViewScaleInput) snapDeckViewScaleInput();
  applyDeckViewScale();
  renderDeckBuilderPreview();
  renderDeckCardSearchResults();
  if (els.deckBuilderPreview) {
    els.deckBuilderPreview.dataset.renderRevision = String(Date.now());
    els.deckBuilderPreview.getBoundingClientRect();
    requestAnimationFrame(() => {
      applyDeckViewScale();
      els.deckBuilderPreview.scrollTop = 0;
    });
  }
}

function renderDeckBuilderPrice() {
  if (!els.deckBuilderPrice) return;
  syncDeckPriceControls();
  const price = deckBuilderTotalPrice();
  els.deckBuilderPrice.classList.toggle("hidden", price === null);
  if (price !== null) els.deckBuilderPrice.textContent = `${formatUsd(price)} ${priceSourceShortLabel(deckPriceSource)}`;
}

function deckBuilderTotalPrice() {
  const totals = deckBuilderMetadata?.stats?.totalsUsd;
  const selected = priceFromSource(totals, deckPriceSource);
  if (selected !== null) return selected;
  if (deckPriceSource === "scryfall" && Number.isFinite(Number(deckBuilderMetadata?.stats?.priceUsd))) return Number(deckBuilderMetadata.stats.priceUsd);
  const cards = deckBuilderMetadata?.cards;
  if (!Array.isArray(cards) || !cards.length) return null;
  return cards.reduce((sum, card) => sum + deckCardUnitPrice(card) * (Number(card.quantity) || 1), 0);
}

function syncDeckPriceControls() {
  deckPriceSource = normalizePriceSource(deckPriceSource);
  if (els.deckPriceSourceSelect && els.deckPriceSourceSelect.value !== deckPriceSource) els.deckPriceSourceSelect.value = deckPriceSource;
  if (els.deckHeaderPriceSourceSelect && els.deckHeaderPriceSourceSelect.value !== deckPriceSource) els.deckHeaderPriceSourceSelect.value = deckPriceSource;
  if (els.deckStatsPriceSourceSelect && els.deckStatsPriceSourceSelect.value !== deckPriceSource) els.deckStatsPriceSourceSelect.value = deckPriceSource;
  if (els.collectionHeaderPriceSourceSelect && els.collectionHeaderPriceSourceSelect.value !== deckPriceSource) els.collectionHeaderPriceSourceSelect.value = deckPriceSource;
}

function normalizePriceSource(value) {
  return ["scryfall", "tcgplayer", "cardkingdom", "average"].includes(value) ? value : "scryfall";
}

function priceSourceLabel(source = deckPriceSource) {
  return ({ scryfall: "Scryfall USD", tcgplayer: "TCGplayer USD", cardkingdom: "Card Kingdom USD", average: "Average USD" })[normalizePriceSource(source)] || "Scryfall USD";
}

function priceSourceShortLabel(source = deckPriceSource) {
  return ({ scryfall: "SF", tcgplayer: "TCG", cardkingdom: "CK", average: "AVG" })[normalizePriceSource(source)] || "SF";
}

function priceFromSource(prices, source = deckPriceSource) {
  if (!prices || typeof prices !== "object") return null;
  const normalized = normalizePriceSource(source);
  if (Number.isFinite(Number(prices[normalized]))) return Number(prices[normalized]);
  return null;
}

function deckCardUnitPrice(card, source = deckPriceSource) {
  const normalized = normalizePriceSource(source);
  const selected = priceFromSource(card?.pricesUsd, source);
  if (selected !== null) return selected;
  return normalized === "scryfall" ? Number(card?.priceUsd) || 0 : 0;
}

function deckCardTotalPrice(card, source = deckPriceSource) {
  return deckCardUnitPrice(card, source) * (Number(card?.quantity) || 1);
}

function formatUsd(value) {
  return `$${(Number(value) || 0).toFixed(2)}`;
}

function renderDeckVisualStacks(cards, settings = deckViewSettings()) {
  const { groupMode, sortMode, viewMode, query } = settings;
  const displayCards = deckViewerCardsWithCommander(cards);
  const grouped = new Map();
  displayCards.forEach((card) => {
    const group = deckViewerGroupLabel(card, groupMode);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(card);
  });
  const groupEntries = [...grouped.entries()].sort(([a], [b]) => compareDeckGroupNames(a, b));
  const wrap = document.createElement("div");
  wrap.className = `deck-visual-columns deck-view-${viewMode}`;
  wrap.dataset.groupMode = groupMode;
  wrap.dataset.sortMode = sortMode;
  wrap.dataset.viewMode = viewMode;
  if (viewMode === "table") {
    wrap.classList.add("deck-table-full");
    wrap.append(deckGroupedTextTable(groupEntries, sortMode, query));
    els.deckBuilderPreview.append(wrap);
    return;
  }
  const laneCount = deckVisualColumnCount(viewMode);
  wrap.style.setProperty("--masonry-columns", String(laneCount));
  const lanes = Array.from({ length: laneCount }, () => {
    const lane = document.createElement("div");
    lane.className = "deck-visual-masonry-column";
    wrap.append(lane);
    return { node: lane, height: 0, count: 0 };
  });
  groupEntries.forEach(([group, groupCards]) => {
      const sorted = [...groupCards].sort((a, b) => compareDeckCards(a, b, sortMode));
      const column = document.createElement("section");
      column.className = "deck-stack-column";
      const price = sorted.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
      column.innerHTML = `<header><strong>${escapeHtml(group)}</strong><span>Qty: ${sorted.reduce((sum, card) => sum + card.quantity, 0)} · ${formatUsd(price)}</span></header>`;
      if (viewMode === "grid") column.append(deckImageGrid(sorted, query));
      else {
        const stack = document.createElement("div");
        stack.className = "deck-card-stack";
        stack.style.setProperty("--stack-count", String(sorted.length));
        sorted.forEach((card, index) => stack.append(deckStackCard(card, index, query)));
        attachLocalCascadeHandlers(stack);
        column.append(stack);
      }
      const lane = lanes.reduce((best, candidate) => {
        if (candidate.height < best.height) return candidate;
        if (candidate.height === best.height && candidate.count < best.count) return candidate;
        return best;
      }, lanes[0]);
      lane.node.append(column);
      lane.height += estimateDeckGroupHeight(sorted.length, viewMode);
      lane.count += 1;
    });
  els.deckBuilderPreview.append(wrap);
}

function deckViewerCardsWithCommander(cards) {
  const commander = els.deckBuilderCommanderInput.value.trim();
  if (!commander) return cards;
  const existing = cards.find((card) => isDeckCommanderCard(card));
  if (existing) return cards;
  return [deckViewerCommanderPlaceholder(commander), ...cards];
}

function deckViewerCommanderPlaceholder(name) {
  return {
    name,
    quantity: 1,
    typeLine: "Commander",
    manaCost: "",
    manaValue: 0,
    priceUsd: 0,
    pricesUsd: { scryfall: 0, tcgplayer: 0, average: 0 },
    category: "Commander",
    imageUrl: "",
    colorIdentity: [],
    colors: [],
    oracleText: "",
    isCommanderPlaceholder: true,
  };
}

function compareDeckGroupNames(a, b) {
  if (a === "Commander" && b !== "Commander") return -1;
  if (b === "Commander" && a !== "Commander") return 1;
  return a.localeCompare(b, undefined, { numeric: true });
}

function deckVisualColumnCount(viewMode = "cascade") {
  const width = Math.max(1, els.deckBuilderPreview?.clientWidth || 1);
  const scale = deckViewScale() / 100;
  const baseWidth = viewMode === "table" ? 310 : viewMode === "grid" ? 270 : 230;
  const columnWidth = Math.min(390, Math.max(190, baseWidth * scale));
  return Math.max(1, Math.min(8, Math.floor((width + 12) / (columnWidth + 12))));
}

function estimateDeckGroupHeight(cardCount, viewMode = "cascade") {
  const scale = deckViewScale() / 100;
  if (viewMode === "table") return 52 + cardCount * 36 * scale;
  if (viewMode === "grid") return 58 + cardCount * 186 * scale;
  return 72 + Math.max(0, cardCount - 1) * 44 * scale + 322 * scale;
}

function deckViewerGroupLabel(card, mode) {
  if (isDeckCommanderCard(card)) return "Commander";
  return deckGroupLabel(card, mode);
}

function deckStackCard(card, index, query) {
  const item = document.createElement("article");
  item.className = "deck-stack-card";
  if (query && card.name.toLowerCase().includes(query)) item.classList.add("highlight");
  item.style.setProperty("--stack-index", String(index));
  item.dataset.stackIndex = String(index);
  item.title = `${card.quantity} ${card.name}`;
  if (card.imageUrl) {
    item.dataset.zoomImage = card.imageUrl;
    item.dataset.zoomName = card.name;
  }
  const image = card.imageUrl
    ? `<img src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" loading="lazy">`
    : `<div class="deck-stack-placeholder">${escapeHtml(card.name)}</div>`;
  item.innerHTML = `
    ${image}
    <span class="deck-stack-qty">${card.quantity}</span>
    <strong>${escapeHtml(card.name)}</strong>
    <span class="deck-card-edit-controls" aria-label="Edit ${escapeHtml(card.name)} quantity">
      <button type="button" data-deck-adjust="-1" title="Remove one ${escapeHtml(card.name)}" aria-label="Remove one ${escapeHtml(card.name)}">-</button>
      <button type="button" data-deck-adjust="1" title="Add one ${escapeHtml(card.name)}" aria-label="Add one ${escapeHtml(card.name)}">+</button>
      <button type="button" data-deck-printings title="Choose printing for ${escapeHtml(card.name)}" aria-label="Choose printing for ${escapeHtml(card.name)}">...</button>
    </span>
  `;
  attachDeckCardEditControls(item, card.name);
  attachCardZoomHandlers(item, "deck-viewer", index);
  return item;
}

function attachDeckCardEditControls(root, cardName) {
  root.querySelectorAll("[data-deck-adjust]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      adjustBuilderCard(cardName, Number(button.dataset.deckAdjust) || 0);
    });
  });
  root.querySelectorAll("[data-deck-printings]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openDeckPrintingDialog(cardName);
    });
  });
}

function attachLocalCascadeHandlers(stack) {
  const cards = [...stack.querySelectorAll(".deck-stack-card")];
  if (cards.length <= 1) return;
  stack.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".deck-stack-card");
    const index = card && stack.contains(card)
      ? Number(card.dataset.stackIndex)
      : estimateCascadeIndexFromPointer(stack, event.clientY);
    updateLocalCascade(stack, Number.isFinite(index) ? index : 0);
  });
  stack.addEventListener("pointerleave", () => clearLocalCascade(stack));
}

function estimateCascadeIndexFromPointer(stack, clientY) {
  const restStep = cascadeStepSize(stack, "--cascade-rest-step", 44);
  const offset = Math.max(0, clientY - stack.getBoundingClientRect().top);
  const count = Number(stack.style.getPropertyValue("--stack-count")) || stack.querySelectorAll(".deck-stack-card").length || 1;
  return Math.max(0, Math.min(count - 1, Math.round(offset / Math.max(1, restStep))));
}

function updateLocalCascade(stack, focusedIndex) {
  const cards = [...stack.querySelectorAll(".deck-stack-card")];
  const count = cards.length;
  if (!count) return;
  const visible = Math.min(6, count);
  const start = Math.max(0, Math.min(count - visible, focusedIndex - Math.floor(visible / 2)));
  const end = start + visible - 1;
  if (stack.dataset.cascadeStart === String(start) && stack.dataset.cascadeEnd === String(end)) return;
  const restStep = cascadeStepSize(stack, "--cascade-rest-step", 44);
  const openStep = cascadeStepSize(stack, "--cascade-open-step", 112);
  const extra = Math.max(0, (visible - 1) * (openStep - restStep));
  stack.dataset.cascadeStart = String(start);
  stack.dataset.cascadeEnd = String(end);
  stack.classList.add("local-cascade-active");
  stack.style.setProperty("--local-cascade-extra", `${extra}px`);
  cards.forEach((card, index) => {
    let top = index * restStep;
    if (index >= start && index <= end) top = start * restStep + (index - start) * openStep;
    else if (index > end) top = start * restStep + (end - start) * openStep + (index - end) * restStep;
    card.style.top = `${top}px`;
    card.classList.toggle("local-cascade-focus", index >= start && index <= end);
  });
}

function clearLocalCascade(stack) {
  delete stack.dataset.cascadeStart;
  delete stack.dataset.cascadeEnd;
  stack.classList.remove("local-cascade-active");
  stack.style.removeProperty("--local-cascade-extra");
  stack.querySelectorAll(".deck-stack-card").forEach((card) => {
    card.style.removeProperty("top");
    card.classList.remove("local-cascade-focus");
  });
}

function cascadeStepSize(stack, property, fallback) {
  const raw = getComputedStyle(stack).getPropertyValue(property);
  const base = Number.parseFloat(raw);
  const scale = stack.closest(".collection-preview") ? collectionViewScale() : deckViewScale();
  return (Number.isFinite(base) ? base : fallback) * (scale / 100);
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

function deckGroupedTextTable(groupEntries, sortMode, query) {
  const table = document.createElement("table");
  table.className = "deck-text-table deck-grouped-text-table";
  table.innerHTML = "<thead><tr><th>Qty</th><th>Name</th><th>MV</th><th>Type</th><th>Color</th><th>Price</th><th>Edit</th></tr></thead>";
  const body = document.createElement("tbody");
  groupEntries.forEach(([group, groupCards]) => {
    const sorted = [...groupCards].sort((a, b) => compareDeckCards(a, b, sortMode));
    const quantity = sorted.reduce((sum, card) => sum + (Number(card.quantity) || 1), 0);
    const price = sorted.reduce((sum, card) => sum + deckCardTotalPrice(card), 0);
    const header = document.createElement("tr");
    header.className = "deck-table-group-row";
    header.innerHTML = `<th colspan="7"><span>${escapeHtml(group)}</span><small>Qty: ${quantity} · ${formatUsd(price)}</small></th>`;
    body.append(header);
    sorted.forEach((card) => body.append(deckTextTableRow(card, query)));
  });
  table.append(body);
  return table;
}

function deckTextTable(cards, query) {
  const table = document.createElement("table");
  table.className = "deck-text-table";
  table.innerHTML = "<thead><tr><th>Qty</th><th>Name</th><th>MV</th><th>Type</th><th>Color</th><th>Price</th><th>Edit</th></tr></thead>";
  const body = document.createElement("tbody");
  cards.forEach((card) => body.append(deckTextTableRow(card, query)));
  table.append(body);
  return table;
}

function deckTextTableRow(card, query) {
  const row = document.createElement("tr");
  if (query && card.name.toLowerCase().includes(query)) row.classList.add("highlight");
  if (card.imageUrl) {
    row.dataset.zoomImage = card.imageUrl;
    row.dataset.zoomName = card.name;
    attachCardZoomHandlers(row, "deck-viewer", 0);
  }
  row.innerHTML = `
    <td>${Number(card.quantity) || 1}</td>
    <td>${escapeHtml(card.name)}</td>
    <td>${Number(card.manaValue) || 0}</td>
    <td>${escapeHtml(primaryType(card))}</td>
    <td>${escapeHtml(colorLabel(card.colorIdentity || card.colors || []))}</td>
    <td>${formatUsd(deckCardTotalPrice(card))}</td>
    <td class="deck-table-edit-cell">
      <button type="button" data-deck-adjust="-1" title="Remove one ${escapeHtml(card.name)}" aria-label="Remove one ${escapeHtml(card.name)}">-</button>
      <button type="button" data-deck-adjust="1" title="Add one ${escapeHtml(card.name)}" aria-label="Add one ${escapeHtml(card.name)}">+</button>
      <button type="button" data-deck-printings title="Choose printing for ${escapeHtml(card.name)}" aria-label="Choose printing for ${escapeHtml(card.name)}">...</button>
    </td>
  `;
  attachDeckCardEditControls(row, card.name);
  return row;
}

function openDeckStatsDialog(deck = currentBuilderDeck()) {
  const name = deck.name || els.deckBuilderNameInput.value || "Deck";
  syncDeckPriceControls();
  els.deckStatsDialogTitle.textContent = `${name} Stats`;
  els.deckStatsDialogSummary.textContent = deckStatsSummaryText(deck);
  renderDeckStatsContent();
  if (!els.deckStatsDialog.open) els.deckStatsDialog.showModal();
  loadDeckPriceHistory(deck.id);
  loadDeckPlayStats(deck.id, { force: true });
}

function deckStatsSummaryText(deck = currentBuilderDeck()) {
  if (deckStatsActiveTab === "play") {
    if (!deck.id) return "Save this deck to begin recording persistent gameplay statistics.";
    const stats = deckPlayStatsCache.get(deck.id)?.stats;
    if (stats?.commits) {
      return `${stats.games} game${stats.games === 1 ? "" : "s"} recorded · ${stats.commits} checkpoint${stats.commits === 1 ? "" : "s"} · ${stats.spellsCast} spell${stats.spellsCast === 1 ? "" : "s"} tracked`;
    }
    return "Gameplay statistics are recorded after priority or turn checkpoints.";
  }
  return deckBuilderMetadata?.cards?.length
    ? `${deckBuilderMetadata.stats?.total || deckListCardCount(deck.decklist)} cards analyzed · ${priceSourceLabel(deckPriceSource)}`
    : "Stats are available after Scryfall card data resolves.";
}

function syncDeckStatsTabs() {
  deckStatsActiveTab = deckStatsActiveTab === "play" ? "play" : "analysis";
  els.deckStatsTabButtons.forEach((button) => {
    const selected = button.dataset.deckStatsTab === deckStatsActiveTab;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  if (els.deckStatsControls) els.deckStatsControls.classList.toggle("hidden", deckStatsActiveTab !== "analysis");
  if (els.deckStatsOddsJumpButton) els.deckStatsOddsJumpButton.classList.toggle("hidden", deckStatsActiveTab !== "analysis");
}

function setDeckStatsTab(tab) {
  deckStatsActiveTab = tab === "play" ? "play" : "analysis";
  if (deckStatsActiveTab === "play") loadDeckPlayStats(currentBuilderDeck().id);
  renderDeckStatsContent();
}

function renderDeckStatsContent() {
  els.deckStatsContent.innerHTML = "";
  syncDeckStatsTabs();
  els.deckStatsDialogSummary.textContent = deckStatsSummaryText();
  if (deckStatsActiveTab === "play") {
    els.deckStatsContent.append(playHistorySection());
    return;
  }
  const cards = deckBuilderMetadata?.cards || [];
  syncDeckPriceControls();
  if (els.deckStatsDialogSummary && cards.length) {
    els.deckStatsDialogSummary.textContent = deckStatsSummaryText();
  }
  if (!cards.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "Resolve this deck through Scryfall before viewing stats.";
    els.deckStatsContent.append(empty);
    return;
  }
  const total = cards.reduce((sum, card) => sum + (Number(card.quantity) || 1), 0);
  syncDeckStatsColorOptions(cards);
  els.deckStatsContent.append(
    productionSection(cards, els.deckStatsProductionSelect.value),
    priceAndCostBreakdownSection(cards),
    priceHistorySection(cards),
    probabilitySection(cards, total),
  );
}

async function loadDeckPlayStats(deckId = selectedBuilderDeckId, options = {}) {
  if (!account || !deckId) return;
  if (deckPlayStatsCache.has(deckId) && !options.force) {
    if (els.deckStatsDialog?.open && deckStatsActiveTab === "play") renderDeckStatsContent();
    return;
  }
  deckPlayStatsCache.set(deckId, { loading: true, stats: null, error: "" });
  if (els.deckStatsDialog?.open && deckStatsActiveTab === "play") renderDeckStatsContent();
  try {
    const result = await accountApi(`/api/account/decks/${encodeURIComponent(deckId)}/play-stats`);
    deckPlayStatsCache.set(deckId, { loading: false, stats: result.stats || null, error: "" });
  } catch (error) {
    deckPlayStatsCache.set(deckId, { loading: false, stats: null, error: error.message });
  }
  if (els.deckStatsDialog?.open && deckStatsActiveTab === "play" && deckId === currentBuilderDeck().id) renderDeckStatsContent();
}

function playHistorySection() {
  const deck = currentBuilderDeck();
  const section = document.createElement("section");
  section.className = "deck-stat-section deck-play-history-section";
  if (!account) {
    section.append(emptyDeckPlayMessage("Sign in to save and view deck play statistics."));
    return section;
  }
  if (!deck.id) {
    section.append(emptyDeckPlayMessage("Save this deck before games can write play statistics to it."));
    return section;
  }
  const cached = deckPlayStatsCache.get(deck.id);
  if (!cached) {
    loadDeckPlayStats(deck.id);
    section.append(emptyDeckPlayMessage("Loading play statistics..."));
    return section;
  }
  if (cached.loading) {
    section.append(emptyDeckPlayMessage("Loading play statistics..."));
    return section;
  }
  if (cached.error) {
    section.append(emptyDeckPlayMessage(`Could not load play statistics: ${cached.error}`));
    return section;
  }
  const stats = cached.stats || {};
  section.append(playStatsHeader(stats));
  if (!Number(stats.commits)) {
    section.append(emptyDeckPlayMessage("No committed gameplay statistics have been recorded for this deck yet. Start or join a game with this saved deck, then pass priority or end a turn after taking actions."));
    return section;
  }
  section.append(
    playStatsMetricGrid(stats),
    playStatsTimeline(stats.recent || []),
    playStatsBreakdownGrid(stats),
    playStatsRecentTable(stats.recent || []),
  );
  return section;
}

function emptyDeckPlayMessage(message) {
  const empty = document.createElement("p");
  empty.className = "empty-list-message";
  empty.textContent = message;
  return empty;
}

function playStatsHeader(stats) {
  const header = document.createElement("header");
  header.className = "play-stats-heading";
  const lastPlayed = Number(stats.lastPlayedAt) ? new Date(Number(stats.lastPlayedAt)).toLocaleString() : "No games recorded";
  header.innerHTML = `
    <div>
      <h3>Play History</h3>
      <span>Saved after priority passes, combat passes, and turn changes.</span>
    </div>
    <strong>${escapeHtml(lastPlayed)}</strong>
  `;
  return header;
}

function playStatsMetricGrid(stats) {
  const metrics = [
    { label: "Games", value: Number(stats.games) || 0, note: "rooms with this deck" },
    { label: "Checkpoints", value: Number(stats.commits) || 0, note: "saved stat batches" },
    { label: "Spells Cast", value: Number(stats.spellsCast) || 0, note: `${averageStat(stats.spellsCast, stats.commits)} per checkpoint` },
    { label: "Mana Used", value: Number(stats.manaUsed) || 0, note: `${averageStat(stats.manaUsed, stats.spellsCast)} per spell` },
    { label: "Mana Produced", value: Number(stats.manaProduced) || 0, note: `${averageStat(stats.manaProduced, stats.commits)} per checkpoint` },
  ];
  const grid = document.createElement("div");
  grid.className = "play-stats-metric-grid";
  metrics.forEach((metric) => {
    const card = document.createElement("article");
    card.className = "play-stat-metric";
    card.innerHTML = `<span>${escapeHtml(metric.label)}</span><strong>${formatStatNumber(metric.value)}</strong><small>${escapeHtml(metric.note)}</small>`;
    grid.append(card);
  });
  return grid;
}

function playStatsTimeline(commits) {
  const section = document.createElement("section");
  section.className = "play-stats-timeline";
  section.innerHTML = "<h4>Recent checkpoints</h4>";
  const rows = commits.slice().reverse().slice(-24);
  if (!rows.length) {
    section.append(emptyDeckPlayMessage("No checkpoints recorded yet."));
    return section;
  }
  const max = Math.max(1, ...rows.map((commit) => Math.max(Number(commit.spellsCast) || 0, Number(commit.manaProduced) || 0, Number(commit.manaUsed) || 0)));
  const chart = document.createElement("div");
  chart.className = "play-timeline-bars";
  rows.forEach((commit) => {
    const bar = document.createElement("span");
    const spells = Number(commit.spellsCast) || 0;
    const manaUsed = Number(commit.manaUsed) || 0;
    const manaProduced = Number(commit.manaProduced) || 0;
    bar.title = `Turn ${commit.turn}: ${spells} spells, ${manaUsed} mana used, ${manaProduced} mana produced`;
    bar.innerHTML = `
      <i class="spell" style="height:${timelineHeight(spells, max)}%"></i>
      <i class="mana-used" style="height:${timelineHeight(manaUsed, max)}%"></i>
      <i class="mana-produced" style="height:${timelineHeight(manaProduced, max)}%"></i>
      <b>T${Number(commit.turn) || 1}</b>
      <small>${escapeHtml(compactDateLabel(commit.committedAt))}</small>
    `;
    chart.append(bar);
  });
  const legend = document.createElement("div");
  legend.className = "play-stats-legend";
  legend.innerHTML = "<span><i class=\"spell\"></i>Spells</span><span><i class=\"mana-used\"></i>Mana used</span><span><i class=\"mana-produced\"></i>Mana produced</span>";
  section.append(chart, legend);
  return section;
}

function timelineHeight(value, max) {
  const numeric = Number(value) || 0;
  return Math.max(numeric ? 8 : 2, (numeric / Math.max(1, max)) * 100);
}

function playStatsBreakdownGrid(stats) {
  const grid = document.createElement("div");
  grid.className = "deck-breakdown-grid play-stats-breakdowns";
  const spellRows = Object.entries(stats.spellsByType || {})
    .map(([label, value]) => ({ label, value: Number(value) || 0, display: `${Number(value) || 0}`, color: typeColor(label) }))
    .filter((row) => row.value > 0)
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
  const manaRows = Object.entries(stats.manaByColor || {})
    .map(([label, value]) => ({ label, value: Number(value) || 0, display: `${Number(value) || 0}`, color: playManaColor(label) }))
    .filter((row) => row.value > 0)
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
  grid.append(
    breakdownChart("Spells Cast by Type", spellRows, "No spells have been committed yet."),
    breakdownChart("Mana Produced by Color", manaRows, "No mana production has been committed yet."),
  );
  return grid;
}

function playStatsRecentTable(commits) {
  const section = document.createElement("section");
  section.className = "play-stats-table-section";
  section.innerHTML = "<h4>Recent recorded actions</h4>";
  const table = document.createElement("table");
  table.className = "play-stats-table";
  table.innerHTML = "<thead><tr><th>When</th><th>Room</th><th>Turn</th><th>Spells</th><th>Mana</th><th>Recorded detail</th></tr></thead>";
  const body = document.createElement("tbody");
  commits.slice(0, 80).forEach((commit) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${escapeHtml(localDateTime(commit.committedAt))}</td>
      <td>${escapeHtml(commit.roomName || commit.roomId || "Game")}</td>
      <td>${Number(commit.turn) || 1}</td>
      <td>${Number(commit.spellsCast) || 0}</td>
      <td>${Number(commit.manaUsed) || 0} used / ${Number(commit.manaProduced) || 0} made</td>
      <td>${escapeHtml(playCommitEventSummary(commit))}</td>
    `;
    body.append(row);
  });
  table.append(body);
  section.append(table);
  return section;
}

function playCommitEventSummary(commit) {
  const events = Array.isArray(commit.events) ? commit.events : [];
  const spells = events.filter((event) => event.kind === "spell").map((event) => event.cardName).filter(Boolean);
  const mana = events.filter((event) => event.kind === "mana").map((event) => event.cardName).filter(Boolean);
  const pieces = [];
  if (spells.length) pieces.push(`Cast ${spells.slice(0, 3).join(", ")}${spells.length > 3 ? ` +${spells.length - 3}` : ""}`);
  if (mana.length) pieces.push(`Mana from ${mana.slice(0, 3).join(", ")}${mana.length > 3 ? ` +${mana.length - 3}` : ""}`);
  if (!pieces.length && Array.isArray(commit.logEvents) && commit.logEvents.length) {
    pieces.push(commit.logEvents.slice(0, 2).map((event) => event.message).filter(Boolean).join(" · "));
  }
  return pieces.filter(Boolean).join(" · ") || commit.reason || "Checkpoint saved";
}

function averageStat(value, divisor) {
  const denominator = Number(divisor) || 0;
  if (!denominator) return "0";
  return ((Number(value) || 0) / denominator).toFixed(1).replace(/\.0$/, "");
}

function formatStatNumber(value) {
  const numeric = Number(value) || 0;
  return Number.isInteger(numeric) ? String(numeric) : numeric.toFixed(1).replace(/\.0$/, "");
}

function localDateTime(timestamp) {
  return Number(timestamp) ? new Date(Number(timestamp)).toLocaleString() : "Unknown";
}

function playManaColor(label) {
  const text = String(label || "");
  if (text.includes("W")) return colorSwatch("W");
  if (text.includes("U")) return colorSwatch("U");
  if (text.includes("B")) return colorSwatch("B");
  if (text.includes("R")) return colorSwatch("R");
  if (text.includes("G")) return colorSwatch("G");
  if (text.includes("C")) return colorSwatch("C");
  return "#8ee7d6";
}

function applyDeckStatsFilters() {
  renderDeckStatsContent();
  if (!els.deckStatsApplyButton) return;
  const original = els.deckStatsApplyButton.textContent;
  els.deckStatsApplyButton.textContent = "Applied";
  window.setTimeout(() => {
    if (els.deckStatsApplyButton) els.deckStatsApplyButton.textContent = original || "Apply";
  }, 700);
}

function scrollDeckStatsToProbability() {
  const target = els.deckStatsContent?.querySelector(".deck-probability-section");
  if (!target || !els.deckStatsContent) return;
  const containerTop = els.deckStatsContent.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;
  els.deckStatsContent.scrollTop = Math.max(0, els.deckStatsContent.scrollTop + targetTop - containerTop);
}

function priceAndCostBreakdownSection(cards) {
  const section = document.createElement("section");
  section.className = "deck-stat-section deck-price-cost-section";
  section.innerHTML = "<h3>Price and Cost</h3>";
  const grid = document.createElement("div");
  grid.className = "deck-breakdown-grid";
  grid.append(
    breakdownChart("Price by Category", priceByCategoryRows(cards), "No priced cards"),
    breakdownChart("Mana Cost by Color", costByColorRows(cards), "No colored mana costs"),
  );
  section.append(grid);
  return section;
}

function priceByCategoryRows(cards) {
  const totals = new Map();
  cards.forEach((card) => {
    const label = deckCategory(card);
    totals.set(label, (totals.get(label) || 0) + deckCardTotalPrice(card));
  });
  return [...totals.entries()]
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, value]) => ({
      label,
      value,
      display: formatUsd(value),
      color: typeColor(label),
    }));
}

function costByColorRows(cards) {
  const totals = costPipTotals(cards);
  return deckStatsLegalColors(cards)
    .map((color) => ({
      label: color === "C" ? "Colorless" : colorLabel([color]),
      value: Number(totals[color]) || 0,
      display: `${Number(totals[color]) || 0} pip${Number(totals[color]) === 1 ? "" : "s"}`,
      color: colorSwatch(color),
      icon: manaSymbol(color),
    }))
    .filter((row) => row.value > 0);
}

function breakdownChart(title, rows, emptyText) {
  const wrap = document.createElement("article");
  wrap.className = "deck-breakdown-chart";
  wrap.innerHTML = `<h4>${escapeHtml(title)}</h4>`;
  if (!rows.length) {
    const empty = document.createElement("p");
    empty.className = "workspace-note";
    empty.textContent = emptyText;
    wrap.append(empty);
    return wrap;
  }
  const max = Math.max(1, ...rows.map((row) => Number(row.value) || 0));
  rows.forEach((row) => {
    const item = document.createElement("div");
    item.className = "deck-breakdown-row";
    item.style.setProperty("--bar-width", `${Math.max(4, ((Number(row.value) || 0) / max) * 100)}%`);
    item.style.setProperty("--bar-color", row.color || "#8ee7d6");
    item.innerHTML = `
      <span>${row.icon ? `<b>${escapeHtml(row.icon)}</b>` : ""}${escapeHtml(row.label)}</span>
      <div><i></i></div>
      <strong>${escapeHtml(row.display)}</strong>
    `;
    wrap.append(item);
  });
  return wrap;
}

async function loadDeckPriceHistory(deckId = selectedBuilderDeckId) {
  if (!account || !deckId) return;
  if (deckPriceHistoryCache.has(deckId)) {
    if (els.deckStatsDialog?.open) renderDeckStatsContent();
    return;
  }
  deckPriceHistoryCache.set(deckId, []);
  try {
    const result = await accountApi(`/api/account/decks/${encodeURIComponent(deckId)}/price-history`);
    deckPriceHistoryCache.set(deckId, result.history || []);
  } catch (error) {
    deckPriceHistoryCache.set(deckId, [{ error: error.message, capturedAt: Date.now(), cards: [], totalsUsd: {} }]);
  }
  if (els.deckStatsDialog?.open && deckId === selectedBuilderDeckId) renderDeckStatsContent();
}

function priceHistorySection(cards) {
  const section = document.createElement("section");
  section.className = "deck-stat-section deck-price-history-section";
  const deck = currentBuilderDeck();
  const history = priceHistoryWithCurrent(cards, deck.id);
  const selectedCard = selectedPriceHistoryCardKey
    ? cards.find((card) => deckPriceCardKey(card) === selectedPriceHistoryCardKey)
    : null;
  const points = selectedCard
    ? cardPriceHistoryPoints(history, selectedCard)
    : deckPriceHistoryPoints(history);
  const latest = points[points.length - 1]?.value || deckBuilderTotalPrice() || 0;
  section.innerHTML = `
    <header class="price-history-heading">
      <div>
        <h3>Price history</h3>
        <span>${escapeHtml(priceSourceLabel(deckPriceSource))} · ${selectedCard ? escapeHtml(selectedCard.name) : "Whole deck"}</span>
      </div>
      <strong>${formatUsd(latest)}</strong>
    </header>
  `;
  section.append(priceHistoryChart(selectedCard ? selectedCard.name : "Deck value", points));
  const note = document.createElement("p");
  note.className = "workspace-note price-history-note";
  note.textContent = deck.id
    ? "A daily snapshot is saved when this deck is saved. Click a card row to graph that card instead of the whole deck."
    : "Save this deck to begin storing daily price snapshots.";
  section.append(note, priceCardTable(cards));
  return section;
}

function priceHistoryWithCurrent(cards, deckId = selectedBuilderDeckId) {
  const saved = deckId ? [...(deckPriceHistoryCache.get(deckId) || [])].filter((snapshot) => !snapshot.error) : [];
  const current = currentPriceSnapshot(cards);
  const last = saved[saved.length - 1];
  if (!last || new Date(last.capturedAt).toISOString().slice(0, 10) !== new Date(current.capturedAt).toISOString().slice(0, 10)) {
    saved.push(current);
  } else {
    saved[saved.length - 1] = { ...last, ...current, id: last.id || current.id };
  }
  return saved;
}

function currentPriceSnapshot(cards) {
  const snapshotCards = cards.map((card) => ({
    key: deckPriceCardKey(card),
    name: card.name,
    displayName: card.displayName || card.name,
    quantity: Number(card.quantity) || 1,
    set: card.set || "",
    collectorNumber: card.collectorNumber || "",
    finish: card.finish || "",
    pricesUsd: card.pricesUsd || { scryfall: Number(card.priceUsd) || 0 },
  }));
  return {
    id: "current",
    capturedAt: Date.now(),
    capturedDay: new Date().toISOString().slice(0, 10),
    totalsUsd: deckPriceTotalsFromCards(cards),
    cards: snapshotCards,
  };
}

function deckPriceTotalsFromCards(cards) {
  return cards.reduce((totals, card) => {
    const quantity = Number(card.quantity) || 1;
    const prices = card.pricesUsd && typeof card.pricesUsd === "object" ? card.pricesUsd : { scryfall: Number(card.priceUsd) || 0 };
    Object.entries(prices).forEach(([source, value]) => {
      totals[source] = (totals[source] || 0) + (Number(value) || 0) * quantity;
    });
    return totals;
  }, {});
}

function deckPriceHistoryPoints(history) {
  return history.map((snapshot) => ({
    at: Number(snapshot.capturedAt) || Date.now(),
    label: compactDateLabel(snapshot.capturedAt),
    value: priceFromSource(snapshot.totalsUsd, deckPriceSource) ?? (normalizePriceSource(deckPriceSource) === "scryfall" ? Number(snapshot.totalUsd) || 0 : 0),
  }));
}

function cardPriceHistoryPoints(history, card) {
  const key = deckPriceCardKey(card);
  const name = String(card.name || "").toLowerCase();
  return history.map((snapshot) => {
    const entry = (snapshot.cards || []).find((candidate) => candidate.key === key || String(candidate.name || "").toLowerCase() === name);
    return {
      at: Number(snapshot.capturedAt) || Date.now(),
      label: compactDateLabel(snapshot.capturedAt),
      value: entry ? priceFromSource(entry.pricesUsd, deckPriceSource) ?? 0 : 0,
    };
  });
}

function priceHistoryChart(title, points) {
  const wrap = document.createElement("div");
  wrap.className = "price-history-chart";
  const cleanPoints = points.length ? points : [{ label: "Now", value: 0, at: Date.now() }];
  const max = Math.max(1, ...cleanPoints.map((point) => Number(point.value) || 0));
  wrap.innerHTML = `<h4>${escapeHtml(title)}</h4>`;
  const bars = document.createElement("div");
  bars.className = "price-history-bars";
  cleanPoints.slice(-24).forEach((point) => {
    const bar = document.createElement("span");
    const value = Number(point.value) || 0;
    bar.style.setProperty("--price-height", `${Math.max(value ? 7 : 2, (value / max) * 100)}%`);
    bar.title = `${point.label}: ${formatUsd(value)}`;
    bar.innerHTML = `<i></i><b>${escapeHtml(formatUsd(value))}</b><small>${escapeHtml(point.label)}</small>`;
    bars.append(bar);
  });
  wrap.append(bars);
  return wrap;
}

function priceCardTable(cards) {
  const table = document.createElement("table");
  table.className = "price-card-table";
  table.innerHTML = "<thead><tr><th>Card</th><th>Qty</th><th>Unit</th><th>Total</th></tr></thead>";
  const body = document.createElement("tbody");
  cards
    .slice()
    .sort((a, b) => deckCardTotalPrice(b) - deckCardTotalPrice(a) || a.name.localeCompare(b.name))
    .forEach((card) => {
      const key = deckPriceCardKey(card);
      const row = document.createElement("tr");
      if (key === selectedPriceHistoryCardKey) row.classList.add("selected");
      row.tabIndex = 0;
      row.innerHTML = `
        <td>${escapeHtml(card.name)}</td>
        <td>${Number(card.quantity) || 1}</td>
        <td>${formatUsd(deckCardUnitPrice(card))}</td>
        <td>${formatUsd(deckCardTotalPrice(card))}</td>
      `;
      const selectRow = () => {
        selectedPriceHistoryCardKey = selectedPriceHistoryCardKey === key ? "" : key;
        renderDeckStatsContent();
      };
      row.addEventListener("click", selectRow);
      row.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        selectRow();
      });
      body.append(row);
    });
  table.append(body);
  return table;
}

function deckPriceCardKey(card) {
  const set = String(card?.set || "").toLowerCase();
  const collector = String(card?.collectorNumber || "").toLowerCase();
  if (set && collector) return `${set}:${collector}:${String(card?.finish || "").toLowerCase()}`;
  return `${String(card?.name || "").toLowerCase()}:${String(card?.finish || "").toLowerCase()}`;
}

function compactDateLabel(timestamp) {
  const date = new Date(Number(timestamp) || Date.now());
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
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
    if (!consumesMana(card)) return;
    const mv = Math.max(0, Math.min(8, Math.floor(Number(card.manaValue) || 0)));
    const label = mv >= 8 ? "8+" : String(mv);
    curve.set(label, (curve.get(label) || 0) + (Number(card.quantity) || 1));
  });
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8+"].map((label) => ({ label, value: curve.get(label) || 0, color: "#8ee7d6" }));
}

function consumesMana(card) {
  if (card.isLand || /\bLand\b/i.test(card.typeLine || "")) return false;
  return /\{(?:[WUBRGCX]|\d+)\}/i.test(String(card.manaCost || "")) || Number(card.manaValue) > 0;
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

function productionSection(cards, selectedColor = "all") {
  const section = document.createElement("section");
  section.className = "deck-stat-section deck-production-section deck-stats-overview-section";
  section.innerHTML = "<h3>Deck stats</h3>";
  const colors = productionColorsForStats(cards, selectedColor);
  section.append(
    productionStrip("Cost", costPipTotals(cards), colors),
    productionStrip("Production", productionTotals(cards), colors),
  );
  const rows = document.createElement("div");
  rows.className = "deck-production-rows";
  colors.forEach((color) => {
    rows.append(productionColorRow(color, cards));
  });
  section.append(rows, manaSummaryBlock(cards), manaCurveChartBlock(cards), colorCurveBlock(cards, colors));
  return section;
}

function syncDeckStatsColorOptions(cards) {
  if (!els.deckStatsProductionSelect) return;
  const legal = deckStatsLegalColors(cards);
  [...els.deckStatsProductionSelect.options].forEach((option) => {
    if (option.value === "all") return;
    const enabled = legal.includes(option.value);
    option.hidden = !enabled;
    option.disabled = !enabled;
  });
  if (els.deckStatsProductionSelect.value !== "all" && !legal.includes(els.deckStatsProductionSelect.value)) {
    els.deckStatsProductionSelect.value = "all";
  }
}

function productionColorsForStats(cards, selectedColor = "all") {
  const legal = deckStatsLegalColors(cards);
  if (selectedColor !== "all" && legal.includes(selectedColor)) return [selectedColor];
  return legal;
}

function deckStatsLegalColors(cards) {
  const order = ["W", "U", "B", "R", "G"];
  const commander = commanderCardForStats(cards);
  const identity = (commander?.colorIdentity?.length ? commander.colorIdentity : commander?.colors || [])
    .map((color) => String(color).toUpperCase())
    .filter((color) => order.includes(color));
  const colors = identity.length ? order.filter((color) => identity.includes(color)) : colorsUsedInDeckCosts(cards);
  return [...colors, "C"];
}

function commanderCardForStats(cards) {
  const commanderName = els.deckBuilderCommanderInput.value.trim().toLowerCase();
  if (commanderName) {
    const exact = cards.find((card) => card.name.toLowerCase() === commanderName);
    if (exact) return exact;
  }
  return cards.find((card) => deckCategory(card) === "Commander") || null;
}

function colorsUsedInDeckCosts(cards) {
  const used = new Set();
  cards.forEach((card) => manaSymbolsInCost(card).forEach((symbol) => {
    if (["W", "U", "B", "R", "G"].includes(symbol)) used.add(symbol);
  }));
  return ["W", "U", "B", "R", "G"].filter((color) => used.has(color));
}

function productionStrip(label, totals, colors) {
  const total = colors.reduce((sum, color) => sum + (Number(totals[color]) || 0), 0);
  const wrap = document.createElement("div");
  wrap.className = "production-strip";
  const title = document.createElement("strong");
  title.textContent = label;
  const bar = document.createElement("div");
  bar.className = "production-strip-bar";
  colors.forEach((color) => {
    const value = Number(totals[color]) || 0;
    if (!value) return;
    const span = document.createElement("span");
    span.style.setProperty("--segment-color", colorSwatch(color));
    span.style.setProperty("--segment-grow", String(value / Math.max(1, total)));
    span.textContent = manaSymbol(color);
    bar.append(span);
  });
  wrap.append(title, bar);
  return wrap;
}

function productionColorRow(color, cards) {
  const cost = colorCostStats(cards, color);
  const production = colorProductionStats(cards, color);
  const max = Math.max(1, cost.percent, production.percent);
  const row = document.createElement("div");
  row.className = "production-color-row";
  row.style.setProperty("--mana-color", colorSwatch(color));
  row.innerHTML = `
    <span class="mana-disc">${escapeHtml(manaSymbol(color))}</span>
    <div class="production-color-bars">
      ${productionMetric("Cost", cost.percent, `${cost.pips} pips - ${cost.cards} cards`, max)}
      ${productionMetric("Production", production.percent, `${production.mana} mana - ${production.cards} cards`, max)}
    </div>
  `;
  return row;
}

function manaSummaryBlock(cards) {
  const stats = manaCurveSummary(cards);
  const wrap = document.createElement("div");
  wrap.className = "deck-mana-summary";
  wrap.innerHTML = `
    <strong>Avg Mana Value: ${stats.average.toFixed(2)}</strong>
    <span>Total Mana Value: ${stats.total.toFixed(2)}</span>
  `;
  return wrap;
}

function manaCurveSummary(cards) {
  let total = 0;
  let count = 0;
  cards.forEach((card) => {
    if (!consumesMana(card)) return;
    const quantity = Number(card.quantity) || 1;
    total += (Number(card.manaValue) || 0) * quantity;
    count += quantity;
  });
  return { total, count, average: count ? total / count : 0 };
}

function manaCurveChartBlock(cards) {
  const rows = manaCurveRows(cards);
  const max = Math.max(1, ...rows.map((row) => row.value));
  const wrap = document.createElement("section");
  wrap.className = "deck-mana-curve-chart";
  wrap.innerHTML = `<h4>Mana curve</h4>`;
  const chart = document.createElement("div");
  chart.className = "mana-curve-bars";
  rows.forEach((row) => chart.append(manaCurveColumn(row, max, "#ff8a12")));
  wrap.append(chart);
  return wrap;
}

function colorCurveBlock(cards, colors) {
  const wrap = document.createElement("section");
  wrap.className = "deck-color-curves";
  wrap.innerHTML = `<h4>Mana curve by color</h4>`;
  const grid = document.createElement("div");
  grid.className = "deck-color-curve-grid";
  colors.forEach((color) => {
    const rows = manaCurveRows(cards, color);
    const max = Math.max(1, ...rows.map((row) => row.value));
    const card = document.createElement("article");
    card.className = "deck-color-curve-card";
    card.style.setProperty("--mana-color", colorSwatch(color));
    card.innerHTML = `<h5><span>${escapeHtml(manaSymbol(color))}</span>${escapeHtml(colorCurveTitle(color))}</h5>`;
    const chart = document.createElement("div");
    chart.className = "mana-curve-bars small";
    rows.forEach((row) => chart.append(manaCurveColumn(row, max, colorSwatch(color))));
    card.append(chart);
    grid.append(card);
  });
  wrap.append(grid);
  return wrap;
}

function colorCurveTitle(color) {
  if (color === "C") return "Colorless Spells";
  return `${colorLabel([color])} Spells`;
}

function manaCurveRows(cards, color = "all") {
  const curve = new Map();
  cards.forEach((card) => {
    if (!consumesMana(card) || !cardMatchesCurveColor(card, color)) return;
    const quantity = Number(card.quantity) || 1;
    const mv = Math.max(0, Math.min(8, Math.floor(Number(card.manaValue) || 0)));
    const label = mv >= 8 ? "8+" : String(mv);
    curve.set(label, (curve.get(label) || 0) + quantity);
  });
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8+"].map((label) => ({ label, value: curve.get(label) || 0 }));
}

function cardMatchesCurveColor(card, color = "all") {
  if (color === "all") return true;
  const costSymbols = manaSymbolsInCost(card);
  if (color === "C") return !costSymbols.some((symbol) => ["W", "U", "B", "R", "G"].includes(symbol));
  return costSymbols.includes(color);
}

function manaCurveColumn(row, max, color) {
  const column = document.createElement("div");
  column.className = "mana-curve-column";
  column.style.setProperty("--curve-height", `${Math.max(row.value ? 8 : 0, (row.value / Math.max(1, max)) * 100)}%`);
  column.style.setProperty("--curve-color", color);
  column.innerHTML = `<span>${row.value || ""}</span><i></i><strong>${escapeHtml(row.label)}</strong>`;
  return column;
}

function productionMetric(label, percent, detail, max) {
  const width = Math.max(2, (Number(percent) || 0) / Math.max(1, max) * 100);
  return `<div class="production-metric"><strong>${escapeHtml(label)}</strong><div class="production-meter"><i style="width:${width}%"></i><span>${Math.round(percent)}%</span></div><small>${escapeHtml(detail)}</small></div>`;
}

function costPipTotals(cards) {
  const totals = { W: 0, U: 0, B: 0, R: 0, G: 0, C: 0 };
  cards.forEach((card) => {
    const quantity = Number(card.quantity) || 1;
    manaSymbolsInCost(card).forEach((symbol) => {
      if (totals[symbol] !== undefined) totals[symbol] += quantity;
    });
  });
  return totals;
}

function productionTotals(cards) {
  const totals = { W: 0, U: 0, B: 0, R: 0, G: 0, C: 0 };
  cards.forEach((card) => {
    const quantity = Number(card.quantity) || 1;
    producedManaForDeckCard(card).forEach((symbol) => {
      if (totals[symbol] !== undefined) totals[symbol] += quantity;
    });
  });
  return totals;
}

function colorCostStats(cards, color) {
  let pips = 0;
  const names = new Set();
  cards.forEach((card) => {
    const quantity = Number(card.quantity) || 1;
    const count = manaSymbolsInCost(card).filter((symbol) => symbol === color).length;
    if (!count) return;
    pips += count * quantity;
    names.add(card.name);
  });
  return { pips, cards: names.size, percent: percentage(pips, cards.reduce((sum, card) => sum + manaSymbolsInCost(card).length * (Number(card.quantity) || 1), 0)) };
}

function colorProductionStats(cards, color) {
  let mana = 0;
  const names = new Set();
  cards.forEach((card) => {
    const quantity = Number(card.quantity) || 1;
    const count = producedManaForDeckCard(card).filter((symbol) => symbol === color).length;
    if (!count) return;
    mana += count * quantity;
    names.add(card.name);
  });
  return { mana, cards: names.size, percent: percentage(mana, cards.reduce((sum, card) => sum + producedManaForDeckCard(card).length * (Number(card.quantity) || 1), 0)) };
}

function percentage(value, total) {
  return total ? (Number(value) || 0) / total * 100 : 0;
}

function manaSymbolsInCost(card) {
  return [...String(card.manaCost || "").matchAll(/\{([^}]+)\}/g)]
    .flatMap(([, symbol]) => symbol.split("/"))
    .map((symbol) => symbol.toUpperCase())
    .filter((symbol) => ["W", "U", "B", "R", "G", "C"].includes(symbol));
}

function producedManaForDeckCard(card) {
  const explicit = Array.isArray(card.producedMana) ? card.producedMana.map((symbol) => String(symbol).toUpperCase()) : [];
  if (explicit.length) return explicit.filter((symbol) => ["W", "U", "B", "R", "G", "C"].includes(symbol));
  if (card.isLand) return (card.colorIdentity?.length ? card.colorIdentity : ["C"]).map((symbol) => String(symbol).toUpperCase());
  return [...String(card.oracleText || "").matchAll(/\{([WUBRGC])\}/gi)].map((match) => match[1].toUpperCase());
}

function manaSymbol(color) {
  return ({ W: "☼", U: "◢", B: "●", R: "◉", G: "♣", C: "◇" })[color] || color;
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
      return { label, value: odds, display: `${Math.round(odds)}% · ${oddsRatio(odds)} (${value})`, color: typeColor(label) };
    });
}

function probabilitySection(cards, total) {
  const section = document.createElement("section");
  section.className = "deck-stat-section deck-probability-section";
  section.append(probabilityControls(total));
  const table = document.createElement("table");
  table.className = "probability-table";
  const label = probabilitySortLabel(probabilitySettings.groupBy);
  table.innerHTML = `<thead><tr><th>${escapeHtml(label)}</th><th>Qty</th><th>Odds</th></tr></thead>`;
  const body = document.createElement("tbody");
  probabilityRows(cards, total, probabilitySettings.groupBy).forEach((row) => {
    const tr = document.createElement("tr");
    tr.title = oddsRatio(row.odds);
    tr.innerHTML = `<td>${escapeHtml(row.label)}</td><td>${row.quantity}</td><td>${Math.round(row.odds)}%</td>`;
    body.append(tr);
  });
  table.append(body);
  section.append(table);
  return section;
}

function probabilityControls(total) {
  const maxCards = Math.max(1, total);
  probabilitySettings.targetCount = clampInteger(probabilitySettings.targetCount, 1, maxCards);
  probabilitySettings.drawnCards = clampInteger(probabilitySettings.drawnCards, 1, maxCards);
  const controls = document.createElement("div");
  controls.className = "probability-builder";
  controls.innerHTML = `
    <h3>Probability of drawing</h3>
    <label class="probability-field probability-full">
      <span class="sr-only">Probability mode</span>
      <select data-probability-control="mode">
        <option value="atLeast"${probabilitySettings.mode === "atLeast" ? " selected" : ""}>At least</option>
        <option value="exactly"${probabilitySettings.mode === "exactly" ? " selected" : ""}>Exactly</option>
      </select>
    </label>
    ${probabilityStepper("targetCount", probabilitySettings.targetCount, 1, maxCards, "card target")}
    <strong class="probability-copy">card(s) by</strong>
    <label class="probability-field probability-full">
      <span class="sr-only">Group draw odds by</span>
      <select data-probability-control="groupBy">
        ${probabilityGroupOptions().map((option) => `<option value="${option.value}"${option.value === probabilitySettings.groupBy ? " selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </label>
    <strong class="probability-copy">having drawn</strong>
    ${probabilityStepper("drawnCards", probabilitySettings.drawnCards, 1, maxCards, "cards drawn")}
    <strong class="probability-copy">card(s)</strong>
  `;
  controls.querySelectorAll("[data-probability-control]").forEach((control) => {
    control.addEventListener("change", handleProbabilityControlChange);
    control.addEventListener("input", handleProbabilityControlChange);
  });
  controls.querySelectorAll("[data-probability-step]").forEach((button) => {
    button.addEventListener("click", handleProbabilityStep);
  });
  return controls;
}

function probabilityStepper(id, value, min, max, label) {
  const safeValue = clampInteger(value, min, max);
  return `
    <div class="probability-stepper" data-probability-stepper="${id}">
      <input data-probability-control="${id}" type="number" min="${min}" max="${max}" step="1" value="${safeValue}" aria-label="${escapeHtml(label)}">
      <div class="probability-step-buttons">
        <button type="button" data-probability-step="${id}" data-delta="-1" aria-label="Decrease ${escapeHtml(label)}">-</button>
        <button type="button" data-probability-step="${id}" data-delta="1" aria-label="Increase ${escapeHtml(label)}">+</button>
      </div>
    </div>
  `;
}

function clampInteger(value, min, max) {
  const numeric = Math.floor(Number(value));
  if (!Number.isFinite(numeric)) return min;
  return Math.max(min, Math.min(max, numeric));
}

function probabilityGroupOptions() {
  return [
    { value: "name", label: "Card Name" },
    { value: "category", label: "Categories" },
    { value: "type", label: "Type" },
    { value: "subtype", label: "Subtype" },
    { value: "manaValue", label: "Mana Value" },
    { value: "keyword", label: "Keyword" },
    { value: "color", label: "Color" },
    { value: "rarity", label: "Rarity" },
  ];
}

function handleProbabilityControlChange(event) {
  const key = event.currentTarget.dataset.probabilityControl;
  if (!key) return;
  if (key === "mode") probabilitySettings.mode = event.currentTarget.value === "exactly" ? "exactly" : "atLeast";
  if (key === "groupBy") {
    probabilitySettings.groupBy = event.currentTarget.value || "category";
    if (els.deckStatsOddsSortSelect) els.deckStatsOddsSortSelect.value = probabilitySettings.groupBy;
  }
  if (key === "targetCount") probabilitySettings.targetCount = clampInteger(event.currentTarget.value, 1, 300);
  if (key === "drawnCards") probabilitySettings.drawnCards = clampInteger(event.currentTarget.value, 1, 300);
  renderDeckStatsContent();
}

function handleProbabilityStep(event) {
  const key = event.currentTarget.dataset.probabilityStep;
  const delta = Number(event.currentTarget.dataset.delta) || 0;
  if (!key || !delta) return;
  probabilitySettings[key] = clampInteger((Number(probabilitySettings[key]) || 1) + delta, 1, 300);
  renderDeckStatsContent();
}

function probabilityRows(cards, total, sortMode) {
  const grouped = new Map();
  cards.forEach((card) => {
    const label = probabilityGroup(card, sortMode);
    const existing = grouped.get(label) || { label, quantity: 0, sortValue: probabilitySortValue(card, sortMode) };
    existing.quantity += Number(card.quantity) || 1;
    grouped.set(label, existing);
  });
  return [...grouped.values()]
    .map((row) => ({
      ...row,
      odds: drawProbability(total, row.quantity, probabilitySettings.drawnCards, probabilitySettings.targetCount, probabilitySettings.mode),
    }))
    .sort((a, b) => String(a.sortValue).localeCompare(String(b.sortValue), undefined, { numeric: true }) || a.label.localeCompare(b.label));
}

function probabilityGroup(card, sortMode) {
  if (sortMode === "category") return deckCategory(card);
  if (sortMode === "type") return primaryType(card);
  if (sortMode === "subtype") return primarySubtype(card);
  if (sortMode === "manaValue") return `MV ${Number(card.manaValue) || 0}`;
  if (sortMode === "keyword") return primaryKeyword(card);
  if (sortMode === "color") return colorLabel(card.colorIdentity || card.colors || []);
  if (sortMode === "rarity") return titleCase(card.rarity || "Unknown");
  return card.name;
}

function probabilitySortValue(card, sortMode) {
  if (sortMode === "manaValue") return Number(card.manaValue) || 0;
  if (sortMode === "rarity") return rarityRank(card.rarity);
  return probabilityGroup(card, sortMode);
}

function probabilitySortLabel(sortMode) {
  return ({ name: "Card Name", category: "Categories", type: "Type", subtype: "Subtype", manaValue: "Mana Value", keyword: "Keyword", color: "Color", rarity: "Rarity" })[sortMode] || "Card Name";
}

function oddsRatio(odds) {
  const value = Number(odds) || 0;
  if (value <= 0) return "1 in ∞";
  if (value >= 99.5) return "1 in 1";
  const ratio = 100 / value;
  return `1 in ${ratio < 10 ? ratio.toFixed(1).replace(/\.0$/, "") : Math.round(ratio)}`;
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
  return drawProbability(deckSize, copies, handSize, 1, "atLeast");
}

function drawProbability(deckSize, copies, handSize, targetCount, mode = "atLeast") {
  const deck = Math.max(0, Math.floor(Number(deckSize) || 0));
  const hits = Math.max(0, Math.min(deck, Math.floor(Number(copies) || 0)));
  const draws = Math.max(0, Math.min(deck, Math.floor(Number(handSize) || 0)));
  const target = Math.max(0, Math.floor(Number(targetCount) || 0));
  if (!deck || !draws || !hits) return 0;
  if (mode === "exactly") return clampPercent(hypergeometricProbability(deck, hits, draws, target) * 100);
  let probability = 0;
  const maxSuccess = Math.min(hits, draws);
  for (let successes = target; successes <= maxSuccess; successes += 1) {
    probability += hypergeometricProbability(deck, hits, draws, successes);
  }
  return clampPercent(probability * 100);
}

function hypergeometricProbability(deckSize, hits, draws, successes) {
  if (successes < 0 || successes > hits || successes > draws) return 0;
  const misses = deckSize - hits;
  const missDraws = draws - successes;
  if (missDraws < 0 || missDraws > misses) return 0;
  const logOdds = logCombination(hits, successes) + logCombination(misses, missDraws) - logCombination(deckSize, draws);
  return Number.isFinite(logOdds) ? Math.exp(logOdds) : 0;
}

function logCombination(total, chosen) {
  if (chosen < 0 || chosen > total) return Number.NEGATIVE_INFINITY;
  const count = Math.min(chosen, total - chosen);
  let value = 0;
  for (let index = 1; index <= count; index += 1) {
    value += Math.log(total - count + index) - Math.log(index);
  }
  return value;
}

function clampPercent(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

function deckGroupLabel(card, mode) {
  if (mode === "rarity") return titleCase(card.rarity || "unknown");
  if (mode === "price") {
    const price = deckCardUnitPrice(card);
    if (price >= 20) return "$20+";
    if (price >= 5) return "$5-$19.99";
    if (price >= 1) return "$1-$4.99";
    return "Under $1";
  }
  if (mode === "color") return colorLabel(card.colorIdentity || card.colors || []);
  if (mode === "manaValue") return `MV ${Number(card.manaValue) || 0}`;
  if (mode === "keyword") return primaryKeyword(card);
  if (mode === "category") return deckCategory(card);
  return primaryType(card);
}

function compareDeckCards(a, b, mode) {
  if (mode === "name" || mode === "alphabet") return a.name.localeCompare(b.name);
  if (mode === "category") return deckCategory(a).localeCompare(deckCategory(b)) || a.name.localeCompare(b.name);
  if (mode === "manaValue") return (Number(a.manaValue) || 0) - (Number(b.manaValue) || 0) || a.name.localeCompare(b.name);
  if (mode === "type") return primaryType(a).localeCompare(primaryType(b)) || a.name.localeCompare(b.name);
  if (mode === "subtype") return primarySubtype(a).localeCompare(primarySubtype(b)) || a.name.localeCompare(b.name);
  if (mode === "price") return deckCardUnitPrice(b) - deckCardUnitPrice(a) || a.name.localeCompare(b.name);
  if (mode === "color") return colorLabel(a.colorIdentity || a.colors || []).localeCompare(colorLabel(b.colorIdentity || b.colors || [])) || a.name.localeCompare(b.name);
  if (mode === "rarity") return rarityRank(a.rarity) - rarityRank(b.rarity) || a.name.localeCompare(b.name);
  if (mode === "keyword") return primaryKeyword(a).localeCompare(primaryKeyword(b)) || a.name.localeCompare(b.name);
  return a.name.localeCompare(b.name);
}

function primaryType(card) {
  const typeLine = String(card.typeLine || "");
  return ["Creature", "Instant", "Sorcery", "Artifact", "Enchantment", "Planeswalker", "Battle", "Land"].find((type) => new RegExp(`\\b${type}\\b`, "i").test(typeLine)) || "Other";
}

function deckCategory(card) {
  if (isDeckCommanderCard(card)) return "Commander";
  if (card.category) return card.category;
  if (card.isLand || /\bLand\b/i.test(card.typeLine || "")) return "Land";
  return primaryType(card);
}

function isDeckCommanderCard(card) {
  const commander = els.deckBuilderCommanderInput.value.trim();
  if (!commander) return false;
  if (card.isCommanderPlaceholder) return true;
  const candidates = [
    card.name,
    card.displayName,
    ...(Array.isArray(card.faces) ? card.faces.map((face) => face.name) : []),
  ];
  return candidates.some((candidate) => deckNameMatchesCommander(candidate, commander));
}

function primarySubtype(card) {
  const typeLine = String(card.typeLine || "");
  const [, subtype = ""] = typeLine.split("—").map((part) => part.trim());
  return subtype.split(/\s+/).filter(Boolean)[0] || "None";
}

function cardKeywords(card) {
  const listed = Array.isArray(card.keywords) ? card.keywords : [];
  const oracle = String(card.oracleText || "");
  const known = ["Flying", "Trample", "Vigilance", "Haste", "First strike", "Double strike", "Deathtouch", "Lifelink", "Menace", "Reach", "Ward", "Hexproof", "Flash", "Defender", "Prowess", "Scry", "Surveil", "Explore", "Proliferate", "Equip"];
  const detected = known.filter((keyword) => new RegExp(`\\b${keyword.replace(/\s+/g, "\\s+")}\\b`, "i").test(oracle));
  return [...new Set([...listed, ...detected].map((keyword) => titleCase(keyword)).filter(Boolean))];
}

function primaryKeyword(card) {
  return cardKeywords(card)[0] || "No Keyword";
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

function currentBuilderEntryForCard(cardName) {
  const target = normalizedDeckCardName(cardName);
  return parseDeckBuilderEntries(els.deckBuilderListInput.value)
    .find((entry) => normalizedDeckCardName(entry.name) === target) || null;
}

function deckBuilderEntryRawName(entry, printing = {}) {
  const set = String(printing.set || entry.set || "").trim().toLowerCase();
  const collectorNumber = String(printing.collectorNumber || entry.collectorNumber || "").trim();
  const parts = [entry.name || printing.name || ""];
  if (set && collectorNumber) parts.push(`(${set}) ${collectorNumber}`);
  if (entry.finish) parts.push(`*${entry.finish}*`);
  if (entry.category) parts.push(`[${entry.category}]`);
  if (Array.isArray(entry.tags) && entry.tags.length) parts.push(`^${entry.tags.join(",")}^`);
  return parts.filter(Boolean).join(" ");
}

function printingMatchesEntry(printing, entry) {
  if (!printing || !entry) return false;
  return String(printing.set || "").toLowerCase() === String(entry.set || "").toLowerCase()
    && String(printing.collectorNumber || "").toLowerCase() === String(entry.collectorNumber || "").toLowerCase();
}

async function openDeckPrintingDialog(cardName) {
  deckPrintingCardName = String(cardName || "").trim();
  if (!deckPrintingCardName) return;
  const requestId = deckPrintingRequestId + 1;
  deckPrintingRequestId = requestId;
  deckPrintingResults = [];
  els.printingDialogTitle.textContent = `${deckPrintingCardName} Printings`;
  els.printingDialogSummary.textContent = "Loading exact printings from Scryfall...";
  els.printingList.innerHTML = '<p class="empty-list-message">Loading printings...</p>';
  if (!els.printingDialog.open) els.printingDialog.showModal();
  try {
    const result = await api(`/api/scryfall/printings?name=${encodeURIComponent(deckPrintingCardName)}`);
    if (requestId !== deckPrintingRequestId) return;
    deckPrintingResults = result.cards || [];
    renderDeckPrintingDialog();
  } catch (error) {
    if (requestId !== deckPrintingRequestId) return;
    els.printingDialogSummary.textContent = error.message;
    els.printingList.innerHTML = '<p class="empty-list-message">Could not load printings.</p>';
  }
}

function renderDeckPrintingDialog() {
  const currentEntry = currentBuilderEntryForCard(deckPrintingCardName);
  els.printingDialogSummary.textContent = deckPrintingResults.length
    ? `${deckPrintingResults.length} printing${deckPrintingResults.length === 1 ? "" : "s"} found. Applying one writes its set and collector number into the decklist.`
    : "No printings were found.";
  els.printingList.innerHTML = "";
  if (!deckPrintingResults.length) {
    els.printingList.innerHTML = '<p class="empty-list-message">No printings found.</p>';
    return;
  }
  deckPrintingResults.forEach((printing, index) => {
    const card = document.createElement("article");
    card.className = "printing-card";
    if (printingMatchesEntry(printing, currentEntry)) card.classList.add("selected");
    const preview = deckPrintingPreview(printing, index);
    const details = document.createElement("div");
    details.className = "printing-details";
    details.innerHTML = `
      <strong>${escapeHtml(printing.name)}</strong>
      <span>${escapeHtml(printing.set?.toUpperCase() || "SET")} #${escapeHtml(printing.collectorNumber || "?")} · ${escapeHtml(printing.setName || "Unknown set")}</span>
      <span>${escapeHtml(titleCase(printing.rarity || "unknown"))} · ${formatUsd(searchCardUnitPrice(printing))} ${priceSourceShortLabel(deckPriceSource)}</span>
    `;
    const apply = document.createElement("button");
    apply.type = "button";
    apply.textContent = currentEntry ? "Apply" : "Add";
    apply.addEventListener("click", () => applyDeckPrinting(printing));
    card.append(preview, details, apply);
    els.printingList.append(card);
  });
}

function deckPrintingPreview(printing, index) {
  const preview = cardElement(deckSearchCardPreview(printing), null, "librarySearch", index);
  preview.classList.add("printing-preview-card");
  attachCardZoomHandlers(preview, "deck-printing", index);
  return preview;
}

function applyDeckPrinting(printing) {
  const before = deckHistorySnapshot();
  const entries = parseDeckBuilderEntries(els.deckBuilderListInput.value);
  const target = normalizedDeckCardName(deckPrintingCardName || printing.name);
  let entry = entries.find((candidate) => normalizedDeckCardName(candidate.name) === target);
  if (!entry) {
    entry = { quantity: 1, name: printing.name || deckPrintingCardName };
    entries.push(entry);
  }
  entry.set = String(printing.set || "").toLowerCase();
  entry.collectorNumber = String(printing.collectorNumber || "");
  entry.rawName = deckBuilderEntryRawName(entry, printing);
  els.deckBuilderListInput.value = serializeDeckBuilderEntries(entries);
  deckBuilderPreviewCollapsed = false;
  invalidateDeckMetadata();
  els.deckBuilderStatus.textContent = `${entry.name} printing set to ${entry.set.toUpperCase()} #${entry.collectorNumber}`;
  renderDeckBuilderPreview();
  renderDeckCardSearchResults();
  renderDeckPrintingDialog();
  recordDeckHistoryChange("Changed card printing", before);
}

function adjustBuilderCard(cardName, delta) {
  deckBuilderPreviewCollapsed = false;
  const before = deckHistorySnapshot();
  const entries = parseDeckBuilderEntries(els.deckBuilderListInput.value);
  const entry = entries.find((candidate) => candidate.name.toLowerCase() === cardName.toLowerCase());
  if (entry) entry.quantity = Math.max(0, entry.quantity + delta);
  else if (delta > 0) entries.push({ quantity: delta, name: cardName });
  els.deckBuilderListInput.value = serializeDeckBuilderEntries(entries);
  invalidateDeckMetadata();
  els.deckBuilderStatus.textContent = "Unsaved changes";
  renderDeckBuilderPreview();
  renderDeckCardSearchResults();
  recordDeckHistoryChange(delta > 0 ? "Added card" : "Removed card", before);
}

function mergeDeckBuilderEntries(currentEntries, importedEntries) {
  const current = aggregateDeckBuilderEntries(currentEntries, { sumBasicLands: false });
  const imported = aggregateDeckBuilderEntries(importedEntries, { sumBasicLands: true });
  return aggregateDeckBuilderEntries([...current, ...imported], { sumBasicLands: false });
}

function aggregateDeckBuilderEntries(entries, { sumBasicLands = false } = {}) {
  const merged = [];
  const byName = new Map();
  (entries || []).forEach((entry) => {
    const name = cleanDeckBuilderCardName(entry.name || entry.rawName || "");
    if (!name) return;
    const key = normalizedDeckCardName(name);
    const quantity = Math.max(1, Number(entry.quantity) || 1);
    const rawName = entry.rawName || name;
    const existing = byName.get(key);
    if (!existing) {
      const next = { quantity, name, rawName };
      byName.set(key, next);
      merged.push(next);
      return;
    }
    const shouldSum = sumBasicLands && isBasicLandName(name);
    existing.quantity = shouldSum
      ? existing.quantity + quantity
      : Math.max(existing.quantity, quantity);
    if (!existing.rawName && rawName) existing.rawName = rawName;
  });
  return merged;
}

function isBasicLandName(name) {
  return /^(?:snow-covered\s+)?(?:plains|island|swamp|mountain|forest|wastes)$/i.test(String(name || "").trim());
}

function parseBulkDeckImportText(text) {
  const entries = [];
  let commander = "";
  let commanderSection = false;
  String(text || "").split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) return;
    const commanderHeader = deckBuilderCommanderHeaderValue(line);
    if (commanderHeader) {
      commander = commander || commanderHeader;
      commanderSection = false;
      return;
    }
    if (isDeckBuilderSectionHeader(line)) {
      commanderSection = /^commander/i.test(line);
      return;
    }
    if (isDeckBuilderMetadataLine(line)) return;
    const entry = deckBuilderEntryFromLine(line);
    if (!entry) return;
    if (commanderSection && !commander) commander = entry.name;
    commanderSection = false;
    entries.push(entry);
  });
  return {
    commander,
    entries: aggregateDeckBuilderEntries(entries, { sumBasicLands: true }),
  };
}

function openBulkImportDialog() {
  els.bulkImportInput.value = "";
  if (!els.bulkImportDialog.open) els.bulkImportDialog.showModal();
  requestAnimationFrame(() => els.bulkImportInput.focus());
}

function applyBulkDeckImport(mode) {
  const before = deckHistorySnapshot();
  const importResult = parseBulkDeckImportText(els.bulkImportInput.value);
  const imported = importResult.entries;
  if (!imported.length) {
    els.bulkImportInput.focus();
    return;
  }
  if (importResult.commander && !els.deckBuilderCommanderInput.value.trim()) {
    els.deckBuilderCommanderInput.value = importResult.commander;
  }
  const entries = mode === "append"
    ? mergeDeckBuilderEntries(parseDeckBuilderEntries(els.deckBuilderListInput.value), imported)
    : mergeDeckBuilderEntries([], imported);
  els.deckBuilderListInput.value = serializeDeckBuilderEntries(entries);
  deckBuilderPreviewCollapsed = false;
  deckMetadataLoadingTitle = "Importing Deck";
  deckMetadataLoadingSummary = "Resolving card images, printings, and price providers.";
  invalidateDeckMetadata();
  els.bulkImportDialog.close();
  deckCardSearchResults = [];
  renderDeckCardSearchResults();
  els.deckBuilderStatus.textContent = `${entries.reduce((total, entry) => total + entry.quantity, 0)} cards imported - unsaved changes`;
  renderDeckBuilderPreview();
  recordDeckHistoryChange(mode === "append" ? "Appended bulk import" : "Replaced decklist", before);
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
        deckId: pendingJoinDeck.id || "",
        playerName: accountDisplayName("Player"),
      },
    }),
  });
  storeRoomPassword(room.id, password);
  history.replaceState(null, "", sameOriginRoomUrl(room.selfUrl));
  pendingJoinDeck = null;
  pendingPasswordJoin = null;
  els.joinWithDeckDialog.close();
  enterRoomView(room);
  await refreshState({ quiet: true });
}

async function joinRoomWithDeck() {
  if (!pendingJoinDeck) return;
  const code = els.joinWithDeckCodeInput.value.trim();
  const passwordStep = !els.joinWithDeckPasswordLabel.classList.contains("hidden");
  setDisabled(els.submitJoinWithDeckButton, true);
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
    setDisabled(els.submitJoinWithDeckButton, false);
    hideGameLoading();
  }
}

function renderDeckCardSearchResults() {
  els.deckCardSearchResults.innerHTML = "";
  const hasResults = deckCardSearchResults.length > 0;
  els.deckCardSearchResults.classList.toggle("hidden", !hasResults);
  setDeckCardSearchDismissable(hasResults);
  deckCardSearchResults.forEach((card, index) => {
    const item = document.createElement("article");
    item.className = "deck-search-result";
    const preview = cardElement(deckSearchCardPreview(card), null, "librarySearch", index);
    preview.classList.add("deck-search-preview-card");
    const details = document.createElement("div");
    details.className = "deck-search-details";
    details.innerHTML = `
      <strong>${escapeHtml(card.name)}</strong>
      <span>${escapeHtml(card.typeLine || "Card")}</span>
    `;
    const price = document.createElement("span");
    price.className = "deck-search-price";
    price.textContent = `${formatUsd(searchCardUnitPrice(card))} ${priceSourceShortLabel(deckPriceSource)}`;
    const owned = document.createElement("span");
    owned.className = "deck-search-owned";
    owned.textContent = `In deck: ${currentBuilderCardQuantity(card.name)}`;
    const actions = document.createElement("div");
    actions.className = "deck-search-actions";
    actions.innerHTML = `
      <button type="button" data-deck-adjust="-1" title="Remove one ${escapeHtml(card.name)}" aria-label="Remove one ${escapeHtml(card.name)}">-</button>
      <button type="button" data-deck-adjust="1" title="Add one ${escapeHtml(card.name)}" aria-label="Add one ${escapeHtml(card.name)}">+</button>
      <button type="button" data-deck-printings title="Choose printing for ${escapeHtml(card.name)}" aria-label="Choose printing for ${escapeHtml(card.name)}">...</button>
    `;
    item.append(preview, details, price, owned, actions);
    attachDeckCardEditControls(item, card.name);
    els.deckCardSearchResults.append(item);
  });
}

function setDeckCardSearchDismissable(isVisible) {
  if (!els.dismissDeckCardSearchButton) return;
  els.dismissDeckCardSearchButton.classList.toggle("hidden", !isVisible);
}

function dismissDeckCardSearch() {
  deckCardSearchResults = [];
  els.deckCardSearchInput.value = "";
  els.deckCardSearchSummary.textContent = "Search for cards to add to this deck.";
  renderDeckCardSearchResults();
  setDeckCardSearchDismissable(false);
}

function currentBuilderCardQuantity(cardName) {
  const match = parseDeckBuilderEntries(els.deckBuilderListInput.value)
    .find((entry) => entry.name.toLowerCase() === String(cardName || "").toLowerCase());
  return match ? Number(match.quantity) || 0 : 0;
}

function searchCardUnitPrice(card) {
  const normalized = normalizePriceSource(deckPriceSource);
  const selected = searchPriceFromSource(card?.pricesUsd, deckPriceSource);
  if (selected !== null) return selected;
  return normalized === "scryfall" ? Number(card?.priceUsd) || 0 : 0;
}

function searchPriceFromSource(prices, source = deckPriceSource) {
  if (!prices || typeof prices !== "object") return null;
  const normalized = normalizePriceSource(source);
  if (normalized === "average") {
    const values = ["scryfall", "tcgplayer", "cardkingdom"]
      .map((provider) => searchProviderPrice(prices[provider]))
      .filter((value) => value !== null && value > 0);
    if (values.length) return values.reduce((sum, value) => sum + value, 0) / values.length;
  }
  const direct = searchProviderPrice(prices[normalized]);
  if (direct !== null) return direct;
  return null;
}

function searchProviderPrice(value) {
  if (Number.isFinite(Number(value))) return Number(value);
  if (!value || typeof value !== "object") return null;
  const preferred = Number(value.normal ?? value.usd ?? value.foil ?? value.etched ?? 0);
  return Number.isFinite(preferred) ? preferred : null;
}

function deckSearchCardPreview(card) {
  return {
    ...card,
    id: card.scryfallId || card.id || `search-${normalizedDeckCardName(card.name)}`,
    imageUrl: card.imageUrl || card.images?.normal || card.images?.small || card.faces?.[0]?.imageUrl || "",
    faces: Array.isArray(card.faces) ? card.faces : [],
    counters: {},
  };
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

function normalizeFriendsPayload(payload = {}) {
  friendsData = {
    friends: Array.isArray(payload.friends) ? payload.friends : [],
    incoming: Array.isArray(payload.incoming) ? payload.incoming : [],
    outgoing: Array.isArray(payload.outgoing) ? payload.outgoing : [],
    gameInvites: {
      incoming: Array.isArray(payload.gameInvites?.incoming) ? payload.gameInvites.incoming : [],
      outgoing: Array.isArray(payload.gameInvites?.outgoing) ? payload.gameInvites.outgoing : [],
    },
  };
}

function friendAccountLabel(accountValue = {}) {
  const fullName = `${accountValue.firstName || ""} ${accountValue.lastName || ""}`.trim();
  return fullName ? `${fullName} (@${accountValue.username})` : `@${accountValue.username || "unknown"}`;
}

function friendPresenceText(accountValue = {}) {
  const online = Boolean(accountValue.online);
  const lastSeen = Number(accountValue.lastSeenAt) || 0;
  return online
    ? "Online"
    : lastSeen
      ? `Last seen ${new Date(lastSeen).toLocaleString()}`
      : "Offline";
}

function friendPresenceMarkup(accountValue = {}) {
  const online = Boolean(accountValue.online);
  const lastSeenText = friendPresenceText(accountValue);
  return `<span class="presence-dot${online ? " online" : ""}" title="${escapeHtml(lastSeenText)}" aria-label="${escapeHtml(lastSeenText)}"></span>`;
}

function emptyFriendsMessage(container, message) {
  const empty = document.createElement("p");
  empty.className = "empty-list-message";
  empty.textContent = message;
  container.append(empty);
}

function emptyFriendTableRow(message) {
  const row = document.createElement("tr");
  row.className = "friend-table-empty-row";
  const cell = document.createElement("td");
  cell.colSpan = 4;
  cell.textContent = message;
  row.append(cell);
  return row;
}

function syncFriendsActivityRail() {
  if (!els.accountFriendsView) return;
  els.accountFriendsView.classList.toggle("friends-activity-collapsed", !friendsActivityOpen);
  els.friendsActivityButton?.setAttribute("aria-expanded", String(friendsActivityOpen));
}

function setFriendsActivityOpen(open) {
  friendsActivityOpen = Boolean(open);
  localStorage.setItem("mage-table-friends-activity-open", friendsActivityOpen ? "1" : "0");
  syncFriendsActivityRail();
}

function inviteableActiveGames() {
  return activeGames.filter((game) => !game.roomFull || Number(game.openSeats) > 0);
}

function renderFriendGameInviteControls(friendship, actions) {
  const games = inviteableActiveGames();
  if (!games.length) {
    const note = document.createElement("span");
    note.className = "friend-action-note";
    note.textContent = "No open games";
    actions.append(note);
    return;
  }
  const select = document.createElement("select");
  select.className = "friend-game-select";
  select.setAttribute("aria-label", `Choose game for ${friendship.account.username}`);
  games.forEach((game) => {
    const option = document.createElement("option");
    option.value = game.id;
    option.textContent = `${game.name} (${Number(game.openSeats) || 0} open)`;
    select.append(option);
  });
  const invite = document.createElement("button");
  invite.type = "button";
  invite.textContent = "Invite";
  invite.addEventListener("click", () => sendGameInviteToFriend(friendship.account.id, select.value));
  actions.append(select, invite);
}

function renderFriendRow(friendship) {
  const row = document.createElement("tr");
  row.className = `friend-row${friendship.account?.online ? " online" : ""}`;
  const identity = document.createElement("div");
  identity.className = "friend-identity";
  identity.innerHTML = `
    <strong>${friendPresenceMarkup(friendship.account)}${escapeHtml(friendAccountLabel(friendship.account))}</strong>
    <span>@${escapeHtml(friendship.account?.username || "unknown")}</span>
  `;
  const identityCell = document.createElement("td");
  identityCell.className = "friend-identity-cell";
  identityCell.append(identity);

  const presenceCell = document.createElement("td");
  presenceCell.className = "friend-presence-cell";
  presenceCell.innerHTML = `${friendPresenceMarkup(friendship.account)}<span>${escapeHtml(friendPresenceText(friendship.account))}</span>`;

  const inviteCell = document.createElement("td");
  const inviteControls = document.createElement("div");
  inviteControls.className = "friend-actions";
  renderFriendGameInviteControls(friendship, inviteControls);
  inviteCell.append(inviteControls);

  const actionsCell = document.createElement("td");
  const actions = document.createElement("div");
  actions.className = "friend-actions";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "secondary";
  remove.textContent = "Remove";
  remove.addEventListener("click", () => removeFriendship(friendship.id));
  actions.append(remove);
  actionsCell.append(actions);

  row.append(identityCell, presenceCell, inviteCell, actionsCell);
  return row;
}

function renderFriendRequestRow(request, direction) {
  const row = document.createElement("article");
  row.className = "friend-row friend-request-row";
  const identity = document.createElement("div");
  identity.className = "friend-identity";
  identity.innerHTML = `
    <strong>${friendPresenceMarkup(request.account)}${escapeHtml(friendAccountLabel(request.account))}</strong>
    <span>${direction === "incoming" ? "Wants to be friends" : "Invite sent"}</span>
  `;
  const actions = document.createElement("div");
  actions.className = "friend-actions";
  if (direction === "incoming") {
    const accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = "Accept";
    accept.addEventListener("click", () => respondToFriendInvite(request.id, "accept"));
    const decline = document.createElement("button");
    decline.type = "button";
    decline.className = "secondary";
    decline.textContent = "Decline";
    decline.addEventListener("click", () => respondToFriendInvite(request.id, "decline"));
    actions.append(accept, decline);
  } else {
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "secondary";
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => removeFriendship(request.id));
    actions.append(cancel);
  }
  row.append(identity, actions);
  return row;
}

function renderGameInviteRow(invite, direction) {
  const row = document.createElement("article");
  row.className = "friend-row game-invite-row";
  const identity = document.createElement("div");
  identity.className = "friend-identity";
  const other = direction === "incoming" ? invite.from : invite.to;
  const room = invite.room || {};
  identity.innerHTML = `
    <strong>${escapeHtml(room.name || "Game invite")}</strong>
    <span>${direction === "incoming" ? `From ${escapeHtml(friendAccountLabel(other))}` : `Sent to ${escapeHtml(friendAccountLabel(other))}`} - ${Number(room.openSeats) || 0} open seat${Number(room.openSeats) === 1 ? "" : "s"}</span>
  `;
  const actions = document.createElement("div");
  actions.className = "friend-actions";
  if (direction === "incoming") {
    const accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = "Accept";
    accept.disabled = Boolean(room.roomFull);
    accept.addEventListener("click", () => respondToGameInvite(invite.id, "accept"));
    const decline = document.createElement("button");
    decline.type = "button";
    decline.className = "secondary";
    decline.textContent = "Decline";
    decline.addEventListener("click", () => respondToGameInvite(invite.id, "decline"));
    actions.append(accept, decline);
  } else {
    const sent = document.createElement("span");
    sent.className = "friend-action-note";
    sent.textContent = "Pending";
    actions.append(sent);
  }
  row.append(identity, actions);
  return row;
}

function renderFriendsWorkspace() {
  if (!account || !els.accountFriendsView) return;
  const onlineCount = friendsData.friends.filter((friend) => friend.account?.online).length;
  const friendRequestCount = friendsData.incoming.length + friendsData.outgoing.length;
  const incomingGameInvites = friendsData.gameInvites.incoming || [];
  const outgoingGameInvites = friendsData.gameInvites.outgoing || [];
  const gameInviteCount = incomingGameInvites.length + outgoingGameInvites.length;
  const activityCount = friendRequestCount + gameInviteCount;
  els.friendsSummary.textContent = `${friendsData.friends.length} friend${friendsData.friends.length === 1 ? "" : "s"} - ${onlineCount} online`;
  if (els.friendRequestsSummary) els.friendRequestsSummary.textContent = `${friendRequestCount} pending`;
  if (els.gameInvitesSummary) els.gameInvitesSummary.textContent = `${gameInviteCount} pending`;
  if (els.friendsActivityBadge) {
    els.friendsActivityBadge.textContent = String(activityCount);
    els.friendsActivityBadge.classList.toggle("hidden", activityCount === 0);
  }
  syncFriendsActivityRail();
  els.friendsList.innerHTML = "";
  els.incomingFriendRequests.innerHTML = "";
  els.outgoingFriendRequests.innerHTML = "";
  els.gameInvitesList.innerHTML = "";

  if (friendsData.friends.length) friendsData.friends.forEach((friend) => els.friendsList.append(renderFriendRow(friend)));
  else els.friendsList.append(emptyFriendTableRow("No friends yet. Send an invite by username."));

  if (friendsData.incoming.length) {
    friendsData.incoming.forEach((request) => els.incomingFriendRequests.append(renderFriendRequestRow(request, "incoming")));
  } else {
    emptyFriendsMessage(els.incomingFriendRequests, "No incoming friend invites.");
  }
  if (friendsData.outgoing.length) {
    friendsData.outgoing.forEach((request) => els.outgoingFriendRequests.append(renderFriendRequestRow(request, "outgoing")));
  } else {
    emptyFriendsMessage(els.outgoingFriendRequests, "No sent friend invites.");
  }

  if (!incomingGameInvites.length && !outgoingGameInvites.length) {
    emptyFriendsMessage(els.gameInvitesList, "No pending game invites.");
  } else {
    incomingGameInvites.forEach((invite) => els.gameInvitesList.append(renderGameInviteRow(invite, "incoming")));
    outgoingGameInvites.forEach((invite) => els.gameInvitesList.append(renderGameInviteRow(invite, "outgoing")));
  }
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

async function persistAccountDeck(deck, preferredDeckId = "") {
  const deckId = String(preferredDeckId || "").trim();
  const path = deckId ? `/api/account/decks/${encodeURIComponent(deckId)}` : "/api/account/decks";
  return accountApi(path, {
    method: deckId ? "PUT" : "POST",
    body: JSON.stringify(deck),
  });
}

async function reloadSavedDeckSidebar(selectedDeckId = "") {
  const result = await accountApi("/api/account/decks");
  savedDecks = result.decks || [];
  if (els.savedDeckSearchInput) els.savedDeckSearchInput.value = "";
  if (selectedDeckId) selectedBuilderDeckId = selectedDeckId;
  renderSavedDecks();
  return savedDecks.find((deck) => deck.id === selectedDeckId) || null;
}

async function saveBuilderDeck() {
  const deck = currentBuilderDeck();
  if (!account) throw new Error("Sign in again before saving this deck.");
  if (!deck.decklist) throw new Error("Add at least one card before saving.");
  const previousDeckId = selectedBuilderDeckId || "draft";
  const deckToSave = {
    ...deck,
    name: deck.name || fallbackBuilderDeckName(deck),
  };
  if (Array.isArray(deckBuilderMetadata?.cards) && deckBuilderMetadata.cards.length) {
    deckToSave.priceSnapshot = currentPriceSnapshot(deckBuilderMetadata.cards);
  }
  if (!deck.name) els.deckBuilderNameInput.value = deckToSave.name;
  let result;
  try {
    result = await persistAccountDeck(deckToSave, deck.id);
  } catch (error) {
    if (!deck.id || error.status === 401) throw error;
    result = await persistAccountDeck({ ...deckToSave, id: "" }, "");
  }
  const savedDeck = result.deck;
  if (result.priceHistory && savedDeck?.id) deckPriceHistoryCache.set(savedDeck.id, result.priceHistory);
  transferDeckHistory(previousDeckId, savedDeck.id);
  selectedBuilderDeckId = savedDeck.id;
  els.deckBuilderNameInput.value = savedDeck.name || deckToSave.name;
  els.deckBuilderCommanderInput.value = savedDeck.commander || deckToSave.commander || "";
  els.deckBuilderListInput.value = savedDeck.decklist || deckToSave.decklist;
  upsertSavedDeck(savedDeck);
  renderSavedDecks();
  const reloadedDeck = await reloadSavedDeckSidebar(savedDeck.id) || savedDeck;
  selectedBuilderDeckId = reloadedDeck.id;
  els.deckBuilderNameInput.value = reloadedDeck.name || savedDeck.name || deckToSave.name;
  els.deckBuilderCommanderInput.value = reloadedDeck.commander || savedDeck.commander || deckToSave.commander || "";
  els.deckBuilderListInput.value = reloadedDeck.decklist || savedDeck.decklist || deckToSave.decklist;
  renderSavedDecks();
  renderDeckBuilderPreview({ preserveScroll: true });
  recordDeckHistoryChange("Saved deck", deckHistoryComparisonSnapshot(savedDeck.id), { force: true });
  els.deckBuilderStatus.textContent = `Deck saved to library - ${savedDecks.length} deck${savedDecks.length === 1 ? "" : "s"}`;
  setAccountStatus("Deck saved to library.");
}

async function handleDeckBuilderSave(event = null) {
  event?.preventDefault();
  event?.stopPropagation();
  if (deckBuilderSaveInFlight) return;
  deckBuilderSaveInFlight = true;
  setDisabled(els.saveBuilderDeckButton, true);
  try {
    els.deckBuilderStatus.textContent = "Saving deck...";
    await saveBuilderDeck();
  } catch (error) {
    els.deckBuilderStatus.textContent = error.message;
    setAccountStatus(error.message, true);
  } finally {
    deckBuilderSaveInFlight = false;
    setDisabled(els.saveBuilderDeckButton, false);
  }
}

function triggerDeckBuilderSave(event = null) {
  event?.preventDefault();
  event?.stopPropagation();
  event?.stopImmediatePropagation?.();
  handleDeckBuilderSave(event);
  return false;
}

function openDeckBuilderSaveDialog(event = null) {
  event?.preventDefault();
  event?.stopPropagation();
  if (!account) {
    setAccountStatus("Sign in before saving this deck.", true);
    return;
  }
  const deck = currentBuilderDeck();
  if (!deck.decklist) {
    els.deckBuilderStatus.textContent = "Add at least one card before saving.";
    setAccountStatus("Add at least one card before saving this deck.", true);
    return;
  }
  const savedDeck = deck.id ? savedDecks.find((candidate) => candidate.id === deck.id) || deck : null;
  openSaveDeckDialog(savedDeck, {
    ...deck,
    name: deck.name || fallbackBuilderDeckName(deck),
  });
  els.deckBuilderStatus.textContent = "Review deck details, then save.";
}

function handleDeckBuilderFormSubmit(event) {
  event.preventDefault();
  if (event.submitter === els.saveBuilderDeckButton) triggerDeckBuilderSave(event);
}

async function searchDeckBuilderCards() {
  const query = els.deckCardSearchInput.value.trim();
  if (query.length < 2) {
    els.deckCardSearchSummary.textContent = "Enter at least two characters.";
    setDeckCardSearchDismissable(Boolean(query));
    deckCardSearchResults = [];
    renderDeckCardSearchResults();
    return;
  }
  setDisabled(els.deckCardSearchButton, true);
  setDeckCardSearchDismissable(true);
  els.deckCardSearchSummary.textContent = "Searching Scryfall...";
  try {
    const result = await api(`/api/scryfall/cards?q=${encodeURIComponent(query)}`);
    if (els.deckCardSearchInput.value.trim() !== query) return;
    deckCardSearchResults = result.cards || [];
    els.deckCardSearchSummary.textContent = `${deckCardSearchResults.length} result${deckCardSearchResults.length === 1 ? "" : "s"}`;
    renderDeckCardSearchResults();
    setDeckCardSearchDismissable(true);
  } catch (error) {
    deckCardSearchResults = [];
    renderDeckCardSearchResults();
    els.deckCardSearchSummary.textContent = error.message;
    setDeckCardSearchDismissable(true);
  } finally {
    setDisabled(els.deckCardSearchButton, false);
  }
}

function queueDeckBuilderCardSearch() {
  window.clearTimeout(deckCardSearchTimer);
  const query = els.deckCardSearchInput.value.trim();
  setDeckCardSearchDismissable(Boolean(query) || deckCardSearchResults.length > 0);
  if (query.length < 2) {
    deckCardSearchResults = [];
    renderDeckCardSearchResults();
    els.deckCardSearchSummary.textContent = query ? "Enter at least two characters." : "Search for cards to add to this deck.";
    return;
  }
  els.deckCardSearchSummary.textContent = "Searching Scryfall...";
  deckCardSearchTimer = window.setTimeout(() => searchDeckBuilderCards(), 300);
}

async function searchCollectionCards() {
  const query = els.collectionCardSearchInput.value.trim();
  if (query.length < 2) {
    els.collectionCardSearchSummary.textContent = "Enter at least two characters.";
    collectionCardSearchResults = [];
    renderCollectionCardSearchResults();
    return;
  }
  setDisabled(els.collectionCardSearchButton, true);
  els.dismissCollectionCardSearchButton?.classList.remove("hidden");
  els.collectionCardSearchSummary.textContent = "Searching Scryfall...";
  try {
    const result = await api(`/api/scryfall/cards?q=${encodeURIComponent(query)}`);
    if (els.collectionCardSearchInput.value.trim() !== query) return;
    collectionCardSearchResults = result.cards || [];
    els.collectionCardSearchSummary.textContent = `${collectionCardSearchResults.length} result${collectionCardSearchResults.length === 1 ? "" : "s"}`;
    renderCollectionCardSearchResults();
  } catch (error) {
    collectionCardSearchResults = [];
    renderCollectionCardSearchResults();
    els.collectionCardSearchSummary.textContent = error.message;
  } finally {
    setDisabled(els.collectionCardSearchButton, false);
  }
}

function queueCollectionCardSearch() {
  window.clearTimeout(collectionCardSearchTimer);
  const query = els.collectionCardSearchInput.value.trim();
  els.dismissCollectionCardSearchButton?.classList.toggle("hidden", !query && !collectionCardSearchResults.length);
  if (query.length < 2) {
    collectionCardSearchResults = [];
    renderCollectionCardSearchResults();
    els.collectionCardSearchSummary.textContent = query ? "Enter at least two characters." : "Search for cards to add to this collection.";
    return;
  }
  els.collectionCardSearchSummary.textContent = "Searching Scryfall...";
  collectionCardSearchTimer = window.setTimeout(() => searchCollectionCards(), 300);
}

function dismissCollectionCardSearch() {
  collectionCardSearchResults = [];
  els.collectionCardSearchInput.value = "";
  els.collectionCardSearchSummary.textContent = "Search for cards to add to this collection.";
  renderCollectionCardSearchResults();
  els.dismissCollectionCardSearchButton?.classList.add("hidden");
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

function renderAccountStartGameChoices() {
  if (!els.accountStartSavedDeckList) return;
  els.accountStartSavedDeckList.innerHTML = "";
  const playableDecks = savedDecks
    .filter((deck) => String(deck.decklist || "").trim())
    .sort((left, right) => String(left.name || "").localeCompare(String(right.name || "")));
  els.accountStartGameSummary.textContent = playableDecks.length
    ? "Choose a saved deck or use a decklist for this game."
    : "No saved decks are ready yet. Use a decklist to start this game.";
  if (!playableDecks.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list-message";
    empty.textContent = "Saved decks with cards will appear here.";
    els.accountStartSavedDeckList.append(empty);
    return;
  }
  playableDecks.forEach((deck) => {
    const row = document.createElement("article");
    row.className = "account-start-deck-row";
    const count = deckListCardCount(deck.decklist);
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(deck.name || "Untitled Deck")}</strong>
        <span>${count} cards - ${escapeHtml(deck.commander || "No commander")}</span>
      </div>
      <button type="button">Use Deck</button>
    `;
    row.querySelector("button").addEventListener("click", () => {
      els.accountStartGameDialog.close();
      openDeckPlayChoice(deck);
    });
    els.accountStartSavedDeckList.append(row);
  });
}

function openAccountStartGameDialog() {
  renderAccountStartGameChoices();
  if (!els.accountStartGameDialog.open) els.accountStartGameDialog.showModal();
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

async function loadCollections() {
  if (!account) {
    savedCollections = [];
    return;
  }
  try {
    const result = await accountApi("/api/account/collections");
    savedCollections = result.collections || [];
    if (!collectionInitialized) {
      collectionInitialized = true;
      if (savedCollections[0]) selectCollection(savedCollections[0]);
      else newCollection();
    } else if (selectedCollectionId) {
      const selected = savedCollections.find((collection) => collection.id === selectedCollectionId);
      if (selected) selectCollection(selected);
      else newCollection();
    }
  } catch (error) {
    if (error.status === 401) clearAccountSession();
    else throw error;
  }
  if (landingView === "account") renderCollectionsWorkspace();
}

async function saveCollection() {
  if (!account) throw new Error("Sign in again before saving this collection.");
  const collection = currentCollection();
  const body = {
    name: collection.name || "New Collection",
    cardlist: collection.cardlist,
  };
  const path = selectedCollectionId
    ? `/api/account/collections/${encodeURIComponent(selectedCollectionId)}`
    : "/api/account/collections";
  const result = await accountApi(path, {
    method: selectedCollectionId ? "PUT" : "POST",
    body: JSON.stringify(body),
  });
  const saved = result.collection;
  selectedCollectionId = saved.id;
  const index = savedCollections.findIndex((item) => item.id === saved.id);
  if (index === -1) savedCollections.unshift(saved);
  else savedCollections[index] = saved;
  selectCollection(saved);
  setAccountStatus("Collection saved.");
}

async function deleteSelectedCollection() {
  if (!selectedCollectionId) return;
  const collection = savedCollections.find((item) => item.id === selectedCollectionId);
  if (!collection) return;
  if (!window.confirm(`Delete ${collection.name}? This cannot be undone.`)) return;
  await accountApi(`/api/account/collections/${encodeURIComponent(selectedCollectionId)}`, { method: "DELETE" });
  savedCollections = savedCollections.filter((item) => item.id !== selectedCollectionId);
  selectedCollectionId = "";
  if (savedCollections[0]) selectCollection(savedCollections[0]);
  else newCollection();
  setAccountStatus("Collection deleted.");
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

async function loadFriends() {
  if (!account) {
    normalizeFriendsPayload();
    return;
  }
  try {
    const result = await accountApi("/api/account/friends");
    normalizeFriendsPayload(result);
  } catch (error) {
    if (error.status === 401) clearAccountSession();
    else throw error;
  }
  if (landingView === "account") renderFriendsWorkspace();
}

async function loadAccountWorkspaceData() {
  await Promise.all([loadSavedDecks(), loadCollections(), loadActiveGames(), loadFriends()]);
  if (landingView === "account") renderAccountPanel();
}

function setAccountWorkspaceTab(tab) {
  accountWorkspaceTab = ["games", "friends", "collections"].includes(tab) ? tab : "decks";
  renderAccountPanel();
  if (accountWorkspaceTab === "games") loadActiveGames().catch((error) => setAccountStatus(error.message, true));
  if (accountWorkspaceTab === "friends") {
    Promise.all([loadFriends(), loadActiveGames()])
      .then(() => renderFriendsWorkspace())
      .catch((error) => setAccountStatus(error.message, true));
  }
  if (accountWorkspaceTab === "collections") {
    loadCollections()
      .then(() => renderCollectionsWorkspace())
      .catch((error) => setAccountStatus(error.message, true));
  }
}

async function sendFriendInvite(event = null) {
  event?.preventDefault();
  const username = els.friendInviteUsernameInput?.value.trim();
  if (!username) {
    els.friendInviteUsernameInput?.focus();
    return;
  }
  setDisabled(els.sendFriendInviteButton, true);
  try {
    const result = await accountApi("/api/account/friends", {
      method: "POST",
      body: JSON.stringify({ username }),
    });
    normalizeFriendsPayload(result);
    els.friendInviteUsernameInput.value = "";
    setAccountStatus(`Friend invite sent to ${username}.`);
    renderFriendsWorkspace();
  } catch (error) {
    setAccountStatus(error.message, true);
  } finally {
    setDisabled(els.sendFriendInviteButton, false);
  }
}

async function respondToFriendInvite(friendshipId, action) {
  try {
    const result = await accountApi(`/api/account/friends/${encodeURIComponent(friendshipId)}/${action}`, {
      method: "POST",
      body: "{}",
    });
    normalizeFriendsPayload(result);
    setAccountStatus(action === "accept" ? "Friend invite accepted." : "Friend invite declined.");
    renderFriendsWorkspace();
  } catch (error) {
    setAccountStatus(error.message, true);
  }
}

async function removeFriendship(friendshipId) {
  try {
    const result = await accountApi(`/api/account/friends/${encodeURIComponent(friendshipId)}`, {
      method: "DELETE",
    });
    normalizeFriendsPayload(result);
    setAccountStatus("Friend connection updated.");
    renderFriendsWorkspace();
  } catch (error) {
    setAccountStatus(error.message, true);
  }
}

async function sendGameInviteToFriend(friendAccountId, roomId) {
  if (!friendAccountId || !roomId) return;
  try {
    const result = await accountApi("/api/account/game-invites", {
      method: "POST",
      body: JSON.stringify({ friendAccountId, roomId }),
    });
    normalizeFriendsPayload(result);
    setAccountStatus("Game invite sent.");
    renderFriendsWorkspace();
  } catch (error) {
    setAccountStatus(error.message, true);
  }
}

async function respondToGameInvite(inviteId, action) {
  try {
    const result = await accountApi(`/api/account/game-invites/${encodeURIComponent(inviteId)}/${action}`, {
      method: "POST",
      body: "{}",
    });
    if (action === "accept" && result.room) {
      normalizeFriendsPayload(result.friends || {});
      history.replaceState(null, "", sameOriginRoomUrl(result.room.selfUrl));
      enterRoomView(result.room);
      return;
    }
    normalizeFriendsPayload(result);
    setAccountStatus("Game invite declined.");
    renderFriendsWorkspace();
  } catch (error) {
    setAccountStatus(error.message, true);
  }
}

function openEndGameDialog(game) {
  pendingEndGameId = game.id;
  els.endGameSummary.textContent = `End ${game.name}? Players will no longer be able to rejoin this game.`;
  els.endGameDialog.showModal();
}

function clearAccountSession() {
  account = null;
  savedDecks = [];
  savedCollections = [];
  activeGames = [];
  normalizeFriendsPayload();
  selectedBuilderDeckId = "";
  selectedCollectionId = "";
  deckBuilderInitialized = false;
  collectionInitialized = false;
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

function enterRoomView(room) {
  if (!room) return;
  currentToken = tokenFromUrl();
  cancelDeckBuilderBackgroundWork();
  clearLandingModeClasses();
  els.setupPanel.classList.add("hidden");
  els.tablePanel.classList.remove("hidden");
  state = room;
  stateSnapshot = JSON.stringify(room);
  queuedRoomUpdateSeq = 0;
  rememberActiveLobby(state);
  connectRoomEvents();
  render();
  scheduleRoomLayoutStabilization();
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
    scheduleRoomLayoutStabilization();
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

function scheduleRoomLayoutStabilization() {
  if (!state) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!state) return;
      lockBattlefieldCanvas();
      positionTurnDock();
      renderHand();
    });
  });
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
    if (state && !roomEventsConnected && !localInteractionActive()) refreshState({ quiet: true });
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
  if (roomEventsConnected) return;
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

function startPresenceHeartbeat({ immediate = false } = {}) {
  if (presenceHeartbeatTimer) clearInterval(presenceHeartbeatTimer);
  if (clockRenderTimer) clearInterval(clockRenderTimer);
  if (immediate) sendPresenceHeartbeat();
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
  if (!state) return;
  if (typeof EventSource === "undefined") {
    roomEventsConnected = false;
    startPresenceHeartbeat({ immediate: true });
    return;
  }
  const key = `${state.id}:${currentToken}:${roomPasswordFor(state.id)}`;
  if (roomEvents && roomEventsKey === key) return;
  closeRoomEvents();
  roomEventsKey = key;
  const password = roomPasswordFor(state.id);
  roomEvents = new EventSource(`/api/rooms/${state.id}/stream?token=${encodeURIComponent(currentToken)}&password=${encodeURIComponent(password)}`);
  roomEvents.onopen = () => {
    roomEventsConnected = true;
  };
  roomEvents.addEventListener("room-update", (event) => {
    roomEventsConnected = true;
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
    roomEventsConnected = true;
    try {
      mergePresencePayload(JSON.parse(event.data || "{}"));
    } catch {
      // Ignore malformed transient events and wait for the next heartbeat.
    }
  });
  roomEvents.onerror = () => {
    roomEventsConnected = false;
    if (queuedRoomUpdateSeq) scheduleQueuedRefresh(1500);
  };
  startPresenceHeartbeat();
}

function closeRoomEvents() {
  stopPresenceHeartbeat();
  if (roomEvents) roomEvents.close();
  roomEvents = null;
  roomEventsKey = "";
  roomEventsConnected = false;
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
    applyDeckBuilderTheme();
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

  clearLandingModeClasses();
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
  applyBodyTheme(theme);
}

function renderRoomSettings() {
  if (!els.friendlyMulligansInput || !els.themeSelect) return;
  const settings = state.settings || {};
  els.friendlyMulligansInput.checked = settings.friendlyMulligans !== false;
  els.themeSelect.value = settings.theme || (settings.terminalTheme ? "console" : settings.darkMode === false ? "light" : "dark");
  setDisabled(els.friendlyMulligansInput, false);
  setDisabled(els.themeSelect, false);
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
  setDisabled(els.recapPreviousButton, recapIndex === 0);
  setDisabled(els.recapNextButton, recapIndex >= recapEvents.length - 1);
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
  setDisabled(els.seatSelect, true);
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
  setDisabled(els.endTurnButton, !isMyTurn());
  setDisabled(els.drawButton, !canActNow());
  setDisabled(els.combatPassButton, !isMyTurn());
  setDisabled(els.instantButton, isMyTurn() || isPriorityHolder());
  setDisabled(els.passPriorityButton, !isPriorityHolder());
  els.instantButton.classList.toggle("hidden", solo);
  els.combatPassButton.classList.toggle("hidden", solo);
  els.passPriorityButton.classList.toggle("hidden", solo);
  setDisabled(els.boardReferenceButton, state.players.length <= 1);
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
  setDisabled(button, Boolean(snapshot?.damageApplied) || !remainingCards.length || !isDefender);
  button.title = snapshot?.damageApplied
    ? "Combat damage has already been applied"
    : isDefender ? "Take all remaining attacking power as damage" : "Only the defending player can take this damage";
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isDisabled(button)) return;
    setDisabled(button, true);
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
  if (!isPlaytest) {
    identity.setAttribute("role", "button");
    identity.tabIndex = 0;
    identity.title = `Open ${player.name}'s board`;
    const openBoard = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openBoardReferenceDialog(player.seat);
    };
    identity.addEventListener("click", openBoard);
    identity.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      openBoard(event);
    });
  }
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
  const followPlayer = state.players[focusSeatForBoard()];
  const selectedPlayer = focusSeat === "all" ? null : state.players[Number(focusSeat)];
  els.boardReferenceSummary.textContent = focusSeat === "all"
    ? "Viewing all boards. Choose any board below."
    : boardReferenceSeat === null
      ? `Following ${followPlayer?.name || "the active board"}. Choose any board below.`
      : `Viewing ${selectedPlayer?.name || "selected player"}'s board. Choose any board below.`;
  els.boardReferenceList.innerHTML = "";
  els.boardReferenceList.style.setProperty("--reference-columns", String(columns));
  els.boardReferenceList.style.setProperty("--reference-rows", String(rows));
  els.boardReferenceList.append(boardReferenceTabs(boardReferenceSeat));
  shownPlayers.forEach((player) => els.boardReferenceList.append(playerBoard(player, "reference")));
}

function openBoardReferenceDialog(seat = state?.currentSeat) {
  if (!state) return;
  boardReferenceSeat = Number.isInteger(Number(seat)) ? Number(seat) : state.currentSeat;
  renderBoardReference();
  if (!els.boardReferenceDialog.open) els.boardReferenceDialog.showModal();
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
  if (zoneName === "graveyard" || zoneName === "exile") {
    const countBadge = document.createElement("strong");
    countBadge.className = "zone-card-count";
    const count = Array.isArray(player[zoneName]) ? player[zoneName].length : 0;
    countBadge.textContent = String(count);
    countBadge.title = `${count} card${count === 1 ? "" : "s"} in ${label}`;
    zone.append(countBadge);
  }
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
  setDisabled(button, !canChangeLife(seat));
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
  setDisabled(input, entry.kind !== "playtest" && !canChangeLife(entry.player.seat));
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
  button.addEventListener("mouseenter", (event) => {
    hoveredZoomCard = button;
    if (event.ctrlKey) document.body.classList.add("ctrl-zoom");
    if (event.ctrlKey || document.body.classList.contains("ctrl-zoom")) {
      showCardZoom(button);
      button.style.zIndex = "1000";
    }
  });
  button.addEventListener("mousemove", (event) => {
    hoveredZoomCard = button;
    if (event.ctrlKey) document.body.classList.add("ctrl-zoom");
    if (event.ctrlKey || document.body.classList.contains("ctrl-zoom")) {
      if (!zoomOverlay || zoomOverlay.classList.contains("hidden")) showCardZoom(button);
      else positionCardZoom(button);
      button.style.zIndex = "1000";
    }
  });
  button.addEventListener("mouseleave", () => {
    if (battlefieldPointerDrag?.button === button || battlefieldGroupDrag?.button === button) return;
    if (document.body.classList.contains("ctrl-zoom")) return;
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
    zoomOverlay.addEventListener("mouseleave", (event) => {
      if (!document.body.classList.contains("ctrl-zoom")) return;
      if (hoveredZoomCard && pointerWithinElement(event, hoveredZoomCard)) return;
      clearCtrlZoomState();
    });
    document.body.append(zoomOverlay);
  }
  const zoomHost = cardNode.closest("dialog[open]") || document.body;
  if (zoomOverlay.parentElement !== zoomHost) zoomHost.append(zoomOverlay);
  zoomOverlay.innerHTML = "";
  const clone = cardNode.dataset.zoomImage
    ? document.createElement("article")
    : cardNode.cloneNode(true);
  if (cardNode.dataset.zoomImage) {
    clone.className = "deck-stack-card deck-grid-card zoom-card-clone";
    clone.innerHTML = `<img src="${escapeHtml(cardNode.dataset.zoomImage)}" alt="${escapeHtml(cardNode.dataset.zoomName || "Card")}"><strong>${escapeHtml(cardNode.dataset.zoomName || "Card")}</strong>`;
  }
  clone.removeAttribute("id");
  clone.removeAttribute("draggable");
  clone.style.left = "";
  clone.style.top = "";
  clone.style.zIndex = "";
  clone.classList.remove("dragging", "free-card", "combat-snapshot-card", "revealed-library-card", "tapped");
  clone.classList.add("zoom-card-clone");
  zoomOverlay.append(clone);
  wireZoomCloneControls(clone, cardNode);
  zoomOverlay.classList.remove("hidden");
  positionCardZoom(cardNode);
}

function wireZoomCloneControls(clone, source) {
  const cloneControls = [...clone.querySelectorAll(".counter-step")];
  const sourceControls = [...source.querySelectorAll(".counter-step")];
  cloneControls.forEach((control, index) => {
    const sourceControl = sourceControls[index];
    if (!sourceControl) return;
    control.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    control.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      sourceControl.click();
    });
  });
}

function pointerWithinElement(event, element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
}

function positionCardZoom(cardNode) {
  if (!zoomOverlay || zoomOverlay.classList.contains("hidden") || !cardNode) return;
  const rect = cardNode.getBoundingClientRect();
  const margin = 10;
  const isDeckCard = cardNode.classList.contains("deck-stack-card") || Boolean(cardNode.dataset.zoomImage);
  const standard = currentBattlefieldCardSize();
  const deckWidth = Math.max(180, Math.min(260, isDeckCard ? rect.width || 230 : standard.width));
  let width = (isDeckCard ? deckWidth : standard.width) * zoomScale;
  let height = isDeckCard ? width * (680 / 488) : standard.height * zoomScale;
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

function clearCtrlZoomState() {
  document.body.classList.remove("ctrl-zoom");
  hideCardZoom();
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
    setDisabled(button, !canActNow());
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
    setDisabled(button, !canActNow());
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
    setDisabled(button, !canActNow());
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

function isFieldEnterConfirmTarget(target) {
  if (target instanceof HTMLTextAreaElement) return false;
  if (target instanceof HTMLSelectElement) return !target.disabled;
  if (!(target instanceof HTMLInputElement)) return false;
  const type = (target.type || "text").toLowerCase();
  const excludedTypes = new Set([
    "button",
    "checkbox",
    "color",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ]);
  return !excludedTypes.has(type) && !target.disabled && !target.readOnly;
}

function visibleSubmitButtons(form) {
  return Array.from(form.querySelectorAll('button[type="submit"], input[type="submit"], button:not([type])'))
    .filter((button) => {
      if (button.disabled) return false;
      if (button.closest(".hidden")) return false;
      return button.offsetParent !== null || button.getClientRects().length > 0;
    });
}

function defaultConfirmButtonForForm(form) {
  if (!form) return null;
  const explicit = form.querySelector("[data-default-confirm]");
  if (explicit && !explicit.disabled) return explicit;
  const buttons = visibleSubmitButtons(form);
  const confirms = buttons.filter((button) => String(button.value || "").toLowerCase() !== "cancel");
  return confirms.find((button) => !button.classList.contains("secondary"))
    || confirms.find((button) => !button.classList.contains("popover-close"))
    || confirms[confirms.length - 1]
    || buttons[buttons.length - 1]
    || null;
}

function activateDefaultFieldConfirm(event) {
  if (event.key !== "Enter" || event.defaultPrevented || event.isComposing) return false;
  if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return false;
  const field = event.target;
  if (!isFieldEnterConfirmTarget(field)) return false;
  if (field instanceof HTMLInputElement && (field.type || "").toLowerCase() === "search") return false;

  if (field === els.chatInput) {
    event.preventDefault();
    event.stopPropagation();
    els.sendChatButton.click();
    return true;
  }

  if (field === els.tokenSearchInput) return false;
  if (field === els.deckCardSearchInput) return false;
  if (field === els.collectionCardSearchInput) return false;
  if (field === els.deckVisualSearchInput) return false;
  if (field === els.collectionVisualSearchInput) return false;

  const directConfirmButton = {
    roomForm: els.createRoomSubmitButton,
    joinRoomForm: els.joinRoomSubmitButton,
  }[field.form?.id];
  if (directConfirmButton) {
    event.preventDefault();
    event.stopPropagation();
    directConfirmButton.click();
    return true;
  }

  if (field === els.randomMaxInput) {
    event.preventDefault();
    event.stopPropagation();
    els.randomRollButton.click();
    return true;
  }

  if (
    field === els.customTokenNameInput
    || field === els.customTokenTypeInput
    || field === els.customTokenPowerInput
    || field === els.customTokenToughnessInput
  ) {
    event.preventDefault();
    event.stopPropagation();
    els.createCustomTokenButton.click();
    return true;
  }

  const form = field.form || field.closest("form");
  if (!form) return false;
  if (field.closest(".deck-view-toolbar") || field.closest(".deck-card-search-panel")) return false;
  const confirmButton = defaultConfirmButtonForForm(form);
  if (!confirmButton) return false;
  event.preventDefault();
  event.stopPropagation();
  if (typeof form.requestSubmit === "function") form.requestSubmit(confirmButton);
  else confirmButton.click();
  return true;
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

function openJoinGameForm() {
  landingView = "join";
  setJoinRoomStatus();
  setJoinPasswordVisible(false);
  renderLanding();
  requestAnimationFrame(() => els.joinCodeInput.focus());
}

async function handleLandingAction(action, event = null) {
  event?.preventDefault();
  event?.stopPropagation();
  switch (action) {
    case "create-mode":
      openCreateMode(null);
      break;
    case "create-live":
      openLiveGameSetup(pendingCreateDeck);
      break;
    case "create-solo":
      try {
        await createGameFromSetup({ solo: true, deck: pendingCreateDeck });
      } catch (error) {
        setAccountStatus(error.message, true);
      }
      break;
    case "join":
      openJoinGameForm();
      break;
    case "account":
      landingView = "account";
      setAccountStatus();
      renderLanding();
      break;
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-landing-action]");
  if (!button || !els.setupPanel.contains(button) || isDisabled(button)) return;
  handleLandingAction(button.dataset.landingAction, event);
}, true);

els.backFromCreateModeButton.addEventListener("click", () => {
  pendingCreateDeck = null;
  landingView = account ? "account" : "menu";
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
  collectionInitialized = false;
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
if (els.accountFriendsTab) els.accountFriendsTab.addEventListener("click", () => setAccountWorkspaceTab("friends"));
if (els.accountCollectionsTab) els.accountCollectionsTab.addEventListener("click", () => setAccountWorkspaceTab("collections"));
if (els.friendsActivityButton) els.friendsActivityButton.addEventListener("click", () => setFriendsActivityOpen(!friendsActivityOpen));
if (els.closeFriendsActivityButton) els.closeFriendsActivityButton.addEventListener("click", () => setFriendsActivityOpen(false));
els.accountStartGameButton.addEventListener("click", openAccountStartGameDialog);
els.collapseDeckRailButton.addEventListener("click", () => {
  deckRailCollapsed = !deckRailCollapsed;
  localStorage.setItem("mage-table-deck-rail-collapsed", deckRailCollapsed ? "1" : "0");
  if (deckRailCollapsed && deckHistoryOpen) {
    deckHistoryOpen = false;
    localStorage.setItem("mage-table-deck-history-open", "0");
  }
  renderAccountPanel();
});
if (els.deckHistoryButton) els.deckHistoryButton.addEventListener("click", () => setDeckHistoryOpen(!deckHistoryOpen));
if (els.closeDeckHistoryButton) els.closeDeckHistoryButton.addEventListener("click", () => setDeckHistoryOpen(false));
els.newSavedDeckButton.addEventListener("click", newBuilderDeck);
els.bulkImportDeckButton.addEventListener("click", openBulkImportDialog);
if (els.deckContextButton) els.deckContextButton.addEventListener("click", () => openDeckActionDialog(currentBuilderDeck()));
els.deckStatsButton.addEventListener("click", () => openDeckStatsDialog(currentBuilderDeck()));
if (els.toggleMaybeBoardButton) els.toggleMaybeBoardButton.addEventListener("click", () => setMaybeBoardOpen(!deckMaybeBoardOpen));
if (els.closeMaybeBoardButton) els.closeMaybeBoardButton.addEventListener("click", () => setMaybeBoardOpen(false));
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
  const before = deckHistorySnapshot();
  els.deckBuilderNameInput.value = els.deckDetailsNameInput.value.trim();
  els.deckBuilderCommanderInput.value = els.deckDetailsCommanderInput.value.trim();
  els.deckBuilderStatus.textContent = "Unsaved changes";
  els.deckDetailsDialog.close();
  invalidateDeckMetadata();
  renderDeckBuilderPreview();
  recordDeckHistoryChange("Updated deck details", before);
});
els.closeDeckActionButton.addEventListener("click", () => els.deckActionDialog.close());
els.closePrintingDialogButton.addEventListener("click", () => els.printingDialog.close());
els.closeDeckStatsButton.addEventListener("click", (event) => {
  event.preventDefault();
  els.deckStatsDialog.close();
});
if (els.deckStatsApplyButton) els.deckStatsApplyButton.addEventListener("click", applyDeckStatsFilters);
if (els.deckStatsOddsJumpButton) els.deckStatsOddsJumpButton.addEventListener("click", scrollDeckStatsToProbability);
els.deckStatsTabButtons.forEach((button) => {
  button.addEventListener("click", () => setDeckStatsTab(button.dataset.deckStatsTab));
});
els.deckStatsProductionSelect.addEventListener("change", () => {
  applyDeckStatsFilters();
});
if (els.deckStatsOddsSortSelect) {
  els.deckStatsOddsSortSelect.addEventListener("change", () => {
    probabilitySettings.groupBy = els.deckStatsOddsSortSelect.value || "category";
    applyDeckStatsFilters();
  });
}
if (els.deckStatsPriceSourceSelect) {
  els.deckStatsPriceSourceSelect.addEventListener("change", (event) => {
    deckPriceSource = normalizePriceSource(event.target.value);
    localStorage.setItem("mage-table-deck-price-source", deckPriceSource);
    syncDeckPriceControls();
    renderDeckBuilderPreview({ preserveScroll: true });
    applyDeckStatsFilters();
  });
}
if (els.deckBuilderSettingsButton) {
  els.deckBuilderSettingsButton.addEventListener("click", () => {
    applyDeckBuilderTheme();
    if (!els.deckBuilderSettingsDialog.open) els.deckBuilderSettingsDialog.showModal();
  });
}
if (els.closeDeckBuilderSettingsButton) {
  els.closeDeckBuilderSettingsButton.addEventListener("click", () => els.deckBuilderSettingsDialog.close());
}
if (els.deckBuilderThemeSelect) {
  els.deckBuilderThemeSelect.addEventListener("change", () => {
    deckBuilderTheme = normalizeTheme(els.deckBuilderThemeSelect.value);
    localStorage.setItem("mage-table-deck-builder-theme", deckBuilderTheme);
    applyDeckBuilderTheme();
  });
}
els.savedDeckSearchInput.addEventListener("input", renderSavedDecks);
els.deckBuilderListInput.addEventListener("input", () => {
  els.deckBuilderStatus.textContent = "Unsaved changes";
  invalidateDeckMetadata();
  renderDeckBuilderPreview();
  queueDeckHistoryChange("Edited decklist");
});
els.deckBuilderNameInput.addEventListener("input", () => {
  els.deckBuilderStatus.textContent = "Unsaved changes";
  queueDeckHistoryChange("Renamed deck");
});
els.deckBuilderCommanderInput.addEventListener("input", () => {
  els.deckBuilderStatus.textContent = "Unsaved changes";
  invalidateDeckMetadata();
  renderDeckBuilderPreview();
  queueDeckHistoryChange("Changed commander");
});
els.deckBuilderForm.addEventListener("submit", handleDeckBuilderFormSubmit);
els.deckBuilderForm.addEventListener("change", (event) => {
  if (event.target.closest(".deck-view-toolbar")) applyDeckViewSettings(event);
});
els.deckBuilderForm.addEventListener("input", (event) => {
  if (event.target.closest(".deck-view-toolbar")) applyDeckViewSettings(event);
});
els.saveBuilderDeckButton.addEventListener("click", triggerDeckBuilderSave);
window.mageTableSaveDeck = triggerDeckBuilderSave;
els.deckGroupSelect.addEventListener("change", applyDeckViewSettings);
els.deckSortSelect.addEventListener("change", applyDeckViewSettings);
els.deckViewModeSelect.addEventListener("change", applyDeckViewSettings);
els.deckVisualSearchInput.addEventListener("input", applyDeckViewSettings);
if (els.deckPriceSourceSelect) els.deckPriceSourceSelect.addEventListener("change", applyDeckViewSettings);
if (els.deckHeaderPriceSourceSelect) els.deckHeaderPriceSourceSelect.addEventListener("change", applyDeckViewSettings);
if (els.deckViewScaleInput) {
  els.deckViewScaleInput.addEventListener("input", applyDeckViewSettings);
  els.deckViewScaleInput.addEventListener("change", applyDeckViewSettings);
}
if (els.applyDeckViewButton) {
  els.applyDeckViewButton.addEventListener("click", applyDeckViewSettings);
  els.applyDeckViewButton.addEventListener("pointerup", applyDeckViewSettings);
}
els.deckMaybeBoardInput.addEventListener("input", saveMaybeBoard);
els.deckCardSearchButton.addEventListener("click", searchDeckBuilderCards);
if (els.dismissDeckCardSearchButton) els.dismissDeckCardSearchButton.addEventListener("click", dismissDeckCardSearch);
els.deckCardSearchInput.addEventListener("input", queueDeckBuilderCardSearch);
els.deckCardSearchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  window.clearTimeout(deckCardSearchTimer);
  searchDeckBuilderCards();
});
if (els.newCollectionButton) els.newCollectionButton.addEventListener("click", () => newCollection({ openDetails: true }));
if (els.collapseCollectionRailButton) els.collapseCollectionRailButton.addEventListener("click", () => setCollectionRailCollapsed(!collectionRailCollapsed));
if (els.collectionSearchInput) els.collectionSearchInput.addEventListener("input", renderCollectionList);
if (els.collectionDetailsButton) els.collectionDetailsButton.addEventListener("click", () => openCollectionDetailsDialog());
if (els.bulkAddCollectionButton) els.bulkAddCollectionButton.addEventListener("click", openCollectionBulkAddDialog);
if (els.collectionStatsButton) els.collectionStatsButton.addEventListener("click", openCollectionStatsDialog);
if (els.saveCollectionButton) {
  els.saveCollectionButton.addEventListener("click", async () => {
    setDisabled(els.saveCollectionButton, true);
    try {
      await saveCollection();
    } catch (error) {
      setAccountStatus(error.message, true);
    } finally {
      setDisabled(els.saveCollectionButton, false);
    }
  });
}
if (els.deleteCollectionButton) {
  els.deleteCollectionButton.addEventListener("click", async () => {
    setDisabled(els.deleteCollectionButton, true);
    try {
      await deleteSelectedCollection();
    } catch (error) {
      setAccountStatus(error.message, true);
    } finally {
      setDisabled(els.deleteCollectionButton, false);
    }
  });
}
if (els.closeCollectionDetailsButton) els.closeCollectionDetailsButton.addEventListener("click", () => els.collectionDetailsDialog.close());
if (els.collectionDetailsForm) {
  els.collectionDetailsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.submitter?.value !== "save") {
      els.collectionDetailsDialog.close();
      return;
    }
    applyCollectionDetailsFromDialog();
    els.collectionDetailsDialog.close();
  });
}
if (els.closeCollectionBulkAddButton) els.closeCollectionBulkAddButton.addEventListener("click", () => els.collectionBulkAddDialog.close());
if (els.collectionBulkAddForm) els.collectionBulkAddForm.addEventListener("submit", (event) => event.preventDefault());
if (els.applyCollectionBulkAddButton) els.applyCollectionBulkAddButton.addEventListener("click", applyCollectionBulkAdd);
if (els.closeCollectionStatsButton) els.closeCollectionStatsButton.addEventListener("click", () => els.collectionStatsDialog.close());
[
  els.collectionGroupSelect,
  els.collectionSortSelect,
  els.collectionViewModeSelect,
  els.collectionDeckFilterSelect,
  els.collectionVisualSearchInput,
  els.collectionHeaderPriceSourceSelect,
  els.collectionViewScaleInput,
].filter(Boolean).forEach((control) => {
  control.addEventListener("input", applyCollectionViewSettings);
  control.addEventListener("change", applyCollectionViewSettings);
});
if (els.collectionNameInput) {
  els.collectionNameInput.addEventListener("input", () => {
    els.collectionTitle.textContent = els.collectionNameInput.value.trim() || "New Collection";
    setAccountStatus("Unsaved collection changes.");
  });
}
if (els.collectionListInput) {
  els.collectionListInput.addEventListener("input", () => {
    collectionMetadata = null;
    collectionMetadataKey = "";
    setAccountStatus("Unsaved collection changes.");
    renderCollectionEditor();
  });
}
if (els.collectionCardSearchButton) els.collectionCardSearchButton.addEventListener("click", searchCollectionCards);
if (els.dismissCollectionCardSearchButton) els.dismissCollectionCardSearchButton.addEventListener("click", dismissCollectionCardSearch);
if (els.collectionCardSearchInput) {
  els.collectionCardSearchInput.addEventListener("input", queueCollectionCardSearch);
  els.collectionCardSearchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    window.clearTimeout(collectionCardSearchTimer);
    searchCollectionCards();
  });
}
els.refreshActiveGamesButton.addEventListener("click", async () => {
  setDisabled(els.refreshActiveGamesButton, true);
  try {
    await loadActiveGames();
  } catch (error) {
    setAccountStatus(error.message, true);
  } finally {
    setDisabled(els.refreshActiveGamesButton, false);
  }
});
if (els.friendInviteForm) els.friendInviteForm.addEventListener("submit", sendFriendInvite);
if (els.refreshFriendsButton) {
  els.refreshFriendsButton.addEventListener("click", async () => {
    setDisabled(els.refreshFriendsButton, true);
    try {
      await Promise.all([loadFriends(), loadActiveGames()]);
      renderFriendsWorkspace();
    } catch (error) {
      setAccountStatus(error.message, true);
    } finally {
      setDisabled(els.refreshFriendsButton, false);
    }
  });
}
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
  setDisabled(els.confirmEndGameButton, true);
  try {
    await accountApi(`/api/account/games/${encodeURIComponent(pendingEndGameId)}/end`, { method: "POST", body: "{}" });
    pendingEndGameId = "";
    els.endGameDialog.close();
    await loadActiveGames();
    setAccountStatus("Game ended.");
  } catch (error) {
    setAccountStatus(error.message, true);
  } finally {
    setDisabled(els.confirmEndGameButton, false);
  }
});

async function handleCreateRoomSubmit(event = null) {
  event?.preventDefault();
  event?.stopPropagation();
  const submitButton = els.createRoomSubmitButton;
  if (isDisabled(submitButton)) return;
  setDisabled(submitButton, true);
  try {
    await createGameFromSetup({ solo: els.singlePlayerInput.checked, deck: pendingCreateDeck });
  } catch (error) {
    alert(`Could not create the room: ${error.message}`);
  } finally {
    setDisabled(submitButton, false);
  }
}

els.roomForm.addEventListener("submit", handleCreateRoomSubmit);
els.createRoomSubmitButton.addEventListener("click", handleCreateRoomSubmit);

async function handleJoinRoomSubmit(event = null) {
  event?.preventDefault();
  event?.stopPropagation();
  if (isDisabled(els.joinRoomSubmitButton)) return;
  setDisabled(els.joinRoomSubmitButton, true);
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
    setDisabled(els.joinRoomSubmitButton, false);
  }
}

els.joinRoomForm.addEventListener("submit", handleJoinRoomSubmit);
els.joinRoomSubmitButton.addEventListener("click", handleJoinRoomSubmit);

els.joinCodeInput.addEventListener("input", () => {
  els.joinCodeInput.value = els.joinCodeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
  setJoinPasswordVisible(false);
  els.joinCodePasswordInput.value = "";
  setJoinRoomStatus();
});

els.joinCodePasswordInput.addEventListener("input", () => setJoinRoomStatus());

els.closeJoinWithDeckButton.addEventListener("click", () => els.joinWithDeckDialog.close());
els.closeDeckPlayChoiceButton.addEventListener("click", () => els.deckPlayChoiceDialog.close());
els.closeAccountStartGameButton.addEventListener("click", () => els.accountStartGameDialog.close());
els.accountStartGameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "decklist") {
    els.accountStartGameDialog.close();
    startGameWithoutDeck();
    return;
  }
  els.accountStartGameDialog.close();
});
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
  setDisabled(els.submitRoomPasswordButton, true);
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
    setDisabled(els.submitRoomPasswordButton, false);
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
  setDisabled(els.randomFirstPlayerButton, true);
  try {
    await sendAction("randomFirstPlayer");
  } catch (error) {
    alert(error.message);
  } finally {
    setDisabled(els.randomFirstPlayerButton, false);
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
  setDisabled(els.loadDeckButton, true);
  try {
    await sendAction("loadDeck", {
      text: els.deckInput.value,
      name: state.currentPlayer.name,
      commander: state.currentPlayer.commander,
    });
  } catch (error) {
    alert(error.message);
  } finally {
    setDisabled(els.loadDeckButton, false);
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
  try {
    const result = await persistAccountDeck({
      name: els.savedDeckNameInput.value,
      commander: els.savedDeckCommanderInput.value,
      decklist: els.savedDeckListInput.value,
    }, deckId);
    const savedDeck = result.deck;
    selectedBuilderDeckId = savedDeck.id;
    els.deckBuilderNameInput.value = savedDeck.name || "";
    els.deckBuilderCommanderInput.value = savedDeck.commander || "";
    els.deckBuilderListInput.value = savedDeck.decklist || "";
    upsertSavedDeck(savedDeck);
    await reloadSavedDeckSidebar(savedDeck.id);
    renderDeckBuilderPreview({ preserveScroll: true });
    els.deckBuilderStatus.textContent = `Deck saved to library - ${savedDecks.length} deck${savedDecks.length === 1 ? "" : "s"}`;
    els.saveDeckDialog.close();
    setAccountStatus("Deck saved.");
  } catch (error) {
    if (deckId && error.status !== 401) {
      try {
        const result = await persistAccountDeck({
          name: els.savedDeckNameInput.value,
          commander: els.savedDeckCommanderInput.value,
          decklist: els.savedDeckListInput.value,
        }, "");
        const savedDeck = result.deck;
        selectedBuilderDeckId = savedDeck.id;
        els.deckBuilderNameInput.value = savedDeck.name || "";
        els.deckBuilderCommanderInput.value = savedDeck.commander || "";
        els.deckBuilderListInput.value = savedDeck.decklist || "";
        upsertSavedDeck(savedDeck);
        await reloadSavedDeckSidebar(savedDeck.id);
        renderDeckBuilderPreview({ preserveScroll: true });
        els.deckBuilderStatus.textContent = `Deck saved to library - ${savedDecks.length} deck${savedDecks.length === 1 ? "" : "s"}`;
        els.saveDeckDialog.close();
        setAccountStatus("Deck saved.");
        return;
      } catch (fallbackError) {
        error = fallbackError;
      }
    }
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
  setDisabled(submitButton, true);
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
    setDisabled(submitButton, false);
  }
});

els.drawButton.addEventListener("click", () => {
  clearDrawButtonFlash();
  sendAction("draw");
});

els.drawReminderAction.addEventListener("click", () => {
    if (isDisabled(els.drawButton)) return;
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
  setDisabled(els.keepHandButton, true);
  setDisabled(els.mulliganButton, true);
  try {
    await sendAction("keepHand");
  } finally {
    setDisabled(els.keepHandButton, false);
    setDisabled(els.mulliganButton, false);
  }
});

els.mulliganButton.addEventListener("click", async () => {
  setDisabled(els.keepHandButton, true);
  setDisabled(els.mulliganButton, true);
  try {
    await sendAction("mulligan");
  } finally {
    setDisabled(els.keepHandButton, false);
    setDisabled(els.mulliganButton, false);
  }
});

els.mulliganDialog.addEventListener("cancel", (event) => {
  if (state?.currentPlayer.mulliganPending) event.preventDefault();
});

els.boardReferenceButton.addEventListener("click", () => {
  openBoardReferenceDialog(state?.currentSeat);
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
  if (actionId === "passPriority") return !isDisabled(els.passPriorityButton) ? sendAction("passPriority") : null;
  if (actionId === "takePriority") return !isDisabled(els.instantButton) ? sendAction("takePriority") : null;
  if (actionId === "combatPass") return !isDisabled(els.combatPassButton) ? sendCombatPass() : null;
  if (actionId === "endTurn") return !isDisabled(els.endTurnButton) ? sendAction("turn") : null;
  if (actionId === "draw") {
    if (isDisabled(els.drawButton)) return null;
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
  if (activateDefaultFieldConfirm(event)) return;
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
  if (event.key === "Control" || !event.ctrlKey) clearCtrlZoomState();
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
  if (event.ctrlKey && hoveredZoomCard) {
    if (!zoomOverlay || zoomOverlay.classList.contains("hidden")) showCardZoom(hoveredZoomCard);
    else positionCardZoom(hoveredZoomCard);
  }
  if (!event.ctrlKey) clearCtrlZoomState();
});

window.addEventListener("blur", clearCtrlZoomState);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") clearCtrlZoomState();
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
setDisabled(els.playerCountInput, els.singlePlayerInput?.checked);
refreshState();
restoreAccountSession();
startPolling();
