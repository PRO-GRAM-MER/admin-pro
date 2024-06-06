import React from "react";
import notification from "../../../assets/notification.svg";
import classes from "./notification.module.css";

export const Notification = ({ isPending }) => {
  return isPending ? (
    <div className={classes.box}>
      <img src={notification} alt="notification" className={classes.box__img} />
    </div>
  ) : null;
};
