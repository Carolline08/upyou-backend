const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');

router.post('/', async (req, res) => {
    try {
        const challenge = await Challenge.create(req.body);
        res.status(201).json(challenge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json(challenges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Challenge.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Challenge.findByIdAndDelete(req.params.id);
        res.json({ message: 'Desafio deletado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;