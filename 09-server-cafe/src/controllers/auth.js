const { response } = require("express");
const bcryptjs = require("bcryptjs");

//* MODEL *//
const UserModel = require("../models/user");

//* HELPERS *//
const { JWTGenerate, googleVerify } = require("../helpers");

//* CONTROLLERS *//

//! LOGIN
const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - correo",
      });
    }

    // SI el usuario está activo
    if (!user.state) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - estado: false",
      });
    }

    // Verificar la contraseña
    const validatePassword = bcryptjs.compareSync(password, user.password);
    if (!validatePassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - password",
      });
    }

    // Generar el JWT
    const token = await JWTGenerate(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

//! LOGIN WITH GOOGLE
const googleSignin = async (req, res = response) => {
  const { id_token } = req.body;

  try {
    const { email, image, name } = await googleVerify(id_token);

    let user = await UserModel.findOne({ email });

    if (!user) {
      // Tengo que crearlo
      const data = {
        name,
        email,
        password: ":P",
        image,
        google: true,
      };

      user = new UserModel(data);
      await user.save();
    }

    // Si el usuario en DB
    if (!user.state) {
      return res.status(401).json({
        msg: "Hable con el administrador, usuario bloqueado",
      });
    }

    // Generar el JWT
    const token = await JWTGenerate(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Token de Google no es válido",
    });
  }
};

//! VALIDATE USER TOKEN
const validateUserToken = async (req, res = response) => {
  // Generar el JWT
  const token = await JWTGenerate(req.usuario._id);

  res.json({
    user: req.user,
    token,
  });
};

module.exports = {
  login,
  googleSignin,
  validateUserToken,
};
