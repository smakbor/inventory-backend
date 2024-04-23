const Category = require("../models/Category");

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
        const { proprietor, store, name, note } = req.body;

        const unit = new Category({
            proprietor,
            store,
            name,
            note,
        });

        const result = await unit.save();
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
