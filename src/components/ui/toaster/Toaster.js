import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import classes from "./toaster.module.css";
import { selectToasterState } from "../../../store/toaster/toasterSlice";

export const Toaster = () => {
  const { isOpen, message, backgroundColor } = useSelector(selectToasterState);

  return isOpen ? (
    <motion.div
    className={classes.container}
    initial={{ x: "100%" }}
    animate={{ x: isOpen ? 0 : "100%" }}
    transition={{ type: "spring", stiffness: 500, damping: 30, ease: "easeInOut" }}
    style={{ zIndex: 9999, width: "fit-content", position: "fixed", top: 20, right: 0, backgroundColor:backgroundColor }}
  >
      <div className={classes.container__box}>
        <h1 className={classes.container__box__message}>{message}</h1>
      </div>
    </motion.div>
  ) : null;
};
