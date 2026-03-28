import React, { useState, useEffect } from 'react';

const bootLines = [
  { text: '> INITIALIZING DEV ENVIRONMENT...', delay: 0, color: '#39ff14' },
  { text: '> loading node_modules (227,481 packages)...', delay: 300, color: '#e8e8e8' },
  { text: '> ERROR: peer dependency conflict', delay: 900, color: '#ff4757' },
  { text: '> loading caffeine.config.js ☕', delay: 1400, color: '#c77dff' },
  { text: '> developer: "Divyansh Yadav" — loading personality...', delay: 200, color: '#c77dff' },
  { text: '> SYSTEM READY. good luck. you\'ll need it.', delay: 2300, color: '#39ff14' },
];

export default function LoadingScreen() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, line.delay);
    });
    setTimeout(() => setDone(true), 2800);
  }, []);
  const isMobile = window.innerWidth < 768;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0d0d0d',
      zIndex: 9997, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 60px',
      transition: 'opacity .8s ease',
      opacity: done ? 0 : 1,
      pointerEvents: done ? 'none' : 'all',
    }}>
      {/* Terminal window chrome */}
      <div style={{
        background: '#1a1a1a', border: '1px solid #2a2a2a',
        borderRadius: '8px', overflow: 'hidden',
        maxWidth: '700px', width: '100%', margin: '0 auto',
      }}>
        {/* Title bar */}
        <div style={{
          background: '#252525', padding: '10px 16px',
          display: 'flex', alignItems: 'center', gap: '8px',
          borderBottom: '1px solid #2a2a2a',
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ marginLeft: 12, fontSize: 12, color: '#5c6370', fontFamily: 'JetBrains Mono, monospace' }}>
            dev@localhost: ~ — bash
          </span>
        </div>
        {/* Terminal body */}
        <div style={{ padding: '24px', minHeight: '280px', fontFamily: 'JetBrains Mono, monospace', fontSize:'0.9rem', lineHeight: '2' }}>
          {bootLines.map((line, i) => (
            visibleLines.includes(i) ? (
              <div key={i} style={{ color: line.color, animation: 'fadeInLine .2s ease' }}>
                {line.text}
              </div>
            ) : null
          ))}
          {visibleLines.length > 0 && !done && (
            <span style={{ color: '#39ff14', animation: 'blink .8s step-end infinite' }}>█</span>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeInLine { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
