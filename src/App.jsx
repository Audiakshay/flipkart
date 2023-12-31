import React from "react";
import Home from "./Screens/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import MobilePage from "./Screens/MobilePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./Layout/DashBoard";
import Travel from "./Screens/Travel";
import Appliances from "./Screens/Appliances";
import Fashion from "./Screens/Fashion";
import Homefurniture from "./Screens/Homefurniture";
import Groceries from "./Screens/Groceries";
import Electronics from "./Screens/Electronics";
import ProductPreview from "./Screens/ProductPreview";

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
        {
          path: "furniture",
          element: <Homefurniture />,
        },
        {
          path: "groceries",
          element: <Groceries />,
        },
        {
          path: "prevProduct",
          element: <ProductPreview />,
        },
        {
          path: "electronics",
          element: <Electronics />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
