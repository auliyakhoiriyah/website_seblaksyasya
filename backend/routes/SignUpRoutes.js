// routes/index.js
const express = require("express");
const { signUp } = require("../controllers/SignUpController");

const router = express.Router();

// Endpoint Sign Up
router.post("/signup", signUp);

module.exports = router;
