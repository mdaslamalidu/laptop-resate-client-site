import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-5 ">Categories</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
        {categories.map((c) => (
          <div className="text-center shadow-lg rounded">
            <Link to={`/category/${c.categoryId}`}>
              <img className="w-full" src={c.img} alt="" />
              <h2 className="pb-4 font-bold text-xl uppercase">
                {c.category_name} Laptop
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
