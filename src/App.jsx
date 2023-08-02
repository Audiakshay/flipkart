import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productsAction from "./Redux/Actions/ProductsList";
import Home from "./Screens/Home";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import mobileAction from "./Redux/Actions/MobileAction";
import MobilePage from "./Screens/MobilePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./Layout/DashBoard";
import Travel from "./Screens/Travel";
import Appliances from "./Screens/Appliances";
import Fashion from "./Screens/Fashion";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "mobile",
          element: <MobilePage />,
        },
        {
          path: "travel",
          element: <Travel />,
        },
        {
          path: "fashion",
          element: <Fashion />,
        },
        {
          path: "appliances",
          element: <Appliances />,
        },
      ],
    },
  ]);

  return (
   <RouterProvider router={route} />
  );
};

export default App;
