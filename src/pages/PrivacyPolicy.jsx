import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <SEO
        title="Mapplex Privacy Policy"
        description="How Geova Technologies processes Mapplex account, spatial, location, AI, billing, diagnostic, conversion, and local field-transfer data."
        url="/privacy"
        keywords="Mapplex privacy policy, Geova privacy, GIS data security, location data, Geova AI privacy, account deletion"
      />
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-20 px-6">
        <article className="max-w-4xl mx-auto glass-panel p-7 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <header className="relative z-10 border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-3">Mapplex · Geova Technologies</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">Privacy Policy</h1>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: August 12, 2026</p>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Mapplex is an offline-first spatial and field-data application provided by Geova Technologies
              (“Geova,” “we,” “us,” or “our”). This policy explains what Mapplex processes, why it is used,
              where it may be sent, and the choices available to you.
            </p>
          </header>

          <div className="relative z-10 space-y-10 text-slate-600 dark:text-slate-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">1. Scope and organizational workspaces</h2>
              <p>
                This policy applies to Mapplex and connected Geova services. Organizations using Mapplex may
                control information in their workspaces and may be responsible for providing additional notices
                to employees, contractors, customers, or field participants.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">2. Information Mapplex processes</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/40 dark:bg-slate-900/30">
                  <h3 className="font-bold text-accent dark:text-white mb-2">Account and workspace</h3>
                  <p className="text-sm">Name, email address, account identifier, workspace membership and role, organization or workspace name, subscription tier, and registered-device identifier and name.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/40 dark:bg-slate-900/30">
                  <h3 className="font-bold text-accent dark:text-white mb-2">Field and spatial content</h3>
                  <p className="text-sm">Projects, layers, geometries, coordinates, forms, responses, domains, lexicons, labels, notes, files, photos, and related metadata that you or your organization create or import.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/40 dark:bg-slate-900/30">
                  <h3 className="font-bold text-accent dark:text-white mb-2">Foreground location</h3>
                  <p className="text-sm">Approximate or precise location when you grant permission and use a location-dependent map or capture feature. The current Android release does not request background-location permission.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/40 dark:bg-slate-900/30">
                  <h3 className="font-bold text-accent dark:text-white mb-2">Diagnostics and subscriptions</h3>
                  <p className="text-sm">Crash and performance information when diagnostics are enabled, plus product, entitlement, and subscription status received from Google Play and RevenueCat. Geova does not receive your complete payment-card number.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">3. Local-first storage and hosted synchronization</h2>
              <p>
                Guest projects and offline working copies can remain on the device. When you use hosted sync,
                team workspaces, backup, or another connected feature, the relevant content is transmitted to
                the configured Geova service. Offline data is protected by the Android application sandbox and
                available device-level protections; the current Android database is not separately encrypted by
                Mapplex at the database level.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">4. Geova AI</h2>
              <p>
                When you use Geova AI, Mapplex may send your question and the minimum project context needed to
                interpret it, such as relevant layer names, schemas, selected records, spatial scope,
                lexicon or domain values, and derived statistics. Requests are routed through Geova&apos;s backend
                and may be processed by the configured AI provider, currently OpenAI or Google Gemini.
              </p>
              <p>
                Full datasets and geometries are not automatically sent for ordinary chat planning. The context
                required depends on the request you choose to run. Do not submit sensitive, regulated, or personal
                content unless your organization has authorized that use, and review AI results before acting on them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">5. FileGDB conversion</h2>
              <p>
                When you choose FileGDB import or export, the selected archive or generated GeoPackage is sent to
                Geova&apos;s hosted GDAL conversion worker. The worker processes the file to produce the requested
                conversion. FileGDB conversion is not performed entirely inside the browser or Android WebView.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">6. Local field transfer</h2>
              <p>
                When you explicitly host or join a local field-transfer session, selected project data is
                transferred directly between nearby Mapplex devices over a local Wi-Fi or hotspot network. The
                protocol uses session authorization and validation, but the current local-network transport is not
                TLS-encrypted. Use this feature only on a trusted, password-protected network and end the session
                when the transfer is complete.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">7. How information is used</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide mapping, forms, editing, imports, exports, local transfer, synchronization, collaboration, and recovery.</li>
                <li>Authenticate users, enforce workspace roles, register devices, and protect accounts.</li>
                <li>Answer user-requested AI questions and produce spatial or tabular analysis.</li>
                <li>Administer subscriptions, entitlements, quotas, and billing support.</li>
                <li>Diagnose failures, maintain reliability, prevent abuse, and meet legal obligations.</li>
              </ul>
              <p className="font-semibold text-accent dark:text-white">Geova does not sell personal information, and Mapplex does not display third-party advertising.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">8. Service providers and disclosures</h2>
              <p>
                Providers supporting Mapplex may include Supabase for authentication, database, storage, and Edge
                Functions; Sentry for diagnostics; RevenueCat and Google Play for subscriptions; OpenAI or Google
                Gemini for requested AI processing; and Render infrastructure for FileGDB conversion. These
                providers process information under their applicable terms and Geova&apos;s agreements with them.
              </p>
              <p>
                We may also disclose information when required by law, to protect users or the service, during a
                corporate transaction, or at the direction of the workspace owner. Workspace administrators may
                access and manage information in their organization&apos;s workspace.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">9. Retention and account deletion</h2>
              <p>
                Local content remains on a device until it is deleted, app data is cleared, the app is uninstalled,
                or a configured synchronization action changes it. Hosted account and workspace content is retained
                while needed to provide the service and is deleted or de-identified following verified instructions,
                legal obligations, and the applicable backup lifecycle.
              </p>
              <p>
                You can request deletion at <a className="font-bold text-primary hover:underline" href="/account-deletion">geova.net/account-deletion</a>.
                Deleting a Mapplex account does not automatically cancel a Google Play subscription. An organization
                may retain business records it controls, and Geova may retain limited billing, fraud-prevention,
                security, or legal records only as long as required for those purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">10. Security</h2>
              <p>
                Geova uses access controls, workspace authorization, database policies, encrypted transport for
                internet-hosted services, validation, and operational safeguards appropriate to the service.
                Local field transfer is the exception described above. No storage or transmission method is completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">11. Your choices and rights</h2>
              <p>
                You can decline location permission, use supported features offline, decide when to synchronize or
                run FileGDB conversion, and choose what to submit to Geova AI. Depending on your location, you may
                have rights to access, correct, export, restrict, object to, or delete personal information. Contact
                us to exercise those rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">12. Children and international processing</h2>
              <p>
                Mapplex is a professional field application and is not directed to children under 13 or the minimum
                digital-consent age in their jurisdiction. Information may be processed in countries where Geova or
                its providers operate, using appropriate safeguards where required.
              </p>
            </section>

            <section className="rounded-2xl bg-primary/10 border border-primary/20 p-6 space-y-3">
              <h2 className="text-2xl font-bold text-accent dark:text-white">13. Changes and contact</h2>
              <p>We may update this policy when Mapplex or applicable law changes. The updated date will appear at the top of this page.</p>
              <p>
                Privacy questions and requests: <a className="font-bold text-primary hover:underline" href="mailto:support@geova.net">support@geova.net</a>
              </p>
              <p className="font-bold text-accent dark:text-white">Geova Technologies</p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
