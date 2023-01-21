import { userApi } from "../../utils/Apis/Apis";

export const userChat = async(userId) => {
   const { data } =await userApi.get(`/chat/${userId}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }) 
  return data
}


export const getMessages = async (chatId) => {
   const { data } =await userApi.get(`/getMessages/${chatId}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return data
}

export const AddMessage = async (formData) => {
  const { data } = await userApi.post('/addMessage',formData,{
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return data
}

export const createChat = async (formData) => {
  console.log(formData);
  const { data } = await userApi.post('/createChat',formData,{
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return data
}