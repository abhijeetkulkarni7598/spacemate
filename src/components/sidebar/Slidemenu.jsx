import Item from "antd/es/list/Item";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SlidebarData } from "./SlidebarData";
import { Dropdown } from "antd";

const SlidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    border-left: 4px solid gray;
    cursor: pointer;
    background-color: #6bc9d6;
    color:#29384f;
  transition: all 0.5s ease;


  }
`;
const DropdownLink = styled(Link)`
  background-color: var(--clr-dark-secondary);
  height: 60px;
  padding-left: 3rem;
  align-items: center;
  display: flex;
  text-decoration: none;
  color: var(--pr-text-color);
  font-size: 18px;
  transition: all 0.5s ease;
  color:black;
  &:hover {
    background-color:var(--clr-hover-DropdownLink);
    color:#29384f;

    
    // color: var(--clr-neutral-100);
    // color:red;
    cursor: pointer;
  }
`;
const SidebarLable = styled.span`
  margin-left: 20px;
`;
const SlidebarLabel = styled.span`
  margin-left: 15px;
`;
function Slidemenu({ item }) {
  const [subnavigation, setsubnavigation] = useState(false);
  const showSubnav = () => setsubnavigation(!subnavigation);
  
  return (
    <>
      <SlidebarLink to={item.path} onClick={item.subnav && showSubnav}>
        <div>
          {item.icon}
          <SlidebarLabel>{item.title}</SlidebarLabel>
        </div>
        <div>
          {item.subnav && subnavigation
            ? item.iconopened
            : item.subnav
            ? item.iconclosed
            : null}
        </div>
      </SlidebarLink>
      {subnavigation &&
        item.subnav.map((i, index) => {
          return (
            <DropdownLink to={i.path} key={index}>
              {i.icon}
              <SidebarLable>{i.title}</SidebarLable>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default Slidemenu;
