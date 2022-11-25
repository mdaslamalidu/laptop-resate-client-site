import React from "react";

const MyProduct = ({ product }) => {
  console.log(product);
  const { img, status, selling_price } = product;
  return (
    <div className="bg-slate-200 rounded my-5 p-4">
      <div className="flex justify-between items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
        <p>Price: ${selling_price}</p>
        <div>
          {status === "sold" ? (
            <p>Sold</p>
          ) : (
            <>
              <p>Available</p>
              <button className="btn-sm btn-primary mt-4 rounded">
                Advertise
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
