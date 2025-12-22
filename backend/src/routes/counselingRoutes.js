const express = require("express");
const router = express.Router();
const { validateCounseling } = require("../middleware/validate");



const {
  bookCounseling,
  getAllCounseling
} = require("../controllers/counselingController");

router.post("/book", validateCounseling, bookCounseling);
router.get("/all", getAllCounseling);

module.exports = router;
