import React from 'react';
import { PROJECTS } from '../constants';
import { Code2, Image as ImageIcon, ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Highlighting my academic projects where I applied development concepts to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:transform hover:-translate-y-1 transition duration-300">
              {/* Image Container */}
              <div className="h-56 overflow-hidden bg-slate-200 relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-slate-900 bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                    {/* Visual hint that this is a project preview */}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" />
                    Preview
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <span className="inline-block text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-2 py-1 rounded-md">
                        {project.role}
                    </span>
                </div>
                
                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-lg shadow-sm hover:shadow transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-4 py-2 rounded-lg transition"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                  )}
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code2 className="w-3 h-3" /> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;