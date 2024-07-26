import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const lotListAdapter = createEntityAdapter({
  selectId: (lot) => lot.id,
});
const initialState = lotListAdapter.getInitialState();


export const lotListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLotList: builder.query({
      query: ({ category, seller_id }) =>
        `${category}/lots?seller_id=${seller_id}`,
      transformResponse: (responseData) => {
        const loadedLotList = responseData.data;
        console.log(loadedLotList);
        return lotListAdapter.setAll(initialState, loadedLotList);
      },
      providesTags: (result, error, arg) => {
        if (!result) {
          return [{ type: `${arg.category}_lot`, id: `${arg.category}_lot` }];
        }
        return [
          { type: `${arg.category}_lot`, id: `${arg.category}_lot` },
          ...result.ids.map((id) => ({ type: `${arg.category}_lot`, id })),
        ];
      },
    }),
  }),
});

export const { useGetLotListQuery } = lotListSlice;

// Selectors
const selectCategoryFilter = (state) => state.categoryFilter;
const selectPriorityModal = (state) => state.priorityModal;

const selectLotListResult = createSelector(
  [selectCategoryFilter, selectPriorityModal, (state) => state],
  (filter, priority, state) => {
    const result = lotListSlice.endpoints.getLotList.select({
      category: filter.category,
      seller_id: priority.seller_id,
    })(state);
    return result;
  }
);

const selectLotListData = createSelector(
  [selectLotListResult],
  (lotListResult) => lotListResult?.data ?? initialState
);

export const {
  selectAll: selectLotList,
  selectById: selectLotById,
  selectIds: selectLotIds,
} = lotListAdapter.getSelectors((state) => selectLotListData(state));
