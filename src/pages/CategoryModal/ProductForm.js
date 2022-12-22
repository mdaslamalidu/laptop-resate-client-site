import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const ProductForm = ({ filteredData, setFilteredData }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;
    const bookings = {
      name: user?.displayName,
      email: user?.email,
      categoryName: filteredData.category_name,
      categoryPrice: filteredData.selling_price,
      phone,
      location,
      category_id: filteredData._id,
      img: filteredData.img,
    };

    fetch("https://laptop-resale-server-site.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorizations: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setFilteredData(null);
          toast.success("Item is Booked");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative text-black">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="form-control lg:w-1/2 my-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="name"
              type="text"
              placeholder="Name"
              value={user?.displayName}
              disabled
            />
          </div>
          <div className="form-control lg:w-1/2 my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="email"
              type="email"
              placeholder="Email"
              value={user?.email}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="form-control w-1/2 my-2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="productName"
              type="text"
              placeholder="name"
              value={filteredData.category_name}
              disabled
            />
          </div>
          <div className="form-control w-1/2 my-2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="productName"
              type="text"
              placeholder="name"
              value={filteredData.selling_price}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="form-control w-1/2 my-2">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="phone"
              type="number"
              placeholder="your number"
            />
          </div>
          <div className="form-control w-1/2 my-2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="location"
              type="text"
              placeholder="Your Location"
            />
          </div>
        </div>

        <input
          className="btn absolute right-24 bottom-[-73px]"
          type="submit"
          value="Submit"
        />
      </form>
      <div className="modal-action">
        <label htmlFor="my-modal" className="btn">
          Close
        </label>
      </div>
    </div>
  );
};

export default ProductForm;
