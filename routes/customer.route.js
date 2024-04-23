const express = require("express");
const {
    createCustomer,
    getAllCustomer,
} = require("../controllers/customer.controller");
const router = express.Router();

router.get("/allCustomer", getAllCustomer);
router.post("/create", createCustomer);

module.exports = router;
