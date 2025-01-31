const mongoose = require('mongoose');
const { MLResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedMLResources = async () => {
  const resources = [
    {
      "rank": 1,
      "channelName": "Gate Smashers",
      "videoUrl": "https://www.youtube.com/watch?v=kz184QIO4ZQ&list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T",
      "thumbnail": "https://img.youtube.com/vi/kz184QIO4ZQ/hqdefault.jpg",
      "description": "Beginner-friendly machine learning tutorials focusing on core concepts.",
      "difficulty": "easy",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Simplilearn",
      "videoUrl": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy",
      "thumbnail": "https://img.youtube.com/vi/ukzFI9rgwfU/hqdefault.jpg",
      "description": "Comprehensive machine learning tutorials for beginners.",
      "difficulty": "easy",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "CodeBasics",
      "videoUrl": "https://www.youtube.com/watch?v=gmvvaobm7eQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw",
      "thumbnail": "https://img.youtube.com/vi/gmvvaobm7eQ/hqdefault.jpg",
      "description": "Machine learning tutorials for beginners and freshers.",
      "difficulty": "easy",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "CampusX",
      "videoUrl": "https://www.youtube.com/watch?v=ZftI2fEz0Fw&list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH",
      "thumbnail": "https://img.youtube.com/vi/ZftI2fEz0Fw/hqdefault.jpg",
      "description": "Introductory course on machine learning basics.",
      "difficulty": "easy",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Blitz Kim",
      "videoUrl": "https://www.youtube.com/watch?v=gb262LDH1So&list=PLiPvV5TNogxIS4bHQVW4pMkj4CHA8COdX",
      "thumbnail": "https://img.youtube.com/vi/gb262LDH1So/hqdefault.jpg",
      "description": "Fundamentals of machine learning explained for beginners.",
      "difficulty": "easy",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
  
    {
      "rank": 1,
      "channelName": "Simplilearn",
      "videoUrl": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy",
      "thumbnail": "https://img.youtube.com/vi/ukzFI9rgwfU/hqdefault.jpg",
      "description": "Advanced machine learning playlist for intermediate learners.",
      "difficulty": "medium",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Google for Developers",
      "videoUrl": "https://youtube.com/playlist?list=PLOU2XLYxmsILr3HQpqjLAUkIPa5EaZiui&si=HDdvwdKuQ02s8--b",
      "thumbnail": "https://img.youtube.com/vi/UK6Oxkfzpb0/hqdefault.jpg",
      "description": "Advanced TensorFlow and machine learning concepts.",
      "difficulty": "medium",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Tech With Tim",
      "videoUrl": "https://youtube.com/playlist?list=PLzMcBGfZo4-mP7qA9cagf68V06sko5otr&si=5v1pelEmOFcW9uqd",
      "thumbnail": "https://img.youtube.com/vi/E1s9fG5y9f4/hqdefault.jpg",
      "description": "Machine learning explained with Python and other tools.",
      "difficulty": "medium",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Ryan & Matt Data Science",
      "videoUrl": "https://youtu.be/T9ETsSD1I0w?si=XzQD4cBfcUzPDU6x",
      "thumbnail": "https://img.youtube.com/vi/IUpahIEtA_4/hqdefault.jpg",
      "description": "Detailed tutorials on building machine learning models.",
      "difficulty": "medium",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Sentdex",
      "videoUrl": "https://youtube.com/playlist?list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v&si=tk5PVdP_wx_Ese9N",
      "thumbnail": "https://img.youtube.com/vi/5ixs4X3WdGA/hqdefault.jpg",
      "description": "Comprehensive course on AI and machine learning techniques.",
      "difficulty": "medium",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
  
    {
      "rank": 1,
      "channelName": "Book: Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
      "videoUrl": "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41N8nG9-yFL.SX379_BO1,204,203,200.jpg",
      "description": "An advanced book on machine learning frameworks and techniques.",
      "difficulty": "hard",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Book: Advanced Machine Learning Techniques: Theory and Practice: 2",
      "videoUrl": "https://www.amazon.in/Advanced-Machine-Learning-Techniques-Practice/dp/B0CLTXQGTG",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41z7RMFVSEL.SX385_BO1,204,203,200.jpg",
      "description": "An advanced book that explains practical machine learning techniques.",
      "difficulty": "hard",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Book: Deep Learning with Python",
      "videoUrl": "https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41uSVvN2HDL.SX379_BO1,204,203,200.jpg",
      "description": "A must-read book for deep learning enthusiasts using Python.",
      "difficulty": "hard",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Book: Pattern Recognition and Machine Learning",
      "videoUrl": "https://www.amazon.com/Pattern-Recognition-Machine-Learning-Christopher/dp/0387310738",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51ZWTgkXhML.SX389_BO1,204,203,200.jpg",
      "description": "A classic book on machine learning, focusing on pattern recognition.",
      "difficulty": "hard",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Book: Machine Learning: A Probabilistic Perspective",
      "videoUrl": "https://www.amazon.com/Machine-Learning-Probabilistic-Perspective-Computation/dp/0262018020",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41dZ2Lz1MsL.SX387_BO1,204,203,200.jpg",
      "description": "Comprehensive resource for advanced-level machine learning.",
      "difficulty": "hard",
      "topic": "machinelearning",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    }
  ] ;
  try {
    await MLResource.insertMany(resources); // Insert into the mlresources collection
    console.log('Machine Learning resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding Machine Learning resources:', error);
    mongoose.connection.close();
  }
};

seedMLResources();
