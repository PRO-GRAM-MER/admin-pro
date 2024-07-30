import React, { useEffect, useState } from "react";
import classes from "./customSelect.module.css";

export const CustomSelect = ({
  optionData,
  onSelection,
  selectedId,
  label,
}) => {
  const [currentSeller, setCurrentSeller] = useState(selectedId);

  const handleChange = (event) => {
    const optionId = event.target.value;
    setCurrentSeller(optionId);
    onSelection(label, optionId);
  };

  return (
    <select
      className={classes.box}
      onChange={handleChange}
      value={currentSeller}
    >
      <option value="" className={classes.box__option}>
        Select {label}
      </option>
      {optionData.map((option) => (
        <option
          key={option.id}
          value={option.id}
          className={classes.box__option}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
