import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import { useSelector } from "react-redux";

export const SlidebarDataSuper = [
  {
    title: "Sales",
    icon: <MdIcons.MdOutlineInventory2 />,
    iconclosed: <RiIcons.RiArrowDownFill />,
    iconopened: <RiIcons.RiArrowUpFill />,
    subnav: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Enquiry Table",
        path: "/enquiry-table",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Prospect Table",
        path: "/prospect",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Client Table",
        path: "/client",
        icon: <FaIcons.FaClipboardList />,
      },
    
      {
        title: "Quotation Table",
        path: "/quotation",
        icon: <MdIcons.MdOutlineInventory2 />,
      },
    ],
  },
  {
    title: "Design Client",
    path: "/design-client",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Execution Table",
    path: "/execution-table",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Accounts",
    icon: <MdIcons.MdOutlineInventory2 />,
    iconclosed: <RiIcons.RiArrowDownFill />,
    iconopened: <RiIcons.RiArrowUpFill />,
    subnav: [
      {
        title: "Vendor Table",
        path: "/vendor",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "HR",
    icon: <MdIcons.MdOutlineInventory2 />,
    iconclosed: <RiIcons.RiArrowDownFill />,
    iconopened: <RiIcons.RiArrowUpFill />,
    subnav: [
      {
        title: "Employee Table",
        path: "/employee",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "Setting",
    icon: <MdIcons.MdOutlineInventory2 />,
    iconclosed: <RiIcons.RiArrowDownFill />,
    iconopened: <RiIcons.RiArrowUpFill />,
    subnav: [
      {
        title: "Item Table",
        path: "/item",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "Order Table",
    path: "/order-table",
    icon: <FaIcons.FaClipboardList />,
  },



  
  
 

];
export const SlidebarDataAdmin = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Prospect Table",
    path: "/client",
    icon: <FaIcons.FaClipboardList />,
  },

  {
    title: "Quotation Table",
    path: "/quotation",
    icon: <MdIcons.MdOutlineInventory2 />,
  },
  {
    title: "Item Table",
    path: "/item",
    icon: <FaIcons.FaClipboardList />,
  },

  {
    title: "Vendor Table",
    path: "/vendor",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Employee Table",
    path: "/employee",
    icon: <FaIcons.FaClipboardList />,
  },
];
export const SlidebarDataSalesAndMarketing = [

  {
    title: "Enquiry Table",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Prospect Table",
    path: "/prospect",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Client Table",
    path: "/client",
    icon: <FaIcons.FaClipboardList />,
  },

  {
    title: "Quotation Table",
    path: "/quotation",
    icon: <MdIcons.MdOutlineInventory2 />,
  },
  {
    title: "Item Table",
    path: "/item",
    icon: <FaIcons.FaClipboardList />,
  },

];
export const SlidebarDataExecutionarHead = [

  {
    title: "Requirement",
    path: "/create-enquiry/2",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Floor Plan",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Unit Size",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Estimate/Quotation",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Furniture Plan",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },
  {
    title: "Mood Board",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },


];
export const SliderForDesignHead = [

  {
    title: "Design Client",
    path: "/design-client",
    icon: <FaIcons.FaClipboardList />,
  },


];
export const SlidebarDataExecutionarHead2 = [

  {
    title: "Enquiry Table",
    path: "/enquiry-table",
    icon: <FaIcons.FaClipboardList />,
  },

  {
    title: "Project",
    path: "/execution-table",
    icon: <FaIcons.FaClipboardList />,
  },
];
