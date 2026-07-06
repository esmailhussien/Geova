import React from 'react';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <section className="py-24 px-6 bg-accent text-white relative overflow-hidden" id="vision">
      {/* Simple angled accent — no spinning animations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="space-y-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary">Beyond the Map</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1]">Maps That Tell the Story of Your Infrastructure.</h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Traditional GIS shows you where things are. Geova layers cost, condition, compliance, and risk data onto every spatial element — so your maps explain what's wrong and what to prioritize.
            </p>
            <div className="pt-4">
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary group bg-slate-900/80 hover:bg-slate-800 px-6 py-4 rounded-xl border border-primary/30 hover:border-primary transition-colors"
              >
                Learn More <span className="material-symbols-outlined text-md transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right: Concrete feature list */}
          <div className="space-y-4 pt-4">
            {[
              { icon: 'view_in_ar', label: '2D, 3D & Temporal Mapping', desc: 'Track how assets change over time with built-in time-slider and elevation support.' },
              { icon: 'payments', label: 'Cost Attribution', desc: 'Attach cost data to spatial elements for budgeting and reporting.' },
              { icon: 'health_and_safety', label: 'Condition Monitoring', desc: 'Record and visualize asset condition, degradation, and repair priority.' },
              { icon: 'gavel', label: 'Compliance Tracking', desc: 'Validate data against standards and flag non-compliant records automatically.' },
              { icon: 'warning', label: 'Risk Assessment', desc: 'Score features by risk level using AI-assisted classification and spatial context.' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{item.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
