const { Router } = require("express");
const { check } = require("express-validator");

//* MIDDLEWARES *//
const { fieldValidation, JWTValidation } = require("../middlewares");

//* CONTROLLERS *//
const {
  login,
  googleSignin,
  validateUserToken,
} = require("../controllers/auth");

//* ROUTES {{url}}/api/categories *//
const router = Router();

router.post(
  "/login",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    fieldValidation,
  ],
  login
);

router.post(
  "/google",
  [
    check("id_token", "El id_token es necesario").not().isEmpty(),
    fieldValidation,
  ],
  googleSignin
);

router.get("/", [JWTValidation], validateUserToken);

module.exports = router;
