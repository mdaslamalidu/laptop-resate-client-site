import React from "react";
import ProductForm from "./ProductForm";

const CategoryModal = ({ user, setModal, category, modal }) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <ProductForm modal={modal} setModal={setModal}></ProductForm>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
