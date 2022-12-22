import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../shared/Spinner/Loading";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://laptop-resale-server-site.vercel.app/products?email=${user?.email}`,
      {
        headers: {
          authorizations: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(error.message);
      });
  }, [user?.email]);
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : products.length === 0 ? (
        <h1 className="text-black text-center text-4xl font-bold">
          You have no Product
        </h1>
      ) : (
        <>
          <h3 className="text-xl font-bold text-center text-black">
            This is My Products
          </h3>
          {products.map((product) => (
            <MyProduct key={product._id} product={product}></MyProduct>
          ))}
        </>
      )}
    </div>
  );
};

export default MyProducts;
