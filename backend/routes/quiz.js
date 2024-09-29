// routes/quiz.js
const express = require('express');
const router = express.Router();
const { getQuestions, submitQuiz } = require('../controllers/quizController'); // Ensure the path is correct
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure this is correctly imported

// Route for fetching quiz questions based on topic and subtopic
router.get('/:topic/:subtopic', authMiddleware, getQuestions); // Ensure getQuestions is correctly defined

// Route for submitting quiz answers and calculating score
router.post('/:topic/:subtopic/submit', authMiddleware, submitQuiz); // Ensure submitQuiz is correctly defined

module.exports = router;
