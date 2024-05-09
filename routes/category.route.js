const express = require("express");
const {
    categoryCreate,
    getAllCategory,
    udpateCategory,
    deleteCategory,
} = require("../controllers/category.controller");

const router = express.Router();

// Routes
router.get("/allCategory", getAllCategory);
router.post("/create", categoryCreate);
router.patch("/update/:id", udpateCategory);
router.delete("/delete/:id", deleteCategory);

module.exports = router;
