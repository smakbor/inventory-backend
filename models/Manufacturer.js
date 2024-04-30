const mongoose = require("mongoose");

// Define schema for blog posts
const manufacturerSchema = new mongoose.Schema({
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

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
module.exports = Manufacturer;
