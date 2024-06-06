// toasterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: "",
  backgroundColor: "#FFD4C5",
  timerId: null, // Store the timer ID in the state
};

const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    openToaster: (state, action) => {
      state.isOpen = true;
      state.message = action.payload.message || "";
      state.backgroundColor = action.payload.backgroundColor;
    },
    closeToaster: (state) => {
      state.isOpen = false;
      state.message = "";
      // Clear the timer
      if (state.timerId) {
        clearTimeout(state.timerId);
        state.timerId = null;
      }
    },
    setTimerId: (state, action) => {
      state.timerId = action.payload;
    },
  },
});

export const { openToaster, closeToaster, setTimerId } = toasterSlice.actions;
export const selectToasterState = (state) => state.toaster;
export default toasterSlice.reducer;



