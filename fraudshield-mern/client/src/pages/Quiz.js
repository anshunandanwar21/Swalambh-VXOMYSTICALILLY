import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../styles/Quiz.css';

const Quiz = () => {
  const { user, token } = useContext(AuthContext);
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Sample quiz data - can be fetched from backend
  const sampleQuiz = {
    title: 'Cybersecurity Basics',
    questions: [
      {
        question: 'What is phishing?',
        options: [
          'A fishing technique',
          'Fraudulent attempt to obtain sensitive information',
          'A type of malware',
          'Network security protocol',
        ],
        correctAnswer: 'Fraudulent attempt to obtain sensitive information',
      },
      {
        question: 'Which is a strong password?',
        options: [
          '123456',
          'password',
          'MyP@ssw0rd!2024',
          'qwerty',
        ],
        correctAnswer: 'MyP@ssw0rd!2024',
      },
      {
        question: 'What should you do if you receive a suspicious email?',
        options: [
          'Click on the link to verify',
          'Reply to the sender',
          'Delete and report as spam',
          'Forward to others',
        ],
        correctAnswer: 'Delete and report as spam',
      },
    ],
  };

  const startQuiz = () => {
    setQuiz(sampleQuiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      submitQuizResult();
    }
  };

  const submitQuizResult = async () => {
    if (!user || !token) return;

    try {
      await axios.post('/api/quiz/submit', {
        title: sampleQuiz.title,
        questions: sampleQuiz.questions,
        score: score,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const resetQuiz = () => {
    setQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (!quiz) {
    return (
      <div className="quiz-container">
        <div className="quiz-intro">
          <h1>🎓 Cybersecurity Quiz</h1>
          <p>Test your knowledge about cybersecurity and protect yourself online!</p>
          <button onClick={startQuiz} className="start-btn">Start Quiz</button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="quiz-container">
        <div className="results">
          <h2>Quiz Completed!</h2>
          <div className="score-display">
            <h3>Your Score: {score}/{quiz.questions.length}</h3>
            <p className="percentage">{percentage}%</p>
          </div>
          <p className="result-message">
            {percentage >= 80 && 'Excellent! You have great cybersecurity knowledge.'}
            {percentage >= 60 && percentage < 80 && 'Good job! Keep learning to improve further.'}
            {percentage < 60 && 'Keep practicing! Visit our awareness section to learn more.'}
          </p>
          <button onClick={resetQuiz} className="retry-btn">Take Quiz Again</button>
          {user && <button onClick={() => navigate('/awareness')} className="learn-btn">Learn More</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-question">
        <div className="progress">
          <div className="progress-bar" style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}></div>
        </div>
        <p className="question-number">Question {currentQuestion + 1}/{quiz.questions.length}</p>
        <h2>{quiz.questions[currentQuestion].question}</h2>

        <div className="options">
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="option-btn"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
