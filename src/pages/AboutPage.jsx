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
        title="About Geova — Built by Engineers. Trusted by Governments."
        description="15+ years managing city-scale GIS systems for national authorities. Learn how Geova evolved from consulting to building the spatial intelligence platform we always needed."
        url="/about"
        keywords="about Geova, GIS company, spatial intelligence, government GIS, engineering consultancy, national standards, city-scale GIS"
      />
      <Header />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Hero Section */}
        <section className="px-6 py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-accent dark:text-white leading-tight">
              Built by <span className="text-primary">Engineers</span>.<br /> Trusted by Governments.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              We've spent 15+ years managing city-scale GIS systems for national authorities. Now, we've built the spatial intelligence platform we always needed.
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
                    Geova begins as a geospatial consulting firm — digitizing urban districts, building cadastral databases, and delivering land-cover classifications for government planning agencies across the MENA region.
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
                    <div className="font-bold text-slate-900 dark:text-slate-100">Mega-Infrastructure Projects</div>
                    <time className="font-mono text-primary text-sm font-bold">2016</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-light">
                    Our engineers lead road and drainage asset registration across 7+ major national infrastructure projects — establishing GIS departments from the ground up, developing QA/QC protocols, and managing end-to-end field-to-office workflows for mega-contractors.
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
                    <div className="font-bold text-slate-900 dark:text-slate-100">Government Digital Transformation</div>
                    <time className="font-mono text-primary text-sm font-bold">2020</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-light">
                    Managing GIS infrastructure for a governorate serving 5+ million residents. Automating administrative workflows, building web-based executive monitoring dashboards, and driving Integrated Coastal Zone Management planning at the national level.
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
                    Frustrated by the disconnected tools on the market, we begin developing the Geova AI Platform and Mapplex — bridging the gap between field survey, AI processing, and executive dashboard in one seamless ecosystem.
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
                We don't lead with titles — we lead with what we've built, managed, and delivered at scale for national authorities and mega-contractors.
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
                    Built GIS departments from the ground up for mega-contractors — server infrastructure, software procurement, team recruitment, SOP development, and comprehensive staff training programs.
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
                    Real-time spatial dashboards for government leadership — translating complex operational data into intuitive visualizations for field progress tracking and data-driven decision-making.
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
                    National-level ICZM strategies, shoreline change detection, flood-risk modeling, and sand nourishment feasibility studies coordinating environmental agencies, engineers, and urban planners.
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
                    Digital transformation of manual administrative processes using GIS-driven automation — reducing inter-departmental processing time by 40% and enabling real-time field inspection workflows.
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
                <div className="text-4xl md:text-5xl font-black">7+</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Major Infrastructure Projects</div>
              </div>
            </ScanReveal>
            <ScanReveal delay={0.2}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">5M+</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Residents Served</div>
              </div>
            </ScanReveal>
            <ScanReveal delay={0.3}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">40%</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Processing Time Reduction</div>
              </div>
            </ScanReveal>
            <ScanReveal delay={0.4}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">100%</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Standards Compliance</div>
              </div>
            </ScanReveal>
          </div>
        </section>

        {/* Credentials & Standards */}
        <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Compliance & Security</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">Built for Government Standards</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScanReveal delay={0.1}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4 h-full">
                  <span className="material-symbols-outlined text-5xl text-slate-400">gavel</span>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">National Standards Compliant</h4>
                  <p className="text-sm text-slate-500 font-light">Full adherence to government infrastructure data standards and specifications across GCC and MENA regions.</p>
                </div>
              </ScanReveal>

              <ScanReveal delay={0.2}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4 h-full">
                  <span className="material-symbols-outlined text-5xl text-slate-400">verified_user</span>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">ISO 27001 Ready</h4>
                  <p className="text-sm text-slate-500 font-light">Enterprise-grade data security and infrastructure protection protocols.</p>
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
