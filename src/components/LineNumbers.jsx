import React from 'react';

export default function LineNumbers({ activeSection }) {
  const lineGroups = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  return (
    <div className="line-numbers">
      {lineGroups[activeSection]?.map(n => (
        <div key={n} className={`line-num ${n === lineGroups[activeSection][2] ? 'active' : ''}`}>
          {n}
        </div>
      ))}
    </div>
  );
}
