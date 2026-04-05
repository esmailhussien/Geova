---
title: Spatial Indexing & DAG Execution
description: High-performance R-Tree indexing and the Directed Acyclic Graph Template Engine parsing complex operations.
order: 3
---

---
title: Spatial Indexing execution
description: High-performance R-Tree indexing and the Directed Acyclic Graph Template Engine.
---

# Spatial Indexing Execution

## Overview
When analyzing massive geographic datasets, mathematically comparing every single polygon to every other polygon will instantly crash your browser. **Spatial Indexing** is Geova's invisible shield—an underlying categorization engine that rapidly sorts geometries into "Bounding Boxes", allowing the system to securely ignore irrelevant data and process your AI requests millions of times faster.

## Action Steps

### 1. Optimize Massive Layer Processing
1. When you ask the AI to *"Find intersections between the Coastal Erosion layer and the Property Zoning layer"*, Geova kicks in.
2. The index bulk-loads invisible "Boxes" over groups of properties. 
3. If a box is 10 miles inland, the system safely ignores the entire cluster! It only applies heavy CPU calculations to the boxes exactly overlapping the coastline.

### 2. Multi-Step Execution (DAGs)
Sometimes you ask for things that require multiple rigorous steps, such as *"Group Urban Zones by Carbon Credits, draw a buffer around them, and find intersections"*.
1. You just type the prompt natively into Chat.
2. Geova compiles it into a rigid "pipeline" structure. 
3. It performs Step 1, securely pipes the exact geometric output to Step 2, and renders the result without crashing the interface.

## Pro-Tips
> 💡 **Tip:** Spatial Indexing runs completely autonomously. You do not need to construct indices manually like in traditional SQL. Just upload your data into Geova, and the R-Tree processes automatically behind the scenes.

---

## Technical Architecture (For Developers)

The `spatialIndex.js` and `dagTemplateEngine.js` are tightly coupled pipeline orchestrators.

- **R-Tree Indexing Core (`spatialIndex.js`):** Pure spatial topology operations are mathematically $O(N \times M)$. `spatialIndex` wraps local `@turf/geojson-rbush`. Before heavy node execution (like `SPATIAL_JOIN`), the engine bulk loads Axis-Aligned Bounding Boxes achieving $O(N \log N)$ indexing. It filters via `queryCandidates` ($O(\log B + k)$) ensuring severe dimensional reduction before raw vertex matching geometry happens.
- **DAG Template Engine:** The "Temp DAG" strictly isolates abstract intent. It parses operations into Node Steps guaranteeing explicit typing interfaces (e.g., Output `GeometryCollection` from Step 1 mathematically meshes with Input `Geometry` of Step 2). These nodes are routed explicitly into Web Workers (`dagWorkerBridge.js`) to avert standard Main Thread locks standard in complex DOM ecosystems.
