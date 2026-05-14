import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import geovaiconAnimated from '../assets/geovaicon-animated.gif';

const PlatformPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display selection:bg-primary/30">
      <SEO
        title="Geova AI Platform — Spatial Intelligence"
        description="90% of standard GIS analytical tools ready out-of-the-box. Real-time executive dashboards, automated QA/QC validation, and full audit trails — powered by on-device AI spatial processing."
        url="/platform"
        keywords="GIS platform, spatial analytics, AI dashboards, automated QA/QC, audit trail, offline spatial processing, predictive mapping"
      />
      <Header />

      <main className="flex-grow pt-20 md:pt-24">
        {/* AI Hero Section */}
        <section className="relative px-6 py-24 min-h-[90vh] flex flex-col justify-center overflow-hidden">
          {/* Futuristic Ambient Grid & Glows */}
          <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40 pointer-events-none mix-blend-screen">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_50%_0%,_rgba(13,148,136,0.15),transparent_70%)]"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
            {/* Grid Pattern overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(to right, #0d9488 1px, transparent 1px), linear-gradient(to bottom, #0d9488 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Box: Marketing Copy */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em]">
                <span className="material-symbols-outlined text-[10px] animate-spin" style={{ animationDuration: '3s' }}>hourglass_empty</span>
                Geova AI — Spatial Intelligence Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-accent dark:text-white">
                The Intelligence <br />Behind the <span className="gradient-brand">Map</span><span className="text-brand-orange">.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Geova AI isn't an afterthought; it's the core. Utilizing highly tuned neural networks, it processes raw spatial telemetry into predictive, actionable intelligence instantly—without requiring a cloud connection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <a href="/docs/geova-ai/interface" className="bg-primary text-center text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                  Access API Docs
                </a>
                <button className="glass-panel text-accent dark:text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span>
                  View Architecture
                </button>
              </div>
            </div>

            {/* Right Box: Floating AI Core Visualization */}
            <div className="relative mx-auto w-full max-w-lg aspect-square flex items-center justify-center pointer-events-none">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>

              {/* Central 'Core' - Refined & Scaled Down 10% */}
              <div className="relative z-10 w-72 h-72 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite] shadow-[inset_0_0_30px_rgba(13,148,136,0.1)] border border-primary/10">
                <div className="w-56 h-56 rounded-full border border-dashed border-primary/30 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                  <div className="w-40 h-40 rounded-full flex items-center justify-center relative group">
                    {/* Cleaned up CSS: Natively transparent GIF with primary Geova hue mapping & drop shadow */}
                    <img 
                      src={geovaiconAnimated} 
                      alt="Geova AI Core" 
                      className="w-full h-full object-contain absolute z-10 scale-[1.35] group-hover:scale-[1.5] transition-transform duration-700 ease-out"
                      style={{ filter: 'hue-rotate(-85deg) saturate(1.2) drop-shadow(0 0 20px rgba(13,148,136,0.5))' }}
                    />
                    {/* Clean inner pulse without a solid background box */}
                    <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full opacity-50" style={{ animationDuration: '3s' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Data Nodes */}
              <div className="absolute top-10 right-20 glass-panel px-4 py-2 rounded-lg border border-slate-300/50 dark:border-slate-700/50 flex items-center gap-2 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange shadow-[0_0_10px_#ff751f]"></span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-brand-orange">GEO_PROC_OK</span>
              </div>
              <div className="absolute bottom-20 left-10 glass-panel px-4 py-2 rounded-lg border border-brand-orange/30 dark:border-brand-orange/30 flex items-center gap-2 backdrop-blur-md animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                <span className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-300">PREDICT_SYNC</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Neural Architecture</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
                Engineered for Extremes.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl space-y-4 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">wifi_off</span>
                <h4 className="text-xl font-bold text-accent dark:text-white">Offline Spatial Processing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Run complex routing and buffer zone analyses directly on device. Our slimline edge-computation model requires zero latency back-and-forth.
                </p>
              </div>

              <div className="glass-panel border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl space-y-4 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">auto_graph</span>
                <h4 className="text-xl font-bold text-accent dark:text-white">Predictive Layering</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  The engine anticipates required data tiles and vector layers based on real-time hardware telemetry and routing trajectory, caching them before you ask.
                </p>
              </div>

              <div className="glass-panel border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl space-y-4 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">model_training</span>
                <h4 className="text-xl font-bold text-accent dark:text-white">Automated Field Guidance</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Contextual warnings overlay your active session. Geova AI detects structural anomalies and topological errors in field drawings instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Integration Callout */}
        <section className="py-32 px-6 border-t border-slate-200 dark:border-slate-800 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-900">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 glass-panel border border-primary/20 rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>

            <span className="material-symbols-outlined text-6xl text-primary">hub</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">
              Powering the Mapplex Engine
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto relative z-10">
              The intelligence you see here directly fuels the Mapplex Mobile App. It is the invisible force turning a simple digital map into a highly adaptive, situationally-aware enterprise tool.
            </p>
            <div className="pt-4 relative z-10">
              <a href="/mapplex" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
                See it in action <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlatformPage;
