import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-1">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img alt="Geova Logo" className="w-auto h-9 md:h-10 object-contain" src={logo} />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-accent dark:text-white uppercase -ml-1 mt-1 md:mt-1.5">EOVA</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest" href="/#about">About</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest" href="/#solutions">Solutions</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest text-primary" href="/#mapplex">Mapplex</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest" href="/#vision">Vision</a>
          <Link className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest text-primary" to="/ai">Geova AI</Link>
        </nav>

        {/* Action Buttons */}
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

          <Link to="/mapplex" className="hidden md:block">
            <button className="bg-accent dark:bg-white text-white dark:text-accent px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
              Discover Mapplex App
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass-panel border-b border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-900/95 shadow-xl backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-8 gap-6">
            <a onClick={toggleMobileMenu} className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" href="/#about">About</a>
            <a onClick={toggleMobileMenu} className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" href="/#solutions">Solutions</a>
            <a onClick={toggleMobileMenu} className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest text-primary" href="/#mapplex">Mapplex</a>
            <a onClick={toggleMobileMenu} className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" href="/#vision">Vision</a>
            <Link onClick={toggleMobileMenu} className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest text-primary" to="/ai">Geova AI</Link>
            <hr className="border-slate-200 dark:border-slate-800" />
            <Link to="/mapplex" className="w-full" onClick={toggleMobileMenu}>
              <button className="bg-accent dark:bg-white text-white dark:text-accent w-full px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
                Discover Mapplex App
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
