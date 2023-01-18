import React, { useEffect , useState} from 'react'
import ProfilePage from '../ProfilePage/ProfilePage';
import { getMyProfile } from '../../../Api/userApi/ProfileApi';

const MyAccount = () => {
    const [userData, setUserData] = useState()
    let newUserData;
    useEffect(()=>{
     const myProfile = async() =>{
      newUserData = await getMyProfile()
      setUserData(newUserData)
     }
     myProfile()
    },[userData])
   
  return (
    <>
    { userData && <ProfilePage userData={ userData[0] } type={true}/>}
    </>
  )
}

export default MyAccount
