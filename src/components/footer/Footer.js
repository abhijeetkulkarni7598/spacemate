import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Style>
        <div className="footer-section">
          <div class="footer-content">
            <h3>
              <Logo />
            </h3>
            <p>
              Spacemate is your young innovative designing partner. We believe
              in innovative designs and best in quality delivery. We provide
              pocket friendly complete interior solutions.
            </p>

            <span className="social-media-call">
              <Link to="tel:+919960403244">
                <BsFillTelephoneFill className="nav-icons" />
                +91 9975149820
              </Link>
            </span>

            <ul class="socials">
              <li>
                <Link
                  to="https://www.facebook.com/spacemateinterior"
                  target="_blank">
                  <FaFacebookF className="footer-icon-fb" />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.instagram.com/spacemateinterior"
                  target="_blank">
                  <AiFillInstagram className="footer-icon instagramcl" />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.youtube.com/@aniketkat765"
                  target="_blank">
                  <AiFillYoutube className="footer-icon youtube1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@aniketkat765"
                  target="_blank">
                  <AiFillLinkedin className="footer-icon linkedin1" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@aniketkat765"
                  target="_blank">
                  <AiFillTwitterSquare className="footer-icon twitter1" />
                </Link>
              </li>
            </ul>
          </div>

          <div class="footer-bottom">
            <p>
              Copyright © <span id="year">{year} </span> <span> </span>
              <a href="#"> Spacemate Interior Solutions</a>
            </p>

            <div class="footer-menu">
              <ul class="f-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Style>
    </> //
  );
};

export default Footer;

const Style = styled.div`
  .footer-section {
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100%;
    padding-top: 40px;
    color: #fff;
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .footer-content h3 {
    font-size: 2.4rem;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
    line-height: 3rem;
  }

  .footer-content p {
    max-width: 500px;

    margin: 10px auto;

    line-height: 28px;

    font-size: 14px;

    color: #cacdd2;
  }
  .footer-content .social-media-call {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  ul {
    padding-left: 0 !important;
  }
  .socials {
    list-style: none;

    display: flex;

    align-items: center;

    justify-content: center;

    margin: 1rem 0 3rem 0;
  }

  .socials li {
    margin: 0 10px;
  }

  .socials a {
    text-decoration: none;

    color: #fff;

    padding: 5px;
  }

  .socials a i {
    font-size: 1.1rem;

    width: 20px;

    transition: color 0.4s ease;
  }
  .footer-icon-fb {
    font-size: 2.4rem;
  }
  .footer-icon {
    font-size: 2.4rem;
  }
  .socials a:hover .footer-icon {
    /* color: aqua; */
  }
  .socials a:hover .footer-icon-fb {
    color: #4267b2;
  }
  .socials .instagramcl:hover {
    color: #f09433;

    color: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 ); */
  }
  .socials .youtube1:hover {
    color: #ff0000;

    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 ); */
  }
  .socials .linkedin1:hover {
    color: #0077b5;

    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 ); */
  }
  .socials .twitter1:hover {
    color: #1da1f2;

    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 ); */
  }

  .footer-bottom {
    background: #000;

    /* width: 100vw; */

    padding: 20px;

    padding-bottom: 40px;

    text-align: center;
  }

  .footer-bottom p {
    float: left;

    font-size: 14px;

    word-spacing: 2px;
  }

  .footer-bottom p a {
    color: #ccc;

    font-size: 16px;

    text-decoration: none;
  }

  .footer-bottom span {
    text-transform: uppercase;
  }

  .footer-menu {
    float: right;
  }

  .footer-menu ul {
    display: flex;
  }

  .footer-menu ul li {
    padding-right: 10px;

    display: block;
  }

  .footer-menu ul li a {
    color: #cfd2d6;
    font-size: 1.5rem;
    text-decoration: none;
  }

  .footer-menu ul li a:hover {
    color: #27bcda;
  }

  @media (max-width: 500px) {
    .footer-bottom p {
      float: none;
    }

    .footer-menu ul {
      display: flex;

      margin-top: 10px;

      margin-bottom: 20px;

      text-align: center;
    }
  }
`;
