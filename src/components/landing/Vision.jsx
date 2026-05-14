import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../common/MagneticButton';

const Vision = () => {
  return (
    <section className="py-24 px-6 bg-accent text-white relative overflow-hidden" id="vision">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/4 z-0"></div>
      
      {/* Dynamic LiDAR Scanner Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50 mix-blend-screen hidden md:block">
        <motion.div 
          className="absolute top-1/2 left-3/4 w-[1400px] h-[1400px] origin-center -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ 
            background: 'conic-gradient(from 0deg, transparent 70%, rgba(13, 148, 136, 0.1) 90%, rgba(255, 117, 31, 0.8) 100%)' 
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl space-y-8">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary">Multi-Dimensional Mapping</h2>
          <h3 className="text-5xl font-bold leading-[1.1]">Beyond the Map. Beyond the Dashboard.</h3>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Traditional GIS shows you where things are. Geova shows you what's wrong, what's at risk, and what to do about it.
          </p>
          <div className="pt-4 border-l-4 border-primary pl-8 space-y-4">
            <p className="text-xl font-bold">Intelligent Infrastructure Layers</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our 11D approach layers cost, condition, compliance, environmental impact, and predictive analytics onto every spatial element—creating maps that don't just display data, they tell the story of your infrastructure.
            </p>
            <div className="pt-6">
              <MagneticButton>
                <a className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary group bg-slate-900/80 hover:bg-slate-800 px-6 py-4 rounded-xl border border-primary/30 hover:border-brand-orange transition-colors relative" href="/platform">
                  Download Our Capabilities Brochure <span className="material-symbols-outlined text-md text-brand-orange transition-transform duration-300 group-hover:translate-x-2">arrow_right_alt</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
      {/* Abstract Map Decoration */}
      <div className="absolute bottom-[-100px] right-[-100px] w-1/2 opacity-20 hidden lg:block">
        <img
          className="w-full h-full object-contain grayscale invert"
          data-alt="Matrix digital code map pattern"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_1cHrHMr3-dxad8qYWjA84_IG9982s0jMXXa1sEeXGrjPVG-R7IGc-UGDxrUAIqOTIk4vuy_kg1IBgOrpb3znPDKkkgJBlu-ioj4xsxn14ZgMjDFlI_SoLWGrKBTjGLERNVDcbYg-sjxEsV9hqCjse0Bucha_4R3NfqwV37SRxemyUeLnIXaigqbiVM-InZLKeGEgWhgKpdSossRYPMzEPN7GE-p5qYDRmCuSuoS-jUc2oXc7XZx-38WGJSzow30OQRL9RNX5sQ"
          alt="Map Pattern"
        />
      </div>
    </section>
  );
};

export default Vision;
