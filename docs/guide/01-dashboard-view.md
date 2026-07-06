# Module 01: The Project Dashboard

> The Dashboard is where you create projects, choose storage mode, monitor sync status, check storage usage, and run project-level tabular queries.

---

## 1. Creating a New Project

1. From the Dashboard, tap the **+ New Project** button (top-right).
2. The **Create New Project** dialog opens:
   - **Project Name** *(required)* — Give it a descriptive name (e.g., "Water Network Audit Q2").
   - **Description** *(optional)* — Add context for your team.
   - **Storage Type** — Choose one:
     - **Hosted (Cloud)** — Data syncs to the cloud and supports team collaboration. *(Requires a signed-in account.)*
     - **Local (Offline)** — Data stays on the current device. Use this for guest work, testing, or field collection without cloud sync.
   - **Import Initial Data** *(optional)* — Upload a `.KMZ`, `.KML`, or `.GeoJSON` file to pre-populate the project. A preview shows the file name and size before you commit.
3. Tap **Create Project**.

> **Example:** You receive a `.kmz` file containing utility pole locations from a previous survey. Add it during project creation so the project opens with the imported features and matching attribute fields already available.

> **Plan note:** Free workspaces can create one hosted project. Local projects remain available for offline-only work on the current device.

---

## 2. Switching & Activating Projects

Your Dashboard shows all projects as cards in a grid. Each card displays:

- **Project Name** and description
- **Storage Badge**: `HOSTED (CLOUD)` or `LOCAL (OFFLINE)`
- **Storage Size**: Estimated disk usage (e.g., "12.3 MB")
- An **Activate** button (or a green ✅ **Active** badge if already selected)

**To switch projects:** Tap **Activate** on a project card. Mapplex loads that project's layers, forms, and data.

---

## 3. Uploading a Local Project to the Cloud

If you started with a local project and now want to enable collaboration:

1. Locate the ☁️ **cloud upload** icon in the top-right corner of the project card.
2. Tap it. A confirmation dialog explains that the local project will be uploaded to cloud storage and team collaboration will be enabled.
3. Tap **Upload** to proceed, or **Cancel** to abort.

---

## 4. Deleting a Project

1. Tap the **delete** icon on the project card.
2. A confirmation dialog warns: *"This will permanently remove the project and all its layers, forms, and collected data."*
3. You must type the word `delete` into the confirmation input to enable the Delete button. This prevents accidental data loss.
4. Tap **Delete**.

> Deleting a project also removes its layers, forms, features, and pending sync records.

---

## 5. Dashboard Stats & Storage

The top of your dashboard shows at-a-glance cards:

| Card | What It Shows |
|------|---------------|
| **Total Projects** | Number of projects in your workspace |
| **Cloud Sync** | Shows "All Synced" (green) or "X Pending Syncs" (amber) — *(authenticated users only)* |
| **Storage Usage** | How much of your storage quota you've consumed (e.g., "12.5 MB of 50 MB limit"), with a progress bar. For guest users, this shows "Device Storage" with a reminder that data is local-only |
| **Workspace Mode** | Displays "Local Offline" for guest users |

When storage exceeds 75%, the progress bar turns amber; above 90%, it turns red. If you're on a Free plan, an **Upgrade Storage** button appears linking to the Pro subscription.

---

## 6. Project Analytics: Tabular Queries & SQL Engine

Tap a project card to open the **Project Detail Modal**. Use this view to inspect project statistics and query layer data before opening the map.

### Layer Selection

At the top, select a specific layer to analyze using the **Select Layer to Analyze** dropdown. The system loads statistics immediately:

| Stat Card | Description |
|-----------|-------------|
| **Total Features** | Number of collected geometries |
| **Data Complete** | Percentage of features with all form fields filled |
| **Length/Area** | Aggregate measurement (e.g., total km of pipe, total hectares of zones) |

### SQL Query Engine

Below the stats, the **SQL Engine** panel offers three query modes, toggled by the tabs at the top:

#### Mode 1: Guided Builder

Ideal for non-technical users. Build queries visually:

1. Select a **Field** from the dropdown (populated from your layer's schema).
2. Choose an **Operator**: `EQUALS`, `NOT EQUALS`, `GREATER THAN`, `LESS THAN`, `GREATER OR EQUAL`, `LESS OR EQUAL`, or `LIKE`.
3. Enter a **Value** (with autocomplete suggestions from your existing data).
4. Chain conditions with **AND**, **OR**, **NOT NULL**, or **IS NULL** buttons.

#### Mode 2: Raw SQL

For users who know the layer schema, type a filter expression directly. Enter the condition only; do not include `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`, joins, or database functions.

```
NAME = 'Substation' AND area > 100
```

Field name chips are displayed below the input for quick reference.

#### Mode 3: AI-Assisted Query

Describe your query in plain English or Arabic:

> *"Show parcels where area is greater than 500 and name contains school"*

Tap **Generate**. Geova AI drafts a SQL clause, displays it for review, and lets you edit it before running. Each generation uses **1 AI credit**.

### Running & Exporting

- Tap **Run Query** to execute. Results populate a scrollable table below.
- The **results count badge** shows how many records matched.
- Tap the **CSV** export button (appears after results load) to download the filtered dataset.
- Tap **Clear** to reset your query.

---

## 7. The "Team & Shared" Tab

At the top of the Dashboard, a **Team & Shared** tab provides access to team collaboration features. This tab is labeled **Pro** and requires an authenticated account. Guest users see a lock icon.

> **Full details:** See [Module 07: Team & Performance](./07-team-view.md).

---

> **Next:** Proceed to [Module 02: Layers & Symbology](./02-layers-view.md) to create map layers and configure visual styles.
