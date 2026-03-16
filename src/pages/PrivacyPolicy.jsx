import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Header />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-8 relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">Privacy Policy</h1>
            <p className="text-sm text-primary uppercase tracking-widest font-bold">Last Updated: March 2026</p>
          </div>
          
          <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed font-light relative z-10">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-accent dark:text-white">1. Data Collection</h2>
              <p>Geova ('we', 'us', 'our') collects spatial and telemetry data when you use the Mapplex Mobile App. This includes GPS coordinates, altitude, and hardware sensor data necessary for high-precision mapping. We only collect data that is strictly necessary for the core functionality of our spatial intelligence engines.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-accent dark:text-white">2. Offline Storage & Sync</h2>
              <p>The Mapplex engine prioritizes a local-first architecture. Spatial data captured in the field is stored securely within the encrypted sandbox of your mobile device. Synchronization with Geova Cloud servers occurs only when a secure connection is established and the user explicitly initiates a sync action or enables auto-sync policies.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-accent dark:text-white">3. Location Services & Battery</h2>
              <p>Continuous use of GPS running in the background can dramatically decrease battery life. Mapplex requires 'Always On' location permissions to ensure uninterrupted tracking during field surveys, even when the screen is locked. Geova does not track your location outside of active application sessions.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-accent dark:text-white">4. Third-Party Integrations</h2>
              <p>We do not sell your spatial data. However, integration with external RTK providers, custom map tile servers (e.g., OpenStreetMap), or external analytical plugins may result in data transmission subject to their respective third-party privacy policies.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-accent dark:text-white">5. Security Infrastructure</h2>
              <p>All data transmitted between the Mapplex client and Geova servers is encrypted using industry-standard TLS protocols. Data at rest is secured using AES-256 encryption. Our security protocols are continuously monitored and updated to counter emerging threats.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
