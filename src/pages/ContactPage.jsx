import React, { useEffect } from 'react';
import { ScanReveal } from '../components/animations/ScanReveal';
import { TopographicBackground } from '../components/animations/TopographicBackground';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';

const ContactPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 relative override-light">
      <SEO title="Command Center (Contact)" description="Establish communication with Geova's core routing systems for mapping intelligence and enterprise deployments." />
      <TopographicBackground />
      <Header />
      
      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <ScanReveal>
          <div className="mb-16 mt-8">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">
              <span className="text-primary block text-sm tracking-[0.5em] mb-4">Command Center</span>
              Establish Link.
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              Initiate communication with our core routing systems. Select your appropriate 
              channel below for mapping intelligence, enterprise deployments, or infrastructure logic support.
            </p>
          </div>
        </ScanReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Routing Nodes (Email Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <ScanReveal delay={0.1}>
              <a href="mailto:support@geova.net" className="group block relative glass-panel border border-slate-200 dark:border-slate-800 p-8 hover:border-primary transition-colors cursor-pointer overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">support_agent</span>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-slate-900 dark:text-white">Technical Support</h3>
                <p className="text-xs text-slate-500 mb-4 h-12 leading-relaxed">Mapplex platform diagnostics, integration pathways, and active deployment monitoring.</p>
                <div className="font-mono text-sm tracking-tight text-primary">support@geova.net</div>
              </a>
            </ScanReveal>

            <ScanReveal delay={0.2}>
              <a href="mailto:sales@geova.net" className="group block relative glass-panel border border-slate-200 dark:border-slate-800 p-8 hover:border-primary transition-colors cursor-pointer overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">account_tree</span>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-slate-900 dark:text-white">Enterprise Scalability</h3>
                <p className="text-xs text-slate-500 mb-4 h-12 leading-relaxed">Consult with architecture teams regarding custom nodes, AI layers, and regional scaling.</p>
                <div className="font-mono text-sm tracking-tight text-primary">sales@geova.net</div>
              </a>
            </ScanReveal>

            <ScanReveal delay={0.3}>
              <a href="mailto:info@geova.net" className="group block relative glass-panel border border-slate-200 dark:border-slate-800 p-8 hover:border-primary transition-colors cursor-pointer overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">hub</span>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-slate-900 dark:text-white">General Inquiries</h3>
                <p className="text-xs text-slate-500 mb-4 h-12 leading-relaxed">Media interactions, career topology, and standard protocol queries.</p>
                <div className="font-mono text-sm tracking-tight text-primary">info@geova.net</div>
              </a>
            </ScanReveal>
          </div>

          {/* Interactive Form Terminal */}
          <div className="lg:col-span-8">
            <ScanReveal delay={0.4} className="h-full">
              <div className="glass-panel border border-slate-200 dark:border-slate-800 p-8 min-h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-xl flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-10 border-b border-slate-200 dark:border-slate-800 pb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                    <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">Secure Transmission Protocol / Awaiting Input</span>
                 </div>
                 
                 <form className="space-y-8 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Entity Identification</label>
                          <input type="text" className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-primary outline-none transition-colors font-mono rounded overflow-hidden" placeholder="Full Name or Organization..." />
                       </div>
                       <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Return Vector (Required)</label>
                          <input type="email" className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-primary outline-none transition-colors font-mono rounded overflow-hidden" placeholder="user@domain.com" required />
                       </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Data Payload</label>
                      <textarea rows="6" className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-primary outline-none transition-colors font-mono rounded resize-none" placeholder="Enter transmission data..."></textarea>
                    </div>

                    <div className="mt-auto pt-6 flex justify-end">
                      <button type="button" className="group relative bg-primary hover:bg-teal-500 text-white font-bold uppercase tracking-[0.2em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                          Execute Block <span className="material-symbols-outlined text-sm">send</span>
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </div>
                 </form>
              </div>
            </ScanReveal>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
