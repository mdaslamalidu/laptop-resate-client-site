import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getuserByEmail } from "../api/Users";
import { AuthContext } from "../context/AuthProvider";
import Navbar from "../pages/shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState("");
  useEffect(() => {
    getuserByEmail(user?.email)
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-slate-200">
            {users?.role && (
              <>
                {users?.role === "bayer" && (
                  <li>
                    <Link to="/dashboard/myOrder">My Orders</Link>
                  </li>
                )}

                {users?.role === "admin" && (
                  <>
                    <li>
                      <Link to="/dashboard/allBayers">All Bayers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allSellers">All Sellers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/reported">All Reported Items</Link>
                    </li>
                  </>
                )}

                {users?.role === "seller" && (
                  <>
                    <li>
                      <Link to="/dashboard/addProduct">Add A Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myproducts">My Products</Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
