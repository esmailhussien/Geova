---
title: Geova AI Capabilities
description: Exhaustive documentation regarding Geova AI's Spatial Dag Compute Engine, R-Tree logic, and Self-Healing Error Recovery.
order: 1
---

# Geova AI (`dagComputeEngine.js`)

Geova AI is the core spatial agent responsible for interpreting natural language into complex chained GIS instructions (DAG Nodes) and executing them locally on the device via `Turf.js`.

To keep memory and CPU usage optimal, Geova abstracts mathematical operations through a background worker via `dagWorkerBridge.js` so the main UI thread never blocks during 10,000+ polygon intersections.

## The R-Tree Spatial Index

Spatial operations like `SPATIAL_JOIN` or `SPATIAL_GROUP_BY` are inherently **O(N × M)** (e.g. 5,000 target points against 500 boundary polygons = 2,500,000 intersection checks), which crashes most mobile browsers.

Geova implements an `RBush` (R-Tree) Spatial Index dynamically before large topology evaluations.

1. **Build Phase**: It takes the unifying boundaries and bulk-loads their Axis-Aligned Bounding Boxes (AABBs) into the RBush index. This operation is **O(B * log(B))**.
2. **Lookup Phase**: For every point, instead of iterating every polygon, Geova queries the index using the point's bounding box. This is **O(log B + k)**, where `k` is the number of actual overlapping bounds. 
3. **Evaluation Phase**: Only the few overlapping bounding boxes (if any) are passed to `Turf.js` for expensive mathematical topology intersection testing (`booleanPointInPolygon`, `booleanIntersects`, etc).

## Self-Healing Error Recovery

If a user asks "Show me all points within 0km of the road," a strict engine would return 0 results and provide a bad UX. Geova implements **Semantic Triggers** that catch empty outputs and attempt to "self-heal" the spatial pipeline.

For instance, if `FIND_NEAREST_EMPTY_TARGET` fires because a user asked for "nearest shelter" but set an impossibly tight spatial join area, Geova automatically drops the boundary filter and retries the calculation globally.

### `_selfHealed` Metadata Format

When Geova successfully heals a broken trace, it injects a hidden `_selfHealed` object directly into the `properties` of the first returned GeoJSON feature. The UI (e.g., `AiChatView` or map toasts) sniffs for this object and renders a "Self-Healing Toast" explaining to the user what the AI altered.

```json
{
  "type": "Feature",
  "geometry": { ... },
  "properties": {
    "Name": "Safe Shelter Alpha",
    "_selfHealed": {
      "strategy": "EXPANDED_BUFFER",
      "originalParameters": {
        "radius": 50,
        "units": "meters"
      },
      "healedParameters": {
        "radius": 500,
        "units": "meters"
      },
      "systemMessage": "No features found at 50 meters. Automatically expanded search radius to 500 meters to yield results based on data sparsity."
    }
  }
}
```

The UI intercepts this object, removes it from the final user-facing attributes table, and fires a non-blocking UI alert to keep the user informed of the AI's autonomous changes.
