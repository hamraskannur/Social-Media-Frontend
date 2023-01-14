import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from "../../../redux/userAuth"
import { useRouter } from "next/router";


async function  PublicRoute ({children}) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const publicFu = async () =>{
      await dispatch(userActions.userAddDetails({ name: localStorage.getItem('userName'), token: localStorage.getItem('token') , Id: localStorage.getItem('UserId')  }));
    }
    publicFu()
  }, []);
  const user = useSelector((state) => state?.user?.userToken);

  console.log(user);
  if (user) {
    return router.push('/');
  }else{
    return children;

  }
}

export default PublicRoute;
