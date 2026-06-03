// middleware/CheckData.js

const CheckData = (req, res, next) => {
    const { Title, Image, Price, location, Country } = req.body;

    if (!Title || !Image || !Price || !location || !Country) {
        return res.status(400).json({
            success: false,
            message: "Please fill all required fields"
        });
    }

    if (Price <= 0) {
        return res.status(400).json({
            success: false,
            message: "Price must be greater than 0"
        });
    }

    next();
};

module.exports = CheckData;