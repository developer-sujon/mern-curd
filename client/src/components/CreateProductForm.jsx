//external Lib  imports
import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { errorMessage, successMessage } from "../helper/toastMessage/CurdToast";
import { isEmpty } from "../helper/validation/FormValidation";
import { createProduct } from "../Services/CurdApi";
import { useNavigate } from "react-router-dom";

//internal Lib  imports
import Loding from "../partials/Loding";

function CreateProductForm() {
  const navigate = useNavigate();

  let productName,
    productKey,
    productQuantity,
    unitPrice,
    totalPrice,
    loder,
    myFormRef = useRef();

  const createProductHander = async (e) => {
    e.preventDefault(productKey);

    if (isEmpty(productName.value)) {
      errorMessage("Product Name is Required");
    } else if (isEmpty(productKey.value)) {
      errorMessage("Product Key is Required");
    } else if (isEmpty(productQuantity.value)) {
      errorMessage("Product Quantity is Required");
    } else if (isEmpty(unitPrice.value)) {
      errorMessage("Unit Price is Required");
    } else if (isEmpty(totalPrice.value)) {
      errorMessage("Total Price is Required");
    } else {
      loder.classList.remove("d-none");

      try {
        await createProduct(
          productName.value,
          productKey.value,
          productQuantity.value,
          unitPrice.value,
          totalPrice.value,
        );

        loder.classList.add("d-none");

        successMessage("Product created successfully");
        navigate("/");
        myFormRef.reset();
      } catch (error) {
        console.log(error);
        errorMessage("Product created failed");
      }
    }
  };

  return (
    <>
      <Form ref={(el) => (myFormRef = el)} onSubmit={createProductHander}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                ref={(input) => (productName = input)}
                type="text"
                placeholder="Product Name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="productKey">
              <Form.Label>Product Key</Form.Label>
              <Form.Control
                ref={(input) => (productKey = input)}
                type="number"
                min="1"
                placeholder="Product Key"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="productQuantity">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                ref={(input) => (productQuantity = input)}
                type="number"
                placeholder="Product Quantity"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="unitPrice">
              <Form.Label>Unit Price</Form.Label>
              <Form.Control
                ref={(input) => (unitPrice = input)}
                type="number"
                placeholder="Unit Price"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="totalPrice">
              <Form.Label>Total Price</Form.Label>
              <Form.Control
                ref={(input) => (totalPrice = input)}
                type="number"
                placeholder="Total Price"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Create Product
        </Button>
      </Form>
      <div className="d-none" ref={(div) => (loder = div)}>
        <Loding />
      </div>
    </>
  );
}

export default CreateProductForm;
