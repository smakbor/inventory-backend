const express = require("express");
const {
    manufacturerCreate,
    getAllManufacturer,
    udpateManufacturer,
    deleteManufacturer,
} = require("../controllers/manufacturer.controller");

const router = express.Router();

router.get("/allManufacturer", getAllManufacturer);
router.post("/create", manufacturerCreate);
router.patch("/update/:id", udpateManufacturer);
router.delete("/delete/:id", deleteManufacturer);

module.exports = router;
