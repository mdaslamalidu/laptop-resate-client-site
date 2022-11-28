import React, { useContext, useEffect, useState } from "react";
import { getuserByEmail } from "../../../api/Users";
import { AuthContext } from "../../../context/AuthProvider";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState("");

  useEffect(() => {
    console.log(user?.email);
    getuserByEmail(user?.email)
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
      <div className="flex justify-center items-center">
        <p className="text-6xl font-bold">Welco</p>
        <p className="text-6xl font-bold mr-2">me</p>
        <p className="text-6xl font-bold">To</p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        <p className="text-3xl font-medium">{users?.role} Dashboard</p>
      </div>
    </div>
  );
};

export default Welcome;
