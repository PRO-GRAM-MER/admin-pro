// // actionModalSlice.js
// import { apiSlice } from "./apiSlice";

// export const actionModalAPiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     rejectRequest: builder.mutation({
//       query: ({ category, request_id, remarks }) => ({
//         url: `${category}?request_id=${request_id}&status=2&remarks=${remarks}`,
//         method: "PATCH",
//       }),
//       invalidatesTags: ["vrp"],
//     }),
//     approveRequest: builder.mutation({
//       query: ({ category, request_id }) => ({
//         url: `${category}?request_id=${request_id}&status=1`,
//         method: "PATCH",
//       }),
//       invalidatesTags: ["vrp"],
//     }),
//   }),
// });

// export const { useRejectRequestMutation, useApproveRequestMutation } =
//   actionModalAPiSlice;

// actionModalApiSlice.js
import { apiSlice } from "./apiSlice";

export const actionModalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    rejectRequest: builder.mutation({
      query: ({ category, request_id, remarks }) => ({
        url: `${category}?request_id=${request_id}&status=2&remarks=${remarks}`,
        method: "PATCH",
      }),
      onQueryStarted: async ({ category, request_id }, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(apiSlice.util.updateQueryData('getCategoryList', { category }, draft => {
            const index = draft.entities[request_id];
            if (index) {
              index.status = 2;
              index.remarks = data.remarks;
            }
          }));
        } catch (err) {
          console.error("Reject request failed:", err);
        }
      },
      invalidatesTags: (result, error, { category, request_id }) => [
        { type: category, id: request_id },
      ],
    }),
    approveRequest: builder.mutation({
      query: ({ category, request_id }) => ({
        url: `${category}?request_id=${request_id}&status=1`,
        method: "PATCH",
      }),
      onQueryStarted: async ({ category, request_id }, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(apiSlice.util.updateQueryData('getCategoryList', { category }, draft => {
            const index = draft.entities[request_id];
            if (index) {
              index.status = 1;
            }
          }));
        } catch (err) {
          console.error("Approve request failed:", err);
        }
      },
      invalidatesTags: (result, error, { category, request_id }) => [
        { type: category, id: request_id },
      ],
    }),
  }),
});

export const { useRejectRequestMutation, useApproveRequestMutation } = actionModalApiSlice;
