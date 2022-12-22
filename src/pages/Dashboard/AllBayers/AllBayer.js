import React from "react";

const AllBayer = ({ bayer, handleDelete }) => {
  const { name, email, _id } = bayer;
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>
      {/* <div className="flex flex-col md:flex-row sm:gap-5 justify-between items-center bg-slate-300 my-2 p-3 rounded">
        <h2>{name}</h2>
        <p>{email}</p>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default AllBayer;
