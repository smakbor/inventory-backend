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

const udpateWarranty = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await Warranty.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Warranty Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteWarranty = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Warranty.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Warranty Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllWarranty,
    createWarranty,
    deleteWarranty,
    udpateWarranty,
};
