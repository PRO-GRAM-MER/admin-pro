import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openBackdrop: (state) => {
      state.isOpen = true;
    },
    closeBackdrop: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openBackdrop, closeBackdrop } = backdropSlice.actions;
export const selectBackdropState = (state) => state.backdrop.isOpen;
export default backdropSlice.reducer;
