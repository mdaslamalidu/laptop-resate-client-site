import React from "react";

const ReportedItem = ({ reportItem, handleDelete }) => {
  const { reportId, img, name, email, selling_price } = reportItem;
  return (
    <div>
      <div className="flex justify-between items-center bg-slate-300 my-2 p-3 rounded">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{selling_price}</p>
        <button
          onClick={() => handleDelete(reportId)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReportedItem;
