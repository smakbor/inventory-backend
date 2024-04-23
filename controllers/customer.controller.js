const Customer = require("../models/Customer");

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
        const {
            proprietor,
            store,
            companyName,
            accountNumber,
            name,
            email,
            mobile,
            address,
            nid,
            prevDue,
            reference,
        } = req.body;
        console.log(reference);
        const customer = new Customer({
            proprietor,
            store,
            companyName,
            accountNumber,
            name,
            email,
            mobile,
            address,
            nid,
            prevDue,
            reference: reference,
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

module.exports = {
    createCustomer,
    getAllCustomer,
};
