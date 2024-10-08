const { DSAResource, WebDevResource, CPResource, SDResource, MLResource, DBResource } = require('../models/Resource'); // Import all models

// Fetch resources by topic and difficulty
const getResources = async (req, res) => {
  try {
    const { topic, difficulty } = req.query;
    
    let ResourceModel;

    // Dynamically select the correct model based on the topic
    if (topic.toLowerCase() === 'dsa') {
      ResourceModel = DSAResource;
    } else if (topic.toLowerCase() === 'webdev') {
      ResourceModel = WebDevResource;
    } else if (topic.toLowerCase() === 'competitive') {
      ResourceModel = CPResource;
    } else if (topic.toLowerCase() === 'systemdesign') {
      ResourceModel = SDResource;
    } else if (topic.toLowerCase() === 'machinelearning') {
      ResourceModel = MLResource;
    } else if (topic.toLowerCase() === 'dbms') {
      ResourceModel = DBResource;
    }

    if (!ResourceModel) {
      return res.status(400).json({ error: 'Invalid topic' });
    }

    // Fetch resources from the selected collection/model
    const resources = await ResourceModel.find({
      topic: topic.toLowerCase(),
      difficulty: difficulty.toLowerCase()
    }).sort({ upvotes: -1 });

    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching resources' });
  }
};

// Handle voting (upvote, downvote, like)
const voteResource = async (req, res) => {
  const { voteType } = req.body; // Only voteType will be received from the frontend
  const { id, topic } = req.params;

  let ResourceModel;
  if (topic.toLowerCase() === 'dsa') {
    ResourceModel = DSAResource;
  } else if (topic.toLowerCase() === 'webdev') {
    ResourceModel = WebDevResource;
  } else if (topic.toLowerCase() === 'competitive') {
    ResourceModel = CPResource;
  } else if (topic.toLowerCase() === 'systemdesign') {
    ResourceModel = SDResource;
  } else if (topic.toLowerCase() === 'machinelearning') {
    ResourceModel = MLResource;
  } else if (topic.toLowerCase() === 'dbms') {
    ResourceModel = DBResource;
  }

  try {
    const resource = await ResourceModel.findById(id);

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
