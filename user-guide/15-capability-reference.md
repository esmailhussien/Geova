---
title: Capability Reference
description: Review Mapplex capabilities, file formats, roles, entitlements, offline workflows, and Geova AI boundaries.
---

# Module 15: Capability Reference

> This module summarizes what Mapplex can do in the current application. Use it as a practical boundary guide when planning a deployment, training a team, or deciding which workflow belongs in Mapplex.

---

## 1. How to Read This Reference

Mapplex capabilities depend on four things:

| Factor | What It Controls |
|--------|------------------|
| **Workspace plan / entitlement** | Whether premium tools such as Geova AI, GeoPackage and GDB exchange, Smart Logic, CAD, SHP, slope tools, and team features are available |
| **Project role** | Whether a user can create features, manage forms/layers, import reference data, or run administrative actions |
| **App settings** | Whether optional map tools such as GPS recording, Advanced Edit, Sketch Mode, Quick Capture, or Slope Profiler are visible |
| **Device and network context** | Whether GPS, offline tiles, native local sync, cloud sync, and AI services are available |

If a tool is unavailable, the app normally shows a lock state, a disabled control, or a role/permission message.

---

## 2. Offline, Online, and Local Network Behavior

| Capability | Offline | Requires Internet | Notes |
|------------|---------|-------------------|-------|
| Local projects | Yes | No | Stored on the current device |
| Hosted projects | Limited | Yes for sync | Data can be viewed locally after loading, but cloud updates need connectivity |
| Drawing and forms | Yes | No | Works with locally available project data |
| GPS capture and tracking | Yes | No | Requires device location permission |
| Offline basemaps | Yes after download | Yes to download | Cached tiles remain available until cleared |
| Data import/export | Mostly yes | No for local files | Large files depend on device memory and browser limits |
| Local P2P sync | Local network only | No internet required | Requires supported native/local-network capability and same Wi-Fi or hotspot |
| Team collaboration | No | Yes | Requires authenticated cloud workspace |
| Geova AI | No | Yes | Requires sign-in, workspace credits, and network access |
| Cloud audit/history | No | Yes | Availability depends on plan and retention policy |

---

## 3. Account, Workspace, and Role Boundaries

### Account Model

- Users can sign in with an account or continue in Guest mode for local-only work.
- New accounts may require admin approval before accessing a workspace.
- Each account supports up to two trusted devices.
- Workspaces isolate projects, layers, forms, members, and cloud data.

### Typical Role Capabilities

| Role | Typical Use | Practical Boundary |
|------|-------------|--------------------|
| **Owner** | Workspace and project lead | Full project and member administration |
| **Admin** | Operational administrator | Manages users, data, imports, and most project settings |
| **Editor** | GIS or data lead | Edits data and manages imports, but some advanced map tools remain Owner/Admin-only |
| **Collector** | Field data entry | Adds records to existing layers and completes forms; does not manage schema or reference data |
| **Viewer** | Review-only access | Views and exports where allowed; does not create or edit records |

Advanced polygon split/merge is limited to Owner/Admin access in the map code. CAD import, SHP import, and reference-layer import require Owner, Admin, or Editor access.

---

## 4. Feature Requirements Matrix

Use this table when a user asks why a tool is locked, hidden, or unavailable. Availability can still vary by workspace configuration, but these are the practical requirements reflected by the current app.

