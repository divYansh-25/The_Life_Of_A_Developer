import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './sections.css';

const tasks = [
  { id: 1, label: 'Rename variable ', done: false, time: '2 sec' },
  { id: 2, label: 'Write documentation', done: false, time: '2 weeks' },
  { id: 3, label: 'ChatGPT the error ', done: false, time: 'lol' },
  { id: 4, label: 'npm install everything ', done: false, time: '1 month' },
  { id: 5, label: 'Make it responsive', done: false, time: '3 days' },
  { id: 6, label: 'Deploy and pray   ', done: false, time: '1 hour?' },
];

const panicMessages = [
  'OK just focus...',
  'Maybe if I code faster...',
  'WHY DID I PROCRASTINATE',
  ' "I work better under pressure"',
  ' git commit -m "final" (x47)',
  ' Committing to main directly',
  ' Please compile... please...',
  ' Ship it and pray',
];

const Section4Deadline = forwardRef(function Section4Deadline(props, ref) {
  const [taskList, setTaskList] = useState(tasks);
  const [hours, setHours] = useState(6);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [panic, setPanic] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const timerRef = useRef(null);
  const bgRef = useRef(null);

  const totalSeconds = useRef(hours * 3600 + minutes * 60 + seconds);
  const remainRef = useRef(totalSeconds.current);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      remainRef.current = Math.max(0, remainRef.current - 1);
      const r = remainRef.current;
      setHours(Math.floor(r / 3600));
      setMinutes(Math.floor((r % 3600) / 60));
      setSeconds(r % 60);

      const pct = 1 - r / totalSeconds.current;
      setPanic(pct);

      // GSAP shake as deadline approaches
      if (r < 60 && r % 5 === 0 && bgRef.current) {
        gsap.fromTo(bgRef.current,
          { x: -6, rotation: -0.5 },
          { x: 0, rotation: 0, duration: 0.5, ease: 'elastic.out(1,0.3)' }
        );
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setMsgIdx(i => (i + 1) % panicMessages.length), 3000);
    return () => clearInterval(t);
  }, []);

  const toggleTask = (id) => {
    setTaskList(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const done = taskList.filter(t => t.done).length;
  const fmt = (n) => String(n).padStart(2, '0');
  const isRed = hours === 0 && minutes < 30;

  return (
    <section ref={ref} id="deadline" className="section-deadline">
      <div ref={bgRef} className="deadline-bg" style={{
        background: `radial-gradient(ellipse at 50% 50%, rgba(255,${107 - panic * 107},${53 - panic * 53},${0.06 + panic * 0.1}) 0%, transparent 70%)`,
      }} />

      {/* Panic overlay */}
      {panic > 0.7 && (
        <div className="panic-overlay" style={{ opacity: (panic - 0.7) * 2 }} />
      )}

      <div className="s-inner">
        <div className="comment reveal" style={{ marginBottom: 8 }}>// Chapter 4: The Deadline</div>
        <h2 className="section-heading reveal">
          <span className="keyword">try</span>{' '}
          <span style={{ color: 'var(--white)' }}>{'{'}</span>
          <span className="comment" style={{ marginLeft: 12, fontSize: '1rem' }}>// ship it</span>
        </h2>

        {/* Countdown Timer */}
        <motion.div
          className="countdown reveal"
          animate={{ scale: isRed ? [1, 1.02, 1] : 1 }}
          transition={{ repeat: isRed ? Infinity : 0, duration: 0.8 }}
        >
          <div className="countdown-label">TIME REMAINING</div>
          <div className="countdown-digits" style={{ color: isRed ? 'var(--red)' : 'var(--green)' }}>
            {fmt(hours)}:{fmt(minutes)}:{fmt(seconds)}
          </div>
          <div className="panic-msg">{panicMessages[msgIdx]}</div>
        </motion.div>

        {/* Task checklist */}
        <div className="tasklist reveal">
          <div className="tasklist-header">
            <span className="comment">// // Last minute tasks</span>
            <span style={{ fontSize: 12, color: done === tasks.length ? 'var(--green)' : 'var(--orange)' }}>
              {done}/{tasks.length} done
            </span>
          </div>
          {taskList.map(task => (
            <motion.div
              key={task.id}
              className={`task-item ${task.done ? 'checked' : ''}`}
              onClick={() => toggleTask(task.id)}
              whileHover={{ x: 6 }}
              data-hover="true"
            >
              <div className={`task-checkbox ${task.done ? 'checked' : ''}`}>
                {task.done ? '✓' : ''}
              </div>
              <span className="task-label">{task.label}</span>
              <span className="task-time">{task.time}</span>
            </motion.div>
          ))}
        </div>

        <div className="comment reveal" style={{ marginTop: 16 }}>
          {'}'} <span className="keyword">catch</span> (e) {'{'}<br />
          <span style={{ paddingLeft: 24 }}>console.log(<span className="string">"works on my machine"</span>);</span><br />
          {'}'}
        </div>
      </div>
    </section>
  );
});

export default Section4Deadline;
