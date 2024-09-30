const mongoose = require('mongoose');
const QuizQuestion = require('./models/QuizQuestion'); // Adjust path as necessary

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/MyappDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the questions to seed for dsa/strings and dsa/stack
const seedQuestions = async () => {
  const questions = [
    // dsa/strings Questions
    {
      topic: "dsa",
      subtopic: "strings",
      question: "What is the time complexity of reversing a string of length n?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 1, // O(n)
    },
    {
      topic: "dsa",
      subtopic: "strings",
      question: "Which of the following functions is used to compare two strings in C?",
      options: ["strcmp()", "strcpy()", "strlen()", "strcat()"],
      correctAnswer: 0, // strcmp()
    },
    {
      topic: "dsa",
      subtopic: "strings",
      question: "Which of the following is a palindrome string?",
      options: ["apple", "radar", "banana", "orange"],
      correctAnswer: 1, // radar
    },
    {
      topic: "dsa",
      subtopic: "strings",
      question: "What is the output of the following code: printf('%d', strlen('Hello World'));?",
      options: ["10", "11", "12", "9"],
      correctAnswer: 1, // 11
    },
    {
      topic: "dsa",
      subtopic: "strings",
      question: "Which of the following is not a string function in C?",
      options: ["strcat()", "strcpy()", "strlen()", "strsub()"],
      correctAnswer: 3, // strsub()
    },

    // dsa/stack Questions
    {
      topic: "dsa",
      subtopic: "stack",
      question: "What is the time complexity of push and pop operations in a stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0, // O(1)
    },
    {
      topic: "dsa",
      subtopic: "stack",
      question: "Which of the following applications uses a stack data structure?",
      options: ["Recursion", "Binary Search", "Breadth First Search", "Heap"],
      correctAnswer: 0, // Recursion
    },
    {
      topic: "dsa",
      subtopic: "stack",
      question: "What is the result of the following sequence of stack operations: push(1), push(2), pop(), push(3), pop(), pop()?",
      options: ["3", "2", "1", "0"],
      correctAnswer: 2, // 1
    },
    {
      topic: "dsa",
      subtopic: "stack",
      question: "In which of the following scenarios should you use a stack?",
      options: [
        "Managing function calls in recursion",
        "Processing elements in breadth-first search",
        "Heap sort implementation",
        "Memory allocation",
      ],
      correctAnswer: 0, // Managing function calls in recursion
    },
    {
      topic: "dsa",
      subtopic: "stack",
      question: "Which data structure can be used to convert infix notation to postfix notation?",
      options: ["Queue", "stack", "Array", "Tree"],
      correctAnswer: 1, // stack
    },
  ];

  try {
    await QuizQuestion.insertMany(questions);
    console.log('Questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();
