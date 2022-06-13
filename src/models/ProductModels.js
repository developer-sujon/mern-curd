//external import
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: { type: String, required: true, trim: true },
    productKey: { type: String, required: true, trim: true },
    productQuantity: { type: String, required: true, trim: true },
    unitPrice: { type: String, required: true, trim: true },
    totalPrice: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false },
);

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
