import { apiSlice } from "./apiSlice";
import Cookies from "js-cookie";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["login"],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const { auth_token, expiry_timestamp } = data.data;
          console.log(auth_token)
          Cookies.set("token",auth_token, );
          Cookies.set("expirationTime",expiry_timestamp, );
        } catch (err) {
          console.error("Login failed:", err);
        }
      },
    }),
    userProfile: builder.query({
      query: () => "/profile",
      providesTags: ["user"],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Fetching user profile failed:", err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useUserProfileQuery } = authApiSlice;
