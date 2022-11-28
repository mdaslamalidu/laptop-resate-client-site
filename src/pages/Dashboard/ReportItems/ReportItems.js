import React, { useEffect, useState } from "react";
import ReportedItem from "./ReportedItem";

const ReportItems = () => {
  const [reportItems, setReportItems] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/report/${id}`, {
      method: "DELETE",
    }).catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("http://localhost:5000/report")
      .then((res) => res.json())
      .then((data) => {
        setReportItems(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Customer Report Items {reportItems.length}</h3>
      {reportItems.map((reportItem) => (
        <ReportedItem
          reportItem={reportItem}
          handleDelete={handleDelete}
        ></ReportedItem>
      ))}
    </div>
  );
};

export default ReportItems;
