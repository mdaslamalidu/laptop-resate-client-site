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

  return loading ? (
    <Loading></Loading>
  ) : (
    <>
      <div className="overflow-x-auto w-full text-black">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {bayers.map((bayer) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{bayer.name}</div>
                    </div>
                  </div>
                </td>
                <td>{bayer.email}</td>
                <th>
                  <button
                    onClick={() => handleDelete(bayer._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBayers;
