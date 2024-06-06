import React from "react";
import classes from "./sellerList.module.css";

export const SellerList = ({
  sellers,
  onItemSelected,
  sellerId,
}) => {
  const handleChange = (sellerId) => {

    onItemSelected(sellerId);
    console.log(sellerId)
  };

  return (
    <select
      className={classes.box}
      onChange={(event) => handleChange(event.target.value)}
      value={sellerId}
    >
      <option value="" className={classes.box__option}>
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

