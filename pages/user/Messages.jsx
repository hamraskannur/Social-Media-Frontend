import React from 'react'
import NavBar from '../../components/User/NavBar/NavBar';
import Message from "../../components/User/Messages/Message"
import UserSideBar from '../../components/User/UserSideBar/UserSideBar';
import Suggestion from '../../components/User/Suggestion/Suggestion';

const MessagesPage = () => {
  
  return (
     <div className='bg-[#F3F3F6]'>
     <NavBar />
     <div className="flex ">
       <UserSideBar/>
       <div className='w-full max-sm:w-full max-md:w-full max-lg:w-full'>
       <Message/>
        </div>
         
     </div>
   </div>    
  )
}

export default MessagesPage
