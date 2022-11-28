import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdvertiseItems = () => {
  const { user } = useContext(AuthContext);
  const [advertise, setAdvertise] = useState([]);
  useEffect(() => {
    fetch(
      `https://laptop-resale-server-site.vercel.app/advertise?email=${user?.email}`,
      {
        headers: {
          authorizations: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data);
      });
  }, [user?.email]);

  return (
    <div className="my-12">
      {advertise.length > 0 && (
        <>
          <h3 className="text-4xl font-bold text-center">Advertise Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
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
