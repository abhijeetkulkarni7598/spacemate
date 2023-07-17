import React from "react";
import { Link } from "react-router-dom";
import hotelroom from '../../assets/hotel-design.png';
import waitingroom from '../../assets/waiting-design.png';
import { HeaderDesignobuildStyle } from "./Header.styles";

const HeaderDesignobuild = () => {
  return (
    <>
      <HeaderDesignobuildStyle>
        <div className="header-design">
          <section className="container main-hero-container">
            <div className="row mx-5 header-main-container">
              <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start main-herosection-text">
                <h1 className="display-2">
                  <span> Design</span> makes <br />
                  Space <span>Beautiful </span>
                </h1>
                <p className="main-hero-para">
                  DesignOBuild is your creative Interior design partner. We
                  provide innovative trendy yet elegant design service to the
                  client. We believe design can change the perspective of end
                  user about look and aesthetic. We help our clients to
                  visualize the job in very realistic manner.{" "}
                </p>
                <h3>Know more about our offerings.</h3>
                <div className="input-group mt-3">
                  <div className="input-group-button">
                    <Link to="/contact">REACH OUT</Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                <img src={waitingroom} alt="spacemet" className="img-fluid" />
                <img
                  src={hotelroom}
                  alt="spacemet"
                  className="img-fluid main-hero-section-img2"
                />
              </div>
            </div>
          </section>
        </div>
      </HeaderDesignobuildStyle>
    </>
  );
};

export default HeaderDesignobuild;
