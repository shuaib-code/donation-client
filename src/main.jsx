import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home/Home";
import Donate from "./components/Home/Donate/Donate";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/donation/:id",
        loader: () => fetch("donation.json"),
        element: <Donate></Donate>,
      },
      {
        path: "/donation",
        element: <div>donation</div>,
      },
      {
        path: "/statistics",
        element: <div>statistics</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rounter}></RouterProvider>
  </React.StrictMode>
);
