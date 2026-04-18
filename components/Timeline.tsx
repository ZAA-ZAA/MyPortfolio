import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { EDUCATION, EXPERIENCE, SOCIAL_LINKS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div data-reveal className="max-w-3xl">
          <p className="section-kicker">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Internship experience first, with education kept concise.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Since I am still early in my career, both experience and education matter, but this section keeps the focus on recent hands-on work and the tools I used.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div data-reveal className="panel rounded-[32px] p-8 md:p-10" style={{ ['--reveal-delay' as string]: '100ms' }}>
            {EXPERIENCE.map((item) => (
              <div key={item.company}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      Professional Experience
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900">{item.company}</h3>
                    <p className="mt-1 text-base font-medium text-slate-600">{item.role}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600">
                    {item.period}
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-700">{item.summary}</p>

                <ul className="mt-6 space-y-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-500"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div data-reveal className="panel rounded-[32px] p-7" style={{ ['--reveal-delay' as string]: '180ms' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Education</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-slate-900">Current academic background</h3>
                </div>
              </div>

              {EDUCATION.map((item) => (
                <div key={item.degree} className="mt-6 rounded-3xl border border-slate-200 bg-white/80 p-5">
                  <p className="text-sm font-semibold text-brand-700">{item.year}</p>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.degree}</h4>
                  <p className="mt-1 text-sm font-medium text-slate-600">{item.school}</p>
                  <ul className="mt-4 space-y-3">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-500"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div data-reveal className="panel rounded-[32px] p-7" style={{ ['--reveal-delay' as string]: '260ms' }}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Public links</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">What is available online.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Several internship projects are public on GitHub, while live deployments are added selectively depending on hosting cost and project fit.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                If a recruiter asks for more detail, the best next step is a short walkthrough of the repositories, product scope, and my contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
