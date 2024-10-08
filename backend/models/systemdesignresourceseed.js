const mongoose = require('mongoose');
const { SDResource } = require('../models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedSDResources = async () => {
  const resources = [
    // Add your System Design resources data here...
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
