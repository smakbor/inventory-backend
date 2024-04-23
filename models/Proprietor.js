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
    address: {
        type: String,
        required: true,
    },
    nid: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Proprietor = mongoose.model("Proprietor", proprietorSchema);

module.exports = Proprietor;
