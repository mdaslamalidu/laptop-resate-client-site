import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";
import MyOrders from "./MyOrders";
import Loading from "../../shared/Spinner/Loading";

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
        <>
          <h1 className="text-4xl font-bold text-center text-black">
            My Order
          </h1>
          {orders.length > 0 &&
            orders.map((order) => (
              <MyOrders kay={order._id} order={order}></MyOrders>
            ))}
        </>
      )}
    </div>
  );
};

export default MyOrder;
