import { requestOtpUrl } from "../../../config/vrp/auth/authConfig";
import axios from "axios";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const otpRequested = async (mobile_no) => {
  try {
    const response = await axiosInstance
      .post(
        requestOtpUrl,
        { mobile_no },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (e.g., network error, 404 Not Found)
      // console.error("Axios error:", error.message);
      throw new Error("Server error");
    } else {
      // Non-Axios error
      // console.error("Non-Axios error:", error.message);
      throw error; // Re-throw the original error
    }
  }
};
