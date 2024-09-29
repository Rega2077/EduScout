const mongoose = require('mongoose');

const QuizQuestionSchema = new mongoose.Schema({
  topic: {
    type: String, // e.g., "DSA"
    required: true,
  },
  subtopic: {
    type: String, // e.g., "Arrays"
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of answer options
    required: true,
  },
  correctAnswer: {
    type: Number, // Index of the correct answer in the options array
    required: true,
  }
});

module.exports = mongoose.model('QuizQuestion', QuizQuestionSchema);
