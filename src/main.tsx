import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Templates from "./pages/Templates.tsx";
import Sign from "./pages/Sign.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Billing from "./pages/Billing.tsx";
import Payment from "./pages/Payment.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Billing />,
  },
  {
    path: "/templates",
    element: <Templates />,
  },
  {
    path: "/signup",
    element: <Sign />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/services",
    element: <Dashboard />,
  },
  {
    path: "/billing",
    element: <Billing />,
  },
  {
    path: "/billing/payments",
    element: <Payment />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
