import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SlidebarData = [

 
      {
        title: "Prospect Table",
        path: "/",
        icon: <FaIcons.FaClipboardList />,
      },
    
 
  {
    title: "Quotation",
    icon: <MdIcons.MdOutlineInventory2 />,
    iconclosed: <RiIcons.RiArrowDownFill />,
    iconopened: <RiIcons.RiArrowUpFill />,
    subnav: [
      {
        title: "Create Quotation",
        path: "/create",
        icon: <AiIcons.AiFillHome />,
    
      },
      {
        title: "Quotation Table",
        path: "/quotation",
        icon: <FaIcons.FaCartPlus />,
      }
    ],
  },
  {
    title: "Item Table",
    path: "/item",
    icon: <FaIcons.FaClipboardList />,
  },
 
 
 
];
