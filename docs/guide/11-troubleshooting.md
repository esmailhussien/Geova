# Module 11: Troubleshooting & FAQ

> Solutions for common issues encountered in the field and answers to frequently asked questions.

---

## 1. Installation & Authentication

### "The app won't install as a PWA"

- **iOS:** Open in Safari (not Chrome). Tap the Share button → "Add to Home Screen".
- **Android:** Open in Chrome. Tap the 3-dot menu → "Install app" or "Add to Home Screen".
- **Desktop:** Look for the install icon in the browser address bar.
- PWA installation requires HTTPS. Ensure you're accessing the app via `https://`.

### "I can't sign in"

- Verify your email and password.
- Check your internet connection — initial sign-in requires connectivity.
- If you registered as a **Pending** user, your account needs admin approval before you can access the workspace.
- Guest mode is available for offline-only work without an account.

### "I'm signed in but can't see any projects"

- Ensure you're in the correct **Workspace**. Use the Workspace Switcher in the sidebar.
- Check with your administrator that your account has been approved.
- Your role may restrict visibility — Viewers and Collectors see projects but may not create them.

---

## 2. Map & Drawing

### "The map is blank or tiles aren't loading"

- Check your internet connection. The basemap requires connectivity unless you've cached tiles offline.
- Try switching the basemap source (OpenStreetMap, Satellite, etc.).
- Open **Settings → Clear Offline Cache**, then re-download tiles.
- If on a slow connection, wait 10–15 seconds for tiles to load.

### "My GPS position is inaccurate"

- Move outdoors or near a window — GPS accuracy improves with clear sky visibility.
- Enable **GPS Accuracy Indicator** in Settings to monitor signal quality (green = good, red = poor).
- Wait 10–20 seconds for the GPS to stabilize before placing a feature.
- Avoid placing features while moving — stand still for best accuracy.

### "Features I drew aren't showing on the map"

- Ensure the layer is **visible**. Check the Layer Visibility panel on the map.
- Zoom in — features may be clustered at lower zoom levels. Try disabling **Feature Clustering** in Settings.
- Check that you're viewing the correct project.

### "The drawing toolbar is missing"

- Check **Settings → Hide Drawing Toolbar**. If enabled, the toolbar is hidden and you use the radial menu (long-press on the map) instead.
- Toggle the setting off to restore the floating toolbar.

### "Split/Merge tools aren't available"

- Enable **Advanced Edit** in Settings to show the spatial edit tools.
- These tools require at least 2 features (for merge) or a line intersecting a polygon (for split).

---

## 3. Forms & Data Entry

### "A field type is locked and can't be changed"

- Once a field has collected data, its type is locked to protect data integrity.
- To change the type: delete the field and recreate it with the new type.
- **Warning:** Deleting a field permanently removes its data from all existing features.

### "My Lexicon dropdown isn't showing options"

- Ensure the Lexicon has been created in the Lexicon panel.
- Verify the field is linked to the correct Lexicon (check the field edit dialog).
- Lexicon Picklists require Pro subscription.

### "Smart Logic rules aren't working"

- Ensure the **Source Field** has a value before the **Target Field** can appear.
- Check that the condition matches exactly (case-sensitive for "equals").
- Simple mode rules cost 1 AI credit to generate.
- Smart Logic requires Pro subscription.

---

## 4. Data Import & Export

### "My imported file has no features on the map"

- Verify the file contains valid geometry data (coordinates).
- For CSV/Excel imports: check that latitude/longitude columns were correctly mapped in the wizard.
- Ensure the correct **CRS** (Coordinate Reference System) was selected — WGS84 is the default.
- Very large files (50MB+) may take time to process.

### "Exported CSV doesn't have coordinates"

- Coordinates are included as separate columns (latitude, longitude) in the CSV export.
- For full geometry preservation, use **GeoJSON** or **GeoPackage** export formats.

### "GeoPackage import fails"

