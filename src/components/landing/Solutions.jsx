import React from 'react';

const Solutions = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-background-dark" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-black uppercase tracking-[0.24em] text-primary mb-4">Workflows</h2>
            <h3 className="text-4xl font-bold text-accent dark:text-white">Reliable GIS operations for complex projects</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs font-light">
            Practical tools for field collection, quality review, infrastructure reporting, and spatial decision support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Large Feature Card */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-3xl bg-accent p-10 flex flex-col justify-end text-white border border-slate-800">
            <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
              <img
                className="w-full h-full object-cover"
                data-alt="Microchip neon lights high tech background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD2Jn09G7dLthvI7REwN9YZYuqF9COapsTL79vDghk4DZAY0xtfJBffyvG_OrrKlF3mSbeKXCiAkBvf8FRcQbbzcliGtUO0OXDS0YyCbSx9mFLriATRSEgZcJQr1U6cRgTL1aKnPb_tLU0MD_uPWFx-FjXqXMcBH9HKIthhuMA6HkEpgR10YpXnGoD4Jx9WOaBsOAB7fUONCbf7IhX8-jSILtnamgAFf8q9PllNP7PQJjYr_kwDRBa7eve14bADwqYERrHH1PhWfQ"
                alt="High Tech Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/40 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-4">
              <span className="material-symbols-outlined text-4xl text-primary">settings_input_component</span>
              <h4 className="text-3xl font-bold">Spatial Review & Reporting</h4>
              <p className="max-w-md text-slate-300 font-light">Turn collected layers into filters, QA lists, dashboards, and export packages that project teams can review and trust.</p>
              <button className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary pt-4 group">
                Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
          {/* Side Stack */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-center border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">hub</span>
              <h4 className="text-xl font-bold mb-2">Infrastructure Asset Analysis</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Inspect road, drainage, utility, and public asset layers with clear attributes, photos, and status fields.</p>
            </div>
            <div className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">query_stats</span>
                <h4 className="text-xl font-bold mb-2">Predictive Maintenance & Risk Mapping</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">AI-driven foresight tools that anticipate infrastructural stress points before they manifest.</p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <span className="material-symbols-outlined text-[120px]">insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
