import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const vrpListAdapter = createEntityAdapter({
  selectId: (vrp) => vrp.request_id,
});
const initialState = vrpListAdapter.getInitialState();

export const vrpListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVrpList: builder.query({
      query: () => "vrp",
      transformResponse: (responseData) => {
        const loadedVrpList = responseData.data;
        console.log(loadedVrpList);
        return vrpListAdapter.setAll(initialState, loadedVrpList);
      },
      providesTags: (result, error, arg) => [
        { type: "Vrp", id: "List" },
        ...result.ids.map((id) => ({ type: "Vrp", id })),
      ]

      // providesTags:["Vrp"]
    }),
  }),
});

export const { useGetVrpListQuery } = vrpListSlice;

export const selectsVrpListResult = vrpListSlice.endpoints.getVrpList.select();

const selectVrpListData = createSelector(
  selectsVrpListResult,
  (vrpListResult) => vrpListResult.data
);

export const {
  selectAll: selectVrpList,
  selectById: selectVrpById,
  selectIds: selectVrpIds,
} = vrpListAdapter.getSelectors((state) =>
  selectVrpListData(state) ?? initialState
);
