import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';

const NotFoundPage = () => (
  <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col">
    <SEO title="Page Not Found" description="The requested Geova page could not be found." noindex />
    <Header />
    <main id="main-content" className="flex-1 px-6 pt-40 pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900 md:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-4xl">wrong_location</span>
        </div>
        <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-accent dark:text-white">This location is not on the map.</h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-500 dark:text-slate-400">
          The page may have moved. Return to the Geova overview or explore Mapplex field operations.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary dark:bg-white dark:text-accent dark:hover:bg-primary dark:hover:text-white">Return home</Link>
          <Link to="/mapplex" className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-accent transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:text-white">Explore Mapplex</Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFoundPage;
