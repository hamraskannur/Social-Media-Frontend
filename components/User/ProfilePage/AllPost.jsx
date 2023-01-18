import React, { useEffect , useState} from "react";
import { useRouter } from 'next/router'
import Post from "../Posts/Posts";

import { getUserAllPost } from "../../../Api/userApi/postRequest";

const AllPost = ({userId ,type ,postCount}) => {
  const router = useRouter()
    const [posts, setPosts] = useState([])
  let newPost
  useEffect(() => {
    const getPost = async () => {
      if(userId){
        newPost = await getUserAllPost(userId);
        setPosts(newPost)
        postCount(newPost.length)
      }
    };
    getPost();
  },[userId]);
 const getOnePost = (userId,PostId) => {
  router.push(`/user/onePost/${userId}/${PostId}`)
 }



  return (
    <>
    <hr/>
      <div  className="grid grid-cols-3 gap-3 mt-5 ">
        {posts?.map((post) => (
          <div onClick={()=>getOnePost(post.userId,post._id)}>
            <img
              className="rounded-md overflow-hidden h-48 flex items-center object-cover"
              // src={post.img[0]}
              src='https://freepngimg.com/thumb/photography/59850-and-instagram-photography-black-logo-white.png  '
              alt="posts"
            />
          </div>
        ))}
      </div>
      <div className="items-center justify-center">

      </div>
      
        {posts.length === 0 && type &&  <div  className="">
           <div className="flex justify-center  bg-white">
              <img className="bg-white h-28" src='https://freepngimg.com/thumb/photography/59850-and-instagram-photography-black-logo-white.png  ' alt='img' />
           </div> 
            <div className="flex justify-center">
              <h1 className="not-italic">share your post</h1>
            </div>
        </div> 
        }
    </>
  );
};

export default AllPost;
