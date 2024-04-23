const mongoose = require("mongoose");

// Define schema for blog posts
const productSchema = new mongoose.Schema({
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
    model: {
        type: String,
        required: true,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
    },
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manufacturer",
    },
    warranty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warranty",
    },
    purchase: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    hasWarranty: {
        type: Boolean,
        required: true,
    },

    details: {
        type: String,
        required: true,
    },
    expireDate: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("Product", productSchema);
