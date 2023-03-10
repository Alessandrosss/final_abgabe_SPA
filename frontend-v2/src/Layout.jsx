import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './elements/footer/Footer'
import Navbar from './elements/navbars/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
