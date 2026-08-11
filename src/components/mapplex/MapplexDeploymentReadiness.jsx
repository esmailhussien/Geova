import React from 'react';
import { Link } from 'react-router-dom';

const statusItems = [
  {
    icon: 'business_center',
    status: 'Available now',
    title: 'Managed company deployments',
    body: 'Mapplex is currently used through controlled organization deployments, including Android APK distribution and project-specific setup.',
    tone: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: 'fact_check',
    status: 'In review',
    title: 'Play Store readiness',
    body: 'Privacy, account deletion, data safety, release quality, and pre-launch checks are being completed before public store publication.',
    tone: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: 'cloud_sync',
    status: 'Deployment option',
    title: 'Hosted and field-local exchange',
    body: 'Projects can use hosted workspace sync and short-lived local transfer sessions according to connectivity, permissions, and field conditions.',
    tone: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
  },
];

const safeguards = [
  ['shield_lock', 'Workspace boundaries', 'Hosted projects and operations stay scoped to the authenticated workspace and assigned role.'],
  ['offline_bolt', 'Offline continuity', 'Local work remains usable when connectivity drops; synchronization is a deliberate reconciliation step.'],
  ['key', 'Protected services', 'AI and conversion services use authenticated request boundaries rather than exposing reusable server credentials in the app.'],
  ['rule', 'Review before mutation', 'AI-assisted outputs and high-impact actions are designed to remain reviewable before they change project data.'],
];

const MapplexDeploymentReadiness = () => (
  <section className="px-6 py-24" aria-labelledby="mapplex-deployment-title">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker">Deployment and trust</p>
        <h2 id="mapplex-deployment-title" className="mt-4 text-4xl font-black tracking-tight text-accent dark:text-white md:text-5xl">
          Clear about what is live, what is controlled, and what comes next.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Mapplex is a production field platform under active modernization. The release path favors controlled rollout, evidence, and rollback readiness over marketing claims that outrun the product.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {statusItems.map((item) => (
          <article key={item.title} className="proof-card flex h-full flex-col p-7">
            <div className="flex items-center justify-between gap-4">
              <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${item.tone}`}>{item.status}</span>
              <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
            </div>
            <h3 className="mt-7 text-xl font-black text-accent dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl bg-accent text-white shadow-2xl">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 md:p-10">
            <p className="section-kicker">Operational safeguards</p>
            <h3 className="mt-4 text-3xl font-black">Designed for field reality and controlled data.</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {safeguards.map(([icon, title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="material-symbols-outlined text-2xl text-primary">{icon}</span>
                  <h4 className="mt-4 font-black">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between border-t border-white/10 bg-primary/10 p-8 md:p-10 lg:border-l lg:border-t-0">
            <div>
              <span className="material-symbols-outlined text-5xl text-primary">new_releases</span>
              <h3 className="mt-6 text-3xl font-black">Follow the implementation, not a vague roadmap.</h3>
              <p className="mt-4 leading-relaxed text-slate-300">
                Product Updates now records field workflow changes, interoperability work, Geova AI improvements, release-readiness activity, and documentation changes in plain language.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/updates" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-black text-white transition-colors hover:bg-teal-500">
                Read product updates
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-black text-white transition-colors hover:border-primary hover:text-primary">
                Discuss a deployment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapplexDeploymentReadiness;
