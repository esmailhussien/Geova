---
title: Geova AI Prompt Guide
description: Master the 40+ spatial capabilities of Geova AI utilizing optimized natural language prompting.
---

---
title: AI Prompt Guide
description: Master the 40+ spatial capabilities of Geova AI utilizing optimized natural language prompting.
---

# AI Prompt Guide

## Overview
Geova AI seamlessly bridges natural language and advanced Geographic Information Systems. By chatting with the AI, you can execute over 40 distinct, mathematically rigorous spatial operations. To get the best results, it is critical to structure your prompts clearly. Below is a comprehensive guide to prompting the Geova AI system effectively.

## Action Steps

### 1. Finding Proximity & Distances
Determine exact distances and radius zones between critical points.
- **Find Nearest Features:** *"Find the nearest Emergency Shelters to my GPS location."*
- **Geometric Buffer Zone:** *"Draw a 5km safety buffer around all active Volcanic Vents."*
- **Concentric Rings:** *"Draw 1km, 5km, and 10km concentric blast-radius rings outward from the industrial reactor."*

### 2. Grouping & Ranking
Calculate statistical anomalies and order raw datasets programmatically.
- **Spatial Aggregation:** *"Group the total Carbon Emission incidents by Urban Planning Zone."*
- **Rank by Measurement:** *"Rank the Global Seismic Activity points from highest to lowest magnitude."*

### 3. Spatial Joins & Linking
Enrich datasets by merging variables based on geometric intersections rather than database keys.
- **Attribute Spatial Join:** *"Tag every building footprint with its underlying Geological Fault Line rating."*
- **Buffer + Spatial Join:** *"Highlight all Residential Zones falling within 3km of the Coastal Erosion line."*

### 4. Networking & Drive-Times
Leverage actual road topographies (via OpenStreetMap) to calculate temporal transit costs.
- **Isochrone Network:** *"Map the 15-minute driving service area around the new Metropolitan Fire Station."*
- **Service Area + Join:** *"Find all elementary schools located entirely within a 10-minute drive of the active Chemical Plume."*

### 5. Advanced Site Selection
Calculate perfect theoretical locations based on constraints or algorithmic balancing.
- **Multi-Criteria Overlay:** *"Identify optimal construction sites that are > 5km from wetlands, < 1km from highways, and on slope gradients < 15%."*
- **Voronoi Catchment:** *"Generate Voronoi catchment polygons to determine the theoretical service boundaries for all Regional Hospitals."*

## Pro-Tips
> 💡 **Tip:** Avoid ambiguous phrasing like *"Show me the bad areas."* Instead, use explicit dataset values: *"Show me the Coastal Zones where Erosion Severity is High."*

> 💡 **Tip:** You can stack operations in a single sentence! Example: *"Filter the Highway Network for high-risk segments, then draw a 2km buffer around them."*

---

## Technical Architecture (For Developers)

The `prompt-guide` maps specific human queries to programmatic `tpl_*` (Template) execution codes inside the engine.

- **DAG Engine Routing:** Natural language routing triggers over 40 distinct templates. For example, *"Draw a buffer"* maps directly to the `tpl_buffer` Directed Acyclic Graph. 
- **Parameter Extraction Logic:** When a user types *"15-minute driving service area"*, the NLP pipeline intercepts the digit `15` and the string `minute`, extracting them logically as `{"time": 15, "units": "minutes"}` to pipe into the exact execution inputs of the `tpl_service_area` function.
