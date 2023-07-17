import React from "react";
import { IoIosSettings } from "react-icons/io";
import {AiOutlineEye, AiOutlineTeam} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'
import {FaRegHandshake} from 'react-icons/fa'
import {BsCurrencyDollar, BsStopwatch} from 'react-icons/bs'
import { UspSectionStyle } from "./HowweWRork.style";

const UspSection = () => {
  return (
    <>
      <UspSectionStyle>
        <div class="y-us-section">
          <div class="container">
            <div class="row">
              <div class="">
                <div class="y-us-head">
                  <div class="y-us-title">
                    <h2>Why choose us</h2>
                    <p>
                    At our company, we believe that our commitment to excellence and customer satisfaction sets us apart from the rest. Here are a few reasons why you should choose us for your needs
                    </p>
                    <span class="y-us-title-border"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-flex">
              <div class="">
                <div class="y-us-content">
                  <div class="service-3">
                    <div class="service-box">
                      <div class="clearfix">
                        <div class="iconset">
                          <span class="glyphicon glyphicon-cog">
                            <AiOutlineEye className="icon" />
                          </span>
                        </div>
                        <div class="y-us-content">
                          <h4>Realistic Design Approach</h4>
                          <p>
                          It's a approach is a design philosophy that focuses on creating designs that are practical, functional, and achievable within the constraints of the real world.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="service-box">
                      <div class="clearfix">
                        <div class="iconset">
                          <span class="glyphicon glyphicon-cog">
                            <BiMessageDetail className="icon" />
                          </span>
                        </div>
                        <div class="y-us-content">
                          <h4>Attention To Details</h4>
                          <p>
                          It involves a focus on accuracy, precision, and completeness in all aspects of the work, including planning, execution, and review. Ensure the quality, efficiency, and effectiveness.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="service-box">
                      <div class="clearfix">
                        <div class="iconset">
                          <span class="glyphicon glyphicon-cog">
                            <AiOutlineTeam className="icon"/>
                          </span>
                        </div>
                        <div class="y-us-content">
                          <h4>Creative and Skilled Design Team</h4>
                          <p>
                          Our team is dedicated to creating innovative and visually appealing designs that meet the needs and goals of our clients. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="y-us-contentbox">
                  <div class="service-3">
                    <div class="service-box">
                      <div class="clearfix">
                        <div class="iconset">
                          <span class="glyphicon glyphicon-cog">
                            <FaRegHandshake className="icon"/>
                          </span>
                        </div>
                        <div class="y-us-content">
                          <h4>Customized which suits to clients choice</h4>
                          <p>
                          Our client's have the opportunity to customize or personalize the service to their liking, ensuring that it meets their unique needs and preferences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="service-box">
                      <div class="clearfix">
                        <div class="iconset">
                          <span class="glyphicon glyphicon-cog">
                            <BsCurrencyDollar className="icon"/>
                          </span>
                        </div>
                        <div class="y-us-content">
                          <h4>Budget-Friendly services</h4>
                          <p>
                          We offer a high level of quality and value without breaking the bank. Services are designed to be efficient and streamlined, with a focus on minimizing costs and maximizing the benefits.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="service-box">
                      <div class="clearfix">
                        <div class="iconset">
                          <span class="glyphicon glyphicon-cog">
                            <BsStopwatch className="icon"/>
                          </span>
                        </div>
                        <div class="y-us-content">
                          <h4>Timely Delivery</h4>
                          <p>
                          Our commitment to timely delivery is driven by our focus on customer satisfaction and building trust and loyalty with our customers. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UspSectionStyle>
    </> //
  );
};

export default UspSection;


