const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cors = require('cors'); // Add this
const quizRoutes = require('./routes/quiz');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Enable CORS for all routes, or specify certain origins
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend (React app)
  credentials: true,  // Allow cookies to be sent/received
}));

// Body Parser Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes); // Move this line here

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
