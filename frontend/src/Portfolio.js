import React from 'react';

const portfolio = [
  { name: 'Axis Bluechip', amount: 10000, date: '2025-07-01', currentValue: 10400 },
  { name: 'Infosys', amount: 5000, date: '2025-07-01', currentValue: 5200 },
];

const Portfolio = () => (
  <div className="card" style={{ maxWidth: 600 }}>
    <h2>Simulated Portfolio</h2>
    <table>
      <thead>
        <tr>
          <th>Investment</th>
          <th>Amount</th>
          <th>Date Invested</th>
          <th>Current Value</th>
        </tr>
      </thead>
      <tbody>
        {portfolio.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
            <td>{item.currentValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Portfolio; 