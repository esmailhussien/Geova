# Module 07: Team Management & Performance

Geospatial projects rarely involve just one person. Geova's **Team & Shared** architecture transforms the platform from a single-user mapping tool into a full-scale operational headquarters. 

Available exclusively to Geova Pro workspaces, this module provides granular Role-Based Access Control (RBAC) to protect your databases, alongside a rich, analytics-driven Performance Dashboard to track your field workforce in real time.

---

## 1. Navigating the Team Panel

The team management interface is embedded directly inside your active project environment. You must have a project selected to manage its team.

### The "Why": Real-World Value
If you run an environmental agency, you may have one project dedicated to "Water Quality Testing" and another to "Forest Fire Boundaries." The Team Panel allows you to restrict field workers purely to the projects they are assigned to, ensuring a distracted worker doesn't accidentally log tree data into the water database.

### The "How": Step-by-Step
1. Open your Geova **Dashboard**.
2. Select your active project from the project list.
3. Tap the **Team & Shared** panel. 
4. The panel is divided into two distinct sub-tabs: **Performance** (Analytics) and **Members** (Access Control).

---

## 2. Inviting Members & Role-Based Access

Protecting the integrity of your spatial database is critical. Not everyone who collects data should be allowed to delete it.

### The "Why": Real-World Value
A supervisor hires 15 temporary summer interns to map invasive weed locations. If the interns are given full Admin rights, they could accidentally delete the entire layer, destroying years of historical data. By using the **Invite Member** tool, the supervisor assigns the interns the **Collector (Data Entry)** role. They can see the map and add new points, but the platform aggressively blocks them from deleting past data or altering the form schemas.

### The "How": Step-by-Step
1. Navigate to the **Members** tab.
2. Click the **Invite Member** button (denoted by a `person_add` icon). *Note: You must be an Admin or Owner to see this button.*
3. Type the email address of your colleague into the floating modal.
4. Click the **Assigned Role** dropdown and select the strict permission tier:
    *   **📍 Collector:** Can only view the map and submit new features. Ideal for temporary field workers.
    *   **✏️ Editor:** Can do everything a Collector does, plus review and modify existing features. Ideal for senior field technicians.
    *   **🔑 Admin:** Has full control over the map, can delete layers, alter Form Schemas, and invite other users.
5. Tap **Send Invite**. The user will appear in the roster with a "Pending" badge until they accept.

---

## 3. The Performance Dashboard

To ensure field workers are hitting their daily quotas, Geova automatically aggregates geometric collections into a gamified Performance Dashboard. 

### The "Why": Real-World Value
A municipality dispatched a fleet of 5 trucks to inspect 1,000 traffic lights over the weekend. On Monday morning, the city manager wants to know if the contract was fulfilled. Rather than manually counting dots on a map, the manager opens the **Performance** tab, sets the Date Range picker to "This Weekend", and instantly sees that exactly 1,000 features were collected. They also see a **Top Performer** card awarding the top technician for contributing 30% of the workload.

### The "How": Step-by-Step
1. Navigate to the **Performance** tab.
2. Use the **Date Range** selector at the top to target a specific operational window (e.g., Today, Last 7 Days, Custom Range), and click **Apply**.
3. The dashboard will instantly generate:
    *   **KPI Cards:** High-level metrics showing Total Features, Active Contributors, Average Per Member, and the Peak Collection Day.
    *   **Geometry Breakdown:** A visual split showing exactly how many Points, Lines, and Polygons were drawn, preventing workers from accidentally using the wrong draw tools.
    *   **14-Day Activity Sparkline:** A bar chart showing the daily momentum of your field campaign over the last two weeks.

---

## 4. The Contributor Leaderboard

Accountability is built directly into the system. Every point drawn is tagged with the user's secure ID.

### The "Why": Real-World Value
During a severe winter storm, 10 technicians are dispatched to log broken power lines. One technician is slacking off, while another is working overtime. The supervisor glances at the **Contributor Leaderboard**. They immediately see Technician A has earned the 🥇 Gold Medal with 150 features logged, while Technician B is ranked #10 with only 4 lines drawn. The supervisor can instantly re-route resources to assist Technician B's sector.

### The "How": Step-by-Step
1. Scroll to the bottom of the **Performance** tab.
2. The **Contributor Leaderboard** automatically ranks your active team members based on the volume of geometries they have generated within the selected date range.
3. The leaderboard displays micro-stats for each user, including the exact breakdown of their drawn geometries (Points vs. Lines) and the date of their last active session, making it impossible for field crews to falsify their operational reports.
