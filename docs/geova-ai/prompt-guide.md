---
title: Geova AI Prompt Guide
description: Practical examples for using Geova AI with spatial data.
---

---
title: AI Prompt Guide
description: Practical examples for using Geova AI with spatial data.
---

# AI Prompt Guide

## Overview
Geova AI connects natural-language requests to supported spatial operations. Clear prompts help the assistant identify the layer, field, value, distance, and output you want to review.

## Action Steps

### 1. Finding Proximity & Distances
Determine exact distances and radius zones between critical points.
- **Find Nearest Features:** *"Find the nearest water valve to my current location."*
- **Geometric Buffer Zone:** *"Draw a 500-meter review zone around the roadwork points."*
- **Distance Rings:** *"Draw 1 km and 5 km service rings around the maintenance depot."*

### 2. Grouping & Ranking
Calculate statistical anomalies and order raw datasets programmatically.
- **Spatial Aggregation:** *"Group inspection points by district and count the records in each district."*
- **Rank by Measurement:** *"Rank road segments by condition score from lowest to highest."*

### 3. Spatial Joins & Linking
Enrich datasets by merging variables based on geometric intersections rather than database keys.
- **Attribute Spatial Join:** *"Add the zoning class to each building footprint based on the zone it falls within."*
- **Buffer + Spatial Join:** *"Find residential parcels within 300 meters of an active roadwork segment."*

### 4. Networking & Drive-Times
Use road-network data, where available, to estimate travel areas and access.
- **Isochrone Network:** *"Map the 15-minute driving service area around the fire station."*
- **Service Area + Join:** *"Find schools within a 10-minute drive of the community clinic."*

### 5. Advanced Site Selection
Compare candidate locations using clear spatial constraints.
- **Multi-Criteria Overlay:** *"Identify candidate parcels within 5 km of a clinic, outside the flood-zone layer, and less than 15% slope."*
- **Voronoi Catchment:** *"Generate catchment polygons to compare the areas served by each clinic."*

## Pro-Tips
> 💡 **Tip:** Avoid ambiguous phrasing like *"Show me the bad areas."* Instead, use explicit dataset values: *"Show me the Coastal Zones where Erosion Severity is High."*

> **Tip:** You can combine operations in one request. Example: *"Filter the road layer for segments with a high risk score, then draw a 200-meter buffer around them."*

---

## Technical Architecture (For Developers)

The `prompt-guide` maps specific human queries to programmatic `tpl_*` (Template) execution codes inside the engine.

- **DAG Engine Routing:** Natural-language routing maps supported requests to operation templates. For example, *"Draw a buffer"* maps to the `tpl_buffer` workflow.
- **Parameter Extraction Logic:** When a user types *"15-minute driving service area"*, the NLP pipeline intercepts the digit `15` and the string `minute`, extracting them logically as `{"time": 15, "units": "minutes"}` to pipe into the exact execution inputs of the `tpl_service_area` function.
