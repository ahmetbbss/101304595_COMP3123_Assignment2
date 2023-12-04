import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const navigate = useNavigate();
  const URL = "https://as1-mwuu.onrender.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/api/v1/emp/employees`, employee)
      .then(() => {
        navigate("/view-employees");
      })
      .catch((error) => {
        console.error("Error adding employee: ", error);
      });
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Add New Employee</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="first_name"
                    value={employee.first_name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="last_name"
                    value={employee.last_name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Link to={`/view-employees`} className="btn btn-danger me-2">
                  Cancel
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEmployee;
