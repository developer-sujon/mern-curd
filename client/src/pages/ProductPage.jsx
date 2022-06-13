import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListProduct from "../components/ListProduct";
import AppNavigation from "../partials/AppNavigation";

function ProductPage() {
  return (
    <>
      <AppNavigation />
      <Container className="mt-5">
        <Row>
          <Col>
            <h2>Product List</h2>
            <ListProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
