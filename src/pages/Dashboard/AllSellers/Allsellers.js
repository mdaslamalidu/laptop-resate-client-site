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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{seller.name}</div>
                    </div>
                  </div>
                </td>
                <td>{seller.email}</td>
                <th>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    delete
                  </button>
                </th>
                <th>
                  {seller.status && seller.status === "verified" ? (
                    <button className="btn btn-sm btn-primary">Varifird</button>
                  ) : (
                    <button
                      onClick={() => makeUserVerify(seller)}
                      className="btn btn-sm btn-primary"
                    >
                      Admin verify
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
//   return (
//     <div>
//       <h3>Sellers</h3>
//       {loading ? (
//         <Loading></Loading>
//       ) : (
//         <>
//           {sellers.map((seller) => (
//             <AllSeller
//               key={seller._id}
//               seller={seller}
//               handleDelete={handleDelete}
//               makeUserVerify={makeUserVerify}
//             ></AllSeller>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

export default Allsellers;
