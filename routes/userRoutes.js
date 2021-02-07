const express = require("express");
const {
  register,
  registerValidations,
  loginValidations,
  login,
} = require("../controllers/userController");

const router = express.Router();
router.post("/login", loginValidations, login);
router.post("/register", registerValidations, register);

module.exports = router;
