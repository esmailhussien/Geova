# Module 08: Workspaces & Administration

Geova and Mapplex are designed to scale from a single independent researcher up to a multinational enterprise managing thousands of field operatives. 

To handle this scaling, the platform architecture relies on **Workspaces**. Everything—projects, map layers, custom forms, and team members—belongs to a Workspace, not an individual user. This module covers how to manage these heavy administrative tasks.

---

## 1. The Workspace Switcher (Multi-Tenant Management)

If your user account is authenticated into multiple organizations, you will need to seamlessly jump between them without logging out.

### The "Why": Real-World Value
An environmental consultancy manages separate contracts for the State of Florida and the State of Texas. Florida’s data has strict legal siloing requirements and cannot mix with Texas data. Using the **Workspace Switcher**, the manager can be inside the "Florida DB" doing quality assurance, tap the Switcher, and instantly remount the platform to the "Texas DB"—completely isolating the two environments while remaining under one login.

### The "How": Step-by-Step
1. From any view in the platform, look to the upper-left navigation or sidebar area.
2. You will see a dropdown indicating your current Active Workspace (e.g., "Miami Operations").
3. Click this button to open the **Workspace Switcher**.
4. A list of all Workspaces you have been invited to will appear.
5. Tap the target Workspace. The system will cleanly unmount your current spatial cache and reload the UI with the target environment’s projects, layers, and team rosters.

---

## 2. Managing Subscriptions & Paywalls

Mapplex offers advanced algorithmic tools (like Geova AI Chat and the Team Performance dashboard) that require significant processing power, gated behind the **Pro Subscription**. 

### The "Why": Real-World Value
A startup drone mapping company wins a massive contract. They realize their free-tier workspaces don't support the Geova AI Engine required to calculate complex polygon areas for their reporting. The Administrator opens the Paywall Manager to instantly upgrade the central workspace, unlocking the AI engine for all invited team members simultaneously.

### The "How": Step-by-Step
1. Navigate to the **Admin & Settings View** (usually designated by a gear icon or within your profile panel).
2. Locate the **Billing & Subscriptions** sector. 
3. The **Paywall Manager** interface will display your current Tier (Free vs. Pro).
4. If a feature (like Team Leaderboards) is blocked by a glassmorphism "Ghost UI" with a lock icon, tapping the unlock button will invoke the Paywall flow.
5. After completing the Stripe checkout processing, the Workspace is instantly elevated to Pro, and all restricted UI elements will natively unblur.

---

## 3. Advanced Account Settings

The Admin View serves as the ultimate command center for managing security, branding, and local storage limits.

### The "Why": Real-World Value
If a massive offline caching operation (downloading ultra-high-resolution satellite imagery for an entire state) accidentally fills up the tablet's hard drive, the field worker’s operating system will crash. Using the Settings View, the admin can clear specific cached tiles to free up storage without wiping the important vector data.

### The "How": Step-by-Step
1. Open the **Admin & Settings View**.
2. **Profile Settings:** Update your operational display name, change your email, or reset your cryptographic password matrix.
3. **Storage Manager:** View exactly how many Megabytes (MB) your local map tiles and IndexedDB vectors are consuming on your physical device. 
    *   *Emergency Clear:* Tap **Clear Local Cache** to completely reset the Progressive Web App's memory if syncing errors occur. 
4. **API Limits:** Monitor the total number of Spatial AI requests and routing queries your Workspace has executed for the month to prevent hitting hard API quotas during a critical mission.
