const express = require('express');
const router = express.Router();
const { getQuizQuestions, submitQuiz, getBestScores } = require('../controllers/quizController'); // Ensure getBestScores is imported
const authMiddleware = require('../middlewares/authMiddleware');

// Existing routes for quiz
router.get('/:topic/:subtopic', authMiddleware, getQuizQuestions);
router.post('/:topic/:subtopic/submit', authMiddleware, submitQuiz);

// New route for fetching best scores of the user
router.get('/best-scores', authMiddleware, getBestScores); // Route to fetch best scores

module.exports = router;
