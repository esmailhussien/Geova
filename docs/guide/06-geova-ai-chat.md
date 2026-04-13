# Module 06: Geova AI Spatial Assistant

The **Geova AI Spatial Assistant** isn't merely a chatbot—it is an enterprise-grade, localized topological computing engine. Driven by an architecture of over 60 dedicated analytical modules, it bridges the gap between natural human language and highly complex mathematical spatial operations (DAG execution, R-Tree indexing, Isochrone generation, and 4D Temporal filtering). 

Because the engine executes locally on your device's processor using Web Workers, your proprietary geometries never leave your system. Only lightweight schema intent is sent to the AI, ensuring 100% data privacy.

This comprehensive guide covers every aspect of leveraging the AI for advanced spatial workflows.

---

## 1. The AI Chat Interface UI

The Assistant provides a persistent experience that never obstructs your view of the map.

### Initiating a Session
1. Tap the **AI Assistant Floating Action Button (FAB)** located at the bottom of the Map View.
2. The panel expands. Type or speak your inquiry using the microphone icon.
3. The engine uses **Zero-Shot Intent Routing** to instantly categorize your message as one of three tiers:
   - **Conversational** (greetings, thanks)
   - **Tabular SQL** (filtering non-spatial attributes)
   - **Spatial DAG** (complex geometric math)

### Interacting with Results
When the AI executes a Spatial DAG, it outputs the results both textually and visually:
*   **The Chat Card:** Displays the AI's explanation of the logic it used, statistical summaries, and an embedded data table containing the geometric results.
*   **Ephemeral `DAG_RESULT` Layer:** The AI actively manipulates your map. It renders a temporary highlights layer showing the precise polygons or points that satisfied your query. This layer persists so you can pan, zoom, and physically inspect the results before deciding what to do next.

---

## 2. Advanced Prompting & Conversational Memory

Geova is designed for **Multi-Turn Workflows**. You do not need to restate your query parameters over and over again.

### Pronoun Resolution (Context Injection)
If your first question was *"Show me all utility poles within 200 meters of Main Street"* (resulting in 400 poles), your next message can simply be: 
*"Now filter them to only show the ones marked high-risk."*
The engine natively resolves the word "them" to the previous execution plan, applying your new tabular filter securely against the cached 400 geometries instantly.

### Correction & Self-Healing
If the AI selects the wrong template or layer, simply correct it conversationally: 
*"No, I meant the Underground Pipes, not the Surface Lines."*
The underlying **Agentic Fallback** and **Error Recovery** loops will self-heal the pipeline, swap the target layer, and re-run the topology.

---

## 3. The 24 Spatial Operations (The DAG Engine)

The core mechanism of Geova AI is the **Directed Acyclic Graph (DAG) Template Engine**. By writing clear, intentional prompts, you can explicitly trigger one of 24 strictly programmed mathematical operations without relying on LLM hallucination.

### A. Topology & Discovery
These queries manipulate physical shapes and intersections.
*   **Geometric Buffering:** *"Draw a 5km buffer around the chemical spill."*
*   **Spatial Joins:** *"Tag every building footprint with the name of the Voting District it falls inside."*
*   **Clipping & Masking:** *"Clip the national road network down to just the areas inside my City Zoning polygon."*
*   **Change Detection:** *"Compare the 2024 Forest Canopy with 2025 to calculate exact acreage lost."*

### B. Network Logistics & Isochrones
These queries route geometries through real-world road network APIs.
*   **Drive-Time Boundaries:** *"Map the 15-minute driving service area around the Hospital."*
*   **Service Area Intersections:** *"Find all elementary schools located entirely within a 10-minute drive of the active fire."*
*   **Network Load Simulation:** *"Simulate traffic choke points if the northern bridge is marked destroyed."*

### C. Optimization & Site Selection
Heavy computations used for urban planning and resource deployment.
*   **Multi-Criteria Overlay:** *"Find optimal construction sites that are > 5km from wetlands, < 1km from highways, and on slope gradients < 15%."*
*   **Catchment Analysis (Voronoi):** *"Generate Voronoi polygons to determine the theoretical service zones for all regional clinics."*
*   **K-Means Spatial Clustering:** *"Cluster the 150,000 disease outbreak cases into 8 distinct geographical operation zones."*

### D. Advanced Environmental Profiling
*   **Right-of-Way Expropriation:** *"Calculate the private property acreage lost if we impose a 50-meter right-of-way expansion along the National Railway."*
*   **Urban Heat/Green Equity:** *"Correlate neighborhood tree canopy percentages explicitly against ambient surface temperatures."*
*   **Concentric Blast Radii:** *"Draw 1km, 5km, and 10km concentric circles outward from the nuclear plant."*

---

## 4. 4D Temporal Filtering & Automation

Geova's **Temporal Resolver** allows you to inject time directly into spatial statements seamlessly.

### Dynamic Date Handling
You can ask: *"Show me the pothole repairs completed in the last quarter"* or *"Find safety audits from exactly between Jan 12 and March 4."*
The temporal engine extracts these abstract human dates, normalizes them into ISO timestamps, and injects them into the SQL or DAG engine before any geometry is processed.

### Proactive Anomaly Detection
If you ask the AI to generically *"Analyze the inspections dataset"*, it triggers the `anomalyDetector` and `resultStatistics` modules. The AI will:
1. Scan for temporal gaps or sudden data influxes.
2. Warn you of data quality issues (e.g., *"⚠️ 15% of records are missing mandatory photos"*).
3. Compute and render trend-line insights autonomously.

---

## 5. Exporting & Reporting Results

Once the AI produces a perfect map intelligence output, you can immortalize it directly from the chat.

### Post-Flight Operations
*   **Commit to Layer:** Type *"Save these results to a new layer,"* and the AI will extract the ephemeral `DAG_RESULT` map, permanently digitizing it as a new distinct feature layer in your project.
*   **Generate PDF Report:** Type *"Export a PDF report of this analysis."* The `pdfExporter.js` engine will compile the map snapshot, the logic summary, and the tabular data breakdown into a high-resolution, branded PDF for stakeholder management.
*   **Tabular Exports:** Say *"Download a CSV,"* and the engine will instantly trigger a local download.
