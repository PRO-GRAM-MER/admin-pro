import React, { useState } from "react";
import useGetSellerStatus from "../../tanstack-query/vrp/useGetSellerStatus";
import { SellerStatus } from "../../components/sellerStatus/SellerStatus";

export const SellerStatusPage = ({ status, onFilter }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);
  
  const { data, isSuccess } = useGetSellerStatus();


  const handleItemSelected = (itemId) => {
    setSelectedStatus(itemId);
    onFilter(itemId)
  };
  return isSuccess ? (
    <SellerStatus
      statuses={data.data.data}
      onItemSelected={(itemId) => handleItemSelected(itemId)}
      status={selectedStatus}
    />
  ) : null;
};
