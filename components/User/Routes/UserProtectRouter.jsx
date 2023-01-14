/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../redux/userAuth';

function UserProtectRouter(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.userAddDetails({ name: localStorage.getItem('userName'), token: localStorage.getItem('token') , Id: localStorage.getItem('UserId')}));
  }, []);

  const user = useSelector((state) => state?.user?.userToken);
  if (user) {
    return props.children;
  }
  router.push('/user/Login')
}
export default UserProtectRouter;

// import { useDispatch, useSelector } from "react-redux";
// import react,{ useEffect } from "react";
// import { userActions } from '../../../redux/userAuth';
// import { useRouter } from "next/router";
// import { redirect } from "next/dist/server/api-utils";
// import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";


// export const ProtectRoute = ({ children }) => {
// const dispatch = useDispatch();
// const router = useRouter();
// useEffect(() => {
//   dispatch(
//     userActions.userAddDetails({
//       name: localStorage.getItem("userName"),
//       token: localStorage.getItem("token"),
//       Id: localStorage.getItem("UserId"),
//     })
//   );
// }, []);

// // const user = useSelector((state) => state?.user?.userToken);
// //   if (!user || (!user && window.location.pathname !== "/user/Login")) {
// //        console.log("razi");
// //   }
//   return children;
// };
