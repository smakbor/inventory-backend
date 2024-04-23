const express = require("express");
const {
    categoryCreate,
    getAllCategory,
} = require("../controllers/category.controller");

const router = express.Router();

// Routes
router.get("/allCategory", getAllCategory);
router.post("/create", categoryCreate);

module.exports = router;
