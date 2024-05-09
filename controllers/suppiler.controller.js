const Store = require("../models/Store");
const Supplier = require("../models/Supplier");

const getAllSupplier = async (req, res) => {
    try {
        const allSupplier = await Supplier.find({});
        res.status(202).json({
            data: allSupplier,
            message: "Supplier get successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

const createSupplier = async (req, res) => {
    try {
        const id = req.user.user;
        const findStore = await Store.findOne({ id });
        const {
            companyName,
            accountNumber,
            name,
            email,
            mobile,
            address,
            nid,
            prevDue,
        } = req.body;
        const supplier = new Supplier({
            proprietor: findStore.proprietor,
            store: findStore._id,
            companyName,
            accountNumber,
            name,
            email,
            mobile,
            address,
            nid,
            prevDue,
        });

        const result = await supplier.save();

        res.status(201).json({
            data: result,
            message: "Supplier Created Successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const updateSupplier = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await Supplier.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Supplier Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Supplier.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Supplier Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createSupplier,
    getAllSupplier,
    updateSupplier,
    deleteSupplier,
};
