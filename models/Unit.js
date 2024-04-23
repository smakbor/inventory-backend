const mongoose = require("mongoose");

// Define schema for blog posts
const unitSchema = new mongoose.Schema({
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
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
