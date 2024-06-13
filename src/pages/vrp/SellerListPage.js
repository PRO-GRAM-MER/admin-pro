import React, { useState } from "react";
import useGetSellerList from "../../tanstack-query/vrp/useGetSellerList";
import { SellerList } from "../../components/sellerList/SellerList";
import {
  selectSellerList,
  useGetSellerListQuery,
} from "../../services/sellerListSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/slices/vrp/vrpFilterSlice";

export const SellerListPage = ({ sellerId, onFilter }) => {
  const currentSeller = useSelector((state) => state.vrpFilter.seller_id);
  
 
  const {  isSuccess } = useGetSellerListQuery();
  const sellerList = useSelector(selectSellerList);
  const handleItemSelected = (itemId) => {
    onFilter(itemId);
  };
  

  return (
    <SellerList
      sellers={sellerList}
      onItemSelected={(itemId) => handleItemSelected(itemId)}
      sellerId={currentSeller}
    />
  ) ;
};
