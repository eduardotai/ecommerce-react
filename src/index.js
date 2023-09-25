import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App";
import { Shop } from './Components/Shop/Shop'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);