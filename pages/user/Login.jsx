import React, { useEffect } from "react";
import LoginPage from "../../components/User/Login/Login";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import PublicRoute from "../../components/User/Routes/PublicRoute";

const Login = () => {
  const router = useRouter();
  const user = useSelector((state) => state?.user?.userToken);
  useEffect(() => {
    console.log(user, 0);
    if (user) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {/* <PublicRoute> */}
        <LoginPage />
      {/* </PublicRoute> */}
    </>
  );
};

export default Login;
