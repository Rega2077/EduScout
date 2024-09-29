const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Adjust the path if necessary
const QuizQuestion = require('./models/QuizQuestion'); // Import your QuizQuestion model

// Connect to the database
connectDB();

const seedQuizQuestions = async () => {
  const questions = [
    {
      topic: "dsa",
      subtopic: "arrays",
      question: "What is the time complexity of accessing an element in an array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0, // O(1) is the correct answer
    },
    {
      topic: "dsa",
      subtopic: "arrays",
      question: "What is the result of this array operation: [1, 2, 3, 4].push(5)?",
      options: ["[1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[5, 1, 2, 3, 4]", "Error"],
      correctAnswer: 1, // [1, 2, 3, 4, 5] is the correct answer
    },
    {
      topic: "dsa",
      subtopic: "arrays",
      question: "Which of the following algorithms is best for finding the maximum subarray sum?",
      options: ["Merge Sort", "Kadane's Algorithm", "Quick Sort", "Binary Search"],
      correctAnswer: 1, // Kadane's Algorithm is the correct answer
    },
    {
      topic: "dsa",
      subtopic: "arrays",
      question: "What is the best time complexity for sorting an array?",
      options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
      correctAnswer: 0, // O(n log n) is the correct answer
    },
    {
      topic: "dsa",
      subtopic: "arrays",
      question: "What is the best approach for rotating an array to the right by k positions?",
      options: [
        "Using a temporary array",
        "Reversing the array in parts",
        "Bubble sort technique",
        "Using recursion"
      ],
      correctAnswer: 1, // Reversing the array in parts is the correct answer
    },
  ];

  try {
    await QuizQuestion.insertMany(questions);
    console.log("Quiz questions seeded successfully!");
  } catch (error) {
    console.error("Error seeding questions:", error);
  } finally {
    // Close the connection after seeding
    mongoose.connection.close();
  }
};

seedQuizQuestions();
