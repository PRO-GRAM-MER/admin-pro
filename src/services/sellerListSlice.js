import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const sellerListAdapter = createEntityAdapter();

const initialState = sellerListAdapter.getInitialState();

export const sellerListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSellerList: builder.query({
      query: () => "sellers",
      transformResponse: (responseData) => {
        const loadedSellerList = responseData.data;
        console.log(loadedSellerList);
        return sellerListAdapter.setAll(initialState, loadedSellerList);
      },
      providesTags: (result, error, arg) => [
        { type: "seller", id: "list" },
        ...result.ids.map((id) => ({ type: "seller", id })),
      ],
    }),
  }),
});

export const { useGetSellerListQuery } = sellerListSlice;

export const selectsSellerListResult =
  sellerListSlice.endpoints.getSellerList.select();
const selectSellerListData = createSelector(
  selectsSellerListResult,
  (sellerListResult) => sellerListResult.data
);

export const { selectAll: selectSellerList } = sellerListAdapter.getSelectors(
  (state) => selectSellerListData(state) ?? initialState
);
