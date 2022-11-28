import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyOrders from "./MyOrders";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>My Order {orders.length}</h3>
      {orders.length > 0 &&
        orders.map((order) => <MyOrders order={order}></MyOrders>)}
    </div>
  );
};

export default MyOrder;
