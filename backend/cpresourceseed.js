const mongoose = require('mongoose');
const { CPResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedCPResources = async () => {
  const resources = [
    {
      "rank": 1,
      "channelName": "CodeChef",
      "videoUrl": "https://www.youtube.com/watch?v=OMcxQ3IY-qc&list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-",
      "thumbnail": "https://img.youtube.com/vi/OMcxQ3IY-qc/hqdefault.jpg",
      "description": "Comprehensive beginner-level competitive programming course by CodeChef.",
      "difficulty": "easy",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Apna College",
      "videoUrl": "https://www.youtube.com/watch?v=0JUN9aDxVmI&list=PLFlBFxFB2mdjLbqVxFjrxYg7ai0xwQSwH",
      "thumbnail": "https://img.youtube.com/vi/0JUN9aDxVmI/hqdefault.jpg",
      "description": "Basic competitive programming concepts for beginners.",
      "difficulty": "easy",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Striver",
      "videoUrl": "https://www.youtube.com/watch?v=Q4i_cFNocLk",
      "thumbnail": "https://img.youtube.com/vi/Q4i_cFNocLk/hqdefault.jpg",
      "description": "Beginner-level coding challenges and tutorials.",
      "difficulty": "easy",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Pepcoding",
      "videoUrl": "https://www.youtube.com/watch?v=FnnA5RR0m9k&list=PLJz2seTpnYZFxNG6a1_RMxYaPErsEwt5y",
      "thumbnail": "https://img.youtube.com/vi/FnnA5RR0m9k/hqdefault.jpg",
      "description": "A full course for learning competitive programming from scratch.",
      "difficulty": "easy",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Coding Ninjas",
      "videoUrl": "https://www.youtube.com/watch?v=Fefm8wS8QWw&list=PLvj_1FFjKezZflzMva3-kLeG6w-Uo--Ob",
      "thumbnail": "https://img.youtube.com/vi/Fefm8wS8QWw/hqdefault.jpg",
      "description": "Competitive programming introduction for beginners.",
      "difficulty": "easy",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
  
    {
      "rank": 1,
      "channelName": "GFG Competitive Programming",
      "videoUrl": "https://www.youtube.com/watch?v=zDEQaDl3cso",
      "thumbnail": "https://img.youtube.com/vi/zDEQaDl3cso/hqdefault.jpg",
      "description": "Medium-level competitive programming techniques by GeeksforGeeks.",
      "difficulty": "medium",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Codeforces",
      "videoUrl": "https://www.youtube.com/watch?v=QLSxaq-PRiI",
      "thumbnail": "https://img.youtube.com/vi/QLSxaq-PRiI/hqdefault.jpg",
      "description": "Medium-level competitive programming tutorials and challenges.",
      "difficulty": "medium",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Errichto",
      "videoUrl": "https://www.youtube.com/watch?v=Cb2J-sUnDpI",
      "thumbnail": "https://img.youtube.com/vi/Cb2J-sUnDpI/hqdefault.jpg",
      "description": "Medium-level coding challenges and problem-solving strategies.",
      "difficulty": "medium",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "CP Algorithms",
      "videoUrl": "https://www.youtube.com/watch?v=yR7lBfCyg-w&list=PLauivoElc3ggEtvZNnLQH06GdfY75cq",
      "thumbnail": "https://img.youtube.com/vi/yR7lBfCyg-w/hqdefault.jpg",
      "description": "An intermediate playlist on competitive programming and algorithms.",
      "difficulty": "medium",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Codeforces",
      "videoUrl": "https://www.youtube.com/watch?v=Es3lPaVYJPQ",
      "thumbnail": "https://img.youtube.com/vi/Es3lPaVYJPQ/hqdefault.jpg",
      "description": "Coding tutorials and problem-solving by Codeforces for intermediate learners.",
      "difficulty": "medium",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
  
    {
      "rank": 1,
      "channelName": "Book: Competitive Programming 3",
      "videoUrl": "https://www.amazon.com/Competitive-Programming-3rd-Steven-Halim/dp/9881443515",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51oXXvngfxL._SX384_BO1,204,203,200_.jpg",
      "description": "Comprehensive guide to competitive programming and algorithmic problem-solving.",
      "difficulty": "hard",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Book: Algorithm Design Manual",
      "videoUrl": "https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51Vb-MIgL3L._SX379_BO1,204,203,200_.jpg",
      "description": "Advanced resource for mastering algorithms and competitive programming.",
      "difficulty": "hard",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Book: Guide to Competitive Programming",
      "videoUrl": "https://www.amazon.com/Guide-Competitive-Programming-Undergraduate-Topics/dp/3319725467",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41KP5HDKGRL._SX348_BO1,204,203,200_.jpg",
      "description": "A complete book to help with mastering competitive programming.",
      "difficulty": "hard",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Book: Programming Challenges",
      "videoUrl": "https://www.amazon.com/Programming-Challenges-Contest-Training-Computing/dp/0387001638",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51G4YB9K01L._SX384_BO1,204,203,200_.jpg",
      "description": "Book for tackling complex programming challenges in coding competitions.",
      "difficulty": "hard",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Book: Competitive Programming 4",
      "videoUrl": "https://www.amazon.com/Competitive-Programming-4th-Steven-Halim/dp/1734790131",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51UzUyzhM9L._SX348_BO1,204,203,200_.jpg",
      "description": "Advanced resource for solving real-world coding competition challenges.",
      "difficulty": "hard",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    }
  ] ;
  try {
    await CPResource.insertMany(resources); // Insert into the cpresources collection
    console.log('Competitive Programming resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding Competitive Programming resources:', error);
    mongoose.connection.close();
  }
};

seedCPResources();
