import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../../../components/authentication/LogInForm";
import useLogInMutation from "../../../tanstack-query/auth/useLogIn";
import { useDispatch, useSelector } from "react-redux";
import { showToastWithTimeout } from "../../../store/toaster/toasterActions";
import { useLoginMutation } from "../../../services/auth/authApiSlice";
import { setCredentials } from "../../../store/slices/auth/authSlice";

export const LoginPage = () => {
  const [login, { isLoading, error, isSuccess }] = useLoginMutation();
  // const { mutateAsync, isLoading, isSuccess, isPending } = useLogInMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  


  // const onSubmit = async (data) => {
  //   try {
  //     const email_id = data.email;
  //     const password = data.password;
  //     const response = await mutateAsync({ email_id, password });
  //     if (response.status) {
  //       dispatch(
  //         showToastWithTimeout(response.message.displayMessage, "#00A167")
  //       );
  //       navigate("/home");
  //     }

  //     console.log(response);
  //   } catch (error) {
  //     console.error("Login failed:", error.message);
  //     dispatch(
  //       showToastWithTimeout(
  //         error.response.data.message.displayMessage,
  //         "#D32F2F"
  //       )
  //     );
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      const response =await login({
        email_id: data.email,
        password: data.password,
      }).unwrap();
      console.log(response)

      navigate("/home");
    } catch (err) {
      dispatch(
        showToastWithTimeout(err.data.message.displayMessage, "#D32F2F")
      );
      console.log(err);
    }
  };

  return <LoginForm onSubmit={onSubmit} />;
};
