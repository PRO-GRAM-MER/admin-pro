// Loader.jsx
import React from "react";
import logo from "../../../assets/logo.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeLoader, selectLoaderState } from "../../../store/loaderSlice";
import classes from "./loader.module.css";

const loaderVariants = {
  animation: {
    rotate: [0, 360],
  },
};

export const Loader = ({ open, info, errorInfo }) => {
  const { isOpen, message, error } = useSelector(selectLoaderState);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeLoader());
  };

  return isOpen || open ? (
    <div className={classes.loader}>
      <div className={classes.container}>
        <div className={classes.spin}>
          <img src={logo} className={classes.image} alt="Logo" />
          <motion.div
            className="loader"
            variants={loaderVariants}
            animate="animation"
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{
              width: "60px",
              height: "60px",
              border: "4px solid #FF6F3F",
              borderTop: "4px solid transparent",
              borderRadius: "50%",
            }}
          />
        </div>

        <p className={classes.message}>{error || message | info}</p>
        {errorInfo && (
          <button onClick={handleClose} className={classes.btn}>
            Close
          </button>
        )}
      </div>
    </div>
  ) : null;
};
