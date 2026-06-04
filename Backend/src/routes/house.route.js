const express = require('express');
const HouseController = require('../controllers/house.controller')
const CheckData = require('../middleware/House.Data');
const multer = require('multer');

const router = express.Router();

// For File Sytem
const upload = multer({ storage : multer.memoryStorage() })


router.post('/add-properties',upload.single("image"),CheckData,HouseController.AddHouse);

router.get('/get-properties', HouseController.ShowAllHouse);

router.put("/add-properties/:id",upload.single("image"), HouseController.UpdateHouse);

router.delete('/add-properties/:id',HouseController.DeleteHouse);

module.exports = router;