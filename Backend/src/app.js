require('dotenv').config();



const express = require('express');
const HouseRoute = require('./routes/house.route');

const app = express();


app.use('/api',HouseRoute);

module.exports = app;