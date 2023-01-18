import React,{useState ,useEffect } from 'react'
import { useRouter } from "next/router"; 
import ProfilePage from "../ProfilePage/ProfilePage";
import { getFriendsAccount } from '../../../Api/userApi/postRequest';

const FriendsAccount = () => {
    const router = useRouter()
    const { userId }  = router.query
    const [userData, setUserData] = useState([])
    
    useEffect(()=>{
      const myProfile = async() =>{
     if(userId){
      const newUserData = await getFriendsAccount(userId)
        setUserData(newUserData)
     }
    }
    myProfile()
 },[userId])

  return (
    <div>
   {userData[0] && <ProfilePage userData={userData[0]} type={false}  />}
    </div>
  )
}

export default FriendsAccount
