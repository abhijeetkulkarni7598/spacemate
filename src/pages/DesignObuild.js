import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import GalleryConetent from "../components/gallery/GalleryConetent";

import Navbar from "../components/navbar/Navbar";
import AboutDesignobuld from "../containers/deignobuld/AboutDesignobuld";
import GalleryDesignobuild from "../containers/deignobuld/GalleryDesignobuild";
import PricinfDesignobuild from "../containers/deignobuld/PricinfDesignobuild";
import ServicesSection from "../containers/deignobuld/ServicesSection";
import Header from "../containers/header/Header";
import HeaderDesignobuild from "../containers/header/HeaderDesignobuild";
import UspSection from "../containers/HowWeWork/UspSection";
import DesignWorkProcess from "../containers/deignobuld/DesignWorkProcess";
import TagButton from "../components/gallery/TagButton";
import WhatsApp from "../components/common/WhatsApp";
import PhoneCall from "../components/common/PhoneCall";

const DesignObuild = () => {
  const [isActive, setIsActive] = useState(true)
  return (
    <>
      <Navbar />
      <HeaderDesignobuild />
      <PricinfDesignobuild isActive={isActive}/>
      <Style>
        <UspSection />
      </Style>
      <GalleryDesignobuild/>
      <ServicesSection/>
      <Footer />
      <PhoneCall/>
        <WhatsApp/>
    </> //
  );
};

export default DesignObuild;

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


