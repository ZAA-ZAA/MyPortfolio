import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((section): section is HTMLElement => Boolean(section));

    const syncHeaderState = () => {
      setIsScrolled(window.scrollY > 10);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(nextProgress);

      const marker = window.scrollY + 180;
      let nextActiveSection = sections[0]?.id ?? 'home';

      sections.forEach((section) => {
        if (marker >= section.offsetTop) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    syncHeaderState();
    window.addEventListener('scroll', syncHeaderState, { passive: true });
    window.addEventListener('resize', syncHeaderState);

    return () => {
      window.removeEventListener('scroll', syncHeaderState);
      window.removeEventListener('resize', syncHeaderState);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (!targetSection) {
      return;
    }

    setActiveSection(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 md:py-4' : 'py-3.5 md:py-5'}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-3 md:px-6 ${
            isScrolled ? 'panel' : 'border border-white/60 bg-white/70 shadow-sm backdrop-blur-md'
          }`}
        >
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-slate-900"
            onClick={(event) => handleNavClick(event, '#home')}
          >
            ZA<span className="text-brand-600">.</span>
          </a>

          <nav className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                    : 'text-slate-600 hover:bg-white hover:text-brand-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            className="rounded-full p-2 text-slate-800 transition hover:bg-slate-100 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="panel mt-3 overflow-hidden rounded-3xl px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}

        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 via-emerald-400 to-sky-400 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
