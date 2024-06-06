import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./authentication.module.css";
import { BrandIdentity } from "../../components/brandIdentity/BrandIdentity";

export const Authentication = () => {
  return (
    <div className={classes.auth}>
      <BrandIdentity />

      <div className={classes.auth__outlet}>
        <Outlet />
      </div>
    </div>
  );
};
