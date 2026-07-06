import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const modules = [
  {
    id: '00',
    title: 'Getting Started',
    subtitle: 'Install & Sign In',
    desc: 'Installing the PWA, signing in with Email / Guest / Pending, multi-device limits, and creating your first workspace.',
    icon: 'rocket_launch',
    href: '/docs/guide/00-getting-started',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: '01',
    title: 'Project Dashboard',
    subtitle: 'Create & Manage Projects',
    desc: 'Creating projects, hosted vs. local storage, sync status, storage usage, and the AI-assisted SQL query engine.',
    icon: 'dashboard',
    href: '/docs/guide/01-dashboard-view',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: '02',
    title: 'Layers & Symbology',
    subtitle: 'Organize & Style',
    desc: 'Geometry types, styling, categorical and graduated classification, completion tracking, and the Data Dictionary.',
    icon: 'layers',
    href: '/docs/guide/02-layers-view',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: '03',
    title: 'Map View',
    subtitle: 'Collect & Navigate',
    desc: 'Drawing tools, GPS tracking, auto-track, offline tiles, measurements, split and merge, sketch mode.',
    icon: 'map',
    href: '/docs/guide/03-map-view',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: '04',
    title: 'Forms & Smart Logic',
    subtitle: 'Data Entry Design',
    desc: '10 field types, spatial auto-fill, schema import, Lexicon picklists, and AI-assisted conditional rules.',
    icon: 'assignment',
    href: '/docs/guide/04-forms-view',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: '05',
    title: 'Data & Sync',
    subtitle: 'Import, Export & Share',
    desc: 'Export formats, file signature detection, spreadsheet wizard, P2P sync, and reference zones.',
    icon: 'cloud_sync',
    href: '/docs/guide/05-data-view',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    id: '06',
    title: 'Geova AI Chat',
    subtitle: 'Spatial Intelligence',
    desc: 'Natural language queries, prompt cookbook, @mention layers, display modes, export and commit results.',
    icon: 'psychology',
    href: '/docs/guide/06-geova-ai-chat',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    id: '07',
    title: 'Team & Collaboration',
    subtitle: 'Manage Your Crew',
    desc: 'Performance KPIs, sparkline charts, leaderboards, member roster, invite system, and role management.',
    icon: 'groups',
    href: '/docs/guide/07-team-view',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: '08',
    title: 'Settings & Account',
    subtitle: 'Configure Everything',
    desc: '15 app settings, device management, workspace switcher, offline maps, subscriptions and entitlements.',
    icon: 'settings',
    href: '/docs/guide/08-settings',
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: '09',
    title: 'Slope Profiler',
    subtitle: 'Terrain Measurement',
    desc: 'Digital clinometer HUD, cross-section profiles, calibration, and severity-coded slope readings.',
    icon: 'terrain',
    href: '/docs/guide/09-slope-profiler',
    color: 'from-lime-500 to-green-600',
  },
  {
    id: '10',
    title: 'Map PDF Export',
    subtitle: 'Print-Ready Maps',
    desc: 'Page layout, title and notes, legend with classification expansion, and print-quality generation.',
    icon: 'picture_as_pdf',
    href: '/docs/guide/10-map-pdf-export',
    color: 'from-red-500 to-rose-600',
  },
  {
    id: '11',
    title: 'Troubleshooting',
    subtitle: 'Common Issues & FAQ',
    desc: 'GPS tips, import/export debugging, AI accuracy, sync problems, and performance optimization.',
    icon: 'troubleshoot',
    href: '/docs/guide/11-troubleshooting',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: '12',
    title: 'CAD Manager',
    subtitle: 'DXF Import & Export',
    desc: 'Import DXF files with CRS suggestions, export features as DXF, UTM zone handling. Pro feature.',
    icon: 'architecture',
    href: '/docs/guide/12-cad-manager',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: '13',
    title: 'Engineering Drawing',
    subtitle: 'Technical Schematics',
    desc: 'Dimension lines, vertex labels, angles, area and perimeter summaries appended to your Map PDF.',
    icon: 'engineering',
    href: '/docs/guide/13-engineering-drawing-export',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: '14',
    title: 'SHP Manager',
    subtitle: 'Shapefile Workflows',
    desc: 'Import and export ESRI Shapefiles with auto CRS from .prj, multi-SHP ZIP, and DBF schema preview.',
    icon: 'database',
    href: '/docs/guide/14-shp-manager',
    color: 'from-emerald-500 to-cyan-600',
  },
  {
    id: '15',
    title: 'Capability Reference',
    subtitle: 'Feature Requirements',
    desc: 'Feature requirements matrix, role/plan boundaries, offline checklist, and full format support table.',
    icon: 'fact_check',
    href: '/docs/guide/15-capability-reference',
    color: 'from-blue-500 to-sky-600',
  },
  {
    id: '16',
    title: 'Sample Project',
    subtitle: 'Municipal Inspection',
    desc: 'End-to-end setup, field collection, QA, AI review, export, and handoff workflow example.',
    icon: 'lightbulb',
    href: '/docs/guide/16-sample-project-municipal-asset-inspection',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: '17',
    title: 'Glossary',
    subtitle: 'Key Concepts',
    desc: 'Plain-language definitions for Mapplex, GIS, form, CRS, sync, and AI terminology.',
    icon: 'menu_book',
    href: '/docs/guide/17-glossary-key-concepts',
    color: 'from-purple-500 to-indigo-600',
  },
];

