import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ViewAnEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const URL = "https://as1-mwuu.onrender.com";

  useEffect(() => {
    axios
      .get(`${URL}/api/v1/emp/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data: ", error);
      });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>Employee Details</Card.Header>

            <Card.Body>
              <Card.Title>
                {employee.first_name} {employee.last_name}
              </Card.Title>

              <Card.Text>
                <strong>Email:</strong> {employee.email}
                <br />
                <strong>ID:</strong> {employee._id}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Link to={`/view-employees`} className="btn btn-primary me-2">
        Back
      </Link>
    </Container>
  );
}

export default ViewAnEmployee;
