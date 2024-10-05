const mongoose = require('mongoose');
const connectDB = require('./config/db'); // Your MongoDB connection file
const getQuizModel = require('./models/QuizQuestion'); // The dynamic model function

// Connect to the database
connectDB();

const seedQuestions = async () => {
  // Get the model for the "databasemanagement" collection
  const DBMSQuiz = getQuizModel('databasemanagement');

  const questions = [
    // SQL Basics Questions
    {
      topic: "databasemanagement",
      subtopic: "sql-basics",
      question: "Which of the following is used to retrieve data from a database?",
      options: ["DELETE", "SELECT", "INSERT", "UPDATE"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "sql-basics",
      question: "What does the acronym SQL stand for?",
      options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "sql-basics",
      question: "Which SQL clause is used to filter records?",
      options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "sql-basics",
      question: "Which keyword is used in SQL to sort the result-set?",
      options: ["SORT", "ORDER BY", "GROUP BY", "FILTER"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "sql-basics",
      question: "Which SQL statement is used to update data in a database?",
      options: ["UPDATE", "MODIFY", "ALTER", "CHANGE"],
      correctAnswer: 0,
    },

    // Normalization Questions
    {
      topic: "databasemanagement",
      subtopic: "normalization",
      question: "What is the main purpose of database normalization?",
      options: ["To minimize redundancy", "To improve query speed", "To increase storage", "To add more tables"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "normalization",
      question: "Which of the following normal forms eliminates transitive dependencies?",
      options: ["First Normal Form", "Second Normal Form", "Third Normal Form", "Boyce-Codd Normal Form"],
      correctAnswer: 2,
    },
    {
      topic: "databasemanagement",
      subtopic: "normalization",
      question: "In which normal form is a table if it has no multivalued attributes?",
      options: ["First Normal Form", "Second Normal Form", "Third Normal Form", "Fourth Normal Form"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "normalization",
      question: "What is the goal of the Boyce-Codd Normal Form (BCNF)?",
      options: ["To eliminate insertion anomalies", "To eliminate functional dependency anomalies", "To eliminate multivalued dependencies", "To eliminate redundancy"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "normalization",
      question: "Which of the following is a requirement for Second Normal Form (2NF)?",
      options: ["No partial dependencies", "No multivalued dependencies", "No transitive dependencies", "No functional dependencies"],
      correctAnswer: 0,
    },

    // Indexes Questions
    {
      topic: "databasemanagement",
      subtopic: "indexes",
      question: "What is the main purpose of an index in a database?",
      options: ["To reduce disk space", "To speed up retrieval of data", "To sort data", "To normalize data"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "indexes",
      question: "Which type of index allows for faster searching?",
      options: ["Clustered", "Non-Clustered", "Hash", "Unique"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "indexes",
      question: "What is a disadvantage of creating multiple indexes on a database table?",
      options: ["Slower queries", "Faster inserts", "Increased storage", "None of the above"],
      correctAnswer: 2,
    },
    {
      topic: "databasemanagement",
      subtopic: "indexes",
      question: "Which of the following is true about clustered indexes?",
      options: ["A table can have multiple clustered indexes", "Clustered indexes physically sort data", "Clustered indexes improve data integrity", "Clustered indexes take up more space"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "indexes",
      question: "Which index is created automatically on the primary key of a table?",
      options: ["Clustered", "Unique", "Non-Clustered", "Composite"],
      correctAnswer: 0,
    },

    // Transactions Questions
    {
      topic: "databasemanagement",
      subtopic: "transactions",
      question: "Which of the following is NOT a property of a database transaction?",
      options: ["Atomicity", "Consistency", "Isolation", "Redundancy"],
      correctAnswer: 3,
    },
    {
      topic: "databasemanagement",
      subtopic: "transactions",
      question: "What is the purpose of the COMMIT statement in a transaction?",
      options: ["To roll back changes", "To permanently save changes", "To lock the database", "To restart the transaction"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "transactions",
      question: "What does ACID stand for in the context of database transactions?",
      options: ["Atomicity, Consistency, Isolation, Durability", "Automation, Clustering, Indexing, Data", "Access Control, Integrity, Durability", "Atomicity, Clustering, Isolation, Data"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "transactions",
      question: "Which of the following ensures that a transaction remains in a consistent state even in case of a failure?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctAnswer: 3,
    },
    // Transactions Questions (Continued)
    {
      topic: "databasemanagement",
      subtopic: "transactions",
      question: "What is the effect of the ROLLBACK statement in a transaction?",
      options: ["Permanently save changes", "Undo changes made in the transaction", "Lock the database", "Increase the transaction limit"],
      correctAnswer: 1,
    },

    // Database Security Questions
    {
      topic: "databasemanagement",
      subtopic: "database-security",
      question: "Which of the following is a common method for securing databases?",
      options: ["Encryption", "Replication", "Normalization", "Partitioning"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-security",
      question: "Which of the following helps prevent SQL injection attacks?",
      options: ["Using prepared statements", "Database sharding", "Database mirroring", "Normalization"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-security",
      question: "What does the principle of least privilege refer to?",
      options: ["Users should have all privileges", "Users should have the minimal necessary permissions", "Users should share passwords", "Admins can access everything"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-security",
      question: "Which database security feature ensures that data remains confidential?",
      options: ["Replication", "Sharding", "Encryption", "Backup"],
      correctAnswer: 2,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-security",
      question: "What is a common authentication method used in databases?",
      options: ["Username and Password", "File Access", "IP Whitelisting", "Replication"],
      correctAnswer: 0,
    },

    // Stored Procedures Questions
    {
      topic: "databasemanagement",
      subtopic: "stored-procedures",
      question: "What is a stored procedure in a database?",
      options: ["A compiled SQL query", "A database schema", "A collection of SQL statements", "An index"],
      correctAnswer: 2,
    },
    {
      topic: "databasemanagement",
      subtopic: "stored-procedures",
      question: "Which of the following is an advantage of using stored procedures?",
      options: ["Faster execution", "Reduced network traffic", "Improved security", "All of the above"],
      correctAnswer: 3,
    },
    {
      topic: "databasemanagement",
      subtopic: "stored-procedures",
      question: "Stored procedures are often used to:",
      options: ["Improve query speed", "Automate data backups", "Store data", "Implement business logic in databases"],
      correctAnswer: 3,
    },
    {
      topic: "databasemanagement",
      subtopic: "stored-procedures",
      question: "What is the difference between a stored procedure and a function?",
      options: ["A procedure can return multiple values, while a function returns only one", "A procedure can be called inside SQL queries, a function cannot", "A function must return a value, but a procedure does not have to", "A function is compiled, while a procedure is interpreted"],
      correctAnswer: 2,
    },
    {
      topic: "databasemanagement",
      subtopic: "stored-procedures",
      question: "Which SQL keyword is used to execute a stored procedure?",
      options: ["EXEC", "RUN", "CALL", "PERFORM"],
      correctAnswer: 0,
    },

    // Data Warehousing Questions
    {
      topic: "databasemanagement",
      subtopic: "data-warehousing",
      question: "What is the main purpose of a data warehouse?",
      options: ["To process real-time data", "To store historical data for analysis", "To handle OLTP transactions", "To manage relational databases"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "data-warehousing",
      question: "Which of the following is a common architecture used in data warehouses?",
      options: ["Star Schema", "Mesh Network", "Hierarchical Model", "Flat Model"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "data-warehousing",
      question: "ETL in data warehousing stands for:",
      options: ["Extract, Transform, Load", "Extract, Transfer, Load", "Estimate, Translate, Log", "Export, Track, Load"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "data-warehousing",
      question: "What is the purpose of a fact table in a data warehouse?",
      options: ["Stores dimension data", "Stores aggregate metrics", "Represents transactional data", "Stores metadata"],
      correctAnswer: 2,
    },
    {
      topic: "databasemanagement",
      subtopic: "data-warehousing",
      question: "Which type of database is best suited for OLAP operations?",
      options: ["Relational Databases", "Data Warehouses", "NoSQL Databases", "In-Memory Databases"],
      correctAnswer: 1,
    },

    // NoSQL Databases Questions
    {
      topic: "databasemanagement",
      subtopic: "nosql-databases",
      question: "Which of the following is a feature of NoSQL databases?",
      options: ["Structured schema", "Horizontal scaling", "Fixed data types", "Normalization"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "nosql-databases",
      question: "Which type of NoSQL database is MongoDB?",
      options: ["Document Store", "Key-Value Store", "Graph Database", "Columnar Store"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "nosql-databases",
      question: "Which of the following is an advantage of NoSQL databases over relational databases?",
      options: ["Better at handling large amounts of unstructured data", "More structured schema", "Better query optimization", "Easier to normalize data"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "nosql-databases",
      question: "Which of the following is a common use case for NoSQL databases?",
      options: ["Online transaction processing (OLTP)", "Data Warehousing", "Real-time analytics", "Storing large-scale, distributed data"],
      correctAnswer: 3,
    },
    {
      topic: "databasemanagement",
      subtopic: "nosql-databases",
      question: "In NoSQL databases, what is 'eventual consistency'?",
      options: ["Data is always consistent", "Data will become consistent over time", "Data can never be consistent", "Data is consistent across all replicas immediately"],
      correctAnswer: 1,
    },

    // Database Design Questions
    {
      topic: "databasemanagement",
      subtopic: "database-design",
      question: "What is the first step in designing a database?",
      options: ["Defining entities and relationships", "Writing SQL queries", "Normalizing data", "Indexing the database"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-design",
      question: "Which of the following is an important principle in database design?",
      options: ["Denormalization", "Entity-Relationship modeling", "Deindexing", "Data partitioning"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-design",
      question: "What is an entity in database design?",
      options: ["A column in a table", "An object or thing in the real world", "A user-defined function", "A SQL statement"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-design",
      question: "What does referential integrity ensure in a database?",
      options: ["Data is indexed properly", "Data in one table is consistent with data in another", "Data types are enforced", "The database is normalized"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "database-design",
      question: "Which of the following helps prevent data redundancy in a database?",
      options: ["Normalization", "Denormalization", "Sharding", "Partitioning"],
      correctAnswer: 0,
    },

    // Backup and Recovery Questions
    {
      topic: "databasemanagement",
      subtopic: "backup-and-recovery",
      question: "What is the purpose of a database backup?",
      options: ["To optimize performance", "To recover data in case of failure", "To replicate data", "To clean up old records"],
      correctAnswer: 1,
    },
        // Backup and Recovery Questions (Continued)
    {
      topic: "databasemanagement",
      subtopic: "backup-and-recovery",
      question: "What is a differential backup?",
      options: ["A backup of all data in the database", "A backup that records changes since the last full backup", "A backup of data only at a specific point in time", "A backup that is done in real-time"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "backup-and-recovery",
      question: "Which backup strategy provides the quickest recovery time?",
      options: ["Full Backup", "Incremental Backup", "Differential Backup", "No Backup"],
      correctAnswer: 0,
    },
    {
      topic: "databasemanagement",
      subtopic: "backup-and-recovery",
      question: "What does the term 'restoration' refer to in the context of database management?",
      options: ["Creating a backup", "Recovering data from a backup", "Updating the database", "Deleting old records"],
      correctAnswer: 1,
    },
    {
      topic: "databasemanagement",
      subtopic: "backup-and-recovery",
      question: "What is the main disadvantage of a full backup?",
      options: ["Longer backup time", "Requires more storage", "Difficult to restore", "None of the above"],
      correctAnswer: 1,
    },
  ];

  try {
    await DBMSQuiz.insertMany(questions);
    console.log('Database Management questions seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

seedQuestions();


