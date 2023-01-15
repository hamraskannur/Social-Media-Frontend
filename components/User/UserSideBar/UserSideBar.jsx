import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  BiLogOut,
  BiHomeAlt,
  BiMessageSquareDetail,
  BiVideo,
} from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { DiGitPullRequest } from "react-icons/di";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";FiSettings
import { sideBarAction } from "../../../redux/sideBar";
import { useRouter } from "next/router";
import AddPost from "../AddPost/AddPost";
import { userActions } from "../../../redux/userAuth";

function UserSideBar() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "Messages", link: "/user/Messages", icon: BiMessageSquareDetail },
    { name: "Notifications",link: "/user/notifications", icon: MdOutlineNotifications},
    { name: "Request", link: "/user/request", icon: DiGitPullRequest },
    { name: "Create", link: "/user/create", icon: BiVideo },
    { name: "settings", link: "/user/settings", icon: FiSettings },
  ];
  
  const sideBar = useSelector((state) => state?.sideBar?.sideBar);

  const logOut = (e) => {
    localStorage.clear();
    dispatch(userActions.userLogout());
    router.push("/user/Login");
  };

  return (
    <div className="h-full sticky top-16 ">
      <div className=" max-sm:absolute max-md:absolute max-lg:absolute border-r-4 border-slate-700 ">
        <div className={`bg-white h-[92vh]  ${sideBar ? "w-72" : "w-16"} duration-500   text-black px-4  `}>
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => dispatch(sideBarAction.changeSideBar())}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                href={`${menu?.link}`}
                key={menu?.name}
                className={`${router.pathname === menu?.link ? "bg-[#bbc0c7] " : ""} group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    sideBar && "hidden"
                  } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            <button
              type="button"
              onClick={() => setShowModal(!showModal)}
              className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <div>{React.createElement(AiOutlineSave, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: "1000ms" }}
                className={`whitespace-pre duration-500 ${
                  !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Add Post
              </h2>
              <h2
                className={`${
                  sideBar && "hidden"
                } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
              >
                Add Post
              </h2>
            </button>
          </div>

          <div
            onClick={() => logOut()}
            className="mt-4 flex flex-col gap-4 relative"
          >
            <button
              type="button"
              className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <div>{React.createElement(BiLogOut, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: "1000ms" }}
                className={`whitespace-pre duration-500 ${
                  !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Log out
              </h2>
              <h2
                className={`${
                  sideBar && "hidden"
                } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
               rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit`}
              >
                Log out
              </h2>
            </button>
          </div>
        </div>
      </div>
      <AddPost AddPost={showModal} setAddPost={setShowModal} />
    </div>
  );
}

export default UserSideBar;
