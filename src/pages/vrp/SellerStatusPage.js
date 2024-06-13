import React, { useState } from "react";
import useGetSellerStatus from "../../tanstack-query/vrp/useGetSellerStatus";
import { SellerStatus } from "../../components/sellerStatus/SellerStatus";
import {
  selectStatusList,
  useGetStatusListQuery,
} from "../../services/statusSlice";
import { useSelector } from "react-redux";

export const SellerStatusPage = ({ onFilter }) => {
  const currentStatus = useSelector((state) => state.vrpFilter.status);

  const { isSuccess } = useGetStatusListQuery();

  const statusData = useSelector(selectStatusList);

  const handleItemSelected = (itemId) => {
    onFilter(itemId);
  };
  return isSuccess ? (
    <SellerStatus
      statuses={statusData}
      onItemSelected={(itemId) => handleItemSelected(itemId)}
      status={currentStatus}
    />
  ) : null;
};
