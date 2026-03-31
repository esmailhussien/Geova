import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(13,148,136,0.1),transparent_70%)]"></div>
        {/* Abstract Data Visual */}
        <div 
          className="absolute inset-0" 
          data-alt="Abstract blue glowing globe data visualization connectivity lines" 
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWkiWI8J1qh2iu1BXVmNOAEGjqMXyxTr6sRXU4cS2eiZrNrKgJfoBPSkmGSmSnrIqpIUxxEcXmJrw49qq7Sxg23AbA1_gcCcIkMh7fjpYxIvXVyZI73jLJA6iq2NcVWN_ySbzvxL_yNE0xu_rnBNyy5R9ngARBB7mZrvnGT51kfXfDp8QKIaG-UazT-Q19NzlWKHowOOKK3ZIK4ePeh6JMMwvEGQBOMEjSS_CKo-OU5RAFTyh91AU4ydZ6xJ-E1QefjEOArsq6dns')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            filter: "grayscale(100%) contrast(120%)"
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Intelligent Infrastructure
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-accent dark:text-white">
          Mapping <span className="gradient-text">Tomorrow's</span><br/>Solutions.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Geova engineers the intersection of complex physical infrastructure and intelligent spatial logic. We don't just map environments; we design the systems that thrive within them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/mapplex">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 transition-all">
              Discover Mapplex App
            </button>
          </Link>
          <a href="/docs/" className="glass-panel flex items-center justify-center text-accent dark:text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">
            View Documentation
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-slate-400">south</span>
      </div>
    </section>
  );
};

export default Hero;
