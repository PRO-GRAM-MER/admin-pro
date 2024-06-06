import { closeToaster, openToaster, setTimerId } from "./toasterSlice";

export const showToastWithTimeout = (message, backgroundColor) => async (dispatch, getState) => {
  dispatch(openToaster({ message, backgroundColor }));

  const timerId = setTimeout(() => {
    dispatch(closeToaster());
  }, 3000);

  // Store the timer ID in the state
  dispatch(setTimerId(timerId));
};