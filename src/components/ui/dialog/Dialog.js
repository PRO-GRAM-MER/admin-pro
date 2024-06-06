import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeDialog, selectDialogState } from "../../../store/dialogSlice";
import classes from "./dialog.module.css";
import { closeBackdrop } from "../../../store/backdropSlice";

export const Dialog = ({ message }) => {
  const dispatch = useDispatch();
  // const { isOpen, heading, subheading, message } = useSelector(selectDialogState);

  const handleClose = () => {
    // dispatch(closeDialog());
    dispatch(closeBackdrop());
  };

  return (
    <div className={classes.dialog} style={{ zIndex: 9999 }}>
      <p>{message}</p>
      {/* <button onClick={handleClose}>Close</button> */}
    </div>
  );
};
