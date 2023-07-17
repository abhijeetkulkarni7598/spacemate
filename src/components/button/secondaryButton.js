import React from 'react'
import { Link } from 'react-router-dom';
import './secondaryButton.css';

const SecondaryButton = (props) => {
    return (
        <>
            <div className="col-12 col-lg-12 m-0 text-center button-brochure-container">
            
            <Link to={props.pagelink} className="download-brochure-button-grad">
                <svg width="277" height="62">
                <defs>
                    <linearGradient id="grad1">
                        <stop offset="0%" stop-color="rgba(222, 205, 43, 1);"/>
                        <stop offset="100%" stop-color="#cab91d;" />
                    </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                </svg>
                <span>{props.title}</span>
             </Link>   
            
            </div>
        </>
    )
}

export default SecondaryButton