const quickStart = [
  { task: 'Install Mapplex on my phone', link: '/docs/guide/00-getting-started', module: '00' },
  { task: 'Create a new map project', link: '/docs/guide/01-dashboard-view', module: '01' },
  { task: 'Draw a point / line / polygon', link: '/docs/guide/03-map-view', module: '03' },
  { task: 'Download maps for offline use', link: '/docs/guide/08-settings', module: '08' },
  { task: 'Import a GeoJSON / KMZ file', link: '/docs/guide/05-data-view', module: '05' },
  { task: 'Import a CSV spreadsheet', link: '/docs/guide/05-data-view', module: '05' },
  { task: 'Build a data collection form', link: '/docs/guide/04-forms-view', module: '04' },
  { task: 'Color-code my map by data', link: '/docs/guide/02-layers-view', module: '02' },
  { task: 'Ask the AI a spatial question', link: '/docs/guide/06-geova-ai-chat', module: '06' },
  { task: 'Export a PDF map', link: '/docs/guide/10-map-pdf-export', module: '10' },
  { task: 'Import a CAD / DXF drawing', link: '/docs/guide/12-cad-manager', module: '12' },
  { task: 'Import a Shapefile (.shp)', link: '/docs/guide/14-shp-manager', module: '14' },
  { task: 'Invite a team member', link: '/docs/guide/07-team-view', module: '07' },
  { task: 'Measure terrain slope', link: '/docs/guide/09-slope-profiler', module: '09' },
  { task: 'Follow a sample project', link: '/docs/guide/16-sample-project-municipal-asset-inspection', module: '16' },
  { task: 'Understand a GIS term', link: '/docs/guide/17-glossary-key-concepts', module: '17' },
];

const roles = [
  {
    role: 'Field Collector',
    icon: 'explore',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    learns: 'Collect points, lines, polygons. Complete forms, attach photos, and work offline.',
    modules: ['00', '03', '04', '05'],
  },
  {
    role: 'Supervisor / Editor',
    icon: 'edit_note',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    learns: 'Review submissions, correct attributes, edit geometries, and export reports.',
    modules: ['01', '02', '07', '10'],
  },
  {
    role: 'GIS Analyst',
    icon: 'analytics',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    learns: 'Import GIS files, manage CRS, classify layers, and run spatial queries.',
    modules: ['02', '05', '06', '12', '14'],
  },
  {
    role: 'Admin / Manager',
    icon: 'admin_panel_settings',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    learns: 'Manage workspaces, roles, subscriptions, devices, and team visibility.',
    modules: ['07', '08', '15'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const UserManualPage = () => {
  const [search, setSearch] = useState('');

  const filtered = modules.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      m.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <Header />

      <main className="flex-grow pt-20 md:pt-24">
        {/* ─── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 py-20 md:py-28 text-center border-b border-slate-200/50 dark:border-slate-800/50">
          {/* Gradient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 dark:bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em]">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              User Manual
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-accent dark:text-white">
              Mapplex User Guide
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Everything you need to deploy, configure, and master Mapplex — from first login
              to advanced spatial analytics powered by Geova AI.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="/docs/guide/README"
                className="inline-flex items-center gap-2 bg-accent dark:bg-white text-white dark:text-accent px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all shadow-lg hover:shadow-primary/30"
              >
                <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                Read Full Guide
              </a>
              <a
                href="#quick-start"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                Quick Start
              </a>
            </div>
          </motion.div>
        </section>

        {/* ─── Role Learning Paths ───────────────────────────────── */}
        <section className="px-6 py-16 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-accent dark:text-white text-center mb-10">
              Find Your Path
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {roles.map((r) => (
                <div
                  key={r.role}
                  className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-3"
                >
                  <div className={`w-10 h-10 rounded-xl ${r.bg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-[22px] ${r.color}`}>{r.icon}</span>
                  </div>
                  <h3 className="font-bold text-accent dark:text-white text-sm">{r.role}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{r.learns}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {r.modules.map((mid) => (
                      <a
                        key={mid}
                        href={modules.find((m) => m.id === mid)?.href}
                        className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-md text-[10px] font-bold hover:bg-primary/20 transition-colors"
                      >
                        {mid}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Module Grid ───────────────────────────────────────── */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-accent dark:text-white">
                All Modules
              </h2>
              {/* Search bar */}
              <div className="relative w-full md:w-80">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search modules…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-sm text-accent dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {filtered.map((m) => (
                <motion.a
                  key={m.id}
                  href={m.href}
                  variants={cardVariants}
                  className="group glass-panel rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-all overflow-hidden"
                >
                  {/* Gradient header strip */}
                  <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-sm`}>
                          <span className="material-symbols-outlined text-white text-[20px]">{m.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-accent dark:text-white group-hover:text-primary transition-colors text-sm leading-tight">
                            {m.title}
                          </h3>
                          <p className="text-[11px] text-slate-400 font-medium">{m.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                        {m.id}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {m.desc}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all">
                      Read module
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-700">search_off</span>
                <p className="text-slate-500 mt-3 text-sm">No modules match your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* ─── Quick Start Cheat Sheet ───────────────────────────── */}
        <section id="quick-start" className="px-6 py-16 bg-slate-50/50 dark:bg-slate-900/30 border-t border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                Cheat Sheet
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-accent dark:text-white">
                Quick-Start Reference
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Already know what you want to do? Jump straight to the right section.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickStart.map((q, i) => (
                <a
                  key={i}
                  href={q.link}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all"
                >
                  <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                    {q.module}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors flex-1">
                    {q.task}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Full Docs CTA ─────────────────────────────────────── */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="material-symbols-outlined text-6xl text-primary/30">description</span>
            <h2 className="text-2xl md:text-3xl font-black text-accent dark:text-white">
              Ready to dive deeper?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              The full documentation includes searchable content, in-line navigation, and dark mode.
              Built with VitePress for a fast, focused reading experience.
            </p>
            <a
              href="/docs/guide/README"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              Open Full Documentation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserManualPage;