- Ensure the file is a valid SQLite-based GeoPackage (`.gpkg`).
- Files larger than 50MB trigger a warning — confirm to proceed.
- The system checks the file signature, so the file extension does not always need to be correct.

---

## 5. Sync & Collaboration

### "Local P2P sync isn't connecting"

- Both devices must be on the **same Wi-Fi network** (or hotspot).
- Verify the **IP address** and **port** (default: 8080) match between host and sender.
- Check that no firewall or VPN is blocking local network connections.
- Try creating a mobile hotspot from one device and connecting the other.

### "Cloud sync isn't working"

- Cloud sync requires Pro subscription and internet connectivity.
- Verify you're signed in (not in Guest mode).
- Check the project's storage mode — local-only projects don't sync to cloud.
- Look for the sync status indicator on the Dashboard.

### "I can't invite team members"

- Only **Owners** and **Admins** can invite members.
- Invitations are sent to the email address — the recipient must create an account and accept.
- Pending invitations appear in the Members tab until accepted.

---

## 6. Geova AI Chat

### "Geova AI gives unexpected answers"

- Use `@Layer` and `#Column` mentions for precision.
- Check the **Data Dictionary** (Layers → Schema) to ensure field aliases and units are configured.
- Tap **"Go Deeper"** to re-run with a structured analysis template when one is available.
- Review the **SQL Query** in the expandable section to verify what was executed.

### "AI says 'Out of Credits'"

- Each useful answer costs 1 credit. Clarifications and errors are not billed.
- Purchase more credits via **Account → Recharge** or the Upgrade prompt.

### "AI results disappeared"

- AI results are temporary and stored in session memory.
- To preserve results permanently, tap **"Add to Mapplex"** to save them as a project layer.
- Re-run the query if the results have expired.

---

## 7. Performance

### "The app is slow with many features"

- Data tables load 50 rows at a time to reduce browser load.
- Enable **Feature Clustering** in Settings to group nearby features at lower zoom levels.
- Zoom into the area you are reviewing so fewer features are visible at once.
- Turn off layers that are not needed for the current task.

### "The app crashed or froze"

- Force-close and reopen the app.
- If persistent: clear the offline cache via **Settings → Clear Offline Cache**.
- Ensure your device has sufficient free storage (at least 500MB recommended).
- On older devices, disable Map Rotation and Feature Clustering to reduce GPU load.

---

## 8. Frequently Asked Questions

### Does Mapplex work offline?

**Yes.** Mapplex is an offline-first PWA. You can collect data, fill forms, draw features, and navigate the map without internet. Cloud sync, Geova AI, and team features require connectivity.

### How many devices can I use?

Each account supports up to **2 trusted devices**. Manage devices in **Account → Device Management**.

### What file formats does Mapplex support?

| Action | Formats |
|--------|---------|
| **Import** | GeoJSON, KMZ/KML, GeoPackage, CSV, Excel (.xlsx/.xls), DXF, SHP ZIP or SHP component files |
| **Export** | GeoJSON, KMZ, GeoPackage, CSV, DXF, SHP ZIP |
| **Schema Import** | JSON, GeoJSON, CSV, KMZ/KML, GeoPackage |

### Is my data secure?

- Local project data is stored on your device in the browser's IndexedDB storage.
- Cloud data uses Supabase with Row-Level Security (RLS) — users can only access their workspace's data.
- Geova AI is routed through the Mapplex backend and charged against workspace credits.
- Limited schema details, sample field values, and location context may be sent when needed for an AI request.
- Full datasets and geometries are not sent automatically for ordinary chat planning.

### What languages are supported?

English and Arabic (with full RTL layout support). Set the language in **Settings → Language**.

### Can I use Mapplex on desktop?

Yes. Mapplex runs as a PWA in any modern browser (Chrome, Edge, Safari, Firefox). The interface is responsive and adapts to desktop/tablet layouts with a rail navigation.

---

> **Need more help?** Tap **Help** in the sidebar to access the Interactive Tour or visit the online documentation at [geova.net/docs](https://www.geova.net/docs/).
