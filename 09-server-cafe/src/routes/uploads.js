const { Router } = require("express");
const { check } = require("express-validator");

//* MIDDLEWARES *//
const { fieldValidation, fileValidation } = require("../middlewares");

//* HELPERS *//
const { permittedCollections } = require("../helpers");

//* CONTROLLERS *//
const {
  uploadFile,
  showImage,
  updateCloudinaryImage,
} = require("../controllers/uploads");

//* ROUTES {{url}}/api/uploads *//
const router = Router();

router.post("/", fileValidation, uploadFile);

router.put(
  "/:collection/:id",
  [
    fileValidation,
    check("id", "El id debe de ser de mongo").isMongoId(),
    check("collection").custom((c) =>
      permittedCollections(c, ["users", "products"])
    ),
    fieldValidation,
  ],
  updateCloudinaryImage
);

router.get(
  "/:collection/:id",
  [
    check("id", "El id debe de ser de mongo").isMongoId(),
    check("collection").custom((c) =>
      permittedCollections(c, ["users", "products"])
    ),
    fieldValidation,
  ],
  showImage
);

module.exports = router;
