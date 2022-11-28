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
    <div className="my-12">
      {advertise.length > 0 && (
        <>
          <h3 className="text-4xl font-bold text-center">Advertise Item</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
            {advertise.map((add) => (
              <div className="text-center shadow-lg rounded">
                <img className="w-full h-[400px]" src={add.img} alt="" />
                <div className="pb-5">
                  <h2 className="text-lg font-bold">
                    {add.category_name} Laptop
                  </h2>
                  <h3 className="font-bold">Price: {add.selling_price}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default AdvertiseItems;
