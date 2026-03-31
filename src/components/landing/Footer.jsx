import React from 'react';
import logo from '../../assets/GEOVA.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark py-20 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link to="/" className="flex items-center gap-0">
            <img alt="Geova Logo" className="w-auto object-contain h-16 md:h-20 scale-[1.1] md:scale-[1.2] origin-left" src={logo} />
          </Link>
          <p className="text-xs text-slate-500 font-medium leading-loose uppercase tracking-widest">
            Designing the logic of the physical world. Precision. Intelligence. Future.
          </p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">hub</span></a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Navigation</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Solutions</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Mapplex Engine</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Infrastructure</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Resources</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Manifesto</a></li>
            <li><a className="hover:text-primary transition-colors" href="/docs/">Documentation</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">System Status</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Global Map</a></li>
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
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent dark:text-white">Intelligence Update</h4>
          <p className="text-sm text-slate-500 font-light">Join 12,000+ infrastructure specialists receiving our bi-monthly logic updates.</p>
          <form className="flex">
            <input
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-l-lg px-4 py-3 w-full text-xs focus:ring-1 focus:ring-primary outline-none"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary text-white px-4 py-3 rounded-r-lg font-bold text-xs uppercase hover:bg-teal-700 transition-colors" type="submit">Join</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <p>© 2024 GEOVA TECHNOLOGIES. ALL SYSTEMS NOMINAL.</p>
        <div className="flex gap-8">
          <Link className="hover:text-primary" to="/privacy">Privacy Protocol</Link>
          <a className="hover:text-primary" href="#">Terms of Access</a>
          <a className="hover:text-primary" href="#">Legal Framework</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
