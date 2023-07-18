const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

//* HELPERS *//
const { JWTGenerate } = require("../helpers");

//* MODEL *//
const UserModel = require("../models/user");

//* CONTROLLERS *//

//! GET USERS
const getUsers = async (req = request, res = response) => {
  const { limit = 5, offset = 0 } = req.query;
  const query = { state: true };

  const [total, users] = await Promise.all([
    UserModel.countDocuments(query),
    UserModel.find(query).skip(Number(offset)).limit(Number(limit)),
  ]);

  res.json({
    total,
    users,
  });
};

//! CREATE USER
const createUser = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new UserModel({ name, email, password, role });

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  // Guardar en BD
  await user.save();

  // Generar el JWT
  const token = await JWTGenerate(user.id);

  res.json({
    user,
    token,
  });
};

//! UPDATE USER
const updateUser = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...rest } = req.body;

  if (password) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const user = await UserModel.findByIdAndUpdate(id, rest);

  res.json({ user });
};

//! DELETE USER
const deleteUser = async (req, res = response) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndUpdate(id, { state: false });

  res.json({ user });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
