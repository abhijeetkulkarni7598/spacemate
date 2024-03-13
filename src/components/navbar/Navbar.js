import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./navbar.css";
import { ReactComponent as Spacemate_logo } from "../../assets/spacemate_logo.svg";
import Logo from "../logo/Logo";
import PayOnline from "../button/PayOnline";
import PayNow from "../../pages/view/PayNow";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Logo />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Turnkey Interior</Link>
            </li>
            <li>
              <Link to="/display">Display Solutions</Link>
            </li>
            <li>
              <Link to="/design">Design Solutions</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <PayOnline title="Pay Online" />
          {/* <PayNow title="Pay Online"/> */}
          {/*<div className="conatct-section">
            <ul className="social-media-desktop">
              <li></li>
              <li>
                <Link
                  to="https://facebook.com/spacemateinterior"
                  target="_blank">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/spacemateinterior/"
                  target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com">
                  <i className="fab fa-twitter" target="_blank"></i>
                </Link>
              </li>
            </ul>
            <div>
              <span className="social-media-call">
                <Link to="tel:+919960403244">
                  <BsFillTelephoneFill className="nav-icons" />
                  +91 9975149820
                </Link>
              </span>
            </div>
        </div>*/}

          <div className="navbar-header hamburger-menu mt-3">
            <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i className="fas fa-bars"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
