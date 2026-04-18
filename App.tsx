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
    if (!revealElements.length) {
      return;
    }

    const markVisibleElements = () => {
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          element.classList.add('is-visible');
        }
      });
    };

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
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.06,
      },
    );

    revealElements.forEach((element) => {
      element.classList.add('reveal-ready');

      if (element.closest('#home')) {
        element.classList.add('is-visible');
      }
    });

    const animationFrame = window.requestAnimationFrame(() => {
      markVisibleElements();
      revealElements.forEach((element) => {
        if (!element.classList.contains('is-visible')) {
          observer.observe(element);
        }
      });
    });

    window.addEventListener('resize', markVisibleElements);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', markVisibleElements);
      observer.disconnect();
    };
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
