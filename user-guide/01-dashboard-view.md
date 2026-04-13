# Module 01: Dashboard & Workspace Management

Welcome to the Geova (Mapplex) Platform. The Dashboard is your centralized command center for all spatial operations, designed to give you absolute control over your projects, data environments, and team collaboration before you even touch a map or spatial engine.

---

## 1. Creating & Switching Between Projects

Modern geographic platforms must handle an ever-expanding portfolio of spatial initiatives smoothly. Project segregation is critical for maintaining data fidelity, logical grouping, and operational focus.

### The "Why": Real-World Value
Imagine coordinating a massive global infrastructure rollout, such as laying fiber optic networks across multiple municipalities. You need distinct, isolated projects for "City of Austin Expansion" and "Dallas Suburbs Retrofit" to ensure specialized layers, rules, and teams never overlap. A mismanaged project context could mean dispatching a crew or laying expensive utility cables based on the wrong city's zoning parameters!

### The "How": Step-by-Step
1. **Create a New Project:** 
   - From the main Dashboard, locate the top navigation bar and click the **[+] New Project** button.
   - Enter a descriptive name, define your bounding area of interest, and select a base template.
   - Click **Initialize Project**.
2. **Switching Projects:**
   - On the left sidebar, open the **Project Drawer**.
   - Your recent and pinned projects will appear in a tile grid. Simply click a project card to instantly swap your working context. 
   - Geova’s state manager will seamlessly refresh all context variables, UI elements, and data connections without a full page reload.
3. **Deleting Projects Safely:**
   - To prevent accidental data loss of massive spatial datasets, clicking the **Delete Project** icon triggers a safeguard modal. You must explicitly type `delete` into the confirmation box before the platform allows the destruction of the project and its underlying geometries.

---

## 2. Choosing Workspace Type: Hosted vs. Local

Geova offers unparalleled architectural flexibility in how you manage your rendering and data storage. You must choose an environment that aligns perfectly with your security, latency, and collaboration mandates.

### The "Why": Real-World Value
Consider two deeply contrasting environments. A logistics team managing **Disaster Relief and Emergency Response (e.g., FEMA)** requires a **Hosted (Cloud)** workspace so dozens of international agencies can view live, synchronized updates on flood zones concurrently. Conversely, an energy conglomerate managing **Classified Subsurface Pipeline Infrastructure** requires a **Local** workspace—a completely air-gapped environment disconnected from the internet to comply with strict defense-grade data sovereignty laws, utilizing local machine compute.

### The "How": Step-by-Step
1. Upon project creation (or via the **[Settings > Workspace Engine]** menu), locate the **Environment Toggle**.
2. **Select Hosted:** Best for collaborative, cloud-native deployments with auto-sync, AI edge functions, and real-time multiplayer editing capabilities.
3. **Select Local:** Leverages offline web assemblies (WASM) and local IndexedDB storage for high-security, zero-latency rendering of massive datasets without transmitting packets over the network.

---

## 3. Importing Mobile Project Packages

Gone are the days of manually syncing individual shapefiles to field devices. In a mobile-first environment, field crews need to load heavy, localized datasets dynamically.

### The "Why": Real-World Value
If your organization deploys a team to survey a newly acquired regional water utility network in a remote area, they need the entire legacy GIS system on their device immediately. With **Mobile Project Imports**, your field workers can tap to load interoperable, offline-ready datasets directly from their device's local storage. Supporting universal mobile formats means no complex desktop conversions or reliable connectivity are required before a survey team deploys to the field.

### The "How": Step-by-Step
1. Navigate to the **Data Ingestion Hub** on the mobile dashboard.
2. Tap **Import Project Data** to browse your device's local file system.
3. Select an industry-standard mobile mapping format such as a **GeoPackage (`.gpkg`)**, **KMZ (`.kmz`)**, or **GeoJSON (`.geojson`)**.
4. Geova’s mobile engine will automatically parse the spatial relationships, align the Coordinate Reference Systems (CRS), and generate the map rendering layers instantly for on-the-go analysis.

---

## 4. Project Analytics: Tabular Queries & Summaries

