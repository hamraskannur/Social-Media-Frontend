import React,{ useState , useEffect} from 'react';
import { useRouter } from "next/router"; 
import { getAllPosts , getOnePost} from '../../../../Api/userApi/postRequest'
import NavBar from '../../../../components/User/NavBar/NavBar'
import Suggestion from '../../../../components/User/Suggestion/Suggestion'
import UserSideBar from '../../../../components/User/UserSideBar/UserSideBar'

const OnePostPage = () => {
   const [post ,setPosts] = useState()
   const router = useRouter()
   const { userId, PostId }  = router.query
  

   let newPost
   useEffect(() => {
    const getPost = async () => {
        newPost = await getOnePost(userId,PostId)
        setPosts(newPost)
      };
      getPost();
   },[])


  return (
    <div className='bg-[#F3F3F6]'>
      <NavBar />
      <div className="flex ">
        <UserSideBar/>
        <div className='w-6/12 max-sm:w-full max-md:w-full max-lg:w-full'>
        </div>
        <div className=' max-sm:hidden max-md:hidden max-lg:hidden'>
        <Suggestion />
        </div>
      </div>
    </div>
  )
}

export default OnePostPage

