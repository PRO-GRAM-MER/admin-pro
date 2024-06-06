import React from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.svg";
import classes from "./spinner.module.css";

const loaderVariants = {
  animation: {
    rotate: [0, 360],
  },
};

export const Spinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spin}>
        <img src={logo} className={classes.image} alt="Logo" />
        <motion.div
          className="loader"
          variants={loaderVariants}
          animate="animation"
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: "44px",
            height: "44px",
            border: "4px solid #FF6F3F",
            borderTop: "4px solid transparent",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};
