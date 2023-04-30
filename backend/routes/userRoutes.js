const express = require("express");
const authController = require("./../controllers/authController");
const smsController = require("./../controllers/smsController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/sms", smsController.createSms);
router.post("/verify-sms", authController.verifySMS);

module.exports = router;
