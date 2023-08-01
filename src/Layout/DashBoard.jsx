import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Category from '../Components/Category'

function DashBoard() {
  return (
      <>
          <Navbar />  
          <Outlet />
          <Footer />
    </>
  )
}

export default DashBoard