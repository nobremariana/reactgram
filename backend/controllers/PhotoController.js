const Photo = require('../models/Photo');
const mongoose = require('mongoose');
const User = require('../models/User');
 
// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;
  const user = await User.findById(reqUser._id);

  // Create a photo
  const newPhoto = await Photo.create({
    title,
    image,
    userId: user._id,
    userName: user.name,
  });

  // If photo was created successfully, return data
  if (!newPhoto) {
    return res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."],
    });
  }
    res.status(201).json(newPhoto);

};

// remove a photo from the DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(422).json({
      errors: ["ID inválido."],
    });
  }

  const photo = await Photo.findById(id);
  
  // Check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada!"] });
    return;
  }

  // Check if photo belongs to user
  if (!photo.userId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    return;
  }

  await Photo.findByIdAndDelete(photo._id);

  res
    .status(200)
    .json({ id: photo._id, message: "Foto excluída com sucesso." });
};

module.exports = {
  insertPhoto,
  deletePhoto,
};