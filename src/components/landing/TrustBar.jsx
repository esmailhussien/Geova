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
  return (
    <section className="py-16 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
          Trusted by Government Authorities & Mega-Contractors
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center items-center">
          
          <div className="flex flex-col items-center gap-3 group">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">history</span>
            <span className="text-4xl font-black text-accent dark:text-white"><AnimatedCounter target={15} suffix="+" /></span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">apartment</span>
            <span className="text-4xl font-black text-accent dark:text-white"><AnimatedCounter target={50} suffix="+" /></span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enterprise Deployments</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">verified_user</span>
            <span className="text-4xl font-black text-accent dark:text-white">Full</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">GIS Tool Coverage</span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">security</span>
            <span className="text-4xl font-black text-accent dark:text-white">Gov't</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Standards Compliant</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
