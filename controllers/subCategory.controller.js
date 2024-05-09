const Store = require("../models/Store");
const SubCategory = require("../models/SubCategory");

const getAllSubCategory = async (req, res) => {
    try {
        const allSubCategory = await SubCategory.find({});
        res.status(201).json({
            data: allSubCategory,
            message: "SubCategory get successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const subCategoryCreate = async (req, res) => {
    try {
        const { category, name, note } = req.body;
        const id = req.user.user;
        const findStore = await Store.findOne({ id });

        const cat = new SubCategory({
            proprietor: findStore.proprietor,
            store: findStore._id,
            category,
            name,
            note,
        });

        const result = await cat.save();
        res.status(201).json({
            data: result,
            message: "SubCategory created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const udpateSubCategory = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await SubCategory.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "SubCategory Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await SubCategory.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "SubCategory Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllSubCategory,
    subCategoryCreate,
    udpateSubCategory,
    deleteSubCategory,
};
