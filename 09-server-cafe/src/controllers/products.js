const { response } = require("express");

//* MODELS *//
const ProductModel = require("../models/product");

//* CONTROLLERS *//

//! GET PRODUCTS
const getProducts = async (req, res = response) => {
  const { limit = 5, offset = 0 } = req.query;
  const query = { state: true };

  const [total, products] = await Promise.all([
    ProductModel.countDocuments(query),
    ProductModel.find(query)
      .populate("user", "name")
      .populate("category", "name")
      .skip(Number(offset))
      .limit(Number(limit)),
  ]);

  res.json({
    total,
    products,
  });
};

//! GET PRODUCT BY ID
const getProductById = async (req, res = response) => {
  const { id } = req.params;

  const product = await ProductModel.findById(id)
    .populate("user", "name")
    .populate("category", "name");

  res.json({ product });
};

//! CREATE PRODUCT
const createProduct = async (req, res = response) => {
  const { state, user, ...body } = req.body;

  const existeProduct = await ProductModel.findOne({
    name: body.name.toUpperCase(),
  });

  if (existeProduct) {
    return res.status(400).json({
      msg: `El producto ${existeProduct.nombre}, ya existe`,
    });
  }

  // Generar la data a guardar
  const data = {
    ...body,
    name: body.name.toUpperCase(),
    user: req.user._id,
  };

  const product = new ProductModel(data);

  // Guardar DB
  const newProduct = await product.save();
  await newProduct
    .populate("user", "name")
    .populate("category", "name")
    .execPopulate();

  res.status(201).json({ newProduct });
};

//! UPDATE PRODUCT
const updateProduct = async (req, res = response) => {
  const { id } = req.params;
  const { state, user, ...data } = req.body;

  if (data.name) {
    data.name = data.name.toUpperCase();
  }

  data.user = req.user._id;

  const product = await ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  await product
    .populate("user", "name")
    .populate("category", "name")
    .execPopulate();

  res.json({ product });
};

//! DELETE PRODUCT
const deleteProduct = async (req, res = response) => {
  const { id } = req.params;

  const deletedProduct = await ProductModel.findByIdAndUpdate(
    id,
    { state: false },
    { new: true }
  );

  res.json(deletedProduct);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
