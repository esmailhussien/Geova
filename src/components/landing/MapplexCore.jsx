import React from 'react';

const MapplexCore = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background-light dark:bg-slate-950" id="mapplex">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4">Core Engine</h2>
          <h3 className="text-5xl md:text-7xl font-black text-accent dark:text-white">MAPPLEX<sup className="text-2xl font-light">®</sup></h3>
          <p className="mt-6 text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">The first intelligent system designed to synchronize spatial data with real-time operational logic.</p>
        </div>
        <div className="w-full relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[800px] h-[800px] border border-primary rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[600px] h-[600px] border border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
          <div className="relative z-10 glass-panel border border-slate-200 dark:border-slate-800 rounded-[40px] p-4 md:p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="aspect-video bg-accent rounded-[32px] overflow-hidden relative">
              <img 
                className="w-full h-full object-cover opacity-60" 
                data-alt="Clean futuristic server room with blue lighting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM0bW_4J91JQ-o5iTsfTp2blHbREWlIA_cYlbaE9mwHPnWGY0yBxF_PXaN0oJ8dDS-qgFWJwTci1Hs3QANxT-aq7xjvw3psZDHUCcItYUSrvMnWMFEtPJzI0Gfdt80Yhh2jaoFM59daWtGppl-WVfNVaMI-nNCA3XVWPPb_a4_O4mqqlWOa_II-qglcsBgMik7TSy1Z_w_l3SKIbSt59IPo6KH1RJzO4X-GUCu_HuH1i0eRkFGBfMrW-t2yVTZhxiADgSuBaZyaLM"
                alt="Server Room"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-primary/40">
                  <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-left text-white/80">
                  <p className="text-[10px] uppercase font-bold tracking-widest">Interface v4.2</p>
                  <p className="text-xs">Real-time Node Visualization</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white text-[10px] font-mono">
                                                     SECURE_CONNECTION: ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mt-20 max-w-5xl">
          <div className="space-y-4">
            <div className="text-primary"><span className="material-symbols-outlined text-3xl">fluid</span></div>
            <h5 className="font-bold text-lg">Hyper-Spatial Logic</h5>
            <p className="text-sm text-slate-500">Understands 4D environments, accounting for temporal changes in spatial datasets.</p>
          </div>
          <div className="space-y-4">
            <div className="text-primary"><span className="material-symbols-outlined text-3xl">token</span></div>
            <h5 className="font-bold text-lg">Immutable Ledger</h5>
            <p className="text-sm text-slate-500">Every spatial adjustment is recorded on a secure, distributed system protocol.</p>
          </div>
          <div className="space-y-4">
            <div className="text-primary"><span className="material-symbols-outlined text-3xl">auto_fix_high</span></div>
            <h5 className="font-bold text-lg">Self-Correcting</h5>
            <p className="text-sm text-slate-500">Mapplex identifies data anomalies and resolves architectural conflicts autonomously.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapplexCore;
