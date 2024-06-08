import React from "react";
import { BrandIdentity } from "../../components/brandIdentity/BrandIdentity";
import classes from "./errorPage.module.css";
import { Button } from "../../components/ui/button/Button";
import { Link, useRouteError } from "react-router-dom";
import Cookies from "js-cookie";

export const ErrorPage = () => {
  let error = useRouteError();
  console.log(error);

  const token = Cookies.get("token");
  const expirationTime = Cookies.get("expirationTime");
  const navigateTo = token && expirationTime ? "dashboard" : "/";

  return (
    <div className={classes.box}>
      <BrandIdentity />
      <div className={classes.msgBox}>
        <h1 className={classes.msgBox__msg}>
          Error {error?.status || "Unknown"}:{" "}
          {error?.statusText || "Unknown Error"}.
        </h1>
        <Link to={navigateTo} className={classes.btn}>
          Back
        </Link>
      </div>
    </div>
  );
};
