const Challenge = require('../models/Challenge');
const Progress = require('../models/Progress');  

exports.getAll = async (req, res) => {
    try {
        const challenges = await Challenge.find().lean();
        
        const challengesWithProgress = await Promise.all(challenges.map(async (c) => {
            const count = await Progress.countDocuments({ challengeId: c._id });
            return { 
                ...c, 
                progressCount: count 
            };
        }));

        res.status(200).json(challengesWithProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CRIAR UM NOVO DESAFIO
exports.create = async (req, res) => {
    try {
        const challengeData = { ...req.body, status: req.body.status || 'active' };
        const challenge = await Challenge.create(challengeData);
        res.status(201).json(challenge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ATUALIZAR UM DESAFIO
exports.update = async (req, res) => {
    try {
        const updated = await Challenge.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETAR UM DESAFIO
exports.remove = async (req, res) => {
    try {
        await Progress.deleteMany({ challengeId: req.params.id });
        await Challenge.findByIdAndDelete(req.params.id);
        
        res.status(200).json({ message: 'Desafio e seus progressos deletados com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
