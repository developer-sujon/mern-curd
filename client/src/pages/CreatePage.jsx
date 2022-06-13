import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateProductForm from "../components/CreateProductForm";
import AppNavigation from "../partials/AppNavigation";

function CreatePage() {
  return (
    <>
      <AppNavigation />
      <Container className="mt-5">
        <Row>
          <Col>
            <h2>Create Product</h2>
            <CreateProductForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreatePage;
