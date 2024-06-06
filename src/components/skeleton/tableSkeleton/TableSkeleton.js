import React from "react";
import classes from "./tableSkeleton.module.css";

export const TableSkeleton = () => {
  return (
    <div className={classes.box}>
      <div className={classes.box__title}></div>
      <div className={classes.box__content}></div>
    </div>
  );
};
