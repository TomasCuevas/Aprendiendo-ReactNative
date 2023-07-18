const { response } = require("express");
const { ObjectId } = require("mongoose").Types;

//* MODELS *//
const {
  User: UserModel,
  Category: CategoryModel,
  Product: ProductModel,
} = require("../models");

const permittedCollections = ["users", "categories", "products", "roles"];

//* CONTROLLERS *//

//! SEARCH USERS
const searchUsers = async (term = "", res = response) => {
  const isMongoID = ObjectId.isValid(term); // TRUE

  if (isMongoID) {
    const user = await UserModel.findById(term);
    return res.json({
      results: user ? [user] : [],
    });
  }

  const regex = new RegExp(term, "i");
  const users = await UserModel.find({
    $or: [{ name: regex }, { email: regex }],
    $and: [{ state: true }],
  });

  res.json({
    results: users,
  });
};

//! SEARCH CATEGORIES
const searchCategories = async (term = "", res = response) => {
  const isMongoID = ObjectId.isValid(term); // TRUE

  if (isMongoID) {
    const category = await CategoryModel.findById(term);
    return res.json({
      results: category ? [category] : [],
    });
  }

  const regex = new RegExp(term, "i");
  const categories = await CategoryModel.find({ name: regex, state: true });

  res.json({
    results: categories,
  });
};

//! SEARCH PRODUCTS
const searchProducts = async (term = "", res = response) => {
  const isMongoID = ObjectId.isValid(term); // TRUE

  if (isMongoID) {
    const product = await ProductModel.findById(term).populate(
      "category",
      "name"
    );

    return res.json({
      results: product ? [product] : [],
    });
  }

  const regex = new RegExp(term, "i");
  const products = await ProductModel.find({
    name: regex,
    state: true,
  }).populate("category", "name");

  res.json({
    results: products,
  });
};

//! SEARCH
const search = (req, res = response) => {
  const { collection, term } = req.params;

  if (!permittedCollections.includes(collection)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son: ${permittedCollections}`,
    });
  }

  switch (collection) {
    case "users":
      searchUsers(term, res);
      break;
    case "categories":
      searchCategories(term, res);
      break;
    case "products":
      searchProducts(term, res);
      break;

    default:
      res.status(500).json({
        msg: "Se le olvido hacer esta búsquda",
      });
  }
};

module.exports = {
  search,
};
