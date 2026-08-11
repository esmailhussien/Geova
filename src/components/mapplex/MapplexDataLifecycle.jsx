import React from 'react';

const stages = [
  {
    number: '01',
    icon: 'database',
    title: 'Prepare',
    body: 'Create project layers, forms, controlled values, spatial references, assignments, and offline map areas.',
  },
  {
    number: '02',
    icon: 'my_location',
    title: 'Collect',
    body: 'Capture geometry, attributes, photos, files, timestamps, and GPS tracks with or without internet.',
  },
  {
    number: '03',
    icon: 'fact_check',
    title: 'Validate',
    body: 'Use required fields, domains, smart rules, spatial context, and Geova AI review to find gaps before handover.',
  },
  {
    number: '04',
    icon: 'sync_alt',
    title: 'Exchange',
    body: 'Move data through hosted sync or a secured local field session when crews cannot rely on the internet.',
  },
  {
    number: '05',
    icon: 'output',
    title: 'Deliver',
    body: 'Export GIS-ready data, media, project metadata, maps, and engineering outputs for office review.',
  },
];

const exchanges = [
  { label: 'Field capture', value: 'GeoJSON · KML/KMZ · CSV/Excel', icon: 'edit_location_alt' },
  { label: 'GIS handover', value: 'GeoPackage · Shapefile · FileGDB', icon: 'deployed_code' },
  { label: 'Engineering', value: 'DXF · map PDF · drawing export', icon: 'architecture' },
  { label: 'Evidence', value: 'Photos · galleries · files · metadata', icon: 'photo_library' },
];

const preservedContext = [
  'Layer and field definitions',
  'Coded-value domains',
  'Project lexicons',
  'Forms and validation rules',
  'Media relationships',
  'Spatial reference details',
];

const MapplexDataLifecycle = () => (
  <section className="border-y border-slate-200 bg-slate-50 px-6 py-24 dark:border-slate-800 dark:bg-slate-900/40" aria-labelledby="mapplex-data-lifecycle-title">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="max-w-xl">
          <p className="section-kicker">The Mapplex data lifecycle</p>
          <h2 id="mapplex-data-lifecycle-title" className="mt-4 text-4xl font-black leading-tight tracking-tight text-accent dark:text-white md:text-5xl">
            Field data that remains useful after collection.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:justify-self-end">
          Mapplex is designed around the full operational chain—not a one-way upload form. Teams can prepare governed data structures, work offline, validate records, exchange changes in the field, and return complete GIS deliverables to the office.
        </p>
      </div>

      <ol className="mt-14 grid gap-4 md:grid-cols-5">
        {stages.map((stage, index) => (
          <li key={stage.title} className="proof-card relative flex min-h-[250px] flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-black tracking-[0.2em] text-slate-400">{stage.number}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[22px]">{stage.icon}</span>
              </span>
            </div>
            <h3 className="mt-8 text-xl font-black text-accent dark:text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{stage.body}</p>
            {index < stages.length - 1 && (
              <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm dark:border-slate-700 dark:bg-slate-950 md:flex" aria-hidden="true">
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="proof-card p-7 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="section-kicker">Interoperability</p>
              <h3 className="mt-3 text-2xl font-black text-accent dark:text-white">Meet teams where their data already lives.</h3>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary">conversion_path</span>
          </div>
          <div className="mt-7 divide-y divide-slate-200 dark:divide-slate-800">
            {exchanges.map((item) => (
              <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[160px_1fr] sm:items-center">
                <div className="flex items-center gap-2 text-sm font-black text-accent dark:text-white">
                  <span className="material-symbols-outlined text-[18px] text-primary">{item.icon}</span>
                  {item.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            FileGDB conversion uses Geova's dedicated GDAL service. Availability and supported content can depend on the project configuration and deployment plan.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-accent p-7 text-white shadow-xl md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="section-kicker">Context travels with the work</p>
              <h3 className="mt-3 text-2xl font-black">More than geometry and columns.</h3>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary">account_tree</span>
          </div>
          <p className="mt-5 leading-relaxed text-slate-300">
            A useful handover preserves the meaning of the project. Mapplex can carry operational context alongside spatial records so office teams can understand how the data was collected and governed.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {preservedContext.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200">
                <span className="material-symbols-outlined text-[17px] text-primary">check_circle</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapplexDataLifecycle;
