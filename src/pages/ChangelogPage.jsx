import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import { ScanReveal } from '../components/animations/ScanReveal';
import { TopographicBackground } from '../components/animations/TopographicBackground';
import { MDXProvider } from '@mdx-js/react';

const mdxModules = import.meta.glob('../content/updates/*.mdx', { eager: true });

const updates = Object.values(mdxModules)
  .map((mod) => ({ meta: mod.meta || {}, Content: mod.default }))
  .sort((a, b) => new Date(b.meta.date || 0) - new Date(a.meta.date || 0));

const productFilters = ['All', 'Mapplex', 'Geova AI', 'Geova'];

const components = {
  h1: (props) => <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-5" {...props} />,
  h2: (props) => <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 mt-9 mb-4" {...props} />,
  h3: (props) => <h4 className="text-lg font-bold text-primary mt-7 mb-3 border-l-2 border-primary pl-4" {...props} />,
  p: (props) => <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2 mb-5" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 text-slate-600 dark:text-slate-300 space-y-2 mb-5" {...props} />,
  li: (props) => <li className="marker:text-primary" {...props} />,
  a: (props) => <a className="text-primary hover:text-teal-500 transition-colors underline decoration-primary/30 underline-offset-4" {...props} />,
  code: (props) => <code className="bg-slate-100 dark:bg-slate-950 text-teal-700 dark:text-teal-400 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200 dark:border-slate-800" {...props} />,
  pre: (props) => <pre className="bg-slate-950 overflow-x-auto p-6 rounded-xl text-sm text-slate-300 my-7 shadow-xl border border-slate-800" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-primary bg-primary/5 p-5 text-slate-700 dark:text-slate-300 my-6 rounded-r-xl" {...props} />,
};

const formatDate = (date) => new Date(`${date || '1970-01-01'}T12:00:00Z`).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

const ChangelogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredUpdates = useMemo(() => (
    activeFilter === 'All'
      ? updates
      : updates.filter(({ meta }) => meta.product === activeFilter || meta.tags?.includes(activeFilter))
  ), [activeFilter]);

  const latestDate = updates[0]?.meta?.date ? formatDate(updates[0].meta.date) : 'Updates in preparation';

  return (
    <div className="min-h-screen bg-background-light dark:bg-slate-950 font-display text-slate-800 dark:text-slate-200 relative overflow-hidden">
      <SEO
        title="Product Updates — Mapplex & Geova AI"
        description="Verified Geova product updates covering Mapplex field operations, interoperability, Geova AI, release readiness, security, and documentation."
        url="/updates"
        keywords="Mapplex release notes, Geova AI updates, GIS product updates, FileGDB, offline GIS, field data"
      />

      <TopographicBackground />
      <Header />

      <main id="main-content" className="relative z-10 pb-28 pt-36">
        <section className="px-6">
          <div className="mx-auto max-w-7xl">
            <ScanReveal>
              <div className="grid gap-10 border-b border-slate-200 pb-16 dark:border-slate-800 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <p className="section-kicker">Product updates</p>
                  <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-slate-900 dark:text-white md:text-7xl">
                    What changed, why it matters, and what is ready.
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    A practical record of Mapplex field workflows, Geova AI improvements, interoperability work, release readiness, and documentation—not a list of vague announcements.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="proof-card p-5">
                    <div className="text-3xl font-black text-accent dark:text-white">{updates.length}</div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Published notes</div>
                  </div>
                  <div className="proof-card p-5">
                    <div className="text-sm font-black leading-snug text-accent dark:text-white">{latestDate}</div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Latest update</div>
                  </div>
                </div>
              </div>
            </ScanReveal>
          </div>
        </section>

        <section className="px-6 py-10" aria-label="Filter product updates">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Filter</span>
            {productFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-black transition-colors ${activeFilter === filter
                  ? 'border-primary bg-primary text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="px-6" aria-live="polite">
          <div className="mx-auto max-w-7xl space-y-8">
            <MDXProvider components={components}>
              {filteredUpdates.map((update, idx) => {
                const { Content, meta } = update;
                const slug = meta.slug || `update-${idx + 1}`;

                return (
                  <ScanReveal key={slug} delay={0.05}>
                    <article id={slug} className="scroll-mt-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="grid lg:grid-cols-[260px_1fr]">
                        <header className="border-b border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-950/50 lg:border-b-0 lg:border-r">
                          <time dateTime={meta.date} className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                            {formatDate(meta.date)}
                          </time>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {meta.product && <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">{meta.product}</span>}
                            {meta.status && <span className="rounded-full border border-slate-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:border-slate-700 dark:text-slate-400">{meta.status}</span>}
                          </div>
                          {meta.version && <div className="mt-6 text-sm font-black text-accent dark:text-white">Release {meta.version}</div>}
                          {meta.summary && <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{meta.summary}</p>}
                          <div className="mt-6 flex flex-wrap gap-2">
                            {meta.tags?.map((tag) => (
                              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary">#{tag.replace(/\s+/g, '-')}</span>
                            ))}
                          </div>
                        </header>

                        <div className="p-7 md:p-10">
                          <div className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-2xl prose-img:shadow-xl">
                            <Content />
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScanReveal>
                );
              })}
            </MDXProvider>

            {filteredUpdates.length === 0 && (
              <div className="proof-card p-10 text-center">
                <span className="material-symbols-outlined text-4xl text-primary">event_note</span>
                <p className="mt-4 font-bold text-accent dark:text-white">No updates match this filter yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChangelogPage;
