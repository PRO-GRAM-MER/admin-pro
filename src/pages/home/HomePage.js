import React from "react";
import classes from "./homepage.module.css";
import { useGetVrpListQuery } from "../../services/vrpListSlice";

export const HomePage = () => {
  // const { data, isSuccess } = useGetVrpListQuery();
  // console.log(isSuccess ? data : "loading");
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Welcome To Admin Portal</h1>
      <h2 className={classes.subTitle}>MOBIGARAGE</h2>
    </div>
  );
};
