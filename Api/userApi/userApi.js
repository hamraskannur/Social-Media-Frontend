import { userApi } from "../../utils/Apis/Apis";

export const getMyProfile = async () => {
  const { data } = await userApi.get("/getMyProfile", {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  
  return data.user
};


export const getUserData =async () =>{
  const { data } = await userApi.get('/getUserData', {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  
  return data.user
}