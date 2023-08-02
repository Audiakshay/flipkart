import React, { useEffect, useState } from "react";
import staples from "../assets/staples.webp";
import snacks from "../assets/snacks.webp";
import vegetables from "../assets/vegetables.webp";
import kitchen from "../assets/kitchen.webp";
import babyCare from "../assets/baby-care.webp";
import dairy from "../assets/dairy.webp";
import household from "../assets/household.webp";
import food from "../assets/food.webp";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

const Groceries = () => {
  const [slider, setSlider] = useState([]);
  const [houseitems, setHouseItems] = useState([]);
  const sliderData = async () => {
    const res = await axios.get("http://localhost:3004/groceries");
    console.log(res.data[0].slider[0].img);
    setSlider(res.data[0].slider);
  };
  const householdItems = async () => {
    const res = await axios.get("http://localhost:3004/groceries");
    console.log(res.data[0].household);
    setHouseItems(res.data[0].household);
  };
  useEffect(() => {
    sliderData();
    householdItems();
  }, []);

  return (
    <div>
      <div className="groceries-navbar ">
        {/* NAVBAR */}
        <ul className="flex justify-around text-bold p-3 bg-white shadow-lg">
          <li className="self-center font-bold text-xs">
            <img src={staples} alt="" className="h-16 self-center" />
            Staples
          </li>
          <li className="self-center font-bold text-xs">
            <img src={snacks} alt="" className="h-16 self-center" /> Snacks &
            Vegetables
          </li>
          <li className="self-center font-bold text-xs">
            <img src={food} alt="" className="h-16" />
            Package food
          </li>
          <li className="self-center font-bold text-xs">
            <img src={babyCare} alt="" className="h-16" />
            personal & Baby Care
          </li>
          <li className="self-center font-bold text-xs">
            <img src={household} alt="" className="h-16" />
            Household Care
          </li>
          <li className="self-center font-bold text-xs">
            <img src={dairy} alt="" className="h-16" />
            Dairy & Eggs
          </li>
          <li className="self-center font-bold text-xs">
            <img src={kitchen} alt="" className="h-16" />
            Home & Kitchen
          </li>
          <li className="self-center font-bold text-xs">
            <img src={vegetables} alt="" className="h-16" />
            Fruits & Vegetables
          </li>
        </ul>
        {/* THEORY */}
        <p className="text-xs my-3 mx-2 text-start">
          Whether you work from home or office or other workplaces, daily
          grocery items are a requisite for everybody. Regardless of the size of
          the family or where you live, one can easily browse for the required
          food or other daily use products and have them brought to your home.
          Explore the variety of products, whether oils or foodgrains, from the
          online stock and choose the quantity required. You can save the time
          otherwise lost in waiting in lengthy queues for billing and payments
          by easily adding the chosen items to your cart online. Select the
          required date for delivery and pay with a suitable payment option.
          This will help you receive the items whenever you need them and in the
          available quantity. Essentials needed every day, like spices, daals,
          sugar, coffee powder, salt, etc., can be easily shopped online and
          delivered to your home. Other items like cleaning liquids, shower
          gels, fabric softeners, toothpaste, etc., can also be bought online.
          Buy grocery and more from brands such as Kellogg’s, Tata Gold, Parle
          G, Lays, etc. Order the online grocery comfortably from home for
          timely doorstep delivery. You may also place an order for the comfort
          and convenience of your loved ones who cannot move out of the house
          and shop. The information you are reading has been last updated on
          01-Aug-23.
        </p>
        {/* BRANDS */}
        <div className="bg-white p-4 shadow-xl">
          <h4 className="font-bold text-2xl mb-4">Featured Brands</h4>
          <Swiper spaceBetween={30} slidesPerView={4}>
            {slider?.map((x) => (
              <SwiperSlide key={x.id}>
                <div className="h-[102%]">
                  <img src={x.img} alt="..." />
                </div>
                <p className="font-medium te">{x.title}</p>
                <p className="text-green-600">Min 90% Off</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* FOOD ESSENTIALS BANNER */}
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/2000/2000/image/37ba2d80e7566df1.jpg?q=50"
            alt=""
          />
        </div>
        {/* FOODGRAINS BANNER */}
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/1400/1400/image/ed04b09381eec3f9.jpg?q=50"
            alt=""
            className="w-full"
          />
        </div>
        {/* PERSONAL CARE */}
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/2000/2000/image/7f003daeaf4ae8dc.jpg?q=50"
            alt=""
          />
          <div className="flex flex-wrap justify-center w-full">
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/7245c5bc2a7c3dcb.jpg?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/f2f929242d71a365.jpg?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/538bbfa1ed73f14a.jpg?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/14017df9b6f0c7c5.png?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/f04eacc1076a8789.jpg?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/6b4b795405956a68.jpg?q=50"
              alt=""
              className="mx-2"
            />
          </div>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/2000/2000/image/f6ce91ec12acfe5a.jpg?q=50"
            alt=""
          />
          <div className="flex justify-center">
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/8c79136d5eeaae1f.jpg?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/a3df8d2af525ec55.jpg?q=50"
              alt=""
              className="mx-2"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/b3e4fd5dce73256b.png?q=50"
              alt=""
              className="mx-2"
            />
          </div>
        </div>
        <div className="bg-white p-4 shadow-xl">
          <Swiper spaceBetween={30} slidesPerView={7}>
            {houseitems?.map((x) => (
              <SwiperSlide key={x.id}>
                <div className="hover:shadow-2xl p-3 w-48">
                  <div className="image flex flex-col items-center">
                    <img src={x.img} alt="..." className="h-24" />
                  </div>
                  <p className="h-12 my-2 text-ellipsis overflow-hidden">
                    {x.title}
                  </p>
                  <p className="text-slate-500 my-2">{x.quantity}</p>
                  <div className="price flex gap-2 my-2">
                    <p className="font-bold">{x.price}</p>
                    <p className="line-through text-slate-500">{x.oldPrice}</p>
                    <p className="text-green-600 font-bold">{x.offer}</p>
                  </div>
                  <button className="text-center border-1 border-gray-400 p-2 w-28 text-blue-600 font-bold my-3">
                    Add Item
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/flap/2000/2000/image/862eb4eabe3f7ba4.jpg?q=50"
            alt=""
          />
          <div className="flex gap-2justify-center">
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/ecb55ebe30810db4.jpg?q=50"
              alt=""
              className="w-full"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/8ad29e0516cabdf1.jpg?q=50"
              alt=""
              className="w-full"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/480/480/image/39523cc0f81a86f2.jpg?q=50"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceries;
