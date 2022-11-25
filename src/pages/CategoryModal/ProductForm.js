import React from "react";

const ProductForm = ({ modal, setModal, c, user }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;
    const bookings = {
      name: user?.displayName,
      email: user?.email,
      categoryName: c.category_name,
      categoryPrice: c.selling_price,
      phone,
      location,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
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
              value={c.category_name}
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
              value={c.selling_price}
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
