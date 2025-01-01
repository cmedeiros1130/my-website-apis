import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { RiArrowDownSFill, RiArrowUpFill } from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoMdHelpCircle />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoMdHelpCircle />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpFill />,
    subNav: [
      {
        title: "Overview",
        path: "/reports/reports1",
        icon: <IoMdHelpCircle />,
      },
      {
        title: "Report's 2",
        path: "/reports/reports2",
        icon: <IoMdHelpCircle />,
      },
      {
        title: "Report's 3",
        path: "/reports/reports3",
        icon: <IoMdHelpCircle />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <IoMdHelpCircle />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdHelpCircle />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpFill />,
    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <IoMdHelpCircle />,
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icon: <IoMdHelpCircle />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
  },
];
