import React from 'react';
import { Link } from 'react-router-dom';

const ThreePillars = () => {
  const pillars = [
    {
      icon: 'psychology',
      title: 'Geova AI',
      eyebrow: 'The intelligence layer',
      body: 'The shared brain that supports spatial reasoning, analysis, QA/QC, reporting, scenario evaluation, and recommendations across every Geova product or client system.',
      link: '/platform',
      cta: 'Explore Geova AI',
    },
    {
      icon: 'public',
      title: 'Mapplex',
      eyebrow: 'First technical arm',
      body: 'Mobile GIS for fieldwork: offline and online collection, forms, photos, sync, spatial operations, review workflows, and communication between field and office teams.',
      link: '/mapplex',
      cta: 'Discover Mapplex',
    },
    {
      icon: 'deployed_code',
      title: 'Custom Spatial Systems',
      eyebrow: 'Project-specific SaaS',
      body: 'Configurable templates for companies and authorities, built around each project idea, data model, operational variables, parameters, dashboards, and decision workflows.',
      link: '/contact',
      cta: 'Discuss a system',
    },
    {
      icon: 'engineering',
      title: 'Consulting',
      eyebrow: 'GIS and engineering expertise',
      body: 'Technical support for infrastructure, environmental studies, roads, planning, asset inventories, GIS foundations, implementation, training, and spatial data governance.',
      link: '/consulting',
      cta: 'View services',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0f1115]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-4 mb-14">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.24em]">Geova Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-accent dark:text-white">
            One spatial intelligence company. Multiple technical arms.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Geova is designed as a SaaS ecosystem: a shared intelligence layer, a field application, custom spatial systems for specific projects, and consulting that turns GIS foundations into working technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-7 rounded-lg flex flex-col h-full hover:border-primary/40 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-accent dark:text-white mb-2">{pillar.title}</h4>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{pillar.eyebrow}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-6">
                {pillar.body}
              </p>
              <Link to={pillar.link} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent dark:hover:text-white transition-colors">
                {pillar.cta} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
