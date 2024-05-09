const express = require("express");
const {
    createCustomer,
    getAllCustomer,
    deleteCustomer,
    udpateCustomer,
} = require("../controllers/customer.controller");
const router = express.Router();

router.get("/allCustomer", getAllCustomer);
router.post("/create", createCustomer);
router.patch("/update/:id", udpateCustomer);
router.delete("/delete/:id", deleteCustomer);

module.exports = router;
