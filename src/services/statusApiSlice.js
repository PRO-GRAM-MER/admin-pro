import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const statusListAdapter = createEntityAdapter();

const initialState = statusListAdapter.getInitialState();

export const statusListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatusList: builder.query({
      query: ({ category }) => `${category}/statuses`,
      transformResponse: (responseData) => {
        const loadedStatusList = responseData.data;
        console.log(loadedStatusList);
        return statusListAdapter.setAll(initialState, loadedStatusList);
      },
      providesTags: (result, error, arg) => {
        if (!result) {
          return [
            { type: `${arg.category}statuses`, id: `${arg.category}statuses` },
          ];
        }
        return [
          { type: `${arg.category}statuses`, id: `${arg.category}statuses` },
          ...result.ids.map((id) => ({ type: `${arg.category}statuses`, id })),
        ];
      },
    }),
  }),
});

export const { useGetStatusListQuery } = statusListSlice;

const categoryFilter = (state) => state.categoryFilter;

const selectStatusListResult = createSelector(
  [categoryFilter, (state) => state],
  (filter, state) => {
    const result = statusListSlice.endpoints.getStatusList.select({
      category: filter.category,
    })(state);
    return result;
  }
);

const selectStatusListData = createSelector(
  [selectStatusListResult],
  (statusListResult) => statusListResult?.data ?? initialState
);

export const {
  selectAll: selectStatusList,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = statusListAdapter.getSelectors((state) => {
  const data = selectStatusListData(state);
  return data;
});
