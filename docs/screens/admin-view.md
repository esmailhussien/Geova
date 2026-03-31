---
title: Admin Dashboard
description: Team management, role assignment, and spatial KPI tracking.
order: 7
---

# Admin Dashboard (`AdminView.js`)

The Admin View provides workspace owners with top-down visibility over their team's data collection efforts and access controls.

![Admin View Placeholder](https://via.placeholder.com/800x400.png?text=Admin+View+Placeholder)

## 1. Performance KPI Tracker

Mapplex doesn't just store geometries; it calculates productivity. The KPI engine (`fetchTeamKPIs`) queries the Supabase `features` table dynamically based on a date range to generate performance metrics.

**Available Metrics:**
- **Geometry Breakdown**: Live distribution of Points, Lines, and Polygons collected.
- **Top Performer**: The system automatically ranks Field Workers based on the sheer volume of `created_at` records they own within the requested time frame.
- **Member Leaderboard**: A detailed tabular breakdown of every user's progress, showing their specific geometry counts, the number of distinct layers they have touched, and their last active timestamp.

## 2. Team Access Control

Mapplex operates an explicit-approval model.

1. **Pending Approval**: When a new user signs up, their account is locked into `AuthView`'s Pending state. They only appear here in the "Pending Approval" queue.
2. **Role Assignment**: When an Admin clicks "Approve", they must explicitly assign a granular role:
   - `viewer`: Map Only.
   - `read_only`: Map + Data Tables.
   - `collector`: Can add features, cannot delete others.
   - `editor`: Can review and modify any feature.
   - `admin`: Full workspace control.
3. **Revocation**: Admins can instantly revoke users, bumping them back into the Pending queue and deleting their local JWT, locking them out of the current project instantly.
