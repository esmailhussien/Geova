# Module 07: Team & Collaboration

> Mapplex's team features let you invite members to your workspace, assign roles, track field collection performance with KPI dashboards, and manage team access — all from within the app.

---

## 1. Team Panel Overview

The **Team & Shared** panel is accessible from the Dashboard. It is a **Pro feature** — free users see a blurred preview with an unlock overlay.

The panel has two tabs:
- **Performance** — KPI dashboard with collection analytics
- **Members** — Workspace member roster and invite management

---

## 2. Performance Dashboard

The Performance tab provides a real-time analytics dashboard of field data collection activity.

### Date Range Filter

At the top, a **Date Range Picker** lets you filter all KPIs by time period. Default: last 30 days. Tap **Apply** to refresh.

### KPI Summary Cards

Four cards display key metrics:

| Card | Metric |
|------|--------|
| **Total Features** | Total number of features collected in the date range |
| **Contributors** | Number of unique team members who contributed data |
| **Avg / Member** | Average features per contributor |
| **Peak Day** | The single day with the highest collection activity |

### Geometry Breakdown

A visual bar chart shows the distribution of geometry types:
- 🔵 **Points** (e.g., hydrants, poles)
- 🟢 **Lines** (e.g., pipes, roads)
- 🟣 **Polygons** (e.g., parcels, zones)

The stacked bar adjusts proportionally with animated transitions.

### 14-Day Activity Sparkline

A bar chart showing daily feature creation over the past 14 days. Hover over any bar to see the exact count and date. This helps supervisors identify productivity patterns and off-days.

### Top Contributor

A highlighted card with a 🏆 trophy icon showing the team member who collected the most features in the selected period.

### Contributor Leaderboard

A ranked list of all contributors with:
- 🥇🥈🥉 Medal icons for top 3
- Feature count with progress bar (relative to the top performer)
- Breakdown by geometry type (points/lines/polygons)
- Number of layers touched
- Last active date

---

## 3. Members Tab

### Workspace Member Roster

All workspace members are displayed in a continuous card list. Each member card shows:

- **Avatar** — Initial-based with gradient (or email icon for pending invites)
- **Name & Email** — Full name and email address
- **Role Badge** — Color-coded role indicator:
  - 🟡 **Owner** — Full control, billing, workspace deletion
  - 🔴 **Admin** — Full access, can invite and manage members
  - 🔵 **Editor** — Can edit features and review data
  - 🟢 **Collector** — Data entry only
  - ⚪ **Viewer** — Read-only access
- **Feature Count** — Number of features contributed
- **(You)** indicator for the current user
- **Pending** badge for invitations not yet accepted

### Inviting a Member

*(Requires Owner or Admin role)*

1. Tap **Invite Member** (top-right of the Members tab).
2. A glassmorphism modal opens with:
   - **Email Address** — Enter the colleague's email
   - **Assigned Role** — Select from Collector, Editor, or Admin via a rich dropdown
3. Tap **Send Invite**.
4. The invitation is processed securely via the **Geova Cloud**. The member appears as "Pending" until they accept.

### Managing Members

Tap the **⋮** menu on any member card. Available actions depend on your role:

| Your Role | Can Manage |
|-----------|-----------|
| **Owner** | All members including admins |
| **Admin** | Editors, collectors, and viewers (not owners) |
| **Editor/Collector/Viewer** | Only themselves (to leave) |

---

## 4. Admin Dashboard

*(Visible only to workspace Owners and Admins)*

The **Admin Dashboard** is a separate view accessible from the navigation. It provides workspace-wide management:

### Pending Approvals

A list of users who have requested access to the workspace. For each request:
- User name, email, and requested role
- Workspace name
- **Approve** button → Opens a modal to assign the actual role (Collector/Editor/Admin)
- **Reject** button → Permanently denies the registration

### Active Team Members

A list of approved members (excluding the current user and owners). Each member shows:
- Name and email
- **Role Selector** — A custom dropdown to change roles in real-time:
  - 📍 **Collector** — Data entry
  - ✏️ **Editor** — Review & edit
  - 🔑 **Admin** — Full control
- **🚫 Revoke** button — Removes workspace access entirely (requires confirmation)

### Performance KPIs (Workspace-Wide)

The Admin Dashboard includes the same KPI analytics as the Team Panel but scoped to the entire workspace (not just the active project):
- Total features, active members, avg per member, peak day
- Geometry breakdown bar
- Top performer card
- Member leaderboard with medal ranking

### Security

- Role changes are applied instantly across the **Geova Cloud**
- The assignable roles are hardened to an allowlist (`collector`, `editor`, `admin`) — the `owner` role cannot be assigned through the UI
- This is a defense-in-depth layer; server-side RLS constraints also enforce this

---

> **Next:** Proceed to [Module 08: Settings & Profile](./08-settings.md) to configure your account and application preferences.
