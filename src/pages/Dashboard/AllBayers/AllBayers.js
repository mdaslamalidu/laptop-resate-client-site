import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/Users";
import Loading from "../../shared/Spinner/Loading";
import AllBayer from "./AllBayer";

const AllBayers = () => {
  const [bayers, setBayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    fetch(`https://laptop-resale-server-site.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getBayerData();
      })
      .catch((error) => console.log(error));
  };

  const getBayerData = () => {
    getAllUsers()
      .then((data) => {
        const filterdBayer = data.filter((bayer) => bayer.role === "bayer");
        setBayers(filterdBayer);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBayerData();
  }, []);

  return (
    <div>
      <h3>All Bayers</h3>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {bayers.map((bayer) => (
            <AllBayer
              key={bayer._id}
              bayer={bayer}
              handleDelete={handleDelete}
            ></AllBayer>
          ))}
        </>
      )}
    </div>
  );
};

export default AllBayers;
