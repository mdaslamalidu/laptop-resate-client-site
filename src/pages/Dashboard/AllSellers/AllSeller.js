import React from "react";

const AllSeller = ({ seller, handleDelete, makeUserVerify }) => {
  const { name, email, _id, status } = seller;
  return (
    <div>
      <div className="flex justify-between items-center bg-slate-300 my-2 p-3 rounded">
        <h2>{name}</h2>
        <p>{email}</p>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
        {status && status === "verified" ? (
          <button className="btn btn-sm btn-primary">Varifird</button>
        ) : (
          <button
            onClick={() => makeUserVerify(seller)}
            className="btn btn-sm btn-primary"
          >
            Admin verify
          </button>
        )}
      </div>
    </div>
  );
};

export default AllSeller;
