---
title: Data & Sync Hub
description: The control center for reviewing tabular spatial data, exporting formats, and hosting Local Sync sessions.
order: 5
---

# Data & Sync (`DataView.js`)

The Data & Sync view provides a traditional tabular interface to view, export, and ingest massive amounts of spatial data without crashing the single-page application. 

![Data View Placeholder](../assets/images/data-view-main.png)

## DOM Virtualization (Performance)

Mapplex commonly deals with layers containing 5,000+ polygons. Rendering 5,000 DOM `<tr>` rows instantly crashes mobile Safari and Chrome WebViews.
`DataView` implements manual pagination via a "Load More" DOM button. It uses a module-level `_dataViewCache` to slice features into batches of 50. 

## Import Pipeline (GeoJSON, KMZ, GPKG)

The Data View serves as the primary ingestion dropzone. 
Mapplex implements a robust parsing layer that detects files via magic bytes (instead of relying on generic `.gpkg` or `.kmz` file extensions, which Android file pickers often truncate).

### Reference Layers vs. Feature Layers
- **Target Layers**: Imported data matches the schema of your currently selected Mapplex layer.
- **Reference Layers**: Imported data is stored exactly as it is (in `REFERENCE_DATA`). This is used for visual underlays and **Spatial Mapping** (where a form field auto-completes based on intersecting the Reference Layer).

## Local Sync (Offline Operations)

Because Mapplex operates completely offline, teams deep in the field without cell coverage need to consolidate data before heading back to base.
`DataView` provides a "Field Gathering" interface via WebSockets:
1. **Host Session**: One device (e.g. tablet) boots up a local WebSocket Node server dynamically (assuming the platform allows it, or uses peer-to-peer logic/local IP).
2. **Join & Send**: Worker devices type in the Host's IP address and Port (e.g. `192.168.4.1:8080`) and push their queued `STORES.FEATURES` directly via the local ad-hoc Wi-Fi network.

## Export Architectures

Data can be exported via:
- **GeoJSON**: Standard web-GIS JSON format.
- **KMZ**: Zipped KML for Google Earth compatibility.
- **CSV**: Flattens geometries into standard Excel formats.
- **GPKG (GeoPackage)**: Implements SQLite WASM (`sql.js`) client-side to dynamically construct a valid `.gpkg` database file containing the local features, entirely inside the browser memory.
