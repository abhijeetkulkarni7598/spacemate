import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PricinfDesignobuild from "../containers/deignobuld/PricinfDesignobuild";
import PayOnline from "../components/button/PayOnline";
import styled from "styled-components";
import image7 from "../assets/image7.jpeg";
// import image1 from "../assets/image1.jpeg";
import image1 from "../assets/sofa-nnackpanel.png";
import tdimg1 from "../assets/2d-designtwo.png";
import Logo from "../components/logo/Logo";

const DesignLandingPage = () => {
  const [isActive, setIsActive] = useState(false);
  const isValid = true;
  const customStyle = {
    padding: "0 5rem",
    color: "red",
  };
  return (
    <>
      <Style>
        <section
          id="home"
          className="d-flex align-items-center position-relative vh-100 cover hero"
          style={{
            backgroundImage: ``,
          }}>
          <div className="logo">
            <Logo />
          </div>
          <div className="container-fluid container-fluid-max">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-12">
                <h1 className="text-grey text-align-center text-center main-title">
                  Get Your Home Designed <br />
                </h1>
                <h2 className="text-grey py-4 main-subtitle">
                  Book Package At Just ₹99/- and get Eligible for Extra 10%
                  Discount!
                </h2>
                {/* <div className="mt-3">
                  <a className="btn bg-blue text-white mr-2" href="" role="button">
                    Book Now
                  </a>
                  <a className="btn bg-blue text-white" href="" role="button">
                    Plan Your Trip
                  </a>
        </div>*/}
              </div>
            </div>
          </div>
        </section>
        <PayOnline isValid={isValid} title="Pay Now" />
        <PricinfDesignobuild
          customStyle={customStyle}
          isValid={isValid}
          isActive={isActive}
        />
        <section>
          <div className="container-fluid image-container container-fluid-max">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 p-2">
                <h2>3D Design</h2>
                <img className="image-landing" src={image1} alt="" />
              </div>
              <div className="col-12 col-md-6 p-2 col-lg-6">
                <h2>2D Design</h2>
                <img className="image-landing" src={tdimg1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid text-center text-light footer-background">
            <h1>DesignObuild</h1>
            <h3>An Initiative Of Spacemet Interior Solution's</h3>
          </div>
        </section>
      </Style>
    </> //
  );
};

export default DesignLandingPage;

const Style = styled.div`
  position: relative;
  a,
  a:hover {
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  .bg-lightblue {
    background: var(--lightblue);
  }

  .bg-blue {
    background: var(--blue);
  }
  .logo {
    position: absolute;
    top: 10px;
    left: 20px;
  }

  .text-blue {
    color: var(--blue);
  }

  .container-fluid-max {
    max-width: 1440px;
  }
  .cover {
    background: no-repeat center/cover;
  }
  .p-15 {
    padding: 15px;
  }
  .hero {
    background-attachment: fixed;
    transition: transform 0.5s ease-in-out;
  }
  .main-title {
    font-size: 9rem;
  }
  .main-subtitle {
    font-size: 4rem;
    text-align: center;
  }

  .hero::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      rgba(83, 207, 205, 0.1) 0,
      rgba(83, 207, 205, 0.2) 50%,
      rgba(83, 207, 205, 0.3) 100%
    );
  }

  .hero .container-fluid {
    z-index: 10;
  }
  .image-container {
    padding: 4rem 0;
  }
  h2 {
    text-align: center;
    font-size: 2.5rem;
  }
  .image-landing {
    padding: 2rem;
  }
  .footer-background{
    background-color: #000;
    padding: 8rem 4rem;
    h1{
      color: #fff !important;
      font-size: 3rem;
      padding: 2rem 0;
    }
    h3{
      color: #fff !important;
      font-size: 2rem;
      padding-bottom: 2rem;

    }
  }
  @media (max-width: 520px) {
    .hero {
      height: 80vh !important;
    }
    .main-title {
      font-size: 5rem;
    }
    .main-subtitle {
      font-size: 3rem;
      text-align: center;
    }
  }
  @media (min-width: 768px) {
  }
`;
