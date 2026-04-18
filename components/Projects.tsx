import React, { useEffect, useMemo, useState } from 'react';
import { BrainCircuit, ChevronLeft, ChevronRight, ClipboardCheck, Clapperboard, ExternalLink, Github, Link2, ReceiptText, Sigma, X } from 'lucide-react';
import { PROJECT_NOTE, PROJECTS } from '../constants';

const projectIcons = {
  video: Clapperboard,
  billing: ReceiptText,
  affiliate: Link2,
  assistant: BrainCircuit,
  math: Sigma,
  approval: ClipboardCheck,
};

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'ai', label: 'AI systems' },
  { id: 'business', label: 'Business apps' },
  { id: 'workflow', label: 'Workflow tools' },
] as const;

const handleSpotlightMove = (event: React.MouseEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]['id']>('all');
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [openProjectTitle, setOpenProjectTitle] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  const featuredProjects = useMemo(() => {
    const selectedProjects = filteredProjects.filter((project) => project.featured);
    return selectedProjects.length ? selectedProjects : filteredProjects;
  }, [filteredProjects]);

  useEffect(() => {
    setActiveCarouselIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    if (featuredProjects.length <= 1 || openProjectTitle) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveCarouselIndex((currentIndex) => (currentIndex + 1) % featuredProjects.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [featuredProjects, openProjectTitle]);

  useEffect(() => {
    if (!openProjectTitle) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenProjectTitle(null);
        return;
      }

      if (event.key === 'ArrowRight') {
        setOpenProjectTitle((currentTitle) => {
          const currentIndex = filteredProjects.findIndex((project) => project.title === currentTitle);
          const nextProject = filteredProjects[(currentIndex + 1) % filteredProjects.length];
          return nextProject?.title ?? currentTitle;
        });
      }

      if (event.key === 'ArrowLeft') {
        setOpenProjectTitle((currentTitle) => {
          const currentIndex = filteredProjects.findIndex((project) => project.title === currentTitle);
          const previousProject = filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length];
          return previousProject?.title ?? currentTitle;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredProjects, openProjectTitle]);

  const activeProject = featuredProjects[activeCarouselIndex] ?? featuredProjects[0];
  const modalProject = filteredProjects.find((project) => project.title === openProjectTitle) ?? null;

  const goToPreviousProject = () => {
    setActiveCarouselIndex((currentIndex) => (currentIndex - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToNextProject = () => {
    setActiveCarouselIndex((currentIndex) => (currentIndex + 1) % featuredProjects.length);
  };

  const goToPreviousModalProject = () => {
    if (!modalProject) {
      return;
    }

    const currentIndex = filteredProjects.findIndex((project) => project.title === modalProject.title);
    const previousProject = filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length];
    setOpenProjectTitle(previousProject?.title ?? modalProject.title);
  };

  const goToNextModalProject = () => {
    if (!modalProject) {
      return;
    }

    const currentIndex = filteredProjects.findIndex((project) => project.title === modalProject.title);
    const nextProject = filteredProjects[(currentIndex + 1) % filteredProjects.length];
    setOpenProjectTitle(nextProject?.title ?? modalProject.title);
  };

  return (
    <section id="projects" className="py-20 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="max-w-3xl">
            <p className="section-kicker">Projects</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Selected internship projects and technical case studies.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A curated selection of projects covering AI-assisted tools, workflow systems, and modern web applications.
            </p>
          </div>

          <div data-reveal className="panel max-w-lg rounded-3xl p-5 text-sm leading-7 text-slate-600" style={{ ['--reveal-delay' as string]: '120ms' }}>
            {PROJECT_NOTE}
          </div>
        </div>

        <div data-reveal className="mt-8 flex flex-wrap gap-3" style={{ ['--reveal-delay' as string]: '200ms' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                  : 'border border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {activeProject ? (
          <div data-reveal className="mt-8" style={{ ['--reveal-delay' as string]: '260ms' }}>
            <div className="panel spotlight-card overflow-hidden rounded-[36px] p-6 md:p-8" onMouseMove={handleSpotlightMove}>
              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-brand-900 p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                      Featured project
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goToPreviousProject}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={goToNextProject}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                        aria-label="Next project"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-100">
                      {React.createElement(projectIcons[activeProject.icon], { className: 'h-7 w-7' })}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{activeProject.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {activeProject.role} / {activeProject.platform} / {activeProject.period}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-200">{activeProject.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeProject.techStack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setOpenProjectTitle(activeProject.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-100"
                    >
                      Open project details
                      <ArrowRightIcon />
                    </button>
                    {activeProject.repo ? (
                      <a
                        href={activeProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        <Github className="h-4 w-4" />
                        Repository
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-slate-200 bg-white/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Visibility</p>
                      <p className="mt-3 text-sm font-semibold text-slate-800">{activeProject.visibility}</p>
                    </div>
                    <div className="rounded-[24px] border border-slate-200 bg-white/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Category</p>
                      <p className="mt-3 text-sm font-semibold capitalize text-slate-800">{activeProject.category}</p>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Key details</p>
                    <ul className="mt-4 space-y-3">
                      {activeProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                          <span className="mt-2 h-2 w-2 rounded-full bg-brand-500"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Focus areas</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.focusAreas.map((item) => (
                        <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveCarouselIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeCarouselIndex === index ? 'w-10 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Show ${project.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const Icon = projectIcons[project.icon];

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setOpenProjectTitle(project.title)}
                onMouseMove={handleSpotlightMove}
                data-reveal
                className="panel spotlight-card tilt-surface text-left rounded-[30px] p-6 transition duration-300 hover:-translate-y-1"
                style={{ ['--reveal-delay' as string]: `${120 + (index * 70)}ms` }}
                aria-label={`Open ${project.title} project details`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{project.platform}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {project.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-500">
                    {project.repo ? 'Public repository available' : 'Project summary only'}
                  </span>
                  <span className="font-semibold text-brand-700">View details</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {modalProject ? (
        <div
          className="project-modal-backdrop fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProject.title} project details`}
          onClick={() => setOpenProjectTitle(null)}
        >
          <div
            className="project-modal-shell panel max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[34px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 md:px-7">
              <div>
                <h3 className="mt-1 font-display text-xl font-semibold text-slate-900">{modalProject.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPreviousModalProject}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNextModalProject}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpenProjectTitle(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-brand-700"
                  aria-label="Close project modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[calc(92vh-88px)] overflow-y-auto px-5 py-6 md:px-7 md:py-7">
              <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
                <div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      {modalProject.status}
                    </span>
                    <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {modalProject.visibility}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 shadow-inner">
                      {React.createElement(projectIcons[modalProject.icon], { className: 'h-7 w-7' })}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {modalProject.role} / {modalProject.platform} / {modalProject.period}
                      </p>
                      <p className="mt-2 text-sm capitalize text-slate-500">Category: {modalProject.category}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-700">{modalProject.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {modalProject.repo ? (
                      <a
                        href={modalProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                      >
                        <Github className="h-4 w-4" />
                        View repository
                      </a>
                    ) : null}
                    {modalProject.liveUrl ? (
                      <a
                        href={modalProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {modalProject.liveLabel || 'View live project'}
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Tech stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {modalProject.techStack.map((item) => (
                        <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Highlights</p>
                    <ul className="mt-4 space-y-3">
                      {modalProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                          <span className="mt-2 h-2 w-2 rounded-full bg-brand-500"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Focus areas</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {modalProject.focusAreas.map((item) => (
                        <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

const ArrowRightIcon: React.FC = () => <ChevronRight className="h-4 w-4" />;

export default Projects;
