import React from 'react';

const Dashboard = () => {
  // Mock data
  const user = { name: 'User', riskLevel: 'Medium Risk', behavior: 'Saver' };
  const recommendations = [
    { name: 'Axis Bluechip', type: 'Mutual Fund', risk: 'Low', return: '8%' },
    { name: 'Infosys', type: 'Stock', risk: 'Medium', return: '10%' },
  ];
  const portfolio = [
    { name: 'Axis Bluechip', amount: 10000, currentValue: 10400 },
    { name: 'Infosys', amount: 5000, currentValue: 5200 },
  ];

  return (
    <div className="card">
      <h2>Welcome, {user.name}!</h2>
      <div style={{ display: 'flex', gap: 24, margin: '1rem 0' }}>
        <div className="card" style={{ flex: 1, padding: 16, margin: 0 }}>
          <h4>Risk Level</h4>
          <p>{user.riskLevel}</p>
        </div>
        <div className="card" style={{ flex: 1, padding: 16, margin: 0 }}>
          <h4>Behavior Type</h4>
          <p>{user.behavior}</p>
        </div>
      </div>
      <div style={{ margin: '2rem 0' }}>
        <h4>Recommendations</h4>
        <ul>
          {recommendations.map((rec, i) => (
            <li key={i}>{rec.name} ({rec.type}) - Risk: {rec.risk}, Expected Return: {rec.return}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Portfolio Summary</h4>
        <table>
          <thead>
            <tr>
              <th>Investment</th>
              <th>Amount</th>
              <th>Current Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.currentValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard; 