const express = require("express");
const {
  bookCounseling,
  getAllCounseling,
} = require("../controllers/counselingController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", bookCounseling);

// 🔐 ADMIN ONLY
router.get("/all", auth, getAllCounseling);

module.exports = router;
