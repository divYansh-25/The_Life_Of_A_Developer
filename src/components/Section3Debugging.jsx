import React, { useState, useRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './sections.css';

const bugs = [
  { id: 1, x: 15, y: 20, msg: 'TypeError: Cannot read property of undefined', fixed: false },
  { id: 2, x: 65, y: 35, msg: 'ReferenceError: variable is not defined', fixed: false },
  { id: 3, x: 30, y: 65, msg: 'SyntaxError: Unexpected token \'}\'', fixed: false },
  { id: 4, x: 75, y: 70, msg: 'CORS policy: No Access-Control-Allow-Origin', fixed: false },
  { id: 5, x: 50, y: 45, msg: '404: Motivation not found', fixed: false },
  { id: 6, x: 10, y: 75, msg: 'RangeError: Maximum call stack exceeded', fixed: false },
];

const consoleLogs = [
  { type: 'error', text: 'Uncaught TypeError: life is undefined' },
  { type: 'warn', text: 'Warning: you have been debugging for 6 hours' },
  { type: 'log', text: 'checking if problem is the keyboard...' },
  { type: 'log', text: 'console.log("WHY DOES THIS NOT WORK")' },
  { type: 'error', text: 'Error: it was a missing semicolon. Again.' },
  { type: 'log', text: 'console.log("ok it works now. I don\'t know why.")' },
];

const Section3Debugging = forwardRef(function Section3Debugging({ onError }, ref) {
  const [bugList, setBugList] = useState(bugs);
  const [fixedCount, setFixedCount] = useState(0);
  const [showConsole, setShowConsole] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState([]);
  const sectionInnerRef = useRef(null);

  const fixBug = (id) => {
    setBugList(prev => prev.map(b => b.id === id ? { ...b, fixed: true } : b));
    setFixedCount(c => c + 1);
    onError();
    // GSAP shake effect when clicking a bug
    gsap.fromTo(sectionInnerRef.current,
      { x: -4 },
      { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.3)' }
    );
  };

  const openConsole = () => {
    setShowConsole(true);
    setVisibleLogs([]);
    consoleLogs.forEach((_, i) => {
      setTimeout(() => setVisibleLogs(prev => [...prev, i]), i * 400);
    });
  };

  const allFixed = bugList.every(b => b.fixed);

  return (
    <section ref={ref} id="debugging" className="section-debug">
      <div ref={sectionInnerRef} className="s-inner">
        <div className="comment reveal" style={{ marginBottom: 8 }}>// Chapter 3: The Debug Session</div>
        <h2 className="section-heading reveal">
          <span className="keyword">while</span>
          <span style={{ color: 'var(--white)' }}>(</span>
          <span className="string">!fixed</span>
          <span style={{ color: 'var(--white)' }}>) {'{'}</span>
        </h2>
        <p className="s-desc reveal">
          It worked yesterday. <br />
          Don't know what I changed.
        </p>

        {/* Bug hunt area */}
        <div className="bug-arena reveal">
          <div className="bug-arena-header">
            <span className="comment">// click the bugs to squash them</span>
            <span style={{ color: fixedCount === bugs.length ? 'var(--green)' : 'var(--red)', fontSize: 12 }}>
              {fixedCount}/{bugs.length} bugs fixed
            </span>
          </div>
          <div className="bug-field">
            {/* Code background */}
            <div className="code-bg-lines">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="code-bg-line" style={{ width: `${40 + Math.random() * 50}%`, opacity: 0.08 + Math.random() * 0.1 }} />
              ))}
            </div>

            {bugList.map((bug) => (
              <motion.div
                key={bug.id}
                className={`bug-spot ${bug.fixed ? 'fixed' : ''}`}
                style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                animate={bug.fixed ? { scale: 0, opacity: 0 } : { scale: [1, 1.1, 1], opacity: 1 }}
                transition={bug.fixed ? { duration: 0.3 } : { duration: 2, repeat: Infinity }}
                onClick={() => !bug.fixed && fixBug(bug.id)}
                data-hover="true"
                title={bug.msg}
              >
                {bug.fixed ? '✓' : '🐛'}
                {!bug.fixed && (
                  <div className="bug-tooltip">{bug.msg}</div>
                )}
              </motion.div>
            ))}

            {allFixed && (
              <motion.div
                className="all-clear"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ✅ "It works! No idea why, but it works."
              </motion.div>
            )}
          </div>
        </div>

        {/* Dev console */}
        <div className="reveal">
          <button className="console-toggle" onClick={openConsole} data-hover="true">
            ▶ Open Browser Console
          </button>

          {showConsole && (
            <motion.div
              className="dev-console"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="console-header">
                <span>Console</span>
                <span style={{ color: 'var(--red)', fontSize: 11 }}>● {consoleLogs.filter(l => l.type === 'error').length} errors</span>
              </div>
              <div className="console-body">
                {consoleLogs.map((log, i) => (
                  visibleLogs.includes(i) ? (
                    <div key={i} className={`console-line console-${log.type}`}>
                      <span className="console-icon">
                        {log.type === 'error' ? '✕' : log.type === 'warn' ? '⚠' : '>'}
                      </span>
                      {log.text}
                    </div>
                  ) : null
                ))}
                {visibleLogs.length < consoleLogs.length && showConsole && (
                  <span style={{ color: 'var(--green)' }}>█</span>
                )}
              </div>
            </motion.div>
          )}
        </div>

        <div className="comment reveal" style={{ marginTop: 16 }}>
          {'}'} <span style={{ color: 'var(--dim)' }}>// this loop never ends</span>
        </div>
      </div>
    </section>
  );
});

export default Section3Debugging;
