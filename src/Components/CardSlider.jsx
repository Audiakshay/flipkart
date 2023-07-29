import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import productsAction from "../Redux/Actions/ProductsList";

const CardSlider = () => {
  const dispatch = useDispatch();
  const pro = useSelector((state) => state?.products);
  useEffect(() => {
    dispatch(productsAction());
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex m-2 bg-white shadow-xl">
      <div className="text-3xl text-center py-10">
        <p>Best of Electronics</p>
        <button className="bg-blue-600 text-xs h-8 w-20 text-white rounded-sm mt-7">
          VIEW ALL
        </button>
      </div>
      <Carousel responsive={responsive}>
        {pro.map((x) => (
          <div key={x} className="flex flex-col items-center h-full">
            <div className="h-[70%]">
            <img src={x.img} alt="camera" className="h-[90%]" />
            </div>
            <p className="font-medium text-lg">{x.title}</p>
            <p className="font-normal text-green-700 text-base">Min. 90% Off</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
