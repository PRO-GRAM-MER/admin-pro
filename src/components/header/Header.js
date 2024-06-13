import React from "react";
import logo from "../../assets/logoWithName.svg";
import notification from "../../assets/notification.svg";
import classes from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchInput } from "../ui/searchInput/SearchInput";

export const Header = () => {
  const status = true;
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    navigate("profile");
  };
  return (
    <div className={classes.container}>
      <div className={classes.container__box}>
        <Link className={classes.container__box__logo} to={"/dashboard"}></Link>
        <SearchInput placeholder="Search..." />
        <Link
          className={classes.container__box__notification}
          to="/dashboard"
        ></Link>
      </div>
    </div>
  );
};
