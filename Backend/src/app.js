require('dotenv').config();
const cors = require("cors");
const express = require('express');
const HouseRoute = require('./routes/house.route');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api',HouseRoute);

module.exports = app;