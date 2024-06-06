
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    openSpinner: (state) => {
      state.isOpen = true;
    },
    closeSpinner: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSpinner, closeSpinner } = spinnerSlice.actions;
export const selectSpinnerState = (state) => state.spinner;
export default spinnerSlice.reducer;
