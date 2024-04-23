const Manufacturer = require("../models/Manufacturer");
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
        const { proprietor, store, name, note } = req.body;
        const manufacturer = new Manufacturer({
            proprietor,
            store,
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
