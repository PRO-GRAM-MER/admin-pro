import { createSlice } from "@reduxjs/toolkit";
const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState: {
    category: null,
    seller_id: null,
    status: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
    setFilters: (state, action) => {
      state.seller_id = action.payload.seller_id;
      state.status = action.payload.status;
    },
    clearFilters: (state) => {
      state.seller_id = null;
      state.status = null;
    },
  },
});

export const { setCategory, setFilters, clearFilters } =
  categoryFilterSlice.actions;
export const selectCategoryState = (state) => state.categoryFilter;

export default categoryFilterSlice.reducer;
