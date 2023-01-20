import { userApi } from "../../utils/Apis/Apis";

export const followUser = async (formData) => {
  const { data } = await userApi.put("/followUser", formData, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return data;
};


export const getAllRequest = async () => {
    const { data } = await userApi.get('/getAllRequest', {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })

    return data.Request
}

export const acceptRequest = async (formData) => {
    const { data } = await userApi.put('/acceptRequest',formData, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })

    return data
}

export const deleteRequests = async (deleteId) => {
    const { data } = await userApi.delete(`/deleteRequests/${deleteId}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })

    return data
}