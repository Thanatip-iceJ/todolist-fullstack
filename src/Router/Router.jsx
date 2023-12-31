import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Authenticated from "../components/Authenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-gray-200 h-screen">
        <Header />
        <div className="p-8 max-w-xl mx-auto">
          <Outlet />
        </div>
      </div>
    ),

    children: [
      {
        path: "",
        element: (
          <Authenticated>
            <HomePage />
          </Authenticated>
        ),
      },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
