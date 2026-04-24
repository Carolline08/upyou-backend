const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    duration: Number,
    startDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'failed'],
        default: 'active'
    }
});

module.exports = mongoose.model('Challenge', ChallengeSchema);