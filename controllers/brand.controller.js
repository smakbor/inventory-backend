const Store = require("../models/Store");
const Brand = require("../models/brand");

const getAllBrand = async (req, res) => {
    try {
        const allUnit = await Brand.find({});
        res.status(202).json({
            data: allUnit,
            message: "Brand get successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

const brandCreate = async (req, res) => {
    try {
        const { name, note } = req.body;
        const id = req?.user?.user;
        const findStore = await Store.findOne({ id });
        const unit = new Brand({
            proprietor: findStore.proprietor,
            store: findStore._id,
            name,
            note,
        });

        const result = await unit.save();
        res.status(201).json({
            data: result,
            message: "Brand created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const brandUpdate = async (req, res) => {
    try {
        const updatedData = req.body;
        console.log(updatedData);
        const { id } = req.params;

        const result = await Brand.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Brand Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Brand.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Brand Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllBrand,
    brandCreate,
    brandUpdate,
    deleteBrand,
};
