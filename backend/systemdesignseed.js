const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Your MongoDB connection file
const getQuizModel = require('./models/QuizQuestion'); // The dynamic model function

// Connect to the database
connectDB();

const seedQuestions = async () => {
  // Get the model for the "systemdesign" collection
  const SystemDesignQuiz = getQuizModel('systemdesign');

  const questions = [
    // Scalability Questions
    {
      topic: "systemdesign",
      subtopic: "scalability",
      question: "What is the primary goal of scalability in system design?",
      options: ["To increase the database size", "To handle increasing workload efficiently", "To improve UI performance", "To reduce memory usage"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "scalability",
      question: "Which of the following is an example of vertical scaling?",
      options: ["Adding more CPU to a server", "Adding more servers", "Splitting databases", "Using caching"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "scalability",
      question: "What is horizontal scaling?",
      options: ["Increasing the server's RAM", "Adding more instances of servers", "Reducing the server's load", "Using cloud storage"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "scalability",
      question: "Which technique helps to scale databases horizontally?",
      options: ["Sharding", "Normalization", "Caching", "Replication"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "scalability",
      question: "Which cloud service helps with automatic scalability?",
      options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon Lambda"],
      correctAnswer: 3,
    },

    // Load Balancing Questions
    {
      topic: "systemdesign",
      subtopic: "load-balancing",
      question: "What is the primary function of a load balancer?",
      options: ["Improve database performance", "Distribute incoming traffic across multiple servers", "Cache server responses", "Monitor server logs"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "load-balancing",
      question: "Which type of load balancer operates at the transport layer (Layer 4) of the OSI model?",
      options: ["DNS load balancer", "Application load balancer", "Network load balancer", "HTTP load balancer"],
      correctAnswer: 2,
    },
    {
      topic: "systemdesign",
      subtopic: "load-balancing",
      question: "Which algorithm is commonly used for load balancing?",
      options: ["Round Robin", "Depth First Search", "Breadth First Search", "Linear Regression"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "load-balancing",
      question: "Which load balancing technique helps to route traffic based on resource availability?",
      options: ["Least Connection", "Random", "Round Robin", "Least Response Time"],
      correctAnswer: 3,
    },
    {
      topic: "systemdesign",
      subtopic: "load-balancing",
      question: "Which of the following is a potential issue with load balancing?",
      options: ["Single point of failure", "Decreased scalability", "Increased latency", "Decreased server load"],
      correctAnswer: 0,
    },

    // Caching Questions
    {
      topic: "systemdesign",
      subtopic: "caching",
      question: "What is the primary purpose of caching in system design?",
      options: ["To store backups", "To reduce database load by storing frequently accessed data", "To store logs", "To load balance the servers"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "caching",
      question: "Which type of cache stores data locally within the application server?",
      options: ["Distributed cache", "In-memory cache", "Remote cache", "Relational cache"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "caching",
      question: "Which caching strategy is best when only the most frequently accessed items should be cached?",
      options: ["Write-through caching", "Read-through caching", "Least Recently Used (LRU)", "Write-back caching"],
      correctAnswer: 2,
    },
    {
      topic: "systemdesign",
      subtopic: "caching",
      question: "Which of the following is a distributed caching system?",
      options: ["Redis", "MongoDB", "MySQL", "RabbitMQ"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "caching",
      question: "Which caching technique writes data to the cache when a change occurs in the database?",
      options: ["Write-back cache", "Write-through cache", "Read-through cache", "Read-back cache"],
      correctAnswer: 1,
    },

    // Database Design Questions
    {
      topic: "systemdesign",
      subtopic: "database-design",
      question: "What is the process of organizing data to reduce redundancy called?",
      options: ["Normalization", "Denormalization", "Sharding", "Partitioning"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "database-design",
      question: "What is a common strategy for horizontally partitioning a database?",
      options: ["Sharding", "Replication", "Indexing", "Caching"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "database-design",
      question: "Which of the following is an ACID property in database design?",
      options: ["Atomicity", "Cohesion", "Dependency", "Aggregation"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "database-design",
      question: "Which database design strategy sacrifices consistency for availability in distributed systems?",
      options: ["BASE", "ACID", "CAP Theorem", "2PC"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "database-design",
      question: "Which indexing method is commonly used in databases to improve query performance?",
      options: ["B-Tree", "DAG", "HashMap", "Graph"],
      correctAnswer: 0,
    },

    // Microservices Questions
    {
      topic: "systemdesign",
      subtopic: "microservices",
      question: "What is the primary benefit of using microservices architecture?",
      options: ["Improved security", "Easier scalability and deployment", "Single point of failure", "Faster development of monolithic systems"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "microservices",
      question: "Which communication protocol is commonly used between microservices?",
      options: ["HTTP/REST", "FTP", "SMTP", "POP3"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "microservices",
      question: "Which pattern is used to ensure that one microservice does not overload others with too many requests?",
      options: ["Circuit Breaker", "Cache Aside", "Event Sourcing", "CQRS"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "microservices",
      question: "Which approach is typically used for deploying microservices independently?",
      options: ["CI/CD pipelines", "Monolithic deployment", "Database replication", "Virtualization"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "microservices",
      question: "Which of the following helps manage communication between microservices and provides load balancing?",
      options: ["API Gateway", "Message Queue", "Load Balancer", "Service Registry"],
      correctAnswer: 0,
    },

    // API Design Questions
    {
      topic: "systemdesign",
      subtopic: "api-design",
      question: "What does REST stand for in the context of API design?",
      options: ["Random Event Service Transfer", "Representational State Transfer", "Remote Endpoint Service Technology", "Resource System Transfer"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "api-design",
      question: "Which HTTP method is used to update a resource in RESTful API design?",
      options: ["POST", "PUT", "GET", "DELETE"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "api-design",
      question: "Which of the following is NOT a constraint of RESTful API?",
      options: ["Stateless", "Cacheable", "Client-Server", "Multithreaded"],
      correctAnswer: 3,
    },
    {
      topic: "systemdesign",
      subtopic: "api-design",
      question: "What is an API Gateway used for?",
      options: ["Manage service-to-service communication", "Cache API requests", "Rate-limiting API requests", "Handle external client requests"],
      correctAnswer: 3,
    },
    {
      topic: "systemdesign",
      subtopic: "api-design",
      question: "Which of the following is used to document REST APIs?",
      options: ["Swagger", "Git", "MongoDB", "Redis"],
      correctAnswer: 0,
    },

    // Message Queues Questions
    {
      topic: "systemdesign",
      subtopic: "message-queues",
      question: "What is the main function of a message queue?",
      options: ["Store logs", "Facilitate asynchronous communication between services", "Balance load", "Cache frequently used data"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "message-queues",
      question: "Which of the following is an example of a message queue?",
      options: ["RabbitMQ", "Redis", "PostgreSQL", "Kafka"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "message-queues",
      question: "What is the benefit of using message queues in system design?",
      options: ["Synchronous communication", "High throughput", "Decoupling of services", "Faster query execution"],
      correctAnswer: 2,
    },
    {
      topic: "systemdesign",
      subtopic: "message-queues",
      question: "Which messaging pattern is commonly used in message queues?",
      options: ["Publish/Subscribe", "Round Robin", "Linear Regression", "DAG"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "message-queues",
      question: "What is the main difference between a queue and a topic in message queues?",
      options: ["Queues store messages, topics broadcast messages to subscribers", "Queues distribute messages in a round-robin fashion", "Topics handle synchronous messaging", "Queues use hash-based distribution"],
      correctAnswer: 0,
    },

    // Data Modeling Questions
    {
      topic: "systemdesign",
      subtopic: "data-modeling",
      question: "What is data modeling primarily used for?",
      options: ["Creating UI templates", "Designing the structure of a database", "Generating data backups", "Optimizing caching strategies"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "data-modeling",
      question: "Which of the following is a conceptual data model?",
      options: ["ER Diagram", "B-Tree", "Bash Script", "Cluster Model"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "data-modeling",
      question: "Which of the following relationships is represented in an ER diagram?",
      options: ["One-to-One", "One-to-Many", "Many-to-Many", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "systemdesign",
      subtopic: "data-modeling",
      question: "Which normalization form eliminates duplicate columns in a table?",
      options: ["First Normal Form", "Second Normal Form", "Third Normal Form", "Boyce-Codd Normal Form"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "data-modeling",
      question: "Which of the following is a common tool for data modeling?",
      options: ["MySQL Workbench", "AWS S3", "Docker", "Redis"],
      correctAnswer: 0,
    },

    // Event-Driven Architecture Questions
    {
      topic: "systemdesign",
      subtopic: "event-driven-architecture",
      question: "What is event-driven architecture?",
      options: ["A system that responds to state changes or events", "A type of monolithic architecture", "A load balancing technique", "A UI design pattern"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "event-driven-architecture",
      question: "Which of the following is commonly used in event-driven architecture?",
      options: ["Event Producer", "Event Consumer", "Event Broker", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "systemdesign",
      subtopic: "event-driven-architecture",
      question: "Which protocol is often used to facilitate event-driven messaging?",
      options: ["HTTP", "AMQP", "SMTP", "FTP"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "event-driven-architecture",
      question: "What is the primary advantage of event-driven architecture?",
      options: ["Tight coupling between services", "Asynchronous communication", "Better data integrity", "Improved latency"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "event-driven-architecture",
      question: "Which of the following is an event-driven messaging system?",
      options: ["Apache Kafka", "Redis", "MySQL", "PostgreSQL"],
      correctAnswer: 0,
    },

    // Monitoring and Logging Questions
    {
      topic: "systemdesign",
      subtopic: "monitoring-and-logging",
      question: "What is the primary purpose of monitoring in system design?",
      options: ["To balance load", "To ensure system health and performance", "To reduce database size", "To improve caching strategies"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "monitoring-and-logging",
      question: "Which tool is commonly used for monitoring system performance?",
      options: ["Prometheus", "MongoDB", "Redis", "Kafka"],
      correctAnswer: 0,
    },
    {
      topic: "systemdesign",
      subtopic: "monitoring-and-logging",
      question: "Which of the following is a benefit of centralized logging?",
      options: ["Improved performance", "Easier analysis and debugging", "Reduced logging size", "Faster response time"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "monitoring-and-logging",
      question: "What is the primary function of log aggregation tools?",
      options: ["To replicate logs across servers", "To gather and centralize logs from various sources", "To compress logs", "To delete old logs automatically"],
      correctAnswer: 1,
    },
    {
      topic: "systemdesign",
      subtopic: "monitoring-and-logging",
      question: "Which of the following is a widely used logging tool?",
      options: ["ELK Stack", "MySQL", "Redis", "Kafka"],
      correctAnswer: 0,
    },
  ];

  try {
    await SystemDesignQuiz.insertMany(questions);
    console.log('System Design questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();
