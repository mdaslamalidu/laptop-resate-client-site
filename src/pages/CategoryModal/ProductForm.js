import React from "react";

const ProductForm = ({ modal, setModal }) => {
  const submitBooking = () => {
    setModal(!modal);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
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
            />
          </div>
        </div>
        <div className="form-control w-1/2 my-2">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>{" "}
          <input
            className="input input-bordered w-full"
            name="productName"
            type="text"
            placeholder="name"
            value
          />
        </div>
        <div className="form-control">
          <div class="flex">
            <div class="form-check form-check-inline mr-4">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="radio"
                id="inlineRadio1"
                value="bayer"
              />
              <label class="form-check-label inline-block" for="inlineRadio10">
                Bayer
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="radio"
                id="inlineRadio2"
                value="seller"
              />
              <label class="form-check-label inline-block" for="inlineRadio20">
                Saller
              </label>
            </div>
          </div>
        </div>

        <label
          onClick={submitBooking}
          className="btn absolute right-24 bottom-[-73px]"
        >
          Submit
        </label>
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
