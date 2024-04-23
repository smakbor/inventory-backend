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
        const { proprietor, store, name, note } = req.body;

        const unit = new Unit({
            proprietor,
            store,
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
