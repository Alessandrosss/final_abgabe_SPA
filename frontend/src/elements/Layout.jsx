import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
