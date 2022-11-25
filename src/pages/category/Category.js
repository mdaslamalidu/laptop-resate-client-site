import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import CategoryModal from "../CategoryModal/CategoryModal";

const Category = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div>
      {category.map((c) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={c.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>Name: {user.displayName}</h2>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">Brand: {c.category_name}</h2>
              <h2 className="card-title">{c.location}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="">Sell Price: {c.selling_price}</h2>
              <h2 className="">Original Price: {c.originial_price}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="card-title">Used: {c.used}</h2>
              <h2 className="card-title">Post: {c.time}</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal" className="btn btn-primary">
                Book Now
              </label>
            </div>
          </div>
        </div>
      ))}

      {modal && (
        <CategoryModal
          setModal={setModal}
          modal={modal}
          category={category}
          user={user}
        ></CategoryModal>
      )}
    </div>
  );
};

export default Category;
