/** @format */

import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/UserContext";

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Navbar expand={'sm'} bg="primary" variant="white" sticky="top">
        
          <Navbar.Brand>
          <img
              src="/logo.svg"
              width="30"
              height="30"
              className="text-white img-fluid"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
          <Nav className="ms-auto me-3 expland">
            <Nav.Link className="text-white" as={Link} to="/course">Courses</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/toggle">Dark/Light</Nav.Link>
            <Nav.Link className="text-white" as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/register">Register</Nav.Link>
            {user?.email && <p className="text-white mt-2">{user.email}</p>}
          </Nav>
        
      </Navbar>
    </>
  );
};

export default Header;
