import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import EmailRegister from "../Pages/EmailRegister";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import EmailLogin from "../Pages/EmailLogin";
import ServiceDetails from "../Pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/service/:id",
    element: (
      <PrivateRoute>
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/register",
        element: <EmailRegister></EmailRegister>,
      },
      {
        path: "/auth/login",
        element: <EmailLogin></EmailLogin>,
      },
      {
        path: "/auth/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
