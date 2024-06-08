import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const statusListAdapter = createEntityAdapter();

const initialState = statusListAdapter.getInitialState();

export const statusListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatusList: builder.query({
      query: () => "vrp_statuses",
      transformResponse: (responseData) => {
        const loadedStatusList = responseData.data;
        console.log(loadedStatusList);
        return statusListAdapter.setAll(initialState, loadedStatusList);
      },
      providesTags: (result, error, arg) => [
        { type: "status", id: "list" },
        ...result.ids.map((id) => ({ type: "status", id })),
      ],
    }),
  }),
});

export const { useGetStatusListQuery } = statusListSlice;

export const selectsStatusListResult =
  statusListSlice.endpoints.getStatusList.select();
const selectStatusListData = createSelector(
  selectsStatusListResult,
  (statusListResult) => statusListResult.data
);

export const { selectAll: selectStatusList } = statusListAdapter.getSelectors(
  (state) => selectStatusListData(state) ?? initialState
);
