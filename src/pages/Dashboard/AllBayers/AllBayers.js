import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/Users";
import AllBayer from "./AllBayer";

const AllBayers = () => {
  const [bayers, setBayers] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getBayerData();
      })
      .catch((error) => console.log(error));
  };

  const getBayerData = () => {
    getAllUsers().then((data) => {
      console.log(data);
      const filterdBayer = data.filter((bayer) => bayer.role === "bayer");
      setBayers(filterdBayer);
    });
  };

  useEffect(() => {
    getBayerData();
  }, []);

  return (
    <div>
      <h3>All Bayers</h3>
      {bayers.map((bayer) => (
        <AllBayer bayer={bayer} handleDelete={handleDelete}></AllBayer>
      ))}
    </div>
  );
};

export default AllBayers;
