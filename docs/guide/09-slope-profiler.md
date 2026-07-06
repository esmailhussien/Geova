# Module 09: Slope Profiler

> The Slope Profiler uses your device sensors as a digital clinometer for quick field slope checks. Use it for screening, notes, and site review. For construction staking, legal surveys, or safety-critical measurements, verify results with approved survey equipment.

---

## 1. What Is the Slope Profiler?

The Slope Profiler uses your device's built-in **accelerometer and gyroscope** through the DeviceOrientation API to estimate slope angle at your current position. It is intended for field teams who need a quick indication of terrain gradient for site notes, drainage checks, route review, or accessibility screening.

---

## 2. Activating the Profiler

1. Navigate to the **Map View**.
2. The Slope Profiler toggle appears in the map toolbar as an orange slope icon.
3. Tap the toggle to activate. The profiler enters **Ready** state.

> **Sensor Permissions:** Your device will request motion sensor access on first use. Grant permission to enable slope readings.

---

## 3. The HUD (Heads-Up Display)

When active, a floating **HUD gauge** appears at the top-center of the map.

### Gauge Components

| Element | Description |
|---------|-------------|
| **Arc Gauge** | A semicircular gauge with a color-coded gradient (green → yellow → orange → red) representing slope severity |
| **Needle** | Points to the current slope angle and updates as the device moves |
| **Angle Readout** | Large numeric display: `12.5°` — color-coded by severity |
| **Grade Percentage** | Shows slope as a percentage: `22.2% grade` |
| **Status** | Current state: `READY`, `RECORDING`, `CALIBRATING` |

### Color-Coded Ranges

| Angle Range | Color | Meaning |
|-------------|-------|---------|
| 0° – 5° | 🟢 Green | Flat / gentle slope |
| 5° – 15° | 🟡 Yellow | Moderate slope |
| 15° – 30° | 🟠 Orange | Steep slope |
| 30°+ | 🔴 Red | Very steep; use caution and verify conditions |

---

## 4. Drawing a Cross-Section

### Creating Section Stations

1. Walk to your **starting point** on the terrain.
2. Tap **Draw Section** in the action bar.
3. Hold your phone level and tap to record a station (slope reading at this point).
4. Walk to the next point along the cross-section. Tap again to record.
5. Repeat for as many stations as needed.

### Station Data

Each recorded station captures:
- **Slope angle** (degrees)
- **Grade percentage**
- **Relative position** along the section

### Finishing a Section

Tap **Finish** (green button) to complete the section. The profile is finalized and the chart updates.

---

## 5. Calibration

Before recording a section, calibrate the sensor when possible:

1. A **calibration overlay** appears with a full-screen dark background.
2. Place your phone on a **known flat surface**.
3. A **calibration dot** shows live sensor readings:
   - The dot moves as your phone tilts
   - When centered (flat), it turns **green** and pulses
4. Tap **"Set Zero"** to calibrate the zero-point.
5. Alternatively, tap **"Skip"** to proceed without calibration.
6. Tap **"Redo Section"** to restart the section drawing.

### Live Calibration Readout

During calibration, live sensor values are displayed:
```
β 0.3° · γ 0.1°
```
These represent the device's beta (front-back tilt) and gamma (left-right tilt).

---

## 6. The Profile Sheet

After recording stations, a **bottom sheet** slides up from the bottom of the screen, showing:

### Sheet Components

| Component | Description |
|-----------|-------------|
| **Header** | "Cross-Section Profile" with station count |
| **Chart** | A canvas-rendered elevation profile graph showing the slope across all stations |
| **Station List** | A scrollable list of recorded stations, each showing its index number (color-coded), station info, and slope value |
| **Action Bar** | Context-sensitive buttons that dock into the sheet when it's open |

### Station List Details

Each row in the station list displays:
- A numbered badge with severity-colored background
- Station information (relative distance or label)
- Slope angle value in bold

For sections with many stations (6+), the list switches to a **compact layout** with smaller text and tighter spacing.

---

## 7. Action Bar

The floating action bar provides context-sensitive controls:

| Button | Style | Action |
|--------|-------|--------|
| **Draw Section** | Orange (primary) | Begin recording a new cross-section |
| **Clear** | Red (danger) | Delete all recorded stations and reset |
| **Finish** | Green | Complete the current section |
| **Close** | Gray circle | Close the action bar and deactivate the profiler |

When the bottom sheet is open, the action bar **docks inside the sheet** instead of floating on the map.

---

## 8. Practical Scenarios

> **Road Review:** A field engineer records several stations across a proposed access route. The profile helps identify sections that may need a closer survey before design decisions are made.

> **Drainage Check:** A site inspector records slope readings along a drainage channel to flag areas that may require additional grading review.

---

> **Next:** Proceed to [Module 10: Map PDF Export](./10-map-pdf-export.md) to export map documents.
