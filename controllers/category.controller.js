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
module.exports = {
    getAllCategory,
    categoryCreate,
};
