import React from 'react';
import { Link } from 'react-router-dom';
import { LineReveal, TextReveal } from '../animations/TextReveal';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient background — no external AI-generated images */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(13,148,136,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-8 flex flex-col items-center">

        {/* 1. Badge */}
        <LineReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary"></span>
            Spatial Intelligence Platform
          </div>
        </LineReveal>

        {/* 2. Main Title */}
        <LineReveal delay={0.2} className="pb-4">
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-accent dark:text-white">
            Mapping <span className="gradient-text">Tomorrow's</span><br />Solutions.
          </h1>
        </LineReveal>

        {/* 3. Subtext */}
        <div className="w-full">
          <TextReveal
            text="An end-to-end spatial intelligence platform trusted by government authorities and built by engineers who've managed city-scale GIS systems for 15+ years."
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed text-center block"
            delay={0.4}
            staggerDuration={0.03}
          />
        </div>

        {/* 4. Action Buttons */}
        <LineReveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">
                Request a Demo
              </button>
            </Link>
            <Link to="/platform" className="flex items-center justify-center text-accent dark:text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-slate-300 dark:border-slate-700 transition-all hover:border-primary hover:text-primary dark:hover:text-primary">
              Explore Our Solutions
            </Link>
          </div>
        </LineReveal>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-slate-400">south</span>
      </div>
    </section>
  );
};

export default Hero;
