import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './sections.css';

const learningStages = [
  {
    stage: '01',
    title: 'Day 1: HTML',
    code: '<h1>Hello World</h1>',
    reaction: ' "I am basically a Full Stack Developer now"',
    color: '#ffd60a',
    desc: 'You wrote your first HTML tag. Your parents don\'t understand why you\'re so excited about bold text.',
  },
  {
    stage: '02',
    title: 'Week 2: CSS',
    code: '* { margin: 0; padding: 0; }',
    reaction: ' "Why won\'t it center?!"',
    color: '#61dafb',
    desc: 'You discover that centering a div is an ancient dark art. You spend 4 hours on Stack Overflow.',
  },
  {
    stage: '03',
    title: 'Month 1: JavaScript',
    code: 'undefined is not a function',
    reaction: ' "I quit. What i should become now..??"',
    color: '#ff4757',
    desc: 'You encounter your first TypeError. You question your life choices. You do not become a farmer.',
  },
  {
    stage: '04',
    title: 'Month 3: React',
    code: 'npm install (3.2GB later)',
    reaction: ' "Am i in the right folder..?"',
    color: '#c77dff',
    desc: 'You install your first React app and the node_modules folder is somehow larger than the universe.',
  },
];

const Section2Learning = forwardRef(function Section2Learning({ onError }, ref) {
  const [active, setActive] = useState(null);
  const [clicked, setClicked] = useState([]);

  const handleClick = (i) => {
    setActive(i);
    if (!clicked.includes(i)) {
      setClicked(prev => [...prev, i]);
      if (i === 2) onError(); // JS stage triggers an "error"
    }
  };

  return (
    <section ref={ref} id="learning" className="section-learning">
      <div className="section-bg-learning" />

      <div className="s-inner">
        <div className="comment reveal" style={{ marginBottom: 8 }}>// Chapter 2: The Learning Curve</div>
        <h2 className="section-heading reveal">
          <span className="keyword">function</span>{' '}
          <span className="func">learnToCode</span>
          <span style={{ color: 'var(--white)' }}>()</span>{' '}
          <span style={{ color: 'var(--white)' }}>{'{'}</span>
        </h2>
        <p className="s-desc reveal">
          Everyone starts somewhere. That somewhere is usually a YouTube tutorial you never finish.
        </p>

        <div className="learning-grid reveal">
          {learningStages.map((s, i) => (
            <motion.div
              key={i}
              className={`learning-card ${active === i ? 'active' : ''}`}
              style={{ '--accent': s.color }}
              onClick={() => handleClick(i)}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <div className="lcard-stage" style={{ color: s.color }}>{s.stage}</div>
              <div className="lcard-title">{s.title}</div>
              <div className="lcard-code">
                <span className="comment">// sample code</span>
                <br />
                <span style={{ color: s.color }}>{s.code}</span>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="lcard-expand"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="lcard-reaction">{s.reaction}</div>
                    <div className="lcard-desc">{s.desc}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="comment reveal" style={{ marginTop: 24 }}>
          {'}'} <span style={{ color: 'var(--dim)' }}>// returns: confidence += 10, sanity -= 50</span>
        </div>

        <div className="progress-hint reveal">
          <span className="comment">// click each card to unlock the truth</span>
          <div className="progress-dots">
            {learningStages.map((_, i) => (
              <div key={i} className={`pdot ${clicked.includes(i) ? 'done' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section2Learning;
