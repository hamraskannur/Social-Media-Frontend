import React, { useState } from "react";
import {BiLogOut, BiHomeAlt, BiMessageSquareDetail, BiVideo } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { DiGitPullRequest } from "react-icons/di";
import Link from "next/link";
import { MdOutlineNotifications } from "react-icons/md";  
import AddPost from "../AddPost/AddPost";
FiSettings;

const BottomBar = () => {


  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "Messages", link: "/user/Messages", icon: BiMessageSquareDetail },  
    { name: "settings", link: "/user/settings", icon: FiSettings },
    { name: "Notifications", link: "/user/Notifications", icon: MdOutlineNotifications }
  ];
  const logOut = (e) => {
    localStorage.clear();
    dispatch(userActions.userLogout());
    router.push("/user/Login");
  };
  return (
    <>
    <div className="border-t-2 flex px-4 py-2 justify-between border-slate-700 bg-white bottom-0 h-14 fixed w-full">
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
          
            <div   onClick={() => logOut()} className="hover:bg-[#bbc0c7] rounded-md p-2">{React.createElement(BiLogOut, { size: "20" })}</div>

    </div>

    </>
  );
};

export default BottomBar;
