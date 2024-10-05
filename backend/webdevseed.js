const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Your MongoDB connection file
const getQuizModel = require('./models/QuizQuestion'); // The dynamic model function

// Connect to the database
connectDB();

const seedQuestions = async () => {
  // Get the model for the "webdev" collection
  const WebDevQuiz = getQuizModel('webdev');

  const questions = [
    // HTML Questions
    {
      topic: "webdev",
      subtopic: "html",
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Markup Language"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "html",
      question: "Which HTML tag is used to define an internal stylesheet?",
      options: ["<style>", "<script>", "<css>", "<link>"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "html",
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "html",
      question: "Which attribute is used to specify a unique identifier for an HTML element?",
      options: ["class", "id", "style", "name"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "html",
      question: "What is the correct way to embed a video in HTML?",
      options: ["<embed>", "<video>", "<object>", "<iframe>"],
      correctAnswer: 1,
    },

    // CSS Questions
    {
      topic: "webdev",
      subtopic: "css",
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style System", "Computer Style Sheets"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "css",
      question: "Which property is used to change the background color of an element?",
      options: ["bgcolor", "color", "background-color", "background"],
      correctAnswer: 2,
    },
    {
      topic: "webdev",
      subtopic: "css",
      question: "How do you make the text bold in CSS?",
      options: ["font-style: bold;", "font-weight: bold;", "text-weight: bold;", "font-bold: true;"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "css",
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctAnswer: 2,
    },
    {
      topic: "webdev",
      subtopic: "css",
      question: "What is the CSS property used for flexbox layout?",
      options: ["display: flex;", "flex: layout;", "display: block;", "flex-direction: column;"],
      correctAnswer: 0,
    },

    // JavaScript Questions
    {
      topic: "webdev",
      subtopic: "javascript",
      question: "Which of the following is a correct way to write a JavaScript array?",
      options: ['var arr = ["red", "green", "blue"]', 'var arr = "red", "green", "blue"', 'var arr = (1:"red", 2:"green", 3:"blue")', 'var arr = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "javascript",
      question: "Which built-in method combines the elements of an array into a single string?",
      options: ["concat()", "join()", "pop()", "push()"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "javascript",
      question: "What does 'use strict' do in JavaScript?",
      options: ["Enforces stricter parsing", "Prevents certain actions", "All of the above", "None of the above"],
      correctAnswer: 2,
    },
    {
      topic: "webdev",
      subtopic: "javascript",
      question: "How do you define a function in JavaScript?",
      options: ["function myFunction()", "def myFunction()", "function: myFunction()", "void myFunction()"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "javascript",
      question: "What is the correct syntax to create an object in JavaScript?",
      options: ['var obj = {name: "John", age: 30}', 'var obj = {"John", 30}', 'var obj = (name = "John", age = 30)', 'var obj = ["John", 30]'],
      correctAnswer: 0,
    },

    // React Questions
    {
      topic: "webdev",
      subtopic: "react",
      question: "What is the purpose of React?",
      options: ["To manage state in web applications", "To style web pages", "To manage server-side databases", "To optimize performance"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "react",
      question: "What is JSX?",
      options: ["JavaScript XML", "JavaScript Extension", "Java and XML", "None of the above"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "react",
      question: "Which of the following is a hook in React?",
      options: ["useEffect", "useChange", "useUpdate", "useRun"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "react",
      question: "What is the purpose of the useState hook in React?",
      options: ["To create a new component", "To manage local state in functional components", "To handle routing", "To perform side effects"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "react",
      question: "What is the virtual DOM in React?",
      options: ["A copy of the actual DOM that React uses", "A part of the backend logic", "A JavaScript function", "None of the above"],
      correctAnswer: 0,
    },

    // Node.js Questions
    {
      topic: "webdev",
      subtopic: "nodejs",
      question: "What is Node.js primarily used for?",
      options: ["Front-end development", "Server-side scripting", "Database management", "Styling web pages"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "nodejs",
      question: "Which of the following is true about Node.js?",
      options: ["It is single-threaded", "It is synchronous", "It is used to manage SQL databases", "It is built on Angular"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "nodejs",
      question: "Which module is used to create a server in Node.js?",
      options: ["http", "fs", "net", "url"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "nodejs",
      question: "Which command is used to install packages in Node.js?",
      options: ["npm install", "node install", "pkg install", "install node"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "nodejs",
      question: "Which of the following is a correct statement about Node.js?",
      options: ["It uses the V8 JavaScript engine", "It is multi-threaded", "It only works with MongoDB", "It cannot handle asynchronous code"],
      correctAnswer: 0,
    },

    // Express Questions
    {
      topic: "webdev",
      subtopic: "express",
      question: "What is Express.js?",
      options: ["A front-end framework", "A back-end framework", "A database management system", "A CSS framework"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "express",
      question: "How do you define a route in Express.js?",
      options: ['app.get("/", function(req, res))', 'route.get("/", function(req, res))', 'express.route("/", function(req, res))', 'app.route("/", function(req, res))'],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "express",
      question: "Which middleware is used to parse incoming JSON requests in Express?",
      options: ["express.json()", "bodyParser.json()", "app.json()", "jsonParser()"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "express",
      question: "What is the role of middleware in Express?",
      options: ["Handling errors", "Processing HTTP requests", "Performing tasks between requests and responses", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "webdev",
      subtopic: "express",
      question: "Which command is used to start an Express.js server?",
      options: ["node server.js", "express start", "npm start server", "nodejs start"],
      correctAnswer: 0,
    },

    // MongoDB Questions
    {
      topic: "webdev",
      subtopic: "mongodb",
      question: "What type of database is MongoDB?",
      options: ["NoSQL", "SQL", "Graph", "Document"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "mongodb",
      question: "Which of the following is a method to find documents in MongoDB?",
      options: [".search()", ".find()", ".lookup()", ".query()"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "mongodb",
      question: "Which command is used to start MongoDB?",
      options: ["mongod", "mongo start", "mongo", "mongodb start"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "mongodb",
      question: "Which method is used to insert a document in MongoDB?",
      options: [".insert()", ".create()", ".insertOne()", ".put()"],
      correctAnswer: 2,
    },
    {
      topic: "webdev",
      subtopic: "mongodb",
      question: "What is the command to show collections in MongoDB?",
      options: ["show collections", "display collections", "list collections", "db.show()"],
      correctAnswer: 0,
    },

    // APIs Questions
    {
      topic: "webdev",
      subtopic: "apis",
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Application Processing Interface", "Application Procedure Interface", "Application Program Information"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "apis",
      question: "Which of the following HTTP methods is used to create a resource via an API?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "apis",
      question: "What is the purpose of the GET method in RESTful APIs?",
      options: ["To retrieve data", "To create data", "To update data", "To delete data"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "apis",
      question: "Which status code is used when a request is successfully processed?",
      options: ["200", "400", "500", "301"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "apis",
      question: "Which of the following is a stateless API protocol?",
      options: ["SOAP", "REST", "GraphQL", "RPC"],
      correctAnswer: 1,
    },

    // Deployment Questions
    {
      topic: "webdev",
      subtopic: "deployment",
      question: "Which platform is commonly used for deploying web applications?",
      options: ["GitHub", "AWS", "GitLab", "Bitbucket"],
      correctAnswer: 1,
    },
    {
      topic: "webdev",
      subtopic: "deployment",
      question: "What is a common service to host Node.js applications?",
      options: ["Heroku", "WordPress", "Jenkins", "Netlify"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "deployment",
      question: "Which tool is often used for CI/CD pipeline automation?",
      options: ["Jenkins", "MongoDB", "Docker", "Nginx"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "deployment",
      question: "What does 'scaling' refer to in web deployment?",
      options: ["Increasing the number of servers", "Adding more pages to the site", "Improving database performance", "Optimizing CSS"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "deployment",
      question: "Which of the following tools is used for containerization in deployment?",
      options: ["Docker", "Kubernetes", "Ansible", "All of the above"],
      correctAnswer: 3,
    },

    // Version Control Questions
    {
      topic: "webdev",
      subtopic: "version-control",
      question: "What is Git primarily used for?",
      options: ["Version control", "Web hosting", "Database management", "API development"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "version-control",
      question: "Which command is used to initialize a Git repository?",
      options: ["git init", "git start", "git create", "git init-repo"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "version-control",
      question: "What is a 'commit' in Git?",
      options: ["A snapshot of the repository", "A branch", "A tag", "A pull request"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "version-control",
      question: "What command is used to check the current status of a Git repository?",
      options: ["git status", "git check", "git log", "git diff"],
      correctAnswer: 0,
    },
    {
      topic: "webdev",
      subtopic: "version-control",
      question: "Which Git command is used to create a new branch?",
      options: ["git branch", "git checkout", "git clone", "git pull"],
      correctAnswer: 0,
    },
  ];

  try {
    await WebDevQuiz.insertMany(questions);
    console.log('Web Development questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();
