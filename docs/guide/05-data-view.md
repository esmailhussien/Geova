# Module 05: Data & Sync

A Geographic Information System is only as powerful as its ability to integrate with the outside world. The **Data & Sync** module is the central hub for data interoperability—allowing you to ingress historical engineering files, egress field realities into enterprise systems, and synchronize offline field crews dynamically.

---

## 1. Exporting Your Field Data

When your field patrol is complete, the collected geometries and attribute forms must be delivered to decision-makers. Geova offers a highly flexible export engine.

### The "Why": Real-World Value
An environmental consultancy has just mapped 400 invasive species clusters across a county. The client requested a simple spreadsheet for their financial audit, but the internal GIS engineers need the raw geometries to run spatial hot-spot analysis in QGIS. Instead of using separate tools, the project manager uses the **Export Data** dropdown. First, they drop down the menu, select **Entire Project**, and hit **CSV** to instantly satisfy the financial auditors. Then, they drop the menu, select only the specific invasive "Weeds Layer", and export it as a **GeoJSON** for the internal engineering team.

### The "How": Step-by-Step
1. Locate the **Export Data** panel at the top of the workspace.
2. Click the layer selector dropdown. You can choose to export the **Entire Project** (combining all layers) or select a specific **Layer** (e.g., "Layer: Hydrants (45)").
3. Choose your required output format:
    *   **JSON:** Raw GeoJSON formatting. Unrivaled for web and software development.
    *   **KMZ:** Heavily optimized for Google Earth and Google Maps.
    *   **GPKG:** The modern, SQLite-driven "GeoPackage" standard. Best for QGIS and heavily attributed enterprise systems.
    *   **CSV:** Standard Tabular spreadsheet format. Perfect for Excel, PowerBI, and non-spatial stakeholders.

---

## 2. Importing Features

Field work rarely starts with a blank map. You often need to import historical records as a baseline before updating them.

### The "Why": Real-World Value
A broadband utility company acquired a struggling competitor. They received the competitor's fiber-optic network layout as a legacy `.kmz` file. Instead of redrawing the network manually, the operations manager clicks **IMPORT**, ingests the `network.kmz`, and instantly populates the active project with thousands of line strings. The field technicians can immediately go out, tap the imported lines, use the **Advanced Edit** tools to reshape them if reality doesn't match the historical file, and save the corrected data.

### The "How": Step-by-Step
1. In the **Import Features** panel, ensure your desired target layer is currently active in your Layer Manager.
2. Tap the **IMPORT (GeoJSON, KMZ, GPKG)** button.
3. Select the file from your local device. The shapes will immediately be digitized and appended to your active map layer.

---

## 3. Uploading Spatial Reference Zones

Reference Zones are background layers that do not accept new data. They exist purely to provide geographical context and power the "Relational Intelligence" form features (discussed in Module 04).

### The "Why": Real-World Value
A municipality is sending inspectors to audit restaurant health codes. The inspectors need to know if a restaurant falls within a "Historical District" (which carries different building regulations). The GIS administrator clicks **Upload Reference** and uploads the `Historical_Zoning.geojson`. Now, whenever an inspector drops a point on the map, this background reference zone empowers the logic engine to automatically calculate the intersection and write "Historical Zone: True" into the form—completely invisible to the user.

### The "How": Step-by-Step
1. Navigate to the **Spatial Reference Zones** panel.
2. Click **Upload Reference** and select your background polygon file (KMZ, KML, GeoJSON).
3. A prompt will appear asking you to "Name This Reference Layer." Give it a clear, recognizable name (e.g., "City Zoning").
4. Once saved, it will appear as a pill tag in the interface. To remove it later, simply tap the trash-can icon next to its name.

---

## 4. Field Gathering (Local Peer-to-Peer Sync)

When operating in remote wilderness, disaster zones, or subterranean infrastructure where cellular internet does not exist, data synchronization is critical.

### The "Why": Real-World Value
A team of five US Forest Service rangers is charting the perimeter of a rapidly moving wildfire. There is zero cellular coverage. At the end of the day, they rendezvous at a mobile command tent. The commander does not want to physically swap SD cards. Instead, the commander hits **Host Session** on their master tablet, creating a local offline server over a portable Wi-Fi router. The four rangers tap **Join & Send**, type in the commander's IP address, and wirelessly push all 500 fire perimeter geometries to the master tablet in seconds—all without ever touching the public internet.

### The "How": Step-by-Step
**For the Commander (Receiving Data):**
1. Navigate to the **Field Gathering (Local Sync)** panel.
2. Tap **Host Session**. The system will scan your network interfaces and display a dominant IP Address (e.g., `192.168.4.1`) and Port (e.g., `8080`).
3. Leave this screen open. The device is now acting as a local server.

**For the Field Technicians (Sending Data):**
1. Tap **Join & Send**.
2. Type in the supervisor's **Host IP Address** and **Port**.
3. Choose to send the entire project or a specific layer.
4. Tap **Send Features to Host**. The system will establish a direct websocket bridge and offload the data seamlessly.

---

## 5. Reviewing Collected Features

Before exporting or syncing, supervisors need to quickly audit the tabular integrity of the day's fieldwork.

### The "Why": Real-World Value
After a day of mapping pothole locations, a supervisor wants to verify that the crew didn't forget to attach photo evidence. Rather than clicking on 300 points on the map interface blindly, the supervisor opens the **Collected Features** data table. They instantly sort the columns, verify that the `Evidence_Image` column contains valid attachments, and confirm the geometry types are correct before finalizing the weekly report.

### The "How": Step-by-Step
1. Scroll down to the **Collected Features** data cards at the bottom of the Data View.
2. The UI will group all data cleanly by Layer.
3. Click on a specific card to expand its highly-responsive interactive table. 
4. The table displays exactly `# of Features Collected`, auto-calculates geometry footprints (e.g., area for polygons, length for lines), handles pagination via the **Load More** button, and provides instant one-click buttons to preview attached PDFs and photos seamlessly.
