/** @format */

import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/UserContext";
import logo from "../component/assets/download.png";
import { Button, Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <>
      <Navbar expand={"sm"} bg="primary" variant="white" sticky="top">
        <Navbar.Brand>
          <div className="d-flex ms-5">
            <img src={logo} width="40" height="40" />
            <h4 className="text-white ms-2">Basic Learning IT Platform</h4>
          </div>
        </Navbar.Brand>
        <Nav className="ms-auto me-3 expland">
          <Nav.Link className="text-white" as={Link} to="/course">
            Courses
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/faq">
            FAQ
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/toggle">
            Dark/Light
          </Nav.Link>
        </Nav>
        <Nav>
          <>
            {user?.uid ? (
              <div className="me-5 mt-2">
                <span className="text-white mt-2">{user?.displayName}</span>
                <Button variant="dark" className="text-white ms-2">
                  Log out
                </Button>
              </div>
            ) : (
              <>
                <Nav.Link className="text-white" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="text-white" as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </>
          <Nav.Link as={Link} className="me-5 " to="/profile">
            {user?.photoURL ? (
              <Image
                style={{ height:"40px" }}
                roundedCircle
                src={user?.photoURL}></Image>
            ) 
            : 
            (
              <FaUser></FaUser>
            )}
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
