const Warranty = require("../models/Warranty");

const getAllWarranty = async (req, res) => {
    const allWarranty = await Warranty.find({});
    res.status(202).json({
        data: allWarranty,
        message: "Warranty get successfully",
    });
};

const createWarranty = async (req, res) => {
    try {
        const { proprietor, store, name, note } = req.body;
        const warranty = new Warranty({
            proprietor,
            store,
            name,
            note,
        });
        const result = await warranty.save();
        res.status(201).json({
            data: result,
            message: "Warranty created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllWarranty,
    createWarranty,
};
