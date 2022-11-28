import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useUserRole from "../hooks/useUserRole";
import Loading from "../pages/shared/Spinner/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isLoading] = useUserRole(user?.email);
  const location = useLocation();

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  if (user && isRole) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
