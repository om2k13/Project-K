import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import RiskProfiling from './RiskProfiling';
import Dashboard from './Dashboard';
import BankUpload from './BankUpload';
import Recommendations from './Recommendations';
import Portfolio from './Portfolio';
import Tips from './Tips';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-new">
        <div className="navbar-container" style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          <div className="navbar-logo" style={{textAlign: 'center', width: '100%'}}>Coastal7 Investment App</div>
          <div
            className="navbar-links"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '2.5rem',
              minHeight: '40px',
            }}
          >
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/risk-profile" className="nav-link">Risk Profiling</Link>
            <Link to="/bank-upload" className="nav-link">Bank Data Upload</Link>
            <Link to="/recommendations" className="nav-link">Recommendations</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/tips" className="nav-link">Tips</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Placeholder = ({ title }) => (
  <div style={{ padding: '2rem' }}>
    <h2>{title}</h2>
    <p>Simple UI coming soon...</p>
  </div>
);

function TestFlexGap() {
  return (
    <div style={{ display: 'flex', gap: '40px', background: 'yellow', padding: '10px' }}>
      <div style={{ background: 'red', color: 'white' }}>One</div>
      <div style={{ background: 'blue', color: 'white' }}>Two</div>
      <div style={{ background: 'green', color: 'white' }}>Three</div>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Pass login handler to LoginRegister
  const handleLogin = () => setLoggedIn(true);

  return (
    <Router>
      {!loggedIn ? (
        <Routes>
          <Route path="/*" element={<LoginRegister onLogin={handleLogin} />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/risk-profile" element={<RiskProfiling />} />
              <Route path="/bank-upload" element={<BankUpload />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </main>
        </>
      )}
    </Router>
  );
}

export default App;
