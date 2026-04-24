const Achievement = require('../models/Achievement');


exports.create = async (req, res) => {
  try {
    const data = await Achievement.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAll = async (req, res) => {
  try {
    const data = await Achievement.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.update = async (req, res) => {
  try {
    const data = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.remove = async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Achievement deletado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};