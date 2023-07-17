import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PricinfDesignobuildStyle } from "./Designobuil.style";

const PricinfDesignobuild = ({isActive}) => {
  return (
    <>
      <PricinfDesignobuildStyle>
        <div className="title-card">
          <h3 className="image-title">{!isActive ? "Package" : ""} Pricing</h3>
          <span className="image-title-border"></span>
        </div>
        <div className="pricing-section">
          <div className="pricing-card">
            <div className="pricing-head">
              <h3>ONE ROOM DESIGN</h3>
              <div className="price-block">
                <h2>
                  ₹2999 <span> INR</span>
                </h2>
              </div>
            </div>
            <ul className="price-content-text">
              <li>
                <BsCheck2 className="check-icon" />
                <span>2D Layouts.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>3D Views.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>3D Design Upto 4 viewss.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>Room Size** upto 200 sqft.</span>
              </li>

              <li>
                <BsCheck2 className="check-icon" />
                <span>One revisions</span>
              </li>
            </ul>
            <div className="book-now-section">
              <a href="https://imjo.in/RjFQEJ" target="blank">
                <Button>Book Now</Button>
              </a>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-head">
              <h3>2BHK DESIGN</h3>
              <div className="price-block">
                <h2>
                  ₹11999 <span> INR</span>
                </h2>
              </div>
            </div>
            <ul className="price-content-text">
              <li>
                <BsCheck2 className="check-icon" />
                <span>2D Layouts.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>3D Views.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>3D Design Upto 4 views per room.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>Two Revisions</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>
                  Complementary Entrance lobby View
                  </span>
              </li>
            </ul>
            <div className="book-now-section">
              <a href="https://imjo.in/RjFQEJ" target="blank">
                <Button>Book Now</Button>
              </a>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-head">
              <h3>3BHK DESIGN</h3>
              <div className="price-block">
                <h2>
                  ₹13999 <span> INR</span>
                </h2>
              </div>
            </div>
            <ul className="price-content-text">
              <li>
                <BsCheck2 className="check-icon" />
                <span>2D Layouts.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>3D Views.</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>3D Design Upto 4 views per room.</span>
              </li>
              
              <li>
                <BsCheck2 className="check-icon" />
                <span>Two Revisions</span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>
                  Complementary Entrance lobby View
                  </span>
              </li>
              <li>
                <BsCheck2 className="check-icon" />
                <span>
                  Complementary Internal Passage view
                </span>
              </li>
            </ul>
            <div className="book-now-section">
              <a href="https://imjo.in/RjFQEJ" target="blank">
                <Button>Book Now</Button>
              </a>
            </div>
          </div>
          {isActive && <div className="pricing-card">
            <div className="pricing-head">
              <h3>Individual House & Bungalows</h3>
              <div className="price-block">
                <h2></h2>
              </div>
            </div>
            <ul className="price-content-text">
              <li>
                <FiPhoneCall className="check-icon" />
                <span>Call for costing.</span>
              </li>
            </ul>
            <div className="book-now-section">
              <a href="https://imjo.in/RjFQEJ" target="blank">
                <Button>Book Now</Button>
              </a>
            </div>
          </div>}
        </div>
      </PricinfDesignobuildStyle>
    </> //
  );
};

export default PricinfDesignobuild;
const Button = styled.button`
  width: 100%;
  padding: 0.5rem 2.5rem;
  border-radius: 5px;
  background: var(--primary-color);
  color: #fff;
  font-weight: 500;
  font-size: 1.9rem;
  transition: all 0.5s ease;
  &:hover {
    background: var(--bgcolor);
    color: var(--text-color);
  }
`;
