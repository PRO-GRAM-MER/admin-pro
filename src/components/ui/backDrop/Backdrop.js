// Backdrop.js
import React from 'react';
import classes from './backdrop.module.css';

export const Backdrop = ({ children, onClick, ...otherProps }) => {

  return  (
    <div className={classes.backdrop} onClick={onClick} {...otherProps}>
      {children}
    </div>
  );
};


