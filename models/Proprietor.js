const mongoose = require("mongoose");

// Define schema for blog posts
const proprietorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: false,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["ALL", "EMPLOYEE"],
        default: "ALL",
    },
    address: {
        type: String,
        required: false,
    },
    nid: {
        type: String,
        required: false,
    },
    note: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Proprietor = mongoose.model("Proprietor", proprietorSchema);

module.exports = Proprietor;
