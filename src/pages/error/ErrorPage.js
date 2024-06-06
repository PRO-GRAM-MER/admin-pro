import React from "react";
import { BrandIdentity } from "../../components/brandIdentity/BrandIdentity";
import classes from "./errorPage.module.css"
import { Button } from "../../components/ui/button/Button";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className={classes.box}>
      <BrandIdentity />
      <div className={classes.msgBox}>
        <h1 className={classes.msgBox__msg}>
        Error 404 : Page Not Found.
        </h1>
        <Link to="/" className={classes.btn}>Back</Link>
      </div>
    </div>
  );
};
