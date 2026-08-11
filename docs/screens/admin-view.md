---
title: Admin Console
description: Team management, role assignment, and spatial KPI tracking.
---

# Admin Console

## Overview
The **Admin Console** gives workspace owners a workspace-wide view of team activity and access. It lets administrators approve members, assign roles, revoke access, and review collection totals.

## Action Steps

### 1. Track Team Productivity (KPIs)
To review collection activity:
1. Open the Admin Console and check the **Member Leaderboard**.
2. Mapplex automatically calculates points, lines, and polygons collected dynamically.
3. You can see the **Top Performer**, ranked by the number of geographic features collected in the selected period.

### 2. Approve New Team Members
When a new user signs up on their device:
1. They automatically appear in your **Pending Approval** queue.
2. Review their email.
3. Click **Approve**.
4. Select a specific role for them (see below).

### 3. Change System Roles
You can instantly alter what a team member is allowed to do:
- **Viewer**: Can only view maps. No data access.
- **Read-Only**: Can view maps and open data tables.
- **Collector**: Can draw new features in the field, but cannot edit or delete anyone else's work.
- **Editor**: Can review, modify, and delete any feature on the map.
- **Admin**: Full workspace control.

## Pro-Tips
> **Tip:** If a field device is lost or a user should no longer have access, find the user in the active roster and click **Revoke**. This invalidates the current Geova Cloud session and prevents further workspace access.

---

## Technical Architecture (For Developers)

The Admin engine uses Geova Cloud workspace access controls.

- **KPI Calculation Engine:** The `fetchTeamKPIs` module does not statically cache metrics. It executes dynamic aggregate queries across the `features` table scoped to `created_at` boundaries to generate real-time productivity stats purely off geometric payloads.
- **Role Constraints:** Mapplex operates an explicit-approval model. A user remains pending until an administrator assigns an approved workspace role. The authenticated session and assigned role determine which controls are available.
- **Revocation:** Revoking a user removes workspace access and invalidates the current Geova Cloud session.
