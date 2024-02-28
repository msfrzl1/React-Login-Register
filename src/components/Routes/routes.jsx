import FormLogin from "../pages/FormLogin";
import FormRegister from "../pages/FormRegister";
import HomePage from "../pages/Home";
import UserPage from "../pages/User";
import ProtectedRoute from "./ProtectedRoute";

export const routelist = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <FormLogin />,
  },
  {
    path: "/register",
    element: <FormRegister />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
  },
];
