/** @format */

import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Row>
        <Col lg='2' md='5'>
          <h4>leftside</h4>
        </Col>
        <Col lg='5' md='7'>
        <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
