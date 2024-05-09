const mongoose = require("mongoose");

// Define schema for blog posts
const brandSchema = new mongoose.Schema({
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
    name: {
        type: String,
        required: true,
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

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
