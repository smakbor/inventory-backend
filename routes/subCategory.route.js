const SubCategory = require("../models/SubCategory");

const getAllSubCategory = async (req, res) => {
    try {
        const allSubCategory = await SubCategory.find({});
        res.status(202).json({
            data: allSubCategory,
            message: "Sub Category get successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

const createSubCategory = async (req, res) => {
    try {
        const { proprietor, store, name, category, note } = req.body;
        const subCategory = new SubCategory({
            proprietor,
            store,
            name,
            category,
            note,
        });
        const result = await subCategory.save();
        res.status(201).json({
            data: result,
            message: "Sub Category created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllSubCategory,
    createSubCategory,
};
