import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex content-center items-center justify-center min-h-[85vh] bg-white">
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for OJT / Internship
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hello, I'm <span className="text-brand-600">{PERSONAL_INFO.name}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-700 transition shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="group bg-white text-slate-700 border border-slate-200 font-semibold py-3 px-8 rounded-lg hover:border-brand-500 hover:text-brand-600 transition flex items-center justify-center gap-2"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={PERSONAL_INFO.photoUrl} 
                alt={PERSONAL_INFO.name} 
                className="relative rounded-2xl shadow-xl w-64 h-64 md:w-[400px] md:h-[400px] object-cover bg-white ring-1 ring-slate-100"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;