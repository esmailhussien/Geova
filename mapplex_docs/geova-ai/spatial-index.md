---
title: Spatial Indexing & DAG Execution
description: High-performance R-Tree indexing and the Directed Acyclic Graph Template Engine parsing complex operations.
order: 3
---

# Spatial Index & Temporary DAG Pipelines

Geova AI must execute exceedingly complex multi-step spatial mathematics. If a user asks *"Group Urban Planning Zones by overlapping Carbon Credits and find intersection points,"* it requires multiple sequential filters that cannot be processed natively in one shot.

To prevent main thread UI locks, Geova implements the robust **Directed Acyclic Graph Template Engine** (`dagTemplateEngine.js`) to break natural language down into pure topological execution steps grouped via the `spatialIndex.js` R-Tree.

## The Directed Acyclic Graph Template Engine (`dagTemplateEngine.js`)

Natural GIS logic must be completely decoupled from prompt ambiguity. The `dagTemplateEngine` ("Temp DAG") is a rigid compiler that parses abstract spatial intent into executable steps (Nodes) that guarantee mathematical closure.

Every "Temp DAG" maintains explicit input/output definitions. It ensures that the result of `Step 1 (Buffer)` logically types into `Step 2 (Intersect)`.

**Execution Sequence:**
1. **Compilation:** A query like *"Intersect Coastal Erosion Buffers with Real Estate Zoning"* triggers the `dagTemplateEngine`.
2. **Translation:** The engine grabs the `SPATIAL_INTERSECT` structural template. It spins up a DAG ensuring the geometry payload from the specific Coastal polygons maps exactly structurally into the `input_var_1` of the next function.
3. **Pipelining:** It routes these Nodes off the core UI thread into pure Web Workers (`dagWorkerBridge.js`), ensuring zero browser disruption even at 10,000+ points.

## The R-Tree Indexing Core (`spatialIndex.js`)

Even with perfect DAG isolation, pure spatial topology is mathematically $O(N \times M)$ which crashes RAM on complex boundaries.

To accelerate the "Temp DAG" execution, `spatialIndex.js` wraps `@turf/geojson-rbush`. Before large DAG nodes (e.g., `SPATIAL_JOIN`) execute:

1. **Bulk Loading**: The DAG pipeline bulk loads Axis-Aligned Bounding Boxes (AABBs) for the designated zones (e.g. `Carbon Capture Facilities`). This guarantees $O(N \log N)$ initialization indexing time.
2. **Filtering Superset Phase**: `queryCandidates` evaluates intercept checks, running logarithmically in $O(\log B + k)$.
3. **Execution Edge-matching**: Only the severely narrowed subset matching the bounding boxes actually encounters the computationally heavy Turf geometry checks requested by the `dagTemplateEngine`.

Because the API remains completely `LocalStorage` and `DOM` agnostic, these Temporary DAG engines execute blazingly fast in perfectly isolated environments.
