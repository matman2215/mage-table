# Mage Table

Mage Table is a dependency-free prototype for a manual multiplayer Magic-style card table.

Run the Node server, then open the local URL in a browser. Create a room, choose 2-6 players, import a deck list for the current seat, draw cards, move cards between zones, adjust life totals, track phases, and copy each invite link.

```powershell
.\start-server.bat
```

Then open:

```text
http://localhost:3000
```

If port `3000` is already occupied by an older local run, use:

```powershell
.\start-server-3001.bat
```

Then open:

```text
http://localhost:3001
```

The Scryfall-enabled development build can be started with:

```powershell
.\start-server-3002.bat
```

Then open:

```text
http://localhost:3002
```

The hardened deck parser build can be started with:

```powershell
.\start-server-3003.bat
```

Then open:

```text
http://localhost:3003
```

The batch Scryfall importer build can be started with:

```powershell
.\start-server-3005.bat
```

Then open:

```text
http://localhost:3005
```

The opening-hand and library-tools build can be started with:

```powershell
.\start-server-3006.bat
```

Then open:

```text
http://localhost:3006
```

The commander-zone and drag/drop build can be started with:

```powershell
.\start-server-3007.bat
```

Then open:

```text
http://localhost:3007
```

The free-position battlefield, chat, and turn-lock build can be started with:

```powershell
.\start-server-3008.bat
```

Then open:

```text
http://localhost:3008
```

The topbar turn controls and default-collapsed control rail build can be started with:

```powershell
.\start-server-3009.bat
```

Then open:

```text
http://localhost:3009
```

The active-player battlefield focus build can be started with:

```powershell
.\start-server-3010.bat
```

Then open:

```text
http://localhost:3010
```

The graveyard viewer and battlefield interaction build can be started with:

```powershell
.\start-server-3011.bat
```

Then open:

```text
http://localhost:3011
```

The commander-return and graveyard/exile drag build can be started with:

```powershell
.\start-server-3012.bat
```

Then open:

```text
http://localhost:3012
```

The fixed battlefield canvas build can be started with:

```powershell
.\start-server-3013.bat
```

Then open:

```text
http://localhost:3013
```

The full-screen board reference and Ctrl-hover breakout build can be started with:

```powershell
.\start-server-3014.bat
```

Then open:

```text
http://localhost:3014
```

The no-scroll board reference and compact battlefield build can be started with:

```powershell
.\start-server-3015.bat
```

Then open:

```text
http://localhost:3015
```

The battlefield coordinate-grid clamp and viewport-safe zoom build can be started with:

```powershell
.\start-server-3016.bat
```

Then open:

```text
http://localhost:3016
```

The library-drop and free battlefield movement build can be started with:

```powershell
.\start-server-3017.bat
```

Then open:

```text
http://localhost:3017
```

The pixel battlefield, overlay controls, UI scale, and library picker build can be started with:

```powershell
.\start-server-3018.bat
```

Then open:

```text
http://localhost:3018
```

The library-search action and stable transform scale build can be started with:

```powershell
.\start-server-3019.bat
```

Then open:

```text
http://localhost:3019
```

The corrected scale slider and collapsed flyout gutter build can be started with:

```powershell
.\start-server-3020.bat
```

Then open:

```text
http://localhost:3020
```

The viewport-aware scale and pointer battlefield drag build can be started with:

```powershell
.\start-server-3021.bat
```

Then open:

```text
http://localhost:3021
```

The card-size scale without page clipping build can be started with:

```powershell
.\start-server-3022.bat
```

Then open:

```text
http://localhost:3022
```

The battlefield drop repair and shorter hand-zone build can be started with:

```powershell
.\start-server-3023.bat
```

Then open:

```text
http://localhost:3023
```

The legal battlefield drop targeting and viewport-aware hand scaling build can be started with:

```powershell
.\start-server-3024.bat
```

Then open:

```text
http://localhost:3024
```

The floating battlefield drag preview build can be started with:

```powershell
.\start-server-3025.bat
```

Then open:

```text
http://localhost:3025
```

The native browser-drag suppression build can be started with:

```powershell
.\start-server-3026.bat
```

Then open:

```text
http://localhost:3026
```

The unified playtester-style card drag build can be started with:

```powershell
.\start-server-3027.bat
```

Then open:

```text
http://localhost:3027
```

The free-overlap battlefield arranging build can be started with:

```powershell
.\start-server-3028.bat
```

Then open:

```text
http://localhost:3028
```

The battlefield token and counter build can be started with:

```powershell
.\start-server-3029.bat
```

Then open:

```text
http://localhost:3029
```

The token payload fix build can be started with:

```powershell
.\start-server-3030.bat
```

Then open:

```text
http://localhost:3030
```

The counter-visual and token-removal build can be started with:

```powershell
.\start-server-3031.bat
```

Then open:

```text
http://localhost:3031
```

The card-scale and simplified-counter build can be started with:

```powershell
.\start-server-3032.bat
```

Then open:

```text
http://localhost:3032
```

## Current Model

This version stores room state in the local Node server. Invite links contain a room id and private seat token.

- It polls for updates every two seconds.
- Other players cannot receive another player's private hand or library through the API.
- Rooms are currently in memory, so restarting the server clears active games.

For hosted online play outside your computer, the next step is deploying this with persistent storage or moving the same model to Supabase or Firebase.

## Deployment

The app is set up as a standard Node web service. Hosting providers should run:

```bash
npm start
```

That command starts `server.js`, which reads the host-provided `PORT` environment variable and binds to `0.0.0.0` for public traffic.

For a GitHub-connected host such as Render or Railway:

1. Push this project to a GitHub repository.
2. Create a new Node web service from that repository.
3. Use `npm start` as the start command.
4. Leave the build command blank or use the host default, since this app has no build step.
5. Open the public URL assigned by the host and create rooms from there.

After deployment, future code changes are normally made locally, committed, pushed to GitHub, and redeployed by the host. If you deploy by manually uploading files instead of GitHub, you must upload the changed files again and restart/redeploy the service.

Do not upload the local portable Node folder. It is ignored by `.gitignore`; production hosts provide Node themselves.

## Deck Import Format

Paste one card per line:

```text
1 Sol Ring
1 Command Tower
4 Lightning Bolt
```

Lines without a number are treated as one copy.

When a deck is loaded, the server checks each numbered line, cleans common export text such as set codes and collector numbers, looks up the card through Scryfall, counts total cards, lands, nonlands, and unique names, and stores image URLs for display in hand and public zones. Cards Scryfall cannot find still load as text-only cards and are listed in the deck warning.

After loading, the library is shuffled and the player immediately draws an opening hand of 7. Clicking your Library pile opens private tools for draw X, scry X, surveil X, search, mill X, reveal top, shuffle, and clearing previews.

The named commander is moved into a public commander zone during deck load. Cards can be dragged between supported zones, and clicking a card still opens the action menu.

Battlefield cards keep free-form positions inside the battlefield. The left control rail can collapse, chat opens from the top bar, and non-active players cannot perform card/library actions until their turn. The main table focuses on the active player's battlefield, with the other public boards available from the Boards button in the bottom-right turn dock.
