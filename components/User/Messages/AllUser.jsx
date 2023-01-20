import React, { useEffect, useState } from "react";
import { getFriendsAccount } from "../../../Api/userApi/postRequest";

const AllUser = ({data,currentUserId}) => {

 const [userData, setUserData]=useState(null)
 useEffect(()=>{
   const userId = data.members.find((id)=>id != currentUserId)
   const getUserData= async () =>{
      const data= await getFriendsAccount(userId)
      setUserData(data[0])
   }
   getUserData()
 },[])
  return (
    <>
      <div className=" flex flex-row py-4 px-2 h-full w2/6 justify-center items-center border-b-2 hover:bg-[#bbc0c7]">
        <div className="">
          <img
            src={userData?.ProfileImg}
            className="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full ml-5">
          <div className="text-lg font-semibold">{userData?.username}</div>
          <span className="text-gray-500">online</span>
        </div>
      </div>
      <hr/>
    </>
  );
};

export default AllUser;
