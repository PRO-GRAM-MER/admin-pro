import { createSlice } from "@reduxjs/toolkit";

const actionModalSlice = createSlice({
  name: "actionModal",
  initialState: {
    isOpen: false,
    modalData: {
      category: null,
      request_id: null,
      approval_status: null,
    },
  },
  reducers: {
    onOpen: (state, action) => {
      state.isOpen = true;
      state.modalData = {
        category: action.payload.category,
        request_id: action.payload.request_id,
        approval_status: action.payload.approval_status,
        remarks: action.payload.remarks
      };
    },
    onClose: (state) => {
      state.isOpen = false;
      state.modalData = {
        category: null,
        request_id: null,
        approval_status: null,
        remarks: null
      };
    },
  },
});

export const { onOpen, onClose } = actionModalSlice.actions;

export const selectActionModalState = (state) => state.actionModal;

export default actionModalSlice.reducer;
