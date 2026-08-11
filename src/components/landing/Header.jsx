import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../common/MagneticButton';
import logo from '../../assets/GEOVA.png';
import { Link } from 'react-router-dom';

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return false;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return savedTheme === 'dark' || (!savedTheme && prefersDark);
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(getInitialDarkMode);
  const [expandedMenu, setExpandedMenu] = useState(null); // Tracks open accordion on mobile

  // Physics scroll triggers for Smart Island Navigation
  const { scrollY } = useScroll();
  const navLeftRight = useTransform(scrollY, [0, 80], ['0px', '24px']);
  const navTop = useTransform(scrollY, [0, 80], ['0px', '24px']);
  const navRadius = useTransform(scrollY, [0, 80], ['0px', '9999px']);
  const navShadow = useTransform(scrollY, [0, 80], ['0px 0px 0px rgba(0,0,0,0)', '0px 20px 40px -10px rgba(0,0,0,0.1)']);

  // Keep the document theme aligned with the selected navigation state.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setExpandedMenu(null); // Reset accordions on close
  };

  const toggleAccordion = (menu) => {
    if (expandedMenu === menu) setExpandedMenu(null);
    else setExpandedMenu(menu);
  };

  return (
    <>
    <a href="#main-content" className="fixed left-4 top-3 z-[200] -translate-y-24 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-white shadow-xl transition-transform focus:translate-y-0 dark:bg-white dark:text-accent">
      Skip to content
    </a>
    <motion.header 
      style={{
        left: navLeftRight,
        right: navLeftRight,
        top: navTop,
        borderRadius: navRadius,
        boxShadow: navShadow,
        maxWidth: '1280px',
        margin: '0 auto', // Center it on 4k screens
      }}
      className="fixed z-[100] glass-panel border border-slate-200/50 dark:border-slate-800/50 transition-colors bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl"
    >
      <div className="px-6 h-20 md:h-24 flex items-center justify-between gap-1 w-full mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img alt="Geova Logo" className="w-auto h-12 md:h-16 scale-[2.2] origin-left object-contain" src={logo} />
        </Link>

        {/* Desktop Navigation (Information Architecture Tier 1) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9">

          {/* Platform Dropdown */}
          <div className="relative group">
            <Link to="/platform" className="flex items-center gap-1 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
              Platform <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:-rotate-180">keyboard_arrow_down</span>
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
              <div className="glass-panel bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl p-3 flex flex-col gap-1">
                <Link to="/platform" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">widgets</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Spatial Platform</div>
                    <div className="text-[10px] text-slate-500">GIS systems and tools</div>
                  </div>
                </Link>
                <Link to="/platform" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">psychology</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Geova AI</div>
                    <div className="text-[10px] text-slate-500">Spatial intelligence layer</div>
                  </div>
                </Link>
                <Link to="/platform" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">dashboard</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">System Templates</div>
                    <div className="text-[10px] text-slate-500">Project-specific SaaS</div>
                  </div>
                </Link>
                <Link to="/platform" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">integration_instructions</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Integrations</div>
                    <div className="text-[10px] text-slate-500">Mapplex, APIs, and workflows</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/mapplex" className="text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
            Mapplex
          </Link>
          
          <Link to="/consulting" className="text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
            Consulting
          </Link>
          
          <Link to="/about" className="text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
            About
          </Link>

          <Link to="/updates" className="text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
            Updates
          </Link>
          
          <a href="/docs/" className="text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
            Docs
          </a>

        </nav>

        {/* Action Buttons (Right Constraint) */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle Button (Desktop & Mobile) */}
          <button
            onClick={toggleTheme}
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors p-2 rounded-full"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <div className="hidden lg:block">
            <MagneticButton>
              <Link to="/contact" className="inline-block relative bg-accent dark:bg-white text-white dark:text-accent px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#ff751f] dark:hover:bg-[#ff751f] hover:text-white dark:hover:text-white transition-colors duration-300 shadow-xl hover:shadow-[0_0_20px_#ff751f]">
                Request a Demo
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Hover Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-800 dark:text-white p-2"
              aria-label="Toggle Mobile Menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Accordion State */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] mt-4 left-0 w-full glass-panel border border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-y-auto max-h-[85vh] rounded-3xl z-40">
          <nav className="flex flex-col px-6 py-6 gap-2">
            {/* Same mobile code structure below... */}


            {/* Platform Mobile Accordion */}
            <div className="flex flex-col border-b border-slate-200/50 dark:border-slate-800/80 pb-2">
              <button onClick={() => toggleAccordion('platform')} className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full">
                Platform
                <span className={`material-symbols-outlined transition-transform duration-300 ${expandedMenu === 'platform' ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMenu === 'platform' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col pl-4 gap-5 py-4 border-l-2 border-primary/20 ml-2">
                  <Link onClick={toggleMobileMenu} to="/platform" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">widgets</span> Spatial Platform
                  </Link>
                  <Link onClick={toggleMobileMenu} to="/platform" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">psychology</span> Geova AI
                  </Link>
                  <Link onClick={toggleMobileMenu} to="/platform" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">dashboard</span> System Templates
                  </Link>
                  <Link onClick={toggleMobileMenu} to="/platform" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">integration_instructions</span> Integrations
                  </Link>
                </div>
              </div>
            </div>

            <Link onClick={toggleMobileMenu} to="/mapplex" className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full border-b border-slate-200/50 dark:border-slate-800/80">
              Mapplex
            </Link>

            <Link onClick={toggleMobileMenu} to="/consulting" className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full border-b border-slate-200/50 dark:border-slate-800/80">
              Consulting
            </Link>

            <Link onClick={toggleMobileMenu} to="/about" className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full border-b border-slate-200/50 dark:border-slate-800/80">
              About
            </Link>

            <Link onClick={toggleMobileMenu} to="/updates" className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full border-b border-slate-200/50 dark:border-slate-800/80">
              Updates
            </Link>
            
            <a onClick={toggleMobileMenu} href="/docs/" className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full border-b border-slate-200/50 dark:border-slate-800/80">
              Docs
            </a>

            {/* Mobile CTA */}
            <div className="pt-6 pb-2">
              <Link to="/contact" className="block bg-accent dark:bg-white text-center text-white dark:text-accent w-full px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl border border-transparent dark:border-slate-800" onClick={toggleMobileMenu}>
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
    </>
  );
};

export default Header;
