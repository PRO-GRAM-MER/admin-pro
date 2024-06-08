import React, { useState } from "react";
import useGetSellerStatus from "../../tanstack-query/vrp/useGetSellerStatus";
import { SellerStatus } from "../../components/sellerStatus/SellerStatus";
import {
  selectStatusList,
  useGetStatusListQuery,
} from "../../services/statusSlice";
import { useSelector } from "react-redux";

export const SellerStatusPage = ({ status, onFilter }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  // const { data, isSuccess } = useGetSellerStatus();

  const { data, isSuccess } = useGetStatusListQuery();

  const statusData = useSelector(selectStatusList);

  const handleItemSelected = (itemId) => {
    setSelectedStatus(itemId);
    onFilter(itemId);
  };
  return isSuccess ? (
    <SellerStatus
      statuses={statusData}
      onItemSelected={(itemId) => handleItemSelected(itemId)}
      status={selectedStatus}
    />
  ) : null;
};
