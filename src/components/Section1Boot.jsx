import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import './sections.css';

const Section1Boot = forwardRef(function Section1Boot(props, ref) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const codeBlockRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 });
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 60, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4'
    )
    .fromTo(codeBlockRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3'
    );
  }, []);

  return (
    <section ref={ref} id="boot" className="section-boot scanlines">
      {/* Animated grid background */}
      <div className="grid-bg" />

      {/* Floating code snippets background */}
      <div className="floating-code">
        {['const life = () => {}', 'npm install sanity', 'git push --force', 'undefined is not a function',
          'works on my machine', '404: sleep not found', 'TODO: fix later', 'import coffee from "life"'].map((t, i) => (
          <div key={i} className="float-snippet" style={{
            top: `${5 + i * 12}%`,
            left: `${Math.random() > 0.5 ? '5%' : '60%'}`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + i}s`,
          }}>{t}
          </div>
        ))}
      </div>

      <div className="boot-content">
        {/* Comment line */}
        <div className="comment reveal" style={{ marginBottom: 16, fontSize: '0.9rem' }}>
          // Chapter 1: It begins
        </div>

        <div ref={titleRef} style={{ opacity: 0 }}>
          <div className="boot-eyebrow">The Interactive Story of</div>
          <h1 className="boot-title glitch" data-text="THE LIFE OF A DEVELOPER">
            THE LIFE OF<br/>A DEVELOPER
          </h1>
        </div>

        <p ref={subtitleRef} className="boot-subtitle" style={{ opacity: 0 }}>
          A humorous journey through <span className="keyword">HTML</span>,{' '}
          <span className="string">"debugging"</span>,{' '}
          <span className="func">grinding()</span>, and{' '}
          <span className="number">∞</span> cups of coffee.
        </p>

        {/* Animated code block */}
        <div ref={codeBlockRef} className="hero-code reveal" style={{ opacity: 0 }}>
          <div className="code-line"><span className="keyword">const</span> <span className="func">developer</span> = {'{'}</div>
          <div className="code-line indent"><span className="string">name</span>: <span className="string">"Divyansh Yadav"</span>,</div>
          <div className="code-line indent"><span className="string">skills</span>: [<span className="string">"Googling"</span>, <span className="string">"Debugging"</span>,<span className="string">"Overthinking"</span>],</div>
          <div className="code-line indent"><span className="string">coffeeLevel</span>: <span className="number">Infinity</span>,</div>
          <div className="code-line indent"><span className="string">bugs</span>: <span className="number">Math.random() * 9999</span>,</div>
          <div className="code-line indent"><span className="string">sleepHours</span>: <span className="number">undefined </span>,</div>
          <div className="code-line">{'}'}</div>
        </div>

        <div className="scroll-cta reveal">
          <span className="comment">// scroll to begin the journey</span>
          <div className="scroll-arrow-code">▼</div>
        </div>
      </div>

      {/* Particles */}
      <div className="particles-boot">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }} />
        ))}
      </div>
    </section>
  );
});

export default Section1Boot;
