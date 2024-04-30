const Manufacturer = require("../models/Manufacturer");
const Store = require("../models/Store");
const getAllManufacturer = async (req, res) => {
    try {
        const allManufacturer = await Manufacturer.find({});
        res.status(202).json({
            data: allManufacturer,
            message: "Manufacturer get successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const manufacturerCreate = async (req, res) => {
    try {
        const { name, note } = req.body;
        const id = req.user.user;
        const findStore = await Store.findOne({ id });
        const manufacturer = new Manufacturer({
            proprietor: id,
            store: findStore,
            name,
            note,
        });
        const result = await manufacturer.save();
        res.status(201).json({
            data: result,
            message: "Manufacturer create successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllManufacturer,
    manufacturerCreate,
};
