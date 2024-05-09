const express = require("express");
const {
    createWarranty,
    getAllWarranty,
    udpateWarranty,
    deleteWarranty,
} = require("../controllers/warranty.controller");
const router = express.Router();

router.get("/allWarranty", getAllWarranty);
router.post("/create", createWarranty);
router.patch("/update/:id", udpateWarranty);
router.delete("/delete/:id", deleteWarranty);

module.exports = router;
