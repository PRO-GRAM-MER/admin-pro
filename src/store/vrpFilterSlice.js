import { createSlice } from "@reduxjs/toolkit";
const vrpFilterSlice = createSlice({
  name: "vrpFilter",
  initialState: {
    seller_id: "0",
    status: "0",
  },
  reducers: {
    setFilters: (state, action) => {
      state.seller_id = action.payload.seller_id;
      state.status = action.payload.status;
    },
    clearFilters: (state) => {
      state.seller_id = "0";
      state.status = "0";
    },
  },
});

export const { setFilters, clearFilters } = vrpFilterSlice.actions;
export const selectCategoryState = (state) => state.categoryFilter;


export default vrpFilterSlice.reducer;