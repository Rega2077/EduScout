const mongoose = require('mongoose');
const { SDResource } = require('./models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedSDResources = async () => {
  const resources = [
    {
      "rank": 1,
      "channelName": "Gaurav Sen",
      "videoUrl": "https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
      "thumbnail": "https://img.youtube.com/vi/xpDnVSmNFX0/hqdefault.jpg",
      "description": "In-depth System Design videos covering scalability, distributed systems, and more.",
      "difficulty": "easy",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "CodeKarle",
      "videoUrl": "https://www.youtube.com/watch?v=1r9bPisYaOQ&list=PLsdq-3Z1EPT36NJXTutvKcreetuHCr9a-",
      "thumbnail": "https://img.youtube.com/vi/1r9bPisYaOQ/hqdefault.jpg",
      "description": "Basic concepts of System Design for beginners with interactive examples.",
      "difficulty": "easy",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Lets Build",
      "videoUrl": "https://www.youtube.com/watch?v=y_Orb2euMo0&list=PLBgdlMZhIRmExB642Hb7JeW8aBCA-m3PS",
      "thumbnail": "https://img.youtube.com/vi/y_Orb2euMo0/hqdefault.jpg",
      "description": "Short and basic playlist to get started with System Design essentials.",
      "difficulty": "easy",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Simplified Systems",
      "videoUrl": "https://www.youtube.com/watch?v=FSR1s2b-l_I&list=PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a",
      "thumbnail": "https://img.youtube.com/vi/FSR1s2b-l_I/hqdefault.jpg",
      "description": "Basic introduction to system design concepts, ideal for beginners.",
      "difficulty": "easy",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Knowledge TV",
      "videoUrl": "https://www.youtube.com/watch?v=lX4CrbXMsNQ&list=PLCRMIe5FDPsd0gVs500xeOewfySTsmEjf",
      "thumbnail": "https://img.youtube.com/vi/lX4CrbXMsNQ/hqdefault.jpg",
      "description": "Playlist with an overview of system design principles and real-world applications.",
      "difficulty": "easy",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 1,
      "channelName": "Tech Dummies",
      "videoUrl": "https://www.youtube.com/watch?v=43-X22tdxiI&list=PLA3GkZPtsafZdyC5iucNM_uhqGJ5yFNUM",
      "thumbnail": "https://img.youtube.com/vi/43-X22tdxiI/hqdefault.jpg",
      "description": "Intermediate System Design principles with examples of real-world applications.",
      "difficulty": "medium",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Tech Primers",
      "videoUrl": "https://www.youtube.com/watch?v=LnqKfLcszEg&list=PLsdq-3Z1EPT27BuTnJ_trF7BsaTpYLqst",
      "thumbnail": "https://img.youtube.com/vi/LnqKfLcszEg/hqdefault.jpg",
      "description": "In-depth playlist for understanding System Design concepts in depth.",
      "difficulty": "medium",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Tech Guide",
      "videoUrl": "https://www.youtube.com/watch?v=ugVwhsWslAc&list=PLjTveVh7FakKjb4UYzUazqBNNF-WGurXp",
      "thumbnail": "https://img.youtube.com/vi/ugVwhsWslAc/hqdefault.jpg",
      "description": "Complete system design course with live problem-solving and real-life system architectures.",
      "difficulty": "medium",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Joma Tech",
      "videoUrl": "https://www.youtube.com/watch?v=xpDnVSmNFX0",
      "thumbnail": "https://img.youtube.com/vi/xpDnVSmNFX0/hqdefault.jpg",
      "description": "Joma Tech covers interview and system design tips for scaling large apps.",
      "difficulty": "medium",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "CodeKarle",
      "videoUrl": "https://www.youtube.com/watch?v=FSR1s2b-l_I",
      "thumbnail": "https://img.youtube.com/vi/FSR1s2b-l_I/hqdefault.jpg",
      "description": "Mid-level system design concepts for backend architecture and distributed systems.",
      "difficulty": "medium",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 1,
      "channelName": "Book: Designing Data-Intensive Applications",
      "videoUrl": "https://www.amazon.com/Designing-Data-Intensive-Applications-Fault-Tolerant-Scalable/dp/1449373321",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
      "description": "An excellent guide for understanding modern data systems and scalable architectures.",
      "difficulty": "hard",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 2,
      "channelName": "Book: Building Microservices",
      "videoUrl": "https://www.amazon.com/Building-Microservices-Sam-Newman/dp/1491950358",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/91tWe3kp1PL.jpg",
      "description": "Comprehensive guide on microservices architecture, a must-read for system design.",
      "difficulty": "hard",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 3,
      "channelName": "Book: Software Architecture Patterns",
      "videoUrl": "https://www.amazon.com/Software-Architecture-Patterns-OReilly-Microsoft/dp/149208269X",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/41KLjPUPZFL._SX258_BO1,204,203,200_.jpg",
      "description": "Explore various architecture patterns for scalable, maintainable software.",
      "difficulty": "hard",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 4,
      "channelName": "Book: System Design Interview",
      "videoUrl": "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08FFQ2WFL",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/31HxZ7ubp6L._SX331_BO1,204,203,200_.jpg",
      "description": "A great book for preparing for system design interviews with practical scenarios.",
      "difficulty": "hard",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    },
    {
      "rank": 5,
      "channelName": "Book: The Art of Scalability",
      "videoUrl": "https://www.amazon.com/Art-Scalability-Availability-Performance-Operations/dp/0134032802",
      "thumbnail": "https://images-na.ssl-images-amazon.com/images/I/51lAixdTmrL._SX384_BO1,204,203,200_.jpg",
      "description": "Advanced book on scalability and performance for system design experts.",
      "difficulty": "hard",
      "topic": "systemdesign",
      "upvotes": 0,
      "downvotes": 0,
      "likes": 0,
      "usersVoted": []
    }
  ];
  try {
    await SDResource.insertMany(resources); // Insert into the sdresources collection
    console.log('System Design resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding System Design resources:', error);
    mongoose.connection.close();
  }
};

seedSDResources();
