/** @format */

import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import AllCategoriesCourse from "../component/AllCategoriesCourse";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Row>
        <Col lg='2' md='5'>
          <AllCategoriesCourse></AllCategoriesCourse>
        </Col>
        <Col lg='10' md='7'>
        <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
