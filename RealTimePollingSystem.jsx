import { useState } from "react";
import "./RealTimePollingSystem.css";

function RealTimePollingSystem()
 {
  const pollQuestion = "Which programming language do you like most?";

  const initialOptions = [
    { id: 1, text: "JavaScript", votes: 0 },
    { id: 2, text: "Python", votes: 0 },
    { id: 3, text: "Java", votes: 0 },
    { id: 4, text: "C++", votes: 0 },
  ];

  const [options, setOptions] = useState(initialOptions);
  const [hasVoted, setHasVoted] = useState(false);

  const voteHandler = (id) => {
    if (hasVoted) return;

    const updatedOptions = options.map((opt) =>
      opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
    );

    setOptions(updatedOptions);
    setHasVoted(true);
  };

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div className="poll-container">
      <div className="poll-card">
        <h2 className="poll-title">Classroom Poll</h2>
        <p className="poll-question">{pollQuestion}</p>

        <div className="poll-options">
          {options.map((opt) => {
            const percentage =
              totalVotes === 0
                ? 0
                : Math.round((opt.votes / totalVotes) * 100);

            return (
              <div key={opt.id} className="poll-option">
                <button
                  className="vote-btn"
                  onClick={() => voteHandler(opt.id)}
                  disabled={hasVoted}
                >
                  {opt.text}
                </button>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <span className="vote-count">
                  {opt.votes} votes ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>

        {hasVoted && (
          <p className="vote-message">Thank you for voting 👍</p>
        )}
      </div>
    </div>
  );
}

export default RealTimePollingSystem;

* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* 🌈 Full Page Background */
body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Center container */
.poll-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Poll card */
.poll-card {
  width: 420px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}

/* Title */
.poll-title {
  text-align: center;
  margin-bottom: 10px;
  color: #4f46e5;
}

/* Question */
.poll-question {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

/* Options layout */
.poll-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Single option */
.poll-option {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* Vote button */
.vote-btn {
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.vote-btn:hover {
  background-color: #4338ca;
}

.vote-btn:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

/* Progress bar */
.progress-bar {
  height: 10px;
  background-color: #e5e7eb;
  border-radius: 5px;
  overflow: hidden;
}

/* Filled progress */
.progress-fill {
  height: 100%;
  background-color: #4f46e5;
  transition: width 0.4s ease;
}

/* Vote count text */
.vote-count {
  font-size: 14px;
  color: #555;
}

/* Thank you message */
.vote-message {
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
  color: #16a34a;
}

