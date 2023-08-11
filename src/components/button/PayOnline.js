import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PayOnline = ({ customStyle, isValid, title }) => {
  return (
    <BtnStyle>
      <button className={!isValid ? "button-65" : "button-65 customstyle"}>
        <a href="https://www.instamojo.com/@SPACEMATE" target="blank">
          {title}
        </a>
      </button>
    </BtnStyle>
  );
};

export default PayOnline;
const BtnStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 3rem; */

  /* CSS */
  .button-65 {
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    background-color: var(--primary-color);
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif;
    font-size: 18px;
    font-weight: 500;
    height: 50px;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    /* padding: 14px 30px; */
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  .customstyle {
    padding: 3rem 6rem !important;
    /* width: 310px !important; */
    
    margin: 4rem;
    a{
      font-size: 25px !important;
      padding: 2rem 5rem !important;
    }
  }

  .button-65:hover {
    background-color: #29384f;
    box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }

  .button-65:hover:after {
    opacity: 0.5;
  }

  .button-65:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
      rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  .button-65:active:after {
    opacity: 1;
  }
  @media (max-width: 520px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;

    .button-65 {
      display: flex;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
      /* padding-right: 2rem; */
    }
  }

  @media (min-width: 768px) {
    .button-65 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 22px;
      /* width: 176px; */
    }
  }
`;
