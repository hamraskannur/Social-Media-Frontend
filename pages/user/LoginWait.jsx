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
        localStorage.setItem("userName", data.name);
        localStorage.setItem("token", data.token);
        localStorage.setItem("UserId", data.id);

        dispatch(
          userActions.userAddDetails({
            name: data.name,
            token: data.token,
            Id: data.id,
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