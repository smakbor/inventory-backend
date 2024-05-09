const mongoose = require("mongoose");

// Define schema for blog posts
const supplierSchema = new mongoose.Schema({
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true,
    },
    proprietor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proprietor",
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    nid: {
        type: String,
        required: false,
    },
    prevDue: {
        type: Number,
        required: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
