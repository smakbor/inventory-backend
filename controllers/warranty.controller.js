const Store = require("../models/Store");
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
        const { name, note } = req.body;
        const id = req.user.user;
        const findStore = await Store.findOne({ id });
        const warranty = new Warranty({
            proprietor: findStore.proprietor,
            store: findStore._id,
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
