import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPriorityModalState,
  onClose,
  setSeller_id,
  setLot_id,
} from "../../store/priorityModalSlice";


import {
  selectSellerList,
  useGetSellerListQuery,
} from "../../services/sellerApiSlice";
import { selectCategoryState } from "../../store/categorySlice";
import { selectLotList, useGetLotListQuery } from "../../services/lotApiSlice";
import { useUpdatePriorityMutation } from "../../services/priorityApiSlice";
import { toast } from "react-toastify";
import classes from "./priorityModal.module.css";

export default function PriorityModal() {
  const dispatch = useDispatch();
  const { isOpen, seller_id, lot_id } = useSelector(selectPriorityModalState);
  const category = useSelector(selectCategoryState);

  const { isSuccess: isSellerSuccess } = useGetSellerListQuery(
    { category: category.category },
    { skip: !category.category }
  );
  const sellerList = useSelector(selectSellerList);

  const { isSuccess: isLotSuccess } = useGetLotListQuery(
    { category: category.category, seller_id },
    { skip: !seller_id }
  );
  const lotList = useSelector(selectLotList);

  const [updatePriority] = useUpdatePriorityMutation();

  const handleSellerChange = (sellerId) => {
    dispatch(setSeller_id({ seller_id: sellerId }));
    dispatch(setLot_id({ lot_id: null }));
  };

  const handleLotChange = (lotId) => {
    dispatch(setLot_id({ lot_id: lotId }));
  };

  const handleClose = () => {
    dispatch(onClose());
  };

  const handleApply = async () => {
    const id = toast.loading("Please wait...");
    try {
      await updatePriority({
        category: category.category,
        seller_id: seller_id,
        lot_id: lot_id,
      }).unwrap();
      toast.update(id, {
        render: "Priority Set successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      dispatch(onClose());
    } catch (error) {
      toast.update(id, {
        render: `Error: ${error.data.detail}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return isOpen ? (
    <motion.div
      onClick={handleClose}
      className={classes.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={classes.box}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: -120 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={classes.box__title}>*Please Select Seller First</h1>
        <div className={classes.box__select}>
          <select
            className={classes.selection}
            onChange={(event) => handleSellerChange(event.target.value)}
            value={seller_id || ""}
          >
            <option value="" className={classes.selection__option}>
              Select Seller
            </option>
            {sellerList.map((option) => (
              <option
                key={option.id}
                value={option.id}
                className={classes.selection__option}
              >
                {option.label}
              </option>
            ))}
          </select>

          <select
            className={classes.selection}
            onChange={(event) => handleLotChange(event.target.value)}
            value={lot_id || ""}
            disabled={!seller_id}
          >
            <option value="" className={classes.selection__option}>
              Select Lot
            </option>
            {lotList?.map((option) => (
              <option
                key={option.id}
                value={option.id}
                className={classes.selection__option}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.box__btns}>
          <button
            disabled={!lot_id}
            className={`${classes.box__btns__btn} ${
              !lot_id
                ? classes.box__btns__btn
                : classes.box__btns__btn__apply
            }`}
            onClick={handleApply}
          >
            Apply
          </button>
          <button
            className={`${classes.box__btns__btn} ${classes.box__btns__btn__cancel}`}
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  ) : null;
}
