import React from "react";

import classes from "./errorPage.module.css"

import { Link, useRouteError } from "react-router-dom";
import { Branding } from "../../component/branding/Branding";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={classes.box}>
      <Branding />
      <div className={classes.msgBox}>
        <h1 className={classes.msgBox__msg}>
        Error 404 : Page Not Found.
        </h1>
        <Link to="/" className={classes.btn}>Back</Link>
      </div>
    </div>
  );
};