import { redirect } from "next/dist/server/api-utils";
import React from "react";
import NavBar from "../components/User/NavBar/NavBar";
import Post from "../components/User/Posts/Post";
import Suggestion from "../components/User/Suggestion/Suggestion";
import UserSideBar from "../components/User/UserSideBar/UserSideBar";
import UserProtectRouter from "../components/User/Routes/UserProtectRouter";

function Home() {
  return (
    <UserProtectRouter>
    <div className="bg-[#F3F3F6]">
      <NavBar />
      <div className="flex ">
        <UserSideBar />
        <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <Post/>
        </div>
        <div className=" max-sm:hidden max-md:hidden max-lg:hidden">
          <Suggestion />
        </div>
      </div>
    </div>
    </UserProtectRouter>
  );
}

export default Home;
