const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  difficulty: { type: String, required: true },
  rank: { type: Number, required: true },
  channelName: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  // Update the usersVoted field to store objects
  usersVoted: [
    {
      userId: { type: String, required: true }, // Store userId as a string
      voteType: { type: String },               // Store voteType (upvote/downvote)
      likes: { type: Boolean }                  // Store whether the user liked the resource
    }
  ]
});

// Create models for each topic
const DSAResource = mongoose.model('DSAResource', ResourceSchema, 'dsaresources');
const WebDevResource = mongoose.model('WebDevResource', ResourceSchema, 'webdevresources');
const CPResource = mongoose.model('CPResource', ResourceSchema, 'cpresources');
const SDResource = mongoose.model('SDResource', ResourceSchema, 'sdresources');
const MLResource = mongoose.model('MLResource', ResourceSchema, 'mlresources');
const DBResource = mongoose.model('DBResource', ResourceSchema, 'dbresources');

module.exports = { DSAResource, WebDevResource, CPResource, SDResource, MLResource, DBResource };
