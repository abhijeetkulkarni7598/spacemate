import React from "react";
import Header from "../containers/header/Header";
import Navbar from "../components/navbar/Navbar";
import HowWeWorkDisplay from "../containers/HowWeWork/HowWeWorkDisplay";
import AboutUsDisplay from "../containers/aboutus/AboutUsDisplay";
import Products from "../containers/Services/Products";
import Footer from "../components/footer/Footer";
import HeaderDisplay from "../containers/header/HeaderDisplay";

const DisplaySolutions = () => {
  return (
    <>
      <Navbar />
      <HeaderDisplay />
      <HowWeWorkDisplay />
      <AboutUsDisplay />
      <Products />
      <Footer />
    </>
  );
};

export default DisplaySolutions;
