const Customer = require("../models/Customer");
const Store = require("../models/Store");

const getAllCustomer = async (req, res) => {
    try {
        const allCustomer = await Customer.find({});
        res.status(202).json({
            data: allCustomer,
            message: "Customer get successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

const createCustomer = async (req, res) => {
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
        const customer = new Customer({
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

        const result = await customer.save();

        res.status(201).json({
            data: result,
            message: "Customer Created Successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

const udpateCustomer = async (req, res) => {
    try {
        const updatedData = req.body;
        const { id } = req.params;

        const result = await Customer.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        res.status(200).json({
            data: result,
            message: "Customer Update successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

let deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Customer.findByIdAndDelete({ _id: id });
        res.status(200).json({
            data: deletedItem,
            message: "Customer Deleted successfull",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCustomer,
    getAllCustomer,
    deleteCustomer,
    udpateCustomer,
};
