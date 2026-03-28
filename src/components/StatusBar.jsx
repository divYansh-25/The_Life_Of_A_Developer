import React, { useState, useEffect } from 'react';

const sectionNames = ['main.jsx', 'learning.js', 'debug.js', 'deadline.tsx', 'coffee.config.js'];
const funMessages = [
  'it works on my machine',
  'just one more feature...',
  'why is this undefined??',
  'git commit -m "fix"',
  'console.log("here")',
  'Stack Overflow to the rescue',
  'it was a missing semicolon',
  'works in prod, I guess',
];

export default function StatusBar({ errors, coffeeCount, activeSection }) {
  const [time, setTime] = useState(new Date());
  const [msg, setMsg] = useState(funMessages[0]);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setMsg(funMessages[Math.floor(Math.random() * funMessages.length)]);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="status-bar">
      <span>⎇ main</span>
      <span className="err">⚠ {errors} errors</span>
      <span>☕ ×{coffeeCount}</span>
      <span style={{ color: '#00000088' }}>|</span>
      {/* <span style={{ fontStyle: 'italic', opacity: 0.7 }}>{msg}</span> */}
      <div className="status-right">
        <span>By: Divyansh Yadav !!!</span>
        <span>UTF-8</span>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
