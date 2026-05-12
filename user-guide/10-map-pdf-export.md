# Module 10: Map PDF Export

> Generate professional, print-quality map documents directly from your Mapplex project. Configure the layout, add titles and notes, toggle map elements, and download a high-resolution PDF — all from a single dialog.

---

## 1. Opening the Export Dialog

1. Navigate to the **Map View**.
2. Tap the **Print/PDF** button in the map toolbar (or access it from the navigation menu).
3. The **Export Map PDF** modal dialog opens.

---

## 2. Configuration Options

### Page Layout

Choose between two orientations:
- **Landscape** — Wide format, ideal for linear features (roads, pipelines)
- **Portrait** — Tall format, ideal for detailed site plans

Each option shows a visual preview of the page proportions.

### Map Title

Enter a descriptive title for your map document:
> *e.g., "Site Survey — Zone A"*

Maximum: 80 characters. If left empty, defaults to "Map Export".

### Subtitle (Optional)

Add a secondary title for additional context:
> *e.g., "Water Network Audit"*

Maximum: 100 characters.

### Custom Notes (Optional)

Add free-text notes that appear on the PDF:
> *e.g., "Inspected 2026-04-15. Approved by J. Smith."*

Maximum: 500 characters. Multi-line supported.

---

## 3. Map Elements

Toggle which cartographic elements appear on the PDF:

| Element | Default | Description |
|---------|---------|-------------|
| **Legend** | ✅ On | Layer names with symbology swatches, including classified rules |
| **Scale Bar** | ✅ On | Distance reference bar calibrated to the current map zoom |
| **North Arrow** | ✅ On | Compass arrow indicating geographic north |

Each toggle has an icon and clear label for easy configuration.

---

## 4. Legend Generation

When the Legend toggle is enabled, the PDF includes a detailed legend built from your project's visible layers:

### Simple Layers

Each visible layer appears as a single legend entry with:
- Layer name
- Geometry icon (point/line/polygon)
- Color swatch from the layer's style
- Feature count

### Classified Layers

For layers with **categorical or graduated symbology**, the legend expands to show individual classification rules:

**Example (Categorical):**
```
Water Pipes (347 features)
  ├── PVC        — Blue    (120)
  ├── Steel      — Gray    (95)
  ├── HDPE       — Green   (82)
  └── Cast Iron  — Brown   (50)
```

**Example (Graduated):**
```
Flow Rate (GPM) (200 features)
  ├── 0 – 20     — Light Blue   (45)
  ├── 20 – 50    — Medium Blue  (89)
  ├── 50 – 100   — Dark Blue    (52)
  └── 100+       — Navy         (14)
```

---

## 5. PDF Generation Pipeline

When you tap **Generate PDF**, the system executes a 4-step pipeline:

1. **Map Capture** — The current map view is rendered at high resolution (print quality) using the `PrintCaptureService`. A full-screen loading overlay displays: *"Generating high-resolution map..."*
2. **Legend Build** — Legend items are computed from visible layers, including symbology rule expansion and per-rule feature counts
3. **Project Metadata** — The project name is resolved for the PDF header
4. **PDF Generation** — The `MapPdfExporter` assembles all components into a formatted PDF document

The pipeline is **cancellable** — tap the cancel button on the loading overlay to abort at any point.

### What the PDF Contains

| Section | Content |
|---------|---------|
| **Header** | Project name and Mapplex branding |
| **Title Block** | Your map title and subtitle |
| **Map Image** | High-resolution capture of the current map view |
| **Legend** | Color-coded layer list with feature counts |
| **Scale Bar** | Distance reference calibrated to the map |
| **North Arrow** | Compass indicator |
| **Notes** | Your custom notes text |
| **Footer** | Generation date and Mapplex attribution |

---

## 6. Tips for Best Results

- **Zoom to the area of interest** before opening the export dialog. The PDF captures exactly what you see on the map.
- **Turn off unnecessary layers** using the Layer Visibility panel to keep the PDF clean.
- **Use a descriptive title** — it appears prominently on the PDF and serves as the document identifier.
- **Landscape orientation** works best for maps showing linear features or wide areas.
- **Portrait orientation** is ideal when you need a taller view or want the legend to sit beside a narrow map.

---

> **Next:** Proceed to [Module 11: Troubleshooting & FAQ](./11-troubleshooting.md) for common issues, or [Module 12: CAD Manager](./12-cad-manager.md) for DXF import/export.
