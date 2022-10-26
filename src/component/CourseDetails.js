/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  console.log(course);
  const {image_url,title,details,price} = course
  return (
    <div className="container w-75 mt-5">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <h6>Price:{price}</h6>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
