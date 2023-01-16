import { userApi } from "../../utils/Apis/Apis";

export const addPost = async (formData) => {
  const { data } = await userApi.post("/addPost", formData, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"), 
    },
  });
  return data;
};

export const getAllProduct = async () => {
  const { data } = await userApi.get("/getMyPost", {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return data.allPost;
};

export const getAllPosts = async () => {
  const { data } = await userApi.get("/getAllPosts", {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return data.AllPosts;
};

export const getOnePost = async (userId, PostId) => {
  console.log(userId, PostId);
  const { data } = await userApi.get(`/getOnePost/${userId}/${PostId}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const getFriendsAccount = async (userId) => {
  const { data } = await userApi.get(`/getFriendsAccount/${userId}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return data.FriendsAccount;
};

export const likePostReq = async (PostId) => {
  const { data } = await userApi.get(`/likePostReq/${PostId}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return data;
};

export const postComment = async (postId, comment) => {
  const { data } = await userApi.post(
    `/postComment/${postId}`,
    { comment },
    {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  if (data.success) {
    const newComment = {
      ...data.comment,
      userId: data.comment.userId._id,
      firstName: data.comment.userId.username,
    };

    return newComment;
  }
};

export const getComments = async (postId) => {
  const { data } = await userApi.get(`/getComment/${postId}`,
    {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  if (data.success) {
    return data.comments;
  }
};


export const getUserAllPost = async (userId) => {
  const { data } = await userApi.get(`/getUserAllPost/${userId}`,
  {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return data.AllPosts
}