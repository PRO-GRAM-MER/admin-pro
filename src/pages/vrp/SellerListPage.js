import React from "react";
import { useSelector } from "react-redux";
import { useGetSellerListQuery, selectSellerList } from "../../services/sellerListSlice";
import { SellerList } from "../../components/sellerList/SellerList";

export const SellerListPage = ({ onFilter }) => {
  const { isSuccess } = useGetSellerListQuery();
  const seller = useSelector(state => state.vrpFilter.seller_id);
  console.log(seller)
  const sellerList = useSelector(selectSellerList);

  const handleItemSelected = (itemId) => {
    onFilter(itemId);
  };

  return (
    <SellerList
      sellers={sellerList}
      onItemSelected={handleItemSelected}
      selectedSellerId={seller}  // Pass the selected seller ID
    />
  );
};