| Feature | Plan / Entitlement | Role | Setting | Network / Device |
|---------|--------------------|------|---------|------------------|
| **Create local project** | Core | Any signed-in user or Guest | None | No internet after app loads |
| **Create hosted project** | Core, with free hosted limit | Signed-in user with workspace access | None | Internet required |
| **Create features** | Core | Owner, Admin, Editor, Collector | Active layer selected | GPS optional unless capturing location |
| **Edit feature attributes** | Core | Owner, Admin, Editor; Collector for own records where allowed | None | No internet for local data |
| **Manage layers and forms** | Core | Owner, Admin, Editor | None | No internet for local projects |
| **GeoJSON / KMZ / CSV export** | Core | Any project member with export access | None | No internet for local export |
| **GeoPackage export** | GeoPackage entitlement | Any project member with export access | None | No internet for local export |
| **File Geodatabase import/export** | GDB exchange enabled | Owner, Admin, or Editor for import; project members with export access for export | Relationship keys available when related data is used | No internet for local files |
| **PDF map export** | PDF export entitlement | Any project member with export access | None | No internet after map data and tiles are available |
| **Spreadsheet import** | Spreadsheet import entitlement | Owner, Admin, Editor, Collector | Target Point layer selected | No internet for local files |
| **Reference zone import** | Reference import entitlement | Owner, Admin, Editor | None | No internet for local files |
| **Spatial Auto-Fill** | Reference import / form entitlement | Form manager to configure; collector to use | Reference polygon layer and field mapping configured | No internet after data is loaded |
| **Smart Logic** | Smart Logic entitlement | Owner, Admin, Editor to configure | Form rule configured | AI-assisted setup needs internet and credits |
| **Lexicon picklists** | Lexicon entitlement | Owner, Admin, Editor to manage; collectors can use | Field linked to Lexicon | No internet after values are loaded |
| **Quick Capture** | Quick Capture entitlement | Owner, Admin, Editor, Collector | Quick Capture ON | GPS permission required |
| **GPS recording tools** | Core / enabled workspace feature | Owner, Admin, Editor, Collector | GPS Recording Tools ON | GPS permission required |
| **Advanced split / merge** | Core / enabled workspace feature | Owner, Admin | Advanced Edit ON | No internet |
| **Sketch Mode** | Core / enabled workspace feature | Owner, Admin, Editor, Collector | Sketch Mode ON | No internet |
| **Slope Profiler** | Slope Profiler entitlement | Field user with project access | Slope Profiler ON | Device sensor support recommended |
| **Offline map tiles** | Core | Any project member | None | Internet required to download tiles |
| **Local P2P sync** | Core / native support | Project members with sync access | None | Same Wi-Fi or hotspot; native local-network support |
| **Cloud sync / team collaboration** | Team or cloud entitlement | Signed-in workspace member | Hosted project | Internet required |
| **Audit history** | Team / audit entitlement | Project member with access | None | Internet required for cloud history |
| **Geova AI Chat** | Geova AI entitlement and credits | Signed-in workspace user | None | Internet required |
| **AI dashboard query generation** | Geova AI entitlement and credits | Signed-in workspace user | None | Internet required |
| **CAD import** | CAD Manager entitlement | Owner, Admin, Editor | None | No internet for local file import |
| **CAD export** | CAD Manager entitlement | Any project member with export access | Target CRS selected | No internet for local export |
| **SHP import** | SHP Manager entitlement | Owner, Admin, Editor | None | No internet for local file import |
| **SHP export** | SHP Manager entitlement | Any project member with export access | None | No internet for local export |

---

## 5. Project and Dashboard Capabilities

Mapplex supports:

- Hosted cloud projects for collaboration and sync
- Local offline projects for guest work, field-only collection, and disconnected use
- Initial project import from KMZ, KML, or GeoJSON
- Uploading a local project to hosted storage when collaboration is needed
- Project deletion with typed confirmation
- Project statistics: feature counts, completion percentage, length, and area
- Guided dashboard filters for non-technical users
- Raw filter expressions for users who know the layer schema
- AI-assisted dashboard query generation when Geova AI is available
- Importing and exporting File Geodatabases with supported related records and attachments

Dashboard raw SQL is a filter-expression tool, not a full database console. Enter conditions such as `status = 'Open' AND priority = 'High'`, without `SELECT`, `WHERE`, joins, ordering, grouping, or database functions.

---

## 6. Map and Field Collection Capabilities

The Map View supports:

