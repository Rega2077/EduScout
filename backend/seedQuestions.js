const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Your MongoDB connection file
const getQuizModel = require('./models/QuizQuestion'); // The dynamic model function

// Connect to the database
connectDB();

const seedQuestions = async () => {
  // Get the model for the "dsa" collection
  const DSAQuiz = getQuizModel('dsa');

  const questions = [
    // dsa/array Questions
    {
      topic: "dsa",
      subtopic: "array",
      question: "What is the time complexity of accessing an element in an array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0,
    },
    {
      topic: "dsa",
      subtopic: "array",
      question: "What is the result of this array operation: [1, 2, 3, 4].push(5)?",
      options: ["[1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[5, 1, 2, 3, 4]", "Error"],
      correctAnswer: 1,
    },
    {
        topic: "dsa",
        subtopic: "array",
        question: "What is the time complexity of merging two sorted arrays into one sorted array?",
        options: ["O(n)", "O(n log n)", "O(n + m)", "O(n^2)"],
        correctAnswer: 2,
      },
      {
        topic: "dsa",
        subtopic: "array",
        question: "Which of the following is an in-place sorting algorithm?",
        options: ["Merge Sort", "Heap Sort", "Bubble Sort", "Counting Sort"],
        correctAnswer: 2,
      },
      {
        topic: "dsa",
        subtopic: "array",
        question: "What is the difference between an array and a linked list in terms of memory allocation?",
        options: ["Array is dynamic, Linked List is static", "Array is static, Linked List is dynamic", "Both are static", "Both are dynamic"],
        correctAnswer: 1,
      },
      

    // dsa/strings Questions
    {
      topic: "dsa",
      subtopic: "strings",
      question: "What is the time complexity of reversing a string of length n?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 1,
    },
    {
      topic: "dsa",
      subtopic: "strings",
      question: "Which of the following functions is used to compare two strings in C?",
      options: ["strcmp()", "strcpy()", "strlen()", "strcat()"],
      correctAnswer: 0,
    },
    {
        topic: "dsa",
        subtopic: "strings",
        question: "What is the space complexity of storing a string of length n?",
        options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
        correctAnswer: 1,
      },
      {
        topic: "dsa",
        subtopic: "strings",
        question: "Which of the following string algorithms is used for pattern searching?",
        options: ["KMP Algorithm", "Dijkstra’s Algorithm", "Floyd-Warshall Algorithm", "DFS"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "strings",
        question: "Which of the following functions is used to concatenate two strings in Python?",
        options: ["concat()", "append()", "join()", "extend()"],
        correctAnswer: 2,
      },
      

    // dsa/queue Questions
    {
      topic: "dsa",
      subtopic: "queue",
      question: "Which of the following operations is performed at the rear of a queue?",
      options: ["Enqueue", "Dequeue", "Peek", "None of the above"],
      correctAnswer: 0,
    },
    {
      topic: "dsa",
      subtopic: "queue",
      question: "Which of the following data structures can be used to implement a queue?",
      options: ["Array", "Stack", "linked-list", "All of the above"],
      correctAnswer: 3,
    },
    {
        topic: "dsa",
        subtopic: "queue",
        question: "Which of the following is the correct condition for a queue to be empty?",
        options: ["Front == Rear", "Front != Rear", "Front < Rear", "Front > Rear"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "queue",
        question: "Which of the following operations is performed at the front of a queue?",
        options: ["Enqueue", "Dequeue", "Peek", "Insert"],
        correctAnswer: 1,
      },
      {
        topic: "dsa",
        subtopic: "queue",
        question: "In a circular queue, what happens when the rear pointer reaches the end of the array?",
        options: ["It stops", "It starts from the front", "It throws an error", "None of the above"],
        correctAnswer: 1,
      },
      

    // dsa/stack Questions
    {
      topic: "dsa",
      subtopic: "stack",
      question: "What is the time complexity of push and pop operations in a stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0,
    },
    {
      topic: "dsa",
      subtopic: "stack",
      question: "Which of the following applications uses a stack data structure?",
      options: ["Recursion", "Binary Search", "Breadth First Search", "Heap"],
      correctAnswer: 0,
    },
    {
        topic: "dsa",
        subtopic: "stack",
        question: "Which of the following is not a valid operation on a stack?",
        options: ["Push", "Pop", "Peek", "Enqueue"],
        correctAnswer: 3,
      },
      {
        topic: "dsa",
        subtopic: "stack",
        question: "Which of the following data structures is best suited for implementing recursion?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correctAnswer: 1,
      },
      {
        topic: "dsa",
        subtopic: "stack",
        question: "What is the result of popping elements from an empty stack?",
        options: ["Underflow", "Overflow", "Segmentation fault", "No effect"],
        correctAnswer: 0,
      },
      

    // dsa/tree Questions
    {
      topic: "dsa",
      subtopic: "tree",
      question: "What is the time complexity of inserting an element in a balanced binary search tree?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 2,
    },
    {
      topic: "dsa",
      subtopic: "tree",
      question: "Which of the following traversal methods is also known as level-order traversal?",
      options: ["Inorder", "Preorder", "Postorder", "Breadth First Search"],
      correctAnswer: 3,
    },
    {
        topic: "dsa",
        subtopic: "tree",
        question: "Which traversal method is used to print the nodes of a binary tree in level-order?",
        options: ["Inorder", "Preorder", "Postorder", "BFS"],
        correctAnswer: 3,
      },
      {
        topic: "dsa",
        subtopic: "tree",
        question: "Which of the following is true for a full binary tree?",
        options: ["Every node has 0 or 2 children", "All leaves are at different levels", "Every node has at least 1 child", "All leaves are at the same level"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "tree",
        question: "What is the height of a binary tree with n nodes in the worst case?",
        options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
        correctAnswer: 1,
      },
      

    // dsa/graph Questions
    {
      topic: "dsa",
      subtopic: "graph",
      question: "Which algorithm is used to find the shortest path in an unweighted graph?",
      options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
      correctAnswer: 1,
    },
    {
      topic: "dsa",
      subtopic: "graph",
      question: "Which of the following is a graph traversal algorithm?",
      options: ["DFS", "Merge Sort", "Binary Search", "Quick Sort"],
      correctAnswer: 0,
    },
    {
        topic: "dsa",
        subtopic: "graph",
        question: "Which of the following algorithms is used to detect cycles in an undirected graph?",
        options: ["DFS", "BFS", "Kruskal's", "Prim's"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "graph",
        question: "In a graph, if there is an edge between two nodes, what can be said about the nodes?",
        options: ["They are adjacent", "They are disconnected", "They are part of different graphs", "They are at different levels"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "graph",
        question: "What is the time complexity of Dijkstra's algorithm with a priority queue implemented as a min-heap?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(E log V)"],
        correctAnswer: 3,
      },
      

    // dsa/hashing Questions
    {
      topic: "dsa",
      subtopic: "hashing",
      question: "Which of the following is used to resolve collisions in hashing?",
      options: ["Chaining", "Linear probing", "Quadratic probing", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "dsa",
      subtopic: "hashing",
      question: "What is the time complexity of searching an element in a hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0,
    },
    {
        topic: "dsa",
        subtopic: "hashing",
        question: "Which hashing technique uses a secondary hash function to handle collisions?",
        options: ["Chaining", "Open addressing", "Linear probing", "Double hashing"],
        correctAnswer: 3,
      },
      {
        topic: "dsa",
        subtopic: "hashing",
        question: "What is the main advantage of using a hash table over a binary search tree?",
        options: ["Faster average search time", "Less memory usage", "Faster insertions", "Faster deletions"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "hashing",
        question: "Which of the following hash functions is commonly used in cryptography?",
        options: ["MD5", "SHA-1", "SHA-256", "All of the above"],
        correctAnswer: 3,
      },
      
    // dsa/dynamic-programming Questions
    {
      topic: "dsa",
      subtopic: "dynamic-programming",
      question: "Which of the following problems can be solved using dynamic programming?",
      options: ["Fibonacci sequence", "Knapsack problem", "Matrix chain multiplication", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "dsa",
      subtopic: "dynamic-programming",
      question: "Which of the following techniques is commonly used in dynamic programming?",
      options: ["Recursion", "greedy-method", "Memoization", "Backtracking"],
      correctAnswer: 2,
    },
    {
        topic: "dsa",
        subtopic: "dynamic-programming",
        question: "Which of the following is an application of dynamic programming?",
        options: ["Knapsack problem", "Merge sort", "Binary search", "DFS"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "dynamic-programming",
        question: "Which of the following is used to optimize overlapping subproblems in dynamic programming?",
        options: ["Memoization", "Recursion", "Greedy method", "Backtracking"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "dynamic-programming",
        question: "What is the time complexity of the dynamic programming approach to the longest common subsequence problem?",
        options: ["O(n)", "O(n^2)", "O(nm)", "O(n^3)"],
        correctAnswer: 2,
      },
      

    // dsa/linked-list Questions
    {
      topic: "dsa",
      subtopic: "linked-list",
      question: "Which of the following operations is not supported by a singly linked list?",
      options: ["Insertion", "Deletion", "Traversal", "Backward traversal"],
      correctAnswer: 3,
    },
    {
      topic: "dsa",
      subtopic: "linked-list",
      question: "Which data structure can be used to implement a stack?",
      options: ["Array", "linked-list", "Both", "None"],
      correctAnswer: 2,
    },
    {
        topic: "dsa",
        subtopic: "linked-list",
        question: "What is the time complexity of deleting the last node in a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: 1,
      },
      {
        topic: "dsa",
        subtopic: "linked-list",
        question: "In a circular linked list, where does the last node point to?",
        options: ["Head node", "Tail node", "Random node", "None"],
        correctAnswer: 0,
      },
      {
        topic: "dsa",
        subtopic: "linked-list",
        question: "What is the time complexity of reversing a linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: 1,
      },
      

    // dsa/greedy-algorithms Questions
    {
      topic: "dsa",
      subtopic: "greedy-algorithms",
      question: "Which of the following algorithms follows the greedy approach?",
      options: ["Prim's algorithm", "Dijkstra's algorithm", "Kruskal's algorithm", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "dsa",
      subtopic: "greedy-algorithms",
      question: "What is the time complexity of the Kruskal’s algorithm to find the minimum spanning tree?",
      options: ["O(n)", "O(E log V)", "O(V)", "O(V log E)"],
      correctAnswer: 1,
    },
    {
        topic: "dsa",
        subtopic: "greedy-algorithms",
        question: "Which of the following is a greedy algorithm?",
        options: ["Prim's algorithm", "Dijkstra's algorithm", "Huffman coding", "All of the above"],
        correctAnswer: 3,
      },
      {
        topic: "dsa",
        subtopic: "greedy-algorithms",
        question: "Which of the following is the optimal time complexity for Kruskal’s algorithm?",
        options: ["O(n)", "O(E log V)", "O(V)", "O(n^2)"],
        correctAnswer: 1,
      },
      {
        topic: "dsa",
        subtopic: "greedy-algorithms",
        question: "Which of the following problems can be solved by the greedy method?",
        options: ["Fractional Knapsack", "Longest increasing subsequence", "Matrix chain multiplication", "Bellman-Ford"],
        correctAnswer: 0,
      },
      
  ];

  try {
    await DSAQuiz.insertMany(questions);
    console.log('DSA questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();
