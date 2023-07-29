import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsAction from "../Redux/Actions/ProductsList";
import CardSlider from "../Components/CardSlider";

const Home = () => {
  const dispatch = useDispatch();
  const pro = useSelector((state) => state?.products);
  console.log(pro?.electronics);
  useEffect(() => {
    dispatch(productsAction());
  }, []);
  return (
    <>
      <CardSlider pro={pro?.electronics} card="Electronics" />
      <CardSlider pro={pro?.HomeKitchens} card="Home and Kitchens" />
      <CardSlider pro={pro?.BooksToys} card="Books and Toys" />
      <CardSlider pro={pro?.TravelEssentials} card="Travel and Essentials" />
      <CardSlider pro={pro?.FashionTopDeals} card="Fashion and Top Deals" />
      <CardSlider pro={pro?.SportsHealthCare} card="Sports and Health care" />
    </>
  );
};

export default Home;
