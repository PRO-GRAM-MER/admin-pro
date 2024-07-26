import { apiSlice } from "./apiSlice";

export const priorityListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updatePriority: builder.mutation({
      query: ({ category, seller_id, lot_id }) => ({
        url: `${category}/priority?seller_id=${seller_id}&lot_id=${lot_id}`,
        method: 'PATCH',
      }),
      extraOptions: {
        maxAge: 0,
      },
    }),
  }),
});

export const { useUpdatePriorityMutation } = priorityListSlice;
