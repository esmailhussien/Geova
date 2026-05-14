import React from 'react';
import { Link } from 'react-router-dom';

const ThreePillars = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1115]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
            The Three Pillars of Spatial Intelligence.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            A cohesive architecture spanning field data collection, automated AI processing, and expert human consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Platform */}
          <div className="glass-panel border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl flex flex-col h-full hover:border-primary/50 transition-colors shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Geova AI Platform</h4>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">"The Brain"</p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-grow mb-6">
              Your Spatial Command Center. 90% of standard GIS analytical tools ready out-of-the-box, full audit trails, and automated executive dashboards.
            </p>
            <Link to="/platform" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Explore Platform <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Pillar 2: Mapplex */}
          <div className="glass-panel border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl flex flex-col h-full hover:border-primary/50 transition-colors shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">public</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Mapplex</h4>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">"The Field Arm"</p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-grow mb-6">
              Professional Field Data Collection. Works fully offline with RTK GNSS-grade accuracy and real-time on-device AI spatial processing.
            </p>
            <Link to="/mapplex" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Discover Mapplex <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Pillar 3: Consulting */}
          <div className="glass-panel border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-3xl flex flex-col h-full hover:border-primary/50 transition-colors shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">engineering</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Consulting</h4>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">"The Human Expertise"</p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-grow mb-6">
              15+ Years of Engineering Excellence. ICZM, infrastructure asset registration, environmental & remote sensing analysis, and full national standards compliance consulting.
            </p>
            <Link to="/consulting" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Our Services <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
