const { response } = require("express");

//* MODELS *//
const CategoryModel = require("../models/category");

//* CONTROLLERS *//

//! GET CATEGORIES
const getCategories = async (req, res = response) => {
  const { limit = 5, offset = 0 } = req.query;
  const query = { state: true };

  const [total, categories] = await Promise.all([
    CategoryModel.countDocuments(query),
    CategoryModel.find(query)
      .populate("user", "name")
      .skip(Number(offset))
      .limit(Number(limit)),
  ]);

  res.json({
    total,
    categories,
  });
};

//! GET CATEGORY BY ID
const getCategoryById = async (req, res = response) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id).populate("user", "name");

  res.json({ category });
};

//! CREATE CATEGORY
const createCategory = async (req, res = response) => {
  const name = req.body.name.toUpperCase();

  const existCategory = await CategoryModel.findOne({ name });

  if (existCategory) {
    return res.status(400).json({
      msg: `La categoria ${existCategory.nombre}, ya existe`,
    });
  }

  // Generar la data a guardar
  const data = {
    name,
    user: req.user._id,
  };

  const category = new CategoryModel(data);

  // Guardar DB
  await category.save();

  res.status(201).json({ category });
};

//! UPDATE CATEGORY
const updateCategory = async (req, res = response) => {
  const { id } = req.params;
  const { state, user, ...data } = req.body;

  data.name = data.name.toUpperCase();
  data.user = req.user._id;

  const category = await CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  res.json({ category });
};

//! DELETE CATEGORY
const deleteCategory = async (req, res = response) => {
  const { id } = req.params;

  const deletedCategory = await CategoryModel.findByIdAndUpdate(
    id,
    { state: false },
    { new: true }
  );

  res.json({ deletedCategory });
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
