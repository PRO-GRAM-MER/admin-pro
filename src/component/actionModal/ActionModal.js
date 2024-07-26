import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./actionModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { onClose, selectActionModalState } from "../../store/actionModalSlice";
import {
  useApproveRequestMutation,
  useRejectRequestMutation,
} from "../../services/actionModalApiSlice";
import { toast } from "react-toastify";

export const ActionModal = () => {
  const { isOpen, modalData } = useSelector(selectActionModalState);
  const dispatch = useDispatch();
  const [rejectRequest, { error }] = useRejectRequestMutation();
  const [approveRequest] = useApproveRequestMutation();
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (modalData) {
      setRemarks(modalData?.approval_status === "rejected" ? modalData.remarks : "");
    }
  }, [modalData]);

  const handleReject = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    try {
      await rejectRequest({
        category: modalData?.category,
        request_id: modalData?.request_id,
        remarks,
      }).unwrap();
      toast.update(id, {
        render: "Request rejected successfully",
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
      console.log(error);
    }
  };

  const handleApprove = async () => {
    const id = toast.loading("Please wait...");
    try {
      await approveRequest({
        category: modalData?.category,
        request_id: modalData?.request_id,
      }).unwrap();
      toast.update(id, {
        render: "Request approved successfully",
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
      console.log(error);
    }
  };

  const handleClose = () => {
    dispatch(onClose());
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
        <form onSubmit={handleReject} className={classes.form}>
          <div className={classes.form__group}>
            <input
              type="text"
              id="requestId"
              name="requestId"
              className={classes.form__field}
              disabled
              value={modalData?.request_id || ""}
            />
            <label htmlFor="requestId" className={classes.form__label}>
              Request ID
            </label>
          </div>
          <div className={classes.form__group}>
            <textarea
              id="remarks"
              name="remarks"
              placeholder="Remarks"
              disabled={modalData?.approval_status !== "pending"}
              className={classes.form__field}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <label htmlFor="remarks" className={classes.form__label}>
              Reason for Rejection*
            </label>
          </div>
          <div className={classes.buttonGroup}>
            <button
              type="button"
              onClick={handleApprove}
              className={`${classes.form__btn} ${
                modalData?.approval_status === "pending"
                  ? classes.form__btn__enabled
                  : ""
              }`}
              disabled={modalData?.approval_status !== "pending"}
            >
              Approve
            </button>
            <button
              type="submit"
              className={`${classes.form__btn} ${
                remarks.trim() !== "" ? classes.form__btn__enabled : ""
              }`}
              disabled={remarks.trim() === ""}
            >
              Reject
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  ) : null;
};
