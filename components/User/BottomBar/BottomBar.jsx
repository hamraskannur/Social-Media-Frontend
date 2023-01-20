import React, { useState } from "react";
import { BiHomeAlt, BiMessageSquareDetail, BiVideo } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { DiGitPullRequest } from "react-icons/di";
import Link from "next/link";
import AddPost from "../AddPost/AddPost";
FiSettings;

const BottomBar = () => {


  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "Messages", link: "/user/Messages", icon: BiMessageSquareDetail },
    {
      name: "Notifications",
      link: "/user/notifications",
      icon: MdOutlineNotifications,
    },
    { name: "settings", link: "/user/settings", icon: FiSettings },
  ];

  return (
    <>
    <div className="border-t-2 flex px-4 py-2 justify-between border-slate-700 bg-white h-14">
        {menus.map((menu)=>(
            <Link
            href={`${menu?.link}`}
            key={menu?.name}
            >
            <div className="hover:bg-[#bbc0c7] rounded-md p-2">{React.createElement(menu?.icon, { size: "20" })}</div>
            </Link>
        ))}

            <Link
            href="/user/Friends"
            >
            <div  className="hover:bg-[#bbc0c7] rounded-md p-2">{React.createElement(DiGitPullRequest, { size: "20" })}</div>
            </Link>

    </div>

    </>
  );
};

export default BottomBar;
