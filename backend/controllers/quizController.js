const QuizProgress = require('../models/QuizProgress');
const QuizQuestion = require('../models/QuizQuestion');

// Function to fetch quiz questions
exports.getQuizQuestions = async (req, res) => {
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
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      if (answers[index] !== undefined && question.correctAnswer === answers[index]) {
        correctAnswers++;
        score += 1; // Increment score for each correct answer
      }
    });

    const totalQuestions = questions.length;
    const percentageScore = (score / totalQuestions) * 100;

    let progress = await QuizProgress.findOne({ user: userId, topic, subtopic });
    if (!progress) {
      progress = new QuizProgress({
        user: userId,
        topic,
        subtopic,
        quizzesAttempted: 1,
        problemsSolved: correctAnswers,
        totalPoints: 10, 
        bestScore: percentageScore,
      });
    } else {
      progress.quizzesAttempted += 1;
      progress.problemsSolved += correctAnswers;
      progress.totalPoints += 10;
      progress.bestScore = Math.max(progress.bestScore, percentageScore); // Update best score
    }

    const totalQuizzes = await QuizQuestion.countDocuments({ topic });
    const completedQuizzes = await QuizProgress.countDocuments({ user: userId, topic });
    if (totalQuizzes === completedQuizzes) {
      progress.quizzesCompleted = true;
    }

    await progress.save();
    res.json({
      message: 'Quiz submitted',
      score: percentageScore,
      bestScore: progress.bestScore,
      totalPoints: progress.totalPoints,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// New Function: Fetch best scores for the user across all topics and subtopics
exports.getBestScores = async (req, res) => {
  const userId = req.user.id; // Extract the user ID from the authenticated request

  try {
    // Fetch the best scores for all subtopics where the user has attempted quizzes
    const bestScores = await QuizProgress.find({ user: userId })
      .select('topic subtopic bestScore -_id') // Fetch only the topic, subtopic, and bestScore fields
      .lean(); // Return plain JavaScript objects for easier manipulation

    const scores = {};
    bestScores.forEach((progress) => {
      // Create a nested structure for scores by topic and subtopic
      if (!scores[progress.topic]) {
        scores[progress.topic] = {};
      }
      scores[progress.topic][progress.subtopic] = progress.bestScore; // Store best score for each subtopic
    });

    res.json(scores); // Return the best scores as a response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching best scores' });
  }
};


