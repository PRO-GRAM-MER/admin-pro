import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import categoryFilterReducer from "./categorySlice";
import actionModalReducer from "./actionModalSlice";
import priorityModalReducer from "./priorityModalSlice"
import { apiSlice } from "../services/apiSlice";

const appReducer = combineReducers({
  auth: authReducer,
  categoryFilter: categoryFilterReducer,
  actionModal: actionModalReducer,
  priorityModal: priorityModalReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default appReducer;
