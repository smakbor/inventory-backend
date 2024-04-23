const express = require("express");
const { storeCreate } = require("../controllers/store.controller");

const router = express.Router();

router.post("/create", storeCreate);

module.exports = router;
