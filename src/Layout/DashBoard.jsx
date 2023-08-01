import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Category from '../Components/Category'
import { useDispatch } from 'react-redux'
import mobileAction from '../Redux/Actions/MobileAction'
import productsAction from '../Redux/Actions/ProductsList'

function DashBoard() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mobileAction());
    dispatch(productsAction());
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