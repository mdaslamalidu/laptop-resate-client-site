import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState("");
  const location = useLocation();
  const { id } = useParams();
  console.log(id, category);
  console.log(location.state);

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div>
      <h3>category</h3>
      <img src={category.img} alt="" />
      <h3>{category.category_name}</h3>
    </div>
  );
};

export default Category;
