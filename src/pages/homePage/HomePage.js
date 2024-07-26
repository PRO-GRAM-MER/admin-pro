import React from 'react';
import classes from "./homePage.module.css"

export const HomePage = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <h1 className={classes.title}>Welcome To Admin Portal</h1>
        <h2 className={classes.subTitle}>MOBIGARAGE</h2>
      </div>
    </div>
  )
}
