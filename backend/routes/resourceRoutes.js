const express = require('express');
const { getResources, voteResource } = require('../controllers/resourceController');
const router = express.Router();

router.get('/', getResources); // Fetch resources based on query parameters
router.post('/vote/:id', voteResource); // Submit votes

module.exports = router;
