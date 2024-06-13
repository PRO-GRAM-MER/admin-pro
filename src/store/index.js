import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../services/apiSlice";
import toasterReducer from "./toaster/toasterSlice";
import vrpFilterReducer from "./slices/vrp/vrpFilterSlice";
import authReducer from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    toaster: toasterReducer,
   
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    vrpFilter: vrpFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
