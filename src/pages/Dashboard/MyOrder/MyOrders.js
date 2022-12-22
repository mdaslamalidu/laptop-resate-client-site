import React from "react";
import { Link } from "react-router-dom";

const MyOrders = ({ order }) => {
  console.log(order);
  const { img, categoryName, categoryPrice, paid, _id } = order;
  return (
    <div>
      <div className="flex flex-col md:flex-row sm:gap-5 justify-between items-center text-black">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
        <p className="text-black">Price: ${categoryPrice}</p>
        <p className="text-black">Product: {categoryName}</p>
        {categoryPrice && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn-sm btn-primary mt-2 rounded">pay</button>
          </Link>
        )}
        {categoryPrice && paid && (
          <button className="btn-sm btn-primary mt-2 rounded">Paid</button>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
