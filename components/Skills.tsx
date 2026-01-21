import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A snapshot of the technologies and tools I've worked with during my academic journey and capstone development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;