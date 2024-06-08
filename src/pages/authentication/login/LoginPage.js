import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../../../components/authentication/LogInForm";
import useLogInMutation from "../../../tanstack-query/auth/useLogIn";
import { useDispatch, useSelector } from "react-redux";
import { showToastWithTimeout } from "../../../store/toaster/toasterActions";
import { useLoginMutation } from "../../../services/authApiSlice";
import { setCredentials } from "../../../store/slices/auth/authSlice";
import classes from "./loginPage.module.css"
import { BrandIdentity } from "../../../components/brandIdentity/BrandIdentity";

export const LoginPage = () => {
  const [login, { isLoading, error, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await login({
        email_id: data.email,
        password: data.password,
      }).unwrap();
      console.log(response);

      navigate("dashboard");
    } catch (err) {
      dispatch(
        showToastWithTimeout(err.data.message.displayMessage, "#D32F2F")
      );
      console.log(err);
    }
  };

  return( <div className={classes.auth}>
    <BrandIdentity />
    <LoginForm onSubmit={onSubmit} />
  </div>);
};
