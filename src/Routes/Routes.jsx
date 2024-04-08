import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement: <Error></Error>,
      children: [
        {
          index:true,
          element: <Home></Home>
        },
        {
          path:'/home',
          element: <Home></Home>
        },
        {
            path:'/userprofile',
            element: <UpdateProfile></UpdateProfile>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);