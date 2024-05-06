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
module.exports = {
    getAllUnit,
    unitCreate,
};
