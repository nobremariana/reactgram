const express = require("express");
const router = express.Router();

//controller
const { register } = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidations");
const {userCreateValidation} = require("../middlewares/userValidation");

//routes
router.post("/register", userCreateValidation(), validate, register);

module.exports = router; 