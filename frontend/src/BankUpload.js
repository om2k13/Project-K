import React, { useState } from 'react';

const mockTransactions = [
  { date: '2025-06-01', description: 'Salary', amount: 30000, type: 'Credit' },
  { date: '2025-06-10', description: 'Grocery', amount: -2500, type: 'Debit' },
  { date: '2025-06-15', description: 'SIP', amount: -5000, type: 'Investment' },
];

const BankUpload = () => {
  const [transactions, setTransactions] = useState([]);

  const handleFileChange = (e) => {
    // For demo, just show mock data
    setTransactions(mockTransactions);
  };

  const handleSimulate = () => {
    setTransactions(mockTransactions);
  };

  return (
    <div className="card" style={{ maxWidth: 600 }}>
      <h2>Bank Data Upload/Sync</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleSimulate} className="btn-primary" style={{ marginLeft: 16 }}>
        Simulate Bank Data
      </button>
      {transactions.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <h4>Transactions</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i}>
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BankUpload; 