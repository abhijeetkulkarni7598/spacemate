import React, { useState } from "react";
import serviceapi from "../../API/serviceApi";
import { ServiceStyle } from "./Service.style";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
    <ServiceStyle>
    <div className="mt-5">
      <section className="services-main-container px-10">
        <div className="container service-container">
          <div className="section-head col-sm-12 px-5">
            <h4>
              <span>Our</span> Services
            </h4>
            <p>
              Spacemate is your young innovative designing partner. We believe
              in innovative design and the best quality. At Spacemate we provide
              you pocket friendly complete home interior solutions.
            </p>
          </div>
          <div className="row work-container-subdiv-service">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-6 col-sm-6 work-container-subdiv-service-block">
                    <div className="item">
                      <span className="icon feature_box_col_two">
                        <i className={`fontawesome-style ${logo}`}></i>
                      </span>
                      <h2>{title}</h2>
                      <p className="main-hero-para-service w-100">{info}</p>
                      {/*<button className="input-group-button__serv">Know More</button> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </ServiceStyle>
    </>
  );
};

export default Services;
