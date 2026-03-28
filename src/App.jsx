import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import TabBar from './components/TabBar';
import StatusBar from './components/StatusBar';
import LineNumbers from './components/LineNumbers';
import LoadingScreen from './components/LoadingScreen';
import Section1Boot from './components/Section1Boot';
import Section2Learning from './components/Section2Learning';
import Section3Debugging from './components/Section3Debugging';
import Section4Deadline from './components/Section4Deadline';
import Section5Coffee from './components/Section5Coffee';

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { label: 'main.jsx', color: '#61dafb', section: 0 },
  { label: 'learning.js', color: '#f7df1e', section: 1 },
  { label: 'debug.js', color: '#ff4757', section: 2 },
  { label: 'deadline.tsx', color: '#ff6b35', section: 3 },
  { label: 'coffee.config.js', color: '#c77dff', section: 4 },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Scroll progress
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (scrollTop / docH) * 100 : 0);

      // Active section
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
          setActiveSection(i);
        }
      });

      // Reveal
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading]);

  // GSAP animations after loading
  useEffect(() => {
    if (loading) return;
    gsap.fromTo('.tab-bar', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
    gsap.fromTo('.status-bar', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' });
    gsap.fromTo('.line-numbers', { x: -48, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' });
    gsap.fromTo('.progress-bar', { scaleX: 0 }, { scaleX: 1, duration: 0.5, delay: 0.5 });
  }, [loading]);

  const scrollToSection = (i) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' });
  };

  const addError = () => setErrors(e => e + 1);
  const drinkCoffee = () => setCoffeeCount(c => c + 1);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`grain ${loading ? 'hidden' : ''}`} style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s' }}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <CustomCursor />
        <TabBar tabs={TABS} activeSection={activeSection} onTabClick={scrollToSection} />
        <StatusBar errors={errors} coffeeCount={coffeeCount} activeSection={activeSection} />
        <LineNumbers activeSection={activeSection} />

        {/* Floating coffee cup */}
        <div className="coffee-float" onClick={drinkCoffee} title="Click for coffee!" data-hover="true">
          ☕
        </div>

        <main>
          <Section1Boot ref={el => sectionRefs.current[0] = el} />
          <Section2Learning ref={el => sectionRefs.current[1] = el} onError={addError} />
          <Section3Debugging ref={el => sectionRefs.current[2] = el} onError={addError} />
          <Section4Deadline ref={el => sectionRefs.current[3] = el} />
          <Section5Coffee ref={el => sectionRefs.current[4] = el} coffeeCount={coffeeCount} onDrink={drinkCoffee} />
        </main>
      </div>
    </>
  );
}
