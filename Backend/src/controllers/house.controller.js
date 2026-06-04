const HouseModel = require("../models/House.models");
const multer = require("multer");
const UploadFile = require("../Services/storage.service");

// For File Sytem
const upload = multer({ storage: multer.memoryStorage() });

// Create House
async function AddHouse(req, res) {
  try {
    const result = await UploadFile(req.file.buffer, req.file.originalname);

    const NewHouse = await HouseModel.create({
      Title: req.body.Title,
      description: req.body.description,
      Image: result.url, // ImageKit URL
      Price: req.body.Price,
      location: req.body.location,
      Country: req.body.Country,
    });

    res.status(201).json({
      success: true,
      message: "Property added successfully",
      // data: house
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function ShowAllHouse(req, res) {
  try {
    const houses = await HouseModel.find();

    if (houses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No properties found",
      });
    }

    return res.status(200).json({
      success: true,
      count: houses.length,
      data: houses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Update House
async function UpdateHouse(req, res) {
  try {
    const { id } = req.params;

    console.log(req.body);
    
    const updatedHouse = await HouseModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
        returnDocument: "after",
        runValidators: true
    }
);

    console.log(updatedHouse);

    if (!updatedHouse) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Property updated successfully",
      data: updatedHouse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function DeleteHouse(req, res) {
    try {
        const { id } = req.params;

        const deletedHouse = await HouseModel.findByIdAndDelete(id);

        if (!deletedHouse) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Property deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
  AddHouse,
  ShowAllHouse,
  UpdateHouse,
  DeleteHouse,
};
