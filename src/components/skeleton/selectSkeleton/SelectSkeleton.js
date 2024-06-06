import React from "react";
import classes from "./selectSkeleton.module.css"; // Ensure correct import path and variable name

export const SelectSkeleton = () => {
  return <select disabled className={classes.box}></select>;
};
