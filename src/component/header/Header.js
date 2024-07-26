import React from "react";
import logo from "../../assets/logoWithName.svg";
import notification from "../../assets/notification.svg";
import classes from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../searchInput/SearchInput";


export const Header = ({ isPending }) => {
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    navigate("profile");
  };
  return (
    <div className={classes.container}>
      <div className={classes.container__box}>
        <div className={classes.container__box__logo}>
          <img src={logo} alt="Logo" className={classes.container__box__img} />
        </div>
        {/* <SearchInput placeholder="Search..." /> */}
      </div>
    </div>
  );
};