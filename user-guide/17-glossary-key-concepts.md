# Module 17: Glossary & Key Concepts

> Use this module as a plain-language reference for Mapplex and GIS terms used throughout the guide.

---

## 1. Account, Workspace, and Project Terms

| Term | Meaning |
|------|---------|
| **Account** | A signed-in user identity. Accounts can belong to one or more workspaces. |
| **Guest Mode** | Local-only access without signing in. Useful for testing or offline-only work on one device. |
| **Trusted Device** | A device registered to an account. Each account supports a limited number of trusted devices. |
| **Workspace** | An isolated organization area containing projects, members, roles, and cloud data. |
| **Project** | A working map environment containing layers, forms, features, imports, and exports. |
| **Hosted Project** | A cloud-backed project that supports sync and collaboration when the user is signed in. |
| **Local Project** | A project stored on the current device for offline or single-device work. |
| **Role** | A permission level such as Owner, Admin, Editor, Collector, or Viewer. Roles control what a user can create, edit, import, or manage. |
| **Entitlement** | A plan or workspace feature flag that unlocks tools such as Geova AI, CAD/SHP, Smart Logic, or advanced exports. |

---

## 2. Map and Data Terms

| Term | Meaning |
|------|---------|
| **Layer** | A named collection of map features with the same geometry type, such as streetlights, roads, or parcels. |
| **Active Layer** | The layer currently selected for drawing, GPS capture, or feature creation. |
| **Feature** | One collected map item, such as a single point, line, or polygon with form values attached. |
| **Geometry** | The spatial shape of a feature: Point, LineString, or Polygon. |
| **Point** | A single location, often used for assets, observations, signs, hydrants, or inspection points. |
| **LineString** | A connected line, often used for roads, pipes, trails, or routes. |
| **Polygon** | A closed area, often used for parcels, zones, buildings, or boundaries. |
| **Reference Layer** | A background layer used for lookup or context, commonly polygons such as districts, parcels, zones, or soil areas. |
| **Basemap** | The background map, such as street map or satellite imagery. |
| **Offline Tiles** | Downloaded basemap tiles stored on the device so the map remains visible without internet. |
| **Clustering** | A display method that groups nearby points at lower zoom levels to improve readability and performance. |
| **Temporal Playback** | A map tool that filters or animates features over time when date/time fields exist. |

---

## 3. Forms and Data Quality Terms

| Term | Meaning |
|------|---------|
| **Form** | The set of fields shown when a user creates or edits a feature. |
| **Field** | One form question or data value, such as Condition, Asset ID, Inspection Date, or Photo. |
| **Required Field** | A field that must be completed before the feature can be saved. |
| **Dropdown** | A field with a fixed list of choices created directly in the form. |
| **Lexicon Picklist** | A shared controlled list that can be reused across fields, layers, or projects. |
| **Data Dictionary** | Metadata for fields, including aliases, units, type hints, and semantic roles. It improves labels, exports, and AI understanding. |
| **Auto Geometry** | A field that stores values calculated from the feature geometry, such as point coordinates, line length, polygon area, or perimeter. |
| **Spatial Auto-Fill** | A form lookup that copies a selected attribute from a matching reference polygon into the form. Points use their location; lines and polygons use their centroid. |
| **Smart Logic** | Conditional form behavior that shows, hides, or sets fields based on earlier answers. |
| **Schema Import** | Creating form fields from an existing file's columns or attributes. |

---

## 4. Coordinate and CRS Terms

| Term | Meaning |
|------|---------|
| **CRS** | Coordinate Reference System. It defines how coordinates map to real-world locations. |
| **WGS84 / EPSG:4326** | The standard GPS coordinate system using longitude and latitude in decimal degrees. |
| **UTM** | A projected coordinate system using meters. Common in engineering, survey, and regional GIS workflows. |
| **Web Mercator / EPSG:3857** | A projected coordinate system commonly used by web maps. |
| **proj4** | A text definition for a coordinate system. Useful for custom or local grids. |
| **Reprojection** | Converting coordinates from one CRS to another. |
| **Wrong CRS Symptom** | Imported data appears far from the expected location, often because the wrong CRS was selected. |

---

## 5. File Format Terms

