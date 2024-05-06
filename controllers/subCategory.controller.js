const Store = require("../models/Store");
const SubCategory = require("../models/SubCategory");

const getAllSubCategory = async (req, res) => {
    try {
        const allSubCategory = await SubCategory.find({});
        res.status(201).json({
            data: allSubCategory,
            message: "Sub category get successfully",
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
            message: "Category created successfully",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllSubCategory,
    subCategoryCreate,
};
