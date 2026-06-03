const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MOGO_URI);
        console.log("DataBase Connection Sucsess");
    } catch(err) {
        console.log("Error Faild To connect With DB");
    }
}

module.exports = connectToDb;