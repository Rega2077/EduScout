const mongoose = require('mongoose');
const { WebDevResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedWebDevResources = async () => {
  const resources = [
    // EASY Resources
    {
      rank: 1,
      channelName: "Traversy Media",
      videoUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU",
      thumbnail: "https://img.youtube.com/vi/Wm6CUkswsNw/hqdefault.jpg",
      description: "Beginner-friendly web development series covering HTML, CSS, and JavaScript.",
      difficulty: "easy",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 2,
      channelName: "CodeWithHarry",
      videoUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9",
      thumbnail: "https://img.youtube.com/vi/Q33KBiDriJY/hqdefault.jpg",
      description: "Web development in Hindi, covering HTML, CSS, and basics of JavaScript.",
      difficulty: "easy",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 3,
      channelName: "freeCodeCamp",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/hqdefault.jpg",
      description: "HTML full course for beginners covering essential web development topics.",
      difficulty: "easy",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 4,
      channelName: "The Net Ninja",
      videoUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAYGoqUq8nGdgmxeQ",
      thumbnail: "https://img.youtube.com/vi/YwXWc9olMk0/hqdefault.jpg",
      description: "Learn CSS Grid layout and Flexbox from scratch.",
      difficulty: "easy",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 5,
      channelName: "Programming with Mosh",
      videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
      description: "JavaScript tutorial for beginners covering basic programming concepts.",
      difficulty: "easy",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },

    // MEDIUM Resources
    {
      rank: 1,
      channelName: "The Net Ninja",
      videoUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g7L6lOq4zEs_MF4kHU6LN3",
      thumbnail: "https://img.youtube.com/vi/ZlYp4gjxXnQ/hqdefault.jpg",
      description: "Intermediate-level React tutorial series that covers React hooks and state management.",
      difficulty: "medium",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 2,
      channelName: "Traversy Media",
      videoUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbYxONbD9qPUZWwOEs62ZfxW",
      thumbnail: "https://img.youtube.com/vi/nQTh_WzRk3s/hqdefault.jpg",
      description: "Complete JavaScript crash course for intermediate developers.",
      difficulty: "medium",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 3,
      channelName: "Codevolution",
      videoUrl: "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6M1aO91IvIUt84shETu42PU",
      thumbnail: "https://img.youtube.com/vi/tiLWCNFzThE/hqdefault.jpg",
      description: "Modern React tutorial with a focus on React hooks and performance optimizations.",
      difficulty: "medium",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 4,
      channelName: "Academind",
      videoUrl: "https://www.youtube.com/playlist?list=PL55RiY5tL51qL-oqwFiF08GEoHOqJEaLP",
      thumbnail: "https://img.youtube.com/vi/N3BdyGXp6d4/hqdefault.jpg",
      description: "Advanced JavaScript techniques and modern web development tools.",
      difficulty: "medium",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 5,
      channelName: "Web Dev Simplified",
      videoUrl: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9muR1tGIhXnIYWDdiAbQVo",
      thumbnail: "https://img.youtube.com/vi/KnEMHeJ8i0U/hqdefault.jpg",
      description: "Learn about modern frontend frameworks like React, Vue, and Angular.",
      difficulty: "medium",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },

    // HARD Resources
    {
      rank: 1,
      channelName: "Tech With Tim",
      videoUrl: "https://www.youtube.com/playlist?list=PLzMcBGfZo4-lmGCkD0sMuIsh9T0tET7fT",
      thumbnail: "https://img.youtube.com/vi/vP4I0gkp9vY/hqdefault.jpg",
      description: "Full-stack Python and JavaScript web development with React and Django.",
      difficulty: "hard",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 2,
      channelName: "Hussein Nasser",
      videoUrl: "https://www.youtube.com/playlist?list=PLQnljOFTspQXqNIz1TdJTmJPWNBHy7QtC",
      thumbnail: "https://img.youtube.com/vi/FV9tI1Rj43I/hqdefault.jpg",
      description: "Web backend architecture with advanced topics in caching, scaling, and database optimization.",
      difficulty: "hard",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 3,
      channelName: "Fireship",
      videoUrl: "https://www.youtube.com/playlist?list=PL0vfts4VzfNiU2vLpqt-mvJf7swGAA7mx",
      thumbnail: "https://img.youtube.com/vi/n0l5NCKb5Ek/hqdefault.jpg",
      description: "Cutting-edge web development tools and techniques for experienced developers.",
      difficulty: "hard",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 4,
      channelName: "The Net Ninja",
      videoUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jB0Xh3BTsR6UCmnO9WiLKq",
      thumbnail: "https://img.youtube.com/vi/uoXQWyLCwN8/hqdefault.jpg",
      description: "Advanced Node.js and Express tutorials for building robust server-side applications.",
      difficulty: "hard",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    },
    {
      rank: 5,
      channelName: "Academind",
      videoUrl: "https://www.youtube.com/playlist?list=PL55RiY5tL51olfU2IEqr455EYLkrhmh5r",
      thumbnail: "https://img.youtube.com/vi/NlfcWMcnc8U/hqdefault.jpg",
      description: "Advanced React Native for mobile app development.",
      difficulty: "hard",
      topic: "webdev",
      likes: 0,
      upvotes: 0,
      downvotes: 0,
      usersVoted: []
    }
  ];

  try {
    await WebDevResource.insertMany(resources); // Insert into the webdevresources collection
    console.log('Web Development resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding Web Development resources:', error);
    mongoose.connection.close();
  }
};

seedWebDevResources();
