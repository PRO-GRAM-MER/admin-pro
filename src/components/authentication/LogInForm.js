import React from "react";
import classes from "./logInForm.module.css";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button/Button";

export const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data) => {
    onSubmit(data);
    reset();
  };

  const { isValid } = formState;

  return (
    <div className={classes.login}>
      <form
        className={classes.form}
        onSubmit={handleSubmit(handleLogin)}
        noValidate
      >
        <div className={classes.form__controls}>
          <div className={classes.form__group}>
            <input
              type="email"
              id="email"
              className={classes.form__field}
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid Email address",
                },
              })}
            />
            <label htmlFor="email" className={classes.form__label}>
              Email
            </label>
          </div>
          <div className={classes.form__group}>
            <input
              type="password"
              id="password"
              className={classes.form__field}
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
            />
            <label htmlFor="password" className={classes.form__label}>
              Password
            </label>
          </div>
        </div>
        <Button text="Sign In" type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};
