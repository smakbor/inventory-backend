const Store = require("../models/Store");
const Unit = require("../models/Unit");

const getAllUnit = async (req, res) => {
    try {
        const allUnit = await Unit.find({});
        res.status(202).json({
            data: allUnit,
            message: "Unit get successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

const unitCreate = async (req, res) => {
    try {
        const { name, note } = req.body;
        const id = req?.user?.user;
        const findStore = await Store.findOne({ id });
        const unit = new Unit({
            proprietor: findStore.proprietor,
            store: findStore._id,
            name,
            note,
        });

        const result = await unit.save();
        res.status(201).json({
            data: result,
            message: "Unit created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const udpateUnit = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await Unit.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Unit Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteUnit = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Unit.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Unit Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUnit,
    unitCreate,
    udpateUnit,
    deleteUnit,
};
