# Module 00: Getting Started & Onboarding

Welcome to Mapplex. Before you can begin drawing geometries or querying the Geova AI, you must set up your local environment and establish your cryptographic workspace.

Because Mapplex is built for extreme, offline field conditions, it is deployed as a standalone native application to lock the application payload directly into your hardware.

---

## 1. Installing Mapplex

You do not need an internet connection to use Mapplex in the field, but you do need an internet connection *once* to download and install the application to your mobile device.

### Current Availability
Currently, Mapplex is distributed as an **Android APK**, providing deep hardware access to ensure offline map tiles and local spatial databases launch flawlessly in absolute dead-zones. *(Note: Support for iOS and Web delivery is actively on our roadmap and will be available soon.)*

### The "How": Step-by-Step (Android APK)
1. Obtain the official Mapplex `APK` file from your organization's deployment portal or via an authorized download link.
2. If prompted, allow your Android device to "Install unknown apps" from your browser or file manager.
3. Tap the downloaded `APK` file to begin the installation.
4. Once installed, launch Mapplex directly from your device's app drawer. You are now ready to sync and deploy offline.

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
