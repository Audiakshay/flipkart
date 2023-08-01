import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productsAction from "./Redux/Actions/ProductsList";
import Home from "./Screens/Home";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import mobileAction from "./Redux/Actions/MobileAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
    dispatch(mobileAction ());
  }, []);
  return (
    <>
    <Navbar />
      <Category />
      <Home />
      <Footer />
    </>
  );
};

export default App;
