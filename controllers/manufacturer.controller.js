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
            proprietor: findStore.proprietor,
            store: findStore._id,
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

const udpateManufacturer = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await Manufacturer.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Manufacturer Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteManufacturer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Manufacturer.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Manufacturer Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllManufacturer,
    manufacturerCreate,
    udpateManufacturer,
    deleteManufacturer,
};
