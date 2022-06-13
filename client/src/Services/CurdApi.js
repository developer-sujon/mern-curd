//external Lib  imports
import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";

//createProduct
export const createProduct = async (
  productName,
  productKey,
  productQuantity,
  unitPrice,
  totalPrice,
) => {
  const URL = BASE_URL + "/product";

  const product = {
    productName,
    productKey,
    productQuantity,
    unitPrice,
    totalPrice,
  };

  try {
    await axios.post(URL, product);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//readProduct
export const readProduct = async () => {
  const URL = BASE_URL + "/product";
  try {
    const response = await axios.get(URL);
    const products = response.data["data"];
    return products;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//readSingleProduct
export const readSingleProduct = async (id) => {
  const URL = BASE_URL + "/product/" + id;

  try {
    const response = await axios.get(URL);
    const product = response.data["data"];
    return product;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//updateProduct
export const updateProduct = async (
  id,
  productName,
  productKey,
  productQuantity,
  unitPrice,
  totalPrice,
) => {
  const URL = BASE_URL + "/product/" + id;

  const product = {
    productName,
    productKey,
    productQuantity,
    unitPrice,
    totalPrice,
  };

  try {
    await axios.put(URL, product);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//deleteProduct
export const deleteProduct = async (id) => {
  const URL = BASE_URL + "/product/" + id;

  try {
    await axios.delete(URL);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
