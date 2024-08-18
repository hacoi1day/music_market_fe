import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import BannerPage from "./pages/banner/BannerPage.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import SongPage from "./pages/song/SongPage.tsx";
import UserPage from "./pages/user/UserPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    // element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/song",
    element: <SongPage />,
  },
  {
    path: "/banner",
    element: <BannerPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
