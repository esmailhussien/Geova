import React, { useEffect } from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import SEO from '../components/seo/SEO';
import { ScanReveal } from '../components/animations/ScanReveal';
import { TopographicBackground } from '../components/animations/TopographicBackground';
import { MDXProvider } from '@mdx-js/react';

// Use Vite's glob import to gather all MDX files synchronously
const mdxModules = import.meta.glob('../content/updates/*.mdx', { eager: true });

const updates = Object.values(mdxModules)
  .map((mod) => ({
    meta: mod.meta || {},
    Content: mod.default,
  }))
  // Sort by date descending
  .sort((a, b) => new Date(b.meta.date || 0) - new Date(a.meta.date || 0));

// Custom components passed to MDX provider for high-end tech styling
const components = {
  h1: (props) => <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 mt-10 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold uppercase tracking-widest text-primary mt-8 mb-4 border-l-2 border-primary pl-4" {...props} />,
  p: (props) => <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2 mb-6 font-medium" {...props} />,
  li: (props) => <li className="marker:text-primary" {...props} />,
  a: (props) => <a className="text-primary hover:text-teal-400 transition-colors underline decoration-primary/30 underline-offset-4" {...props} />,
  code: (props) => {
    // Check if it's an inline code block or a pre-formatted block
    return (
      <code className="bg-slate-100 dark:bg-slate-900 text-teal-600 dark:text-teal-400 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200 dark:border-slate-800" {...props} />
    );
  },
  pre: (props) => (
    <pre className="bg-slate-900 overflow-x-auto p-6 rounded-lg text-sm text-slate-300 my-8 shadow-2xl border border-slate-800" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-slate-700 dark:text-slate-300 my-6" {...props} />
  ),
};

const ChangelogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 relative override-light overflow-hidden">
      <SEO 
        title="Industry Insights Newsletters" 
        description="Geova Changelog and Release Notes. Track the latest optimizations, AI features, and system deployments." 
      />
      
      {/* Background styling for technical aesthetic */}
      <TopographicBackground />
      <div className="absolute top-0 right-[-10%] w-[50%] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[40%] h-[600px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />

      <Header />
      
      <main className="relative z-10 pt-32 pb-32 max-w-4xl mx-auto px-6">
        <ScanReveal>
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">
              <span className="text-primary block text-sm tracking-[0.5em] mb-4">Product Updates</span>
              Industry Insights Newsletters
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Platform improvements, new analytics features, and field app release notes. See what's new in the Geova ecosystem.
            </p>
          </div>
        </ScanReveal>

        {/* Timeline View */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-0 space-y-24">
          
          <MDXProvider components={components}>
            {updates.map((update, idx) => {
              const { Content, meta } = update;
              
              // Formatting date
              const displayDate = new Date(meta.date || Date.now()).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
              });

              return (
                <ScanReveal key={idx} delay={0.1}>
                  <article className="relative pl-8 md:pl-12">
                    
                    {/* Timeline Node Indicator */}
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_theme(colors.primary.DEFAULT)] ring-4 ring-background-light dark:ring-slate-950" />
                    <div className="absolute left-[-12px] top-[-5px] w-[25px] h-[25px] border border-primary/30 rounded-full animate-ping" />

                    <header className="mb-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <time className="font-mono text-sm tracking-widest text-slate-400 uppercase">
                          {displayDate}
                        </time>
                        <div className="flex flex-wrap gap-2">
                          {meta.tags && meta.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded border border-primary/50 text-primary bg-primary/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </header>
                    
                    {/* MDX Content wrapper */}
                    <div className="prose prose-slate dark:prose-invert max-w-none 
                                    prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 
                                    prose-img:rounded-xl prose-img:shadow-2xl">
                      <Content />
                    </div>
                  </article>
                </ScanReveal>
              );
            })}
          </MDXProvider>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChangelogPage;
