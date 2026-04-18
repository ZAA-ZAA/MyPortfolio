import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div data-reveal className="max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">Core stack and working strengths.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            I kept this section focused on tools and areas I have actively used during coursework and recent internship work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SKILLS.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              data-reveal
              className="panel spotlight-card rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
              style={{ ['--reveal-delay' as string]: `${120 + (index * 90)}ms` }}
            >
              <h3 className="font-display text-xl font-semibold text-slate-900">{skillGroup.category}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{skillGroup.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
