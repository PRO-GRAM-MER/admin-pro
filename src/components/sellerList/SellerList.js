import React, { useEffect, useState } from "react";
import classes from "./sellerList.module.css";

export const SellerList = ({ sellers, onItemSelected, selectedSellerId }) => {
  const [currentSeller, setCurrentSeller] = useState(selectedSellerId);

  useEffect(() => {
    setCurrentSeller(selectedSellerId);
  }, [selectedSellerId]);

  const handleChange = (event) => {
    const newSellerId = event.target.value;
    setCurrentSeller(newSellerId);
    onItemSelected(newSellerId);
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
