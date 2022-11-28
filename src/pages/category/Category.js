import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import CategoryModal from "../CategoryModal/CategoryModal";
import SignleCategory from "./SignleCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const { id } = useParams();

  const handleModalData = (id) => {
    const findData = category.find((c) => c._id === id);
    setFilteredData(findData);
  };

  const handleReportItem = (id) => {
    const reportedItem = category.find((c) => c._id === id);

    const item = {
      reportId: reportedItem._id,
      img: reportedItem.img,
      selling_price: reportedItem.selling_price,
      originial_price: reportedItem.originial_price,
      email: reportedItem.email,
      name: reportedItem.sellerName,
    };

    fetch("http://localhost:5000/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("item report successfully");
          console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, [id]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {category.map((singleCategory) => (
          <SignleCategory
            singleCategory={singleCategory}
            handleModalData={handleModalData}
            handleReportItem={handleReportItem}
          ></SignleCategory>
        ))}
      </div>

      {filteredData && (
        <CategoryModal
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        ></CategoryModal>
      )}
    </div>
  );
};

export default Category;
