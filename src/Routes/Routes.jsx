import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/home',
            element: <Home></Home>
        },
        {
            path:'/userprofile',
            element: <UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);