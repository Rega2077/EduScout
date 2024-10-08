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
  usersVoted: { type: [String], default: [] }
});

// Create models for each topic
const DSAResource = mongoose.model('DSAResource', ResourceSchema, 'dsaresources');
const WebDevResource = mongoose.model('WebDevResource', ResourceSchema, 'webdevresources');
const CPResource = mongoose.model('CPResource', ResourceSchema, 'cpresources'); // Competitive Programming
const SDResource = mongoose.model('SDResource', ResourceSchema, 'sdresources'); // System Design
const MLResource = mongoose.model('MLResource', ResourceSchema, 'mlresources'); // Machine Learning
const DBResource = mongoose.model('DBResource', ResourceSchema, 'dbresources'); // Database Management

module.exports = { DSAResource, WebDevResource, CPResource, SDResource, MLResource, DBResource };
