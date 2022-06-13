//external import
const Product = require("../models/ProductModels");

//createProduct
exports.createProduct = async (req, res) => {
  const { productName, productKey, productQuantity, unitPrice, totalPrice } =
    req.body;

  const newProduct = new Product({
    productName,
    productKey,
    productQuantity,
    unitPrice,
    totalPrice,
  });

  try {
    await newProduct.save();
    res.status(201).json({ status: "success", data: newProduct });
  } catch (errors) {
    console.log(errors);
    res
      .status(500)
      .json({ status: "fail", data: "there was a server side error" });
  }
};

//readProduct
exports.readProduct = async (req, res) => {
  const query = {};
  const projection =
    "productName productKey productQuantity unitPrice totalPrice";

  try {
    const products = await Product.find(query, projection);
    if (products && products.length > 0) {
      res.status(200).json({ status: "success", data: products });
    } else {
      res.status(404).json({ status: "fail", data: "products not found" });
    }
  } catch (errors) {
    console.log(errors);
    res
      .status(500)
      .json({ status: "fail", data: "there was a server side error" });
  }
};

//readSingleProduct
exports.readSingleProduct = async (req, res) => {
  const { productId } = req.params;
  const projection =
    "productName productKey productQuantity unitPrice totalPrice";

  try {
    const product = await Product.find({ _id: productId }, projection);
    if (product && product.length > 0) {
      res.status(200).json({ status: "success", data: product });
    } else {
      res.status(404).json({ status: "fail", data: "product not found" });
    }
  } catch (errors) {
    console.log(errors);
    res
      .status(500)
      .json({ status: "fail", data: "there was a server side error" });
  }
};

//updateProduct
exports.updateProduct = async (req, res) => {
  const { productId } = req.params;

  const { productName, productKey, productQuantity, unitPrice, totalPrice } =
    req.body;

  const newProduct = {
    productName,
    productKey,
    productQuantity,
    unitPrice,
    totalPrice,
  };

  try {
    const product = await Product.find({ _id: productId });
    if (product && product.length > 0) {
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: productId },
        newProduct,
        { new: true },
      );
      res.status(200).json({ status: "success", data: updatedProduct });
    } else {
      res.status(404).json({ status: "fail", data: "product not found" });
    }
  } catch (errors) {
    console.log(errors);
    res
      .status(500)
      .json({ status: "fail", data: "there was a server side error" });
  }
};

//deleteProduct
exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.find({ _id: productId });
    if (product && product.length > 0) {
      await Product.findByIdAndDelete({ _id: productId });

      res.status(200).json({ status: "success", data: product });
    } else {
      res.status(404).json({ status: "fail", data: "product not found" });
    }
  } catch (errors) {
    console.log(errors);
    res
      .status(500)
      .json({ status: "fail", data: "there was a server side error" });
  }
};
