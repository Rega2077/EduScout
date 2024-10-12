const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const QuizProgress = require('../models/QuizProgress');

// Route to get user rewards data
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const progress = await QuizProgress.find({ user: userId });

    if (!progress) {
      return res.status(404).json({ message: 'No progress found' });
    }

    const totalPoints = progress.reduce((acc, item) => acc + item.totalPoints, 0);
    const quizzesAttempted = progress.reduce((acc, item) => acc + item.quizzesAttempted, 0);
    const problemsSolved = progress.reduce((acc, item) => acc + item.problemsSolved, 0);
    const averageScore = progress.length
      ? progress.reduce((acc, item) => acc + item.averageScore, 0) / progress.length
      : 0;
    const quizzesCompleted = progress.some((item) => item.quizzesCompleted);

    res.json({ totalPoints, quizzesAttempted, problemsSolved, averageScore, quizzesCompleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
module.exports = router;

