import { resendOtpUrl } from "../../../config/vrp/auth/authConfig";
import axios from "axios";

export const resendOtp = async (mobile_no) => {
  try {
    const response = await axios
      .post(
        resendOtpUrl,
        { mobile_no },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    console.log(response);
    console.log("resend");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (e.g., network error, 404 Not Found)
      console.error("Axios error:", error.message);
      throw new Error("Server error");
    } else {
      // Non-Axios error
      console.error("Non-Axios error:", error.message);
      throw error; // Re-throw the original error
    }
  }
};
