# Module 08: Settings, Account & Workspace

> Configure map behavior, manage your account, control device limits, switch between workspaces, and customize Mapplex for your field workflow — all from the sidebar and settings panel.

---

## 1. Opening the Sidebar

Tap the **hamburger menu** (☰) in the top-left corner to slide open the sidebar panel. The sidebar provides access to:

- **Account & Profile** — View and manage your account
- **Settings** — Configure map and app behavior
- **Geova AI** — Quick access to the AI assistant
- **Offline Maps** — Download and manage tile caches
- **Map PDF Export** — Generate print-quality documents
- **Upgrade to Pro** — Access premium features
- **Help & About** — Documentation and app info

---

## 2. Account Settings

Tap **Account** in the sidebar to open the Account Settings modal.

### Profile Information

- **Full Name** — Your display name across the platform
- **Email** — Your registered email address
- **Plan Type** — Free or Pro subscription status

### Storage Indicator

A progress bar shows your current storage usage:
- **Cloud users** — Shows `XX MB of YY MB cloud allocation`
- **Offline/local users** — Shows `XX MB local project data on this device` or `XX MB SQLite database`
- Color-coded: Green (under 50%), Amber (50–80%), Red (80%+)

### Device Management

Mapplex allows a maximum of **2 trusted devices** per account.

- A device list shows all registered devices with:
  - Device name
  - Last active date
  - ✅ Green indicator for the current device
- **De-register** — Remove a device to free up a slot. If you de-register the current device, you'll be signed out immediately.
- A progress bar shows `X of 2 Slots` used

### AI Credit Recharge

Tap **Recharge** to purchase additional Geova AI credits for your workspace.

---

## 3. App Settings

Tap **Settings** (⚙️) in the sidebar to open the Settings modal. All settings are applied **instantly** — no app restart needed.

### Map Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **GPS Accuracy Indicator** | ✅ On | Shows a live accuracy dot on the GPS button, color-coded by signal quality |
| **Map Rotation** | ❌ Off | Enables compass-based map rotation. Toggling re-initializes the map engine |
| **Zoom Controls** | ❌ Off | Shows +/- zoom buttons on the map. Hides them when off (pinch zoom still works) |
| **Feature Clustering** | ✅ On | Groups nearby features into clusters at lower zoom levels for performance |

### Field Tools

| Setting | Default | Description |
|---------|---------|-------------|
| **Manual Coordinate Entry** | ❌ Off | Adds a coordinate input control to the map for precise point placement |
| **GPS Recording Tools** | ❌ Off | Shows GPS track recording and silent recording buttons on the map |
| **Advanced Edit** | ❌ Off | Enables the spatial split/merge tools (line splitter, polygon merge) |
| **Sketch Mode** | ❌ Off | Enables freehand sketch drawing on the map |
| **Quick Capture** | ❌ Off | One-tap feature creation at your current GPS location |
| **Slope Profiler** | ❌ Off | Enables the digital clinometer tool (see [Module 09](./09-slope-profiler.md)) |
| **Hide Drawing Toolbar** | ✅ On | Hides the floating drawing toolbar, relying on the radial menu (long-press) instead |

### Display & Units

| Setting | Default | Description |
|---------|---------|-------------|
| **Language** | English | Switch between English (`en`) and Arabic (`ar`) — full RTL support |
| **Coordinate Format** | WGS84 DD | Choose between decimal degrees, DMS, or UTM display |
| **Measurement Unit** | Metric | Switch between metric and imperial for area/distance calculations |

### Battery

| Setting | Default | Description |
|---------|---------|-------------|
| **Keep Screen Awake** | ✅ On | Prevents the device screen from sleeping during fieldwork. Uses the Wake Lock API |

> **Tip:** For maximum battery life during all-day fieldwork, disable GPS Accuracy Indicator and Map Rotation, and enable Keep Screen Awake.

---

## 4. Workspace Switcher

If your account belongs to multiple organizations, the Workspace Switcher lets you change environments without signing out.

### What is a Workspace?

A **Workspace** is an isolated tenant environment. Everything — projects, layers, forms, team members, and data — belongs to a workspace. Different workspaces are completely separated for data isolation and security.

### Switching Workspaces

1. Open the sidebar.
2. Your current workspace name appears below your profile.
3. Tap the workspace name to open the **Workspace Switcher**.
4. A list of all workspaces you've been invited to appears.
5. Tap a workspace to switch. The system unmounts the current spatial cache, rebinds the project list, and reloads the UI.

> **Example:** A consulting firm manages separate contracts for City A and City B. The project manager switches from "City A GIS" to "City B Utilities" workspace to review that team's progress — both environments are completely isolated.

---

## 5. Offline Map Manager

Tap **Offline Maps** in the sidebar to open the Offline Map Manager.

### Downloading Tiles

Tap **Download Map Area** to cache the currently visible map tiles for offline use. This saves basemap imagery (satellite, street, topo) to local storage so the map works without internet.

### Clearing Cache

Tap **Clear Offline Cache** to delete all downloaded map tiles. A confirmation dialog appears before deletion. This frees device storage but requires re-downloading for future offline use.

> **When to clear:** If syncing errors occur, or if offline tiles consume too much device storage, clearing the cache acts as an emergency reset.

---

## 6. Subscription & Entitlements

### Free Tier

All core GIS features are available for free:
- Project creation, layer management, form building
- Map drawing, GPS tracking, data collection
- Export (GeoJSON, KMZ, GPKG, CSV)
- Local P2P sync

### Pro Tier (Unlock via Upgrade)

Pro features are gated by the **EntitlementEngine**. When a locked feature is accessed, a blurred "Ghost UI" appears with an unlock prompt. Pro features include:

| Feature | Description |
|---------|-------------|
| **Geova AI Chat** | Conversational spatial intelligence |
| **Team Performance Dashboard** | KPI analytics and leaderboards |
| **Cloud Sync** | **Geova Cloud**-backed project synchronization |
| **Lexicon Picklists** | Project-wide shared dropdown registries |
| **Gallery Fields** | Multi-photo form fields with carousel |
| **Smart Logic** | Conditional form rules |
| **Advanced Symbology** | Graduated classification |

---

## 7. Help & About

### Help Modal

Tap **Help** in the sidebar to access:
- **Interactive Tour** — A guided walkthrough of the app's main features
- **Documentation** — Opens the online documentation at geova.net/docs

### About Modal

Tap **About** to view:
- App version number
- Build information
- Links to privacy policy and terms of service

---

> **Next:** Proceed to [Module 09: Slope Profiler](./09-slope-profiler.md) to use the digital clinometer for terrain measurement.
