const mongoose = require("mongoose");

// Define schema for blog posts
const subCategorySchema = new mongoose.Schema({
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
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
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

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
