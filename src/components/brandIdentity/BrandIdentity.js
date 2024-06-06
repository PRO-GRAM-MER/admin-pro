import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import { motion, useCycle } from "framer-motion";
import classes from "./brandIdentity.module.css";

export const BrandIdentity = () => {
  const deals = ["PREXO", "VRP", "OPEN BOX", "ACCESSORIES", "SPARES"];
  const [currentDeal, cycleDeal] = useCycle(...deals);

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleDeal();
    }, 1000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [cycleDeal]);

  return (
    <div className={classes.heading}>
      <div className={classes.heading__box}>
        <img src={logo} alt="Logo" className={classes.heading__logo} />
        <h1 className={classes.heading__title}>MobiGarage</h1>
      </div>

      <div className={classes.deals}>
        <h2 className={classes.heading__subtitle}>Best Deals on: </h2>
        <motion.h2
          className={classes.heading__subtitle__highlight}
          key={currentDeal} // Ensure animation on key change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => cycleDeal()}
        >
          {currentDeal}
        </motion.h2>
      </div>
    </div>
  );
};
