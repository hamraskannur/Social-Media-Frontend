/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

const userAuth = createSlice({
  name: 'user',
  initialState: {
    userToken: '',
    userName: '',
    Id:''
  },
  reducers: {
     userAddDetails(state, actions) {
      const newItem = actions.payload;
      state.userName = newItem.name;
      state.userToken = newItem.token;
      state.Id=newItem.Id
    },
    userLogout(state) {
      state.userName = '';
      state.userToken = '';
      state.Id = ""
    },
  },
});

export const userActions = userAuth.actions;

export default userAuth;
