import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSellerList,
  useGetSellerListQuery,
} from "../../services/sellerApiSlice";
import {
  clearFilters,
  selectCategoryState,
  setFilters,
} from "../../store/categorySlice";
import {
  selectStatusList,
  useGetStatusListQuery,
} from "../../services/statusApiSlice";

import classes from "./filterPage.module.css";
import { useSearchParams } from "react-router-dom";
import { onOpen } from "../../store/priorityModalSlice";
import { CustomSelect } from "../../component/customSelect/CustomSelect";
import { clear } from "@testing-library/user-event/dist/clear";

export const FiltersPage = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    identifier: null,
    seller_id: null,
    status: null,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const category = useSelector(selectCategoryState);
  const { isSuccess } = useGetSellerListQuery(
    { category: category.category },
    { skip: !category.category }
  );
  const sellerList = useSelector(selectSellerList);

  const { isSuccess: isStatusSuccess } = useGetStatusListQuery(
    { category: category.category },
    { skip: !category.category }
  );
  const statusList = useSelector(selectStatusList);

  const handlePriorityModal = () => {
    dispatch(onOpen());
  };

  const handleSelection = (identifier, option) => {
    const updatedFilters = {
      ...appliedFilters,
      [identifier === "seller" ? "seller_id" : "status"]:
        option === "" ? null : option,
    };

    setAppliedFilters(updatedFilters);
  };

  useEffect(() => {
    const sellerParam = searchParams.get("seller_id");
    const statusParam = searchParams.get("status");
    const newFilters = {
      seller_id: sellerParam || null,
      status: statusParam || null,
    };
    setAppliedFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
    dispatch(setFilters(newFilters));
  }, [dispatch, searchParams]);

  const handleApply = () => {
    const { seller_id, status } = appliedFilters;

    if (seller_id) {
      searchParams.set("seller_id", seller_id);
    } else {
      searchParams.delete("seller_id");
    }

    if (status) {
      searchParams.set("status", status);
    } else {
      searchParams.delete("status");
    }

    setSearchParams(searchParams);
    dispatch(setFilters(appliedFilters));
  };

  return (
    <div className={classes.box}>
      <CustomSelect
        optionData={sellerList}
        label="seller"
        onSelection={(identifier, option) => {
          handleSelection(identifier, option);
        }}
        selectedId={category.seller_id || ""}
      />
      <CustomSelect
        optionData={statusList}
        label="status"
        onSelection={(identifier, option) => {
          handleSelection(identifier, option);
        }}
        selectedId={category.status || ""}
      />
      <button className={classes.box__btn} onClick={handleApply}>
        Apply
      </button>
      <button
        className={`${classes.box__btn} ${classes.box__btn__secondary}`}
        onClick={handlePriorityModal}
      >
        Set Priority
      </button>
    </div>
  );
};
