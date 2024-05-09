const express = require("express");

const {
    getAllSubCategory,
    subCategoryCreate,
    udpateSubCategory,
    deleteSubCategory,
} = require("../controllers/subCategory.controller");

const router = express.Router();

// Routes
router.get("/allSubCategory", getAllSubCategory);
router.post("/create", subCategoryCreate);
router.patch("/update/:id", udpateSubCategory);
router.delete("/delete/:id", deleteSubCategory);

module.exports = router;
