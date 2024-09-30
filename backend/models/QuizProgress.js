const mongoose = require('mongoose');

const QuizProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  topic: {
    type: String, // e.g., "DSA"
    required: true,
  },
  subtopic: {
    type: String, // e.g., "Arrays"
    required: true,
  },
  bestScore: {
    type: Number, // Store best score
    default: 0,
  },
  quizzesAttempted: {
    type: Number, // Track the number of quizzes attempted by the user
    default: 0,
  },
  problemsSolved: {
    type: Number, // Track total problems correctly solved by the user
    default: 0,
  },
  totalPoints: {
    type: Number, // Points earned, e.g., 10 points per quiz completed
    default: 0,
  },
  averageScore: {
    type: Number, // Average score across all quizzes in the section
    default: 0,
  },
  quizzesCompleted: {
    type: Boolean, // Whether the user completed all quizzes for a section
    default: false,
  }
});

module.exports = mongoose.model('QuizProgress', QuizProgressSchema);
