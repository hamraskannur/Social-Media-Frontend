import React, { useEffect, useState } from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import Suggestion from "../../components/User/Suggestion/Suggestion";
import MyAccount from "../../components/User/ProfilePage/MyAccount";
import UserProtectRouter from "../../components/User/Routes/UserProtectRouter";
import BottomBar from "../../components/User/BottomBar/BottomBar";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

const MyAccountPage = () => {
  const { progress } = useSelector((state) => state.loader);

  return (
    <UserProtectRouter>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        loaderSpeed={1000}
      />
      {progress === 100 && (
        <div className="bg-[#F3F3F6]">
          <NavBar />
          <div className="flex ">
            <UserSideBar />
            <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
              <MyAccount />
            </div>
            <div className=" max-sm:hidden max-md:hidden max-lg:hidden">
              <Suggestion />
            </div>
          </div>
          <div className="md:hidden block sticky bottom-0 z-50 w-full ">
            <BottomBar />
          </div>
        </div>
      )}
    </UserProtectRouter>
  );
};

export default MyAccountPage;
