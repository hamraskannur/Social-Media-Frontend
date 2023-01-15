import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/userAuth";
import { useRouter } from "next/router";

const UserProtectRouter = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state?.user?.userToken);

  useEffect(() => {
    const publicFu = () => {
      dispatch(
        userActions.userAddDetails({
          name: localStorage.getItem("userName"),
          token: localStorage.getItem("token"),
          Id: localStorage.getItem("UserId"),
        })
      );
    };
    publicFu();
  }, [user]);

  if (user) {
    return children;
  }
  if (user === null) {
    router.push("/user/Login");
  }
};

export default UserProtectRouter;
