import React, { useEffect, useState } from "react";
import { getAllUsers, makeVerify } from "../../../api/Users";
import AllSeller from "./AllSeller";

const Allsellers = () => {
  const [sellers, setSellers] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getSellerData();
      })
      .catch((error) => console.log(error));
  };

  const makeUserVerify = (user) => {
    makeVerify(user).then((data) => {
      console.log(data);
      getSellerData();
    });
  };

  const getSellerData = () => {
    getAllUsers().then((data) => {
      console.log(data);
      const filterdSeller = data.filter((seller) => seller.role === "seller");
      setSellers(filterdSeller);
    });
  };

  useEffect(() => {
    getSellerData();
  }, []);

  return (
    <div>
      <h3>Sellers</h3>
      {sellers.map((seller) => (
        <AllSeller
          seller={seller}
          handleDelete={handleDelete}
          makeUserVerify={makeUserVerify}
        ></AllSeller>
      ))}
    </div>
  );
};

export default Allsellers;
