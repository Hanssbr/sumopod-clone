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
import { AuthProvider } from "./context/AuthContext.tsx";
import SingUpCard from "./components/SignUpCard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingUpCard />,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