The most critical spatial decisions often start with hard numbers. Before opening the heavy, GPU-accelerated map viewer, quickly assess the health and status of your geographic data using raw statistics.

### The "Why": Real-World Value
An Urban Planner working on a new "15-Minute City" initiative doesn't always need to inspect every single building contour visually. Often, they just need to ask a data-driven question: *"What is the total aggregate square footage of commercially zoned parcels currently loaded in this workspace?"* Extracting this high-level summary at the dashboard layer saves time and computational power.

### The "How": Step-by-Step
1. Click on any active project card in your dashboard to bring up the **Project Details Modal**.
2. Select the specific map layer you want to analyze from the dropdown menu. This will instantly load high-level statistics like total feature count and data completion percentages.
3. Open the **SQL Engine** section to perform deep queries without the map:
   - **Guided Builder**: Use dropdowns to select a field, choose an operator (like `GREATER THAN` or `NOT EQUALS`), enter a value, and chain conditions using `AND`/`OR`.
   - **Raw SQL Mode**: Toggle the switch to write custom SQL strings (e.g., `NAME = 'Substation' AND area > 100`) directly if you know your schema.
4. Click **Run Query** to populate the Results Table below. If you need to share this subset with external stakeholders, click **Export Results to CSV**.

---

## 5. Team & Shared Tab: Collaboration & Roles

Enterprise spatial data is inherently collaborative and high-stakes. Managing exactly who can see, edit, and destroy data is just as important as the data integrity itself.

### The "Why": Real-World Value
Imagine orchestrating a decentralized team of 50 field workers collecting forestry health data. You must guarantee that junior surveyors have the **"Field Collector"** role—authorizing them to add newly surveyed tree points, but strictly blocking them from deleting the master organizational zones or altering the base topography. Simultaneously, tracking their output in an activity feed helps management reward top performers and ensure project velocity.

### The "How": Step-by-Step
1. Navigate to the **Team & Shared** tab located on the lower left of your navigation tree.
2. **Viewing Team Achievements:** The primary dashboard feed displays your organization's activity—showing recent data commits, highlighting top contributors (e.g., "Alice surveyed 150 points today"), and tracking overall master project completion timelines.
3. **Managing Members:** Click the **Manage Organization** sub-tab to view the team roster.
4. **Assigning Roles:** Click on an individual's current permission badge to expand the **Access Control List (ACL)**. Select from rigid, predefined roles ranging from *View-Only/Auditor* to *Field Collector*, *Analyst*, and up to *Admin/Owner*.

---

## 6. Sync Inspector: Resolving Field-to-Cloud Transactions

For distributed teams operating in remote or disconnected environments, the **Sync Inspector** acts as your central quality assurance hub. It ensures that offline field edits merge cleanly with the master dataset without causing data collisions or loss.

### The "Why": Real-World Value
Imagine multiple electrical linemen repairing grid transformers after a severe hurricane. They are working entirely offline because cell towers are down, logging their repair progress directly on their devices. When they return to a connectivity zone, their devices automatically attempt to synchronize. If two workers accidentally updated the same transformer's status independently, the **Sync Inspector** flags this collision. A project admin (or the field worker themselves) can review the timestamps and field notes to manually accept the correct attribute—preventing critical infrastructure data from being silently overwritten.

### The "How": Step-by-Step
1. From the Dashboard (or within the Team & Shared tab), locate and tap the **Sync Inspector** icon (usually indicated by a sync symbol with a pending badge).
2. **Review Pending Commits:** The inspector queue will display all your locally cached edits, compartmentalized into *Additions*, *Updates*, and *Deletions*.
3. **Resolve Conflicts:** If the engine detects a data collision (e.g., another team member altered the exact same geometry while you were offline), it will flag the record in red.
4. Tap the flagged record to launch the **Resolution Matrix**, viewing a side-by-side tabular comparison of your local edit versus the current master cloud version.
5. Tap **Push Local** to override the server, or **Revert to Cloud** to gracefully discard your local change.
6. Once all conflicts are resolved, click **Sync Ready Queue** to finalize the transaction block and securely post your data back to the organization.
