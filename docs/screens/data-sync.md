---
title: Data & Sync Hub
description: The control center for reviewing tabular spatial data, exporting formats, and hosting Local Sync sessions.
order: 5
---

---
title: Data Sync Hub
description: The control center for exporting formats and hosting Local Sync sessions.
---

# Data Sync Hub

## Overview
The **Data Sync Hub** is where you manage the critical export and offline transmission of your spatial data. Because Mapplex is designed for extreme offline conditions, this screen allows you to securely transfer your data to other offline devices (tablets, phones) in your camp without ever needing an internet connection.

## Action Steps

### 1. Perform an Air-Gapped Local Sync
If your team is deep in the field with zero cell coverage, you can consolidate everyone's collected geometries onto a single 'Host' device:
1. **The Host:** One team leader opens the Sync Hub and clicks **Host Session**. The tablet will act as a local node server and display an IP address (e.g., `192.168.4.1:8080`).
2. **The Worker:** Other field devices tap **Join Session**, explicitly type in the Host's IP address, and push their internal database directly via local Wi-Fi.

### 2. Export Your Data Deliverables
When you return to base, you can export your findings for external software:
1. Navigate to the Layer you want to export.
2. Select your desired architectural format:
   - **GeoJSON**: Standard format for web mapping.
   - **KMZ**: Zipped format for opening instantly in Google Earth.
   - **CSV**: Standard Excel format (flattens complex polygons into coordinates).
   - **GeoPackage (GPKG)**: An entire heavy SQLite database constructed entirely within your browser memory.

## Pro-Tips
> 💡 **Tip:** If the Android file picker hides file extensions (like `.kmz` or `.gpkg`) when you are picking a file, don't worry! Geova utilizes "magic byte detection" to figure out the file structure programmatically even if the name gets corrupted.

---

## Technical Architecture (For Developers)

The Local Sync infrastructure does not depend on cloud bridges. 

- **Local WebSocket Handoff:** The application boots up a dynamic local WebSocket Node server (`Host Session`) assuming the device platform exposes the network interfaces. 
- **WASM SQLite Construction:** Constructing a `.gpkg` locally is achieved via `sql.js` (SQLite compiled to WebAssembly). Geova dynamically constructs an empty GPKG schema in-memory, injects the `features` rows utilizing precise WKB (Well-Known Binary) `LittleEndian` encoding, and pipes the final Blob to the user without ever touching a server.
