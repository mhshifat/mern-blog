const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const UserModel = require("../models/userModel");

const generateToken = (user) =>
  jwt.sign({ ...user }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

module.exports.loginValidations = [
  body("email").not().isEmpty().trim().withMessage("Email is required!"),
  body("password").not().isEmpty().trim().withMessage("Password is required!"),
];

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(432).json({ errors: errors.array() });
  }
  try {
    const checkUser = await UserModel.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({ errors: [{ msg: "Wrong credentials!" }] });
    }
    const matched = await bcrypt.compare(password, checkUser.password);
    if (!matched) {
      return res.status(400).json({ errors: [{ msg: "Wrong credentials!" }] });
    }
    const token = generateToken(checkUser);
    return res
      .status(200)
      .json({ msg: "Your have logged in successfully", token });
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

module.exports.registerValidations = [
  body("name").not().isEmpty().trim().withMessage("Name is required!"),
  body("email").not().isEmpty().trim().withMessage("Email is required!"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be 5 characters long!"),
];

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(432).json({ errors: errors.array() });
  }
  try {
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ errors: [{ msg: "User already exist!" }] });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await UserModel.create({ email, name, password: hash });
    const token = generateToken(user);
    return res
      .status(200)
      .json({ msg: "Your account has been created", token });
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};
