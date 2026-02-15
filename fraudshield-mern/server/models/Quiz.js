const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
      explanation: String,
    },
  ],
  score: {
    type: Number,
    default: 0,
  },
  totalQuestions: {
    type: Number,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quiz', quizSchema);
