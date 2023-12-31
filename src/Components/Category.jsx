import axiosInstance from "../utils/AxiosInstance";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Category() {
  const [category, setCategory] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosInstance.get("/category");

      console.log(res.data);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center overflow-x-scroll overscroll-auto scrollbar-hide overflow-hidden w-[90%] sm:w-[96%] lg:w-[97%] xl:w-[98%] h-32 self-center bg-white my-2 xl:justify-center mx-4 py-5 px-8">
      {category?.map((item) => (
        <Link to={item.route} key={item.id} className="flex flex-col items-center p-3 sm:p-4">
          <div className="mb-1 w-[90px] flex items-center justify-center">
            <img className="w-16 h-16" src={item.img} alt={item.title} />
          </div>
          <span className="text-[#333333] text-xs sm:text-sm font-semibold">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Category;
