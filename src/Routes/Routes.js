import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/category/Category";
import AddProduct from "../pages/Dashboard/Addproduct/AddProduct";
import AllBayers from "../pages/Dashboard/AllBayers/AllBayers";
import Allsellers from "../pages/Dashboard/AllSellers/Allsellers";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Payment from "../pages/Dashboard/Payment/Payment";
import ReportItems from "../pages/Dashboard/ReportItems/ReportItems";
import Welcome from "../pages/Dashboard/Welcome/Welcome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
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
        path: "/blog",
        element: <Blog></Blog>,
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
    element: (
      <AdminRoute>
        <DashboardLayout></DashboardLayout>
      </AdminRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Welcome></Welcome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <Allsellers></Allsellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBayers",
        element: (
          <AdminRoute>
            <AllBayers></AllBayers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myOrder",
        element: (
          <AdminRoute>
            <MyOrder></MyOrder>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <AdminRoute>
            <MyProducts></MyProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported",
        element: (
          <AdminRoute>
            <ReportItems></ReportItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