- Point, line, and polygon collection
- Geometry drawing with layer-aware tools
- Snapping to nearby vertices and edges
- GPS point capture
- GPS path recording and silent tracking when GPS tools are enabled
- Quick Capture for faster point collection when enabled and entitled
- Manual coordinate entry
- Precision crosshair placement
- Distance, multi-segment, perimeter, and area measurement
- Offline tile download and cache management
- Satellite/street basemap switching
- Layer visibility controls
- Feature popups with form values, photos, geometry details, edit/delete actions, and history where available
- Advanced polygon split and merge for Owner/Admin users when Advanced Edit is enabled
- Sketch Mode when enabled
- Temporal playback when date/time fields exist
- Geova AI preview and previous-result overlay pills

GPS accuracy depends on the device sensor, sky visibility, and operating-system permissions. Mapplex can display accuracy indicators, but it cannot make phone GPS equivalent to survey-grade equipment.

---

## 7. Layers, Styling, and Data Dictionary

Layer tools support:

- Point, LineString, and Polygon layers
- Marker colors and marker icons
- Polygon fill/hollow display
- Label display from selected fields
- Feature clustering for dense point layers
- Completion indicators where entitled
- Categorical and graduated symbology where entitled
- Classification methods including quantile, equal interval, and Jenks
- Color ramps such as blues, reds, greens, yellow-orange-red, and red-yellow-green
- Data Dictionary aliases, units, type hints, and semantic field roles

Use the Data Dictionary for human-readable field names, units, and roles. It improves maps, exports, forms, and AI query quality.

---

## 8. Forms and Data Quality

Forms can include:

| Field Type | Typical Use |
|------------|-------------|
| **Text** | Names, notes, identifiers |
| **Number** | Counts, ratings, dimensions, readings |
| **Dropdown / manual select** | Controlled choices |
| **Lexicon picklist** | Shared standardized terms where entitled |
| **Date** | Inspection dates, install dates, visit dates |
| **Checkbox** | Yes/no or completion flags |
| **Photo** | Single image capture |
| **Gallery** | Multiple photos where entitled |
| **Attachment** | Supporting files and documents |
| **Auto geometry** | Coordinates, length, area, or perimeter values |

Additional form capabilities include:

- Schema import from supported data files
- Spatial Auto-Fill from reference polygon layers using point-in-polygon or centroid-in-polygon lookup
- Smart Logic for conditional visibility and values where entitled
- AI-assisted Smart Logic generation where Geova AI credits are available
- Lexicon linking, matching, and value cleanup where entitled
- Photo, gallery, and file attachments for field evidence
- Related-record workflows for linking inspections, work orders, or visits to a parent asset

For reliable field data, keep field names clear, avoid duplicate meanings, and use Lexicons or dropdowns for values that must be consistent.

---

## 9. Import and Export Matrix

| Format / Tool | Import | Export | Important Notes |
|---------------|--------|--------|-----------------|
| **GeoJSON** | Yes | Yes | General-purpose GIS/web format |
| **KML / KMZ** | Yes | KMZ export | Useful for Google Earth-style handoff |
| **GeoPackage (GPKG)** | Yes | Entitled feature | Large files may show warnings before processing |
| **File Geodatabase (GDB)** | Yes | Yes where GDB exchange is enabled | Preserves configured feature relationships, related records, and attachments |
| **CSV** | Yes for point import | Yes | Spreadsheet import requires coordinate columns |
| **Excel (.xlsx / .xls)** | Yes for point import | No native Excel export | Export CSV for spreadsheet review |
| **Reference zones** | KMZ, KML, GeoJSON | Managed in app | Polygon background layers for Spatial Auto-Fill |
| **DXF** | Entitled CAD Manager | Entitled CAD Manager | Supports CRS selection for import and export |
| **SHP** | Entitled SHP Manager | Entitled SHP Manager | Supports ZIP archives or loose shapefile component files |
| **PDF map** | No | Entitled feature | Print-ready map layout and legend output |
| **Engineering drawing PDF** | No | Yes where export tool is available | Schematic drawing output, not a legal survey plat |

Spreadsheet import is intended for point layers because it creates geometry from latitude/longitude or projected coordinate columns.

---

## 10. CAD, SHP, and CRS Handling

### CAD Manager

CAD Manager imports DXF entities into Mapplex layers and exports collected features back to DXF. Import supports common entities such as points, lines, polylines, circles, arcs, ellipses, splines, solids, and 3D faces. Block inserts are not expanded as editable feature geometry.

