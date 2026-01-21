import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Award, BookOpen, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-y border-slate-200 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-brand-500" />
                  My Journey
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {PERSONAL_INFO.aboutLong}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="block text-2xl font-bold text-brand-600 mb-1">4th Year</span>
                    <span className="text-sm text-slate-500">BSIT Student</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="block text-2xl font-bold text-brand-600 mb-1">2 Years</span>
                    <span className="text-sm text-slate-500">Dean's List Awardee</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 space-y-4">
                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                   <Award className="w-5 h-5 text-brand-500" />
                   Highlights
                </h3>
                
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-500 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600">Dean's List Awardee</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-500 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600">Capstone Project Developer</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-500 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600">Passionate about Web Technologies</p>
                  </div>
                   <div className="flex gap-3 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-500 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600">Available for Part-time & Full-time Work</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;