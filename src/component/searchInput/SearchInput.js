import React from "react";
import search from "../../assets/search.svg"
import classes from "./searchInput.module.css";

export const SearchInput = ({ placeholder }) => {
  return (
    <div className={classes.container}>
      <label htmlFor="searchInput" className={classes.container__label}>
        <input
          id="searchInput"
          type="search"
          placeholder={placeholder}
          className={classes.container__input}
        />
      </label>
      <div className={classes.container__box}>
        <img
          src={search}
          alt="search"
          className={classes.container__box__img}
        />
      </div>
    </div>
  );
};