import React from "react";
import * as FaIcons from "react-icons";
import * as AiIcons from "react-icons";
import * as IoIcons from "react-icons";
import * as RiIcons from "react-icons";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <AiIcons.IoIoPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <AiIcons.IoIoPaper />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Overview",
        path: "/reports/reports1",
        icon: <AiIcons.IoIoPaper />,
      },
      {
        title: "Report's 2",
        path: "/reports/reports2",
        icon: <AiIcons.IoIoPaper />,
      },
      {
        title: "Report's 3",
        path: "/reports/reports3",
        icon: <AiIcons.IoIoPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.IoIoPaper />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <AiIcons.IoIoPaper />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <AiIcons.IoIoPaper />,
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icon: <AiIcons.IoIoPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
