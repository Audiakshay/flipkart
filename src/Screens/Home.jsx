import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSlider from "../Components/CardSlider";
import Carousal from "../Components/Carousal";

import Description from "../Components/Description";
import mobileAction from "../Redux/Actions/MobileAction";
import productsAction from "../Redux/Actions/ProductsList";
import Category from "../Components/Category";


const Home = () => {
  
  const pro = useSelector((state) => state?.products);

  return (
    <>
      {/* <Carousal pro={pro?.slider} card="slider" /> */}
      <Category />
      <Carousal pro={pro?.slider} card="slider" />
      <CardSlider pro={pro?.electronics} card="Electronics" />
      <CardSlider pro={pro?.HomeKitchens} card="Home and Kitchens" />
      <CardSlider pro={pro?.BooksToys} card="Books and Toys" />
      <CardSlider pro={pro?.TravelEssentials} card="Travel and Essentials" />
      <CardSlider pro={pro?.FashionTopDeals} card="Fashion and Top Deals" />
      <CardSlider pro={pro?.SportsHealthCare} card="Sports and Health care" />
      <Description />
    </>
  );
};

export default Home;
