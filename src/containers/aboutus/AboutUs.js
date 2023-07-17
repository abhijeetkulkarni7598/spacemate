import React, { useState } from 'react'
import { aboutimg } from '../../containers/imports';
import aboutUsAp from '../../API/aboutUsAp';
import SecondaryButton from '../../components/button/secondaryButton';
import { AboutusStyle } from './Aboutus.style';


const AboutUs = () => {
  const [aboutData, setAboutData] = useState(aboutUsAp)
    return (
      <>
      <AboutusStyle>
      <div className="container mx-auto about-container">
      <section className="common-section my-5 mx-5 px-5">
            <div className="row about-us-row">
              <div className="col-12 col-lg-6 text-center about-us-leftside-img">
                <img src={aboutimg} alt="aboutusImg" />
              </div>
              <div className="col-12 col-lg-6 about-us-list m-0.5">
                <h1 className="main-heading">
                  <span>About</span> Us
                </h1>
                <div className="row mx-auto about-us-info">
                  <p className="col-12 col-sm-12">
                  Spacemate is your young innovative designing partner. We believe in innovative designs and best in quality delivery. We provide pocket friendly complete interior solutions.<br/>
                  Our core team carries collective domain experience of fifteen years into design,vendor management and project execution.
                  </p>
                  <div className="col-12 about-us-data">
                    {aboutData.map((curElem) => {
                      const { id, logo, title, info } = curElem;
                      return (
                        <>
                          <div className="row about-us-info about-us__data-in">
                            <div className="col-1 about-us-number">
                              <i className={`fontawesome-style ${logo}`}></i>
                            </div>
                            <div className="col-11 about-us-data">
                              <h2>{title}</h2>
                              <p>{info}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pt-0 mt-5 mb-5">
                <SecondaryButton 
                pagelink='/download'
                title='Download Brochure'
                />
                    
              </div>
                    
            </div>
            </section>
          </div>
          </AboutusStyle>
      </>
    );
}

export default AboutUs
