const mongoose = require('mongoose');
const QuizQuestion = require('./models/QuizQuestion'); // Adjust path as necessary

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/MyappDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the questions to seed for all dsa topics
const seedQuestions = async () => {
  const questions = [
    // dsa/queue Questions
    {
      topic: "dsa",
      subtopic: "queue",
      question: "Which of the following operations is performed at the rear of a queue?",
      options: ["Enqueue", "Dequeue", "Peek", "None of the above"],
      correctAnswer: 0, // Enqueue
    },
    {
      topic: "dsa",
      subtopic: "queue",
      question: "Which of the following data structures can be used to implement a queue?",
      options: ["Array", "Stack", "linked-list", "All of the above"],
      correctAnswer: 3, // All of the above
    },
    {
      topic: "dsa",
      subtopic: "queue",
      question: "What is the time complexity of inserting an element into a queue?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0, // O(1)
    },

    // dsa/tree Questions
    {
      topic: "dsa",
      subtopic: "tree",
      question: "What is the time complexity of inserting an element in a balanced binary search tree?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 2, // O(log n)
    },
    {
      topic: "dsa",
      subtopic: "tree",
      question: "Which of the following traversal methods is also known as level-order traversal?",
      options: ["Inorder", "Preorder", "Postorder", "Breadth First Search"],
      correctAnswer: 3, // Breadth First Search
    },
    {
      topic: "dsa",
      subtopic: "tree",
      question: "What is the maximum number of children a binary tree node can have?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1, // 2
    },

    // dsa/graph Questions
    {
      topic: "dsa",
      subtopic: "graph",
      question: "Which algorithm is used to find the shortest path in an unweighted graph?",
      options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
      correctAnswer: 1, // BFS
    },
    {
      topic: "dsa",
      subtopic: "graph",
      question: "Which of the following is a graph traversal algorithm?",
      options: ["DFS", "Merge Sort", "Binary Search", "Quick Sort"],
      correctAnswer: 0, // DFS
    },
    {
      topic: "dsa",
      subtopic: "graph",
      question: "Which of the following algorithms is used to detect cycles in a graph?",
      options: ["Prim’s", "Kruskal’s", "Floyd-Warshall", "DFS"],
      correctAnswer: 3, // DFS
    },

    // dsa/hashing Questions
    {
      topic: "dsa",
      subtopic: "hashing",
      question: "Which of the following is used to resolve collisions in hashing?",
      options: ["Chaining", "Linear probing", "Quadratic probing", "All of the above"],
      correctAnswer: 3, // All of the above
    },
    {
      topic: "dsa",
      subtopic: "hashing",
      question: "What is the time complexity of searching an element in a hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0, // O(1)
    },
    {
      topic: "dsa",
      subtopic: "hashing",
      question: "What is the main disadvantage of using open addressing in hashing?",
      options: ["Increased collisions", "Decreased performance", "Memory wastage", "Clustering"],
      correctAnswer: 3, // Clustering
    },

    // dsa/dynamic-programming Questions
    {
      topic: "dsa",
      subtopic: "dynamic-programming",
      question: "Which of the following problems can be solved using dynamic programming?",
      options: ["Fibonacci sequence", "Knapsack problem", "Matrix chain multiplication", "All of the above"],
      correctAnswer: 3, // All of the above
    },
    {
      topic: "dsa",
      subtopic: "dynamic-programming",
      question: "Which of the following techniques is commonly used in dynamic programming?",
      options: ["Recursion", "greedy-aethod", "Memoization", "Backtracking"],
      correctAnswer: 2, // Memoization
    },
    {
      topic: "dsa",
      subtopic: "dynamic-programming",
      question: "What is the time complexity of the dynamic programming solution for the 0/1 knapsack problem?",
      options: ["O(n)", "O(n^2)", "O(nW)", "O(n^3)"],
      correctAnswer: 2, // O(nW)
    },

    // dsa/linked-list Questions
    {
      topic: "dsa",
      subtopic: "linked-list",
      question: "Which of the following operations is not supported by a singly linked list?",
      options: ["Insertion", "Deletion", "Traversal", "Backward traversal"],
      correctAnswer: 3, // Backward traversal
    },
    {
      topic: "dsa",
      subtopic: "linked-list",
      question: "Which data structure can be used to implement a stack?",
      options: ["Array", "linked-list", "Both", "None"],
      correctAnswer: 2, // Both
    },
    {
      topic: "dsa",
      subtopic: "linked-list",
      question: "What is the time complexity of inserting a node at the beginning of a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0, // O(1)
    },

    // dsa/greedy-algorithms Questions
    {
      topic: "dsa",
      subtopic: "greedy-algorithms",
      question: "Which of the following algorithms follows the greedy approach?",
      options: ["Prim's algorithm", "Dijkstra's algorithm", "Kruskal's algorithm", "All of the above"],
      correctAnswer: 3, // All of the above
    },
    {
      topic: "dsa",
      subtopic: "greedy-algorithms",
      question: "What is the time complexity of the Kruskal’s algorithm to find the minimum spanning tree?",
      options: ["O(n)", "O(E log V)", "O(V)", "O(V log E)"],
      correctAnswer: 1, // O(E log V)
    },
    {
      topic: "dsa",
      subtopic: "greedy-algorithms",
      question: "Which of the following problems can be solved using the greedy algorithm?",
      options: ["Fractional knapsack", "Matrix chain multiplication", "Longest common subsequence", "All pairs shortest path"],
      correctAnswer: 0, // Fractional knapsack
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
