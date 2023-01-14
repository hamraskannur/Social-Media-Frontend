// import { NextResponse } from "next/server";
// import { useDispatch, useSelector } from "react-redux";
// import { userActions } from "./redux/userAuth";

// export default function middleware(req) {
//   console.log("ansi");
//   const dispatch = useDispatch();
  
//   dispatch(
//     userActions.userAddDetails({
//       name: localStorage.getItem("userName"),
//       token: localStorage.getItem("token"),
//       Id: localStorage.getItem("UserId"),
//     })
//   );
//   const user = useSelector((state) => state?.user?.userToken);
//   let url=req.url
//   if(!user && !url.includes('/user/Login') ){
//       return NextResponse.redirect('http://localhost:3000/user/Login')
//   } 

// }
