const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const RoadmapProgress = require('../models/RoadmapProgress');

// Fetch user progress for a specific roadmap
router.get('/:roadmap/progress', authMiddleware, async (req, res) => {
    try {
        const progress = await RoadmapProgress.findOne({
            user: req.user.id,
            roadmap: req.params.roadmap
        });

        if (!progress) {
            return res.json({ hasStarted: false, completedTopics: [] });
        }

        res.json({ hasStarted: true, completedTopics: progress.completedTopics });
    } catch (err) {
        console.error('Error fetching progress:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Update progress for a specific roadmap
router.post('/:roadmap', authMiddleware, async (req, res) => {
    const { completedTopics } = req.body;

    try {
        let progress = await RoadmapProgress.findOne({
            user: req.user.id,
            roadmap: req.params.roadmap
        });

        if (!progress) {
            progress = new RoadmapProgress({
                user: req.user.id,
                roadmap: req.params.roadmap,
                completedTopics,
            });
        } else {
            progress.completedTopics = completedTopics;
        }

        await progress.save();
        res.json(progress);
    } catch (err) {
        console.error('Error updating progress:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
