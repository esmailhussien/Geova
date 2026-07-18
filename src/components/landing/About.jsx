import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <img
              className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-screen"
              data-alt="Sophisticated futuristic spatial data visualization with glowing nodes and high-tech infrastructure lines."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Ttcu-lVBbeBa3qKSi1oli1A64dtdY86zuCTUNfBPQcOyVSjkH77jGE7nvl1pj8oO9YPkuZ5Npx0JLk1DFZrbXOt0JmWFQEIe0MlQOPB4WYPQC6WqpePfTu5FehvHDd5TwAcxHby6D2DXU8pGK-R2Z2qjDOwfperlicFMfM97CsPBcWOZDWdP0oCbw54BKDQf57OVlIsYXIsJAZN-yG7jpVAw-MHMRsQazDJSoF7uCQjEI8-DiGInhRDMUsrkphdiM-3-UUlcEHg"
              alt="Geova Spatial Visualization"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-panel p-8 rounded-2xl max-w-xs shadow-xl hidden md:block">
            <p className="text-sm font-medium italic text-slate-600 dark:text-slate-300">
              "Architecture is no longer static. It is a living data-set that requires constant refinement."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">G</div>
              <div>
                <p className="text-xs font-bold uppercase">Geova Philosophy</p>
                <p className="text-[10px] text-slate-500">Spatial Strategy Team</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-accent dark:text-white">Mapping Problems, Building Workflows</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Geova focuses on the practical work around spatial data: field capture, validation, project review, and exports that engineers can use without rework.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <span className="text-3xl font-black text-primary">01</span>
              <h4 className="font-bold uppercase text-xs tracking-widest">Diagnosing</h4>
              <p className="text-sm text-slate-500">Finding gaps in layers, forms, attachments, and handover requirements.</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl font-black text-primary">02</span>
              <h4 className="font-bold uppercase text-xs tracking-widest">Structuring</h4>
              <p className="text-sm text-slate-500">Building clear data models, QA rules, and repeatable reporting workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
