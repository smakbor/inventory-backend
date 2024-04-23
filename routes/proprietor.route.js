// routes/userRoutes.js
const express = require("express");
const { proprietorCreate } = require("../controllers/proprietor.controller");
const router = express.Router();

// Routes
router.post("/register", proprietorCreate);

module.exports = router;
