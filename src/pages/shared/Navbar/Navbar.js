import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
const Navbar = () => {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    return logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <Link to="/blog" className="font-semibold">
          Blog
        </Link>
        {user?.uid ? (
          <>
            <Link to="" onClick={handleLogout} className="font-semibold">
              Log Out
            </Link>
            <Link to="/dashboard" className="font-semibold">
              Dashboard
            </Link>
          </>
        ) : (
          <Link to="/login" className="">
            Log In
          </Link>
        )}
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar flex justify-between bg-transparent text-white py-5 bg-[#163A9B]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary text-black lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          Laptop Resale
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
