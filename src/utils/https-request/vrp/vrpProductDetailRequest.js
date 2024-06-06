import { vrpProductDetailUrl } from "../../../config/config";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const vrpProductDetailRequest = async ({ requestId }) => {
  try {
    const response = await axiosInstance.get(
      vrpProductDetailUrl(requestId),

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
