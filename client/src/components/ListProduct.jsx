import React, { useState, useEffect, useRef } from "react";
import { Button, Table } from "react-bootstrap";
import { deleteProduct, readProduct } from "../Services/CurdApi";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { errorMessage, successMessage } from "../helper/toastMessage/CurdToast";

import Loding from "../partials/Loding";

function ListProduct() {
  let loder = useRef();
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    readProduct()
      .then((product) => {
        setProducts(product);
        loder.classList.add("d-none");
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const editProductHandler = (id) => {
    navigate("/update-product/" + id);
  };

  const deleteProductHandler = (id) => {
    loder.classList.remove("d-none");
    deleteProduct(id)
      .then((result) => {
        console.log(result);

        successMessage("Product deleted successfully");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        err.response.status && errorMessage("Product deleted failed");
      });

    loder.classList.add("d-none");
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map(
              ({
                productKey,
                productName,
                productQuantity,
                unitPrice,
                totalPrice,
                _id,
              }) => {
                return (
                  <tr key={_id}>
                    <td>{productKey}</td>
                    <td>{productName}</td>
                    <td>{productQuantity}</td>
                    <td>${unitPrice}</td>
                    <td>${totalPrice}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={editProductHandler.bind(this, _id)}
                      >
                        <AiFillEdit />
                      </Button>

                      <Button
                        variant="danger"
                        className="me-2"
                        onClick={deleteProductHandler.bind(this, _id)}
                      >
                        <AiFillDelete />
                      </Button>
                    </td>
                  </tr>
                );
              },
            )
          ) : (
            <p>Product Not Found</p>
          )}
        </tbody>
      </Table>

      <div ref={(div) => (loder = div)}>
        <Loding />
      </div>
    </>
  );
}

export default ListProduct;
