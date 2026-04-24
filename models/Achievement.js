const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    condition: String
});

module.exports = mongoose.model('Achievement', AchievementSchema);