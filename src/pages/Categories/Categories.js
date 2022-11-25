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
      <h2 className="text-2xl text-center font-bold">Categories</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {categories.map((c) => (
          <div className="text-center">
            <Link to={`/category/${c.categoryId}`}>
              <img src={c.img} alt="" />
              <h2>{c.category_name} Laptop</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
