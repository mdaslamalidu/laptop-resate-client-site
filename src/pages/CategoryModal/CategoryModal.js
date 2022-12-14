import React from "react";
import ProductForm from "./ProductForm";

const CategoryModal = ({ setFilteredData, filteredData }) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      {/* The button to open modal */}

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <ProductForm
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          ></ProductForm>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
