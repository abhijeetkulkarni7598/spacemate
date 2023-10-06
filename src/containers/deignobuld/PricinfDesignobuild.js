import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PricinfDesignobuildStyle } from "./Designobuil.style";
import { Pricing } from "../../constant";

const PricinfDesignobuild = ({isActive}) => {
  console.log(Pricing)
  
  return (
    <>
      <PricinfDesignobuildStyle>
        <div className="title-card">
          <h3 className="image-title">{!isActive ? "Package" : ""} Pricing</h3>
          <span className="image-title-border"></span>
        </div>
        <div className="pricing-section">
      {Pricing && Pricing?.map((item)=> (
        <div key={item.designname} className="pricing-card">
            <div className="pricing-head">
              <h3>{item.designname}</h3>
              <div className="price-block">
                {item.price && <h2>
                  {item.price} <span> INR</span>
                </h2>}
              </div>
            </div>
            <ul className="price-content-text">
              {item.twodlayout && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.twodlayout}</span>
              </li>}
              {item.threedviews &&<li>
                <BsCheck2 className="check-icon" />
                <span>{item.threedviews}</span>
              </li>}
              {item.designlimit && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.designlimit}</span>
              </li>}
              {item.roomlimit && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.roomlimit}</span>
              </li>}

             {item.revisions && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.revisions}</span>
              </li>}
             {item.complementary && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.complementary}</span>
              </li>}
             {item.complementary2 && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.complementary2}</span>
              </li>}
             {item.calling && <li>
                <BsCheck2 className="check-icon" />
                <span>{item.calling}</span>
              </li>}
            </ul>
            {item.link && <div className="book-now-section">
              <a href={item.link} target="blank">
                <Button>Book Now</Button>
              </a>
            </div>}
          </div>
      ))}
          
          
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
