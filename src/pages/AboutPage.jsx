import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import { ScanReveal } from '../components/animations/ScanReveal';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0f1115] min-h-screen text-slate-800 dark:text-slate-200 font-display selection:bg-primary/30 flex flex-col">
      <SEO
        title="About Geova — Built by GIS Engineers"
        description="Geova builds field data collection, GIS review, and spatial reporting tools shaped by hands-on infrastructure and environmental project work."
        url="/about"
        keywords="about Geova, GIS company, spatial intelligence, government GIS, engineering consultancy, national standards, city-scale GIS"
      />
      <Header />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Hero Section */}
        <section className="px-6 py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-accent dark:text-white leading-tight">
              Built by <span className="text-primary">GIS engineers</span>.<br /> Shaped by field work.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Geova grew from practical GIS delivery: field surveys, data cleanup, asset inventories, environmental mapping, dashboards, and the handover pressure that comes at the end of every project.
            </p>
          </div>
        </section>

        {/* Our Story / Timeline */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Origins</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">15 Years in the Making</h3>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <ScanReveal delay={0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl glass-panel shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900 dark:text-slate-100">The Consulting Era</div>
                    <time className="font-mono text-primary text-sm font-bold">2010</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-light">
                    Geova begins with geospatial consulting work: digitizing urban districts, building cadastral databases, and preparing land-cover classifications for planning teams.
                  </div>
                </div>
              </div>
            </ScanReveal>

            {/* Timeline Item 2 */}
            <ScanReveal delay={0.2}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="material-symbols-outlined text-[16px]">map</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl glass-panel shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900 dark:text-slate-100">Infrastructure Workflows</div>
                    <time className="font-mono text-primary text-sm font-bold">2016</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-light">
                    The team expands into road and drainage asset registration, GIS department setup, QA/QC procedures, and field-to-office workflows for infrastructure contractors.
                  </div>
                </div>
              </div>
            </ScanReveal>

            {/* Timeline Item 3 */}
            <ScanReveal delay={0.3}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="material-symbols-outlined text-[16px]">public</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl glass-panel shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900 dark:text-slate-100">Municipal GIS Operations</div>
                    <time className="font-mono text-primary text-sm font-bold">2020</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-light">
                    Geova supports municipal GIS operations with managed layers, administrative workflow automation, web dashboards, and Integrated Coastal Zone Management planning.
                  </div>
                </div>
              </div>
            </ScanReveal>

            {/* Timeline Item 4 */}
            <ScanReveal delay={0.4}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="material-symbols-outlined text-[16px]">code</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl glass-panel shadow-sm border-primary/30">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-primary">The Platform Pivot</div>
                    <time className="font-mono text-primary text-sm font-bold">2023</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-light">
                    After seeing the same gaps across projects, Geova begins developing the Platform and Mapplex to connect field capture, QA review, reporting, and GIS exports in one workflow.
                  </div>
                </div>
              </div>
            </ScanReveal>

          </div>
        </section>

        {/* What We've Built & Managed */}
        <section className="py-24 px-6 bg-white dark:bg-slate-900/80 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Proven Track Record</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">What We've Delivered</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
                We focus on the work clients need to complete: collect the right data, check it properly, explain it clearly, and deliver it in the right format.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <ScanReveal delay={0.1}>
                <div className="glass-panel bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">add_road</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent dark:text-white mb-3">Infrastructure Asset Registration</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    Complete spatial inventories for road networks and drainage systems — from mobile laser scanning and point-cloud processing to centralized geodatabases structured for lifecycle maintenance.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.15}>
                <div className="glass-panel bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">apartment</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent dark:text-white mb-3">GIS Department Establishment</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    GIS operating models for contractors and project teams, including server planning, software selection, team roles, SOP development, and staff training.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="glass-panel bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">dashboard</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent dark:text-white mb-3">Executive Monitoring Dashboards</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    Spatial dashboards for project leadership, translating field progress and asset status into clear views for review meetings and decisions.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.25}>
                <div className="glass-panel bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">water</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent dark:text-white mb-3">Coastal & Environmental Planning</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    ICZM support, shoreline change detection, flood-risk mapping, and sand nourishment feasibility studies for environmental, engineering, and planning teams.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.3}>
                <div className="glass-panel bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">settings_suggest</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent dark:text-white mb-3">Workflow Automation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    Digital transformation of manual administrative processes using GIS-driven routing, review queues, dashboards, and field inspection workflows.
                  </p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.35}>
                <div className="glass-panel bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">satellite_alt</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent dark:text-white mb-3">Remote Sensing & Change Detection</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    Multi-temporal satellite imagery analysis for urban expansion monitoring, land-cover classification, vegetation indices, and environmental change detection across city-scale territories.
                  </p>
                </div>
              </ScanReveal>

            </div>
          </div>
        </section>

        {/* Collective Impact Metrics */}
        <section className="py-16 px-6 bg-primary">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <ScanReveal delay={0.1}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">15+</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Years GIS Experience</div>
              </div>
            </ScanReveal>
            <ScanReveal delay={0.2}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">Field</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Offline Collection</div>
              </div>
            </ScanReveal>
            <ScanReveal delay={0.3}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">QA/QC</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Review Workflows</div>
              </div>
            </ScanReveal>
            <ScanReveal delay={0.4}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">GIS</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Handover Outputs</div>
              </div>
            </ScanReveal>
          </div>
        </section>

        {/* Credentials & Standards */}
        <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Governed Data</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">Designed for controlled project environments</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScanReveal delay={0.1}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4 h-full">
                  <span className="material-symbols-outlined text-5xl text-slate-400">gavel</span>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">Standards-Based Data</h4>
                  <p className="text-sm text-slate-500 font-light">Configure layers, attributes, domains, and outputs to match project or authority requirements.</p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4 h-full">
                  <span className="material-symbols-outlined text-5xl text-slate-400">verified_user</span>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">Security-Aware Delivery</h4>
                  <p className="text-sm text-slate-500 font-light">Support for role-based access, controlled exports, and clear data ownership practices.</p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.3}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4 h-full">
                  <span className="material-symbols-outlined text-5xl text-slate-400">cloud_done</span>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">Data Sovereignty</h4>
                  <p className="text-sm text-slate-500 font-light">On-premise deployment options for strict government data residency requirements.</p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.4}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4 h-full">
                  <span className="material-symbols-outlined text-5xl text-slate-400">engineering</span>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">Field-Proven Team</h4>
                  <p className="text-sm text-slate-500 font-light">Engineers who've established GIS departments, managed city-scale systems, and delivered national-level spatial infrastructure.</p>
                </div>
              </ScanReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center px-6">
          <h3 className="text-3xl font-black mb-6 text-accent dark:text-white">Ready to transform your spatial data?</h3>
          <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 transition-all">
            Talk to Our Engineers
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
