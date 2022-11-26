import React from "react";

const SignleCategory = ({ singleCategory, user, handleModalData }) => {
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
  } = singleCategory;

  const setDate = time.split(" ");
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[340px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2>Name: {user.displayName}</h2>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Brand: {category_name}</h2>
            <h2 className="card-title">{location}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="">Sell Price: {selling_price}</h2>
            <h2 className="">Original Price: {originial_price}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="card-title">
              Used: {new Date().getFullYear() - parseFloat(used)} year
            </h2>
            <h2 className="card-title">
              Post: {setDate[1]} {setDate[2]}
            </h2>
          </div>
          <p>{message}</p>
          <div className="card-actions justify-end">
            <label
              onClick={() => handleModalData(_id)}
              htmlFor="my-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignleCategory;
