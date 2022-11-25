import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Category from "../pages/category/Category";
import AddProduct from "../pages/Dashboard/Addproduct/AddProduct";
import AllBayers from "../pages/Dashboard/AllBayers/AllBayers";
import Allsellers from "../pages/Dashboard/AllSellers/Allsellers";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Welcome from "../pages/Dashboard/Welcome/Welcome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Welcome></Welcome>,
      },
      {
        path: "/dashboard/allSellers",
        element: <Allsellers></Allsellers>,
      },
      {
        path: "/dashboard/allBayers",
        element: <AllBayers></AllBayers>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
