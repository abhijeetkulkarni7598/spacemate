import React from "react";
import { MdDesignServices } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlinePicture, AiOutlineEye } from "react-icons/ai";
import { ServicesSectionStyle } from "./Designobuil.style";

const ServicesSection = () => {
  return (
    <>
      <ServicesSectionStyle>
        <div className="content-103">
          <div className="container">
            <div className="title">
              <h2 className="service-title-main">Our Services</h2>
              <span className="title-border"></span>
            </div>
            <div className="row-flex">
              <div className="service-item">
                <div className="service-post">
                  <div className="service-content">
                    <div className="service-icon">
                      <BsPencilSquare className="service-icon-content" />
                    </div>
                    <h3 className="service-title">3D Design Services</h3>
                    <p className="service-description">
                    3D Design service is a process of making models and rendering by
                    defining various elements, that represent over all view of
                    interior, similarly it applies for all other spaces. 3D Design
                    play’s vital role in interior and construction domain.
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-item">
                <div className="service-post">
                  <div className="service-content">
                    <div className="service-icon">
                      <AiOutlinePicture className="service-icon-content" />
                    </div>
                    <h3 className="service-title">2D Design Services</h3>
                    <p className="service-description">
                    2d Designing is the two dimensional visualization at Space and various elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServicesSectionStyle>
    </>
  );
};

export default ServicesSection;
