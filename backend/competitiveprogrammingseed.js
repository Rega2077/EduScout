const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Your MongoDB connection file
const getQuizModel = require('./models/QuizQuestion'); // The dynamic model function

// Connect to the database
connectDB();

const seedQuestions = async () => {
  // Get the model for the "competitiveprogramming" collection
  const CPQuiz = getQuizModel('competitiveprogramming');

  const questions = [
    // Sorting Algorithms Questions
    {
      topic: "competitiveprogramming",
      subtopic: "sorting-algorithms",
      question: "What is the time complexity of Quick Sort in the average case?",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "sorting-algorithms",
      question: "Which of the following sorting algorithms is stable?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "sorting-algorithms",
      question: "What is the main advantage of using Merge Sort over Quick Sort?",
      options: ["Lower space complexity", "Stability", "Better average performance", "In-place sorting"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "sorting-algorithms",
      question: "In which case does Bubble Sort perform optimally?",
      options: ["When the array is already sorted", "When the array is reversed", "When the array contains all identical elements", "In random cases"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "sorting-algorithms",
      question: "What is the time complexity of the Counting Sort algorithm?",
      options: ["O(n + k)", "O(n log n)", "O(n^2)", "O(k log k)"],
      correctAnswer: 0,
    },

    // Dynamic Programming Questions
    {
      topic: "competitiveprogramming",
      subtopic: "dynamic-programming",
      question: "What is the main advantage of using dynamic programming?",
      options: ["Lower time complexity", "Higher space complexity", "More intuitive solutions", "No need for recursion"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "dynamic-programming",
      question: "Which of the following problems can be solved using dynamic programming?",
      options: ["Fibonacci sequence", "Towers of Hanoi", "Binary Search", "Bubble Sort"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "dynamic-programming",
      question: "What does the term 'overlapping subproblems' mean?",
      options: ["Problems can be divided into subproblems", "The subproblems can be solved independently", "Subproblems are reused multiple times", "None of the above"],
      correctAnswer: 2,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "dynamic-programming",
      question: "What is the time complexity of the dynamic programming solution to the 0/1 Knapsack problem?",
      options: ["O(n)", "O(nW)", "O(2^n)", "O(n log n)"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "dynamic-programming",
      question: "Which dynamic programming approach builds a solution from the bottom up?",
      options: ["Top-down", "Bottom-up", "Greedy", "Brute force"],
      correctAnswer: 1,
    },

    // Greedy Algorithms Questions
    {
      topic: "competitiveprogramming",
      subtopic: "greedy-algorithms",
      question: "Which of the following problems can be solved using a greedy algorithm?",
      options: ["Fractional Knapsack", "0/1 Knapsack", "Longest Common Subsequence", "Matrix Chain Multiplication"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "greedy-algorithms",
      question: "What is the main principle behind greedy algorithms?",
      options: ["Choosing the best option at the moment", "Choosing the average option", "Choosing the worst option", "Choosing all possible options"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "greedy-algorithms",
      question: "What is the time complexity of Dijkstra’s algorithm using a priority queue?",
      options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
      correctAnswer: 2,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "greedy-algorithms",
      question: "In which scenario might a greedy algorithm fail to find an optimal solution?",
      options: ["When the problem has overlapping subproblems", "When the problem can be divided into subproblems", "When a local optimum does not lead to a global optimum", "When the solution is unique"],
      correctAnswer: 2,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "greedy-algorithms",
      question: "Which of the following is a greedy algorithm for finding the minimum spanning tree?",
      options: ["Kruskal's Algorithm", "Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Prim's Algorithm"],
      correctAnswer: 0,
    },

    // Graph Theory Questions
    {
      topic: "competitiveprogramming",
      subtopic: "graph-theory",
      question: "What is the time complexity of BFS in a graph with V vertices and E edges?",
      options: ["O(V + E)", "O(V^2)", "O(E)", "O(V log V)"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "graph-theory",
      question: "Which data structure is primarily used for implementing DFS?",
      options: ["Queue", "Stack", "Linked List", "Array"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "graph-theory",
      question: "Which algorithm is used to find the shortest path in a weighted graph?",
      options: ["Kruskal's Algorithm", "Dijkstra's Algorithm", "Prim's Algorithm", "Floyd-Warshall Algorithm"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "graph-theory",
      question: "What is the main characteristic of a bipartite graph?",
      options: ["All vertices are connected", "It can be colored using two colors", "It has an even number of vertices", "It is a complete graph"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "graph-theory",
      question: "In a graph, what does a cycle mean?",
      options: ["A path that starts and ends at the same vertex", "A path that visits all vertices", "A connected component", "None of the above"],
      correctAnswer: 0,
    },

    // Backtracking Questions
    {
      topic: "competitiveprogramming",
      subtopic: "backtracking",
      question: "Which of the following problems can be solved using backtracking?",
      options: ["Sudoku Solver", "Sorting", "Searching", "Dynamic Programming"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "backtracking",
      question: "What is the main idea behind backtracking?",
      options: ["Iterating through all possibilities", "Finding the optimal solution", "Eliminating paths that do not lead to a solution", "Using a greedy approach"],
      correctAnswer: 2,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "backtracking",
      question: "Which of the following is a classic example of a backtracking problem?",
      options: ["N-Queens Problem", "Binary Search", "Merge Sort", "Graph Traversal"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "backtracking",
      question: "What is the time complexity of the N-Queens Problem using backtracking?",
      options: ["O(n^2)", "O(n!)", "O(2^n)", "O(n^3)"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "backtracking",
      question: "In backtracking, what does 'pruning' refer to?",
      options: ["Eliminating branches that do not lead to a solution", "Finding the optimal solution", "Exploring all possible solutions", "None of the above"],
      correctAnswer: 0,
    },

    // Recursion Questions
    {
      topic: "competitiveprogramming",
      subtopic: "recursion",
      question: "What is the base case in recursion?",
      options: ["The case that terminates the recursion", "The first recursive call", "The case that always returns false", "None of the above"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "recursion",
      question: "What is the time complexity of the Fibonacci sequence using naive recursion?",
      options: ["O(n)", "O(log n)", "O(2^n)", "O(n^2)"],
      correctAnswer: 2,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "recursion",
      question: "Which of the following problems is best solved using recursion?",
      options: ["Iterating through an array", "Binary Search", "Bubble Sort", "Selection Sort"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "recursion",
      question: "What is a common drawback of using recursion?",
      options: ["High space complexity due to call stack", "Easy to understand", "Faster than iterative solutions", "None of the above"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "recursion",
      question: "In recursion, what happens when there is no base case?",
      options: ["The function terminates", "The function runs indefinitely", "The function returns zero", "The function returns null"],
      correctAnswer: 1,
    },

    // Bit Manipulation Questions
    {
      topic: "competitiveprogramming",
      subtopic: "bit-manipulation",
      question: "What is the result of the expression 5 & 3 in binary?",
      options: ["1", "2", "3", "5"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "bit-manipulation",
      question: "Which of the following operations is used to set a bit to 1?",
      options: ["AND", "OR", "XOR", "NOT"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "bit-manipulation",
      question: "What does the term 'bit masking' refer to?",
      options: ["Using bits to create a mask", "Manipulating bits to achieve a desired outcome", "Changing the bit representation of a number", "None of the above"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "bit-manipulation",
      question: "What is the time complexity of checking if a number is a power of two using bit manipulation?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "bit-manipulation",
      question: "What is the result of left shifting the binary number 101 by 2?",
      options: ["10100", "101000", "10000", "1000"],
      correctAnswer: 0,
    },

    // Number Theory Questions
    {
      topic: "competitiveprogramming",
      subtopic: "number-theory",
      question: "What is the greatest common divisor (GCD) of 48 and 18?",
      options: ["6", "12", "18", "24"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "number-theory",
      question: "Which of the following is a prime number?",
      options: ["1", "4", "6", "7"],
      correctAnswer: 3,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "number-theory",
      question: "What is the time complexity of the Sieve of Eratosthenes algorithm?",
      options: ["O(n log log n)", "O(n^2)", "O(n log n)", "O(n)"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "number-theory",
      question: "What is Fermat's Little Theorem used for?",
      options: ["Finding prime factors", "Checking if a number is prime", "Calculating GCD", "Finding divisors"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "number-theory",
      question: "Which of the following algorithms can be used for fast modular exponentiation?",
      options: ["Exponentiation by squaring", "Euclidean algorithm", "Sieve of Eratosthenes", "None of the above"],
      correctAnswer: 0,
    },

    // Game Theory Questions
    {
      topic: "competitiveprogramming",
      subtopic: "game-theory",
      question: "What is the primary concept behind Nash Equilibrium?",
      options: ["Optimal strategy for all players", "Dominant strategy for one player", "Minimax strategy", "Randomized strategy"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "game-theory",
      question: "Which of the following is a zero-sum game?",
      options: ["Tic Tac Toe", "Chess", "Poker", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "game-theory",
      question: "What is a dominant strategy in game theory?",
      options: ["A strategy that is best for one player regardless of what others do", "A strategy that always results in a win", "A strategy that guarantees a draw", "A strategy that is the worst case"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "game-theory",
      question: "What is the purpose of backward induction in game theory?",
      options: ["To predict the opponent's moves", "To determine the optimal strategies for all players", "To minimize losses", "To maximize the payoff"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "game-theory",
      question: "What is the minimax algorithm primarily used for?",
      options: ["To find the shortest path", "To calculate the optimal strategy in zero-sum games", "To evaluate game states", "To determine Nash Equilibrium"],
      correctAnswer: 1,
    },

    // Competitive Programming Techniques Questions
    {
      topic: "competitiveprogramming",
      subtopic: "competitive-programming-techniques",
      question: "What is the primary goal of competitive programming?",
      options: ["To solve problems in a given time", "To implement real-world applications", "To learn data structures", "To optimize code readability"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "competitive-programming-techniques",
      question: "Which of the following techniques is useful for reducing time complexity?",
      options: ["Memoization", "Brute force", "Recursive backtracking", "Greedy method"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "competitive-programming-techniques",
      question: "What is the best way to approach a new competitive programming problem?",
      options: ["Jump into coding", "Understand the problem statement and constraints", "Ask for hints", "Check online solutions"],
      correctAnswer: 1,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "competitive-programming-techniques",
      question: "Which of the following is a common mistake in competitive programming?",
      options: ["Ignoring edge cases", "Writing clean code", "Testing with sample inputs", "Breaking down problems"],
      correctAnswer: 0,
    },
    {
      topic: "competitiveprogramming",
      subtopic: "competitive-programming-techniques",
      question: "What is a common practice to improve problem-solving skills in competitive programming?",
      options: ["Practice regularly", "Read theory", "Solve random problems", "All of the above"],
      correctAnswer: 3,
    },
  ];

  try {
    await CPQuiz.insertMany(questions);
    console.log('Competitive Programming questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();
