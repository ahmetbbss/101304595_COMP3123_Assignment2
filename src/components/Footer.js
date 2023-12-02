import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <div className="text-center">
              <hr />
              <strong> COMP3123 :</strong> <b>Assignment2 </b>
              <p>
                <strong>Author :</strong> Ahmet Buyukbas - 101304595
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
