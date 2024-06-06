import React from "react";
import classes from "./fileUploadInput.module.css";

export const FileUploadInput = ({ id, onChange }) => (
  <div className={classes.form__group__upload}>
    <label htmlFor={id} className={classes.form__field__upload__label}>
      <input
        type="file"
        id={id}
        className={classes.form__field__upload}
        onChange={onChange}
      />
    </label>
  </div>
);
