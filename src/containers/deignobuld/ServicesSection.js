import React from "react";
import { MdDesignServices } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlinePicture, AiOutlineEye } from "react-icons/ai";
import { ServicesSectionStyle } from "./Designobuil.style";

const ServicesSection = () => {
  return (
    <>
      <ServicesSectionStyle>
        <div class="content-103">
          <div class="container">
            <div className="title">
              <h2 class="service-title-main">Our Services</h2>
              <span className="title-border"></span>
            </div>
            <div class="row-flex">
              <div class="service-item">
                <div class="service-post">
                  <div class="service-content">
                    <div class="service-icon">
                      <BsPencilSquare className="service-icon-content" />
                    </div>
                    <h3 class="service-title">3D Design Services</h3>
                    <p class="service-description">
                    3D Design service is a process of making models and rendering by
                    defining various elements, that represent over all view of
                    interior, similarly it applies for all other spaces. 3D Design
                    play’s vital role in interior and construction domain.
                    </p>
                  </div>
                </div>
              </div>
              <div class="service-item">
                <div class="service-post">
                  <div class="service-content">
                    <div class="service-icon">
                      <AiOutlinePicture className="service-icon-content" />
                    </div>
                    <h3 class="service-title">2D Design Services</h3>
                    <p class="service-description">
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
