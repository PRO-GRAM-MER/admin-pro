import React from "react";
import { LogInForm } from "../../component/logInForm/LogInForm";
import { useLoginMutation } from "../../services/authApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const onSubmit = async (data) => {
    const loadingToastId = toast.loading("authenticating...");
    try {
      const response = await login({
        email_id: data.email,
        password: data.password,
      }).unwrap();
      toast.dismiss(loadingToastId);
      toast.success(response.message.displayMessage);
      navigate("dashboard");
    } catch (err) {
      toast.dismiss(loadingToastId);
      toast.error(err.data.message.displayMessage);
    }
  };
  return <LogInForm onSubmit={onSubmit} />;
};
