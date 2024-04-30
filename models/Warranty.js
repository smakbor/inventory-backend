const mongoose = require("mongoose");

// Define schema for blog posts
const warrantySchema = new mongoose.Schema({
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

const Warranty = mongoose.model("Warranty", warrantySchema);

module.exports = Warranty;
