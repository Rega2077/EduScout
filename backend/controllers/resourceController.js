const { DSAResource, WebDevResource, CPResource, SDResource, MLResource, DBResource } = require('../models/Resource');

// Fetch resources by topic and difficulty
const getResources = async (req, res) => {
  try {
    const { topic, difficulty } = req.query;

    // Validate the presence of required query parameters
    if (!topic || !difficulty) {
      return res.status(400).json({ error: 'Missing topic or difficulty in query' });
    }

    let ResourceModel;

    // Dynamically select the correct model based on the topic
    switch (topic.toLowerCase()) {
      case 'dsa':
        ResourceModel = DSAResource;
        break;
      case 'webdev':
        ResourceModel = WebDevResource;
        break;
      case 'competitive':
        ResourceModel = CPResource;
        break;
      case 'systemdesign':
        ResourceModel = SDResource;
        break;
      case 'machinelearning':
        ResourceModel = MLResource;
        break;
      case 'dbms':
        ResourceModel = DBResource;
        break;
      default:
        return res.status(400).json({ error: 'Invalid topic' });
    }

    // Fetch resources from the selected model
    const resources = await ResourceModel.find({ difficulty: difficulty.toLowerCase() }).sort({ upvotes: -1 });

    // If no resources found, respond with a 404 error
    if (!resources || resources.length === 0) {
      return res.status(404).json({ error: 'No resources found' });
    }

    res.json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching resources' });
  }
};

const voteResource = async (req, res) => {
  const { voteType } = req.body; // Get the vote type from the request
  const { id } = req.params; // Get the resource ID from the URL

  console.log(`Received request to vote on resource: ${id}, voteType: ${voteType}`);

  if (!voteType || !['upvote', 'downvote', 'like'].includes(voteType)) {
    return res.status(400).json({ error: 'Invalid vote type' });
  }

  let ResourceModel;

  try {
    // Find the resource by ID in all models
    ResourceModel = await DSAResource.findById(id) ||
                    await WebDevResource.findById(id) ||
                    await CPResource.findById(id) ||
                    await SDResource.findById(id) ||
                    await MLResource.findById(id) ||
                    await DBResource.findById(id);

    if (!ResourceModel) {
      console.error(`Resource with ID ${id} not found`);
      return res.status(404).json({ error: 'Resource not found' });
    }

    const userId = req.body.userId; // Get userId from request body
    if (!userId) {
      console.error("User ID is missing");
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Find if the user has already voted
    let userVote = ResourceModel.usersVoted.find(vote => vote.userId === userId);

    if (userVote) {
      // User has already voted, update their vote
      if (voteType === 'like') {
        if (userVote.likes) {
          // Unlike it
          userVote.likes = false;
          ResourceModel.likes -= 1;
        } else {
          // Like it
          userVote.likes = true;
          ResourceModel.likes += 1;
        }
      } else if (voteType === 'upvote') {
        if (userVote.voteType === 'downvote') {
          // If previously downvoted, cancel downvote and upvote
          ResourceModel.downvotes -= 1;
          userVote.voteType = 'upvote';
          ResourceModel.upvotes += 1;
        } else if (userVote.voteType === 'upvote') {
          // If already upvoted, remove the upvote
          userVote.voteType = null;
          ResourceModel.upvotes -= 1;
        } else {
          // If user hasn't voted yet, just add upvote
          userVote.voteType = 'upvote';
          ResourceModel.upvotes += 1;
        }
      } else if (voteType === 'downvote') {
        if (userVote.voteType === 'upvote') {
          // If previously upvoted, cancel upvote and downvote
          ResourceModel.upvotes -= 1;
          userVote.voteType = 'downvote';
          ResourceModel.downvotes += 1;
        } else if (userVote.voteType === 'downvote') {
          // If already downvoted, remove the downvote
          userVote.voteType = null;
          ResourceModel.downvotes -= 1;
        } else {
          // If user hasn't voted yet, just add downvote
          userVote.voteType = 'downvote';
          ResourceModel.downvotes += 1;
        }
      }
    } else {
      // New vote, add a new entry to the usersVoted array
      ResourceModel.usersVoted.push({ userId, voteType, likes: voteType === 'like' });
      if (voteType === 'upvote') {
        ResourceModel.upvotes += 1;
      } else if (voteType === 'downvote') {
        ResourceModel.downvotes += 1;
      } else if (voteType === 'like') {
        ResourceModel.likes += 1;
      }
    }

    await ResourceModel.save();
    console.log("Resource saved successfully:", ResourceModel);
    res.json({ resource: ResourceModel });
  } catch (err) {
    console.error("Error occurred while voting:", err);
    res.status(500).json({ error: 'Error voting' });
  }
};

module.exports = { getResources, voteResource };
