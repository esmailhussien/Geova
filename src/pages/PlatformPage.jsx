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
        title="Geova AI Platform — Spatial Intelligence Layer"
        description="Geova AI is the spatial intelligence layer behind Geova systems, supporting spatial operations, analysis, QA/QC, reporting, recommendations, and custom SaaS workflows."
        url="/platform"
        keywords="Geova AI, GIS platform, spatial intelligence, spatial analytics, dashboards, automated QA/QC, custom GIS systems, spatial SaaS"
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
              Geova AI Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-accent dark:text-white">
              The spatial brain behind every Geova system.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Geova AI supports spatial operations, analysis, QA/QC, reporting, scenario evaluation, and recommendations. It is designed to participate in Mapplex, custom client platforms, and future Geova technical arms.
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
                Built for spatial operations, not only map viewing
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Geova AI combines GIS foundations with operational logic so each system can understand where things are, what they mean, and what should happen next.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScanReveal delay={0.1}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                  <h4 className="text-xl font-bold text-accent dark:text-white">Spatial Operations Core</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Run buffers, joins, filters, measurements, classification, change detection, and project-specific spatial workflows from one intelligence layer.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.15}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-primary">schema</span>
                  <h4 className="text-xl font-bold text-accent dark:text-white">Project Templates</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Adapt the interface, data schema, parameters, rules, dashboards, and operational variables to fit a specific system idea.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-4xl text-primary">conversion_path</span>
                  <h4 className="text-xl font-bold text-accent dark:text-white">Common GIS Coverage</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The roadmap targets broad coverage of the everyday GIS tools and analysis constructs needed for most field, planning, infrastructure, and environmental workflows.
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
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Geova AI</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
                A reasoning layer for spatial systems
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                The goal is not only to ask questions. Geova AI helps systems analyze spatial conditions, detect gaps, build workflows, recommend actions, and explain results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScanReveal delay={0.1}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">chat</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Natural Language + Spatial Logic</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ask for counts, filters, joins, buffers, comparisons, or suitability checks. Geova prepares the logic and keeps the result reviewable before applying it.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.15}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">dashboard</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Decision Dashboards</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Convert spatial and operational data into project dashboards that show progress, risk, condition, cost, compliance, and next actions.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">layers</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Spatial Analysis Constructs</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Cover common GIS analysis needs such as gap analysis, catchments, suitability, clustering, density, corridors, risk zones, and asset relationships.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.25}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-4 shadow-sm h-full">
                  <span className="material-symbols-outlined text-3xl text-primary">history</span>
                  <h4 className="text-lg font-bold text-accent dark:text-white">Audit Trail & Explanation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Track edits, assumptions, parameters, generated outputs, and reviewer decisions so technical results can be explained and defended.
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

        {/* Custom Systems */}
        <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Custom Spatial Systems</h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
                Turn a project idea into a dedicated GIS-based SaaS workflow.
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                For clients who need more than a standard product, Geova can shape the template, interface, data model, analysis logic, and operational variables around the specific problem.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'table_chart', title: 'Data Model', text: 'Layers, attributes, domains, CRS, attachments, and relationships.' },
                { icon: 'tune', title: 'Parameters', text: 'Thresholds, formulas, classifications, roles, and approval states.' },
                { icon: 'route', title: 'Operations', text: 'Field tasks, office review, alerts, exports, and reporting cycles.' },
                { icon: 'psychology', title: 'Geova AI', text: 'Spatial reasoning, QA/QC support, recommendations, and explanations.' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
                  <h4 className="mt-4 font-bold text-accent dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mapplex Connection */}
        <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="material-symbols-outlined text-5xl text-primary">hub</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">
              Connected to Mapplex
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Mapplex uses Geova AI and the same project structure, validation rules, and review logic, so field data can move into analysis, dashboards, reports, and future custom systems.
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
