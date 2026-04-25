const Progress = require('../models/Progress');

exports.create = async (req, res) => {
  try {
    const { challengeId } = req.body;

    await Progress.create({ challengeId });
    const total = await Progress.countDocuments({ challengeId });

    res.status(201).json({ challengeId, progressCount: total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const progress = await Progress.find();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Progress.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deletado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

