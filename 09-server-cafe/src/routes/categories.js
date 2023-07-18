const { Router } = require("express");
const { check } = require("express-validator");

//* MIDDLEWARES *//
const { JWTValidation, fieldValidation, isAdmin } = require("../middlewares");

//* HELPERS *//
const { existCategoryById } = require("../helpers/dbValidations");

//* CONTROLLERS *//
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

//* ROUTES {{url}}/api/categories *//E
const router = Router();

//  Obtener todas las categorias - publico
router.get("/", getCategories);

// Obtener una categoria por id - publico
router.get(
  "/:id",
  [
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existCategoryById),
    fieldValidation,
  ],
  getCategoryById
);

// Crear categoria - privado - cualquier persona con un token válido
router.post(
  "/",
  [
    JWTValidation,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    fieldValidation,
  ],
  createCategory
);

// Actualizar - privado - cualquiera con token válido
router.put(
  "/:id",
  [
    JWTValidation,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("id").custom(existCategoryById),
    fieldValidation,
  ],
  updateCategory
);

// Borrar una categoria - Admin
router.delete(
  "/:id",
  [
    JWTValidation,
    isAdmin,
    check("id", "No es un id de Mongo válido").isMongoId(),
    check("id").custom(existCategoryById),
    fieldValidation,
  ],
  deleteCategory
);

module.exports = router;
