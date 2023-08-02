import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import { useDispatch } from "react-redux";

const CardSlider = ({ pro, card }) => {
  const dispatch = useDispatch()
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
              <Link to = 'prevProduct' onClick={()=> dispatch({type: 'prevProduct', payload: x})}>
                <img src={x.img} alt="..." />
              </Link>
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
