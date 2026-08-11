import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';

const deletionEmail = 'mailto:support@geova.net?subject=Mapplex%20account%20deletion%20request&body=Account%20email%3A%0AWorkspace%20or%20organization%20(optional)%3A%0A%0APlease%20delete%20my%20Mapplex%20account%20and%20associated%20personal%20data.';

const AccountDeletionPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <SEO
        title="Delete Your Mapplex Account"
        description="Request deletion of your Mapplex account and associated personal data from Geova Technologies."
        url="/account-deletion"
        keywords="delete Mapplex account, Mapplex data deletion, Geova account deletion request"
      />
      <Header />

      <main id="main-content" className="flex-grow pt-28 md:pt-36 pb-20 px-6">
        <article className="max-w-4xl mx-auto glass-panel p-7 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <header className="relative z-10 max-w-3xl">
            <p className="text-sm text-primary uppercase tracking-widest font-bold mb-3">Mapplex account controls</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">Delete your account and data</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              You can request deletion of your Mapplex account and associated personal data without signing in to this website.
            </p>
          </header>

          <section className="relative z-10 mt-10 rounded-3xl bg-primary/10 border border-primary/20 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-accent dark:text-white">Send a verified deletion request</h2>
                <p className="text-slate-600 dark:text-slate-300">Email us from the address connected to your Mapplex account.</p>
              </div>
              <a
                href={deletionEmail}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent dark:bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-white dark:text-accent hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined" aria-hidden="true">delete_forever</span>
                Request deletion
              </a>
            </div>
          </section>

          <div className="relative z-10 mt-12 space-y-10 text-slate-600 dark:text-slate-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">What to include</h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Send the request from your Mapplex account email.</li>
                <li>Use the subject <strong>Mapplex account deletion request</strong>.</li>
                <li>Include your workspace or organization name if applicable.</li>
              </ol>
              <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-sm">
                Never send your password, API keys, recovery codes, session codes, or payment-card information.
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">What happens next</h2>
              <p>
                Geova will verify that the request belongs to the account holder. After verification, we will delete
                or de-identify the account profile and personal content controlled by Geova and will notify you when
                the request is complete. If part of the request cannot be fulfilled, we will explain the reason.
              </p>
              <p>
                Organization-owned project records may be transferred to a workspace administrator or retained at
                the organization&apos;s direction where permitted. Limited billing, fraud-prevention, security, and legal
                records may be retained only for the applicable purpose and period. Backup copies expire through the
                normal protected backup lifecycle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent dark:text-white">Local data and subscriptions</h2>
              <p>
                Account deletion does not automatically remove offline project copies from every device. After the
                deletion is confirmed, remove local projects or clear Mapplex app data on devices that should no
                longer retain them.
              </p>
              <p>
                Deleting your account does not automatically cancel a Google Play subscription. Manage it separately
                in Google Play under <strong>Payments &amp; subscriptions → Subscriptions → Mapplex</strong>.
              </p>
              <a
                href="https://play.google.com/store/account/subscriptions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
              >
                Open Google Play subscriptions
                <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
              </a>
            </section>

            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
              <h2 className="text-2xl font-bold text-accent dark:text-white">Need help?</h2>
              <p>
                Contact <a className="font-bold text-primary hover:underline" href="mailto:support@geova.net">support@geova.net</a>.
                Review the <a className="font-bold text-primary hover:underline" href="/privacy">Mapplex Privacy Policy</a> for more information about data handling.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AccountDeletionPage;
