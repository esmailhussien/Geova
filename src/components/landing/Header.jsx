import React, { useState, useEffect } from 'react';
import logo from '../../assets/GEOVA.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null); // Tracks open accordion on mobile

  // Initialize theme on mount
  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
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
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between gap-1">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img alt="Geova Logo" className="w-auto h-12 md:h-16 scale-[1.3] md:scale-[1.6] origin-left object-contain" src={logo} />
        </Link>

        {/* Desktop Navigation (Information Architecture Tier 1) */}
        <nav className="hidden md:flex items-center gap-10">

          {/* Products Mega-Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
              Products <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:-rotate-180">keyboard_arrow_down</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[480px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
              <div className="glass-panel bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl p-4 grid grid-cols-2 gap-4">

                {/* Premium Component: Mapplex */}
                <a href="/#mapplex" className="group/item flex flex-col p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary text-2xl group-hover/item:scale-110 transition-transform">public</span>
                    <span className="font-bold text-accent dark:text-white group-hover/item:text-primary tracking-wide">Mapplex</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">The Flagship Mobile Engine. Offline RTK GNSS field data collection.</p>
                </a>

                {/* Premium Component: Geova AI */}
                <Link to="/ai" className="group/item flex flex-col p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary text-2xl group-hover/item:scale-110 transition-transform">psychology</span>
                    <span className="font-bold text-accent dark:text-white group-hover/item:text-primary tracking-wide">Geova AI</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">Spatial Intelligence Core. Natural language analytics & processing.</p>
                </Link>

                {/* Standard Link: Solutions */}
                <a href="/#solutions" className="group/item flex flex-col p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-primary/20 col-span-2 bg-slate-50/50 dark:bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined text-primary text-xl">view_comfy_alt</span>
                    <span className="font-bold text-accent dark:text-white group-hover/item:text-primary tracking-wide">Enterprise Solutions</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light ml-8">Excavation, Traffic, and Infrastructure analytical frameworks targeted at municipalities.</p>
                </a>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
              Resources <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:-rotate-180">keyboard_arrow_down</span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
              <div className="glass-panel bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl p-3 flex flex-col gap-1">

                <a href="/docs/" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Documentation</div>
                    <div className="text-[10px] text-slate-500">Technical API & Guides</div>
                  </div>
                </a>

                <Link to="/updates" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Updates</div>
                    <div className="text-[10px] text-slate-500">Intelligence Timeline</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-widest py-6">
              Company <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:-rotate-180">keyboard_arrow_down</span>
            </button>
            <div className="absolute right-0 top-full w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
              <div className="glass-panel bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl p-3 flex flex-col gap-1">

                <a href="/#about" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">domain</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">About</div>
                    <div className="text-[10px] text-slate-500">Our Origins</div>
                  </div>
                </a>

                <a href="/#vision" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Vision</div>
                    <div className="text-[10px] text-slate-500">The Manifesto</div>
                  </div>
                </a>

                <Link to="/contact" className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[18px]">contact_support</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-accent dark:text-white group-hover/item:text-primary">Contact</div>
                    <div className="text-[10px] text-slate-500">Reach the Engineers</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
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

          {/* Primary CTA */}
          <Link to="/mapplex" className="hidden md:block">
            <button className="bg-accent dark:bg-white text-white dark:text-accent px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl">
              Discover Mapplex
            </button>
          </Link>

          {/* Mobile Hover Trigger */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden absolute top-[100%] left-0 w-full glass-panel border-b border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-y-auto max-h-[85vh]">
          <nav className="flex flex-col px-6 py-6 gap-2">

            {/* Products Mobile Accordion */}
            <div className="flex flex-col border-b border-slate-200/50 dark:border-slate-800/80 pb-2">
              <button onClick={() => toggleAccordion('products')} className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full">
                Products
                <span className={`material-symbols-outlined transition-transform duration-300 ${expandedMenu === 'products' ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMenu === 'products' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col pl-4 gap-5 py-4 border-l-2 border-primary/20 ml-2">
                  <a onClick={toggleMobileMenu} href="/#mapplex" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">public</span> Mapplex Mobile Engine
                  </a>
                  <Link onClick={toggleMobileMenu} to="/ai" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">psychology</span> Geova AI Core
                  </Link>
                  <a onClick={toggleMobileMenu} href="/#solutions" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">view_comfy_alt</span> Enterprise Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* Resources Mobile Accordion */}
            <div className="flex flex-col border-b border-slate-200/50 dark:border-slate-800/80 pb-2">
              <button onClick={() => toggleAccordion('resources')} className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full">
                Resources
                <span className={`material-symbols-outlined transition-transform duration-300 ${expandedMenu === 'resources' ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMenu === 'resources' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col pl-4 gap-5 py-4 border-l-2 border-primary/20 ml-2">
                  <a onClick={toggleMobileMenu} href="/docs/" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">menu_book</span> Documentation
                  </a>
                  <Link onClick={toggleMobileMenu} to="/updates" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">campaign</span> Intelligence Updates
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Mobile Accordion */}
            <div className="flex flex-col border-b border-slate-200/50 dark:border-slate-800/80 pb-2">
              <button onClick={() => toggleAccordion('company')} className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-accent dark:text-white py-4 w-full">
                Company
                <span className={`material-symbols-outlined transition-transform duration-300 ${expandedMenu === 'company' ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMenu === 'company' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col pl-4 gap-5 py-4 border-l-2 border-primary/20 ml-2">
                  <a onClick={toggleMobileMenu} href="/#about" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">domain</span> Origin Story
                  </a>
                  <a onClick={toggleMobileMenu} href="/#vision" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">visibility</span> The Manifesto
                  </a>
                  <Link onClick={toggleMobileMenu} to="/contact" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">contact_support</span> Contact Engineers
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 pb-2">
              <Link to="/mapplex" className="w-full" onClick={toggleMobileMenu}>
                <button className="bg-accent dark:bg-white text-white dark:text-accent w-full px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl border border-transparent dark:border-slate-800">
                  Discover Mapplex
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
