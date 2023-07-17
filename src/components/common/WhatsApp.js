import React from "react";
import "./WhatsApp.css";
import { FaWhatsappSquare } from 'react-icons/fa';


const WhatsApp = () => {
  

  return (
    <div>
      <a href="https://wa.me/+919975149820" class="float">
        <FaWhatsappSquare className="my-float"/>
      </a>
    </div>
  );
};

export default WhatsApp;
