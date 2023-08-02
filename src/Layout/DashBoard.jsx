import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import { useDispatch } from 'react-redux'
import mobileAction from '../Redux/Actions/MobileAction'
import productsAction from '../Redux/Actions/ProductsList'
import FurnitureProductsAction from '../Redux/Actions/Furnitures'
function DashBoard() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mobileAction());
    dispatch(productsAction());
    dispatch(FurnitureProductsAction());
  }, []);
  return (
      <>
          <Navbar />  
          <Outlet />
          <Footer />
    </>
  )
}

export default DashBoard