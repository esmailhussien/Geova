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
        title="Consulting & Engineering — 15+ Years of GIS Excellence"
        description="Government-compliant GIS consulting, Integrated Coastal Zone Management, urban planning, and infrastructure feasibility studies. Government-grade spatial engineering expertise since 2010."
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
              15+ Years of <span className="text-primary">Engineering</span> Excellence.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Technology is only as good as the engineers behind it. Geova Consulting provides government-grade GIS expertise, environmental assessments, and digital transformation strategies — backed by hands-on experience managing infrastructure at national scale.
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
                  Comprehensive coastal planning, shoreline change detection, and environmental impact assessments using multi-dimensional spatial analysis. Our team has led ICZM strategic planning at the national level, coordinating between environmental agencies, engineering teams, and urban planners.
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
                  Assisting municipalities in transitioning from legacy 2D maps to intelligent 3D/4D digital twins. We've managed urban planning GIS for governorates serving 5+ million residents, including building footprint databases, utility network mapping, and automated administrative workflows that reduced processing time by 40%.
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
                <h4 className="text-xl font-bold text-accent dark:text-white mb-4">National Standards Compliance & QA/QC</h4>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-4">
                  Ensuring all spatial data and infrastructure drawings meet rigorous national authority specifications. Our multi-stage quality assurance procedures include topology checks, attribute validation, and 100% compliance enforcement — battle-tested across 7+ major road and drainage asset registration projects.
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
                  End-to-end consulting for establishing internal GIS capabilities from the ground up — from IT infrastructure design and server deployment, to technology procurement, team recruitment, and comprehensive SOP development. We've established fully operational GIS departments for mega-contractors.
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
                  Comprehensive as-built and as-is spatial data acquisition using mobile laser scanning, point-cloud processing, and high-precision field surveys. We build centralized spatial registries structured for lifecycle management, condition monitoring, and preventative maintenance cycles.
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
                  Multi-temporal satellite and aerial imagery analysis for land-cover classification, vegetation indices, water body extraction, and environmental change detection. Our team brings deep expertise in hydrological modeling, climate-related analysis, and flood-risk prediction at city and regional scale.
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
            <h3 className="text-3xl md:text-4xl font-black">Our Approach: Data to Decision in 3 Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-6xl font-black text-white/20 mb-4">01</div>
                <h4 className="text-xl font-bold mb-2">Audit & Survey</h4>
                <p className="font-light text-white/80">Using Mapplex and RTK GNSS to establish a rigorous ground-truth baseline with sub-meter precision — fully offline capable.</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white/20 mb-4">02</div>
                <h4 className="text-xl font-bold mb-2">AI Processing & QA/QC</h4>
                <p className="font-light text-white/80">Running spatial analytics, environmental compliance checks, and multi-stage quality assurance through the Geova AI Platform.</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white/20 mb-4">03</div>
                <h4 className="text-xl font-bold mb-2">Actionable Reporting</h4>
                <p className="font-light text-white/80">Delivering executive dashboards, certified compliance reports, and structured handover packages for stakeholder review.</p>
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
