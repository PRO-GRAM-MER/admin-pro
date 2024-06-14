import React, { useEffect, useState } from "react";
import classes from "./sellerStatus.module.css";

export const SellerStatus = ({ statuses, onItemSelected, status }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  const handleChange = (event) => {
    const newStatus = event.target.value;
    setCurrentStatus(newStatus);
    onItemSelected(newStatus);
  };
 

  return (
    <select
      className={classes.box}
      onChange={handleChange}
      value={currentStatus}
    >
      <option value="0" className={classes.box__option}>
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
