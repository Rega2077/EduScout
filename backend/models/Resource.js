const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  difficulty: { type: String, required: true },
  rank: { type: Number, required: true },
  channelName: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  usersVoted: { type: [String], default: [] } // Store user IDs that have voted
});

const Resource = mongoose.model('Resource', ResourceSchema , 'dsaresources');
module.exports = Resource;
