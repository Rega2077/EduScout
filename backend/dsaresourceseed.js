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
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
      description: "Beginner-friendly DSA content in Hindi, covering arrays, linked lists, recursion, and more.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 2,
      channelName: "freeCodeCamp",
      videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
      description: "Comprehensive DSA course in English, with full explanations and live coding sessions.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 3,
      channelName: "Apna College",
      videoUrl: "https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
      description: "Striver's DSA playlist, popular among competitive programmers.",
      difficulty: "easy",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },

    // Medium Resources
    {
      rank: 1,
      channelName: "freeCodeCamp",
      videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/KfSMxxf7_-c/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/O5Q1_c4E50A/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/nAj8k69u4Zk/hqdefault.jpg",
      description: "In-depth DSA tutorials in English, focusing on problem-solving strategies.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 5,
      channelName: "TechLead",
      videoUrl: "https://www.youtube.com/playlist?list=PLlH1j7yFwz_gKn5C7hAFA65Jm51ztPz7F",
      thumbnail: "https://img.youtube.com/vi/BuHhnrC8U98/hqdefault.jpg",
      description: "Advanced DSA concepts explained in English with practical coding examples.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 6,
      channelName: "CodeWithHarry",
      videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
      thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
      description: "Well-structured DSA series in Hindi, perfect for medium-level learners.",
      difficulty: "medium",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },

    // Hard Resources
    {
      rank: 1,
      channelName: "LeetCode",
      videoUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZ9cG-J-FN2w8A1d6cU8u0",
      thumbnail: "https://img.youtube.com/vi/YbJOT1jE8C8/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/JzG6TV2sPpA/hqdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/NwA8ZKv6JbU/hqdefault.jpg",
      description: "Covers difficult DSA problems with a focus on understanding complex algorithms.",
      difficulty: "hard",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 4,
      channelName: "TechLead",
      videoUrl: "https://www.youtube.com/playlist?list=PL2B50E8t1jF_XeKHJezCEgBph8s02O4oO",
      thumbnail: "https://img.youtube.com/vi/Mn_dV9w-P4E/hqdefault.jpg",
      description: "A series of challenging DSA problems tackled with detailed explanations and coding strategies.",
      difficulty: "hard",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 5,
      channelName: "Tushar Roy",
      videoUrl: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pQHcK5U5NRiZ8rFQw1i9vS",
      thumbnail: "https://img.youtube.com/vi/VPSzoO4NZ6M/hqdefault.jpg",
      description: "Advanced concepts and competitive programming techniques, focusing on hard DSA problems.",
      difficulty: "hard",
      topic: "dsa",
      upvotes: 0,
      downvotes: 0,
      likes: 0,
      usersVoted: []
    },
    {
      rank: 6,
      channelName: "Abdul Bari",
      videoUrl: "https://www.youtube.com/playlist?list=PLbMVogVj5nJQ_fy3p5cB4jKQwB3zHzD27",
      thumbnail: "https://img.youtube.com/vi/6Cp3Xhv91sE/hqdefault.jpg",
      description: "Challenging DSA problems explained in Hindi with step-by-step breakdowns.",
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
