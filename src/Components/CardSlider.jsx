import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardSlider = ({ pro, card }) => {
  return (
    <div className="flex m-2 mb-4 py-12 bg-white shadow-lg">
        <div className="text-3xl text-center py-10 w-[30%] pr-12">
          <p>Best of {card}</p>
          <button className="bg-blue-600 text-xs h-8 w-20 text-white rounded-sm mt-7">
            VIEW ALL
          </button>
        </div>
        <Swiper spaceBetween={30} slidesPerView={6}>
          {pro?.map((x) => (
            <SwiperSlide key={x.id}>
              <div className="h-[82%]">
              <img src={x.img} alt="..." />
              </div>
              <p className="font-medium te">{x.title}</p>
              <p className="text-green-600">Min 90% Off</p>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default CardSlider;
