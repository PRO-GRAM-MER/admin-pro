import React from "react";
import classes from "./categoryPageSkeleton.module.css";

export const CategoryPageSkeleton = () => {
  return (
    <div className={classes.box}>
      <div className={classes.box__filter}>
        <select disabled className={classes.box__select}></select>
        <select disabled className={classes.box__select}></select>
        <button className={classes.box__btn}></button>
        <button className={classes.box__btn}></button>
      </div>
      <div className={classes.box__table}>
        <div className={classes.box__table__title}></div>
        <div className={classes.box__table__content}></div>
      </div>
    </div>
  );
};
