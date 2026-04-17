import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[36px] bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="animate-fade-up">
              <p className="section-kicker text-brand-100">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Let&apos;s talk about the role, the team, or the work.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                I recently finished my internship and I&apos;m looking for opportunities where I can contribute as a junior developer while continuing to learn in a real product environment.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-400 hover:bg-brand-600"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-400 hover:bg-brand-600"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-brand-400 hover:bg-white/10 animate-fade-up delay-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Email</p>
                    <p className="mt-2 text-sm font-medium text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-brand-400 hover:bg-white/10 animate-fade-up delay-2"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-700 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Phone</p>
                    <p className="mt-2 text-sm font-medium text-white">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
              </a>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-brand-400 hover:bg-white/10 animate-fade-up delay-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-700 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Location</p>
                    <p className="mt-2 text-sm font-medium text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
            <p>Internship case studies and walkthroughs are available during interviews.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
