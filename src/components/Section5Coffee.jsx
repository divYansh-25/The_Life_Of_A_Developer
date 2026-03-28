import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const achievements = [
  { icon: '🐛', label: 'Bug Whisperer', desc: 'Fixed a bug by accident' },
  { icon: '☕', label: 'Caffeine Dependent', desc: '10,000+ mg consumed' },
  { icon: '🌙', label: 'Night Owl', desc: 'Committed at 3am' },
  { icon: '🔥', label: 'Stack Overflow', desc: 'Upvoted 500 answers' },
  { icon: '💀', label: 'git force pusher', desc: 'You know what you did' },
  { icon: '🏆', label: 'It Shipped', desc: 'Somehow. Against all odds.' },
];

const quotes = [
  '"The first 90% of the code takes 90% of the time. The last 10% takes the other 90% of the time."',
  '"It\'s not a bug — it\'s an undocumented feature."',
  '"Real developers don\'t comment their code. If it was hard to write, it should be hard to understand."',
  '"There are only two hard things: cache invalidation, naming things, and off-by-one errors."',
];

const Section5Coffee = forwardRef(function Section5Coffee({ coffeeCount, onDrink }, ref) {
  return (
    <section ref={ref} id="coffee" className="section-coffee">
      <div className="coffee-bg" />

      <div className="s-inner">
        <div className="comment reveal" style={{ marginBottom: 8 }}>// Chapter 5: The Developer Manifesto</div>
        <h2 className="section-heading reveal">
          <span className="keyword">export default function</span>{' '}
          <span className="func">survive</span>
          <span style={{ color: 'var(--white)' }}>()</span>
        </h2>
        <p className="s-desc reveal">
          After all the bugs, the deadlines, and the npm installs —<br />
          you're still here. That makes you a developer.
        </p>

        {/* Coffee counter */}
        <motion.div
          className="coffee-counter reveal"
          whileHover={{ scale: 1.03 }}
          onClick={onDrink}
          data-hover="true"
        >
          <div className="coffee-emoji-big">☕</div>
          <div className="coffee-info">
            <div className="coffee-count" style={{ color: 'var(--orange)' }}>{coffeeCount}</div>
            <div className="coffee-label">cups consumed this session</div>
            <div className="coffee-hint">// click to drink another</div>
          </div>
          <div className="coffee-bar">
            <div className="coffee-fill" style={{ width: `${Math.min(coffeeCount * 10, 100)}%` }} />
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="achievements reveal">
          <div className="comment" style={{ marginBottom: 16 }}>// achievements unlocked</div>
          <div className="ach-grid">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                className="ach-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(199,125,255,0.2)' }}
                viewport={{ once: true }}
                data-hover="true"
              >
                <div className="ach-icon">{a.icon}</div>
                <div className="ach-label">{a.label}</div>
                <div className="ach-desc">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rotating quotes */}
        <div className="dev-quotes reveal">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="dev-quote"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="string">{q}</span>
            </motion.div>
          ))}
        </div>

        {/* Final code block */}
        <div className="final-code reveal">
          <div className="code-line"><span className="keyword">return</span> {'{'}</div>
          <div className="code-line indent"><span className="string">status</span>: <span className="string">"Build Successfully...!!!"</span>,</div>
          <div className="code-line indent"><span className="string">sanity</span>: <span className="number">null</span>,</div>
          <div className="code-line indent"><span className="string">coffeeConsumed</span>: <span className="number">{coffeeCount}</span>,</div>
          <div className="code-line indent"><span className="string">wouldDoItAgain</span>: <span className="keyword">true</span>,</div>
          <div className="code-line">{'}'}</div>
        </div>

        <button
          className="top-btn reveal"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-hover="true"
        >
          ↑ git stash && restart life
        </button>
      </div>
    </section>
  );
});

export default Section5Coffee;
