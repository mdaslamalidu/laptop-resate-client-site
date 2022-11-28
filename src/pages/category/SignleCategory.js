import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const SignleCategory = ({
  singleCategory,
  handleModalData,
  handleReportItem,
}) => {
  const {
    category_name,
    location,
    time,
    img,
    selling_price,
    originial_price,
    used,
    message,
    _id,
    sellerName,
    verifiedStatus,
    paid,
  } = singleCategory;
  console.log(singleCategory);

  const setDate = time.split(" ");
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[340px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center gap-2">
            <h2>Seller Name: {sellerName}</h2>
            <p>
              {verifiedStatus === "verified" && (
                <CheckCircleIcon className="text-blue-600 h-6 w-6" />
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Brand: {category_name}</h2>
            <h2 className="card-title">{location}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="">Sell Price: {selling_price}</h2>
            <h2 className="">Original Price: {originial_price}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="card-title">Used: {used}</h2>
            <h2 className="card-title">
              Post: {setDate[1]} {setDate[2]}
            </h2>
          </div>
          <p>{message}</p>
          <div className="card-actions justify-end gap-3">
            <label
              onClick={() => handleReportItem(_id)}
              htmlFor="my-modal"
              className="btn btn-primary"
            >
              Report
            </label>
            <label
              onClick={() => handleModalData(_id)}
              htmlFor="my-modal"
              className="btn btn-primary"
              disabled={paid}
            >
              {paid ? "Already Booked" : "Book Now"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignleCategory;
