import React from 'react';
import { Link } from 'react-router-dom';
import { LineReveal } from '../animations/TextReveal';

const Hero = () => {
  const proofPoints = [
    'Offline field capture',
    'QA/QC before handover',
    'Open GIS exports',
  ];

  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden px-6 py-12 md:py-14">
      <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-[#0f1115] pointer-events-none">
        <div className="absolute inset-0 opacity-[0.16] dark:opacity-[0.12] bg-[linear-gradient(to_right,rgba(15,23,42,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.45)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 opacity-[0.18] dark:opacity-[0.24] bg-[linear-gradient(125deg,transparent_0%,transparent_42%,rgba(13,148,136,0.35)_42.2%,rgba(13,148,136,0.35)_42.8%,transparent_43%),linear-gradient(26deg,transparent_0%,transparent_54%,rgba(255,117,31,0.24)_54.1%,rgba(255,117,31,0.24)_54.6%,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-[#0f1115] to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <div className="absolute right-[7%] top-[16%] w-[360px] rounded-lg border border-slate-200/90 dark:border-slate-700/70 bg-white/86 dark:bg-slate-900/78 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Inspection Progress</span>
            <span className="text-xs font-semibold text-primary">Live review</span>
          </div>
          <div className="space-y-3 p-4">
            {[
              ['Road assets', '78%', 'bg-primary'],
              ['Drainage nodes', '64%', 'bg-brand-orange'],
              ['Photos attached', '91%', 'bg-slate-700'],
            ].map(([label, value, color]) => (
              <div key={label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{label}</span>
                  <span className="text-slate-500 dark:text-slate-400">{value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className={`h-full rounded-full ${color}`} style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-[18%] bottom-[12%] w-[300px] rounded-lg border border-slate-200/90 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/76 shadow-lg backdrop-blur-md">
          <div className="grid grid-cols-3 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            <span className="px-3 py-2">Layer</span>
            <span className="px-3 py-2">Records</span>
            <span className="px-3 py-2">Status</span>
          </div>
          {[
            ['Streetlights', '1,284', 'Checked'],
            ['Manholes', '642', 'Needs QA'],
            ['Road signs', '518', 'Ready'],
          ].map(([layer, records, status]) => (
            <div key={layer} className="grid grid-cols-3 border-b border-slate-100 px-3 py-2 text-xs last:border-b-0 dark:border-slate-800">
              <span className="font-semibold text-slate-700 dark:text-slate-200">{layer}</span>
              <span className="text-slate-500">{records}</span>
              <span className="text-primary">{status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-6">
          <LineReveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-sm dark:bg-slate-900/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              Geova Spatial Operations
            </div>
          </LineReveal>

          <h1 className="text-6xl md:text-7xl font-black leading-[0.92] tracking-tight text-accent dark:text-white">
            Geova
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
            Spatial data software for infrastructure teams that need reliable field collection, clean QA workflows, and practical decision dashboards.
          </p>

          <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Geova connects Mapplex field capture with review tools, audit trails, and GIS-ready exports so surveyors, engineers, and managers work from the same verified data.
          </p>

          <div className="flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
                <span className="material-symbols-outlined text-[17px] text-primary">check_circle</span>
                {point}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/15 transition-colors hover:bg-teal-700">
              Request a demo
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link to="/mapplex" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-accent transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:hover:text-primary">
              Explore Mapplex
              <span className="material-symbols-outlined text-[18px]">map</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
