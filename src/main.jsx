import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home/Home";
import Donate from "./components/Home/Donate/Donate";
import Donation from "./components/Home/Donation/Donation";
import { Statistics } from "./components/Statistics/Statistics";
import { getData } from "./assets/Local";
import Result from "./components/Search/Result";
import Error from "./components/Error/Error";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/donate/:id",
        loader: () => fetch("donation.json"),
        element: <Donate></Donate>,
      },
      {
        path: "/donation",
        loader: () => fetch("donation.json"),
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/search/:catagory",
        loader: () => fetch("donation.json"),
        element: <Result></Result>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rounter}></RouterProvider>
  </React.StrictMode>
);
