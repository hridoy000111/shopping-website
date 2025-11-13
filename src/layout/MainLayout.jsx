import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar />

      <main className="container mx-auto px-2">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
