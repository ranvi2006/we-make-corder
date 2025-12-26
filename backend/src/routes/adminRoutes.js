const express = require("express");
const { getDashboardStats } = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// 🔐 ADMIN ONLY
router.get("/dashboard", auth, getDashboardStats);

module.exports = router;