| Term | Meaning |
|------|---------|
| **GeoJSON** | A common web/GIS format for point, line, and polygon features. |
| **KML / KMZ** | Google Earth-style geospatial formats. KMZ is a compressed KML package. |
| **GeoPackage / GPKG** | A SQLite-based GIS file format used for larger or more formal GIS handoffs. |
| **CSV** | A spreadsheet-style text file. In Mapplex, CSV import creates point features when coordinate columns are mapped. |
| **Excel (.xlsx / .xls)** | Spreadsheet files that can be imported as point features when coordinate columns are available. |
| **Shapefile / SHP** | An ESRI GIS format made of related files such as `.shp`, `.shx`, `.dbf`, and often `.prj`. |
| **DXF** | A CAD drawing exchange format commonly used by engineering and drafting teams. |
| **DBF** | The attribute table file inside a Shapefile set. |
| **PRJ** | The coordinate system file commonly included with Shapefiles. |

---

## 6. Field Collection Terms

| Term | Meaning |
|------|---------|
| **GPS Pin** | The map control used to locate the device and capture a point at the current GPS position. |
| **Quick Capture** | A faster point-capture workflow for repeated GPS-based collection on the active layer. |
| **GPS Accuracy Indicator** | A visual cue showing whether the current GPS signal is reliable enough for field capture. |
| **Manual Coordinate Entry** | A tool for placing a point by typing known coordinates. |
| **GPS Recording Tools** | Tools for recording movement as a path or series of points. |
| **Silent Track** | GPS movement recording that does not add visible collection points to the active layer. |
| **Advanced Edit** | Owner/Admin polygon editing tools such as split and merge. |
| **Sketch Mode** | Freehand drawing support on the map. |
| **Slope Profiler** | A field tool for slope or terrain readings where available. |
| **Measurement Tool** | A map tool for distance, perimeter, and area measurements. |

---

## 7. Sync and Collaboration Terms

| Term | Meaning |
|------|---------|
| **Cloud Sync** | Syncing hosted project data through the cloud when internet is available. |
| **Pending Sync** | Local changes waiting to be uploaded or reconciled with cloud storage. |
| **Local P2P Sync** | Peer-to-peer synchronization between nearby devices on the same Wi-Fi or hotspot, where supported. |
| **Team Workspace** | A workspace configured for multiple users, roles, collaboration, and cloud features. |
| **Audit History** | A record of feature changes where the workspace plan supports history retention. |

---

## 8. Geova AI Terms

| Term | Meaning |
|------|---------|
| **Geova AI** | The Mapplex assistant for natural-language queries, summaries, spatial analysis planning, and exports. |
| **Workspace Credits** | Credits used by Geova AI for useful AI answers or generated assistance. |
| **AI-Assisted SQL / Filter** | A plain-language request converted into a reviewable dashboard filter or query. |
| **AI Result Layer** | A temporary or saved layer created from an AI query or spatial analysis result. |
| **Map Preview** | A visual preview of AI query results before saving or exporting. |
| **Go Deeper** | An action that reruns a request through a structured analysis template when available. |
| **DAG** | A structured multi-step analysis pipeline used behind the scenes for some spatial workflows. Users usually interact with the result, not the DAG itself. |

---

## 9. Common Confusions

| If You Mean... | Use This |
|----------------|----------|
| **"I need the district copied into the form from a zone layer."** | Spatial Auto-Fill |
| **"I need coordinates or area calculated from the drawn feature."** | Auto Geometry |
| **"I need the same dropdown values in many places."** | Lexicon Picklist |
| **"I need the form to change based on an answer."** | Smart Logic |
| **"I need to collect many GPS points quickly."** | Quick Capture |
| **"I need to carefully place one point."** | GPS Pin or Manual Coordinate Entry |
| **"I need to find incomplete or urgent records."** | Dashboard filters or Geova AI |
| **"I need nearest, buffer, join, or zone summaries."** | Geova AI spatial analysis |
| **"My imported data is in the wrong place."** | Check CRS, `.prj`, UTM zone, or custom proj4 |
| **"A button is locked or hidden."** | Check plan entitlement, project role, app setting, and network/device requirements |

---

> **Previous:** [Module 16: Sample Project - Municipal Asset Inspection](./16-sample-project-municipal-asset-inspection.md)
> **Back to overview:** [User Guide Overview](./README.md)
