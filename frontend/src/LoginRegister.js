import React, { useState } from 'react';

const LoginRegister = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Simulate login/register logic
    if (onLogin) onLogin();
  };

  return (
    <div className="card" style={{ maxWidth: 400 }}>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {error && <div style={{ color: 'var(--primary-red)', marginBottom: 12 }}>{error}</div>}
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <button onClick={() => setIsRegister(!isRegister)} style={{ background: 'none', border: 'none', color: 'var(--primary-red)', cursor: 'pointer' }}>
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister; 