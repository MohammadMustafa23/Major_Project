const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    Title : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    Image : {
        type : String,
        required : true
    },
    Price : {
        type : Number,
        required : true
    },
    location : {
        type : Number,
        required : true
    },
    Country : {
        type : String,
        required : true
    }
})

const HouseModel = mongoose.model('House-Properties',HouseSchema);
module.exports = HouseModel;