import React, { useState } from "react";
import classes from "./sellerList.module.css";

export const SellerList = ({ sellers, onItemSelected, sellerId }) => {
  const [currentSeller, setCurrentSeller] = useState(sellerId);
  const handleChange = (event) => {
    const newSeller = event.target.value;
    setCurrentSeller(newSeller);
    onItemSelected(newSeller);
  };

  return (
    <select
      className={classes.box}
      onChange={handleChange}
      value={currentSeller}
    >
      <option value="0" className={classes.box__option}>
        Select all sellers
      </option>
      {sellers.map((seller) => (
        <option
          key={seller.id}
          value={seller.id}
          className={classes.box__option}
        >
          {seller.seller}
        </option>
      ))}
    </select>
  );
};
