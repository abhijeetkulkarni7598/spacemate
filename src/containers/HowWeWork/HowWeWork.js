import React, { useState } from "react";
import WorkApi from "../../API/WorkApi";
import "./HowWeWork.css";
import { HowweworkSTyle } from "./HowWeWork.style";

const HowWeWork = () => {
  const [workData, setWorkData] = useState(WorkApi);
  return (
    <>
      <HowweworkSTyle>
        <div className="feat bg-gray pt-5 pb-5">
          <div className="container work-container">
            <div className="section-head col-sm-12">
              <h4>
                <span>Why Choose</span> Us?
              </h4>
              <p>
                Deep at requirement understanding - Innovative at designs -
                Friendly with Pocket - Perfect at Delivery time.
              </p>
            </div>
            <div className="row work-container-item-space ">
              {workData.map((curElem) => {
                const { id, logo, title, info } = curElem;
                return (
                  <>
                    <div className="col-12 col-lg-4 col-sm-6 text-center work-container-item work-container-subdiv">
                      <div className="item">
                        <span className="icon feature_box_col_two">
                          <i className={`fontawesome-style ${logo}`}></i>
                        </span>
                        <h2>{title}</h2>
                        <p className="main-hero-para-feature w-100">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </HowweworkSTyle>
    </>
  );
};

export default HowWeWork;
