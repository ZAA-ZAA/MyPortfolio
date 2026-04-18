import React from 'react';
import { BrainCircuit, LayoutPanelTop, Workflow } from 'lucide-react';
import { PERSONAL_INFO, STRENGTHS } from '../constants';

const strengthIcons = {
  layout: LayoutPanelTop,
  workflow: Workflow,
  brain: BrainCircuit,
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div data-reveal className="max-w-3xl">
          <p className="section-kicker">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            A grounded introduction focused on how I work and where I can grow.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            For an early-career portfolio, what matters most is showing real project exposure, clear strengths, and the kind of work I am ready to contribute to next.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div data-reveal className="panel rounded-[32px] p-8 md:p-10" style={{ ['--reveal-delay' as string]: '100ms' }}>
            <p className="text-lg leading-8 text-slate-700">{PERSONAL_INFO.about}</p>
            <p className="mt-6 text-lg leading-8 text-slate-700">{PERSONAL_INFO.lookingFor}</p>

            <div className="mt-8 rounded-3xl border border-brand-100 bg-brand-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">What I want this portfolio to show</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Solid fundamentals, recent hands-on experience, and a practical approach to building interfaces and workflows that people can actually use.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {STRENGTHS.map((strength, index) => {
              const Icon = strengthIcons[strength.icon];

              return (
                <div
                  key={strength.title}
                  data-reveal
                  className="panel rounded-3xl p-6"
                  style={{ ['--reveal-delay' as string]: `${180 + (index * 90)}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{strength.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{strength.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
