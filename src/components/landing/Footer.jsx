import React from 'react';
import logo from '../../assets/GEOVA.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark py-20 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link to="/" className="flex items-center gap-0">
            <img alt="Geova Logo" className="w-auto object-contain h-16 md:h-20 scale-[1.6] md:scale-[2.0] origin-left" src={logo} />
          </Link>
          <p className="text-xs text-slate-500 font-medium leading-loose uppercase tracking-widest">
            Intelligent Infrastructure. Built by Engineers, for Engineers.
          </p>
          <div className="flex gap-4">
            <Link className="text-slate-400 hover:text-primary transition-colors" to="/contact" aria-label="Contact Geova"><span className="material-symbols-outlined">contact_mail</span></Link>
            <a className="text-slate-400 hover:text-primary transition-colors" href="mailto:info@geova.net" aria-label="Email Geova"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="/docs/" aria-label="Open documentation"><span className="material-symbols-outlined">menu_book</span></a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Navigation</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <li><Link className="hover:text-primary transition-colors" to="/platform">Platform</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/mapplex">Mapplex</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/consulting">Consulting</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Resources</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="/docs/">Documentation</a></li>
            <li><Link className="hover:text-primary transition-colors" to="/guide">User Manual</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/updates">Updates</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Contact Us</h4>
          <ul className="space-y-4 text-xs font-bold tracking-widest text-slate-500">
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="mailto:support@geova.net">
                <span className="material-symbols-outlined text-[16px]">support_agent</span> support@geova.net
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="mailto:info@geova.net">
                <span className="material-symbols-outlined text-[16px]">info</span> info@geova.net
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="mailto:sales@geova.net">
                <span className="material-symbols-outlined text-[16px]">storefront</span> sales@geova.net
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Product Updates</h4>
          <p className="text-sm text-slate-500 font-light">Read release notes and practical field workflow updates from the Geova team.</p>
          <Link to="/updates" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-teal-700">
            View Updates
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <p>© 2026 Geova Technologies. All rights reserved.</p>
        <div className="flex gap-8">
          <Link className="hover:text-primary" to="/privacy">Privacy Policy</Link>
          <a className="hover:text-primary" href="/docs/">Documentation</a>
          <Link className="hover:text-primary" to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
