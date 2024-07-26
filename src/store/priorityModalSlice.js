import { createSlice } from "@reduxjs/toolkit";

const priorityModalSlice = createSlice({
  name: "priorityModal",
  initialState: {
    isOpen: false,
    seller_id: null,
    lot_id: null,
  },
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    setSeller_id: (state, action) => {
      state.seller_id = action.payload.seller_id;
    },
    setLot_id: (state, action) => {
      state.lot_id = action.payload.lot_id;
    },
    onClose: (state) => {
      state.isOpen = false;
      state.seller_id = null;
      state.lot_id = null;
    },
  },
});

export const { onOpen, onClose, setSeller_id, setLot_id } =
  priorityModalSlice.actions;

export const selectPriorityModalState = (state) => state.priorityModal;

export default priorityModalSlice.reducer;
