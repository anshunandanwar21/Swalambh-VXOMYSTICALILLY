const express = require('express');
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Submit quiz result
router.post('/submit', authMiddleware, async (req, res) => {
  try {
    const { title, questions, score } = req.body;

    const quiz = new Quiz({
      userId: req.userId,
      title,
      questions,
      score,
      totalQuestions: questions.length,
    });

    await quiz.save();
    res.status(201).json({ message: 'Quiz result saved', quiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's quiz results
router.get('/user/results', authMiddleware, async (req, res) => {
  try {
    const results = await Quiz.find({ userId: req.userId }).sort({ completedAt: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
