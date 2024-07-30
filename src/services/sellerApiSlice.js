import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const sellerListAdapter = createEntityAdapter({
  selectId: (seller) => seller.id,
});

const initialState = sellerListAdapter.getInitialState();

export const sellerListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSellerList: builder.query({
      query: ({ category }) => `${category}/sellers`,
      transformResponse: (responseData) => {
        const loadedSellerList = responseData.data;
        console.log(loadedSellerList);
        return sellerListAdapter.setAll(initialState, loadedSellerList);
      },
      providesTags: (result, error, arg) => {
        if (!result) {
          return [
            { type: `${arg.category}sellers`, id: `${arg.category}sellerList` },
          ];
        }
        return [
          { type: `${arg.category}sellers`, id: `${arg.category}sellerList` },
          ...result.ids.map((id) => ({ type: `${arg.category}sellers`, id })),
        ];
      },
    }),
  }),
});

export const { useGetSellerListQuery } = sellerListSlice;

const categoryFilter = (state) => state.categoryFilter;

const selectSellerListResult = createSelector(
  [categoryFilter, (state) => state],
  (filter, state) => {
    const result = sellerListSlice.endpoints.getSellerList.select({
      category: filter.category,
    })(state);
    return result;
  }
);

const selectSellerListData = createSelector(
  [selectSellerListResult],
  (sellerListResult) => sellerListResult?.data ?? initialState
);

export const {
  selectAll: selectSellerList,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = sellerListAdapter.getSelectors((state) => {
  const data = selectSellerListData(state);
  return data;
});
