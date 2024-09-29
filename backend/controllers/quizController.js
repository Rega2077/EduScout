// controllers/quizController.js
const QuizQuestion = require('../models/QuizQuestion');
const QuizProgress = require('../models/QuizProgress');

// Fetch quiz questions
exports.getQuestions = async (req, res) => {
  const { topic, subtopic } = req.params;

  try {
    const questions = await QuizQuestion.find({ topic, subtopic });

    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this topic and subtopic' });
    }

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Submit quiz and calculate score
exports.submitQuiz = async (req, res) => {
  const { topic, subtopic } = req.params;
  const { answers } = req.body;
  const userId = req.user.id;

  try {
    const questions = await QuizQuestion.find({ topic, subtopic });

    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this topic and subtopic' });
    }

    let score = 0;

    questions.forEach((question, index) => {
      if (answers[index] !== undefined && question.correctAnswer === answers[index]) {
        score += 1;
      }
    });

    let progress = await QuizProgress.findOne({ user: userId, topic, subtopic });
    if (!progress) {
      progress = new QuizProgress({ user: userId, topic, subtopic, bestScore: score });
    }

    if (score > progress.bestScore) {
      progress.bestScore = score;
    }

    await progress.save();
    res.json({ message: 'Quiz submitted', score, bestScore: progress.bestScore });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
