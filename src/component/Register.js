/** @format */

import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/UserContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    form.reset();
    console.log(email, password);
  };
  return (
    <div className="shadow p-3 mb-5 bg-white rounded w-50 mt-5 text-dark">
      <h4 className="text-center">Please Register!</h4>
      <Form onSubmit={handleSubmit} className="container w-50 mt-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Enter Photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className="text-center">
        <span>
          <small>
            Already have an account? please <Link to="/login">Login</Link>{" "}
          </small>
        </span>
      </div>
    </div>
  );
};

export default Register;
