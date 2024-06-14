import React, { useState } from "react";
import useGetSellerStatus from "../../tanstack-query/vrp/useGetSellerStatus";
import { SellerStatus } from "../../components/sellerStatus/SellerStatus";
import {
  selectStatusList,
  useGetStatusListQuery,
} from "../../services/statusSlice";
import { useSelector } from "react-redux";


export const SellerStatusPage = ({ onFilter }) => {
  const { isSuccess } = useGetStatusListQuery();

  const currentStatus = useSelector((state) => state.vrpFilter.status);
  console.log(currentStatus)
  const statusData = useSelector(selectStatusList);

  const handleItemSelected = (itemId) => {
    onFilter(itemId);
  };
  return isSuccess ? (
    <SellerStatus
      statuses={statusData}
      onItemSelected={handleItemSelected}
      status={currentStatus}
    />
  ) : null;
};
