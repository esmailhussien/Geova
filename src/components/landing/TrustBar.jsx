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
      label: 'Years GIS foundation',
      note: 'Consulting, field delivery, data models, and project handover',
    },
    {
      icon: 'psychology',
      value: 'AI',
      label: 'Shared intelligence layer',
      note: 'Spatial reasoning, analysis, QA/QC, reporting, and recommendations',
    },
    {
      icon: 'public',
      value: '01',
      label: 'First product arm',
      note: 'Mapplex begins the technical ecosystem with mobile GIS fieldwork',
    },
    {
      icon: 'deployed_code',
      value: 'SaaS',
      label: 'Custom spatial systems',
      note: 'Templates and platforms shaped around project-specific variables',
    },
  ];

  return (
    <section className="py-14 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.24em] mb-10">
          GIS foundations, AI reasoning, field applications, and custom systems working as one ecosystem
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
