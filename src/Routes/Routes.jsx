import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";
import ContactUs from "../Pages/ContactUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement: <Error></Error>,
      children: [
        {
          index:true,
          element: <Home></Home>,
          loader: () => fetch('/realState.json')
        },
        {
          path: '/estateDetails/:id',
          element: <EstateDetails></EstateDetails>,
          loader: () => fetch('/realState.json')
        },
        {
            path:'/userprofile',
            element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/contact',
          element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
        }
      ]
    },
  ]);