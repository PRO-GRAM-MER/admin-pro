import React, { useState } from "react";
import useGetSellerList from "../../tanstack-query/vrp/useGetSellerList";
import { SellerList } from "../../components/sellerList/SellerList";
import {
  selectSellerList,
  useGetSellerListQuery,
} from "../../services/sellerListSlice";
import { useSelector } from "react-redux";

export const SellerListPage = ({ sellerId, onFilter }) => {
  const [selectedSellerId, setSelectedSellerId] = useState(sellerId);

  // const { data, isSuccess } = useGetSellerList();
  const { data, isSuccess } = useGetSellerListQuery();
  console.log(isSuccess ? data : null);

  const sellerList = useSelector(selectSellerList);
  const handleItemSelected = (itemId) => {
    setSelectedSellerId(itemId);
    onFilter(itemId);
  };

  return isSuccess ? (
    <SellerList
      sellers={sellerList}
      onItemSelected={(itemId) => handleItemSelected(itemId)}
      sellerId={selectedSellerId}
    />
  ) : null;
};
