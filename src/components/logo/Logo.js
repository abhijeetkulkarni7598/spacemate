import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Spacemate_logo } from "../../assets/spacemate_logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <Style>
      <div className="logo-comp">
        <Link to="/">
          <Spacemate_logo className="logo-spacemate" />
        </Link>
      </div>
    </Style>
  );
};

export default Logo;

const Style = styled.div`
  .logo-comp {
    svg {
      width: 100px;
    }
  }

  @media screen and (max-width: 450px) {
    .logo-comp {
      svg {
        width: 100px;
        height: auto;
      }
    }
  }
`;
