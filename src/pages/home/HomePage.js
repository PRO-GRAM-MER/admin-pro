import React from "react";
import classes from "./homepage.module.css";

export const HomePage = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <h1 className={classes.title}>Welcome To Seller Portal</h1>
        <h2 className={classes.subTitle}>MOBIGARAGE</h2>
      </div>
    </div>
  );
};
