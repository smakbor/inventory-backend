// routes/userRoutes.js
const express = require("express");
const {
    proprietorCreate,
    proprietorLogin,
} = require("../controllers/proprietor.controller");
const { isAuth } = require("../middlewares/auth");
const router = express.Router();

// Routes
router.post("/auth/register", proprietorCreate);
router.post("/auth/login", proprietorLogin);

module.exports = router;
