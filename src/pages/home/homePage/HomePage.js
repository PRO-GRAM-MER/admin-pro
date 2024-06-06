import React from "react";

import classes from "./homePage.module.css";
import { Header } from "../../../components/header/Header";

import { useNavigate } from "react-router-dom";
import { SearchInput } from "../../../components/ui/searchInput/SearchInput";
import { SideBar } from "../../../components/sideBar/SideBar";

export const HomePage = () => {
  const navigate = useNavigate();

  const placeholder = "Search for mobile, accessories & more";

  const handleProfile = () => {
    navigate("profile");
  };

  const navigateToPath = () => {
    navigate("vrp");
  };

  const handleLogOut = () => {
    navigate("/");
  };
  return (
    <div className={classes.container}>
      <div className={classes.container__box__content}>
       
      </div>
    </div>
  );
};
