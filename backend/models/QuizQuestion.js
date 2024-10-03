const mongoose = require('mongoose');

// Common schema for quiz questions
const quizQuestionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  subtopic: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true
  }
});

// Function to dynamically create and retrieve models based on the collection name (topic)
const getQuizModel = (collectionName) => {
  return mongoose.model(collectionName, quizQuestionSchema, collectionName); // Third argument is the collection name
};

module.exports = getQuizModel;
