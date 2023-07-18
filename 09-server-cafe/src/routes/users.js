const { Router } = require("express");
const { check } = require("express-validator");

//* MIDDLEWARES *//
const { fieldValidation, JWTValidation, hasRole } = require("../middlewares");

//* HELPERS *//
const {
  isValidRole,
  existEmail,
  existUserById,
} = require("../helpers/dbValidations");

//* CONTROLLERS *//
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

//* ROUTES {{url}}/api/users *//
const router = Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe de ser más de 6 letras").isLength({
      min: 6,
    }),
    check("email", "El correo no es válido").isEmail(),
    check("email").custom(existEmail),
    check("role").custom(isValidRole),
    fieldValidation,
  ],
  createUser
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserById),
    check("role").custom(isValidRole),
    fieldValidation,
  ],
  updateUser
);

router.delete(
  "/:id",
  [
    JWTValidation,
    hasRole("ADMIN_ROLE", "VENTAR_ROLE", "OTRO_ROLE"),
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserById),
    fieldValidation,
  ],
  deleteUser
);

module.exports = router;
