import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  received: false,
  mob_no: "",
};

const phoneNumberSlice = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {
    phoneNumberReceived: (state, action) => {
      state.received = true;
      state.mob_no = action.payload;
    },
    resetPhoneNumber: (state) => {
      state.received = false;
      state.mob_no = "";
    },
  },
});

export const { phoneNumberReceived, resetPhoneNumber } =
  phoneNumberSlice.actions;
export const selectPhoneNumber = (state) => state.phoneNumber;

export default phoneNumberSlice.reducer;
