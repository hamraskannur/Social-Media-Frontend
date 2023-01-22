import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {  getOnePost } from "../../../../Api/userApi/postRequest";
import NavBar from "../../../../components/User/NavBar/NavBar";
import UserProtectRouter from '../../../../components/User/Routes/UserProtectRouter'
import UserSideBar from "../../../../components/User/UserSideBar/UserSideBar";
import OnePost from "../../../../components/User/onePost/OnePost";
import BottomBar from "../../../../components/User/BottomBar/BottomBar";

const OnePostPage = () => {
  const [post, setPosts] = useState();
  const router = useRouter();
  const { userId, PostId } = router.query;

  let newPost;
  useEffect(() => {
    const getPost = async () => {
      console.log("newPost");
      newPost = await getOnePost(userId, PostId);
      console.log(newPost);
      setPosts(newPost);
    };
    getPost();
  }, []);

  return (
    <UserProtectRouter>
      <div className="bg-[#F3F3F6]">
        <NavBar />
        <div className="flex ">
          <UserSideBar />
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
            {/* <OnePost /> */}
          </div>
        </div>
        <div className="md:hidden block sticky bottom-0  z-50 w-full ">
          <BottomBar />
        </div>
      </div>
    </UserProtectRouter>
  );
};

export default OnePostPage;
