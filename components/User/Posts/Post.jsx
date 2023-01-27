import useSWR from "swr";
import React,{ useState, useEffect } from "react";
import { getAllPosts } from "../../../Api/userApi/postRequest";
import Posts from "./Posts";
import { useSelector } from "react-redux";
const Post = () => {
  const [posts, setPosts] = useState([]);
  let newPost;
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    const getPost = async () => {
      newPost = await getAllPosts();
      newPost = newPost?.reverse();
      setPosts(newPost);
    };
    getPost();
  }, [update]);

  return (
    <div>
      {posts.map((post) => (
        <Posts post={post} key={post?._id} onePost={false} />
      ))}
    </div>
  );
};

export default Post;
