import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const categoryListAdapter = createEntityAdapter({
  selectId: (category) => category.request_id,
});

const initialState = categoryListAdapter.getInitialState();

export const categoryListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: ({ category, seller_id, status }) => {
        let queryString = `${category}`;
        if (seller_id) {
          queryString += `?seller_id=${seller_id}`;
          if (status) {
            queryString += `&status=${status}`;
          }
        } else if (status) {
          queryString += `?status=${status}`;
        }
        return queryString;
      },
      transformResponse: (responseData) => {
        const loadedCategoryList = responseData.data;
        console.log(loadedCategoryList);
        return categoryListAdapter.setAll(initialState, loadedCategoryList);
      },
      providesTags: (result, error, arg) => {
        if (!result) {
          return [{ type: arg.category, id: `${arg.category}` }];
        }
        return [
          { type: arg.category, id: `${arg.category}` },
          ...result.ids.map((id) => ({ type: arg.category, id })),
        ];
      },
    }),
  }),
});

export const { useGetCategoryListQuery } = categoryListSlice;

const categoryFilter = (state) => state.categoryFilter;

const selectCategoryListResult = createSelector(
  [categoryFilter, (state) => state],
  (filter, state) => {
    const result = categoryListSlice.endpoints.getCategoryList.select({
      category: filter.category,
      seller_id: filter.seller_id,
      status: filter.status,
    })(state);
    return result;
  }
);

const selectCategoryListData = createSelector(
  [selectCategoryListResult],
  (categoryListResult) => categoryListResult?.data ?? initialState
);

export const {
  selectAll: selectCategoryList,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = categoryListAdapter.getSelectors((state) => {
  const data = selectCategoryListData(state);
  return data;
});
