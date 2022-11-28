import React from "react";
import toast from "react-hot-toast";

const MyProduct = ({ product }) => {
  console.log(product);
  const {
    img,
    status,
    selling_price,
    category_name,
    categoryId,
    originial_price,
    message,
    time,
    _id,
  } = product;

  const handleAdvertiseItem = () => {
    const advertiseProduct = {
      img,
      selling_price,
      categoryId,
      category_name,
      originial_price,
      message,
      time,
      advertiseId: _id,
    };
    console.log(advertiseProduct);
    advertiseItem(advertiseProduct);
  };

  const advertiseItem = (advertiseProduct) => {
    fetch("https://laptop-resale-server-site.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertiseProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully add item");
      });
  };

  return (
    <div className="bg-slate-200 rounded my-5 p-4">
      <div className="flex flex-col md:flex-row sm:gap-5 justify-between items-center">
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
              <button
                onClick={handleAdvertiseItem}
                className="btn-sm btn-primary mt-2 rounded"
              >
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
