import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const URL = "https://as1-mwuu.onrender.com/api/v1/user/login";

  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(URL, data);
      alert("Successfully logged in");
      console.log(response.data);
      navigate("/view-employees", { state: { username: data.username } }); // Pass username
    } catch (error) {
      alert("Error during login: " + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-4">Log In</h3>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                isInvalid={!!errors.username}
                {...register("username", { required: "Username is required" })}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
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

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                isInvalid={!!errors.password}
                {...register("password", { required: "Password is required" })}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Log In
            </Button>
            <span className="ms-2">
              Don't have an account? <Link to={"/signup"}>SignUp</Link>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLogin;

