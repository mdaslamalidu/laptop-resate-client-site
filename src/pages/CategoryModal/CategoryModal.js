import React from "react";

const CategoryModal = ({ user, setModal, category, modal }) => {
  const handleSubmit = () => {
    setModal(!modal);
  };

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
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
            <label onClick={handleSubmit} className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
