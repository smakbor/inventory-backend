const express = require("express");
const {
    unitCreate,
    getAllUnit,
    udpateUnit,
    deleteUnit,
} = require("../controllers/unit.controller");

const router = express.Router();

// Routes
router.get("/allUnit", getAllUnit);
router.post("/create", unitCreate);
router.patch("/update/:id", udpateUnit);
router.delete("/delete/:id", deleteUnit);

module.exports = router;
