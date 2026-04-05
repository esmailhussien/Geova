---
title: Admin Dashboard
description: Team management, role assignment, and spatial KPI tracking.
order: 7
---

---
title: Admin Console
description: Team management, role assignment, and spatial KPI tracking.
---

# Admin Console

## Overview
The **Admin Console** provides workspace owners with top-down visibility over their team's data collection efforts and system access. It allows you to rapidly grant or revoke access to massive field teams and track EXACTLY how much data your teams are successfully capturing on the ground.

## Action Steps

### 1. Track Team Productivity (KPIs)
Want to know who is collecting the most data?
1. Open the Admin Console and check the **Member Leaderboard**.
2. Mapplex automatically calculates points, lines, and polygons collected dynamically.
3. You can see the **Top Performer**, ranked purely on the sheer volume of their geographic features synced to the cloud.

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
> 💡 **Tip:** If a field tablet is lost or compromised, find the user in the active roster and click **Revoke**. This instantly destroys their local database access tokens, locking them out of the current project before they can sync or download data.

---

## Technical Architecture (For Developers)

The Admin engine is built directly into Supabase's Row Level Security (RLS) system.

- **KPI Calculation Engine:** The `fetchTeamKPIs` module does not statically cache metrics. It executes dynamic aggregate queries across the `features` table scoped to `created_at` boundaries to generate real-time productivity stats purely off geometric payloads.
- **Role Constraints:** Mapplex operates an explicit-approval model. A user holds an unmapped role until an Admin writes an `enum` string to their auth profile. The JWT dictates whether UI components (like the "Delete Feature" trash can) even physically mount to the React DOM.
- **Instant Revocation:** Revoking a user bumps them back to the Pending state and forces an RPC call physically invalidating their current session JSON Web Token on the cloud side.
