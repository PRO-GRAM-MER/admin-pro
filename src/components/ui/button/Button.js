import React from "react";
import classes from "./button.module.css";

export const Button = ({ type, disabled, onClick, text }) => {
  
  return (
    <button
      type={type}
      className={disabled ? classes.form__btn : classes.form__btn__enabled}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
