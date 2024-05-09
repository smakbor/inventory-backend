const Category = require("../models/Category");
const Store = require("../models/Store");

const getAllCategory = async (req, res) => {
    try {
        const allCategory = await Category.find({});
        res.status(201).json({
            data: allCategory,
            message: "Category Get successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const categoryCreate = async (req, res) => {
    try {
        const { name, note } = req.body;
        const id = req.user.user;
        const findStore = await Store.findOne({ id });

        const cat = new Category({
            proprietor: findStore.proprietor,
            store: findStore._id,
            name,
            note,
        });

        const result = await cat.save();
        res.status(201).json({
            data: result,
            message: "Category created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const udpateCategory = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await Category.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Category Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Category.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Category Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllCategory,
    categoryCreate,
    udpateCategory,
    deleteCategory,
};
