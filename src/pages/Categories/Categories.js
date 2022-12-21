import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("https://laptop-resale-server-site.vercel.app/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="border-y-2">
      <h2 className="text-2xl text-left font-bold py-12 ml-5">
        Browser by Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        {categories.map((c) => (
          <div className="text-center shadow-lg rounded text-white">
            <Link to={`/category/${c.categoryId}`}>
              <img className="w-full p-12 rounded-lg" src={c.img} alt="" />
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
