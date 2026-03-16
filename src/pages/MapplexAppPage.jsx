import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const MapplexAppPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Header />

      <main className="flex-grow pt-20">
        {/* App Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden flex items-center min-h-[90vh]">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_50%_50%,_rgba(13,148,136,0.15),transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Box: Marketing Copy */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Mobile Intelligence
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-accent dark:text-white">
                Take the Power of Geova to the <span className="gradient-text">Field.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empower your mobile workforce with the Mapplex Engine. Capture spatial data, run complex routing algorithms, and analyze terrain—all offline, right from your device.
              </p>

              {/* Download Badges */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button className="flex items-center justify-center gap-4 bg-accent dark:bg-white text-white dark:text-accent px-8 py-4 rounded-2xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                  <span className="material-symbols-outlined text-3xl">android</span>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase font-bold opacity-80 tracking-widest">Get it on</span>
                    <span className="text-sm font-black tracking-wide">Google Play</span>
                  </div>
                </button>
                
                <button className="flex items-center justify-center gap-4 glass-panel text-slate-400 dark:text-slate-500 px-8 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 cursor-not-allowed opacity-60">
                  <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase font-bold opacity-80 tracking-widest">Coming Soon to</span>
                    <span className="text-sm font-black tracking-wide">App Store</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Box: Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-sm transform transition-transform hover:scale-105 duration-700">
              <div className="aspect-[9/19] rounded-[48px] border-[14px] border-slate-900 shadow-2xl overflow-hidden glass-panel relative bg-slate-50 dark:bg-slate-950 flex flex-col pt-12">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-slate-900 rounded-b-3xl z-20"></div>
                
                {/* Mockup Screen Content */}
                <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-5xl text-primary animate-pulse">public</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-accent dark:text-white">Mapplex</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest">Mobile Client</p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-4">
                    Map rendering engine initializing... <br/>
                    GPS lock acquired.
                  </p>
                </div>

                {/* Ambient glow inside screen */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none z-0"></div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -right-8 top-20 glass-panel p-4 rounded-2xl hidden md:flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                <span className="material-symbols-outlined text-primary">satellite_alt</span>
                <span className="text-xs font-bold text-accent dark:text-white uppercase tracking-widest">RKT Fixed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Powered by Geova AI Section */}
        <section className="px-6 py-12 bg-accent dark:bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-12 glass-panel border border-primary/20 rounded-[32px] overflow-hidden relative group hover:border-primary/50 transition-colors">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_30px_#0d9488]">
                <span className="material-symbols-outlined text-4xl">psychology</span>
              </div>
              <div className="text-left">
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Core Intelligence</h3>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mt-1">Powered by Geova AI</h2>
              </div>
            </div>
            
            <div className="relative z-10 text-center md:text-right flex flex-col items-center md:items-end gap-4">
              <p className="text-sm text-slate-400 font-light max-w-sm">
                The Mapplex engine relies on an offline neural architecture for complex routing and predictive layer caching.
              </p>
              <Link to="/ai">
                <button className="bg-primary hover:bg-teal-400 text-slate-900 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(13,148,136,0.3)] transition-all flex items-center gap-2">
                  Explore the Geova Engine <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* How To Guide Section */}
        <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">How to Use Mapplex</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
                Master Field Intelligence.
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light pt-4">
                Bring enterprise spatial logic everywhere you go. Learn the core principles of offline data collection and intelligent mapping.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass-panel p-8 rounded-[32px] space-y-8 hover:-translate-y-2 transition-transform duration-500 border border-slate-200/50 dark:border-slate-800/50 group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-100 dark:text-slate-800/20 opacity-40 group-hover:text-primary/10 transition-colors pointer-events-none select-none">1</div>
                
                <div className="space-y-6 relative z-10 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">satellite_alt</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-black text-accent dark:text-white uppercase tracking-tight">Connect GPS</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      Pair high-precision external RTK receivers or utilize your mobile device's internal sensors for robust real-time sub-meter tracking.
                    </p>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden group/video cursor-pointer">
                  <div className="absolute inset-0 bg-accent/5 group-hover/video:bg-primary/5 transition-colors"></div>
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-accent dark:text-white shadow-lg group-hover/video:scale-110 group-hover/video:text-primary transition-all z-10">
                    <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-panel p-8 rounded-[32px] space-y-8 hover:-translate-y-2 transition-transform duration-500 border border-slate-200/50 dark:border-slate-800/50 group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-100 dark:text-slate-800/20 opacity-40 group-hover:text-primary/10 transition-colors pointer-events-none select-none">2</div>
                
                <div className="space-y-6 relative z-10 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">layers</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-black text-accent dark:text-white uppercase tracking-tight">Manage Layers</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      Toggle heavy vector datasets, raster imagery, and live telemetry layers. Fully customizable map styling tailored for field visibility.
                    </p>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden group/video cursor-pointer">
                  <div className="absolute inset-0 bg-accent/5 group-hover/video:bg-primary/5 transition-colors"></div>
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-accent dark:text-white shadow-lg group-hover/video:scale-110 group-hover/video:text-primary transition-all z-10">
                    <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-panel p-8 rounded-[32px] space-y-8 hover:-translate-y-2 transition-transform duration-500 border border-slate-200/50 dark:border-slate-800/50 group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-100 dark:text-slate-800/20 opacity-40 group-hover:text-primary/10 transition-colors pointer-events-none select-none">3</div>
                
                <div className="space-y-6 relative z-10 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">cloud_sync</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-black text-accent dark:text-white uppercase tracking-tight">Sync Data</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      Capture data completely offline in remote environments. When connectivity returns, seamlessly synchronize edits with the Geova cloud.
                    </p>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden group/video cursor-pointer">
                  <div className="absolute inset-0 bg-accent/5 group-hover/video:bg-primary/5 transition-colors"></div>
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-accent dark:text-white shadow-lg group-hover/video:scale-110 group-hover/video:text-primary transition-all z-10">
                    <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MapplexAppPage;
