import React from 'react'
import { Link } from 'react-router-dom';
import { interior1, heroimg } from './imports'
import './headerhome.style.js';
import { HeaderhomeStyle } from './headerhome.style.js';

const Header = () => {
    return (
      <>
      <HeaderhomeStyle>
        <header>
          <section className="container main-hero-container">
            <div className="row mx-5 header-main-container">
              <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start main-herosection-text">
                <h1 className="display-2">
                 <span className="spacemate-tagline"> Space</span>-efficient  & <br />
                 <span className="spacemate-tagline"> Cost</span>-effective
                </h1>
                <p className="main-hero-para">
                  Spacemate has an in house design and execution team, we have a dedicated OEM partner for taylor made furniture and furnishing solutions. We believe in offering cost effective solutions which will suit customer requirements.{" "}
                </p>
                <h3>Know more about our offerings.</h3>
                <div className="input-group mt-3">
                  <div className="input-group-button"> <Link to="/contact">REACH OUT</Link></div>
                </div>
              </div>
              <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                <img src={interior1} alt="spacemet" className="img-fluid" />
                <img
                  src={heroimg}
                  alt="spacemet"
                  className="img-fluid main-hero-section-img2"
                />
              </div>
            </div>
          </section>
        </header>
        </HeaderhomeStyle>
      </>
    );
}

export default Header
