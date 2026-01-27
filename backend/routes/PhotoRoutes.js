const express = require("express");
const router = express.Router();

// Controller
const { insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById, 
    updatePhoto,
    likePhoto,
    commentPhoto } 
    = require("../controllers/PhotoController");

// Middlewares
const { photoInsertValidation, photoUpdateValidation, commentValidation } = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");
const { imageUpload } = require("../middlewares/imageUoload");

// Routes
router.post("/", imageUpload.single("image"), authGuard, photoInsertValidation(), validate, insertPhoto);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put("/comment/:id", commentValidation(), authGuard, validate, commentPhoto);

module.exports = router;