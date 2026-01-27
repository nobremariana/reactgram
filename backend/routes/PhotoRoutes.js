const express = require("express");
const router = express.Router();

// Controller
const {insertPhoto} = require("../controllers/PhotoController");

// Middlewares
const { photoInsertValidation } = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");
const { imageUpload } = require("../middlewares/imageUoload");

// Routes
router.post("/", imageUpload.single("image"), authGuard, photoInsertValidation(), validate, insertPhoto);

module.exports = router;