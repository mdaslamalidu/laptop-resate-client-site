import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/category/Category";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";

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
        path: "/category/:id",
        element: <Category></Category>,
      },
    ],
  },
]);
