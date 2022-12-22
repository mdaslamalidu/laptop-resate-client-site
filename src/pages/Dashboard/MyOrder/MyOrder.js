import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";
import MyOrders from "./MyOrders";
import Loading from "../../shared/Spinner/Loading";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const url = `https://laptop-resale-server-site.vercel.app/orders?email=${user?.email}`;

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorizations: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div>
      {orders.length === 0 ? (
        <h2 className="text-4xl font-bold text-center text-black">
          Your have no order
        </h2>
      ) : (
        <div className="overflow-x-auto w-full text-black">
          <h2 className="text-4xl font-bold text-center text-black my-5">
            My order
          </h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Price</th>
                <th>Product Name</th>
                <th>Pay Button</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 &&
                orders.map((order) => (
                  <tr>
                    <th>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={order.img} alt="product" />
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>{order.categoryPrice}</td>
                    <td>{order.categoryName}</td>
                    <td>
                      {order.categoryPrice && !order.paid && (
                        <Link to={`/dashboard/payment/${order._id}`}>
                          <button className="btn-sm btn-primary mt-2 rounded">
                            pay
                          </button>
                        </Link>
                      )}
                      {order.categoryPrice && order.paid && (
                        <button className="btn-sm btn-primary mt-2 rounded">
                          Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        // <h1 className="text-4xl font-bold text-center text-black">
        //   My Order
        // </h1>
        // {orders.length > 0 &&
        //   orders.map((order) => (
        //     <MyOrders kay={order._id} order={order}></MyOrders>
        //   ))}
      )}
    </div>
  );
};

export default MyOrder;
