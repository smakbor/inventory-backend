const express = require("express");
const {
    manufacturerCreate,
    getAllManufacturer,
} = require("../controllers/manufacturer.controller");

const router = express.Router();

router.get("/allManufacturer", getAllManufacturer);
router.post("/create", manufacturerCreate);

module.exports = router;
