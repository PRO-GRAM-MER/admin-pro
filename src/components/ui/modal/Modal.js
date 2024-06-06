import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import classes from "./modal.module.css";

export const Modal = ({ data, onApproval, onReject, }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      lotId: data.lot_id,
      requestId: data.request_id,
      rateCard: data.rate_card,
      remarks: "",
    },
  });

  const confirmationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const onSubmit = (formData) => {
    const { requestId, remarks } = formData;
    onReject(requestId, remarks);
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={classes.login}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={confirmationVariants}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        {/* <div className={classes.form__group}>
          <input
            type="text"
            id="lotId"
            name="lotId"
            className={classes.form__field}
            disabled
            defaultValue={data.lot_id}
            {...register("lotId")}
          />
          <label htmlFor="lotId" className={classes.form__label}>
            Lot ID
          </label>
        </div> */}
        <div className={classes.form__group}>
          <input
            type="text"
            id="requestId"
            name="requestId"
            className={classes.form__field}
            disabled
            defaultValue={data.request_id}
            {...register("requestId")}
          />
          <label htmlFor="requestId" className={classes.form__label}>
            Request ID
          </label>
        </div>
        {/* <div className={classes.form__group}>
          <input
            type="text"
            id="rateCard"
            name="rateCard"
            className={classes.form__field}
            disabled
            defaultValue={data.rate_card}
            {...register("rateCard")}
          />
          <label htmlFor="rateCard" className={classes.form__label}>
            Rate Card
          </label>
        </div> */}
        <div className={classes.form__group}>
          <textarea
            type="text"
            id="remarks"
            name="remarks"
            placeholder="Remarks"
            className={classes.form__field}
            {...register("remarks")}
          />
          <label htmlFor="remarks" className={classes.form__label}>
            Reason for Rejection*
          </label>
        </div>
        <div className={classes.buttonGroup}>
          <button
            type="button"
            onClick={onApproval}
            className={`${classes.form__btn} ${
              data.approval_status === "pending"
                ? classes.form__btn__enabled
                : ""
            }`}
            disabled={data.approval_status !== "pending"}
          >
            Approve
          </button>
          <button
            type="submit"
            className={`${classes.form__btn} ${
              formState.dirtyFields.remarks ? classes.form__btn__enabled : ""
            }`}
          >
            Reject
          </button>
        </div>
      </form>
    </motion.div>
  );
};
