import React from "react";
import Header from "../containers/header/Header";
import Navbar from "../components/navbar/Navbar";
import HowWeWorkDisplay from "../containers/HowWeWork/HowWeWorkDisplay";
import AboutUsDisplay from "../containers/aboutus/AboutUsDisplay";
import Products from "../containers/Services/Products";
import Footer from "../components/footer/Footer";
import HeaderDisplay from "../containers/header/HeaderDisplay";
import PhoneCall from "../components/common/PhoneCall";
import WhatsApp from "../components/common/WhatsApp";

const DisplaySolutions = () => {
  return (
    <>
      <Navbar />
      <HeaderDisplay />
      <HowWeWorkDisplay />
      <AboutUsDisplay />
      <Products />
      <Footer />
      <PhoneCall/>
        <WhatsApp/>
    </>
  );
};

export default DisplaySolutions;
