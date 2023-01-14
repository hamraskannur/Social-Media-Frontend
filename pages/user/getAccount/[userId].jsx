import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; 
import NavBar from "../../../components/User/NavBar/NavBar";
import UserSideBar from "../../../components/User/UserSideBar/UserSideBar";
import Suggestion from "../../../components/User/Suggestion/Suggestion";
import ProfilePage from "../../../components/User/ProfilePage/ProfilePage";
import { getFriendsAccount } from "../../../Api/userApi/postRequest";

const FriendsAccount = () => {
     const router = useRouter()
     const { userId }  = router.query
     const [userData, setUserData] = useState([])
     let newUserData;
     
     useEffect(()=>{
       const myProfile = async() =>{
      if(userId){
        newUserData = await getFriendsAccount(userId)
         setUserData(newUserData)
      }
     }
     myProfile()
  },[userId])

  return (
    <div>
      <div className="bg-[#F3F3F6]">
        <NavBar />
        <div className="flex ">
          <UserSideBar />
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
            <ProfilePage userData={userData[0]} type={false} />
          </div>
          <div className=" max-sm:hidden max-md:hidden max-lg:hidden">
            <Suggestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsAccount;