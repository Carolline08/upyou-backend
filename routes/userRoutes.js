const express = require('express');
const router = express.Router();

const User = require('../models/User');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Nome obrigatório' });
        }

        const exists = await User.findOne({ name });

        if (exists) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        const user = await User.create({ name });

        res.json(user);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { name } = req.body;

        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.json(user);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;