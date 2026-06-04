const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    description: {
        type: String,
        trim: true,
        maxlength: 500
    },

    Image: {
        type: String,
        required: true
    },

    Price: {
        type: Number,
        required: true,
        min: 1
    },

    location: {
        type: String,
        required: true,
        trim: true
    },

    Country: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const HouseModel = mongoose.model('House-Properties',HouseSchema);

module.exports = HouseModel;