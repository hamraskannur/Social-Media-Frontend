import { userApi } from '../../utils/Apis/Apis';

export const signUp = async (formData) => {
  const response = await userApi.post('/register', formData);
  return response.data.userSignup;
};
export const verifySignUp = async (id, token) => {
  const response = await userApi.get(`/verifySignUp/${id}/${token}`);
  return response.data;
};

export const login = async (formData) => {
  const response = await userApi.post('/login', formData, { withCredentials: true });
  return response.data.userLogin;
};


export const GoogleLogin =async (formData) => {
  const { data } = await userApi.post('/googleLogin', formData, { withCredentials: true });
  return data.userLogin;
}
