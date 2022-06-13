//external import
const productRoutes = require("express").Router();

const ProductControllers = require("../controllers/ProductControllers");

//createProduct
productRoutes.post("/product", ProductControllers.createProduct);

//readProduct
productRoutes.get("/product", ProductControllers.readProduct);

//readSingleProduct
productRoutes.get("/product/:productId", ProductControllers.readSingleProduct);

//updateProduct
productRoutes.put("/product/:productId", ProductControllers.updateProduct);

//deleteProduct
productRoutes.delete("/product/:productId", ProductControllers.deleteProduct);

module.exports = productRoutes;
