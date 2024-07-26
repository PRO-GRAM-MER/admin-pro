import React from "react";
import { LogInForm } from "../../component/logInForm/LogInForm";
import { useLoginMutation } from "../../services/authApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [login, { isLoading, error, isSuccess }] = useLoginMutation();
  const onSubmit = async (data) => {
    try {
      const response = await login({
        email_id: data.email,
        password: data.password,
      }).unwrap();
      toast.success(response.message.displayMessage);
      navigate("dashboard");
    } catch (err) {
      toast.error(err.data.message.displayMessage);
    }
  };
  return <LogInForm onSubmit={onSubmit} />;
};
