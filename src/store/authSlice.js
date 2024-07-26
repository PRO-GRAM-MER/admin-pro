import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../services/apiSlice";


const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiSlice.util.resetApiState, (state) => {
      // Optional: Reset any additional state if needed
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
