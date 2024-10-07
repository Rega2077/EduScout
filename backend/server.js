const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const rewardsRoutes = require('./routes/rewards'); // Add the rewards route
const cors = require('cors'); 
const roadmapRoutes = require('./routes/Roadmap'); // Add this
const resourceRoutes = require('./routes/resourceRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Enable CORS for all routes, or specify certain origins
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));

// Body Parser Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes); 
app.use('/api/rewards', rewardsRoutes); // Add the rewards route here
app.use('/api/roadmap', roadmapRoutes);
app.use('/api/resources', resourceRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
