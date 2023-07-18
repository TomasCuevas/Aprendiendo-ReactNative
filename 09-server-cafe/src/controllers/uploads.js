const path = require("path");
const fs = require("fs");
const { response } = require("express");
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

//* HELPERS *//
const { uploadFile } = require("../helpers");

//* MODELS *//
const { User: UserModel, Product: ProductModel } = require("../models");

//* CONTROLLERS *//

//! UPLOAD FILE
const uploadFileController = async (req, res = response) => {
  try {
    const name = await uploadFile(req.files, undefined, "images");
    res.json({ name });
  } catch (msg) {
    res.status(400).json({ msg });
  }
};

//! UPDATE IMAGE
const updateImage = async (req, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case "users":
      model = await UserModel.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `No existe un usuario con el id ${id}`,
        });
      }

      break;

    case "products":
      model = await ProductModel.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id ${id}`,
        });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvidó validar esto" });
  }

  // Limpiar imágenes previas
  if (model.image) {
    // Hay que borrar la imagen del servidor
    const pathImagen = path.join(
      __dirname,
      "../uploads",
      collection,
      model.image
    );

    if (fs.existsSync(pathImagen)) {
      fs.unlinkSync(pathImagen);
    }
  }

  const temporaryName = await uploadFileController(
    req.files,
    undefined,
    collection
  );
  model.image = temporaryName;

  await model.save();

  res.json({ model });
};

//! UPDATE CLOUDINARY IMAGE
const updateCloudinaryImage = async (req, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case "users":
      model = await UserModel.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `No existe un usuario con el id ${id}`,
        });
      }

      break;

    case "products":
      model = await ProductModel.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id ${id}`,
        });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvidó validar esto" });
  }

  // Limpiar imágenes previas
  if (model.image) {
    const nameArray = model.image.split("/");
    const name = nameArray[nameArray.length - 1];
    const [public_id] = name.split(".");
    cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.file;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
    folder: "cafe/productos",
  });
  model.image = secure_url;

  await model.save();

  res.json({ model });
};

//! SHOW IMAGE
const showImage = async (req, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case "users":
      model = await UserModel.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `No existe un usuario con el id ${id}`,
        });
      }

      break;

    case "products":
      model = await ProductModel.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `No existe un producto con el id ${id}`,
        });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvidó validar esto" });
  }

  // Obtener path de la imagen y retornarla
  if (model.image) {
    const pathImagen = path.join(
      __dirname,
      "../uploads",
      collection,
      model.image
    );

    if (fs.existsSync(pathImagen)) {
      return res.sendFile(pathImagen);
    }
  }

  const pathImagen = path.join(__dirname, "../assets/no-image.jpg");
  res.sendFile(pathImagen);
};

module.exports = {
  uploadFile: uploadFileController,
  updateImage,
  updateCloudinaryImage,
  showImage,
};
