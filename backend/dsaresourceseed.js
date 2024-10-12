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
      videoUrl: "https://www.youtube.com/playlist?list=PLbMVogVj5nJS3U3fXYAA4mT2l_vPqXytD",
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
      channelName: "The Coding Train",
      videoUrl: "https://www.youtube.com/watch?v=O5Q1_c4E50A&list=PLRqwX-G0sOvC9V3W8e5u9G4T0M9gM6xU",
      description: "Interactive coding challenges and explanations on algorithms in English.",
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
      videoUrl: "https://www.youtube.com/playlist?list=PLqM7alHXFySFW8MfzST8qzQ1d5N1Yj52r",
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
      channelName: "LeetCode",
      videoUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZ9cG-J-FN2w8A1d6cU8u0",
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
      videoUrl: "https://www.youtube.com/playlist?list=PLwIuY7gtV5r9b4mZ4R4IcZTT9H9E_3nUd",
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
      videoUrl: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBs4rRjYFJXnvC8QeN3eK7h",
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
