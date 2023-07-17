import React from 'react'
import { Link } from 'react-router-dom';
import { interior1, heroimg, shop, shopmin } from './imports'
import {HeaderDisplayStyle} from "./Header.styles";

const HeaderDisplay = () => {
    return (
      <>
      <HeaderDisplayStyle>
        <headerDisplay>
          <section className="container main-hero-container">
            <div className="row mx-5 header-main-container">
              <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start main-herosection-text">
                <h1 className="display-2">
                  Space-efficient and <br />
                  Cost-effective Display solutions
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
                <img src={shopmin} alt="spacemate" className="img-fluid" />
                {/*<img
                  src={heroimg}
                  alt="spacemet"
                  className="img-fluid main-hero-section-img2"
    />*/}
              </div>
            </div>
          </section>
        </headerDisplay>
        </HeaderDisplayStyle>
        
      </>
    );
}

export default HeaderDisplay
