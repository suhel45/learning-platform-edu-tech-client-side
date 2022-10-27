/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategoriesCourse = () => {
  const [categoris, setCategoris] = useState([]);
  useEffect(() => {
    fetch("https://assignment10-server-side-swart.vercel.app/categoris")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);
  return (
    <div className="container ms-5 mt-5">
      <h2>All Course categories</h2>
      <div>
        {categoris.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesCourse;
