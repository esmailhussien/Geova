import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import { ScanReveal } from '../components/animations/ScanReveal';
import mapplexIcon from '../assets/mapplex.png';

const MapplexAppPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky bar visibility
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interactiveFeatures = [
    {
      id: 0,
      title: 'AI Spatial Assistant',
      desc: 'Ask complex spatial questions in natural language. The AI runs filters, generates buffer zones, and detects anomalies instantly on your device.',
      icon: 'psychology',
      screenTitle: 'Geova AI Assistant',
      screenData: [
        { label: 'Query', value: '"Find optimal sites > 5km from wetlands"', color: 'text-brand-orange' },
        { label: 'Operation', value: 'Spatial Buffer Active', color: 'text-slate-900 dark:text-white' },
        { label: 'Result', value: '3 Suitable Zones Generated', color: 'text-slate-900 dark:text-white' }
      ]
    },
    {
      id: 1,
      title: 'Local Peer-to-Peer Sync',
      desc: 'Cell towers down? Use Local P2P Sync to share data with colleagues over a portable Wi-Fi router. True offline-first capability.',
      icon: 'wifi_off',
      screenTitle: 'Offline Storage',
      screenData: [
        { label: 'Mode', value: 'P2P SYNC ACTIVE', color: 'text-brand-orange' },
        { label: 'Network', value: 'Local Portable Router', color: 'text-slate-900 dark:text-white' },
        { label: 'Transfer', value: '452 Geometries Synced', color: 'text-slate-900 dark:text-white' }
      ]
    },
    {
      id: 2,
      title: 'Smart Logic Forms',
      desc: 'Forms that think. Utilize Auto-Calculate from Spatial Reference to auto-tag points based on the district they fall inside, plus Lexicon picklists.',
      icon: 'dynamic_form',
      screenTitle: 'Asset Inspection',
      screenData: [
        { label: 'Asset Type', value: 'Drainage Manhole', color: 'text-slate-900 dark:text-white' },
        { label: 'Spatial Tag', value: 'District 4 (Auto-Calculated)', color: 'text-primary' },
        { label: 'Logic Trigger', value: 'Severity > 3: Auto-flagged', color: 'text-amber-500' }
      ]
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display relative">
      <SEO
        title="Mapplex — Professional Field Data Collection"
        description="RTK GNSS-grade mobile data collection app. Works fully offline with on-device AI spatial analysis. Capture, analyze, and sync field data seamlessly with the Geova AI Platform."
        url="/mapplex"
        keywords="Mapplex, RTK GNSS, field data collection, offline GIS, mobile mapping, spatial data capture, on-device AI"
      />
      <Header />

      {/* Sticky Download Bar */}
      <div className={`fixed top-20 md:top-24 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={mapplexIcon} alt="Mapplex Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-accent dark:text-white hidden sm:block">Mapplex Field App</span>
            </div>
            <button className="flex items-center justify-center gap-2 bg-accent dark:bg-white text-white dark:text-accent px-4 py-2 rounded-xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all text-sm font-bold shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">android</span>
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow pt-20 md:pt-24">
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
                Take the Power of Geova to the <span className="text-primary">Field</span><span className="text-brand-orange">.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empower your mobile workforce with the Mapplex Engine. Capture spatial data with sub-meter precision, sync custom forms, and map offline—built by engineers for extreme field conditions.
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
                  <div className="w-40 h-40 flex items-center justify-center relative drop-shadow-[0_0_50px_rgba(13,148,136,0.6)]">
                    <img src={mapplexIcon} alt="Mapplex App" className="w-full h-full object-contain animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-accent dark:text-white">Mapplex</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Mapping & Beyond</p>
                  </div>
                </div>

                {/* Ambient glow inside screen */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none z-0"></div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -right-8 top-20 glass-panel p-4 rounded-2xl hidden md:flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="material-symbols-outlined text-primary">satellite_alt</span>
                <span className="text-xs font-bold text-accent dark:text-white uppercase tracking-widest">RTK Fixed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Feature Explorer */}
        <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Interactive Explorer</h2>
              <h3 className="text-4xl font-black tracking-tight text-accent dark:text-white">Inside the Engine</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Phone Interface Viewer */}
              <div className="relative mx-auto w-full max-w-[300px] h-[600px] rounded-[40px] border-[10px] border-slate-900 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="h-6 w-full flex items-center justify-between px-4 pt-1 bg-slate-900 text-white text-[10px] font-bold">
                  <span>10:42 AM</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
                    <span className="material-symbols-outlined text-[12px]">battery_full</span>
                  </div>
                </div>

                {/* Dynamic Screen Content */}
                <div className="flex-grow p-6 flex flex-col justify-center transition-all duration-500 ease-in-out relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 mx-auto shadow-inner">
                    <span className="material-symbols-outlined text-3xl">{interactiveFeatures[activeFeature].icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-center text-accent dark:text-white mb-6 uppercase tracking-widest">{interactiveFeatures[activeFeature].screenTitle}</h4>
                  <div className="space-y-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                    {interactiveFeatures[activeFeature].screenData.map((item, idx) => (
                      <div key={idx} className="flex flex-col space-y-1 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 last:border-0 last:pb-0 last:mb-0">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                        <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Map background illusion */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(13,148,136,0.5),transparent_70%)]"></div>
              </div>

              {/* Right: Feature Selector */}
              <div className="space-y-4">
                {interactiveFeatures.map((feat, index) => (
                  <button
                    key={feat.id}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-8 rounded-3xl transition-all duration-300 border ${activeFeature === index
                        ? 'bg-white dark:bg-slate-900 border-primary shadow-xl scale-[1.02]'
                        : 'glass-panel border-transparent hover:border-slate-300 dark:hover:border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${activeFeature === index ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                        <span className="material-symbols-outlined">{feat.icon}</span>
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold mb-2 ${activeFeature === index ? 'text-accent dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                          {feat.title}
                        </h4>
                        <p className={`font-light leading-relaxed ${activeFeature === index ? 'text-slate-600 dark:text-slate-400' : 'text-slate-500 dark:text-slate-500'}`}>
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Built for Engineers</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">Technical Specifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScanReveal delay={0.1}>
              <div className="glass-panel p-6 rounded-3xl h-full border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">folder_zip</span>
                <h4 className="font-bold text-lg text-accent dark:text-white mb-2">Supported Formats</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-light">
                  <li>• GeoJSON & KMZ</li>
                  <li>• GeoPackage (GPKG) & CSV</li>
                  <li>• ESRI Shapefiles (.shp)</li>
                  <li>• CAD Files (.dxf)</li>
                </ul>
              </div>
            </ScanReveal>

            <ScanReveal delay={0.2}>
              <div className="glass-panel p-6 rounded-3xl h-full border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">analytics</span>
                <h4 className="font-bold text-lg text-accent dark:text-white mb-2">Spatial Analytics</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-light">
                  <li>• AI SQL Query Engine</li>
                  <li>• Time Slider (4D Tracking)</li>
                  <li>• Graduated Symbology</li>
                  <li>• DAG Orchestration</li>
                </ul>
              </div>
            </ScanReveal>

            <ScanReveal delay={0.3}>
              <div className="glass-panel p-6 rounded-3xl h-full border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">architecture</span>
                <h4 className="font-bold text-lg text-accent dark:text-white mb-2">Engineering Tools</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-light">
                  <li>• Slope Profiler (Clinometer)</li>
                  <li>• Engineering Drawing Export</li>
                  <li>• Print-ready Map PDF Export</li>
                  <li>• Smart CRS Detection</li>
                </ul>
              </div>
            </ScanReveal>

            <ScanReveal delay={0.4}>
              <div className="glass-panel p-6 rounded-3xl h-full border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">groups</span>
                <h4 className="font-bold text-lg text-accent dark:text-white mb-2">Team Operations</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-light">
                  <li>• Performance Dashboards</li>
                  <li>• Local Peer-to-Peer Sync</li>
                  <li>• Live Leaderboards</li>
                  <li>• Role & Permission Control</li>
                </ul>
              </div>
            </ScanReveal>
          </div>
        </section>

        {/* Real-world Use Cases */}
        <section className="py-24 px-6 bg-accent dark:bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Industry Workflows</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight">Who Uses Mapplex?</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">corporate_fare</span>
                <h4 className="text-xl font-bold mb-3">Smart City Asset Management</h4>
                <p className="font-light text-slate-400 text-sm leading-relaxed">
                  Municipalities tracking street-light inspections by multiple contractors. Form Smart Logic auto-triggers cost formulas, while the Team Dashboard ranks top performers in real-time.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">storm</span>
                <h4 className="text-xl font-bold mb-3">Disaster Response & Recovery</h4>
                <p className="font-light text-slate-400 text-sm leading-relaxed">
                  Field teams assessing structural damage with zero cell connectivity. Workers use Local P2P Sync to share data over a portable router, and Geova AI calculates instant blast radii impacts.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">eco</span>
                <h4 className="text-xl font-bold mb-3">Environmental Audits</h4>
                <p className="font-light text-slate-400 text-sm leading-relaxed">
                  Agencies tagging wildlife sightings perfectly. Points are auto-calculated into political districts via Spatial Reference Layers, and AI runs anomaly detection on the final logs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To Guide Section - Streamlined */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Quick Start</h2>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-accent dark:text-white">
                From Field to Dashboard.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto text-2xl font-black">1</div>
                <h4 className="text-lg font-bold text-accent dark:text-white">Connect GPS</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light px-4">Pair high-precision external RTK receivers for robust real-time sub-meter tracking.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto text-2xl font-black">2</div>
                <h4 className="text-lg font-bold text-accent dark:text-white">Collect Offline</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light px-4">Capture data seamlessly using cached vector layers and custom forms, even without internet.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto text-2xl font-black">3</div>
                <h4 className="text-lg font-bold text-accent dark:text-white">Sync to Geova</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light px-4">When connectivity returns, push all edits to the central server for instant QA/QC review.</p>
              </div>
            </div>

            {/* Documentation CTA */}
            <div className="pt-16 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
              <h4 className="text-2xl font-bold text-accent dark:text-white mb-4">Need detailed instructions?</h4>
              <p className="text-slate-600 dark:text-slate-400 font-light mb-8 max-w-2xl mx-auto">
                Dive deep into the Mapplex ecosystem with our comprehensive documentation. Learn how to configure RTK profiles, set up custom vector layers, and manage offline synchronization workflows.
              </p>
              <a href="/docs/" className="inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl hover:-translate-y-1">
                <span className="material-symbols-outlined text-xl">menu_book</span> Read the User Guide
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MapplexAppPage;
