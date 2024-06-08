import React, { useEffect } from "react";
import { Outlet, useSubmit } from "react-router-dom";
import Cookies from "js-cookie";
import { getExpirationDuration } from "../utils/helpers/getExpirationDuration";
import { Header } from "../components/header/Header";
import { SideBar } from "../components/sideBar/SideBar";
import classes from "./rootLayout.module.css";

export const RootLayout = () => {
  const submit = useSubmit();
  const token = Cookies.get("token");
  const expirationTime = Cookies.get("expirationTime");
  console.log(token, expirationTime);

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
    }

    const tokenDuration = getExpirationDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.container__outlet}>
        <SideBar />
        <div className={classes.container__outlet__box}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
