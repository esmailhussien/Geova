import React from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    date: '12 Aug 2026',
    product: 'Mapplex',
    title: 'Release readiness and four-language stability',
    body: 'Privacy controls, account deletion, localization safeguards, and repeatable quality gates for Android and web.',
    href: '/updates#mapplex-release-readiness-language-stability',
  },
  {
    date: '11 Aug 2026',
    product: 'Geova AI',
    title: 'A more context-aware spatial field co-pilot',
    body: 'Project-wide query scope, lexicon and domain context, secure session recovery, and review-before-action boundaries.',
    href: '/updates#geova-ai-spatial-field-copilot',
  },
  {
    date: '08 Aug 2026',
    product: 'Mapplex',
    title: 'Field data and FileGDB interoperability',
    body: 'FileGDB conversion, media relationships, local transfer resilience, and safer synchronization for handover.',
    href: '/updates#mapplex-field-data-interoperability',
  },
];

const LatestUpdates = () => (
  <section className="border-y border-slate-200 bg-slate-50 px-6 py-24 dark:border-slate-800 dark:bg-slate-900/40" aria-labelledby="latest-updates-title">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="section-kicker">Latest product evidence</p>
          <h2 id="latest-updates-title" className="mt-4 text-4xl font-black tracking-tight text-accent dark:text-white md:text-5xl">See what changed—not only what we plan.</h2>
        </div>
        <Link to="/updates" className="inline-flex items-center gap-2 text-sm font-black text-primary transition-colors hover:text-accent dark:hover:text-white">
          View all updates
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {highlights.map((update) => (
          <Link key={update.href} to={update.href} className="proof-card group flex h-full flex-col p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary">{update.product}</span>
              <time className="text-xs font-bold text-slate-400">{update.date}</time>
            </div>
            <h3 className="mt-7 text-xl font-black leading-snug text-accent transition-colors group-hover:text-primary dark:text-white">{update.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{update.body}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-primary">
              Read update
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default LatestUpdates;
