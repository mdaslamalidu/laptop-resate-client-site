import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
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
