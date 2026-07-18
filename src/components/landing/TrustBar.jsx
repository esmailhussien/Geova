import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const TrustBar = () => {
  const signals = [
    {
      icon: 'history',
      value: <AnimatedCounter target={15} suffix="+" />,
      label: 'Years in GIS delivery',
      note: 'Field, office, and handover workflows',
    },
    {
      icon: 'wifi_off',
      value: 'Offline',
      label: 'Field-ready capture',
      note: 'Collect and review data with weak connectivity',
    },
    {
      icon: 'fact_check',
      value: 'QA/QC',
      label: 'Validation first',
      note: 'Check attributes, geometry, and attachments early',
    },
    {
      icon: 'ios_share',
      value: 'GIS',
      label: 'Open exports',
      note: 'Shapefile, GeoJSON, GeoPackage, DXF, CSV, PDF',
    },
  ];

  return (
    <section className="py-14 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.24em] mb-10">
          Built for field data that has to survive review, reporting, and handover
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch">
          {signals.map((signal) => (
            <div key={signal.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/40">
              <div className="flex items-start justify-between gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">{signal.icon}</span>
                <span className="text-2xl font-black text-accent dark:text-white">{signal.value}</span>
              </div>
              <div className="mt-5 text-sm font-bold text-accent dark:text-white">{signal.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{signal.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
