import React from 'react';
import { Link } from 'react-router-dom';

const ThreePillars = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1115]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
            One Ecosystem. Three Solutions.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            AI-powered analytics, professional field data collection, and hands-on engineering consulting — working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Platform */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[28px]">psychology</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Geova AI Platform</h4>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Analytics & Dashboards</p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-grow mb-6">
              Ask questions in plain language, get spatial answers. Filter, analyze, and export field data with AI-powered dashboards and full audit trails.
            </p>
            <Link to="/platform" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Explore Platform <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Pillar 2: Mapplex */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[28px]">public</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Mapplex</h4>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Field Data Collection</p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-grow mb-6">
              Professional mobile data collection that works fully offline. GPS capture, structured forms, photo attachments, and peer-to-peer sync — built for field conditions.
            </p>
            <Link to="/mapplex" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Discover Mapplex <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Pillar 3: Consulting */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[28px]">engineering</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Consulting</h4>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Engineering Services</p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-grow mb-6">
              15+ years of hands-on experience. ICZM, infrastructure asset registration, environmental assessments, and GIS department setup for government authorities and contractors.
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
