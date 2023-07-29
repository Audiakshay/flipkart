import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardSlider = ({ pro, card }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <div className="m-2 mb-4 py-12 bg-white shadow-lg">
      <div className="flex">
      <div className="text-3xl text-center py-10 w-[30%] pr-12">
        <p>Best of {card}</p>
        <button className="bg-blue-600 text-xs h-8 w-20 text-white rounded-sm mt-7">
          VIEW ALL
        </button>
      </div>
      <Carousel responsive={responsive}>
        {pro?.map((x) => (
          <div key={x} className="flex-col h-full">
            {/* <div className=" w-[30%]"> */}
              <img src={x.img} alt="camera" />
            {/* </div> */}
            <p className="font-medium text-lg">{x.title}</p>
            <p className="font-normal text-green-700 text-base">Min. 90% Off</p>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default CardSlider;
