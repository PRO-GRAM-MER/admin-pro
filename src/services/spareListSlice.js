import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const spareListAdapter = createEntityAdapter();

const initialState = spareListAdapter.getInitialState();

export const spareListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpareList: builder.query({
      query: () => "/spares",
      transformResponse: (responseData) => {
        const loadedSpareList = responseData.data;
        console.log(loadedSpareList);
        return spareListAdapter.setAll(initialState, loadedSpareList);
      },
      providesTags: (result, error, arg) => [
        { type: "Spare", id: "spareList" },
        ...result.ids.map((id) => ({ type: "Spare", id })),
      ],
      
    }),
  }),
});

export const { useGetSpareListQuery } = spareListSlice;

export const selectSpareListResult =
  spareListSlice.endpoints.getSpareList.select();

const spareListData = createSelector(
  selectSpareListResult,
  (spareListResult) => spareListResult.data
);

export const {
  selectAll: selectSpareList,
  selectById: selectSpareById,
  selectIds: selectSpareIds,
} = spareListAdapter.getSelectors(
  (state) => spareListData(state) ?? initialState
);
