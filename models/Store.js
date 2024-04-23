const mongoose = require("mongoose");

// Define schema for blog posts
const storeSchema = new mongoose.Schema({
    proprietor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proprietor",
        required: true,
    },
    storeName: {
        type: String,
        required: true,
    },
    storeAddress: {
        type: String,
        required: true,
    },

    email: {
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

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
