import React from "react";
import "./PhoneCall.css";
import { BsFillTelephoneFill } from 'react-icons/bs';

const PhoneCall = () => {
  return (
    <div>
      <a href="tel:9975149820" class="float-p">
        <BsFillTelephoneFill className="m-float"/>
      </a>
    </div>
  );
};

export default PhoneCall;
