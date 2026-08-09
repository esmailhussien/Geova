---
title: Dashboard View
description: Detailed technical and user documentation for the Geova Dashboard component.
---

---
title: System Dashboard
description: Manage projects, monitor storage, and review spatial data.
---

# System Dashboard

## Overview
The **Dashboard** is where you create projects, choose local or cloud storage, import spatial files, and review project activity before opening the map.

## Action Steps

### 1. Create a New Geospatial Project
1. Click **New Project** in the top right corner.
2. Choose a name for your project (for example, *"Water Utility Survey"*).
3. Select **Hosted (Cloud)** for team sharing or **Local (Offline)** for work that stays on the device.
4. Drag and drop a valid `.kml`, `.kmz`, or `.geojson` file to begin importing data into the project.

### 2. Monitor Sync Health & Storage
1. Check the **Global Stats Module** at the top of the interface. 
2. If your Sync Status glows **Amber**, it means you have local data that hasn't been uploaded to the cloud servers yet. Ensure you are connected to WiFi to allow it to push.
3. Keep an eye on your **Storage Card**—it will automatically transition to red if your spatial layers approach your MB limits.

### 3. Run Analytics using the Project Detail Modal
Want instant metrics without rendering a heavy map?
1. Tap any active Project Card in the grid. The Detail Modal will launch.
2. Select your imported Data Layer from the dropdown. 
3. Review the **Feature Counts** and **Geographic Areas** for the selected project.
4. Use the **Guided Builder** to filter:
   - Run simple logic checks like *Severity Level GREATER THAN 3* and click **Run Query**.
   - Review the filtered results and export them as CSV when needed.

## Pro-Tips
> **Tip:** Working with a team? Use the top tabs to switch between your **Personal Workspace** and **Team & Shared** environments.

> 💡 **Tip:** Be mindful of file uploads! If you drag a `.geojson` file over 5MB, Geova evaluates the complexity in real-time and will warn you before bogging down your system.

---

## Technical Architecture (For Developers)

The Dashboard uses chunked processing and background work to keep project and import screens responsive.

- **Event Loop Cohesion via Async Chunking:** Schema induction on 10,000+ GeoJSON features is processed synchronously in burst blocks of 500, yielding back to the main thread via `await new Promise(resolve => setTimeout(resolve, 0))`. This prevents the standard 500ms UI lockdown common in heavy web GIS tools.
- **Measurement Sampling:** For some large datasets, the Dashboard may use sampled measurements to keep summary calculations responsive. Treat sampled totals as estimates and use feature-level calculations when an exact value is required.
- **Web Worker Offloading:** Massive file extractions (`.kmz` unzipping and KML destructuring) are ferried directly to `fileImportService` Web Workers, ensuring the UI CSS loading animations never stall.
- **AbortPattern Garbage Collection:** Heavy event listeners attached closely to recursive file dropzones are destroyed proactively via a module-scoped `_dashboardAbort.abort()` signal whenever the Dashboard unmounts.