DXF import uses coordinate fingerprinting, current map position, nearby UTM suggestions, common CRS options, and custom proj4 strings. DXF export can target WGS84, Qatar grid options, GPS-derived UTM, or a custom proj4 string.

### SHP Manager

SHP Manager imports and exports ESRI Shapefiles. It can read ZIP archives containing one or more shapefiles, or loose component files selected together. A `.prj` file allows automatic CRS detection; without one, confirm the source CRS before importing.

---

## 11. Geova AI Capabilities and Boundaries

Geova AI can help with:

- Counting, filtering, sorting, grouping, and summarizing records
- Drafting dashboard filter expressions
- Finding nearest features and building buffers
- Joining points to zones or comparing layers
- Running template-driven spatial workflows such as gap analysis, catchment analysis, suitability ranking, clustering, density, interpolation, and scenario comparison where available
- Previewing result layers on the map
- Exporting AI results to formats such as GeoJSON, CSV, KML, or PDF
- Saving AI results as permanent Mapplex layers after review

Important boundaries:

- Geova AI requires a signed-in session, network access, and workspace credits.
- The model works best when layers, fields, aliases, units, and roles are configured clearly.
- AI requests may include layer schema, field samples, and relevant location context.
- Full datasets and geometries are not sent automatically for ordinary chat planning.
- Review generated SQL, previews, and exports before using them in operational decisions.
- Do not treat AI output as certified engineering, legal, safety, or regulatory advice.

---

## 12. Offline Field Readiness Checklist

Use this checklist before sending a team into the field, especially when the work area has weak or no connectivity.

### Before Leaving the Office

1. Open the correct workspace and project on each device.
2. Confirm the active layers, forms, dropdowns, Lexicons, Smart Logic rules, and required related-record structures are loaded.
3. Download offline tiles for the work area and verify the map still displays after disabling internet.
4. Confirm GPS permission is granted and the blue location dot appears on the map.
5. Check the correct field tools are enabled in Settings: GPS Recording Tools, Quick Capture, Sketch Mode, Advanced Edit, or Slope Profiler as needed.
6. Confirm each user has the right role for the job: Collector for entry, Editor for imports and corrections, Owner/Admin for advanced editing.
7. Check available device storage, especially when collecting photos, attachments, or large imported layers.
8. Confirm the sync plan: cloud sync if internet is expected, local P2P sync if the team will use the same Wi-Fi or hotspot.

### At the Site

1. Select the correct project and active layer before collecting the first feature.
2. Wait for GPS accuracy to stabilize before capturing important locations.
3. Use controlled fields, Lexicons, or dropdowns instead of free text when consistency matters.
4. Add photos and notes while still at the location, not later from memory.
5. If GPS is poor, use manual coordinates or crosshair placement only when you have reliable source coordinates.

### Before Leaving the Site

1. Review the collected features table for missing required values, obvious duplicates, and empty photo fields.
2. Use local P2P sync if multiple devices need to consolidate records without internet.
3. Export a quick CSV or GeoJSON backup when the workflow requires a local handoff.
4. If cloud sync is expected, open the Dashboard once connectivity returns and confirm pending syncs have cleared.

---

## 13. Practical Deployment Checklist

Before rolling Mapplex out to a team:

1. Create the workspace and confirm the plan includes the tools you need.
2. Define user roles before inviting the team.
3. Create layers with clear geometry types.
4. Build forms with consistent field names and controlled values.
5. Configure Data Dictionary aliases, units, and semantic roles.
6. Import reference zones if Spatial Auto-Fill is part of the workflow.
7. Test import/export formats, including one real GDB with relationships and attachments, from the client or GIS team.
8. Download offline tiles for the field area before travel.
9. Confirm GPS permissions on each device.
10. Run one end-to-end pilot: collect, edit, sync, export, and review.

---

> **Previous:** [Module 14: SHP Manager](./14-shp-manager.md)
> **Next:** [Module 16: Sample Project - Municipal Asset Inspection](./16-sample-project-municipal-asset-inspection.md)
