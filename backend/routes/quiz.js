// routes/quiz.js
const express = require('express');
const router = express.Router();
const { getQuizQuestions, submitQuiz } = require('../controllers/quizController'); // Ensure these functions are exported properly
const authMiddleware = require('../middlewares/authMiddleware');

// Route for fetching quiz questions based on topic and subtopic
router.get('/:topic/:subtopic', authMiddleware, getQuizQuestions); // Ensure this is correct

// Route for submitting quiz answers and calculating score
router.post('/:topic/:subtopic/submit', authMiddleware, submitQuiz); // Ensure this is correct

module.exports = router;
