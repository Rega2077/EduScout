const mongoose = require('mongoose');
const { DBResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedDBResources = async () => {
  const resources = [
    {
      "rank": 1,
      "channelName": "CodeHelp - by Love Babbar",
      "videoUrl": "https://www.youtube.com/watch?v=eYpXCdvKwEQ&list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU",
      "thumbnail": "https://img.youtube.com/vi/eYpXCdvKwEQ/hqdefault.jpg",
      "description": "Comprehensive database management course for beginners.",
      "difficulty": "easy",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Unacademy Computer Science",
      "videoUrl": "https://www.youtube.com/watch?v=khKoJUpcXUE&list=PLG9aCp4uE-s0bu-I8fgDXXhVLO4qVROGy",
      "thumbnail": "https://img.youtube.com/vi/khKoJUpcXUE/hqdefault.jpg",
      "description": "Introductory DBMS concepts for college students.",
      "difficulty": "easy",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Neso Academy",
      "videoUrl": "https://www.youtube.com/watch?v=OMwgGL3lHlI&list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX",
      "thumbnail": "https://img.youtube.com/vi/OMwgGL3lHlI/hqdefault.jpg",
      "description": "Detailed DBMS course for beginners, covering relational models.",
      "difficulty": "easy",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Gate Smashers",
      "videoUrl": "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
      "thumbnail": "https://img.youtube.com/vi/kBdlM6hNDAE/hqdefault.jpg",
      "description": "A complete database management system playlist for beginners.",
      "difficulty": "easy",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Dinesh Bhawnani",
      "videoUrl": "https://www.youtube.com/watch?v=winMiOgvQRY&list=PL0jWhwlG_ZXkE1sP5T6VW_QXwmfR8pwY2",
      "thumbnail": "https://img.youtube.com/vi/winMiOgvQRY/hqdefault.jpg",
      "description": "Complete beginner course for understanding DBMS fundamentals.",
      "difficulty": "easy",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 1,
      "channelName": "Neso Academy",
      "videoUrl": "https://www.youtube.com/watch?v=OMwgGL3lHlI",
      "thumbnail": "https://img.youtube.com/vi/OMwgGL3lHlI/hqdefault.jpg",
      "description": "Mid-level DBMS tutorial covering important topics like normalization and SQL.",
      "difficulty": "medium",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Dinesh Bhawnani",
      "videoUrl": "https://www.youtube.com/watch?v=winMiOgvQRY",
      "thumbnail": "https://img.youtube.com/vi/winMiOgvQRY/hqdefault.jpg",
      "description": "MySQL advanced tutorial for handling databases and queries efficiently.",
      "difficulty": "medium",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Unacademy Computer Science",
      "videoUrl": "https://www.youtube.com/watch?v=khKoJUpcXUE",
      "thumbnail": "https://img.youtube.com/vi/khKoJUpcXUE/hqdefault.jpg",
      "description": "SQL and DBMS concepts for professionals looking to understand relational databases.",
      "difficulty": "medium",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Gate Smashers",
      "videoUrl": "https://www.youtube.com/watch?v=kBdlM6hNDAE",
      "thumbnail": "https://img.youtube.com/vi/kBdlM6hNDAE/hqdefault.jpg",
      "description": "Mid-level course on DBMS and query optimization techniques.",
      "difficulty": "medium",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "KnowledgeGATE by Sanchit Sir",
      "videoUrl": "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=KAwqzf3JVu0mgxTR",
      "thumbnail": "https://img.youtube.com/vi/OMwgGL3lHlI/hqdefault.jpg",
      "description": "DBMS theory and SQL query optimization for intermediate learners.",
      "difficulty": "medium",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 1,
      "channelName": "Book: Database System Concepts",
      "videoUrl": "https://www.amazon.com/Database-System-Concepts-Abraham-Silberschatz/dp/0078022150",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41yq93uLE1L.SX395_BO1,204,203,200.jpg",
      "description": "Comprehensive book for advanced DBMS concepts and real-world applications.",
      "difficulty": "hard",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Book: Fundamentals of Database Systems",
      "videoUrl": "https://www.amazon.com/Fundamentals-Database-Systems-Ramez-Elmasri/dp/0133970779",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41tD3UDB5TL.SX396_BO1,204,203,200.jpg",
      "description": "Advanced resource to master database systems and query optimization.",
      "difficulty": "hard",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Book: Advanced Database Systems",
      "videoUrl": "https://www.amazon.in/Advanced-Database-Systems-Kaufmann-Management/dp/155860443X",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51R2Nfh2j1L.SX379_BO1,204,203,200.jpg",
      "description": "A great resource for in-depth exploration of advanced database architectures.",
      "difficulty": "hard",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Book: Database Management Systems",
      "videoUrl": "https://www.amazon.com/Database-Management-Systems-Raghu-Ramakrishnan/dp/0072465638",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51MsdTTfM3L.jpg",
      "description": "A detailed study on DBMS theory, architecture, and design principles.",
      "difficulty": "hard",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Book: Practical Database Design",
      "videoUrl": "https://www.amazon.in/Practical-Guide-Database-Design/dp/1138578061",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51MgPMbeZwL.SX425_BO1,204,203,200.jpg",
      "description": "Advanced book focusing on practical aspects of database design.",
      "difficulty": "hard",
      "topic": "dbms",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    }
  ];
  try {
    await DBResource.insertMany(resources); // Insert into the dbresources collection
    console.log('Database Management resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding Database Management resources:', error);
    mongoose.connection.close();
  }
};

seedDBResources();
