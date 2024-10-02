const mongoose = require('mongoose');

const RoadmapProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roadmap: {
    type: String, // e.g., 'DSA Easy', 'Competitive Programming', etc.
    required: true,
  },
  completedTopics: {
    type: [String], // List of completed topics (e.g., 'Arrays', 'Strings', etc.)
    default: [],
  },
});

module.exports = mongoose.model('RoadmapProgress', RoadmapProgressSchema);
