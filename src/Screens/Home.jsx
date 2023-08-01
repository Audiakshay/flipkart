import React from "react";
import { useSelector } from "react-redux";
import CardSlider from "../Components/CardSlider";
import Description from "../Components/Description";

const Home = () => {
  const pro = useSelector((state) => state?.products);
  return (
    <>
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
