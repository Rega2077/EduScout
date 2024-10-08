const mongoose = require('mongoose');
const { CPResource } = require('../models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedCPResources = async () => {
  const resources = [
    // Add your Competitive Programming resources data here...
  ];

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
