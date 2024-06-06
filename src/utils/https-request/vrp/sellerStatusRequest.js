
import { sellerStatusUrl } from "../../../config/vrp/vrpConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const sellerStatusRequest = async () => {
  try {
    const response = await axiosInstance.get(
      sellerStatusUrl,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data.data);

    return response;
  } catch (error) {
    if (axiosInstance.isAxiosError(error)) {
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
