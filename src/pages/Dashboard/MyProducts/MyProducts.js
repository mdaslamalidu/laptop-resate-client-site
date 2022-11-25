import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products?email=${user?.email}`, {
      headers: {
        authorizations: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, [user?.email]);
  return (
    <div>
      <h3>This is My Products {products.length}</h3>
      {products.map((product) => (
        <MyProduct key={product._id} product={product}></MyProduct>
      ))}
    </div>
  );
};

export default MyProducts;
