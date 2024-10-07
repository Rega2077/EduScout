const Resource = require('../models/Resource');

// Fetch resources by topic and difficulty
const getResources = async (req, res) => {
  try {
    const { topic, difficulty } = req.query;
    const resources = await Resource.find({ 
      topic: topic.toLowerCase(), 
      difficulty: difficulty.toLowerCase() 
    }).sort({ upvotes: -1 }); // Sort by upvotes
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching resources' });
  }
};


// Handle voting (upvote, downvote, like)
const voteResource = async (req, res) => {
  const { voteType } = req.body; // Only voteType will be received from the frontend
  const { id } = req.params;

  try {
    const resource = await Resource.findById(id);

    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    const userId = req.body.userId; // Assuming userId is sent from frontend

    if (!resource.usersVoted.includes(userId)) {
      resource.usersVoted.push(userId); // Ensure the user only votes once
      if (voteType === 'upvote') resource.upvotes += 1;
      if (voteType === 'downvote') resource.downvotes += 1;
      if (voteType === 'like') resource.likes += 1;

      await resource.save();
      res.json({ resource });
    } else {
      res.status(400).json({ error: 'User has already voted' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error voting' });
  }
};

module.exports = { getResources, voteResource };
