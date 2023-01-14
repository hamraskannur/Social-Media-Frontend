import { configureStore } from '@reduxjs/toolkit';
import userAuth from './userAuth';
import adminAuth from './adminAuth';
import sideBar from './sideBar';

const Store = configureStore(
  { reducer: { user: userAuth.reducer, admin: adminAuth.reducer ,sideBar:sideBar.reducer } },
);

export default Store;
