//* MODELS *//
const {
  User: UserModel,
  Category: CategoryModel,
  Product: ProductModel,
  Role: RoleModel,
} = require("../models");

const isValidRole = async (role = "USER_ROLE") => {
  const existRole = await RoleModel.findOne({ role });
  if (!existRole) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
};

const existEmail = async (email = "") => {
  // Verificar si el correo existe
  const existEmail = await UserModel.findOne({ email });
  if (existEmail) {
    throw new Error(`El correo: ${email}, ya está registrado`);
  }
};

const existUserById = async (id) => {
  // Verificar si el correo existe
  const existUser = await UserModel.findById(id);
  if (!existUser) {
    throw new Error(`El id no existe ${id}`);
  }
};

/**
 * Categorias
 */
const existCategoryById = async (id) => {
  // Verificar si el correo existe
  const existCategory = await CategoryModel.findById(id);
  if (!existCategory) {
    throw new Error(`El id no existe ${id}`);
  }
};

/**
 * Productos
 */
const existProductById = async (id) => {
  // Verificar si el correo existe
  const existProduct = await ProductModel.findById(id);
  if (!existProduct) {
    throw new Error(`El id no existe ${id}`);
  }
};

/**
 * Validar colecciones permitidas
 */
const permittedCollections = (collection = "", collections = []) => {
  const included = collections.includes(collection);
  if (!included) {
    throw new Error(
      `La colección ${collection} no es permitida. [${collections}]`
    );
  }

  return true;
};

module.exports = {
  existCategoryById,
  existEmail,
  existProductById,
  existUserById,
  isValidRole,
  permittedCollections,
};
