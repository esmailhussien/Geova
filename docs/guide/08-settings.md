# Module 08: Settings, Account & Workspace

> Use Settings to manage your account, devices, workspace access, map behavior, offline tiles, subscriptions, and application preferences.

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

Tap **Settings** in the sidebar to open the Settings modal. Most settings apply immediately.

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

> **Tip:** For longer field sessions, turn off GPS Accuracy Indicator and Map Rotation when you do not need them. Keep Screen Awake is useful during active collection but can increase battery use.

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
5. Tap a workspace to switch. Mapplex reloads the project list and related workspace data.

> **Example:** A consulting firm manages separate contracts for a road audit and a utility survey. The project manager switches workspaces to review the correct project list, members, and storage usage for each contract.

---

## 5. Offline Map Manager

Tap **Offline Maps** in the sidebar to open the Offline Map Manager.

### Downloading Tiles

Tap **Download Map Area** to cache the currently visible map tiles for offline use. This saves basemap imagery (satellite, street, topo) to local storage so the map works without internet.

### Clearing Cache

Tap **Clear Offline Cache** to delete all downloaded map tiles. A confirmation dialog appears before deletion. This frees device storage but requires re-downloading for future offline use.

> **When to clear:** Clear the cache when offline tiles are taking too much storage or when downloaded tiles need to be refreshed.

---

## 6. Subscription & Entitlements

Feature availability is controlled by your workspace plan and entitlement flags. If a tool is not included in your current workspace, Mapplex shows a lock state or upgrade prompt instead of silently failing.

### Free / Core Access

The default free workspace is intended for solo or lightweight field work:

- Local projects on the current device
- One hosted project in the free workspace
- Layer creation, form setup, drawing, GPS capture, and feature collection according to your role
- GPS recording tools and redlining/markup when enabled
- Export to GeoJSON, KMZ, and CSV

### Pro / Team Access

When a locked feature is accessed, Mapplex shows an upgrade prompt. Pro features include:

| Feature | Description |
|---------|-------------|
| **Geova AI Chat** | Natural-language queries, spatial analysis planning, and report/export assistance |
| **GeoPackage and PDF Export** | GIS handoff and print-ready map output |
| **Team Workspace Tools** | Collaboration, member roles, realtime sync, and audit history where enabled |
| **Lexicon Picklists** | Project-wide shared dropdown registries |
| **Gallery Fields** | Multi-photo form fields with carousel |
| **Smart Logic** | Conditional form rules |
| **Spreadsheet and Reference Imports** | CSV/Excel point import and spatial reference zones |
| **Advanced Symbology** | Graduated classification and completion indicators |
| **Quick Capture and Slope Profiler** | Faster field capture and terrain/slope tools |
| **CAD and SHP Managers** | DXF and Shapefile import/export workflows |

> **Note:** Team and Enterprise workspaces may have additional limits or enabled features, including longer audit-history retention and larger collaboration allowances.

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
