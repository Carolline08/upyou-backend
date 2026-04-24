const express = require('express');
const router = express.Router();

const Achievement = require('../models/Achievement');

router.get('/', async (req, res) => {
    const data = await Achievement.find();
    res.json(data);
});

router.post('/', async (req, res) => {
    const item = await Achievement.create(req.body);
    res.json(item);
});

module.exports = router;