import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      setTimeout(() => {
        if (trailRef.current) {
          trailRef.current.style.left = e.clientX + 'px';
          trailRef.current.style.top = e.clientY + 'px';
        }
      }, 80);
    };

    const onEnter = () => cursorRef.current?.classList.add('hovered');
    const onLeave = () => cursorRef.current?.classList.remove('hovered');

    window.addEventListener('mousemove', onMove);

    const addListeners = () => {
      document.querySelectorAll('[data-hover], button, a').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    addListeners();
    const interval = setInterval(addListeners, 2000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="cursor blink" ref={cursorRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}
