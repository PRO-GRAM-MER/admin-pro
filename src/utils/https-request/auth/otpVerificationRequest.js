import axios from "axios";
import Cookies from "js-cookie";

import { otpVerificationUrl } from "../../../config/vrp/auth/authConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const otpVerificationRequest = async (data) => {
  try {
    console.log(data);
    const response = await axiosInstance.post(
      otpVerificationUrl,
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const authToken = response.data.data.auth_token;
    console.log(authToken);
    Cookies.set("authToken", authToken);

    console.log("Cookie set:", {
      authToken: Cookies.get("authToken"),
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Error("Server error");
    } else {
      // Non-Axios error
      console.error("Non-Axios error:", error.message);
      throw error; // Re-throw the original error
    }
  }
};
