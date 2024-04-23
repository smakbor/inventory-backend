const express = require("express");
const { unitCreate, getAllUnit } = require("../controllers/unit.controller");

const router = express.Router();

// Routes
router.get("/allUnit", getAllUnit);
router.post("/create", unitCreate);

module.exports = router;
