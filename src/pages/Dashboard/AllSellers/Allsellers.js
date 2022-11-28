import React, { useEffect, useState } from "react";
import { getAllUsers, makeVerify } from "../../../api/Users";
import Loading from "../../shared/Spinner/Loading";
import AllSeller from "./AllSeller";

const Allsellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    fetch(`https://laptop-resale-server-site.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getSellerData();
      })
      .catch((error) => console.log(error));
  };

  const makeUserVerify = (user) => {
    makeVerify(user).then((data) => {
      getSellerData();
    });
  };

  const getSellerData = () => {
    getAllUsers()
      .then((data) => {
        const filterdSeller = data.filter((seller) => seller.role === "seller");
        setSellers(filterdSeller);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getSellerData();
  }, []);

  return (
    <div>
      <h3>Sellers</h3>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {sellers.map((seller) => (
            <AllSeller
              key={seller._id}
              seller={seller}
              handleDelete={handleDelete}
              makeUserVerify={makeUserVerify}
            ></AllSeller>
          ))}
        </>
      )}
    </div>
  );
};

export default Allsellers;
