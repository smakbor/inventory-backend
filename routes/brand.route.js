const express = require("express");
const {
    getAllBrand,
    brandCreate,
    brandUpdate,
    deleteBrand,
} = require("../controllers/brand.controller");

const router = express.Router();
// Routes
router.get("/allBrand", getAllBrand);
router.post("/create", brandCreate);
router.patch("/update/:id", brandUpdate);
router.delete("/delete/:id", deleteBrand);

module.exports = router;
