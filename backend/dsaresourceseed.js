const mongoose = require('mongoose');
const { DSAResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedDSAResources = async () => {
  const resources = [
    {
      rank: 1,
      channelName: "CodeWithHarry",
      videoUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
      description: "Beginner-friendly DSA content in Hindi, covering arrays, linked lists, recursion, and more.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: [] // Ensure the usersVoted field matches the new schema
    },
    {
      rank: 2,
      channelName: "freeCodeCamp",
      videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
      description: "Comprehensive DSA course in English, with full explanations and live coding sessions.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: [] // New schema alignment
    },
    {
      rank: 3,
      channelName: "Apna College",
      videoUrl: "https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
      description: "Well-structured DSA course in Hindi for beginners, covering essential topics.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 4,
      channelName: "GeeksforGeeks",
      videoUrl: "https://www.youtube.com/watch?v=rlZpZ8es_6k&list=PLqM7alHXFySF7JxK9E24C-ZeNAXFB1u8k",
      description: "In-depth DSA tutorials in English from GeeksforGeeks.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 5,
      channelName: "Striver",
      videoUrl: "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
      description: "Striver's DSA playlist, popular among competitive programmers.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 1,
      channelName: "freeCodeCamp",
      videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
      description: "Comprehensive DSA course in English, with detailed explanations and live coding sessions.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 2,
      channelName: "Abdul Bari",
      videoUrl: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr",
      description: "Popular DSA playlist in Hindi that covers important algorithms and data structures.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 3,
      channelName: "Gate Smashers",
      videoUrl: "https://www.youtube.com/watch?v=qNGyI95E5AE&list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT",
      description: "Interactive coding challenges and explanations on algorithms in Hindi.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 4,
      channelName: "GeeksforGeeks",
      videoUrl: "https://www.youtube.com/watch?v=rlZpZ8es_6k&list=PLqM7alHXFySF7JxK9E24C-ZeNAXFB1u8k",
      description: "In-depth DSA tutorials in English, focusing on problem-solving strategies.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 1,
      channelName: "Tech Dose",
      videoUrl: "https://www.youtube.com/@techdose4u",
      description: "In-depth problem-solving tutorials on advanced DSA topics, perfect for tackling tough coding interviews.",
      difficulty: "hard",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 2,
      channelName: "Errichto",
      videoUrl: "https://www.youtube.com/watch?v=xXKL9YBWgCY&list=PLl0KD3g-oDOHpWRyyGBUJ9jmul0lUOD80",
      description: "Advanced DSA challenges and solutions, focusing on competitive programming techniques.",
      difficulty: "hard",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 3,
      channelName: "BackToBackSWE",
      videoUrl: "https://www.youtube.com/watch?v=4ykBXGbonlA&list=PLiQ766zSC5jNRiFxKNu8CSQdKmuWgLMI2",
      description: "Covers difficult DSA problems with a focus on understanding complex algorithms.",
      difficulty: "hard",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    }
  ];

  try {
    await DSAResource.insertMany(resources); // Insert into the dsaresources collection
    console.log('DSA resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding DSA resources:', error);
    mongoose.connection.close();
  }
};

seedDSAResources();
