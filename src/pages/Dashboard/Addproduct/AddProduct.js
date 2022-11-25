import React from "react";

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand = form.brand.value;
    const name = form.productName.value;
    const sellingPrice = form.sellingPrice.value;
    const bayingPrice = form.bayingPrice.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const imgaeURL = form.url.value;
    const message = form.message.value;
    const year = form.year.value;
    const condition = form.condition.value;
    let categoryName = "";

    if (brand === "01") {
      categoryName = "HP";
    } else if (brand === "02") {
      categoryName = "DELL";
    } else {
      categoryName = "ASUS";
    }

    const product = {
      productName: name,
      categoryId: brand,
      img: imgaeURL,
      category_name: categoryName,
      location,
      selling_price: sellingPrice,
      originial_price: bayingPrice,
      used: year,
      time: new Date(),
      condition,
      message,
      phone,
    };
    console.log(product);
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
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
      <h3>This is My Products</h3>
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Product Brand</span>
              </label>{" "}
              <select name="brand" className="input input-bordered w-full">
                <option disabled selected>
                  Select Brand
                </option>
                <option value={"01"}>HP</option>
                <option value={"02"}>DELL</option>
                <option value={"03"}>ASUS</option>
              </select>
            </div>
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Product Condition</span>
              </label>{" "}
              <select name="condition" className="input input-bordered w-full">
                <option disabled selected>
                  Select Brand
                </option>
                <option value={"Good"}>Good</option>
                <option value={"Excellent"}>Excellent</option>
                <option value={"Fair"}>Fair</option>
              </select>
            </div>

            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Product Image URL</span>
              </label>{" "}
              <input
                className="input input-bordered w-full"
                name="url"
                type="text"
                placeholder="Image URL"
              />
            </div>

            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>{" "}
              <input
                className="input input-bordered w-full"
                name="productName"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Selling Price</span>
              </label>{" "}
              <input
                className="input input-bordered w-full"
                name="sellingPrice"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Baying Price</span>
              </label>{" "}
              <input
                className="input input-bordered w-full"
                name="bayingPrice"
                type="text"
                placeholder="name"
              />
            </div>

            <div className="form-control my-1">
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
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Parchase Year</span>
              </label>{" "}
              <input
                className="input input-bordered w-full"
                name="year"
                type="number"
                placeholder="year"
              />
            </div>
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Location</span>
              </label>{" "}
              <input
                className="input input-bordered"
                name="location"
                type="text"
                placeholder="Your Location"
              />
            </div>
            <div className="form-control my-1">
              <label className="label">
                <span className="label-text">Description</span>
              </label>{" "}
              <textarea
                name="message"
                className="textarea input-bordered"
                placeholder="description"
              ></textarea>
            </div>
          </div>

          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
