/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CheckoutDetails = ({ singleCourse }) => {
  const { image_url, title, details, price } = singleCourse;
  return (
    <div>
      <Card className="w-75 h-100 shadow-md p-3 mb-5 bg-white rounded border-0">
        <Card.Img variant="top" src={image_url}  />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <h2>Price:{price}</h2>
      </Card>
    </div>
  );
};

export default CheckoutDetails;
