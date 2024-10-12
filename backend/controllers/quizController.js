const QuizProgress = require('../models/QuizProgress');
const getQuizModel = require('../models/QuizQuestion'); // Dynamic model function

// Function to fetch quiz questions
exports.getQuizQuestions = async (req, res) => {
  const { topic, subtopic } = req.params;
  const QuizModel = getQuizModel(topic.toLowerCase()); // Dynamically select the collection

  try {
    const questions = await QuizModel.find({ subtopic });
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

  const QuizModel = getQuizModel(topic.toLowerCase()); // Dynamically select the collection

  try {
    const questions = await QuizModel.find({ subtopic });
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this topic and subtopic' });
    }

    let score = 0;
    let correctAnswers = 0;

    // Calculate the number of correct answers and score
    questions.forEach((question, index) => {
      if (answers[index] !== undefined && question.correctAnswer === answers[index]) {
        correctAnswers++;
        score += 1; // Increment score for each correct answer
      }
    });

    const totalQuestions = questions.length;
    const percentageScore = (score / totalQuestions) * 100;

    // Find the existing progress record for the user, topic, and subtopic
    let progress = await QuizProgress.findOne({ user: userId, topic, subtopic });
    
    if (!progress) {
      // First-time quiz attempt for this subtopic
      progress = new QuizProgress({
        user: userId,
        topic,
        subtopic,
        quizzesAttempted: 1,
        problemsSolved: correctAnswers,
        bestScore: percentageScore,
        totalPoints: percentageScore, // Set total points as best score for first attempt
        averageScore: percentageScore, // First attempt, average score equals best score
      });
    } else {
      // Quiz has already been attempted, update the progress
      const newAttemptCount = progress.quizzesAttempted + 1;

      // Update best score only if the new score is higher
      progress.bestScore = Math.max(progress.bestScore, percentageScore);

      // Calculate new average score considering previous attempts
      progress.averageScore = ((progress.averageScore * progress.quizzesAttempted) + percentageScore) / newAttemptCount;

      // Update problems solved to the maximum number solved in any attempt
      progress.problemsSolved = Math.max(progress.problemsSolved, correctAnswers);

      // Update quizzesAttempted and total points based on the current best score
      progress.quizzesAttempted = newAttemptCount;
      progress.totalPoints = progress.bestScore; // Total points reflect the best score
    }

    // Check if all quizzes for this topic have been completed
    const totalQuizzes = await QuizModel.countDocuments({ subtopic });
    const completedQuizzes = await QuizProgress.countDocuments({ user: userId, topic });
    if (totalQuizzes === completedQuizzes) {
      progress.quizzesCompleted = true;
    }

    // Save progress in the database
    await progress.save();

    res.json({
      message: 'Quiz submitted',
      score: percentageScore,
      bestScore: progress.bestScore,
      totalPoints: progress.totalPoints,
      averageScore: progress.averageScore,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Fetch best scores for the user across all topics and subtopics
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
      scores[progress.topic][progress.subtopic] = parseFloat(progress.bestScore.toFixed(2)); // Limit to 2 decimal places
    });

    res.json(scores); // Return the best scores as a response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching best scores' });
  }
};

