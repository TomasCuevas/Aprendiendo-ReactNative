const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  description: { type: String },
  available: { type: Boolean, defult: true },
  image: { type: String },
});

ProductSchema.methods.toJSON = function () {
  const { __v, state, ...product } = this.toObject();
  return product;
};

module.exports = model("Products", ProductSchema);
