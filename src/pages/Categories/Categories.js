import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((c) => (
        <Link to={`category/${c.categoryId}`}>
          <h3>{c.category_name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
