import React, { useState } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";
import AllPost from "./AllPost";
import PrivatePage from "./privatePage";
import { followUser } from "../../../Api/userApi/followRequest";

const ProfilePage = ({ userData, type }) => {
  const [PostCount,setPostCount] =useState(0)
  const userId = useSelector((state) => state?.user?.Id);
  const [follow, setFollow] = useState(userData?.Followers.includes(userId));
  const [Requested, setRequested] = useState(
    userData?.Requests.includes(userId)
  );

  const editUser = () => {
    Router.push("/user/EditProfile");
  };
  const followUserHandler = async (followId) => {
    const response = await followUser({ followId });
    if (response.success) {
      if (!userData?.public) {
        if(follow){
          setFollow(false)
        }else{
          if (Requested) {
            setRequested(false);
            
          } else {
            setRequested(true);
          }
        }
       
      }else{
        if(follow){
          setFollow(false)
        }else{
          setFollow(true)
        }
      }
    } else {
    }
  };
  return (
    <div
      className=" bg-white  shadow:lg
   shadow-gray-300 rounded-md p-4 mb-5  ml-16  mt-6 "
    >
      <div className=" ">
        <div className="relative ">

        <div className="h-40 w-full overflow-hidden flex rounded-md justify-center items-center">
          <img
            src={
              userData?.coverImg
                ? userData.coverImg
                : "https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg"
            }
            alt="cover"
          />
        </div>
        <div className="absolute top-14 left-4">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500">
            <img
              className="bg-white"
              src={
                userData?.ProfileImg
                  ? userData?.ProfileImg
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
              }
              alt="avatars"
            />
          </div>
        </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-heavy-metal-800 ">
            {userData?.username ? userData.username : ""}
          </h2>
          <div className="text-heavy-metal-500 leading-4 mt-2">
            {userData?.name ? userData.name : ""},
          </div>
          <div className="text-heavy-metal-500 leading-4 mt-1">
            {userData?.city ? userData.city : "place"},
            {userData?.country ? userData.country : "country"}
          </div>
          <p className="my-2   max-w-6xl text-sm">
            {userData?.description ? userData?.description : ""}
          </p>
          <div className="flex justify-end mr-5">
            {type && (
              <button
                onClick={editUser}
                className="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-4 rounded-l"
              >
                edit
              </button>
            )}
          </div>

          <div className="flex">
            {!type && !follow && !Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                follow
              </button>
            )}
            {!type && follow && !Requested &&  (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                UnFollow
              </button>
            )}
            {!type && Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-500 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                Requested
              </button>
            )}
            {!type && (
              <button
                onClick={editUser}
                className=" ml-5 flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
              >
                Message
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex  mt-2  justify-center">
       {(userData?.public || type || follow) && <span className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
          <div className="flex justify-center">
            <p className="text-lg font-bold text-center ml-3">{PostCount}</p>
          </div>
          <p className="text-center">Posts</p>
        </span>}
        <span className="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
          <div className="flex ">
            <div className="text-lg font-bold text-center mt-1">
              {React.createElement(BsFillPeopleFill, { size: "20" })}
            </div>
            <p className="text-lg font-bold text-center ml-3">{userData?.Followers?.length}</p>
          </div>
          <p className="text-center">Followers</p>
        </span>
        <span className="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
          <div className="flex ">
            <div className="text-lg font-bold text-center mt-1">
              {React.createElement(BsFillPeopleFill, { size: "20" })}
            </div>
            <p className="text-lg font-bold text-center ml-3">{userData?.Following?.length}</p>
          </div>
          <p className="text-center">Following</p>
        </span>
      </div>

      <div className="flex items-center justify-center mt-5">
        {userData?.public ||
          (type && (
            <div>
              <div className="cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
                <h1>Post</h1>
              </div>
              <div className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
                <h1>Shots</h1>
              </div>
            </div>
          ))}
        {type && (
          <div className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110">
            <h1>Saved post</h1>
          </div>
        )}
      </div>
      {(userData?.public || type || follow) && (
        <div className="mt-5">
          <AllPost userId={userData?._id} type={type} postCount={setPostCount} />
        </div>
      )}
      {!userData?.public && !type && !follow && (
        <div className="shadow-md shadow-gray-400">
          <PrivatePage />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
