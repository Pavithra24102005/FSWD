import { useState } from "react";
import "./MiniOnlineQuiz.css";

function MiniOnlineQuiz() {
  const quizData = [
    {
      question: "Which language is used to build web pages?",
      options: ["Python", "HTML", "C++", "Java"],
      correct: "HTML",
    },
    {
      question: "Which language is used for styling?",
      options: ["CSS", "PHP", "SQL", "C"],
      correct: "CSS",
    },
    {
      question: "React is a _____?",
      options: ["Framework", "Library", "Language", "Database"],
      correct: "Library",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[index].correct) {
      setScore(score + 1);
    }

    if (index + 1 < quizData.length) {
      setIndex(index + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="app-container">
      <div className="quiz-card">
        <h1 className="quiz-heading">Mini Quiz</h1>

        {!isFinished ? (
          <>
            <h3 className="question-text">
              {quizData[index].question}
            </h3>

            <div className="options">
              {quizData[index].options.map((item, i) => (
                <button
                  key={i}
                  className="option-button"
                  onClick={() => handleAnswer(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="score-display">
              Score: {score}
            </p>
          </>
        ) : (
          <div className="result">
            <h2>Quiz Completed 🎉</h2>
            <p>
              Final Score: {score} / {quizData.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MiniOnlineQuiz;

* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  margin: 0;
  background-color: hwb(280 95% 3%);
}

.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz-card {
  background: hsl(298, 36%, 60%);
  width: 350px;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.quiz-heading {
  margin-bottom: 20px;
  color: #333;
}

.question-text {
  font-size: 18px;
  margin-bottom: 15px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-button {
  padding: 10px;
  border: none;
  background-color: #4f46e5;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.option-button:hover {
  background-color: #4338ca;
}

.score-display {
  margin-top: 15px;
  font-weight: bold;
}

.result h2 {
  color: #4f46e5;
}
