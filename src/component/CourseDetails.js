/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  console.log(course);
  const {category_id,image_url,title,details} = course
  return (
    <div className="col-md-6 mt-5">
      <Card className="w-75 h-100 shadow-md p-3 mb-5 bg-white rounded border-0">
        <Card.Img  variant="top" src={image_url} style={{height:"250px"}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <div className="text-center">
          <Link to={`/category/checkout/${category_id}`}>
          <Button variant="primary">Get premium access</Button>
          </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
