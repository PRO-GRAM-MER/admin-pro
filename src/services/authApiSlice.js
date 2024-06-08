import { setCredentials } from "../store/slices/auth/authSlice";
import { showToastWithTimeout } from "../store/toaster/toasterActions";
import {apiSlice} from "./apiSlice"


export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      onQueryStarted: async (arg, { queryFulfilled, dispatch, getState }) => {
        try {
          const { data } = await queryFulfilled;
          const { auth_token: token, expiry_timestamp: expirationTime } =
            data.data;

          dispatch(setCredentials({ token, expirationTime }));
          const { auth } = getState();
          console.log(auth.expirationTime);

          // Show success message
          dispatch(
            showToastWithTimeout(data.message.displayMessage, "#00A167")
          );

          // console.log("Login Successful! Response:", data, getState());
        } catch (err) {
          // Handle error
          dispatch(
            showToastWithTimeout(
              err.error.data.message.displayMessage,
              "#D32F2F"
            )
          );
        }
      },
    }),
    userProfile: builder.query({
      query: () => "profile",
      providesTags: ["UserProfile"],
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled;
          // Handle successful user profile fetch
        } catch (err) {
          console.error("Fetching user profile failed:", err.error);
          // Handle errors
          dispatch(
            showToastWithTimeout(
              err.error.data.message.displayMessage,
              "#D32F2F"
            )
          );
        }
      },
    }),
  }),
});

export const { useLoginMutation, useUserProfileQuery } = authApiSlice;
