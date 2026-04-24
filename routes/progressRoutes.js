const express = require('express');
const router = express.Router();

const Progress = require('../models/Progress');

router.post('/', async (req, res) => {
    const progress = await Progress.create(req.body);
    res.json(progress);
});

module.exports = router;