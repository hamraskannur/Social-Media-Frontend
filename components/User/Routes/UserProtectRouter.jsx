import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/userAuth";
import { useRouter } from "next/router";
import { getMyProfile } from "../../../Api/userApi/profileApi";

const UserProtectRouter = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const token = useSelector((state) => state?.user?.userToken);
  let userData;
  useEffect(() => {
    const publicFu = async () => {
      if (token || localStorage.getItem("token")) {
        userData = await getMyProfile();
        dispatch(
          userActions.userAddDetails({
            token: localStorage.getItem("token"),
            user: userData[0],
          })
        );
      }
    };
    publicFu();
    if (!localStorage.getItem("token")) {
      router.push("/user/login");
    }
  }, [token]);

  if (token) {
    return children;
  }
};

export default UserProtectRouter;
