const express = require("express");
const {
    getAllSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier,
} = require("../controllers/suppiler.controller");

const router = express.Router();

router.get("/allSupplier", getAllSupplier);
router.post("/create", createSupplier);
router.patch("/update/:id", updateSupplier);
router.delete("/delete/:id", deleteSupplier);

module.exports = router;
