const express = require("express");
const {
    createWarranty,
    getAllWarranty,
} = require("../controllers/warranty.controller");
const router = express.Router();

router.get("/allWarranty", getAllWarranty);
router.post("/create", createWarranty);

module.exports = router;
