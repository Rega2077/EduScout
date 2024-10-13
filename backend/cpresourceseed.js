const mongoose = require('mongoose');
const { CPResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedCPResources = async () => {
  const resources = [
    {
      "rank": 1,
      "channelName": "Luv",
      "videoUrl": "https://www.youtube.com/watch?v=OMcxQ3IY-qc&list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-",
      "thumbnail": "https://img.youtube.com/vi/OMcxQ3IY-qc/hqdefault.jpg",
      "description": "Comprehensive beginner-level competitive programming course.",
      "difficulty": "easy",
      "topic": "competitive",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Harvard University",
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
      "videoUrl": "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
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
      "videoUrl": "https://www.youtube.com/watch?v=__Cu92rei1s&list=PL-Jc9J83PIiEFGyDMHQ72DTyrgg0B0f8Y",
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
      "channelName": "Ashish Kumar",
      "videoUrl": "https://www.youtube.com/watch?v=_ClZwBOAnuM&list=PL6tQsxnnBiDieFMTItZTYVczapSU7ifTe",
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
      "channelName": "Colin Galen",
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
      "videoUrl": "https://codeforces.com/",
      "thumbnail": "https://img.youtube.com/vi/QLSxaq-PRiI/hqdefault.jpg",
      "description": "Medium-level competitive programming Questions and challenges.",
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
      "videoUrl": "https://www.youtube.com/watch?v=NtQH0at4Lnc&list=PLg_Krngrs0eDx7EGmGdV_HXi_0WX2_f83",
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
      "rank": 1,
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
      "rank": 2,
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
      "rank": 3,
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
