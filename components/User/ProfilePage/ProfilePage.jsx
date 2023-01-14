import React, { useEffect, useState } from "react";
import Router from "next/router";
import { BsFillPeopleFill } from "react-icons/bs";
import AllPost from "./AllPost";

const ProfilePage = ({ userData , type }) => {
  const editUser = () => {
    Router.push("/user/EditProfile");
  };

  return (
    <div
      className=" bg-white  shadow:lg
   shadow-gray-300 rounded-md p-4 mb-5  ml-16  mt-6 "
    >
      <div className="relative">
        <div className="h-40 w-full overflow-hidden flex rounded-md justify-center items-center">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg  "
            alt="cover"
          />
        </div>
        <div className="absolute top-14 left-4">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500">
            <img
              // src={userData[0]?.userId?.img ? userData[0].userId.img:"data:image/png;base64,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"}
              src="data:image/png;base64,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"
              alt="avatars"
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-heavy-metal-800">
            {userData?.username ? userData.username : ""}
          </h2>
          <div className="text-heavy-metal-500 leading-4">
            {userData?.place ? userData.place : "place"},
            {userData?.country
              ? userData.country
              : "country"}
          </div>
          <p className="my-3 max-w-6xl text-sm">
            {userData?.description
              ? userData?.description
              : ""}
          </p>
          <div className="flex justify-end mr-5">
          {type && (
        <button
          onClick={editUser}
          class="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-4 rounded-l"
        >
          edit
        </button>
      )}
          </div>
          <div className="flex">

   {!type && (
        <button
          onClick={editUser}
          class="flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
        >
          follow
        </button>
      )}
       {!type && (
        <button
          onClick={editUser}
          class=" ml-5 flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
        >
          Message
        </button>
      )}
          </div>
        </div>
      </div>
      <div className="flex  mt-10  justify-center">
        <span className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
          <div className="flex justify-center">
            <p className="text-lg font-bold text-center ml-3">2</p>
          </div>
          <p className="text-center">Posts</p>
        </span>
        <span className="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
          <div className="flex ">
            <div className="text-lg font-bold text-center mt-1">
              {React.createElement(BsFillPeopleFill, { size: "20" })}
            </div>
            <p className="text-lg font-bold text-center ml-3">2</p>
          </div>
          <p className="text-center">Followers</p>
        </span>
        <span className="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
          <div className="flex ">
            <div className="text-lg font-bold text-center mt-1">
              {React.createElement(BsFillPeopleFill, { size: "20" })}
            </div>
            <p className="text-lg font-bold text-center ml-3">2</p>
          </div>
          <p className="text-center">Following</p>
        </span>
      </div>  
     
    

      <div className="flex items-center justify-center mt-5">
        <div className="cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
          <h1>Post</h1>
        </div>
        <div className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
          <h1>Shots</h1>
        </div>
        {type && (
          <div className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
            <h1>Saved post</h1>
          </div>
        )}
      </div>
      <div className="mt-5">
        <AllPost userId={userData?._id} type={type} />
      </div>
    </div>
  );
};

export default ProfilePage;
