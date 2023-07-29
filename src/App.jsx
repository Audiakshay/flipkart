import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productsAction from "./Redux/Actions/ProductsList";
import Home from "./Screens/Home";
import Category from "./Components/Category";
import Footer from "./Components/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  }, []);
  return (
    <>
      <Category />
      <Home />
      <Footer />
    </>
  );
};

export default App;
