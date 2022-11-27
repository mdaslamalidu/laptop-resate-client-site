import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/Users";

const AllBayers = () => {
  const [bayers, setBayers] = useState([]);

  console.log(bayers);

  useEffect(() => {
    getAllUsers().then((data) => {
      console.log(data);
      const filterdBayer = data.filter((bayer) => bayer.role === "bayer");
      setBayers(filterdBayer);
    });
  }, []);

  return (
    <div>
      <h3>All Bayers</h3>
    </div>
  );
};

export default AllBayers;
