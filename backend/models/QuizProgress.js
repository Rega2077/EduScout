const mongoose = require('mongoose');

const QuizProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
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
    type: Number,
    default: 0, // Store the highest score
  },
});

module.exports = mongoose.model('QuizProgress', QuizProgressSchema);
