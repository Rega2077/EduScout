const mongoose = require('mongoose');
const { DBResource } = require('../models/Resource'); // Import the correct model
const connectDB = require('./config/db'); // Adjust the path as necessary

// Connect to the database
connectDB();

const seedDBResources = async () => {
  const resources = [
    // Add your Database Management resources data here...
  ];

  try {
    await DBResource.insertMany(resources); // Insert into the dbresources collection
    console.log('Database Management resources seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding Database Management resources:', error);
    mongoose.connection.close();
  }
};

seedDBResources();
