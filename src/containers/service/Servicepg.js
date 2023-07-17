import React from 'react'
import { Link } from 'react-router-dom';
import ResCarousal from '../../components/gallery/ResCarousal'
import ComCarousal from '../../components/gallery/ComCarousal';
import { ServicepgStyle } from './Servicepg.style';



const Servicepg = () => {
    return (
      <>
      <ServicepgStyle>
      <div className="mt-5">
        <section className="services-main-container px-10">
          <div className="container service-container">
            <div className="section-head col-sm-12 px-5">
              <h4>
                <span>Our</span> Services
              </h4>
              <p>
                Spacemate is your young innovative designing partner. We believe
                in innovative design and the best quality. At Spacemate we
                provide you pocket friendly complete home interior solutions.
              </p>
            </div>
            <div className="row work-container-subdiv-service">
              <div className="col-12 col-lg-6 col-sm-6 work-container-subdiv-service-block">
                <div className="item">
                  <span className="icon feature_box_col_two">
                    <i className="fas fa-landmark"></i>
                  </span>
                  <h2>Commercial Turnkey Projects</h2>
                  <p className="main-hero-para-service w-100">
                  <ComCarousal />
                    <Link to="/gallery" className='gallery-link-button'> More Images </Link>
                  </p>
                 
                </div>
              </div>
              <div className="col-12 col-lg-6 col-sm-6 work-container-subdiv-service-block">
                <div className="item">
                  <span className="icon feature_box_col_two">
                    <i className="fas fa-building"></i>
                  </span>
                  <h2>Residential Turnkey Projects</h2>
                  <p className="main-hero-para-service w-100">
                    <ResCarousal />
                    <Link to="/gallery" className='gallery-link-button'> More Images </Link>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </ServicepgStyle>
      </>
    );
}

export default Servicepg
