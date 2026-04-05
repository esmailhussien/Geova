---
title: Geova AI Capabilities & Orchestration
description: Exhaustive documentation regarding Geova AI's orchestration logic, Tool Generation, and Self-Healing Error Recovery networks.
order: 1
---

# Geova AI Interfaces & Capabilities

Geova AI operates as a robust, autonomous spatial agent. It acts as the primary orchestrator that translates ambiguous natural language inputs into explicit, validated GIS instructions.

To ensure consistency and prevent computational deadlock when operating on vast datasets—such as **Global Carbon Sequestration Regions** or **Coastal Erosion Rates**—Geova separates intention parsing from mathematical execution.

## Dynamic Precision Tools (`toolDefinitionGenerator.js`)

LLMs historically hallucinate metadata keys when querying databases (e.g. searching for `CO2_Level` instead of `Carbon_Parts_Per_Million`). Geova circumvents this via the `toolDefinitionGenerator.js` module.

Every time a user prompts Geova AI, the `toolDefinitionGenerator` silently scans the `DataView` layers. It rips the exact, strict database schema mapping and **dynamically generates specialized JSON-RPC tools** tailored directly to the layer's actual configuration. 

**Example Workflow:**
1. A field agent analyzing **Coastal Erosion Risk** asks: *"Visualize areas losing more than 5 meters of coastline per year."*
2. Before answering, the `toolDefinitionGenerator` evaluates the active `erosion_layer` schema.
3. It writes a precise, transient tool containing the explicit schema enumerations (e.g., `ANNUAL_LOSS_M` of type `FLOAT`).
4. The AI receives this hyper-restricted execution path, effectively enforcing 100% schema accuracy on every single operation.

## Self-Healing Error Recovery (`agenticFallback.js`)

If a user asks "Show me all **Carbon Mitigation Shelters** within 2 kilometers of the hurricane path," but the strictest execution yields absolutely 0 results, a traditional engine returns an empty map—an unacceptable UX.

Geova implements a robust safety-net architecture via `agenticFallback.js`. It utilizes **Semantic Triggers** that catch empty outputs or SQL-syntax crashes mid-flight, immediately triggering a "Self-Healing Error Recovery" cycle to intelligently save the user's intent.

For instance, `FIND_NEAREST_EMPTY_TARGET` fires within `agenticFallback.js`. Geova automatically drops the strict 2km boundary filter, expands its search buffer massively, and retries the calculation globally to yield alternative data.

### `_selfHealed` Metadata Interface

When `agenticFallback` successfully heals a broken execution branch, it injects a hidden `_selfHealed` payload directly into the `properties` of the first returned GeoJSON feature. The UI catches this payload and suppresses it from the physical data table, presenting a non-blocking toast warning instead.

```json
{
  "type": "Feature",
  "geometry": { ... },
  "properties": {
    "Name": "Safe Shelter Alpha",
    "_selfHealed": {
      "strategy": "EXPANDED_BUFFER",
      "originalParameters": {
        "radius": 2000,
        "units": "meters"
      },
      "healedParameters": {
        "radius": 50000,
        "units": "meters"
      },
      "systemMessage": "No features found at 2 km. Automatically expanded search radius to 50 km to yield results based on Carbon data sparsity."
    }
  }
}
```

The system alerts the worker that they are viewing an autonomously expanded scope without interrupting their core workflow mapping task.
