import React, { useState } from 'react';

const questions = [
  {
    q: 'What is your age group?',
    options: [
      { text: '< 25', score: 4 },
      { text: '25-35', score: 3 },
      { text: '36-50', score: 2 },
      { text: '> 50', score: 1 },
    ],
  },
  {
    q: 'What is your investment goal?',
    options: [
      { text: 'Wealth Growth', score: 5 },
      { text: 'Retirement', score: 2 },
      { text: 'Emergency Fund', score: 1 },
    ],
  },
  {
    q: 'How would you react to a 10% drop in value?',
    options: [
      { text: 'Buy more', score: 5 },
      { text: 'Hold', score: 3 },
      { text: 'Sell', score: 1 },
    ],
  },
  {
    q: 'What is your primary income source?',
    options: [
      { text: 'Business', score: 4 },
      { text: 'Job', score: 3 },
      { text: 'Pension', score: 1 },
    ],
  },
  {
    q: 'How long can you stay invested?',
    options: [
      { text: '<1 year', score: 1 },
      { text: '1-3 years', score: 2 },
      { text: '3-5 years', score: 3 },
      { text: '5+ years', score: 5 },
    ],
  },
  {
    q: 'What % of income do you save?',
    options: [
      { text: '<10%', score: 1 },
      { text: '10-25%', score: 2 },
      { text: '25-50%', score: 3 },
      { text: '>50%', score: 4 },
    ],
  },
  {
    q: 'How familiar are you with investing?',
    options: [
      { text: 'Beginner', score: 1 },
      { text: 'Intermediate', score: 3 },
      { text: 'Expert', score: 5 },
    ],
  },
];

function getRiskLevel(score) {
  if (score <= 15) return 'Low Risk';
  if (score <= 25) return 'Medium Risk';
  return 'High Risk';
}

const RiskProfiling = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qIdx, oIdx) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = oIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.some(a => a === null)) return;
    setSubmitted(true);
  };

  const totalScore = answers.reduce((sum, a, i) => sum + (a !== null ? questions[i].options[a].score : 0), 0);
  const riskLevel = getRiskLevel(totalScore);

  return (
    <div className="card" style={{ maxWidth: 600 }}>
      <h2>Risk Profiling Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <div><b>{i + 1}. {q.q}</b></div>
            {q.options.map((opt, j) => (
              <label key={j} style={{ display: 'block', marginLeft: 16 }}>
                <input
                  type="radio"
                  name={`q${i}`}
                  checked={answers[i] === j}
                  onChange={() => handleChange(i, j)}
                  required
                />{' '}
                {opt.text}
              </label>
            ))}
          </div>
        ))}
        {!submitted && (
          <button type="submit" className="btn-primary">
            Submit
          </button>
        )}
      </form>
      {submitted && (
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <h3>Your Risk Score: {totalScore}</h3>
          <h3>Risk Level: {riskLevel}</h3>
        </div>
      )}
    </div>
  );
};

export default RiskProfiling; 