import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "../../Api/userApi/userAuthRequest";
import { userActions } from "../../redux/userAuth";
import { useSession, signIn, signOut } from "next-auth/react";

 function GoogleLoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  console.log(session?.user?.email);
  console.log(session?.user?.name);
  if (session?.user?.email) {
 
    const email = session?.user?.email;
    const name = session?.user?.name;
    const userData = {
      email: email,
      name: name
    };
    GoogleLogin(userData).then((data) => {
      if (data.Status) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", true);

        dispatch(
          userActions.userAddDetails({
            user: data.user,
            token: data.token,
          })
        );
        router.push("/");

        router.push("/");
      }
    });
    router.push("/");
  }

  return <div></div>;
}

export default GoogleLoginPage;