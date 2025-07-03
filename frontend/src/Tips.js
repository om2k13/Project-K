import React, { useState } from 'react';

const tips = [
  { risk: 'Low', tip: 'Choose low-volatility mutual funds.' },
  { risk: 'Medium', tip: 'Balance between equity and debt funds.' },
  { risk: 'High', tip: 'Diversify across aggressive equity.' },
];

const Tips = () => {
  const [selected, setSelected] = useState('Low');
  const tip = tips.find(t => t.risk === selected)?.tip;

  return (
    <div className="card" style={{ maxWidth: 400 }}>
      <h2>Financial Tips</h2>
      <label>Risk Level: </label>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        {tips.map(t => <option key={t.risk} value={t.risk}>{t.risk}</option>)}
      </select>
      <div style={{ marginTop: 16 }}>
        <b>Tip:</b>
        <p>{tip}</p>
      </div>
    </div>
  );
};

export default Tips; 