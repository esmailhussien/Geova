---
title: Spatial Indexing Core
description: High-performance R-Tree indexing wrapping `@turf/geojson-rbush`.
order: 3
---

# Spatial Index (`spatialIndex.js`)

The `spatialIndex` module is a lightweight wrapper around `@turf/geojson-rbush` designed to accelerate the **Geova AI Spatial DAG Engine**.

Without a spatial index, complex spatial grouping operations (`SPATIAL_JOIN`, `SPATIAL_GROUP_BY`) would require a brute-force $O(N \times M)$ iteration over thousands of polygons, instantly freezing the browser's main thread. By utilizing an R-Tree index, Mapplex reduces this lookup cost logarithmically.

![Spatial Indexing Placeholder](https://via.placeholder.com/800x400.png?text=Spatial+Indexing+Placeholder)

## Core Indexing Logic

Mapplex employs a **Bulk Loading** technique when initializing the tree, running in $O(N \log N)$ time, which is significantly faster than sequential independent insertions.

### API Guarantees

The `queryCandidates` method evaluates the bounding box interception between features. 
**Critically:** `queryCandidates` guarantees returning a *superset* of matches. It prevents mathematical edge-case misses but relies on the parent engine to run the expensive exact-topology test (e.g., `booleanPointInPolygon`) on the returned subset.

### Web Worker Constraints

This module is intentionally pure JavaScript, containing zero DOM, UI, `localStorage`, or `Supabase` dependencies. This architectural purity allows the DAG engine to seamlessly offload the spatial index and querying loads into isolated Web Workers in the future without modification.
