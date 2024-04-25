// routes/userRoutes.js
const express = require("express");
const { isAuth } = require("../middlewares/auth");
const { proprietorProfile } = require("../controllers/profile.controller");

const router = express.Router();

// Routes

router.get("/profile", isAuth, proprietorProfile);

module.exports = router;
