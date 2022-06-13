import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateProductForm from "../components/UpdateProductForm";
import AppNavigation from "../partials/AppNavigation";

function UpdatePage() {
  const { id } = useParams();

  return (
    <>
      <AppNavigation />
      <Container className="mt-5">
        <Row>
          <Col>
            <h2>UpdatePage Product</h2>
            <UpdateProductForm id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UpdatePage;
