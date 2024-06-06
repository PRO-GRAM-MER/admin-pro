import React from "react";
import classes from "./sellerStatus.module.css";

export const SellerStatus = ({ statuses, onItemSelected, status }) => {
  const handleChange = (status) => {
    onItemSelected(status.toString());
  };

  return (
    <select
      className={classes.box}
      onChange={(event) => handleChange(event.target.value)}
      value={status}
    >
      <option value="" className={classes.box__option}>
        Select all statuses
      </option>
      {statuses.map((status) => (
        <option
          key={status.id}
          value={status.id}
          className={classes.box__option}
        >
          {status.label}
        </option>
      ))}
    </select>
  );
};
