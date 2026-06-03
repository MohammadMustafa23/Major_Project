const HouseModel = require("../models/House.models");

// Create House
async function AddHouse(req, res) {
    try {
        const house = await HouseModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Property added successfully",
            data: house
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Get All Houses
async function ShowAllHouse(req, res) {
    try {
        const houses = await HouseModel.find();

        res.status(200).json({
            success: true,
            count: houses.length,
            data: houses
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Update House
async function UpdateHouse(req, res) {
    try {
        const { id } = req.params;

        const updatedHouse = await HouseModel.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedHouse) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Property updated successfully",
            data: updatedHouse
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Delete House
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
            message: "Property deleted successfully",
            data: deletedHouse
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
    DeleteHouse
};