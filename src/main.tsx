import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Overview from "./pages/Overview/Overview.tsx";
import Products from "./pages/Products/Products.tsx";
import Users from "./pages/Users/Users.tsx";
import Revenue from "./pages/Revenue/Revenue.tsx";
import Orders from "./pages/Orders/Orders.tsx";
import Analytics from "./pages/Analytics/Analytics.tsx";
import Settings from "./pages/Settings/Settings.tsx";

// create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "revenue",
        element: <Revenue />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
