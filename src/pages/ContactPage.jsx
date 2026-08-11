import React, { useEffect, useState } from 'react';
import { ScanReveal } from '../components/animations/ScanReveal';
import { TopographicBackground } from '../components/animations/TopographicBackground';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Geova project inquiry from ${formData.name || 'website visitor'}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:info@geova.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 relative override-light">
      <SEO
        title="Contact Us — Request a Demo"
        description="Get in touch with Geova's engineering team. Request a demo, discuss your spatial data challenges, or explore enterprise deployment options for your organization."
        url="/contact"
        keywords="contact Geova, request demo, GIS consultation, enterprise deployment, spatial intelligence demo"
      />
      <TopographicBackground />
      <Header />
      
      <main id="main-content" className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <ScanReveal>
          <div className="mb-16 mt-8">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">
              <span className="text-primary block text-sm tracking-[0.5em] mb-4">Get in Touch</span>
              Let's Talk.
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              Have a project in mind? Need a spatial data consultation? Select the appropriate 
              channel below or send us a message directly.
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
                <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-slate-900 dark:text-white">Enterprise & Sales</h3>
                <p className="text-xs text-slate-500 mb-4 h-12 leading-relaxed">Platform licensing, custom deployments, and enterprise-scale GIS integration.</p>
                <div className="font-mono text-sm tracking-tight text-primary">sales@geova.net</div>
              </a>
            </ScanReveal>

            <ScanReveal delay={0.3}>
              <a href="mailto:info@geova.net" className="group block relative glass-panel border border-slate-200 dark:border-slate-800 p-8 hover:border-primary transition-colors cursor-pointer overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">hub</span>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-1 text-slate-900 dark:text-white">General Inquiries</h3>
                <p className="text-xs text-slate-500 mb-4 h-12 leading-relaxed">Media inquiries, career opportunities, and general questions.</p>
                <div className="font-mono text-sm tracking-tight text-primary">info@geova.net</div>
              </a>
            </ScanReveal>
          </div>

          {/* Interactive Form Terminal */}
          <div className="lg:col-span-8">
            <ScanReveal delay={0.4} className="h-full">
              <div className="glass-panel border border-slate-200 dark:border-slate-800 p-8 min-h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-xl flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-10 border-b border-slate-200 dark:border-slate-800 pb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(13,148,136,0.6)]" />
                    <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">Project Inquiry · Opens Your Email Client</span>
                 </div>
                 
                 <form className="space-y-8 flex-grow flex flex-col" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Your Name</label>
                          <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-primary outline-none transition-colors rounded overflow-hidden" placeholder="Full Name or Organization..." />
                       </div>
                       <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Email Address</label>
                          <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-primary outline-none transition-colors font-mono rounded overflow-hidden" placeholder="user@domain.com" required />
                       </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Your Message</label>
                      <textarea name="message" rows="6" value={formData.message} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm focus:border-primary outline-none transition-colors rounded resize-none" placeholder="Tell us about your project..." required></textarea>
                    </div>

                    <div className="mt-auto pt-6 flex justify-end">
                      <button type="submit" className="group relative bg-primary hover:bg-teal-500 text-white font-bold uppercase tracking-[0.2em] text-[10px] px-8 py-4 overflow-hidden transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                          Prepare Email <span className="material-symbols-outlined text-sm">send</span>
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
