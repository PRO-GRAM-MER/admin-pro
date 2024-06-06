import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    expirationTime: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.expirationTime = action.payload.expirationTime;
      Cookies.set('token', action.payload.token);
      Cookies.set('expirationTime', action.payload.expirationTime);
    },
    clearCredentials: (state) => {
      state.token = null;
      state.expirationTime = null;
      Cookies.remove('token');
      Cookies.remove('expirationTime');
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
