import React from 'react';

const recommendations = [
  { name: 'Axis Bluechip', type: 'Mutual Fund', risk: 'Low', expectedReturn: '8%' },
  { name: 'Infosys', type: 'Stock', risk: 'Medium', expectedReturn: '10%' },
  { name: 'HDFC Midcap', type: 'Mutual Fund', risk: 'Medium', expectedReturn: '12%' },
  { name: 'Tata Motors', type: 'Stock', risk: 'High', expectedReturn: '15%' },
];

const Recommendations = () => (
  <div className="card" style={{ maxWidth: 600 }}>
    <h2>Investment Recommendations</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Risk</th>
          <th>Expected Return</th>
        </tr>
      </thead>
      <tbody>
        {recommendations.map((rec, i) => (
          <tr key={i}>
            <td>{rec.name}</td>
            <td>{rec.type}</td>
            <td>{rec.risk}</td>
            <td>{rec.expectedReturn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Recommendations; 