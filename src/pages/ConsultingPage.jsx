import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import { ScanReveal } from '../components/animations/ScanReveal';
import { Link } from 'react-router-dom';

const ConsultingPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0f1115] min-h-screen text-slate-800 dark:text-slate-200 font-display selection:bg-primary/30 flex flex-col">
      <SEO
        title="GIS Consulting & Engineering Services"
        description="GIS consulting for infrastructure asset registration, environmental assessment, field data workflows, QA/QC, and spatial reporting."
        url="/consulting"
        keywords="GIS consulting, government compliance, ICZM, urban planning, infrastructure studies, environmental assessment, government GIS consulting, remote sensing, asset registration"
      />
      <Header />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Hero Section */}
        <section className="px-6 py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em]">
              <span className="material-symbols-outlined text-[14px]">engineering</span>
              The Human Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-accent dark:text-white leading-tight">
              GIS consulting for infrastructure teams that need dependable data.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Geova Consulting helps teams design survey workflows, data models, QA rules, map outputs, and handover packages for municipal, infrastructure, and environmental projects.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">Core Consulting Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <ScanReveal delay={0.1}>
              <div className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all h-full bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">water</span>
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">Integrated Coastal Zone Management (ICZM)</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  Coastal planning, shoreline change detection, and environmental impact support using GIS, remote sensing, and structured field observations.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Coastal Vulnerability', 'Shoreline Analysis', 'Sand Nourishment Studies'].map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </ScanReveal>

            {/* Service 2 */}
            <ScanReveal delay={0.2}>
              <div className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all h-full bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">location_city</span>
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">Urban Planning & Digital Transformation</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  Helping municipalities move from disconnected map files and spreadsheets to managed GIS layers, review workflows, dashboards, and repeatable administrative processes.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Digital Twins', 'Admin Automation', 'Base Map Management'].map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </ScanReveal>

            {/* Service 3 */}
            <ScanReveal delay={0.3}>
              <div className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all h-full bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">fact_check</span>
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">Standards Compliance & QA/QC</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  Defining practical QA/QC procedures for topology, attributes, attachments, coordinate systems, drawings, and project handover requirements.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Topology Validation', 'Attribute QA/QC', 'Handover Compliance'].map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </ScanReveal>

            {/* Service 4 */}
            <ScanReveal delay={0.4}>
              <div className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all h-full bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">psychology</span>
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">GIS Department Setup & Training</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  Support for internal GIS capability: data governance, server and software planning, role definition, team training, and standard operating procedures.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['IT Architecture', 'SOP Development', 'Team Building'].map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </ScanReveal>

            {/* Service 5 */}
            <ScanReveal delay={0.5}>
              <div className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all h-full bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">add_road</span>
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">Infrastructure Asset Registration</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  As-built and as-is asset inventory workflows for roads, drainage, utilities, and public assets, structured for maintenance planning and condition tracking.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Point Cloud Processing', 'Lifecycle Management', 'Python Automation'].map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </ScanReveal>

            {/* Service 6 */}
            <ScanReveal delay={0.6}>
              <div className="glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all h-full bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">satellite_alt</span>
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">Environmental & Remote Sensing</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  Satellite and aerial imagery analysis for land-cover classification, vegetation indices, water body extraction, and environmental change detection.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Multispectral Analysis', 'Flood Risk Modeling', 'Change Detection'].map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </ScanReveal>

          </div>
        </section>

        {/* Methodology Strip */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-black">Our Approach: Field Data to Decision in 3 Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-6xl font-black text-white/20 mb-4">01</div>
                <h4 className="text-xl font-bold mb-2">Audit & Survey</h4>
                <p className="font-light text-white/80">Confirm project requirements, existing layers, data standards, field constraints, and the handover format.</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white/20 mb-4">02</div>
                <h4 className="text-xl font-bold mb-2">Collection & QA/QC</h4>
                <p className="font-light text-white/80">Configure forms, collect field data, check attributes and geometry, and resolve review notes early.</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white/20 mb-4">03</div>
                <h4 className="text-xl font-bold mb-2">Actionable Reporting</h4>
                <p className="font-light text-white/80">Deliver dashboards, maps, GIS layers, reports, and structured handover packages for stakeholder review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center px-6">
          <h3 className="text-3xl font-black mb-4 text-accent dark:text-white">Have a project in mind?</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light mb-8 max-w-xl mx-auto">
            Whether it's a feasibility study, GIS department setup, or environmental assessment — our engineers are ready.
          </p>
          <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 transition-all">
            Discuss Your Project
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ConsultingPage;
