import React from "react";
import styled from "styled-components";
import { GrNotes } from "react-icons/gr";

const DesignWorkProcess = () => {
  return (
    <>
      <Style>
        <div>
          <div className="wrapper">
            <div className="main-container">
              <div className="title-card">
                <h3 className="image-title">Portfolio</h3>
                <span className="image-title-border"></span>
              </div>
              <div className="steps-container">
                <div className="step completed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <div className="label completed">Requirement Understanding</div>
                  <div className="icon completed">
                    <iGrNotes className="steps-icon" />
                  </div>
                </div>
                <div className="line completed"></div>
                <div className="step completed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <div className="label completed">
                    Communication of Tentative Budget
                  </div>
                  <div className="icon completed">
                    <i className="far fa-map"></i>
                  </div>
                </div>
                <div className="line completed"></div>
                <div className="step completed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <div className="label completed">Content Design</div>
                  <div className="icon completed">
                    <i className="far fa-map"></i>
                  </div>
                </div>
                <div className="line completed"></div>
                <div className="step completed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <div className="label completed">Detail Design</div>
                  <div className="icon completed">
                    <i className="far fa-newspaper"></i>
                  </div>
                </div>
                <div className="line completed"></div>
                <div className="step completed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <div className="label completed">
                    Design Signoff & Work Commencement
                  </div>
                  <div className="icon completed">
                    <i className="fas fa-home"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </> //
  );
};

export default DesignWorkProcess;

const Style = styled.div`
  .title-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0;
    margin-bottom: 3rem;
  }
  .image-title {
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 0.2em;
    transition: color, 250ms;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  .image-sub-title {
    font-size: 1.2rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0.2em;
    transition: color, 250ms;
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  .image-title-border {
    background: var(--primary-color) none repeat scroll 0 0;
    border-radius: 2px;
    display: inline-block;
    height: 3px;
    width: 50px;
  }
  .wrapper {
    font-family: "Muli", sans-serif;
    background: var(--body-color);
    padding: 0;
    margin: 0;
    display: flex;
    width: 100vw;
    height: 80vh;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .toggle {
    transform: scale(0.8);
    position: absolute;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 140px;
  }
  .toggle span {
    margin: 0 0.5rem;
  }
  .toggle input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  /* .toggle input[type="checkbox"]:checked + label {
    background: #13cb8f;
  } */
  .toggle input[type="checkbox"]:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  .toggle label {
    cursor: pointer;
    width: 75px;
    height: 34px;
    background: #d2d3d8;
    display: block;
    border-radius: 40px;
    position: relative;
  }
  .toggle label:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 40px;
    transition: 0.3s;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 200ms ease;
    background: var(--background-modal-color);
    height: 400px;
    min-width: 420px;
    max-width: 1200px;
    flex-grow: 1;
    border-radius: 5px;
    margin-bottom: 8rem;
    /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14); */
  }
  .main-container .steps-container {
    padding: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-container .steps-container .step {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease;
    flex-grow: 0;
    height: 15px;
    width: 15px;
    border: 4px solid var(--color-timeline-default);
    border-radius: 50%;
  }
  .main-container .steps-container .step .preloader,
  body .main-container .steps-container .step svg {
    display: none;
  }
  .main-container .steps-container .step.completed {
    width: 18px;
    height: 18px;
    background: var(--color-step-completed);
    border: none;
  }
  .main-container .steps-container .step.completed svg {
    transition: all 200ms ease;
    display: block;
    height: 10px;
    width: 10px;
    fill: var(--color-checkmark-completed);
  }
  .steps-icon {
    font-weight: 400;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    color: var(--color-icon-completed);
    font-size: 40px;
  }
  .main-container .steps-container .step.in-progress {
    width: 18px;
    height: 18px;
    background: var(--color-checkmark-completed);
    border: none;
  }
  .main-container .steps-container .step.in-progress .preloader {
    display: block;
    height: 10px;
    width: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .main-container .steps-container .step .label {
    position: absolute;
    top: 30px;
    filter: none;
    z-index: 2000;
    color: var(--color-label-default);
    transition: all 200ms ease;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .main-container .steps-container .step .label.completed {
    color: var(--color-label-completed);
    text-align: center;
  }
  body .main-container .steps-container .step .label.loading {
    color: var(--color-label-loading);
  }
  .main-container .steps-container .step .icon {
    font-size: 40px;
    position: absolute;
    top: -60px;
    color: var(--color-icon-default);
    transition: color 200ms ease;
  }
  .main-container .steps-container .step .icon.completed {
    color: var(--color-icon-completed);
  }
  .main-container .steps-container .step .icon.in-progress {
    color: var(--color-in-progress);
  }
  .main-container .steps-container .line {
    transition: all 200ms ease;
    height: 2px;
    flex-grow: 1;
    max-width: 226px;
    background: var(--color-timeline-default);
  }
  .main-container .steps-container .line.completed {
    background: var(--color-step-completed);
  }
  .main-container .steps-container .line.next-step-uncomplete {
    background: linear-gradient(
      to right,
      var(--color-step-completed),
      var(--color-timeline-default)
    );
  }
  .main-container .steps-container .line.next-step-in-progress {
    background: linear-gradient(
      to right,
      var(--color-step-completed),
      var(--color-in-progress)
    );
  }
  .main-container .steps-container .line.prev-step-in-progress {
    background: linear-gradient(
      to right,
      var(--color-in-progress),
      var(--color-timeline-default)
    );
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 500px) {
    .main-container .steps-container .step .label {
      font-size: 0.8rem;
    }
  }
`;
