import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import EmailRegister from "../Pages/EmailRegister";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
