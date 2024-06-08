// // store.js
// import { configureStore } from "@reduxjs/toolkit";

// import backdropReducer from "./backdropSlice";
import toasterReducer from "./toaster/toasterSlice";
// import phoneNumberReducer from "./authentication/phoneNumberSlice";
// import spinnerReducer from "./spinnerSlice";

// export const store = configureStore({
//   reducer: {
//     backdrop: backdropReducer,
//     toaster: toasterReducer,
//     phoneNumber: phoneNumberReducer,
//     spinner: spinnerReducer,
//     // Add other reducers if any
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../services/apiSlice";
import authReducer from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    toaster: toasterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
