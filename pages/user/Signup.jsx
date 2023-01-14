import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import SignupPage from "../../components/User/Signup/Signup"

const Signup = () => {
  const router = useRouter()
  const user = useSelector((state) => state?.user?.userToken);
 
  return (
    <>
      <SignupPage />
    </>
  )
}

export default Signup
