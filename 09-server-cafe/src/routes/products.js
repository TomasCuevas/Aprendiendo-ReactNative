const { Router } = require("express");
const { check } = require("express-validator");

//* MIDDLEWARES *//
const { JWTValidation, fieldValidation, isAdmin } = require("../middlewares");

//* HELPERS *//
const {
  existCategoryById,
  existProductById,
} = require("../helpers/dbValidations");

//* CONTROLLERS *//
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

//* ROUTES {{url}}/api/products *//
const router = Router();

//  Obtener todos los productos - publico
router.get("/", getProducts);

// Obtener un producto por id - publico
router.get(
  "/:id",
  [
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existProductById),
    fieldValidation,
  ],
  getProductById
);

// Crear producto - privado - cualquier persona con un token válido
router.post(
  "/",
  [
    JWTValidation,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("category", "No es un id de Mongo").isMongoId(),
    check("category").custom(existCategoryById),
    fieldValidation,
  ],
  createProduct
);

// Actualizar - privado - cualquiera con token válido
router.put(
  "/:id",
  [
    JWTValidation,
    // check('categoria','No es un id de Mongo').isMongoId(),
    check("id").custom(existProductById),
    fieldValidation,
  ],
  updateProduct
);

// Borrar un producto - Admin
router.delete(
  "/:id",
  [
    JWTValidation,
    isAdmin,
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existProductById),
    fieldValidation,
  ],
  deleteProduct
);

module.exports = router;
