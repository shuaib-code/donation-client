import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        element: <div>home</div>,
      },
      {
        path: "/donation/:id",
        element: <div>do</div>,
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
