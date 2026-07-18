import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import { ScanReveal } from '../components/animations/ScanReveal';
import { Link } from 'react-router-dom';

const PlatformPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display selection:bg-primary/30">
      <SEO
        title="Geova Platform — GIS Review and Spatial Reporting"
        description="Review, analyze, and export field data with dashboards, QA/QC workflows, audit trails, and GIS-ready handover outputs."
        url="/platform"
        keywords="GIS platform, spatial analytics, dashboards, automated QA/QC, audit trail, offline spatial processing, field data analysis"
      />
      <Header />

      <main className="flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 overflow-hidden">
          {/* Subtle background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_50%_0%,_rgba(13,148,136,0.08),transparent_70%)]"></div>
          </div>

          <div className="max-w-5xl mx-auto w-full relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em]">
              <span className="material-symbols-outlined text-[14px]">psychology</span>
              Geova Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-accent dark:text-white">
              Review Field Data.<br />Deliver Reliable Maps.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Geova turns collected features into review queues, dashboards, reports, and validated datasets without forcing teams to rebuild the workflow in separate GIS, spreadsheet, and reporting tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="bg-primary text-center text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">
                Request a Demo
              </Link>
              <a href="/docs/" className="text-center text-accent dark:text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-slate-300 dark:border-slate-700 hover:border-primary hover:text-primary dark:hover:text-primary transition-all flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">description</span>
                Read the Docs
              </a>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Core Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
                Built around quality control
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                A practical toolkit for teams that collect, manage, and report spatial data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScanReveal delay={0.1}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-primary">wifi_off</span>
                  <h4 className="text-xl font-bold text-accent dark:text-white">Offline-First Operation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Run spatial queries, measurements, and data filters directly on-device — no internet required. Sync when you're back online.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.15}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-primary">map</span>
                  <h4 className="text-xl font-bold text-accent dark:text-white">Offline Map Tiles</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Download basemap tiles before heading to the field. Your team always has map coverage, even in areas with no signal.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-primary">fact_check</span>
                  <h4 className="text-xl font-bold text-accent dark:text-white">Automated QA/QC</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Built-in validation catches topology errors, missing attributes, and duplicate features before data leaves the field.
                  </p>
                </div>
              </ScanReveal>
            </div>
          </div>
        </section>

        {/* Assisted Analysis Features */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Assisted Analysis</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
                Practical spatial queries, plain language
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Ask the platform to count features, find nearby assets, generate filters, or prepare a spatial join, then review the result on the map before exporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScanReveal delay={0.1}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">chat</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Natural Language Queries</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ask questions like <em>"Show damaged streetlights without photos"</em> or <em>"Count inspections by district"</em>. Geova prepares the query, shows the logic, and lets you review before applying it.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.15}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">dashboard</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Executive Dashboards</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Project-level statistics — feature counts, completion rates, area and length summaries — updated in real time as your field teams collect data.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">layers</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Spatial Analysis Templates</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Gap analysis, catchment areas, suitability ranking, clustering, and density mapping — available as structured workflows you can run on your own data.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.25}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">history</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Full Audit Trail</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every feature edit is tracked with user, timestamp, and change details. Essential for government compliance, handover documentation, and team accountability.
                  </p>
                </div>
              </ScanReveal>
            </div>
          </div>
        </section>

        {/* Data Format Support */}
        <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Import & Export</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">
                Works With Your Existing Data
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { format: 'GeoJSON', desc: 'Web & GIS standard' },
                { format: 'KML / KMZ', desc: 'Google Earth' },
                { format: 'Shapefile', desc: 'ESRI .shp + .prj' },
                { format: 'GeoPackage', desc: 'SQLite-based GIS' },
                { format: 'DXF', desc: 'AutoCAD exchange' },
                { format: 'CSV / Excel', desc: 'Spreadsheet import' },
                { format: 'PDF Map', desc: 'Print-ready export' },
                { format: 'Eng. Drawing', desc: 'Technical schematics' },
              ].map((f) => (
                <div key={f.format} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center space-y-1 shadow-sm">
                  <div className="text-sm font-bold text-accent dark:text-white">{f.format}</div>
                  <div className="text-[11px] text-slate-500">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mapplex Connection */}
        <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="material-symbols-outlined text-5xl text-primary">hub</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">
              Connected to Mapplex
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Mapplex uses the same project structure, validation rules, and review logic as the Geova Platform, so field and office teams stay aligned.
            </p>
            <div className="pt-4">
              <Link to="/mapplex" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
                Learn about Mapplex <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center px-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-3xl font-black mb-4 text-accent dark:text-white">See it in action</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light mb-8 max-w-xl mx-auto">
            We'll walk you through a live demo with your own data requirements.
          </p>
          <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">
            Request a Demo
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlatformPage;
