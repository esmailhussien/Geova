import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const FieldGuide = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Header />

      <main className="flex-grow pt-20 md:pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-6 py-16 text-center border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/30">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em]">
              Documentation
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-accent dark:text-white">
              Mapplex Field Guide
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
              Everything you need to deploy, configure, and master the Geova Mapplex engine in the field.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide Card 1 */}
            <a href="#" className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-4xl">satellite_alt</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent dark:text-white group-hover:text-primary transition-colors">Connecting External RTK GPS</h3>
                <p className="text-sm text-slate-500 mt-2 font-light">Learn how to pair Bluetooth GNSS receivers for centimeter-level accuracy.</p>
              </div>
            </a>

            {/* Guide Card 2 */}
            <a href="#" className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-4xl">layers</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent dark:text-white group-hover:text-primary transition-colors">Managing Offline Map Layers</h3>
                <p className="text-sm text-slate-500 mt-2 font-light">Download structural blueprints, satellite imagery, and DEMs for offline use.</p>
              </div>
            </a>

            {/* Guide Card 3 */}
            <a href="#" className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-4xl">cloud_sync</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent dark:text-white group-hover:text-primary transition-colors">Resolving Sync Conflicts</h3>
                <p className="text-sm text-slate-500 mt-2 font-light">Best practices for handling multi-user spatial edits and cloud synchronization.</p>
              </div>
            </a>

            {/* Guide Card 4 */}
            <a href="#" className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-4xl">draw</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent dark:text-white group-hover:text-primary transition-colors">Vector Geometry Editing</h3>
                <p className="text-sm text-slate-500 mt-2 font-light">Using the touch interface to draw polygons, lines, and plot specific POIs.</p>
              </div>
            </a>

            {/* Guide Card 5 */}
            <a href="#" className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-4xl">speed</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent dark:text-white group-hover:text-primary transition-colors">Performance Optimization</h3>
                <p className="text-sm text-slate-500 mt-2 font-light">Tips to maximize battery life and render performance when handling huge datasets.</p>
              </div>
            </a>

            {/* Guide Card 6 */}
            <a href="#" className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-4xl">integration_instructions</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent dark:text-white group-hover:text-primary transition-colors">API Keys & Authentication</h3>
                <p className="text-sm text-slate-500 mt-2 font-light">Setting up secure token access to Geova infrastructure layers.</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FieldGuide;
