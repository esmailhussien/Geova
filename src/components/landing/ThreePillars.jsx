import React from 'react';
import { Link } from 'react-router-dom';

const ThreePillars = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1115]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.24em]">What Geova Covers</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
            A practical stack for field-to-office GIS work.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Collect data in the field, review it with clear quality controls, and produce the reports and GIS files your stakeholders expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Platform */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-7 rounded-lg flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[26px]">dashboard</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Geova Platform</h4>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Review, analyze, report</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-6">
              Turn field submissions into dashboards, filters, QA lists, exports, and handover packages without rebuilding the workflow in separate tools.
            </p>
            <Link to="/platform" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Explore platform <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Pillar 2: Mapplex */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-7 rounded-lg flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[28px]">public</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Mapplex</h4>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Mobile field collection</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-6">
              Capture GPS locations, forms, photos, and field notes offline. Sync later, compare changes, and keep every record tied to a clear project layer.
            </p>
            <Link to="/mapplex" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              Discover Mapplex <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Pillar 3: Consulting */}
          <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-7 rounded-lg flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[28px]">engineering</span>
            </div>
            <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">Consulting</h4>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Engineering support</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-6">
              Get help designing data models, QA rules, survey workflows, map outputs, and GIS operating procedures for infrastructure and environmental projects.
            </p>
            <Link to="/consulting" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
              View services <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
