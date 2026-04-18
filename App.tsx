import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell min-h-screen font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
