import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import ReisterPage from "../pages/Register";
import UserPage from "../pages/User";
import UserDetail from "../pages/UserDetail";
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
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <ReisterPage />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user/:id",
    element: (
      <ProtectedRoute>
        <UserDetail />
      </ProtectedRoute>
    ),
  },
];
