// middleware/CheckData.js

const CheckData = (req, res, next) => {
    try {
        const { Title, Price, location, Country } = req.body;

        // Required Fields
        if (!Title?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        if (!location?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Location is required"
            });
        }

        if (!Country?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Country is required"
            });
        }

        // Price Validation
        const parsedPrice = Number(Price);

        if (isNaN(parsedPrice)) {
            return res.status(400).json({
                success: false,
                message: "Price must be a number"
            });
        }

        if (parsedPrice <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be greater than 0"
            });
        }

        // Title Length
        if (Title.trim().length < 3) {
            return res.status(400).json({
                success: false,
                message: "Title must be at least 3 characters"
            });
        }

        // Country Length
        if (Country.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: "Invalid country name"
            });
        }

        // File Type Validation
        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp"
        ];

        if (!allowedTypes.includes(req.file.mimetype)) {
            return res.status(400).json({
                success: false,
                message: "Only JPG, PNG and WEBP images are allowed"
            });
        }

        // File Size Validation (5MB)
        const maxSize = 5 * 1024 * 1024;

        if (req.file.size > maxSize) {
            return res.status(400).json({
                success: false,
                message: "Image size should be less than 5MB"
            });
        }

        // Type Casting
        req.body.Price = parsedPrice;

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = CheckData;