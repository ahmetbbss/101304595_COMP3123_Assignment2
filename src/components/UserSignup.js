import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function UserSignup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const proxy = "https://one01304595-comp3123-assignment1.onrender.com/api/v1/user/signup";
  const URL = "https://localhost:8001/api/v1/user/signup";

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(URL, data);
      alert("Successfully signed up");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      alert("Error during sign up: " + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-4">SignUp</h3>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter a username"
                isInvalid={!!errors.username}
                {...register("username", { required: "Username is required" })}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter a password"
                isInvalid={!!errors.password}
                {...register("password", { required: "Password is required" })}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter an email address"
                isInvalid={!!errors.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
            <span className="ms-2">
              Already have an account? <Link to={"/login"}>LogIn</Link>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserSignup;

