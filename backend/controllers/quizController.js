// controllers/quizController.js
const QuizProgress = require('../models/QuizProgress');
const QuizQuestion = require('../models/QuizQuestion');

// Function to fetch quiz questions
exports.getQuizQuestions = async (req, res) => {
  const { topic, subtopic } = req.params; // Extract topic and subtopic from request parameters
  try {
    const questions = await QuizQuestion.find({ topic, subtopic });
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this topic and subtopic' });
    }
    res.json(questions); // Return the fetched questions
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
    // Fetch questions based on topic and subtopic
    const questions = await QuizQuestion.find({ topic, subtopic });
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this topic and subtopic' });
    }

    let score = 0;
    let correctAnswers = 0;

    // Evaluate answers and calculate score
    questions.forEach((question, index) => {
      if (answers[index] !== undefined && question.correctAnswer === answers[index]) {
        correctAnswers++;
        score += 1; // Increment score for each correct answer
      }
    });

    // Fetch or create user progress record
    let progress = await QuizProgress.findOne({ user: userId, topic, subtopic });
    if (!progress) {
      progress = new QuizProgress({
        user: userId,
        topic,
        subtopic,
        quizzesAttempted: 1,
        problemsSolved: correctAnswers,
        totalPoints: 10, // Assuming 10 points for completing a quiz
        averageScore: score,
      });
    } else {
      // Update existing progress record
      progress.quizzesAttempted += 1; // Increment quizzes attempted
      progress.problemsSolved += correctAnswers; // Increment problems solved
      progress.totalPoints += 10; // Add points for this quiz
      progress.averageScore = (progress.averageScore * (progress.quizzesAttempted - 1) + score) / progress.quizzesAttempted; // Calculate new average score
    }

    // Check if all quizzes for this topic have been completed
    const totalQuizzes = await QuizQuestion.countDocuments({ topic }); // Count total quizzes for the topic
    const completedQuizzes = await QuizProgress.countDocuments({ user: userId, topic }); // Count user's completed quizzes
    if (totalQuizzes === completedQuizzes) {
      progress.quizzesCompleted = true; // Mark as completed if all quizzes are done
    }

    // Save progress to the database
    await progress.save();
    res.json({ message: 'Quiz submitted', score, bestScore: progress.bestScore, totalPoints: progress.totalPoints });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ message: 'Server Error' }); // Return server error response
  }
};
