import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { Header } from "../../component/header/Header";
import { SideBar } from "../../component/sideBar/SideBar";
import classes from "./dashboard.module.css";
import { getExpirationDuration } from "../../utils/getExpirationDuration";

export const DashBoardPage = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    if (token === "EXPIRED") {
      navigate("/");
      return;
    }

    const tokenDuration = getExpirationDuration();
    if (!tokenDuration || tokenDuration <= 0) {
      navigate("/");
      return;
    }

    const timeoutId = setTimeout(() => {
      navigate("/");
    }, tokenDuration);

    return () => clearTimeout(timeoutId);
  }, [navigate, token]);

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

export function checkAuthLoader() {
  const token = Cookies.get("token");
  const expirationTime = Cookies.get("expirationTime");

  if (!token && !expirationTime) {
    return redirect("/");
  }
  return null;
}
