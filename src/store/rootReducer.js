import appReducer from "./appReducer";
import { logout } from "./authSlice";

const rootReducer = (state, action) => {
  if (action.type === logout.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
