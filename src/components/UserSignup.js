import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  
  const navigate = useNavigate();
  const { singup, handleSingup } = useForm();
  const proxy = "https://one01304595-comp3123-assignment1.onrender.com";

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    user: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const addUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    if (
      addUser.username.length <= 0 ||
      addUser.email.length <= 0 ||
      addUser.password.length <= 0
    ) {
      switch (addUser) {
        case addUser.username.length <= 0:
          alert("Username cannot be empty");
        case addUser.email.length <= 0:
          alert("Email cannot be empty");
        case addUser.password.length <= 0:
          alert("Password cannot be empty");
      }
    } else if (!addUser.email.includes("@")) {
      alert("Email format is not correct");
    } else {
      axios
        .post(proxy, addUser)
        .then((res) => {
          alert("Succesfully signed up");
          navigate("/login");
        })
        .catch((error) => {
          alert("Error");
        });
    }
  };

  return (
    <div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }} className="row">
        <div
          className="card col-md-6 offset-md-3 offset-md-3"
          style={{ backgroundColor: "#ebe6e1" }}
        >
          <h3 className="text-center">SignUp</h3>
          <div className="card-body">
            <form onSubmit={(e) => handleSingup(onSubmit(e))}>
              <div className="form-group d-block">
                <label>Username: </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter a username"
                  {...singup("username", { required: true })}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter a password"
                  {...singup("password", { required: true })}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Email Id: </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter an email address"
                  {...singup("email", { required: true })}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <Button
                variant="success"
                onSubmit={handleSingup(onSubmit)}
                type="submit"
              >
                Submit
              </Button>
              &nbsp;&nbsp;&nbsp;Already have an account:
              <Link to={"/login"}>
                <Button style={{ marginRight: 35 }} className="btn btn-primary">
                  LogIn
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
