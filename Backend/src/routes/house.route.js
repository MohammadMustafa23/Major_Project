const express = require('express');
const HouseController = require('../controllers/house.controller')
const CheckData = require('../middleware/House.Data')
const router = express.Router();


router.post('/add-properties', CheckData, HouseController.AddHouse);

router.get('/get-properties', HouseController.ShowAllHouse);

router.put('/add-properties/:id', CheckData, HouseController.UpdateHouse);

router.delete('/add-properties/:id', HouseController.DeleteHouse);


module.exports = router;