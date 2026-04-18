import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, QUICK_FACTS, SOCIAL_LINKS } from '../constants';

const heroStack = [
  'React',
  'TypeScript',
  'Python',
  'PostgreSQL',
  'FastAPI',
  'Flask',
  'Tailwind CSS',
  'REST APIs',
  'AI Workflows',
];

const typedPhrases = [
  'AI-assisted tools',
  'team-based web apps',
  'workflow systems',
  'database-backed products',
];

const TYPING_SPEED = 80;
const ERASING_SPEED = 45;
const PAUSE_DURATION = 1400;

const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDraggingStack, setIsDraggingStack] = useState(false);
  const [isStackPaused, setIsStackPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  useEffect(() => {
    const activePhrase = typedPhrases[phraseIndex];

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = activePhrase.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === activePhrase) {
          window.setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      } else {
        const nextText = activePhrase.slice(0, Math.max(typedText.length - 1, 0));
        setTypedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((currentIndex) => (currentIndex + 1) % typedPhrases.length);
        }
      }
    }, isDeleting ? ERASING_SPEED : TYPING_SPEED);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, typedText]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) {
      return;
    }

    const segmentWidth = marqueeElement.scrollWidth / 3;
    marqueeElement.scrollLeft = segmentWidth;

    let animationFrame = 0;

    const tick = () => {
      if (!isStackPaused && !isDraggingStack) {
        marqueeElement.scrollLeft += 0.45;

        if (marqueeElement.scrollLeft >= segmentWidth * 2) {
          marqueeElement.scrollLeft -= segmentWidth;
        } else if (marqueeElement.scrollLeft <= 0) {
          marqueeElement.scrollLeft += segmentWidth;
        }
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isDraggingStack, isStackPaused]);

  const imageStyle = useMemo(
    () => ({
      transform: `translateY(${Math.min(scrollY * 0.08, 26)}px)`,
    }),
    [scrollY],
  );

  const bubbleStyle = useMemo(
    () => ({
      transform: `translateY(${Math.min(scrollY * 0.12, 36)}px)`,
    }),
    [scrollY],
  );

  const handleStackPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) {
      return;
    }

    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = marqueeElement.scrollLeft;
    setIsDraggingStack(true);
    setIsStackPaused(true);
    marqueeElement.setPointerCapture(event.pointerId);
  };

  const handleStackPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement || !isDraggingStack) {
      return;
    }

    const distance = event.clientX - dragStartX.current;
    marqueeElement.scrollLeft = dragStartScrollLeft.current - distance;
  };

  const handleStackPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) {
      return;
    }

    if (marqueeElement.hasPointerCapture(event.pointerId)) {
      marqueeElement.releasePointerCapture(event.pointerId);
    }

    setIsDraggingStack(false);
    setIsStackPaused(false);
  };

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 scroll-mt-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-5rem] top-24 h-56 w-56 rounded-full bg-brand-100 blur-3xl animate-float"
          style={bubbleStyle}
        />
        <div
          className="absolute right-[-3rem] top-16 h-64 w-64 rounded-full bg-sky-100 blur-3xl animate-pulse-soft"
          style={{ transform: `translateY(${Math.min(scrollY * 0.06, 22)}px)` }}
        />
        <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr,0.94fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <div data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-500"></span>
                Recently completed internship at Gleent Inc.
              </span>
            </div>

            <p data-reveal className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-slate-500" style={{ ['--reveal-delay' as string]: '90ms' }}>
              {PERSONAL_INFO.title}
            </p>

            <h1
              data-reveal
              className="mt-4 max-w-[11ch] font-display text-[clamp(2.1rem,5.2vw,4.35rem)] font-semibold leading-[1.02] text-slate-900"
              style={{ ['--reveal-delay' as string]: '160ms' }}
            >
              Building practical web experiences for
              <span className="mt-3 block min-h-[1.2em] text-brand-700">
                <span className="typing-caret">{typedText || '\u00A0'}</span>
              </span>
            </h1>

            <p
              data-reveal
              className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-600"
              style={{ ['--reveal-delay' as string]: '240ms' }}
            >
              I&apos;m {PERSONAL_INFO.name}, a developer with recent internship experience across AI-assisted tools,
              internal workflows, and modern web applications.
            </p>

            <p
              data-reveal
              className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 md:text-base"
              style={{ ['--reveal-delay' as string]: '320ms' }}
            >
              {PERSONAL_INFO.shortBio}
            </p>

            <div data-reveal className="mt-8 flex flex-wrap gap-3" style={{ ['--reveal-delay' as string]: '380ms' }}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div data-reveal className="mt-6 flex flex-wrap gap-3" style={{ ['--reveal-delay' as string]: '460ms' }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {QUICK_FACTS.map((fact, index) => (
                <div
                  key={fact.label}
                  data-reveal
                  className="panel spotlight-card rounded-3xl p-5"
                  style={{ ['--reveal-delay' as string]: `${520 + (index * 90)}ms` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{fact.label}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">{fact.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{fact.detail}</p>
                </div>
              ))}
            </div>

            <div data-reveal className="panel mt-8 rounded-[28px] px-4 py-4" style={{ ['--reveal-delay' as string]: '700ms' }}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Recent stack used in projects</p>
                <p className="text-xs font-medium text-slate-500">Auto-moving and draggable</p>
              </div>
              <div
                ref={marqueeRef}
                className={`marquee mt-4 ${isStackPaused ? 'is-paused' : ''} ${isDraggingStack ? 'is-dragging' : ''}`}
                onPointerDown={handleStackPointerDown}
                onPointerMove={handleStackPointerMove}
                onPointerUp={handleStackPointerUp}
                onPointerLeave={() => {
                  if (!isDraggingStack) {
                    setIsStackPaused(false);
                  }
                }}
                onPointerCancel={handleStackPointerUp}
                onMouseEnter={() => setIsStackPaused(true)}
                onMouseLeave={() => {
                  if (!isDraggingStack) {
                    setIsStackPaused(false);
                  }
                }}
              >
                <div className="marquee-track">
                  {[...heroStack, ...heroStack, ...heroStack].map((item, index) => (
                    <span key={`${item}-${index}`} className="marquee-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#about"
              data-reveal
              className="scroll-cue mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand-700"
              style={{ ['--reveal-delay' as string]: '780ms' }}
            >
              Scroll to keep exploring
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>

          <div data-reveal className="order-1 mx-auto w-full max-w-[460px] lg:order-2" style={{ ['--reveal-delay' as string]: '180ms' }}>
            <div className="panel tilt-surface relative rounded-[34px] p-5" style={imageStyle}>
              <div className="floating-badge left-6 top-6">
                React + TypeScript
              </div>
              <div className="floating-badge floating-badge-alt bottom-6 right-6">
                Python + PostgreSQL
              </div>

              <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_right,rgba(5,150,105,0.14),transparent_32%)]" />

              <div className="relative rounded-[28px] bg-gradient-to-br from-brand-50 via-white to-sky-50 p-4">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  className="hero-photo h-[300px] w-full rounded-[24px] object-cover object-center shadow-lg ring-1 ring-white/70 sm:h-[380px] lg:h-[500px]"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Availability</p>
                  <p className="mt-2 text-sm leading-6">{PERSONAL_INFO.availability}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Location</p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <MapPin className="h-4 w-4 text-brand-600" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
