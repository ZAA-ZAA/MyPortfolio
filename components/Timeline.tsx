import React from 'react';
import { EDUCATION, SEMINARS } from '../constants';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Education History</h2>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 border-4 border-white shadow-sm"></div>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-2">
                    {edu.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-brand-600 font-medium mb-2">{edu.school}</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Seminars Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Seminars & Training</h2>
            </div>

            <div className="space-y-4">
              {SEMINARS.map((seminar, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4 hover:bg-slate-100 transition">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Calendar className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{seminar.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{seminar.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;