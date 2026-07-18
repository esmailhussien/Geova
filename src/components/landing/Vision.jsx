import React from 'react';
import { Link } from 'react-router-dom';

const Vision = () => {
  const dimensions = [
    'Location',
    'Elevation',
    'Time',
    'Cost',
    'Condition',
    'Risk',
    'Ownership',
    'Compliance',
    'Environment',
    'Operations',
    'Recommended action',
  ];

  return (
    <section className="py-24 px-6 bg-accent text-white relative overflow-hidden" id="vision">
      {/* Simple angled accent — no spinning animations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="space-y-8">
            <h2 className="text-sm font-black uppercase tracking-[0.24em] text-primary">Beyond the Map</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1]">The map is the story of the problem and the beginning of the solution.</h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Geova uses GIS as the foundation for technical systems. It connects the physical place with operational data, analysis, AI reasoning, and recommended action so every solution keeps its relationship to location.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              We describe this as multi-dimensional spatial intelligence: not just 2D, 3D, or time-aware mapping, but a model that can include cost, risk, compliance, environment, ownership, operations, and decision logic.
            </p>
            <div className="pt-4">
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary group bg-slate-900/80 hover:bg-slate-800 px-6 py-4 rounded-lg border border-primary/30 hover:border-primary transition-colors"
              >
                Learn More <span className="material-symbols-outlined text-md transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right: Concrete feature list */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-primary">11D Framework</div>
                <div className="mt-2 text-2xl font-black text-white">A fuller context for decisions</div>
              </div>
              <span className="material-symbols-outlined text-4xl text-primary">hub</span>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {dimensions.map((dimension, index) => (
                <div key={dimension} className="rounded-lg border border-white/10 bg-slate-950/30 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{String(index + 1).padStart(2, '0')}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-200">{dimension}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              The framework is not a visual trick. It is a way to define the parameters, operational variables, and relationships needed to build a system around a specific problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
