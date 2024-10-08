const mongoose = require('mongoose');
const { MLResource } = require('../models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedMLResources = async () => {
  const resources = [
    // Add your Machine Learning resources data here...
  ];

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
