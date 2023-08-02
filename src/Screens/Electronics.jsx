import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Electronics = () => {
  return (
    <div>
      <nav class="flex m-2" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link
              to="/"
              class="inline-flex items-center text-xs font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-2 h-2 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ml-1 text-xs font-medium text-gray-500 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Computers
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <p className="text-xs px-3">
        If you want to buy high-end computers with multitasking abilities or an
        entry-level one, you can find all options online on Flipkart. Look out
        for PCs with ample storage space, or enhanced computing speed, or
        high-end configuration. The high-end desktop models or premium laptops
        offer robust security and powerful performances built for superior
        durability. Coupled with high-performance processors and other enhanced
        features, most high-end desktop computers provide a fine balance between
        performance and price. Also, check out entry-level and mid-range level
        laptops for your daily needs with basic multi-tasking abilities. You can
        find the latest computers at best prices during Big Billion Days. Find
        out more about entry-level desktop computers and high-end models with
        multitasking abilities and high-end processing needs. With several
        brands offering attractive computer price points, you can choose one
        that suits your requirements. Choose from a wide range of popular brands
        including Lenovo, Electrobot, ENTWINO, HP, iBall, and much more. Choose
        newly launched models and brand new laptops available at a discounted
        rate during the sale and bring home one that fits the bill. Check and
        compare the prices and features offered on a wide range of products. Go
        through the reviews and place your order for these devices online, and
        get them delivered to your home.
      </p>
      <div className="mt-3 px-3">
        <h4 className="font-bold text-lg">Computers</h4>
        <div className="sort">
          <ul>
            <li>Sort By</li>
            <li>Popularity</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
