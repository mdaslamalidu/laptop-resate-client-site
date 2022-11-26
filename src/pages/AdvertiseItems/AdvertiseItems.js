import React, { useEffect, useState } from "react";

const AdvertiseItems = () => {
  const [advertise, setAdvertise] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data);
      });
  }, []);

  return (
    <div>
      <h2>Advertise Item {advertise.length}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {advertise.map((add) => (
          <div className="text-center">
            <img src={add.img} alt="" />
            <h2>{add.category_name} Laptop</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseItems;
