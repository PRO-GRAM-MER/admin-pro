import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const vrpListAdapter = createEntityAdapter({
  selectId: (vrp) => vrp.request_id,
});
const initialState = vrpListAdapter.getInitialState();
console.log(initialState);

export const vrpListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVrpList: builder.query({
      query: ({ seller_id, status }) =>
        `/vrp?seller_id=${seller_id}&status=${status}`,
      transformResponse: (responseData) => {
        const loadedVrpList = responseData.data;
        console.log(loadedVrpList);
        return vrpListAdapter.setAll(initialState, loadedVrpList);
      },
      providesTags: (result, error, arg) => [
        { type: "vrp", id: "vrpList" },
        ...result.ids.map((id) => ({ type: "vrp", id })),
      ],
    }),
  }),
});

export const { useGetVrpListQuery } = vrpListSlice;


const selectVrpFilter = (state) => state.vrpFilter;

// Dynamic selector for getting the VRP list result
const selectVrpListResult = createSelector(
  [selectVrpFilter, (state) => state],
  (filter, state) => {
    const result = vrpListSlice.endpoints.getVrpList.select({
      seller_id: filter.seller_id,
      status: filter.status,
    })(state);
    return result;
  }
);

const selectVrpListData = createSelector(
  [selectVrpListResult],
  (vrpListResult) => vrpListResult?.data ?? initialState
);

export const {
  selectAll: selectVrpList,
  selectById: selectVrpById,
  selectIds: selectVrpIds,
} = vrpListAdapter.getSelectors((state) => {
  const data = selectVrpListData(state);
  return data;
});