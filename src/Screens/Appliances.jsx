import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/AxiosInstance";

function Appliances() {
  const [data, setData] = useState(null);
  console.log(data);
  const getData = async () => {
    try {
      const res = await axiosInstance.get("/appliances");
      //   console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="w-[98%]">
        <p className="text-balck text-xl font-semibold my-3">
          TVs and Appliances
        </p>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            {data?.carousel.map((item) => (
              <div key={item} class="carousel-item active" data-bs-interval="10000">
                <img src={item.url} class="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="grid grid-cols-4 w-full">
          {data?.cards.map((item) => (
            <img src={item.url} alt="..." className="w-[100%]" />
          ))}
        </div>
        <img src={data?.banner} alt="..." />
        <div className="w-full flex flex-col">
          <div className="my-2">
            <p className="text-black text-5xl font-bold ml-6">
              {data?.starBrands.title}
            </p>
            <p className="text-2xl text-gray-500 ml-6">
              {data?.starBrands.subTitle}
            </p>
          </div>
          <div className="w-full flex flex-wrap">
            {data?.starBrands.cards.map((item) => (
              <img src={item.url} alt="..." className="w-[25%]" />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="my-2">
            <p className="text-black text-5xl font-bold ml-6">
              {data?.newLaunches.title}
            </p>
            <p className="text-2xl text-gray-500 ml-6">
              {data?.newLaunches.subTitle}
            </p>
          </div>
          <div className="w-full flex flex-wrap">
            {data?.newLaunches.cards.map((item) => (
              <img src={item.url} alt="..." className="w-[25%]" />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="my-2">
            <p className="text-black text-5xl font-bold ml-6">
              {data?.newTechnology.title}
            </p>
            <p className="text-2xl text-gray-500 ml-6">
              {data?.newTechnology.subTitle}
            </p>
          </div>
          <div className="w-full flex flex-wrap">
            {data?.newTechnology.cards.map((item) => (
              <img src={item.url} alt="..." className="w-[25%]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appliances;
