import { userApi } from '../../utils/Apis/Apis';

export const signUp = async (formData) => {
  const { data } = await userApi.post('/register', formData);
  return data.userSignup;
};
export const verifySignUp = async (id, token) => {
  const {data} = await userApi.get(`/verifySignUp/${id}/${token}`);
  return data;
};

export const login = async (formData) => {
  const { data } = await userApi.post('/login', formData, { withCredentials: true });
  return data.userLogin;
};


export const GoogleLogin =async (formData) => {
  const { data } = await userApi.post('/googleLogin', formData, { withCredentials: true });
  return data.userLogin;
}
