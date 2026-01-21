import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-400">
              I am actively looking for an OJT / Internship opportunity. <br/>
              If you have any questions or would like to discuss how I can contribute to your team, please contact me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition flex items-center gap-4 group">
              <div className="bg-brand-600 p-4 rounded-full group-hover:scale-110 transition">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Email Me</p>
                <p className="text-lg font-semibold">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <div className="bg-slate-800 p-8 rounded-2xl flex items-center gap-4">
              <div className="bg-blue-600 p-4 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Call Me</p>
                <p className="text-lg font-semibold">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center pt-12 border-t border-slate-800">
             <div className="flex justify-center gap-6 mb-8">
                {/* Add actual links in constants.ts */}
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-brand-600 transition text-slate-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition text-slate-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
             </div>
             <p className="text-slate-500 text-sm">
                Address: {PERSONAL_INFO.address}
             </p>
             <p className="text-slate-600 text-sm mt-2">
               © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;