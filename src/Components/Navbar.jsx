import React from "react";
import logo from "../assets/online-shop.png";
import search from "../assets/loupe.png";
import cart from "../assets/shopping-cart.png";
import trend from "../assets/trend.png";
import bell from "../assets/bell.png";
import download from "../assets/download.png";
import question from "../assets/question.png";

const Navbar = () => {
  return (
    <div className="flex sticky top-0 w-full justify-around bg-indigo-900 text-white h-14 px-44 z-10">
      <img src={logo} alt="" className="h-10 self-center" />
      <div className="search flex bg-white w-96 justify-between h-10 self-center p-2 px-3">
        <input
          type="text"
          placeholder="search for products, brands and more"
          className="self-center w-96 text-black outline-none"
        />
        <img src={search} alt="" className="h-4 self-center" />
      </div>
      <button className="bg-white w-40 h-10 self-center text-black">
        Login
      </button>
      <p className="align-self-center">Become a Seller</p>

      <div className="dropdown self-center">
        <button
          className="btn text-white dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          More
        </button>
        <ul
          className="dropdown-menu p-3 mt-2"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a
              className="dropdown-item d-flex justify-content-between"
              href="#"
            >
              <img src={bell} alt="" className="h-5 align-self-center mr-3" />
              Notification Preferences
            </a>
          </li>
          <hr />
          <li>
            <a className="dropdown-item d-flex" href="#">
              <img
                src={question}
                alt=""
                className="h-5 align-self-center mr-3"
              />
              24x7 Customer Service
            </a>
          </li>
          <hr />
          <li>
            <a className="dropdown-item d-flex" href="#">
              <img src={trend} alt="" className="h-5 align-self-center mr-3" />
              Advertise
            </a>
          </li>
          <hr />
          <li>
            <a className="dropdown-item d-flex" href="#">
              <img
                src={download}
                alt=""
                className="h-5 align-self-center mr-3"
              />
              Download App
            </a>
          </li>
        </ul>
      </div>

      <div className="cart flex h-6 self-center">
        <img src={cart} alt="" />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
