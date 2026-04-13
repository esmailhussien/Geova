# Module 00: Getting Started & Onboarding

Welcome to Mapplex. Before you can begin drawing geometries or querying the Geova AI, you must set up your local environment and establish your cryptographic workspace.

Because Mapplex is built for extreme, offline field conditions, it is deployed as a **Progressive Web App (PWA)** rather than a traditional App Store download. This architecture allows it to bypass cellular network requirements completely once installed.

---

## 1. Installing Mapplex (PWA)

You do not need an internet connection to use Mapplex in the field, but you do need an internet connection *once* to install it to your device's home screen.

### The "Why": Real-World Value
App Stores restrict deep local cache access and can force unwanted updates that break apps right before a major field deployment. By installing Mapplex as a PWA, you lock the application payload directly into your hardware. This guarantees that your offline map tiles and local spatial databases will launch flawlessly in a dead-zone forest, independent of Apple or Google servers.

### The "How": Step-by-Step (iOS / Safari)
1. Navigate to the Mapplex web URL in your Safari browser.
2. Tap the **Share** menu (the square icon with an upward-pointing arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Confirm the name "Mapplex" and tap **Add**. 
5. Close Safari. Tap the new Mapplex icon on your home screen to launch the app in full-screen, native offline mode.

### The "How": Step-by-Step (Android / Chrome)
1. Navigate to the Mapplex web URL in Chrome.
2. A banner usually appears at the bottom saying **"Add Mapplex to Home screen"**. Tap it.
3. If the banner does not appear, tap the three-dot menu in the upper right.
4. Select **Install App** or **Add to Home Screen**.
5. Once installed, launch it directly from your device's app drawer.

---

## 2. Authentication & Secure Enrollment

Mapplex uses robust cryptographic authentication to ensure that your proprietary spatial data—especially enterprise infrastructure—cannot be accessed if a field tablet is lost or stolen.

### The "Why": Real-World Value
If a tablet containing the exact GPS locations of a city's secure underground water valves is dropped at a job site, anonymous access must be prevented. The Auth View ensures that local databases cannot be decrypted without strict session validation against the organization's enterprise tenant.

### The "How": Step-by-Step
1. Launch Mapplex. You will be greeted by the **Auth View** landing screen.
2. Choose your method of entry:
    *   **Email Form:** Enter your corporate email and a secure password.
    *   **Single-Sign-On (SSO):** (If enabled by your organization) Tap Google, Microsoft, or Apple for unified enterprise login.
3. **Magic Link:** For fast field deployment where typing passwords on a muddy screen is difficult, enter your email and select **Send Magic Link**. Tap the link in your email to securely bypass password entry.

---

## 3. Creating Your First Workspace

In Mapplex, user accounts do not hold data—**Workspaces** do. A Workspace acts as a secure multi-tenant container housing billing logic, team members, and all underlying geographic projects.

### The "Why": Real-World Value
A freelance GIS consultant might work for "Miami City Planning" on Monday, and "Global Telecom Solutions" on Tuesday. Rather than having two separate logins, the consultant has one user account that bounces between two isolated Workspaces, ensuring Miami's data never accidentally bleeds into the Telecom database.

### The "How": Step-by-Step
1. After your initial login, if you are not yet assigned to an enterprise, the system will prompt you to create a **Personal Workspace**.
2. Give your Workspace a name (e.g., "Field Operations Base").
3. You will immediately be routed to the **Dashboard View** (Module 01), where you can create your very first geographic Map Project inside this new environment.

> **Next Steps:** Proceed to [Module 01: The Project Dashboard](./01-dashboard-view.md) to learn how to spin up spatial projects.
