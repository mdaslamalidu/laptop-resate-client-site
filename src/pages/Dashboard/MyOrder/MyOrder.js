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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3>My Order</h3>
      {orders.length > 0 &&
        orders.map((order) => (
          <MyOrders kay={order._id} order={order}></MyOrders>
        ))}
    </div>
  );
};

export default MyOrder;
