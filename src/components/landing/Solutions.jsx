import React from 'react';
import { Link } from 'react-router-dom';
import mapplexIcon from '../../assets/mapplex.png';

const Solutions = () => {
  const stages = [
    {
      icon: 'phone_android',
      title: 'Mapplex captures',
      detail: 'Offline and online field data, photos, forms, boundaries, assets, and observations.',
    },
    {
      icon: 'fact_check',
      title: 'Geova AI validates',
      detail: 'Missing attributes, geometry gaps, duplicated records, risk flags, and project rules.',
    },
    {
      icon: 'analytics',
      title: 'Spatial analysis runs',
      detail: 'Buffers, overlays, counts, proximity, condition scoring, and scenario comparisons.',
    },
    {
      icon: 'task_alt',
      title: 'The system recommends',
      detail: 'Dashboards, review queues, exports, actions, and project-specific operating decisions.',
    },
  ];

  const outputs = [
    'Verified GIS layers',
    'Project dashboards',
    'Risk and priority maps',
    'Decision reports',
  ];

  const layers = [
    { label: 'Road assets', tone: 'bg-primary' },
    { label: 'Drainage', tone: 'bg-brand-orange' },
    { label: 'Utilities', tone: 'bg-sky-500' },
  ];

  return (
    <section className="px-6 py-24 bg-slate-50 dark:bg-background-dark" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="relative order-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:order-1">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white dark:border-slate-800">
              <div className="flex items-center gap-3">
                <img src={mapplexIcon} alt="Mapplex" className="h-8 w-8 rounded bg-white object-contain p-1" />
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Spatial System Console</div>
                  <div className="text-sm font-bold">District Infrastructure Survey</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                Live review
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px]">
              <div className="relative min-h-[380px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <div className="absolute left-[12%] top-[17%] h-28 w-44 rotate-[-12deg] rounded-lg border-2 border-primary/60 bg-primary/10" />
                <div className="absolute right-[16%] top-[26%] h-32 w-36 rotate-[14deg] rounded-lg border-2 border-brand-orange/60 bg-brand-orange/10" />
                <div className="absolute bottom-[17%] left-[24%] h-24 w-52 rotate-[7deg] rounded-lg border-2 border-sky-500/50 bg-sky-500/10" />

                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 420" fill="none" aria-hidden="true">
                  <path d="M46 318 C150 250 238 288 302 206 C356 138 430 138 574 86" stroke="#0d9488" strokeWidth="9" strokeLinecap="round" strokeDasharray="3 20" />
                  <path d="M58 96 C170 164 214 72 318 126 C408 172 454 242 566 218" stroke="#ff751f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M98 358 C196 310 274 332 354 286 C430 242 480 292 552 336" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                </svg>

                <div className="absolute left-[31%] top-[31%] rounded-lg border border-white/70 bg-white/90 px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-950/90 sm:left-[18%] sm:top-[28%]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">my_location</span>
                    <span className="text-xs font-black text-accent dark:text-white">Field point 142</span>
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-slate-500">Photo missing</div>
                </div>

                <div className="absolute bottom-[18%] right-[13%] rounded-lg border border-white/70 bg-white/90 px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-950/90">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-brand-orange">warning</span>
                    <span className="text-xs font-black text-accent dark:text-white">High priority</span>
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-slate-500">Near drainage conflict</div>
                </div>

                <div className="absolute left-4 top-4 rounded-lg border border-slate-200 bg-white/88 p-3 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-950/88">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Active layers</div>
                  <div className="mt-3 space-y-2">
                    {layers.map((layer) => (
                      <div key={layer.label} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
                        <span className={`h-2.5 w-2.5 rounded-sm ${layer.tone}`} />
                        {layer.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950 md:border-l md:border-t-0">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Decision Flow</div>
                <div className="mt-5 space-y-4">
                  {stages.map((stage, index) => (
                    <div key={stage.title} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <span className="material-symbols-outlined text-[20px]">{stage.icon}</span>
                        </div>
                        {index < stages.length - 1 && <div className="mt-2 h-8 w-px bg-slate-200 dark:bg-slate-800" />}
                      </div>
                      <div>
                        <div className="text-sm font-black text-accent dark:text-white">{stage.title}</div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{stage.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 space-y-7 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.24em] text-primary">Quick Win</h2>
              <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-accent dark:text-white">
                Show the operating model, not just the promise.
              </h3>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                A flagship site should make visitors understand how Geova works in one glance: Mapplex starts in the field, Geova AI checks and reasons over the data, then a custom spatial system turns that context into action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outputs.map((output) => (
                <div key={output} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                  <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                  {output}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/platform" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/10 transition-colors hover:bg-primary dark:bg-white dark:text-accent dark:hover:bg-primary dark:hover:text-white">
                Explore the platform
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-accent transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:text-primary">
                Discuss a system
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
