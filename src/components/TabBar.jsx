import React from 'react';

export default function TabBar({ tabs, activeSection, onTabClick }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`tab ${i === activeSection ? 'active' : ''}`}
          onClick={() => onTabClick(i)}
          data-hover="true"
        >
          <div className="tab-dot" style={{ background: tab.color }} />
          {tab.label}
          {i === 2 && <span style={{ color: '#ff4757', fontSize: 10, marginLeft: 4 }}>●</span>}
        </div>
      ))}
    </div>
  );
}
